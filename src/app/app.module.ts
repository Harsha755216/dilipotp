import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { RouteModule } from './/route.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
