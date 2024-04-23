import { Component, OnInit } from '@angular/core';
import {
  NgbCarouselModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ChartModule } from 'primeng/chart'; // <-- Import ChartModule from PrimeNG
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

type State = { id: number; name: string };

const states = [
  'shose',
  'pens'
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgbTypeaheadModule,
    FormsModule,
    JsonPipe,
    NgbCarouselModule,
    NgbTypeaheadModule,
    FormsModule,
    NgbCarouselModule,
    ChartModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    NgbRatingModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  model: State | null = null;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  formatter = (result: string) => result.toUpperCase();

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term === ''
          ? []
          : states
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );

    // redirect btns
    constructor(private router :Router,private http : HttpClient){}
    redirect(){

      this.router.navigate([`profile`])

    }

    redirect2(){
      this.router.navigate([`invoice`])

      
    }

    redirect3(){
      this.router.navigate([`login`])

      
    }

    redirect4(){
      this.router.navigate([`product`])

      
    }
    //s=======================================
    
    productcenter:any=[]

    ngOnInit(): void {
      this.getallproduct()
    }

    getallproduct(){
      this.http.get('https://dummyjson.com/products').subscribe((res:any)=>{this.productcenter=res.products}
    )

    

    }



}
