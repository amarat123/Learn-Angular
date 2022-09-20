import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmailEditorModule } from 'angular-email-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmailEditorModule
  ],
  providers: [EmailEditorModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
