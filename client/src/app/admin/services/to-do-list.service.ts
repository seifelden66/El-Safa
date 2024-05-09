import { Injectable } from "@angular/core";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  constructor() {
    this.loadTasks();
  }

  loadTasks(): void {
    const tasksJson = localStorage.getItem("tasks");
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
      this.idCounter =
        this.tasks.length > 0
          ? Math.max(...this.tasks.map((t) => t.id)) + 1
          : 1;
    }
  }

  saveTasks(): void {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  addTask(title: string): void {
    this.tasks.push({ id: this.idCounter++, title, completed: false });
    this.saveTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
}
