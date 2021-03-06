import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  token;
  constructor(private http : HttpClient) { }

  post(url,data){
    console.log("data in http",data);
    return this.http.post(this.baseUrl + url,data);
  }


  get(url){
    this.token=localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
    this.token = localStorage.getItem('token')
    console.log("getting token ", this.token);
    console.log("options in httpservice ", options);
    return this.http.get<any>(this.baseUrl + url,options);
  }


  postCart(url: string,data: any){
    this.token=localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
    this.token = localStorage.getItem('token')
    console.log("getting token ", this.token);
    console.log(" data in http ", data);
    return this.http.post(this.baseUrl + url , data,options);
  }
  
}
