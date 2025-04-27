import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-generateurl',
  standalone: false,
  templateUrl: './generateurl.component.html',
  styleUrl: './generateurl.component.css'
})
export class GenerateurlComponent {

  longUrl: string = '';
  selectedPlanId: number | null = null;
  userPlans: any[] = [];
  shortUrl: string | null = null;
  user: { id: number } | null = null; 
  customUrlEnabled: boolean = false;
  customUrl: string = '';


  constructor(private urlService: ServiceService) {}

  ngOnInit(): void {
    this.loadUserFromStorage();
    this.loadUserPlans();
  }

  loadUserFromStorage(): void {
    const userData: string | null = localStorage.getItem('userdetails');
    if (!userData) {
      this.showPopup('User not found. Please log in.', undefined, 'error');
      return;
    }
    this.user = JSON.parse(userData);
  }

  

  loadUserPlans(): void {
    if (!this.user) return; 

    this.urlService.getUserPlans(this.user.id).subscribe({
      next: (plans) => {
        this.userPlans = plans.filter(plan => plan.type === 'URL');
      },
      error: (err) => console.error('Failed to load plans', err)
    });
  }

  generateShortUrl(): void {
    if (!this.longUrl || !this.selectedPlanId || !this.user ) {
      
      alert('Please fill in all fields, including the custom URL.');
      return;
    }

    this.urlService.generateShortUrl(this.longUrl, this.user.id,this.selectedPlanId).subscribe({
      next: (res) => {
        this.shortUrl = res.shortUrl;
        this.longUrl = '';
        this.showPopup('Short URL created successfully!', this.shortUrl ?? undefined, 'success');
        this.selectedPlanId = null;
        this.loadUserPlans(); // Refresh remaining URLs
      },
      error: (err) => {
        alert(err.error.message || 'Something went wrong.');
        console.error(err);
      }
    });
  }

  generateCustomShortUrl(): void {
    if (!this.longUrl || !this.selectedPlanId || !this.user || !this.customUrl) {
      
      alert('Please fill in all fields, including the custom URL.');
      return;
    }

    this.urlService.generateCustomShortUrl(this.longUrl, this.user.id,this.selectedPlanId,this.customUrl).subscribe({
      next: (res) => {
        this.shortUrl = res.shortUrl;
        this.longUrl = '';
        this.showPopup('Short URL created successfully!', this.shortUrl ?? undefined, 'success');
        this.selectedPlanId = null;
        this.loadUserPlans(); // Refresh remaining URLs
      },
      error: (err) => {
        alert(err.error.message || 'Something went wrong.');
        console.error(err);
      }
    });
  }

  showPopup(message: string, shortUrl?: string, type: 'success' | 'error' = 'error'): void {
    // Create a background overlay
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
  
    // Create the popup
    const popup = document.createElement('div');
    popup.innerHTML = `
      <div style="margin-bottom: 20px; font-size: 22px;">${message}</div>
      ${shortUrl ? `<div style="font-size: 18px; color: #007BFF; word-break: break-all;">${shortUrl}</div>` : ''}
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
  
    // Close button behavior
    const closeBtn = popup.querySelector('#popup-close-btn') as HTMLButtonElement;
    closeBtn.addEventListener('click', () => {
      popup.remove();
      overlay.remove();
    });
  }
  
  

}
