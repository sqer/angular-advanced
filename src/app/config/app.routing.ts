import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { UserGuard } from '../guard/user.guard';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent, canActivate:[UserGuard]},
  {path: '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
