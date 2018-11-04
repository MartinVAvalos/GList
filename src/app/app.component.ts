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
        apiKey: "AIzaSyCaLzSfLhWE3huGlGYzkOUjgat39pRvxac",
    authDomain: "list-86b44.firebaseapp.com",
      });
  }

}

