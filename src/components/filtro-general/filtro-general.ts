import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { MapaPage } from "../../pages/mapa/mapa";
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'filtro-general',
  templateUrl: 'filtro-general.html'
})
export class FiltroGeneralComponent {




  constructor(public navCtrl: NavController) {
    console.log('Hello FiltroGeneralComponent Component');
  }

  abrirMapa(){
    this.navCtrl.setRoot(MapaPage);
  }

  abrirLista(){
    this.navCtrl.setRoot(HomePage);
  }

}
