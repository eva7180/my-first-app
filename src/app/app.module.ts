import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, CustomersModule ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
