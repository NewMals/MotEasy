import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello ItemHabitacionComponent Component');
    this.text = 'Hello World';
  }

}
