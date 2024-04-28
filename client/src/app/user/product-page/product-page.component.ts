import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [NgbRatingModule,HttpClientModule,ButtonModule,SliderModule,FormsModule,SecondHeaderComponent,FooterComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  // rating = 8;

  constructor(private http: HttpClient, private router: Router) {}

  allproducts: any = [];

  category: any;
  selectedCategory: string | null = null;

  ngOnInit(): void {
    this.getallproduct();
    this.getUniqueCategories();
  }

  getallproduct(){
    this.http.get('http://localhost:8000/v1/products').subscribe((res:any)=>{
      this.allproducts=res
    })
  }

  redirect(product_id: any) {
    this.router.navigate([`/product_details`, product_id]);
  }

  getUniqueCategories(): void {
    this.http.get("https://dummyjson.com/products").subscribe((res: any) => {
      // Extract unique categories using Set
      const uniqueCategoriesSet = new Set(
        res.products.map((item: any) => item.category)
      );
      // Convert Set back to array
      this.category = Array.from(uniqueCategoriesSet);
    });
  }

  // ===================================

  rangeValues: number[] = [0, 500];
}
