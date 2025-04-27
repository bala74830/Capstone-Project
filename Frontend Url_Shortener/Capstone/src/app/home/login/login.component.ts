import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  // Error message for invalid login
  errorMessage: string = '';

  onSubmit() {
    alert('login')
  }

}
