import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DTOEstablecimiento } from "../../modelos/DTOEstablecimiento";
import { DTOhabitacion } from "../../modelos/DTOhabitacion";
import { HabitacionPage } from "../habitacion/habitacion";

/**
 * Generated class for the PageEstablecimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-establecimiento',
  templateUrl: 'establecimiento.html',
})
export class EstablecimientoPage {

  ESTpage : DTOEstablecimiento; 
  ArrayHAB : Array<DTOhabitacion> = new Array<DTOhabitacion>();

  ejemploSlide: any = [
    { id: 1 , PIC: "http://vmotelboutique.com/wp-content/uploads/2014/07/junior_villa_1_motelv1.jpg" }
    , { id: 2 , PIC: "http://www.motelesgeisha.com/wp-content/uploads/2015/11/habitacion_junior_g_05.jpg" }
    , { id: 3 , PIC: "https://losmoteles.com/wp-content/uploads/2016/04/habitacion-presidencial-motel-sabores-e1461461958710.jpg" }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ESTpage = this.navParams.get('ESTpri');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageEstablecimientoPage');
    this.ejemplo();
  }

  ejemplo(){
    for(var i = 1 ; i< 4 ; i++){
      var habitacion = new DTOhabitacion();
      habitacion.HABid = i;
      habitacion.HABestablecimiento = this.ESTpage.ESTid;
      habitacion.HABtipo = 'Suite_' + i;
      habitacion.HABtarifaEstandar = 30000 * i;
      habitacion.HABcantPersonas = 2;
      habitacion.HABcantPersonasMax = 2 + i;
      habitacion.HABtarifaAdicional = 20000 * i;
      
      this.ejemploSlide.forEach(element => {
        if(i == element.id){
          habitacion.HABfotoPrincipal = element.PIC;
        } 
      }); 
      this.ArrayHAB.push(habitacion);
    } 
  }

  IngresarHAB(habitacion) {
    this.navCtrl.push(HabitacionPage, {
      HABpri: habitacion
    });
  }

}
