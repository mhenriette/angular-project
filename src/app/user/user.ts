import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) id!: string
  @Input({required: true}) name!: string
  @Input({required: true}) avatar!: string
  @Output() select = new EventEmitter()

  get imageUrl() {
    return '/assets/users/' + this.avatar;
  } 
    onSelectedUser() {
      this.select.emit(this.id)
    }

}
 