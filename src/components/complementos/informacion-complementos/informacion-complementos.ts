import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello InformacionComplementosComponent Component');
    this.text = 'Hello World';
  }

}
