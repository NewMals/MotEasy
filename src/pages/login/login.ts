import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { Facebook } from "@ionic-native/facebook";
import { AuthProvider } from "../../providers/auth/auth";


@IonicPage({
  name: 'LoginPage'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  displayName;      
/*
  constructor(public navCtrl: NavController
      , public navParams: NavParams
      ,  private afAuth: AngularFireAuth
      , private fb: Facebook
      , private platform: Platform
    ) 
  {
    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        console.log(res);
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

*/

constructor(
  public navCtrl: NavController,  
  private auth: AuthProvider) {
 
}

loginGoogle(){
  this.auth.signInWithGoogle();
}

  signInWithFacebook(){
    this.auth.signInWithFacebook();
  }

  signOut(){
    this.signOut();
  }   
}
