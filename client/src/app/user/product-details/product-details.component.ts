import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../services/cart.service';
import { FirestnavComponent } from '../firestnav/firestnav.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HttpClientModule,NgbRatingModule,TabViewModule,ButtonModule,SecondHeaderComponent,FooterComponent,FirestnavComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  main_img:any
  @Input() id? :any
  
  reternsrc(newsrc:any){
    this.main_img= newsrc
    

  }
  
   product_details : any 
  constructor(private ActivatedRoute : ActivatedRoute,private http :HttpClient,private CartService : CartService,private router :Router){}
  ngOnInit(): void {
    // console.log(this.ActivatedRoute.snapshot.params['id']);
   const product_id = this.ActivatedRoute.snapshot.params['id']
    // console.log(product_id);
    
    this.http.get(`https://dummyjson.com/products/${product_id}`).subscribe((res: any) =>{
      this.product_details = res ;
      this.main_img = this.product_details.thumbnail
    });
    
      
     }


    //  ==================================

    activeIndex: number = 0;

    // =======cart operations==============================
  
    addtocart(product_details:any){
      // console.log(product_details);
      this.CartService.addtocart(product_details)
      // console.log(product_details);
      this.router.navigate([`cart`])
      

    }

 
  }





