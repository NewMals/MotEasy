import { Component, Input } from '@angular/core';
import { DTOtarifas } from "../../../modelos/DTOtarifas";

/**
 * Generated class for the InformacionTarifasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'informacion-tarifas',
  templateUrl: 'informacion-tarifas.html'
})
export class InformacionTarifasComponent {

  text: string;
  @Input() ArrayTaf : Array<DTOtarifas>;

  constructor() {
    console.log('Hello InformacionTarifasComponent Component');
    this.text = 'Hello World';
  }

}
