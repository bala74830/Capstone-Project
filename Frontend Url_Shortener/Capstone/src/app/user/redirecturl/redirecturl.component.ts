import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-redirecturl',
  standalone: false,
  templateUrl: './redirecturl.component.html',
  styleUrl: './redirecturl.component.css'
})
export class RedirecturlComponent {

  shortUrl: string = '';
  redirectUrl: string = '';

  constructor(private redirectservice: ServiceService) {}

  redirectToUrl() {
    if (this.shortUrl) {
      this.redirectservice.redirectUrl(this.shortUrl).subscribe(
        {next:data => {
          this.redirectUrl = data.url;  // Store the redirect URL from the API response
          if (this.redirectUrl) {
            window.open(data.url, '_blank');
            //window.location.href = this.redirectUrl;  // Redirect to the URL received from the API
          } else {
            alert('No redirect URL found in the response.');
          }
      },
      error:error=>{
        alert(error.error.message || 'An unknown error occurred');
      }
    });
    }
    else {
      alert('Please paste a valid Short URL!');
    }
  }

}
