import { Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {CategoryComponent} from "../category/category.component";
import {CartComponent} from "../cart/cart.component";
import {CheckoutComponent} from "../checkout/checkout.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "category/:id", component: CategoryComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "**", redirectTo: "" },
];
