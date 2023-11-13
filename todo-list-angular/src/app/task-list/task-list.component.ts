import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = [];

  addTask(newTask: string) {
    this.tasks.push(newTask);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
