import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { EstablecimientoPageModule } from "../pages/establecimiento/establecimiento.module";
import { HabitacionPageModule } from "../pages/habitacion/habitacion.module";
import { MapaPageModule } from "../pages/mapa/mapa.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    EstablecimientoPageModule,
    HabitacionPageModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
