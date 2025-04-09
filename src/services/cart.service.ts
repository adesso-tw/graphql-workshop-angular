import { Injectable } from "@angular/core"
import { BehaviorSubject, type Observable } from "rxjs"
import { map } from "rxjs/operators"

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  private readonly cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([])

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable()
  }

  addToCart(item: CartItem): void {
    const currentItems = this.cartItems.value
    const existingItem = currentItems.find((i) => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      currentItems.push(item)
    }
    this.cartItems.next(currentItems)
  }

  removeFromCart(itemId: number): void {
    const currentItems = this.cartItems.value
    const updatedItems = currentItems.filter((item) => item.id !== itemId)
    this.cartItems.next(updatedItems)
  }

  updateQuantity(itemId: number, quantity: number): void {
    const currentItems = this.cartItems.value
    const item = currentItems.find((i) => i.id === itemId)
    if (item) {
      item.quantity = quantity
      this.cartItems.next(currentItems)
    }
  }

  clearCart(): void {
    this.cartItems.next([])
  }

  getTotal(): Observable<number> {
    return this.cartItems.pipe(map((items) => items.reduce((total, item) => total + item.price * item.quantity, 0)))
  }
}

