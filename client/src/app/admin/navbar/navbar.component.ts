import { Component, OnInit } from "@angular/core";
import { ToggleSidebarService } from "../services/toggle-sidebar.service";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
  constructor(private ToggleSidebar: ToggleSidebarService) {}

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
}
