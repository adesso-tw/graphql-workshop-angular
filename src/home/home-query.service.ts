import {Injectable} from "@angular/core";
import {gql, Query} from "apollo-angular";

export interface Product {
  sku: string;
  name: string;
  description: string;
  mainImage: string;
  price: {
    amount: number;
    currency: string;
  }
}
export interface Category {
  products: {
    products: Product[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class HomeQueryService extends Query<{ homeCategory: Category }> {
  document = gql`
    query HomeQuery {
      homeCategory: category(id: 10) {
        products {
          products {
            sku
            name
            description
            mainImage
            price {
              amount
              currency
            }
          }
        }
      }
    }
  `
}
