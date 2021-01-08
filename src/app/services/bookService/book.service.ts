import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService : HttpService) { }

  getBook(){
    return this.httpService.get('Product/GetProducts');
  }

  cartItems(){
    return this.httpService.get('Cart/GetCartItems');
  }

  addcart(book){
    return this.httpService.postCart('Cart/AddCart',book);
  }

  removeItem(num){
    return this.httpService.postCart('Cart/RemoveCartItem?productId='+num,{});
  }

}
