import { Component, NgModule } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CookieService } from "../../services/cookie.service";
import { NgFor } from "@angular/common";
import { Task, TaskService } from "../services/to-do-list.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-dashbord",
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, NgFor, FormsModule],
  templateUrl: "./dashbord.component.html",
  styleUrls: ["./dashbord.component.css"],
})
export class DashbordComponent {
  newTaskTitle = "";
  tasks: Task[] = [];
  viewDate: Date = new Date();
  events: any[] = []; // You'll need to define the structure of your events

  constructor(private cookie: CookieService, private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit() {
    console.log(this.cookie.get("adminToken"));
    // Here you can load your events
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
}
