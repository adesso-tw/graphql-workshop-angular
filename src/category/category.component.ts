import { Component, type OnInit } from "@angular/core"
import {ActivatedRoute, RouterLink} from "@angular/router"
import {ProductCardComponent} from "../shared/product-card/product-card.component";
import {NgForOf} from "@angular/common";

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface Category {
  id: number
  name: string
  image: string
}

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
  imports: [
    RouterLink,
    ProductCardComponent,
    NgForOf
  ],
  standalone: true
})
export class CategoryComponent implements OnInit {
  categoryId = 0
  categoryName = ""
  products: Product[] = []
  subCategories: Category[] = []

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoryId = +params["id"]
      this.loadCategoryData()
    })
  }

  loadCategoryData() {
    // In a real application, you would fetch this data from a service
    this.categoryName = "Electronics"
    this.products = [
      {
        id: 1,
        name: "Smartphone X",
        description: "Latest model with advanced features",
        price: 799.99,
        image: "/assets/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Laptop Pro",
        description: "Powerful laptop for professionals",
        price: 1299.99,
        image: "/assets/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: "Wireless Earbuds",
        description: "High-quality sound with long battery life",
        price: 149.99,
        image: "/assets/placeholder.svg?height=200&width=200",
      },
      {
        id: 4,
        name: "Smart Watch",
        description: "Stay connected and track your fitness",
        price: 249.99,
        image: "/assets/placeholder.svg?height=200&width=200",
      },
      {
        id: 5,
        name: "Tablet Ultra",
        description: "Versatile tablet for work and entertainment",
        price: 499.99,
        image: "/assets/placeholder.svg?height=200&width=200",
      },
    ]
    this.subCategories = [
      { id: 101, name: "Smartphones", image: "/assets/placeholder.svg?height=100&width=100" },
      { id: 102, name: "Laptops", image: "/assets/placeholder.svg?height=100&width=100" },
      { id: 103, name: "Audio", image: "/assets/placeholder.svg?height=100&width=100" },
      { id: 104, name: "Wearables", image: "/assets/placeholder.svg?height=100&width=100" },
    ]
  }
}

