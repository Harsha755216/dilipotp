import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  n:any[]=[];
  constructor(private ds:ServiceService) { }

  ngOnInit() {
    return this.ds.getdata().subscribe(a=>this.n=a);
  }


}
