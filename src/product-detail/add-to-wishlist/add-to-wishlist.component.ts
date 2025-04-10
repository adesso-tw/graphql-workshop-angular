import { Component, Input } from "@angular/core"

@Component({
  selector: "app-add-to-wishlist",
  templateUrl: "./add-to-wishlist.component.html",
  styleUrls: ["./add-to-wishlist.component.css"],
  standalone: true
})
export class AddToWishlistComponent {
  @Input() productId = ''
  isInWishlist = false

  addToWishlist() {
    this.isInWishlist = !this.isInWishlist
    console.log(
      `${this.isInWishlist ? "Added" : "Removed"} product ${this.productId} ${this.isInWishlist ? "to" : "from"} wishlist`,
    )
    // Implement actual wishlist logic here
  }
}

