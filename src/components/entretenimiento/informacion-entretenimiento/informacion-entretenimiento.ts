import { Component } from '@angular/core';

/**
 * Generated class for the InformacionEntretenimientoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'informacion-entretenimiento',
  templateUrl: 'informacion-entretenimiento.html'
})
export class InformacionEntretenimientoComponent {

  text: string;

  constructor() {
    console.log('Hello InformacionEntretenimientoComponent Component');
    this.text = 'Hello World';
  }

}
