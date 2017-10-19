import { NgModule } from '@angular/core';
import { FiltroGeneralComponent } from './filtro-general/filtro-general';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { ItemEstablecimientoComponent } from './item-establecimiento/item-establecimiento';
import { ViewEstablecimientoComponent } from './view-establecimiento/view-establecimiento';
@NgModule({
	declarations: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent,
    ViewEstablecimientoComponent
	],
	imports: [
		IonicModule,
		IonicPageModule
	],
	exports: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent,
    ViewEstablecimientoComponent
	]
})
export class ComponentsModule {}
