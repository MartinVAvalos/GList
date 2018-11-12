import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';


  ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyCerhBj7GDD8Br-tIQQTO1w6tQJ3xY0RdM",
        authDomain: "shopping-cart-58199.firebaseapp.com"
      });
  }

}
