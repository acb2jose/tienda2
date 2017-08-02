import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class AppGeneralService {

constructor(private _http: Http) { }

getService(url: string)
{
 return this._http.get(url).map(res=>res.json());
}

postService(url: string,body)
{
  var _header=new Headers();
      _header.append('Content-Type','application/json');
  return this._http.post(url,body,{headers:_header}).map(res=>res.json());
}

postWithHeadAutentication(url:string,body,autenticationHead)
{
  var _header=new Headers();
      _header.append('Content-Type','application/json');
      _header.append('authorization',autenticationHead); 
      
  return this._http.post(url,body,{headers:_header}).map(res=>res.json());

}

}
