import { Router } from "@angular/router";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private router: Router) {}

  perFormsearch(query: string) {
    this.router.navigate([`/product/search/${query}`]);
  }
}
