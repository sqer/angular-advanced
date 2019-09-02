import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-user',
  templateUrl: 'new-user.component.html'
})

export class NewUserComponent implements OnInit {

  // inject user service
  constructor() {
  }

  ngOnInit() {
  }

  /**
   * TODO
   *
   * User page should display form with min: name, surname, username
   *
   */

  addUser(): void {
  }
}
