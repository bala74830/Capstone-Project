import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-blacklistusers',
  standalone: false,
  templateUrl: './blacklistusers.component.html',
  styleUrl: './blacklistusers.component.css'
})
export class BlacklistusersComponent {

  constructor(private apiservice:ServiceService){}

  users: any[] = [];

ngOnInit(): void {
  this.loadUsers();
}

loadUsers() {
  this.apiservice.getBlockedUsers(0, 10)  // Adjust API call if pagination starts from 0
    .subscribe(
      (response: any) => {
        
        this.users = response.content || [];  // Ensure it's an array
      },
      (error) => {
        console.error(error);
        this.users = [];  // Default to empty array if the API fails
      }
    );
}

activateUser(userId: number): void {
  alert('Activating user ');
  // call activate API if needed
}

}
