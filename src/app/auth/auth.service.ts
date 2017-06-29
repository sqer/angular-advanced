import { Injectable } from '@angular/core';
import { LoggedUser } from './loggedUser';

@Injectable()
export class AuthService {

    user: LoggedUser;

    constructor() { }

    logIn(){

    }

    getLoggedUser():LoggedUser{
        return null;
    }

    isLoggedUser(): boolean {
        return false;
    }
}