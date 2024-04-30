import { CartService } from './../services/cart.service';
import { CounterService } from '../services/counter.service';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderListModule } from 'primeng/orderlist';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-firestnav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgbTypeaheadModule,
    FormsModule,
    JsonPipe,
    NgbCarouselModule,
    NgbTypeaheadModule,
    FormsModule,
    NgbCarouselModule,
    ChartModule,
    ButtonModule,
    CardModule,
  FormsModule,
  FontAwesomeModule,
  IconFieldModule,
  InputIconModule,
  HttpClientModule,
  OrderListModule,
  MatMenuModule,
  MatButtonModule
],
  templateUrl: './firestnav.component.html',
  styleUrl: './firestnav.component.css'
})
export class FirestnavComponent {
  constructor(private router : Router ,private http :HttpClient,private CounterService :CounterService,private CartService :CartService){}

  redirect(){
  
    this.router.navigate([`profile`])
  
  }
  
  
  redirect2(){
  
    this.router.navigate([`invoices`])
  
  }
  
  
  
  redirect3(){
  
    this.router.navigate([`login`])
  
  }
  
  
  redirect4(){
    this.router.navigate([`admin`])
  
  }
  
  redirect5(){
    this.router.navigate(['user'])
  }
  
  
  redirect6(){
    this.router.navigate(['login'])
  }
  
  redirect7(){
    this.router.navigate([`cart`])
  }
  
  // =============================
  products: any[] = [];
  categories: string[] = [];
  selectedCategory: string | null = null;
  count:number=0
  
  ngOnInit(): void {
    this.getAllProducts();
    
    this.CartService.getcount().subscribe((res)=>{
      this.count=res
    })
  
  
    // this.CartService.addtocart
  
  
  }
  
  getAllProducts(): void {
    this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
      if (res && res.products && Array.isArray(res.products)) {
        this.products = res.products;
        // Extract unique categories
        this.categories = Array.from(new Set(this.products.map((product: any) => product.category)));
      } else {
        console.error('Failed to retrieve products');
      }
    }, (error) => {
      console.error('Error fetching products:', error);
    });
  }
  
  filterProductsByCategory(category: string): void {
    this.selectedCategory = category;            
  }
  
}