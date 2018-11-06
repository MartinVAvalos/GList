import { Component, OnInit } from '@angular/core';
import {User} from './../../models/user.model';
import {UserService} from './../../services/user.service';
import {FireserveService} from './../../services/fireserve.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

user:User;
item:string=''; //temp var
//serv: any[];

 
  
  constructor( public u: UserService,private fire:FireserveService ) { 
    this.user=u.user; // takes in the service and adds fields into it
    //this.onFetch();
  

  }

  ngOnInit() {
    
  }

  addToList(){
    this.user.glist.push(this.item);
  }

  onSave() {
   this.fire.storeServers(this.user)
    .subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
      );
  }
  onFetch(){
    this.fire.getlist()
    .subscribe(
      (servers: User) =>this.user=servers,
      (error)=> console.log(error)
    );
  }


}
