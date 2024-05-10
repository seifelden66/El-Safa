import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],

  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "final_project_iti";
}
