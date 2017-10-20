import { Component, Input } from '@angular/core';
import { DTOEstablecimiento } from "../../modelos/DTOEstablecimiento";

/**
 * Generated class for the ItemEstablecimientoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-establecimiento',
  templateUrl: 'item-establecimiento.html'
})
export class ItemEstablecimientoComponent {

  text: string;
  @Input() ESTitem : DTOEstablecimiento;

  constructor() {
    console.log('Hello ItemEstablecimientoComponent Component');
    this.text = 'Hello World';
  }

 
}
