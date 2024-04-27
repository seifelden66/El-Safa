import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToggleSidebarService {
  private toggleClass = new BehaviorSubject<boolean>(true);
  constructor() {}

  getToggleClassValue() {
    return this.toggleClass.asObservable();
  }
  setToggleClassValue(newstate: boolean) {
    this.toggleClass.next(newstate);
  }
}
