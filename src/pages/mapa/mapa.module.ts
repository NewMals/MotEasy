import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaPage } from './mapa';
import { ComponentsModule } from "../../components/components.module";
import { GoogleMaps } from "@ionic-native/google-maps";
import { MapaProvider } from '../../providers/mapa/mapaService';

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
    MapaProvider,
    GoogleMaps
  ]
})
export class MapaPageModule {}
