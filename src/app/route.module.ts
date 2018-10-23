import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:"angular",component:AngularComponent},
      {path:"html",component:HtmlComponent}
    
    ])
  ],
  exports:[RouterModule]

})
export class RouteModule { }
