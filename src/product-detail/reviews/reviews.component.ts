import { Component, Input } from "@angular/core"
import {ProductRatingComponent} from "../product-rating/product-rating.component";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

interface Review {
  id: number
  author: string
  rating: number
  date: string
  content: string
}

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.css"],
  imports: [
    ProductRatingComponent,
    NgForOf,
    FormsModule
  ],
  standalone: true
})
export class ReviewsComponent {
  @Input() reviews: Review[] = []
  newReview: Review = {
    id: 0,
    author: "",
    rating: 5,
    date: new Date().toISOString().split("T")[0],
    content: "",
  }

  submitReview() {
    if (this.newReview.author && this.newReview.content) {
      this.newReview.id = this.reviews.length + 1
      this.reviews.push({ ...this.newReview })
      this.newReview = {
        id: 0,
        author: "",
        rating: 5,
        date: new Date().toISOString().split("T")[0],
        content: "",
      }
    }
  }
}

