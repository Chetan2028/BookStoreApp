import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

  registerUser(data){
    console.log("Data in User service",data);
    return this.httpService.post('User/Register',data); 
  }

  loginUser(data){
    console.log("Data in User Service",data);
    return this.httpService.post('User/Login',data);
  }
}
