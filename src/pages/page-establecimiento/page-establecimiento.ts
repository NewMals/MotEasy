import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Establecimiento } from "../../modelos/Establecimiento";

/**
 * Generated class for the PageEstablecimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-establecimiento',
  templateUrl: 'page-establecimiento.html',
})
export class PageEstablecimientoPage {

  ESTpage : Establecimiento; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ESTpage = this.navParams.get('ESTpri');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageEstablecimientoPage');
  }

}
