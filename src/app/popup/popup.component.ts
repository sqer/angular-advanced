import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'popup',
  templateUrl: 'popup.component.html'
})
export class PopupComponent {
  @Input() title: string;
  @Input() hideSubmit: boolean = false;
  @Input() hideCancel: boolean = false;

  @Output() okClick = new EventEmitter();
  @Output() cancelClick = new EventEmitter();

  okAction(event) {
    event.preventDefault();
    this.okClick.emit();
  }

  cancelAction(event) {
    event.preventDefault();
    this.cancelClick.emit();
  }
}
