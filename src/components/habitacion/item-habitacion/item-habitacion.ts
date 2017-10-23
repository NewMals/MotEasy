import { Component, Input } from '@angular/core';
import { DTOhabitacion } from "../../../modelos/DTOhabitacion";

/**
 * Generated class for the ItemHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-habitacion',
  templateUrl: 'item-habitacion.html'
})
export class ItemHabitacionComponent {

  text: string;
  @Input() HABitem : DTOhabitacion;

  constructor() {
    console.log('Hello ItemHabitacionComponent Component');
    this.text = 'Hello World';
  }

}
