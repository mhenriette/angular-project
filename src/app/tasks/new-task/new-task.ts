import { Component, EventEmitter, Input, input, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NewTaskData, TaskType } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClose(){
    this.close.emit()
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }

}
