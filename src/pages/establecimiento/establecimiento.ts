import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DTOEstablecimiento } from "../../modelos/DTOEstablecimiento";
import { DTOHabitaciontipo } from "../../modelos/DTOhabitacion";
import { HabitacionPage } from "../habitacion/habitacion";
import { DTOtarifas } from "../../modelos/DTOtarifas";
import { HabitacionProvider } from '../../providers/habitacion/habitacionService';
import { ModalCargandoComponent } from '../../components/modal-cargando/modal-cargando';

/**
 * Generated class for the PageEstablecimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'EstablecimientoPage'
})
@Component({
  selector: 'page-establecimiento',
  templateUrl: 'establecimiento.html',
})
export class EstablecimientoPage {

  ESTpage : DTOEstablecimiento; 
  ArrayHAB : Array<DTOHabitaciontipo> = new Array<DTOHabitaciontipo>();
  loading;

  ejemploSlide: any = [
    { id: 1 , PIC: "http://vmotelboutique.com/wp-content/uploads/2014/07/junior_villa_1_motelv1.jpg" }
    , { id: 2 , PIC: "http://www.motelesgeisha.com/wp-content/uploads/2015/11/habitacion_junior_g_05.jpg" }
    , { id: 3 , PIC: "https://losmoteles.com/wp-content/uploads/2016/04/habitacion-presidencial-motel-sabores-e1461461958710.jpg" }
  ];

  arrayTipoHabitacion : Array<DTOHabitaciontipo> = new Array<DTOHabitaciontipo>();
  arrayTarifas : Array<DTOtarifas> = new Array<DTOtarifas>();

  constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public loadingCtrl: ModalController
        , private HABservice: HabitacionProvider) {
    this.ESTpage = this.navParams.get('ESTpri');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageEstablecimientoPage');
    this.ArrayHAB = this.ESTpage.ESThabitacionesTipos ;
    //this.ejemplo();
    //console.log(this.ArrayHAB);
  }

  // ejemplo(){
  //   for(var i = 1 ; i < 4 ; i++){
  //     var tarifa = new DTOtarifas();
  //     tarifa.TAFid = i;
  //     tarifa.TAFdescripcion = 'Toda la noche';
  //     tarifa.TAFvalorEstandar = 50000 * i;
  //     tarifa.TAFvalorAdicional = 30000 * i;

  //     var tarifa2 = new DTOtarifas();
  //     tarifa2.TAFid = i;
  //     tarifa2.TAFdescripcion = '6 horas';
  //     tarifa2.TAFvalorEstandar = 30000 * i;
  //     tarifa2.TAFvalorAdicional = 20000 * i;

      

  //     this.arrayTarifas.push(tarifa);
  //     this.arrayTarifas.push(tarifa2);
  //   }
  //   console.log('tarifas' , this.arrayTarifas);

  //   for(var i = 1 ; i< 4 ; i++){
  //     var tipoHabitacion = new DTOtipoHabitacion();
  //     tipoHabitacion.TIHid = i;
  //     tipoHabitacion.TIHdescripcion = 'Suite_' + i;
  //     tipoHabitacion.TIHcantPersonas = 2;
  //     tipoHabitacion.TIHcantPersonasMax = 2 + i;
  //     tipoHabitacion.TIHtarifa = this.arrayTarifas.filter(filtro =>
  //       filtro.TAFid == i
  //     );
  //     this.arrayTipoHabitacion.push(tipoHabitacion);
  //   }
  //   console.log('tipoHabitacion' , this.arrayTipoHabitacion);

  //   for(var i = 1 ; i< 4 ; i++){
  //     var habitacion = new DTOhabitacion();
  //     habitacion.HABid = i;
  //     habitacion.HABestablecimiento = this.ESTpage.ESTid;
  //     this.arrayTipoHabitacion.forEach(tipoHabitacion => {
  //       if(i == tipoHabitacion.TIHid)
  //         habitacion.HABtipo = tipoHabitacion; 
  //     });
       
      
  //     this.ejemploSlide.forEach(element => {
  //       if(i == element.id){
  //         habitacion.HABfotoPrincipal = element.PIC;
  //       } 
  //     }); 
  //     this.ArrayHAB.push(habitacion);
  //   } 
  // }

  IngresarHAB(tipo) {
    this.loading = this.loadingCtrl.create(ModalCargandoComponent);

    this.loading.present();

    this.HABservice.getHabitacionTipo(this.ESTpage.ESTid, tipo.HTIid).subscribe(Habitacion =>{
      this.navCtrl.push(HabitacionPage, {
        HABpri: Habitacion, 
        EST: this.ESTpage
      },
      { animation: 'true'} ).then(succes => {
          this.loading.dismiss();
      });

    });

    
  }

}
