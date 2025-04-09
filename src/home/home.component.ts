import { Component } from "@angular/core"
import {RouterLink} from "@angular/router";
import {ProductInformationComponent} from "../shared/product-information/product-information.component";
import {NgForOf} from "@angular/common";

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [
    RouterLink,
    ProductInformationComponent,
    NgForOf
  ],
  standalone: true
})
export class HomeComponent {
  products: Product[] = [
    {
      id: 1,
      name: "Smartphone X",
      description:
        "Latest model with advanced features and cutting-edge technology. Experience the future of mobile computing with our most powerful smartphone yet.",
      price: 799.99,
      image: "/assets/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Laptop Pro",
      description:
        "Powerful laptop for professionals. Designed for high-performance computing, perfect for creative professionals and power users.",
      price: 1299.99,
      image: "/assets/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      description:
        "High-quality sound with long battery life. Immerse yourself in crystal-clear audio with our most advanced wireless earbuds.",
      price: 149.99,
      image: "/assets/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Smart Watch",
      description:
        "Stay connected and track your fitness. Monitor your health, receive notifications, and more with this sleek and powerful smartwatch.",
      price: 249.99,
      image: "/assets/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      name: "Tablet Ultra",
      description:
        "Versatile tablet for work and entertainment. The perfect balance of portability and performance for all your digital needs.",
      price: 499.99,
      image: "/assets/placeholder.svg?height=400&width=400",
    },
  ]
}

