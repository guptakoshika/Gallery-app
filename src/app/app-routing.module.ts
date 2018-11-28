import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { PicturesComponent } from './pictures/pictures.component';


const routes: Routes = [
  
  { path: 'gallery', component:PicturesComponent },
  {path:'' , redirectTo:'/gallery',pathMatch:'full'},
  {path:'gallery/:filter' , component:HeaderComponent},
  {path: 'image/:id',component: DetailpageComponent},
  {path:'**',component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
