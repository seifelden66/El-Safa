import { CartService } from './../services/cart.service';
import { Component, inject } from '@angular/core';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';
import { TableModule } from "primeng/table";

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [FirestnavComponent,SecondHeaderComponent, FooterComponent,TableModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  CartService = inject(CartService)


}
