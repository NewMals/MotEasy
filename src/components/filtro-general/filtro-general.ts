import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { MapaPage } from "../../pages/mapa/mapa";
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'filtro-general',
  templateUrl: 'filtro-general.html'
})
export class FiltroGeneralComponent {


  Vista;

  constructor(public navCtrl: NavController) {
    this.Vista = localStorage.getItem("Vista");
  }

  abrirMapa() {
    if (this.Vista = "Mapa") {
      this.navCtrl.setRoot(MapaPage);
      localStorage.setItem("Vista", "Mapa");
    }
  }

  abrirLista() {
    if (this.Vista = "Lista") {
      this.navCtrl.setRoot(HomePage);
      localStorage.setItem("Vista", "Lista");
    }
  }

}
