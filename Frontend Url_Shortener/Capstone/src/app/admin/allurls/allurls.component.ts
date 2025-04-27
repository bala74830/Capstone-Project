import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-allurls',
  standalone: false,
  templateUrl: './allurls.component.html',
  styleUrl: './allurls.component.css'
})
export class AllurlsComponent {

  urls: any[] = [];
  filteredUrls: any[] = [];
  currentPage: number = 1;
  rowsPerPage: number = 4;
  totalPages: number = 1;
  pages: number[] = [];
  usernameFilter: string = '';
  shortUrlFilter: string = '';
  actualUrlFilter: string = '';
  isCustomFilter: string = '';

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.loadUrls();
  }

  loadUrls() {
    this.service.getUrls(this.currentPage - 1, this.rowsPerPage)
      .subscribe(
        (response: any) => {
          //console.log('API Response:', response);
          this.urls = response.content || [];  // Extract URLs array
          this.filteredUrls = [...this.urls];  // Initially, no filters are applied
          this.totalPages = response.totalpages;
          this.updatePagination();
        },
        (error) => {
          console.error(error);
          this.urls = [];
          this.filteredUrls = [];
          this.totalPages = 1;
        }
      );
  }

  updatePagination() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Apply filters and reset the page number
   applyFiltersAndResetPage() {
    this.currentPage = 1;  // Reset to page 1 when applying filters
    this.filteredUrls = this.applyFilters(this.urls); // Apply the filter on all users
    this.totalPages = Math.ceil(this.filteredUrls.length / this.rowsPerPage); // Update total pages after filtering
    this.updatePagination();
  }

  // Remove filters and reset page number
  removeFilters() {
    this.usernameFilter = '';
    this.shortUrlFilter = '';
    this.actualUrlFilter = '';
    this.isCustomFilter = '';
    this.filteredUrls = [...this.urls];  // Reset filtered URLs to the full list
    this.totalPages = Math.ceil(this.filteredUrls.length / this.rowsPerPage);
    this.updatePagination();
  }

  // Convert filtered data to CSV format
  downloadCSV() {
    const csvData = this.convertToCSV(this.filteredUrls);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'urls.csv';
    link.click();
  }

  // Convert the filtered data into CSV format
  convertToCSV(data: any[]) {
    const header = ['Username', 'Short URL', 'Actual URL', 'Is Custom', 'Total Clicks'];
    const rows = data.map(url => [
      url.name,
      url.shortCode,
      url.originalUrl,
      url.customUrl,
      url.totalclicks
    ]);
    const csvContent = [header, ...rows].map(row => row.join(',')).join('\n');
    return csvContent;
  }

  // Pagination Methods
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUrls();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUrls();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadUrls();
  }

  changeRowsPerPage() {
    this.currentPage = 1;
    this.loadUrls();
  }

  // Filters data based on input fields
  applyFilters(urls: any[]) {
    let filtered = urls;
    
    if (this.usernameFilter) {
      filtered = filtered.filter(url => url.username.toLowerCase().includes(this.usernameFilter.toLowerCase()));
    }
    if (this.shortUrlFilter) {
      filtered = filtered.filter(url => url.shortUrl.toLowerCase().includes(this.shortUrlFilter.toLowerCase()));
    }
    if (this.actualUrlFilter) {
      filtered = filtered.filter(url => url.actualUrl.toLowerCase().includes(this.actualUrlFilter.toLowerCase()));
    }
    if (this.isCustomFilter) {
      filtered = filtered.filter(url => url.isCustom.toString().toLowerCase().includes(this.isCustomFilter.toLowerCase()));
    }

    return filtered;
  }
}
