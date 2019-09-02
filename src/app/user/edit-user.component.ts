import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from './user';

@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.component.html'
})

export class EditUserComponent implements OnInit, OnDestroy {

  // param from URL
  userId: number;
  sub: any;

  user: User;

  // inject user service
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.user = null;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * TODO
   */

  updateUser(): void {
  }
}
