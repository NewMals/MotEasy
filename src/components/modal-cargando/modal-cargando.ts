import { Component } from '@angular/core';

/**
 * Generated class for the ModalCargandoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-cargando',
  templateUrl: 'modal-cargando.html'
})
export class ModalCargandoComponent {

  text: string;

  constructor() {
    console.log('Hello ModalCargandoComponent Component');
    this.text = 'Hello World';
  }

}
