import { Component, type OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import {BreadcrumbComponent} from "../breadcrumb/breadcrumb.component";
import {ProductImageGalleryComponent} from "./product-image-gallery/product-image-gallery.component";
import {ProductInformationComponent} from "../shared/product-information/product-information.component";
import {ProductRatingComponent} from "./product-rating/product-rating.component";
import {AddToCartComponent} from "./add-to-cart/add-to-cart.component";
import {AddToWishlistComponent} from "./add-to-wishlist/add-to-wishlist.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {RelatedProductsComponent} from "../related-products/related-products.component";

interface BreadcrumbItem {
  label: string
  url: string
}

interface Review {
  id: number
  author: string
  rating: number
  date: string
  content: string
}

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
  imports: [
    BreadcrumbComponent,
    ProductImageGalleryComponent,
    ProductInformationComponent,
    ProductRatingComponent,
    AddToCartComponent,
    AddToWishlistComponent,
    ReviewsComponent,
    RelatedProductsComponent
  ],
  standalone: true
})
export class ProductDetailComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: "Electronics", url: "/category/electronics" },
    { label: "Smartphones", url: "/category/electronics/smartphones" },
    { label: "Example Product", url: "/product/example-product" },
  ]

  product = {
    sku: '1',
    name: "Example Product",
    description: "This is an example product description. It showcases the features and benefits of the product.",
    price: {amount: 9999, currency: "EUR"},
    rating: 4.5,
    images: [
      "/assets/placeholder.svg?height=400&width=400",
      "/assets/placeholder.svg?height=400&width=400",
      "/assets/placeholder.svg?height=400&width=400",
      "/assets/placeholder.svg?height=400&width=400",
    ],
  }

  relatedProducts = [
    {
      id: 2,
      name: "Related Product 1",
      description: "Description for Related Product 1",
      image: "/assets/placeholder.svg?height=150&width=150",
      price: 79.99,
    },
    {
      id: 3,
      name: "Related Product 2",
      description: "Description for Related Product 2",
      image: "/assets/placeholder.svg?height=150&width=150",
      price: 89.99,
    },
    {
      id: 4,
      name: "Related Product 3",
      description: "Description for Related Product 3",
      image: "/assets/placeholder.svg?height=150&width=150",
      price: 69.99,
    },
    {
      id: 5,
      name: "Related Product 4",
      description: "Description for Related Product 4",
      image: "/assets/placeholder.svg?height=150&width=150",
      price: 99.99,
    },
  ]

  reviews: Review[] = [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      date: "2023-05-15",
      content: "Great product! Exactly what I was looking for.",
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 4,
      date: "2023-05-10",
      content: "Good quality, but a bit pricey.",
    },
  ]

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = +params["id"]
      // In a real application, you would fetch the product details based on the ID
      console.log("Product ID:", productId)
    })
  }
}

