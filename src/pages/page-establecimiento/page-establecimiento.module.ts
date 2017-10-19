import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageEstablecimientoPage } from './page-establecimiento';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    PageEstablecimientoPage,
  ],
  imports: [
    IonicPageModule.forChild(PageEstablecimientoPage),
    ComponentsModule
  ],
  exports: [
    PageEstablecimientoPage,   
  ] 
})
export class PageEstablecimientoPageModule {}
