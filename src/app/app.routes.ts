import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

export const routes: Routes = [
  { path: '', component: UserprofileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userprofile', component: UserprofileComponent },

];