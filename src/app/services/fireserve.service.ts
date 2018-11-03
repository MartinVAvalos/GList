import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import { Server } from 'selenium-webdriver/safari';
import {User} from './../models/user.model';
import { database } from 'firebase';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FireserveService {

    constructor(private http: Http) { }

    storeServers(servers: User){
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.put('https://list-86b44.firebaseio.com/data.json', 
      servers, 
      {headers: headers});
    }
    getlist(){

      return this.http.get('https://list-86b44.firebaseio.com/data.json')
      .map(
          (response: Response) => {
            const data = response.json();

            return data;
          }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(console.log(Response));
        }
      );
      
      

    }

  

}
