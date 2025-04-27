import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private apiurl="http://localhost:8080/urlapp/plan/view"
  private buyurl = 'http://localhost:8080/urlapp/buyplan/buy'
  private shorturl = "http://localhost:8080/urlapp/generateurl/short"
  private customShortUrl = 'http://localhost:8080/urlapp/generateurl/customshort'
  private myurls='http://localhost:8080/urlapp/urlclick/getall'
  private queryurl ='http://localhost:8080/urlapp/query/assign'
  private renewurl ='http://localhost:8080/urlapp/generateurl/renew'

  getPlan():Observable<any>{
    return this.http.get(this.apiurl,{params:{
      'pageNumber':0,'pageSize':10
    }})
  }

  buyPlans(data: any): Observable<any> {
    return this.http.post(this.buyurl, data, {});
  }

  getUserPlans(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/urlapp/buyplan/viewplan/${userId}`);
  }

  generateShortUrl(originalUrl: string,userId: number ,planid: number): Observable<any> {
    const payload = { originalUrl, userId,planid };
    return this.http.post<any>(this.shorturl, payload);
  }

  generateCustomShortUrl(originalUrl: string,userId: number ,planid: number,customUrl:string): Observable<any> {
    const payload = { originalUrl, userId,planid ,customUrl};
    return this.http.post<any>(this.customShortUrl, payload);
  }

  getUrls(): Observable<any[]> {
    return this.http.get<any[]>(this.myurls); 
  }

  redirectUrl(url: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/urlapp/urlclick/${url}`);
  }

  generateQuery(queryText: string,userid: number ): Observable<any> {
    const payload = { queryText, userid };
    return this.http.post<any>(this.queryurl, payload);
  }

  getUserQueries(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/urlapp/query/getallquery/${userId}`);
  }
  
  renewUrl(shorturl: string,userId: number ,planid:number): Observable<any> {
    const payload = { shorturl, userId, planid};
    return this.http.post<any>(this.renewurl, payload);
  }
}
