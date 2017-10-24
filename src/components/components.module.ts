import { NgModule } from '@angular/core';
import { FiltroGeneralComponent } from './filtro-general/filtro-general';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { ItemEstablecimientoComponent } from './establecimiento/item-establecimiento/item-establecimiento';
import { ViewEstablecimientoComponent } from './establecimiento/view-establecimiento/view-establecimiento';
import { ItemHabitacionComponent } from './habitacion/item-habitacion/item-habitacion';
import { ViewHabitacionComponent } from './habitacion/view-habitacion/view-habitacion';
import { InformacionHabitacionComponent } from './habitacion/informacion-habitacion/informacion-habitacion';
import { InformacionTarifasComponent } from './tarifa/informacion-tarifas/informacion-tarifas';
@NgModule({
	declarations: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent,
    ViewEstablecimientoComponent,
    ItemHabitacionComponent,
    ViewHabitacionComponent,
    InformacionHabitacionComponent,
    InformacionTarifasComponent
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
    InformacionHabitacionComponent,
    InformacionTarifasComponent
	]
})
export class ComponentsModule {}
