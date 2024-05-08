// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ToDoListService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  constructor() { }

  addTask(title: string): void {
    this.tasks.push({ id: this.idCounter++, title, completed: false });
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}