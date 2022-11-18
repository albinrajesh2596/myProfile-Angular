import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { IntroComponent } from './mycomponents/intro/intro.component';
import { Section1Component } from './mycomponents/section1/section1.component';
import { Section2Component } from './mycomponents/section2/section2.component';
import { FooterComponent } from './mycomponents/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    Section1Component,
    Section2Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
