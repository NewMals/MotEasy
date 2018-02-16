import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { EstablecimientoPageModule } from "../pages/establecimiento/establecimiento.module";
import { HabitacionPageModule } from "../pages/habitacion/habitacion.module";
import { LoginPageModule } from "../pages/login/login.module";
import { AuthProvider } from "../providers/auth/authService";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { Facebook } from "@ionic-native/facebook";
import { GooglePlus } from "@ionic-native/google-plus";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { HabitacionProvider } from '../providers/habitacion/habitacionService';
import { IonicStorageModule } from '@ionic/storage';

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
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    EstablecimientoPageModule,
    HabitacionPageModule,
    LoginPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    Facebook,
    GooglePlus,
    AuthProvider,
    HabitacionProvider
  ]
})
export class AppModule {}
