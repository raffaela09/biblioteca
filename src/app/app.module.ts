import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginnComponent } from './components/loginn/loginn.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
