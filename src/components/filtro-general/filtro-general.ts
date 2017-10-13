import { Component } from '@angular/core';

/**
 * Generated class for the FiltroGeneralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filtro-general',
  templateUrl: 'filtro-general.html'
})
export class FiltroGeneralComponent {

  text: string;

  constructor() {
    console.log('Hello FiltroGeneralComponent Component');
    this.text = 'Hello World';
  }

}
