import {Component, inject} from "@angular/core"
import {RouterLink} from "@angular/router";
import {ProductInformationComponent} from "../shared/product-information/product-information.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {HomeQueryService} from "./home-query.service";
import {map} from "rxjs/operators";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [
    RouterLink,
    ProductInformationComponent,
    NgForOf,
    AsyncPipe
  ],
  standalone: true
})
export class HomeComponent {
  private readonly query = inject(HomeQueryService).watch();

  protected readonly products$ = this.query.valueChanges.pipe(
    map(({ data }) => data.homeCategory.products.products)
  )

}

