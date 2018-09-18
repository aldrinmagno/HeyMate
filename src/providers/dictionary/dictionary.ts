import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DictionaryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DictionaryProvider {

  private url:string = "https://raw.githubusercontent.com/aldrinmagno/HeyMate/master/src/assets/files/slangs.json";

  constructor(public httpClient: HttpClient, private http: Http) {
    console.log('Hello DictionaryProvider Provider');
  }
  
  dictionaryContent() {
    return this.http.get(this.url)
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError);
  }

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Service Error");
  }

  private logResponse(res: Response) {
    console.log(res)
  }

  private extractData(res: Response) {
    return res.json();
  }

}
