import { Component, OnInit, Input } from '@angular/core';
import {User} from './../../models/user.model';
import {UserService} from './../../services/user.service';
import {FireserveService} from './../../services/fireserve.service';
import{AuthService} from '../auth/auth.service'
import {Router} from '@angular/router'


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

 
  
  constructor( public u: UserService,
    private fire:FireserveService,
    private ServiceToLoggout: AuthService,
    private ru:Router 
    
    ) { 
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
 logout(){
  this.ServiceToLoggout.set_uid();
    this.ru.navigate(['/signin']);
 }

}
