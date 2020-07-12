import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

import { DatasComponent } from './datas.component';
import { DataRoutingModule } from './data-routing.module';

@NgModule({
  declarations: [ DatasComponent ],
  imports: [
    DataRoutingModule,
    DxDataGridModule
  ]
})
export class DatasModule { }