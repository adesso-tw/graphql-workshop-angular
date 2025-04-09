import { Component, Input } from "@angular/core"
import {NgForOf, NgIf} from "@angular/common";

interface BreadcrumbItem {
  label: string
  url: string
}

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.css"],
  imports: [
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = []
}

