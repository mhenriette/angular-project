import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserType } from './user.module';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {
  @Input({required: true}) user!: UserType;
  @Input ({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
 

  get imageUrl() {
    return '/assets/users/' + this.user.avatar;
  } 
  onSelectedUser(){
    this.select.emit(this.user.id)
  }
}
 