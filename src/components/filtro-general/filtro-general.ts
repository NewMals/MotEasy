import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { MapaPage } from "../../pages/mapa/mapa";

@Component({
  selector: 'filtro-general',
  templateUrl: 'filtro-general.html'
})
export class FiltroGeneralComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello FiltroGeneralComponent Component');
    this.text = 'Hello World';
  }

  abrirMapa(){
    this.navCtrl.push(MapaPage);
  }
}
