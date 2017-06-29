import { Component, OnInit } from '@angular/core';
import { LoggedUser } from './loggedUser';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    login():LoggedUser{
        // TODO implement function

        

        return null;
    }
}