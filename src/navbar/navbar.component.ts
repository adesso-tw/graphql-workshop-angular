import { Component } from "@angular/core"
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CurrencyPipe, NgForOf} from "@angular/common";

interface Category {
  id: number
  name: string
}

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  imports: [
    RouterLink,
    RouterLinkActive,
    CurrencyPipe,
    NgForOf
  ],
  standalone: true
})
export class NavbarComponent {
  categories: Category[] = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Home & Garden" },
    { id: 4, name: "Sports & Outdoors" },
  ]

  cartItemCount = 0
  cartTotal = 0

  constructor() {
    // In a real application, you would get this data from a cart service
    this.cartItemCount = 3
    this.cartTotal = 149.97
  }
}

