
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: string = '';
  @Output() removeTaskEvent = new EventEmitter<void>();

  removeTask() {
    this.removeTaskEvent.emit();
  }
}
