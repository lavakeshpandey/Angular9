import { ProductComponent } from './component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
