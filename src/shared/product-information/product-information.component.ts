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
    sku: string
    name: string
    description: string
    price: {
      amount: number
      currency: string
    }
  } = {
    sku: '',
    name: "",
    description: "",
    price: {
      amount: 0,
      currency: "EUR",
    },
  }
}

