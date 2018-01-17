import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './auth/login/index';
import { PageNotFoundComponent } from './not-found.component';
import { RegisterComponent } from './auth/register/index';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{ path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // otherwise page not found
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
