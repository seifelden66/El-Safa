import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class CategorysService {
  constructor(private http: HttpClient) {}

  getCategorys() {
    return this.http.get("http://localhost:8000/v1/categories");
  }
}
