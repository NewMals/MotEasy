import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DTOhabitacion, DTOHabitaciontipo } from "../../modelos/DTOhabitacion";
import { MapaPage } from "../mapa/mapa";
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { DTOentretenimiento, DTOcomplemento } from '../../modelos/DTOcomplementos';
import { Observable } from 'rxjs/Observable';
import { DTOEstablecimiento } from '../../modelos/DTOEstablecimiento';

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
  EST: DTOEstablecimiento;
  HABcolletion: AngularFirestoreCollection<DTOentretenimiento>;
  ENT = new Array<DTOentretenimiento>();
  COM = new Array<DTOcomplemento>();
  
  ENTgeneral: Array<DTOentretenimiento> = [
      { ENTid: "vggMKugfVHBuGAFVyqpD",  ENTdescripcion: "Jacuzzi", ENTfoto: "assets/icon/bathtub.png" , ENTorden: 1}
  ];

  COMgeneral: Array<DTOcomplemento> = [
      { COMid: "GH67YQ7TLlyeoHKCO7M3", COMdescripcion: "Parqueadero" , COMfoto: "assets/icon/parking.png" , COMordern: 1}
  ]

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public afs: AngularFirestore
  ) {
    this.HABpage = this.navParams.get('HABpri');
    this.EST = this.navParams.get('EST');
     this.HABpage.HTIentretenimiento.forEach(HTIent =>{
       let id = HTIent as any;
      // return this.afs.doc('/Entretenimiento/'+ id).valueChanges().subscribe(entrenimiento =>{
      //     id = entrenimiento as DTOentretenimiento;
      //     return this.ENT.push(id);
      // });
        this.ENTgeneral.forEach(ent =>{
            if(id == ent.ENTid)
              this.ENT.push(ent);
        });
    });

    this.HABpage.HTIcomplemento.forEach(HTIcom =>{
      let id = HTIcom as any;
      // return this.afs.doc('/Complementos/'+ id).valueChanges().subscribe(complemento =>{
      //     id = complemento as DTOcomplemento;
      //     return this.COM.push(id);
      // });
      this.COMgeneral.forEach(com =>{
          if(id == com.COMid)
            this.COM.push(com);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitacionPage');
  }

  abrirMapa(){
    this.navCtrl.push(MapaPage);
  }

}
