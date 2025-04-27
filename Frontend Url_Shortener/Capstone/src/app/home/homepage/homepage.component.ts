import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { jwtDecode } from "jwt-decode";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

//   constructor(private router : Router, private fb:FormBuilder, private authservice:AuthService ){}

//   //loginForm!:FormGroup
//   data:any
//  username:any=""
//  password:any=""
//   ngOnInit(){
//     // this.loginForm=this.fb.group({

//     //   username:['',Validators.required],
//     //   password:['',Validators.required]

//     // })
   
//   }

//   // userLogin() {
//   //   if (this.loginForm.valid) {
//   //     this.loginService.doLogin(this.loginForm.value).subscribe({
//   //       next: (response) => {
//   //         console.log("Login successful", response);
//   //         alert("Login successful");
//   //         // this.router.navigate(['dashboard']) // optional
//   //       },
//   //       error: (error) => {
//   //         console.error("Login failed", error);
//   //         alert("Something went wrong");
//   //       }
//   //     });
//   //   } else {
//   //     alert("Please fill all required fields");
//   //   }
//   // }

//   navigateToLogin1() {
//     // this.router.navigate(['/login'], { queryParams: { type: userType } });
//     //this.isLoading=true
//     console.log("Inside ts"+this.username+"   "+this.password);
    
//     this.authservice.login1(this.username,this.password).subscribe(response => {
//       console.log(response);
      
//       localStorage.setItem('token', response.accessToken);
 
//       const token = localStorage.getItem('token');
//       if (token) {
//         const decodedToken: any = jwtDecode(token);
//         var role=decodedToken.role
//         var loginRole = decodedToken[role.authority] || null; // Assuming "role" is in the payload
//         alert('Login Successful' + loginRole);
//         if (loginRole == 'ROLE_ADMIN')
//           this.router.navigate(['/admin/adminvp']);
//         // if (loginRole == 'bank')
//         //   this.router.navigate(['/bank']);
//         // if (loginRole == 'company')
//         //   this.router.navigate(['/company']);
//         //this.isLoading=false
//       }
//       return null;
 
 
//     }, error => {
//       alert('Login Failed');
//     });
//   }

constructor(private router: Router){}

goto(path: string) {
  this.router.navigate([path]);
}

}
