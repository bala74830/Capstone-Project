import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private apiurl="http://localhost:8080/urlapp/plan/view"

  getPlan():Observable<any>{
    return this.http.get(this.apiurl,{params:{
      'pageNumber':0,'pageSize':7
    }})
  }
}
