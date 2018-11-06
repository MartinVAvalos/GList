import * as firebase from 'firebase';



export class AuthService {
  value:string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
  }
  giveUID(){
    firebase.auth().onAuthStateChanged((user)=>{
      this.value=user.toString();
    });
    return this.value;
  }
  
}
