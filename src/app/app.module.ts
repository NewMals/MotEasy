import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { EstablecimientoPageModule } from "../pages/establecimiento/establecimiento.module";
import { HabitacionPageModule } from "../pages/habitacion/habitacion.module";
import { MapaPageModule } from "../pages/mapa/mapa.module";
import { LoginPageModule } from "../pages/login/login.module";
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    EstablecimientoPageModule,
    HabitacionPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
