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
type State = { id: number; name: string };

const states = [
  'shose',
  'pens'
];

@Component({
  selector: 'app-second-header',
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
  HttpClientModule
],
  templateUrl: './second-header.component.html',
  styleUrl: './second-header.component.css'
})
export class SecondHeaderComponent implements OnInit {
  model: State | null = null;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


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

constructor(private router : Router ,private http :HttpClient){}

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

// =============================
products: any[] = [];
categories: string[] = [];
selectedCategory: string | null = null;


ngOnInit(): void {
  this.getAllProducts();
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

