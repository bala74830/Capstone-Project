import { Component } from '@angular/core';
import { Plan } from '../../model/plan';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewplan',
  standalone: false,
  templateUrl: './viewplan.component.html',
  styleUrl: './viewplan.component.css'
})
export class ViewplanComponent {

  plans: Plan[] = [];
  filterType: 'URL' | 'CLICKS' = 'URL';
  filterText = '';

  constructor(private planService: ServiceService) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    this.planService.getAllPlans(0,8).subscribe({
      next: (res) => this.plans = res.content,
      error: (err) => console.error('Failed to fetch plans', err)
    });
  }

  deletePlan(id: number): void {
    // this.planService.deletePlan(id).subscribe(() => {
    //   this.plans = this.plans.filter(p => p.id !== id);
    // });
    alert("Deleted plan")
  }

  get filteredPlans(): Plan[] {
    return this.plans
      .filter(p => p.type === this.filterType)
      .filter(p => p.planname.toLowerCase().includes(this.filterText.toLowerCase()));
  }

  downloadCSV(): void {
    const headers = ['Plan Name', 'Description', 'Clicks Per URL', 'URL Limit', 'Custom URL Limit', 'Price'];
    const rows = this.filteredPlans.map(p => [
      p.planname,
      `Plan type: ${p.type}`,
      p.clicksperurl,
      p.urllimit,
      p.customurllimit,
      p.price
    ]);
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'plans.csv';
    link.click();
  }

}
