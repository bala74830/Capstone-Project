import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewqueires',
  standalone: false,
  templateUrl: './viewqueires.component.html',
  styleUrl: './viewqueires.component.css'
})
export class ViewqueiresComponent {

  queries: any[] = [];
  filteredQueries: any[] = [];
  currentPage: number = 1;
  rowsPerPage: number = 4;
  totalPages: number = 1;
  pages: number[] = [];
  usernameFilter: string = '';
  firstNameFilter: string = '';
  lastNameFilter: string = '';
  responses: { [key: number]: string } = {};

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.loadQueries();
  }

  loadQueries() {
    this.service.getQueries(this.currentPage - 1, this.rowsPerPage)
      .subscribe(
        (response: any) => {
          //console.log('API Response:', response);
          this.queries = response.content || [];
          this.filteredQueries = [...this.queries];  // Initially no filters applied
          this.totalPages = response.totalpages || 1;
          this.updatePagination();
        },
        (error) => {
          console.error(error);
          this.queries = [];
          this.filteredQueries = [];
          this.totalPages = 1;
        }
      );
  }

  updatePagination() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  applyFiltersAndResetPage() {
    this.currentPage = 1;
    this.filteredQueries = this.applyFilters(this.queries);
    this.totalPages = Math.ceil(this.filteredQueries.length / this.rowsPerPage);
    this.updatePagination();
  }

  // Reset filters and reload all queries
  removeFilters() {
    this.usernameFilter = '';
    this.firstNameFilter = '';
    this.lastNameFilter = '';
    this.filteredQueries = [...this.queries]; // Reset to all queries
    this.totalPages = Math.ceil(this.filteredQueries.length / this.rowsPerPage);
    this.updatePagination();
  }

  // Convert the filtered data into CSV format
  downloadCSV() {
    const csvData = this.convertToCSV(this.filteredQueries);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'queries.csv';
    link.click();
  }

  // Helper method to convert the queries data to CSV format
  convertToCSV(data: any[]) {
    const header = ['Sr. No', 'Username', 'Query', 'Status', 'Response'];
    const rows = data.map((query, index) => [
      index + 1,
      query.username,
      query.queryText,
      query.status,
      '' // The 'Response' column will be left empty for now
    ]);

    const csvContent = [header, ...rows].map(row => row.join(',')).join('\n');
    return csvContent;
  }

  // Submit the response to the backend (not implemented in this example)
  submitResponse(queryId: number) {
    const response = this.responses[queryId];
    alert('Submitted response')
    //console.log('Submitting response for query', queryId, ':', response);
    // You can call the API to submit the response here
  }

  // Pagination Methods
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadQueries();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadQueries();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadQueries();
  }

  changeRowsPerPage() {
    this.currentPage = 1;
    this.loadQueries();
  }

  // Filters data based on input fields
  applyFilters(queries: any[]) {
    let filtered = queries;
    if (this.usernameFilter) {
      filtered = filtered.filter(query => query.username.toLowerCase().includes(this.usernameFilter.toLowerCase()));
    }
    if (this.firstNameFilter) {
      filtered = filtered.filter(query => query.firstname.toLowerCase().includes(this.firstNameFilter.toLowerCase()));
    }
    if (this.lastNameFilter) {
      filtered = filtered.filter(query => query.lastname.toLowerCase().includes(this.lastNameFilter.toLowerCase()));
    }
    return filtered;
  }
  

}
