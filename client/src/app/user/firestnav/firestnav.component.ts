import { CookieService } from './../../services/cookie.service';
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

interface ProductResponse {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  products: Product[];
}

interface Product {
  _id: string;
  name: string;
  short_desc: string;
  desc: string;
  quantity: number;
  // Add any other properties here
} 
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
  constructor(private router : Router ,private http :HttpClient,private CounterService :CounterService,private CartService :CartService,private CookieService :CookieService){}



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
  category: any[] = [];
  usertoken: any;

  ngOnInit(): void {
    
    this.getProduct()
    this.usertoken = this.CookieService.get('userToken')
    // console.log(this.usertoken);
    
  
  }


  getProduct() {
    this.http.get<ProductResponse>('http://localhost:8000/v1/products').subscribe((res) => {
      this.category =res.products
      console.log(res.products);
    });
  }
  

  
}
