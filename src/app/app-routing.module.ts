import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { PicturesComponent } from './pictures/pictures.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'signup' ,component:SignupComponent},
  {path:'login' , component:LoginComponent},
  {path:'forgotpassword' ,component:ForgotComponent},
  {path:'' , redirectTo:'/login',pathMatch:'full'},
  { path: 'gallery', component:PicturesComponent, canActivate:[AuthGuard]},
  {path:'gallery/:filter' , component:HeaderComponent, canActivate:[AuthGuard]},
  {path: 'image/:id',component: DetailpageComponent, canActivate:[AuthGuard]},
  {path:'**',component:ErrorpageComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
