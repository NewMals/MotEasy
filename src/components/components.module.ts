import { NgModule } from '@angular/core';
import { FiltroGeneralComponent } from './filtro-general/filtro-general';
import { IonicModule } from "ionic-angular";
import { ItemEstablecimientoComponent } from './item-establecimiento/item-establecimiento';
@NgModule({
	declarations: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent
	]
})
export class ComponentsModule {}
