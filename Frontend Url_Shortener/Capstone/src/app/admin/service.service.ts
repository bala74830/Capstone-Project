import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../model/plan';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private getallusers="http://localhost:8080/urlapp/user/getallusers"
  private getallblacklistedusers="http://localhost:8080/urlapp/user/getallblockusers"
  private getallplans='http://localhost:8080/urlapp/plan/view'
  private getallqueries='http://localhost:8080/urlapp/query/view'
  private getallurls='http://localhost:8080/urlapp/generateurl/view'

  getUsers(pageNumber: number, pageSize: number): Observable<any[]> {
    const params = {
      pageNumber,pageSize
    };
    return this.http.get<any[]>(this.getallusers, { params });
  }

  getBlockedUsers(pageNumber: number, pageSize: number): Observable<any[]> {
    const params = {
      pageNumber,pageSize
    };
    return this.http.get<any[]>(this.getallblacklistedusers, { params });
  }

  getAllPlans(pageNumber: number, pageSize: number): Observable<{ content: Plan[] }> {
    const params = {
      pageNumber,pageSize
    };
    return this.http.get<{ content: Plan[] }>(this.getallplans,{params});
  }

  getQueries(pageNumber: number, pageSize: number): Observable<any> {
    const params = {
      pageNumber,pageSize
    };
    return this.http.get<any>(this.getallqueries, { params });
  }

  getUrls(pageNumber: number, pageSize: number): Observable<any> {
    const params = {
      pageNumber,pageSize
    };
    return this.http.get<any>(this.getallurls, { params });
  }

}
