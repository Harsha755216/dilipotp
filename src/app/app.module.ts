import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';



import { RouteModule } from './route.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    HtmlComponent,
    RegisterComponent,
   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
