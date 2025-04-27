import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { error } from 'console';

@Component({
  selector: 'app-myurls',
  standalone: false,
  templateUrl: './myurls.component.html',
  styleUrl: './myurls.component.css'
})
export class MyurlsComponent {

  urls: any[] = [];

  constructor(private planService: ServiceService) {}

  ngOnInit(): void {
    this.getUrls();
  }

  getUrls() {
    this.planService.getUrls().subscribe((response: any[]) => {
      this.urls = response; 
    },
    error=>{
      alert(error)
    }
  );
  }

}
