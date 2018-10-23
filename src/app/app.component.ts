import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  n:string[]=[];
  a:string="";
  add(a):void{
    this.a=a;
    this.n.push(a);
    this.a=" ";
  }
  delete(x):void{
    this.n.splice(x,1);
  }
}
