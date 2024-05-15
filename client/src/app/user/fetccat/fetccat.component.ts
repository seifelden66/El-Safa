import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-fetccat',
  standalone: true,
  imports: [SecondHeaderComponent,FirestnavComponent,FooterComponent],
  templateUrl: './fetccat.component.html',
  styleUrl: './fetccat.component.css'
})
export class FetccatComponent implements OnInit {
  productcat!:any
  products!:any

    constructor(private ActivatedRoute : ActivatedRoute, private http : HttpClient){}
  ngOnInit(): void {
    this.productcat = this.ActivatedRoute.snapshot.params['cat']
    // console.log(this.ActivatedRoute.snapshot.params['cat']);
    this.fetchcat()
    
  }

  fetchcat(){
    this.http.get(`http://localhost:8000/v1/products?page=1&category=${this.productcat}`).subscribe((res:any)=>{
      this.products = res
      console.log(res);   
    })
  }

}
