import { Component, Input } from '@angular/core';
import { DTOHabitaciontipo } from "../../../modelos/DTOhabitacion";

/**
 * Generated class for the InformacionHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'informacion-habitacion',
  templateUrl: 'informacion-habitacion.html'
})
export class InformacionHabitacionComponent {

  text: string;
  @Input() HABinf : DTOHabitaciontipo;

  constructor() {
    console.log('Hello InformacionHabitacionComponent Component');
    this.text = 'Hello World';
  }

}
