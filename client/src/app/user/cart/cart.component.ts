import { Component, OnInit, inject } from '@angular/core';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SecondHeaderComponent,FooterComponent,CommonModule,NgbRatingModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent implements OnInit {
  count:number = 0

  CartService = inject(CartService)
  
  constructor(private CounterService : CounterService){}

  ngOnInit(): void {

    this.handleCartCount()

  }
  handleCartCount (){
    const temp =this.CartService.getproduct().reduce((prev,curr)=>{
      return prev + curr.quantity
     },0)

    this.CartService.setcount(temp)
  }
 

  delete(item:any){
    this.CartService.delete(item)
    this.handleCartCount()
  }

  increase(){
    this.handleCartCount()

  }


  decrease(itemdata: any) {


    this.handleCartCount()

  }

  


  
}
