import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root', 
  imports: [Header, User, Tasks],
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
  users = DUMMY_USERS

  selectedUserId?: any

  get selectedUser(){
  return  this.users.find(user=> user.id === this.selectedUserId)
  }

  onSelectedUser(id: string){
    this.selectedUserId = id; 
  }

}
