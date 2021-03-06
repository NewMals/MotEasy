import { NgModule } from '@angular/core';
import { FiltroGeneralComponent } from './filtro-general/filtro-general';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { ItemEstablecimientoComponent } from './establecimiento/item-establecimiento/item-establecimiento';
import { ViewEstablecimientoComponent } from './establecimiento/view-establecimiento/view-establecimiento';
import { ItemHabitacionComponent } from './habitacion/item-habitacion/item-habitacion';
import { ViewHabitacionComponent } from './habitacion/view-habitacion/view-habitacion';
import { InformacionHabitacionComponent } from './habitacion/informacion-habitacion/informacion-habitacion';
import { InformacionTarifasComponent } from './tarifa/informacion-tarifas/informacion-tarifas';
import { InformacionEntretenimientoComponent } from './entretenimiento/informacion-entretenimiento/informacion-entretenimiento';
import { InformacionComplementosComponent } from './complementos/informacion-complementos/informacion-complementos';
import { PipesModule } from '../pipes/pipes.module';
import { ModalCargandoComponent } from './modal-cargando/modal-cargando';

@NgModule({
	declarations: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent,
    ViewEstablecimientoComponent,
    ItemHabitacionComponent,
    ViewHabitacionComponent,
    InformacionHabitacionComponent,
    InformacionTarifasComponent,
    InformacionEntretenimientoComponent,
    InformacionComplementosComponent,
    ModalCargandoComponent,
    
	],
	imports: [
		IonicModule,
    IonicPageModule,
    PipesModule
	],
	exports: [
		FiltroGeneralComponent,
		ItemEstablecimientoComponent,
    ViewEstablecimientoComponent,
    ItemHabitacionComponent,
    ViewHabitacionComponent,
    InformacionHabitacionComponent,
    InformacionTarifasComponent,
    InformacionEntretenimientoComponent,
    InformacionComplementosComponent,
    ModalCargandoComponent
  ], 
  entryComponents:[
    ModalCargandoComponent
  ]
})
export class ComponentsModule {}
