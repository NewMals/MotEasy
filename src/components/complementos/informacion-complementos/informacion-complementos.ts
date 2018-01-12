import { Component, Input } from '@angular/core';
import { DTOcomplemento } from '../../../modelos/DTOcomplementos';

/**
 * Generated class for the InformacionComplementosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'informacion-complementos',
  templateUrl: 'informacion-complementos.html'
})
export class InformacionComplementosComponent {

  text: string;
  @Input() COMinf: DTOcomplemento; 

  constructor() {
    console.log('Hello InformacionComplementosComponent Component');
    this.text = 'Hello World';
  }

}
