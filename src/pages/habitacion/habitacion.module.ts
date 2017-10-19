import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitacionPage } from './habitacion';

@NgModule({
  declarations: [
    HabitacionPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitacionPage),
  ],
})
export class HabitacionPageModule {}
