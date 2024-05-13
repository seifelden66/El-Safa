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
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import Aos from 'aos'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

type State = { id: number; name: string };

const states = [
  'shose',
  'pens'
];

interface Rating {
  value: number;
  _id: string;
  date: string;
}

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
    NgbRatingModule,
    SecondHeaderComponent,
    FooterComponent,
    FirestnavComponent,
    CarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  model: State | null = null;
  images = [944, 1011, 984].map((n) => `htps://picsum.photos/id/${n}/900/500`);
  // images = [944, 1011, 984].map((n) =>  );

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
    topproduct:any=[]
    averageRatings: { [productId: string]: number } = {};

    ngOnInit(): void {
      this.getallproduct()
      this.getTopproduct()
    }

    getallproduct() {
      this.http.get('http://localhost:8000/v1/products').subscribe((res: any) => {
        this.productcenter = res.products;
        this.averageRatings = this.getAverageRatings(this.productcenter);
        console.log("Average Ratings:", this.averageRatings);
      });
    }
    

  // =================getAverageRatings==============================

  getAverageRatings(products: any[]): { [productId: string]: number } {
    const averageRatings: { [productId: string]: number } = {};

    products.forEach((product: any) => {
        let totalRating = 0;
        let totalRatingsCount = 0;

        product.ratings.forEach((rating: Rating) => {
            totalRating += rating.value;
            totalRatingsCount++;
        });

        if (totalRatingsCount === 0) {
            averageRatings[product._id] = 0; // If no ratings, assign 0
        } else {
            averageRatings[product._id] = totalRating / totalRatingsCount; // Calculate average rating
        }
    });

    return averageRatings;
}



  // ===============getTopproduct=============================

    getTopproduct(){
      this.http.get('http://localhost:8000/v1/products/top-rated').subscribe((res:any)=>{this.topproduct=res;
      console.log(res);
      
    
      }
      // http://localhost:8000/v1/products/top-rated
      
    )
  }



// =================redirectproduct===========================

    redirectproduct(id : string){

      this.router.navigate([`/product_details`,id])

    } 
    



    // ===============Owl carousel================================================

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      autoplay:true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 100,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }


}
