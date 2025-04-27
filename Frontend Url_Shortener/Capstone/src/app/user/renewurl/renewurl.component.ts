import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-renewurl',
  standalone: false,
  templateUrl: './renewurl.component.html',
  styleUrl: './renewurl.component.css'
})
export class RenewurlComponent {

  shortUrl: string = '';
  selectedPlanId: number | null = null;
  userPlans: any[] = [];

  constructor(private apiService: ServiceService) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    const userData = localStorage.getItem('userdetails');
    if (!userData) {
      alert('User not found. Please log in.');
      return;
    }

    const user = JSON.parse(userData);
    this.apiService.getUserPlans(user.id).subscribe({
      next: (plans) => {
        this.userPlans = plans.filter(plan => plan.type === 'CLICKS');
      },
      error: (err) => console.error('Failed to load plans', err)
    });
  }

  renewUrlPlan(): void {
    if (!this.shortUrl || !this.selectedPlanId) {
      alert('Please provide a valid URL and select a plan.');
      return;
    }

    const userData = localStorage.getItem('userdetails');
    if (!userData) {
      alert('User not found. Please log in.');
      return;
    }

    const user = JSON.parse(userData);
    // Call the API to renew the URL based on selected plan
    this.apiService.renewUrl(this.shortUrl, user.id,this.selectedPlanId).subscribe({
      next: (response) => {
        alert('URL successfully renewed!');
        this.shortUrl = '';  // Clear the long URL input
        this.selectedPlanId = null;  // Show success message
      },
      error: (err) => {
        console.error('Failed to renew URL', err);
        alert('Failed to renew URL. Please try again later.');
      }
    });
  }
}
