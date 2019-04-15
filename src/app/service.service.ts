import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private hk: HttpClient) { }
  p: Object;

  sent(data): Observable<any> {
    this.p = data;
    console.log(this.p);
    return this.hk.post('/log-in/stud-log', this.p);
  }

}
