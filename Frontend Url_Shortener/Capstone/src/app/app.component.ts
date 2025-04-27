import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShrinkIt';
  constructor(private router: Router){}

  goto(path: string) {
    this.router.navigate([path]);
  }
   jsonData = {
    id: 2,
    username: "bala",
    firstname: "Bala",
    lastname: "Konar",
    email: "b@gmail.com",
    password: "1234"
  };
  jsonString = JSON.stringify(this.jsonData);
  login(){
    localStorage.setItem("userdetails",this.jsonString)
    alert(this.jsonString)
  }
}
