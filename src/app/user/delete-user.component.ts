import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'delete-user',
  templateUrl: 'delete-user.component.html'
})
export class DeleteUserComponent {

  // view popup indicator
  @Input() viewPopup: boolean;

  // user to delete
  @Input() user: User;

  // popup state change event
  @Output() viewPopupChange: EventEmitter<boolean> = new EventEmitter();

  // delete user event
  @Output() deleteUser = new EventEmitter();

  okClick(event): void {
    this.deleteUser.emit(this.user);
    // close dialog
    this.viewPopupChange.emit(false);
  }

  cancelClick(event): void {
    // close dialog
    this.viewPopupChange.emit(false);
  }

}
