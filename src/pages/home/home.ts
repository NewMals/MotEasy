import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Establecimiento } from "../../modelos/Establecimiento";
import { PageEstablecimientoPage } from "../page-establecimiento/page-establecimiento";

@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  //Establecimiento = new Establecimiento;
  ArrayEST : Array<Establecimiento> = new Array<Establecimiento>();

  ejemploSlide: any = [
    { id: 1 , PIC: "https://candela-500700.c.cdn77.org/wp-content/uploads/2016/10/images_2016_09_10_motel0.jpg" }
    , { id: 2 , PIC: "http://www.buscadordemoteles.cl/plugimg/img/logos/94.tropicalpark.d3b0c7x960.jpg" }
    , { id: 3 , PIC: "http://www.motelrocamar.com/wp-content/uploads/2017/08/motel-rocamar-guimot-dsc_0370editada-2-001-1.jpg" }
  ];
  

  constructor(public navCtrl: NavController) {
      this.ejemplo();

  }

  ejemplo(){
    for(var i = 1 ; i< 4 ; i++){
      var establecimiento = new Establecimiento();
      establecimiento.ESTid = i;
      establecimiento.ESTnombre = 'Amarte_' + i;
      
      this.ejemploSlide.forEach(element => {
        if(i == element.id){
          establecimiento.ESTfotoPrincipal = element.PIC;
        } 
      }); 
      this.ArrayEST.push(establecimiento);
    }
    
  }

  IngresarEST(establecimiento){
      this.navCtrl.push(PageEstablecimientoPage, {
        ESTpri: establecimiento
      });
  }
}
