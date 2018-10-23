import { Injectable } from '@angular/core';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private hk:HttpClient) { }

  n:any[];
setdata(data):Observable<any>
{
this.n=data;
return this.hk.post('/angular',this.n);
}
getdata():Observable<any>
{
  return this.hk.get('/html');
}

}
