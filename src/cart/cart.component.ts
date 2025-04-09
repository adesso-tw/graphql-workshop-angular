import { Component, type OnInit } from "@angular/core"
import  { Observable } from "rxjs"
import  { CartService, CartItem } from "../services/cart.service"
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
  imports: [
    CurrencyPipe,
    AsyncPipe,
    NgForOf,
    FormsModule,
    RouterLink,
    NgIf
  ],
  standalone: true
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>
  total$: Observable<number>
  shippingCountry = ""
  shippingCost = 0

  constructor(private readonly cartService: CartService) {
    this.cartItems$ = this.cartService.getCartItems()
    this.total$ = this.cartService.getTotal()
  }

  ngOnInit(): void {}

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId)
  }

  updateQuantity(itemId: number, quantity: number): void {
    this.cartService.updateQuantity(itemId, quantity)
  }

  calculateShipping(): void {
    // Simplified shipping calculation based on country
    switch (this.shippingCountry.toLowerCase()) {
      case "usa":
        this.shippingCost = 10
        break
      case "canada":
        this.shippingCost = 15
        break
      case "uk":
        this.shippingCost = 20
        break
      default:
        this.shippingCost = 30
    }
  }
}

