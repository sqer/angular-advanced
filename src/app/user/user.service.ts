import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  users: User[] = [];

  constructor() {
  }

  //TODO implement function
  addUser(user) {

  }

  //TODO implement function
  editUser(user, newUser) {

  }

  //TODO implement function
  deleteUser(user) {

  }

  //TODO implement function
  getUsers(): User[] {
    return [];
  }

  // use fetch() to get data from file users.db.json
  // Promise !!
  getUsersFromFile(): User[] {
    return [];
  }

  // use http to get data from rest
  getUsersFromRest() {

  }

}
