import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { ClientSginupComponent } from './signup/client-sginup/client-sginup.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
<<<<<<< HEAD
  path:'clientsignup',
  component: ClientSginupComponent
}

=======
    path: 'clientsignup',
    component: ClientSginupComponent
  },
  {
    path: 'request',
    component: RequestComponent
  }
>>>>>>> 89f77eb8d839bd207a979d969d28569722e23d12
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
