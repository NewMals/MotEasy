import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablecimientoPage } from './establecimiento';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    EstablecimientoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablecimientoPage),
    ComponentsModule
  ],
  exports: [
    EstablecimientoPage,   
  ] 
})
export class EstablecimientoPageModule {}
