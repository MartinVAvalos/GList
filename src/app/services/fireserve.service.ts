import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { Server } from 'selenium-webdriver/safari';

@Injectable()
export class FireserveService {

    constructor(private http: Http) { }

    storeServers(servers: any []){
    return this.http.post('https://list-86b44.firebaseio.com/data.json', servers);
    }

  

}
