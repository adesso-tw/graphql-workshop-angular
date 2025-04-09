import { Component, Input } from "@angular/core"
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: "app-product-information",
  templateUrl: "./product-information.component.html",
  styleUrls: ["./product-information.component.css"],
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  standalone: true
})
export class ProductInformationComponent {
  @Input() product: {
    id: number
    name: string
    description: string
    price: number
  } = {
    id: 0,
    name: "",
    description: "",
    price: 0,
  }
}

