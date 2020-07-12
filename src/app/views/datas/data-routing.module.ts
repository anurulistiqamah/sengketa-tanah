import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Component
import { DatasComponent } from './datas.component';

const routes: Routes = [
  {
    path: '',
    component: DatasComponent,
    data: {
      title: 'Data'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
