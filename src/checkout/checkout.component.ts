import { Component, type OnInit } from "@angular/core"
import {
  FormBuilder,  FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import  { Observable } from "rxjs"
import  { CartService, CartItem } from "../services/cart.service"
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    AsyncPipe,
    CurrencyPipe
  ],
  standalone: true
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup
  cartItems$: Observable<CartItem[]>
  total$: Observable<number>

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cartService: CartService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
      zipCode: ["", Validators.required],
      cardName: ["", Validators.required],
      cardNumber: ["", [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expirationDate: ["", [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ["", [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    })

    this.cartItems$ = this.cartService.getCartItems()
    this.total$ = this.cartService.getTotal()
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log("Order submitted:", this.checkoutForm.value)
      // Here you would typically send the order to your backend
      this.cartService.clearCart()
      // Navigate to a confirmation page
    } else {
      Object.keys(this.checkoutForm.controls).forEach((key) => {
        const control = this.checkoutForm.get(key)
        if (control?.invalid) {
          control.markAsTouched()
        }
      })
    }
  }
}

