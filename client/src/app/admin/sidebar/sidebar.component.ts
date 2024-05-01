import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { ToggleSidebarService } from "../services/toggle-sidebar.service";
@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent implements OnInit {
  toggleClassState!: boolean;

  constructor(private ToggleSidebarComponent: ToggleSidebarService) {}

  ngOnInit() {
    this.ToggleSidebarComponent.getToggleClassValue().subscribe(
      (state: boolean) => {
        this.toggleClassState = state;
      }
    );
  }
}
