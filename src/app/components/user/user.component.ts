import { Component, OnInit } from '@angular/core';
import {User} from './../../models/user.model';
import {UserService} from './../../services/user.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FireserveService} from './../../services/fireserve.service';
import {Http} from '@angular/http'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

user:User;
item:string='';
serv: any[];

 
  
  constructor( public u: UserService,private http: HttpClient,private fire:FireserveService ) { 
    this.user=u.user; // takes in the service and adds fields into it
    
    this.serv = [
      {
        name: 'fag face',
        capacity:'20 dicks',
        id: 20
      },
      {
        name:'jose',
        capacity:'50 dicks',
        id:4
      },
      {
        name:'er',
        capacity:'3 pussies',
        id:6
      }

    ]

  }

  ngOnInit() {
    
  }

  addToList(){
    this.user.glist.push(this.item);
  }

  onSave() {
   this.fire.storeServers(this.serv)
    .subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
      );
  }


}
