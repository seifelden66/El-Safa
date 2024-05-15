import { Component, NgModule } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CookieService } from "../../services/cookie.service";
import { NgFor } from "@angular/common";
import { Task, TaskService } from "../services/to-do-list.service";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashbord",
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    NgFor,
    FormsModule,
    CalendarModule,
  ],
  templateUrl: "./dashbord.component.html",
  styleUrls: ["./dashbord.component.css"],
})
export class DashbordComponent {
  dashboardDetails!: any;
  adminToken!: any;
  newTaskTitle = "";
  tasks: Task[] = [];
  viewDate: Date = new Date();
  events: any[] = [];
  // date: Date;
  constructor(
    private cookie: CookieService,
    private taskService: TaskService,
    private http: HttpClient
  ) {
    this.tasks = this.taskService.getTasks();
    // this.date = new Date();
  }

  ngOnInit() {
    this.adminToken = this.cookie.get("adminToken");
    this.f_dashboardDetails();
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle.trim());
      this.newTaskTitle = "";
      this.tasks = this.taskService.getTasks();
    }
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  // dashboard details
  f_dashboardDetails() {
    this.http
      .get("http://localhost:8000/v1/admin/dashboard-details", {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      })
      .subscribe(
        (res) => {
          

          this.dashboardDetails = res;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
