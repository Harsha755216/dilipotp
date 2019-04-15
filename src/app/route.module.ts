import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';

import { HtmlComponent } from './html/html.component';
import { AngularComponent } from './angular/angular.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      
      {path:"",component:AngularComponent},
      {path:"angular",component:HtmlComponent,children:[{path:"angular",redirectTo:"/angular"},
    ]},
    {path:"register",component:RegisterComponent}
    
    ])
  ],
  exports:[RouterModule]

})
export class RouteModule { }
