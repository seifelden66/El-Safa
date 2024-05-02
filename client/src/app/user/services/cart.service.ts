import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private item : any[] = []
  private counter = new BehaviorSubject <number> (0)
  constructor() { }

  addtocart(product_details: any) {
    // Check if the product with the same ID already exists
    const existingProductIndex = this.item.findIndex(item => item.id === product_details.id);

    if (existingProductIndex !== -1) {
        // If the product exists, increase its quantity
        this.item[existingProductIndex].quantity++;
      
    } else {
        // If the product doesn't exist, add it to the cart
        this.item.push({...product_details, quantity: 1});
    }
}

  getproduct(){
    return this.item
  }

  delete(item:any){

    this.item = this.item.filter((i)=>i.id !== item.id) 

  }
  

  increase(id:any){

    let item = this.item.find((item)=> item.id === id)
    // console.log(item);

    if(item.quantity >= 1){
      item.quantity++
    }
  }


  decrease(id:any){
    let item = this.item.find((item)=> item.id === id)
    // console.log(item);
    if(item.quantity > 1){
      item.quantity--
    }
  }


  getcount(){
   return this.counter.asObservable()

  }

  setcount(newvalue:any){
    this.counter.next(newvalue)
  }


}
