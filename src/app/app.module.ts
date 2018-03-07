import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FilterPipe } from "./pipes/pipes";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
