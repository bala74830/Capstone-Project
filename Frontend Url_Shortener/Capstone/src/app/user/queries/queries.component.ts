import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-queries',
  standalone: false,
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.css'
})
export class QueriesComponent {

  showAddQuery: boolean = true;
  newQueryText: string = '';
  queries: any[] = [];

  constructor(private queryService: ServiceService) {}

  ngOnInit(): void {
    this.getQueries();
  }

  
  submitQuery() {
    const userData = localStorage.getItem('userdetails');
      const user = userData ? JSON.parse(userData) : null;
    if (this.newQueryText) {
      this.queryService.generateQuery(this.newQueryText,user.id).subscribe(response => {
        //console.log('Query submitted:', response);
        alert("Query submitted")
        this.newQueryText = ''; // Clear the textarea
        this.getQueries(); // Refresh the queries
      });
    }
  }

  getQueries() {
    const userData = localStorage.getItem('userdetails');
      const user = userData ? JSON.parse(userData) : null;
    this.queryService.getUserQueries(user.id).subscribe(response => {
      this.queries = response;
    });
  }


}
