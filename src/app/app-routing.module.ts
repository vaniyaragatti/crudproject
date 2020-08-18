import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepositoryComponent } from 'src/app/repository/repository.component';

const  routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    },
  {
   path: 'repos/:id',
   component:RepositoryComponent, 
   }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
