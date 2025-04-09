import { Component, Input } from "@angular/core"
import {NgForOf} from "@angular/common";
import {ProductCardComponent} from "../shared/product-card/product-card.component";

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

@Component({
  selector: "app-related-products",
  templateUrl: "./related-products.component.html",
  styleUrls: ["./related-products.component.css"],
  imports: [
    NgForOf,
    ProductCardComponent
  ],
  standalone: true
})
export class RelatedProductsComponent {
  @Input() relatedProducts: Product[] = []
}

