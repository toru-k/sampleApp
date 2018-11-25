import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../app/pages/list/list.component';
import { DetailComponent } from '../app/pages/detail/detail.component';
import { InputComponent } from '../app/pages/input/input.component';
import { Error404Component } from '../app/pages/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  { path: 'input', component: InputComponent },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
