import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-myplans',
  standalone: false,
  templateUrl: './myplans.component.html',
  styleUrl: './myplans.component.css'
})
export class MyplansComponent {

  plans: any[] = [];
  filteredPlans: any[] = [];
  filterTerm: string = '';

  constructor(private planService: ServiceService) {}

  ngOnInit(): void {
    this.fetchPlans();
  }

  fetchPlans(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Proceed with localStorage logic only if running in the browser
      const userData = localStorage.getItem('userdetails');
      const user = userData ? JSON.parse(userData) : null;
      if (user.id) {
        this.planService.getUserPlans(user.id).subscribe(
          {next:data => {
          this.plans = data;
          this.filteredPlans = data;
        },
        error:error=>{
          alert(error.error.message || 'Something went wrong.');
        }
      });
      }
    } else {
      console.error('localStorage is not available in this environment');
    }
  }
  

  filterPlans(): void {
    this.filteredPlans = this.plans.filter(plan =>
      (plan.planname ?? '').toLowerCase().includes(this.filterTerm.toLowerCase())
    );
  }

  downloadCSV(): void {
    const csvRows = [
      ['Sr. No', 'Plan Name','Plan Type', 'Total Url', 'Total Custom Url', 'Total Clicks Per Url'],
      ...this.filteredPlans.map((plan, index) => [
        index + 1,
        plan.planname,
        plan.type,
        plan.urllimit,
        plan.customurllimit,
        plan.clicksperurl,
      ])
    ];
  
    const csvContent = csvRows.map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'plans.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
