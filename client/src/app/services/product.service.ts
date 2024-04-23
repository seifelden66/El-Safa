import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

  getallproduct() {
    return this.http.get('https://dummyjson.com/products');

}

    getsingleproduct(id:any){
      return this.http.get(`https://dummyjson.com/products/${id}`)
    }
}
