import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';


const routes: Routes = [
  { path: "gallery", component:HeaderComponent },
  {path: "images/:id",component: DetailpageComponent},
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
