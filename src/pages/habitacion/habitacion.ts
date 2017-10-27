import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DTOhabitacion } from "../../modelos/DTOhabitacion";
import { MapaPage } from "../mapa/mapa";

/**
 * Generated class for the HabitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habitacion',
  templateUrl: 'habitacion.html',
})
export class HabitacionPage {

  HABpage : DTOhabitacion;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.HABpage = this.navParams.get('HABpri');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitacionPage');
  }

  abrirMapa(){
    this.navCtrl.push(MapaPage);
  }

}
