import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Component
import { FormsComponent } from './forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    data: {
      title: 'Formulir Akta'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
