import { Component, Input } from "@angular/core"

@Component({
  selector: "app-add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.css"],
  standalone: true
})
export class AddToCartComponent {
  @Input() productId = 0
  quantity = 1

  incrementQuantity() {
    this.quantity++
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--
    }
  }

  addToCart() {
    console.log(`Added ${this.quantity} of product ${this.productId} to cart`)
    // Implement actual cart logic here
  }
}

