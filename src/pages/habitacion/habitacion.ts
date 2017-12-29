import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DTOhabitacion, DTOHabitaciontipo } from "../../modelos/DTOhabitacion";
import { MapaPage } from "../mapa/mapa";
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { DTOentretenimiento } from '../../modelos/DTOcomplementos';
import { Observable } from 'rxjs/Observable';

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

  HABpage : DTOHabitaciontipo;
  HTIcolletion: AngularFirestoreCollection<DTOentretenimiento>;
  HIT: Observable<DTOentretenimiento[]>;



  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public afs: AngularFirestore
  ) {
    this.HABpage = this.navParams.get('HABpri');
     this.HABpage.HTIentretenimiento.forEach(id =>{
      // this.afs.doc('/Entretenimiento/'+ id).valueChanges().subscribe(entrenimiento =>{
      //     id = entrenimiento as DTOentretenimiento;
      //     this.HIT.push(id);
      // });
        this.afs.doc('/Entretenimiento/'+ id).valueChanges();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitacionPage');
  }

  abrirMapa(){
    this.navCtrl.push(MapaPage);
  }

}
