import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Tasktype } from './task.module';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: Tasktype
  @Output() complete = new EventEmitter<string>()

  onComplete(){
    this.complete.emit(this.task.id)
  }


}
