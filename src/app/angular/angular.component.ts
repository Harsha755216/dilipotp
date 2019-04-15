import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

 
  constructor(private ds:ServiceService,private router:Router) { }

  ngOnInit() {
   
  }

  user: String = "";
  pw: String = "";
  onSubmit(data) {
    this.ds.sent(data).subscribe(res => {
    
      if (res[0] != null) {
        alert("login successfull");
        this.router.navigate(['/html']);


      }
      else {
        alert("login failed");
      }
    });
  }
 
}
