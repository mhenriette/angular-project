import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const random = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = signal(DUMMY_USERS[random]) 

  get imageUrl() {
    return  computed(()=> '/assets/users/'+ this.selectedUser().avatar)
  } 
    onSelectedUser() {
      const random = Math.floor(Math.random() * DUMMY_USERS.length)
      this.selectedUser.set(DUMMY_USERS[random])
    }

}
 