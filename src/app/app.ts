import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
  users = DUMMY_USERS

  selectdUser = '';

  getSelectdUser(id: string){
    this.selectdUser = this.users.find(user=> user.id === id)?.name!
  }
}
