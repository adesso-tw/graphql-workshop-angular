import { Component, Input } from "@angular/core"
import {NgForOf} from "@angular/common";

@Component({
  selector: "app-product-rating",
  templateUrl: "./product-rating.component.html",
  styleUrls: ["./product-rating.component.css"],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class ProductRatingComponent {
  @Input() rating = 0
  stars: number[] = [1, 2, 3, 4, 5]
}

