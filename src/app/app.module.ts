import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputTextComponent } from './output-text/output-text.component';
import { InputAndButtonComponent } from './input-and-button/input-and-button.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputTextComponent,
    InputAndButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
