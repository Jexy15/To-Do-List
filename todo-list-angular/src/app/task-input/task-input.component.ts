import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {

  newTask = '';

  @Output() addTaskEvent = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim() !== '') {
      this.addTaskEvent.emit(this.newTask);
      this.newTask = ''; // Pulisce l'input dopo l'aggiunta del compito
    }
  }

}
