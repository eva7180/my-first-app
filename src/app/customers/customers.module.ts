import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  providers: [],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
