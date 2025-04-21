import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrl="http://localhost:8080/bankapp"

  login1(username:any,password:any): Observable<any> {
    console.log(username+"  "+password);
    
    return this.http.post(`${this.apiUrl}/login`, {username,password}); //{ userType, username, password });
    }
}
