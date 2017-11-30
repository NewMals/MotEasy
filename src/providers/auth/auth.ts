import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { App, Platform, LoadingController, ToastController, NavController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { Facebook } from "@ionic-native/facebook";
import * as firebase from 'firebase/app';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  loading;

  constructor(
    //public http: Http,
    protected app: App,
    private afAuth: AngularFireAuth,
    private fb: Facebook,
    private platform: Platform,
    public loadingCtrl: LoadingController,
    //private googlePlus: GooglePlus,
    public toastCtrl: ToastController
  )
  {
    console.log('Hello AuthProvider Provider');
  

  this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  afAuth.authState.subscribe((user: firebase.User) => {
    if (!user) {
      this.navCtrl.setRoot('LoginPage');
      return;
    }
    this.navCtrl.setRoot('HomePage');
  });
}

get navCtrl(): NavController {
  return this.app.getRootNav();
}

// signInWithGoogle() {
//   this.loading.present();
//   var isWeb = document.URL.startsWith('http');

//   if (!isWeb) {
//     this.googlePlus.login({
//       'webClientId': '737511447093-qehdam08ekkfun0o3rk4asnb3k7k3iau.apps.googleusercontent.com',
//       'offline': true
//     }).then(res => {
//       firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
//         .then(success => {
//           console.log("Firebase success: " + JSON.stringify(success));
//           this.loading.dismiss();
//         }).catch(error => {
//           this.loading.dismiss();
//           console.log("Firebase failure: " + JSON.stringify(error));
//         });
//     });
//   } else {
//     this.afAuth.auth
//       .signInWithPopup(new firebase.auth.GoogleAuthProvider())
//       .then(res => {
//         this.loading.dismiss()
//       }).catch(err => {
//         this.loading.dismiss();
//       });
//   }
// }

signInWithFacebook() {
  this.loading.present();
  if (this.platform.is('cordova')) {
    return this.fb.login(['email', 'public_profile']).then(res => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      this.loading.dismiss();
      return firebase.auth().signInWithCredential(facebookCredential);
    }).catch(err => {
      console.log(err);
      this.loading.dismiss();
      this.presentToast("Error en la autenticación: " + err);
    })
  }
  else {
    this.loading.present();
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.loading.dismiss();;
      }).catch(err => {
        console.log(err);
        this.loading.dismiss();
        this.presentToast("Error en la autenticación: " + err);
        
      });
  }
}

signOut() {
    this.navCtrl.push('LoginPage').then(()=>{
      this.afAuth.auth.signOut().then(()=>{

      }).catch((err)=>{
        console.log("Error logout", err);
      });
    });
}

user(): firebase.User {
  return this.afAuth.auth.currentUser;
}

 presentToast(message: string) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }
}

