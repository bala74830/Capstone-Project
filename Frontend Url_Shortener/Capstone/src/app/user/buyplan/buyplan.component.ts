import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-buyplan',
  standalone: false,
  templateUrl: './buyplan.component.html',
  styleUrl: './buyplan.component.css'
})
export class BuyplanComponent {


constructor(private planservice: ServiceService){}


  allPlans: any[] = [];
  selectedPlans: any[] = [];
  urlPlans: any[] = [];
  clickPlans: any[] = [];
  showCheckout: boolean = false;
  activeTab: 'url' | 'click' = 'url';
  purchaseMessage: string = '';
  showMessagePopup: boolean = false;
  purchasedPlanIds: number[] = [];

  ngOnInit(){
    this.getAllPlans();
    
  }

  getAllPlans(){
    this.planservice.getPlan().subscribe({
      next: (response) => {
        console.log(response)
        this.allPlans = response.content;
        this.urlPlans = this.allPlans.filter(p => p.type === 'URL');
        this.clickPlans = this.allPlans.filter(p => p.type === 'CLICKS');
      },
      error: (error) => {
        console.error(error);
        alert("Something went wrong while fetching plans.");
      }
    });
  }
  togglePlan(plan: any) {
    if (this.isPurchased(plan.id)) return;

    const index = this.selectedPlans.findIndex(p => p.id === plan.id);
    if (index > -1) {
      this.selectedPlans.splice(index, 1);
    } else {
      this.selectedPlans.push(plan);
    }
  }
  isSelected(plan: any): boolean {
    return this.selectedPlans.some(p => p.id === plan.id);
  }

  getTotalAmount(): number {
    return this.selectedPlans.reduce((sum, p) => sum + p.price, 0);
  }

  proceedToCheckout() {
    if (this.selectedPlans.length === 0) {
      alert('Please select at least one plan.');
      return;
    }
    this.showCheckout = true;
  }

  closeCheckout() {
    this.showCheckout = false;
  }

  buyPlans() {
    const userData = localStorage.getItem('userdetails');
    if (!userData) {
      this.showPopup('User not found. Please log in.');
      return;
    }

    const user = JSON.parse(userData);
    const payload = {
      userId: user.id,
      planIds: this.selectedPlans.map(p => p.id)
    };

    this.planservice.buyPlans(payload).subscribe({
      next: () => {
        this.purchasedPlanIds.push(...this.selectedPlans.map(p => p.id));
        this.selectedPlans = [];
        this.showCheckout = false;
        this.showPopup('Plans purchased successfully!');
        alert('Plans purchased successfully!');
      },
      error: (err) => {
        console.error(err);
        alert(err.error.message || 'Something went wrong.');
      }
    });
  
  }
  showPopup(message: string) {
    this.purchaseMessage = message;
    this.showMessagePopup = true;
    setTimeout(() => this.showMessagePopup = false, 3000);
  }
  isPurchased(planId: number): boolean {
    return this.purchasedPlanIds.includes(planId);
  }
  
 
}
