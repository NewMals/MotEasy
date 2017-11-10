import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';

export const firebaseConfig = {
  apiKey: "AIzaSyASR-VQFfepVIDxJz_tLRzK7mrJNz_MtB0",
  authDomain: "mote-e0df6.firebaseapp.com",
  databaseURL: "https://mote-e0df6.firebaseio.com",
  projectId: "mote-e0df6",
  storageBucket: "mote-e0df6.appspot.com",
  messagingSenderId: "1075024717028"
};

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AngularFireDatabase,
    Facebook
  ]
})
export class LoginPageModule {}
