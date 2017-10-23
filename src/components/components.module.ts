import { NgModule } from '@angular/core';
import { FiltroGeneralComponent } from './filtro-general/filtro-general';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { ItemEstablecimientoComponent } from './establecimiento/item-establecimiento/item-establecimiento';
import { ViewEstablecimientoComponent } from './establecimiento/view-establecimiento/view-establecimiento';
import { ItemHabitacionComponent } from './habitacion/item-habitacion/item-habitacion';
import { ViewHabitacionComponent } from './habitacion/view-habitacion/view-habitacion';
import { InformacionHabitacionComponent } from './habitacion/informacion-habitacion/informacion-habitacion';
@NgModule({
	declarations: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent,
    ViewEstablecimientoComponent,
    ItemHabitacionComponent,
    ViewHabitacionComponent,
    InformacionHabitacionComponent
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
    ViewHabitacionComponent,
    InformacionHabitacionComponent
	]
})
export class ComponentsModule {}
