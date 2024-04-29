import { Component, OnInit, inject } from '@angular/core';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SecondHeaderComponent,FooterComponent,CommonModule,NgbRatingModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  animations: [
    trigger('deleteAnimation', [
      state('clicked', style({
        transform: 'scale(1.1)',
        opacity: 0
      })),
      transition('* => clicked', [
        animate('0.5s')
      ])
    ])
  ]
})


export class CartComponent implements OnInit {
  count:number = 0
  totalP:number=0
  CartService = inject(CartService)
  
  constructor(private CounterService : CounterService){}

  ngOnInit(): void {

    this.handleCartCount()

    this.totalprice()

  }
  handleCartCount (){
    const temp =this.CartService.getproduct().reduce((prev,curr)=>{
      return prev + curr.quantity
     },0)

    this.CartService.setcount(temp)
  }
 
  isClicked: boolean = false;

  delete(item:any){
    this.CartService.delete(item)
    this.handleCartCount()
    this.totalprice()
  }


  increase(){
    this.handleCartCount()
    this.totalprice()


  }


  decrease() {


    this.handleCartCount()
    this.totalprice()

  }

  totalprice(){
    this.totalP = this.CartService.getproduct().reduce((total,item)=>{
      return total+(item.price*item.quantity)
    },0)
  }

  // ================delet animations=============================



}
  


  

