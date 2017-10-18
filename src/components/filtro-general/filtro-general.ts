import { Component } from '@angular/core';

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
