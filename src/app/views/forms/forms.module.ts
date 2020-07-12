import { NgModule } from '@angular/core';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxAutocompleteModule } from 'devextreme-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormsComponent } from './forms.component';
import { FormRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [ FormsComponent ],
  imports: [
    FormRoutingModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxFormModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormModule { }