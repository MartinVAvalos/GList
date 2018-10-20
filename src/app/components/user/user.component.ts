import { Component, OnInit } from '@angular/core';
import {User} from './../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

user:User;
item:string='';

 
  
  constructor() { 

    this.user ={
    
      glist: [
        'milk',
        'cookies',
        'meat'

      ]

    }

  }

  ngOnInit() {
    
  }

  addToList(){
    this.user.glist.push(this.item);
  }

}
