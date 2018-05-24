import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {MetasComponent} from '../app/metas/metas.component';
import {LizComponent} from '../app/liz/liz.component';

const routes: Routes = [
 {
  path: '',
  component: HomeComponent
},
{
  path: 'metas/:id',
  component: MetasComponent
},
{
  path: 'liz/:id1/:id2',
  component: LizComponent
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

