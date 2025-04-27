import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-getallusers',
  standalone: false,
  templateUrl: './getallusers.component.html',
  styleUrl: './getallusers.component.css'
})
export class GetallusersComponent {

  users: any[] = [];            // Store all users here
  filteredUsers: any[] = [];    // Store filtered users (to be applied later)
  currentPage: number = 1;
  rowsPerPage: number = 4;
  usernameFilter: string = '';
  firstNameFilter: string = '';
  lastNameFilter: string = '';
  pages: number[] = [];
  totalPages: number = 1;
  showPlanModal: boolean = false;
  selectedUserPlan: string = '';
  selectedUserUsername: string = '';
  selectedUserPlans: string[] = [];

  constructor(private userService: ServiceService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Load users from the API
  loadUsers() {
    this.userService.getUsers(this.currentPage - 1, this.rowsPerPage)  // Adjust API call if pagination starts from 0
      .subscribe(
        (response: any) => {
          //console.log('API Response:', response);  // Log the response to check its structure
          
          // Extract users from the response.content array
          this.users = response.content || [];  // Ensure it's an array
          this.filteredUsers = [...this.users];  // Initialize filteredUsers with all users initially
          this.totalPages = response.totalpages;  // Set the total pages from the API response
          this.updatePagination();
        },
        (error) => {
          console.error(error);
          this.users = [];  // Default to empty array if the API fails
          this.filteredUsers = [];
          this.totalPages = 1;
        }
      );
  }

  // Update pagination controls
  updatePagination() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Apply filters and reset the page number
  applyFiltersAndResetPage() {
    this.currentPage = 1;
    this.filteredUsers = this.applyFilters(this.users); // Apply the filter on all users
    this.totalPages = Math.ceil(this.filteredUsers.length / this.rowsPerPage);
    this.updatePagination();
  }

  // Remove filters and reset page number
  removeFilters() {
    this.usernameFilter = '';
    this.firstNameFilter = '';
    this.lastNameFilter = '';
    this.filteredUsers = this.applyFilters(this.users); // Apply the filter on all users
    this.totalPages = Math.ceil(this.filteredUsers.length / this.rowsPerPage);
    this.updatePagination();
  }

  // Convert filtered data to CSV format
  downloadCSV() {
    const csvData = this.convertToCSV(this.filteredUsers);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'users.csv';
    link.click();
  }

  // Convert the filtered data into CSV format
  convertToCSV(data: any[]) {
    const header = ['Username', 'First Name', 'Last Name', 'Total Revenue'];
    const rows = data.map(user => [
      user.username,
      user.firstname,
      user.lastname,
      user.totalRevenue || 'N/A'
    ]);
    const csvContent = [header, ...rows].map(row => row.join(',')).join('\n');
    return csvContent;
  }

  // Pagination methods
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }

  changeRowsPerPage() {
    this.currentPage = 1;
    this.loadUsers();
  }

  // View Plans modal
  viewPlans(index: number) {
    // const user = this.users.find(u => u.username === username);
    // this.selectedUserPlan = user ? user.planName : '';
    // this.selectedUserUsername = username;
    // this.showPlanModal = true;
    const user = this.filteredUsers[index];
    this.showPopupByIdAndList(user.id, user.userPlans, 'Plans');
  }

  // View URLs modal
  viewUrls(index: number) {
    // const user = this.users.find(u => u.username === username);
    // this.selectedUserPlan = user ? user.planName : '';
    // this.showPlanModal = true;
    const user = this.filteredUsers[index];
  this.showPopupByIdAndList(user.id, user.shortUrls, 'Short URLs');
  }

  // Toggle activate status of user
  deactivateUser(username: string) {
    const user = this.users.find(u => u.username === username);
    if (user) {
      user.isblacklist = !user.isblacklist; // Toggle active status (in your case, blacklist flag)
    }
  }

  toggleActivate(user: any) {
    user.isblacklist = !user.isblacklist;
  }

  closeModal() {
    this.showPlanModal = false;
  }

  // Filters data based on input fields
  applyFilters(users: any[]) {
    let filtered = users;
    if (this.usernameFilter) {
      filtered = filtered.filter(user => user.username.toLowerCase().includes(this.usernameFilter.toLowerCase()));
    }
    if (this.firstNameFilter) {
      filtered = filtered.filter(user => user.firstname.toLowerCase().includes(this.firstNameFilter.toLowerCase()));
    }
    if (this.lastNameFilter) {
      filtered = filtered.filter(user => user.lastname.toLowerCase().includes(this.lastNameFilter.toLowerCase()));
    }
    return filtered;
  }

  showPopupByIdAndList(id: number, items: string[], title: string = 'Items'): void {
    // Create background overlay
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(5px)',
      zIndex: '999'
    });
  
    // Create list HTML
    const listHTML = items.length
      ? `<ul style="list-style-type: none; padding: 0; margin-top: 10px;">${items.map(item => `<li>${item}</li>`).join('')}</ul>`
      : `<div style="margin-top: 10px;"><em>No ${title.toLowerCase()} available.</em></div>`;
  
    // Create popup
    const popup = document.createElement('div');
    popup.innerHTML = `
      <div style="margin-bottom: 20px; font-size: 22px;">${title}</div>
      ${listHTML}
      <button id="popup-close-btn" style="
        margin-top: 25px;
        background: #007BFF;
        color: #ffffff;
        border: none;
        padding: 12px 24px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        font-size: 18px;
      ">Close</button>
    `;
  
    Object.assign(popup.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ffffff',
      color: '#007BFF',
      padding: '40px 60px',
      borderRadius: '16px',
      zIndex: '1000',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
      fontWeight: 'bold',
      maxWidth: '600px',
      textAlign: 'center',
      fontSize: '18px',
    });
  
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
  
    const closeBtn = popup.querySelector('#popup-close-btn') as HTMLButtonElement;
    closeBtn.addEventListener('click', () => {
      popup.remove();
      overlay.remove();
    });
  }
  

}
