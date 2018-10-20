import { Component, OnInit } from '@angular/core';
import {User} from './../../models/user.model';
import {UserService} from './../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

user:User;
item:string='';

 
  
  constructor( public u: UserService) { 
    this.user=u.user; // takes in the service and adds fields into it
    


  }

  ngOnInit() {
    
  }

  addToList(){
    this.user.glist.push(this.item);
  }



}
