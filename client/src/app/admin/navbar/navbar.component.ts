import { CookieService } from "./../../services/cookie.service";
import { Component, OnInit } from "@angular/core";
import { ToggleSidebarService } from "../services/toggle-sidebar.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
  constructor(
    private ToggleSidebar: ToggleSidebarService,
    private CookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  state!: boolean;
  toggleSideBarFunction() {
    this.ToggleSidebar.getToggleClassValue().subscribe((res: boolean) => {
      this.state = res;
    });
    this.ToggleSidebar.setToggleClassValue(!this.state);
  }

  isNavbarCollapsed = true;
  isDropdownOpen: any = {
    navbarDropdown: false,
    navbarDropdown1: false,
  };

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleDropdown(dropdownId: string) {
    this.isDropdownOpen[dropdownId] = !this.isDropdownOpen[dropdownId];
  }
  logout() {
    this.CookieService.remove("adminToken");
    this.router.navigate(["/login"]);
  }
}
