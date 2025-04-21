import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private apiurl="http://localhost:8080/urlapp/plan/view"
  private buyurl = 'http://localhost:8080/urlapp/buyplan/buy';
  private shorturl = 'http://localhost:8080/urlapp/generateurl/short'
  private redirecturl = "http://localhost:8080/urlapp/generateurl/"

  getPlan():Observable<any>{
    return this.http.get(this.apiurl,{params:{
      'pageNumber':0,'pageSize':10
    }})
  }

  buyPlans(data: any): Observable<any> {
    return this.http.post(this.buyurl, data, {});
  }

  getUserPlans(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/user/${userId}/plans`);
  }

  generateShortUrl(longUrl: string, planId: number): Observable<any> {
    const payload = { longUrl, planId };
    return this.http.post<any>('/api/shorten', payload);
  }
  
}
