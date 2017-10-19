import { Component } from '@angular/core';

/**
 * Generated class for the ViewHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'view-habitacion',
  templateUrl: 'view-habitacion.html'
})
export class ViewHabitacionComponent {

  text: string;

  constructor() {
    console.log('Hello ViewHabitacionComponent Component');
    this.text = 'Hello World';
  }

}
