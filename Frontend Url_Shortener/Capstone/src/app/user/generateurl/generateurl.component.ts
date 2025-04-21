import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

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

  constructor(private urlService: ServiceService) {}

  ngOnInit(): void {
    this.loadUserPlans();
  }

  

  loadUserPlans(): void {
    const userData = localStorage.getItem('userdetails');
    if (!userData) {
      this.showPopup('User not found. Please log in.', undefined, 'error');
      return;
    }

    const user = JSON.parse(userData);

    this.urlService.getUserPlans(user.id).subscribe({
      next: (plans) => this.userPlans = plans,
      error: (err) => console.error('Failed to load plans', err)
    });
  }

  generateShortUrl(): void {
    if (!this.longUrl || !this.selectedPlanId) return;

    this.urlService.generateShortUrl(this.longUrl, this.selectedPlanId).subscribe({
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
    const popup = document.createElement('div');
  
    // Main content
    popup.innerHTML = `
      <div style="margin-bottom: 10px;">${message}</div>
      ${shortUrl ? `<div><a href="${shortUrl}" target="_blank" style="color: #fff; text-decoration: underline;">${shortUrl}</a></div>` : ''}
      <button id="popup-close-btn" style="
        margin-top: 12px;
        background: #ffffff;
        color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        border: none;
        padding: 6px 12px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
      ">Cancel</button>
    `;
  
    const backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
  
    Object.assign(popup.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor,
      color: 'white',
      padding: '15px 20px',
      borderRadius: '8px',
      zIndex: '1000',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      fontWeight: 'bold',
      maxWidth: '300px'
    });
  
    document.body.appendChild(popup);
  
    // Add Cancel button click handler
    const closeBtn = popup.querySelector('#popup-close-btn') as HTMLButtonElement;
    closeBtn.addEventListener('click', () => {
      popup.remove();
    });
  }
  

}
