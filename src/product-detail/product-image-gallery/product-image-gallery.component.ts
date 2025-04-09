import { Component, Input } from "@angular/core"
import {NgForOf} from "@angular/common";

@Component({
  selector: "app-product-image-gallery",
  templateUrl: "./product-image-gallery.component.html",
  styleUrls: ["./product-image-gallery.component.css"],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class ProductImageGalleryComponent {
  @Input() images: string[] = []
  selectedImage = ""

  ngOnInit() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0]
    }
  }

  selectImage(image: string) {
    this.selectedImage = image
  }
}

