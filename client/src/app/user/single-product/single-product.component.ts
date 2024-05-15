import { Component } from "@angular/core";

@Component({
  selector: "app-single-product",
  standalone: true,
  imports: [],
  templateUrl: "./single-product.component.html",
  styleUrl: "./single-product.component.css",
})
export class SingleProductComponent {
  minPrice: number = 50;
  maxPrice: number = 200;
  currentPrice: number = 125;

  updateRangeValue(value: number): void {
    this.currentPrice = value;
  }

  filterResults(): void {
    alert(`Filtering results with price range: $50 - $${this.currentPrice}`);
  }
}
