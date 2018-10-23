import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  data:any[]=[];
  constructor(private ds:ServiceService) { }

  ngOnInit() {
   
  }

  submit(data:any[])
  {
    this.ds.setdata(data).subscribe(r=>
      {
        alert(r);
      })
  }
 
}
