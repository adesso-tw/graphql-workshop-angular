import { Component, Input } from "@angular/core"
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  standalone: true
})
export class ProductCardComponent {
  @Input() product: {
    id: number
    name: string
    description: string
    price: number
    image: string
  } = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    image: "",
  }
}

