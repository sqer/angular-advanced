import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    // inject user service
    constructor() { }

    ngOnInit() { }

    /**
     * TODO 
     * 
     * User page should display table (use advanced-table component) with users data (use UserService)
     * 
     */
}