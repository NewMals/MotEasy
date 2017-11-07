import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaPage } from './mapa';
import { ComponentsModule } from "../../components/components.module";
import { GoogleMaps } from "@ionic-native/google-maps";

@NgModule({
  declarations: [
    MapaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaPage),
    ComponentsModule
  ],
  exports: [
    MapaPage,
  ],
  providers: [
    GoogleMaps
  ]
})
export class MapaPageModule {}
