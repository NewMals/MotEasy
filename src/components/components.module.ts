import { NgModule } from '@angular/core';
import { FiltroGeneralComponent } from './filtro-general/filtro-general';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { ItemEstablecimientoComponent } from './item-establecimiento/item-establecimiento';
import { ViewEstablecimientoComponent } from './view-establecimiento/view-establecimiento';
import { ItemHabitacionComponent } from './item-habitacion/item-habitacion';
import { ViewHabitacionComponent } from './view-habitacion/view-habitacion';
@NgModule({
	declarations: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent,
    ViewEstablecimientoComponent,
    ItemHabitacionComponent,
    ViewHabitacionComponent
	],
	imports: [
		IonicModule,
		IonicPageModule
	],
	exports: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent,
    ViewEstablecimientoComponent,
    ItemHabitacionComponent,
    ViewHabitacionComponent
	]
})
export class ComponentsModule {}
