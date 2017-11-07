import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitacionPage } from './habitacion';
import { ComponentsModule } from "../../components/components.module";
import { MapaPageModule } from "../mapa/mapa.module";

@NgModule({
  declarations: [
    HabitacionPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitacionPage),
    ComponentsModule,
    MapaPageModule
  ],
})
export class HabitacionPageModule {}
