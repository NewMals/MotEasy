import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DTOEstablecimiento } from "../../modelos/DTOEstablecimiento";
import { EstablecimientoPage } from "../establecimiento/establecimiento";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { EstablecimientoProvider } from "../../providers/establecimiento/establecimientoService";

@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  //Establecimiento = new Establecimiento;
  //ArrayEST : Array<DTOEstablecimiento> = new Array<DTOEstablecimiento>();
  //private ColletionEST: AngularFirestoreCollection<any>;
  ArrayEST : DTOEstablecimiento[];

  ejemploSlide: any = [
    { id: 1 , PIC: "https://candela-500700.c.cdn77.org/wp-content/uploads/2016/10/images_2016_09_10_motel0.jpg" }
    , { id: 2 , PIC: "http://www.buscadordemoteles.cl/plugimg/img/logos/94.tropicalpark.d3b0c7x960.jpg" }
    , { id: 3 , PIC: "http://www.motelrocamar.com/wp-content/uploads/2017/08/motel-rocamar-guimot-dsc_0370editada-2-001-1.jpg" }
  ];
  

  constructor(public navCtrl: NavController
    //, afDB: AngularFireDatabase
    , private ESTservice: EstablecimientoProvider
  ) {
      //this.ejemplo();
        //this.ArrayEST = afDB.list('/Establecimientos').valueChanges();
        // this.ColletionEST = afs.collection('/Establecimientos');
        // console.log('arreglo',this.ColletionEST);
        // this.ArrayEST = this.ColletionEST.valueChanges();  
        this.ESTservice.getEstablecimientos().subscribe(establecimiento =>{
          this.ArrayEST = establecimiento;
          console.log('home',this.ArrayEST);
        });
  }

  ngOnInit(){
    // this.ESTservice.getEstablecimientos().subscribe(establecimiento =>{
    //   this.ArrayEST = establecimiento;
    //   console.log(this.ArrayEST);
    // });
  }

  // ejemplo(){
  //   for(var i = 1 ; i< 4 ; i++){
  //     var establecimiento = new DTOEstablecimiento();
  //     establecimiento.ESTid = i;
  //     establecimiento.ESTnombre = 'Amarte_' + i;
      
  //     this.ejemploSlide.forEach(element => {
  //       if(i == element.id){
  //         establecimiento.ESTfotoPrincipal = element.PIC;
  //       } 
  //     }); 
  //     //this.ArrayEST.push(establecimiento);
  //   }
    
  // }

  IngresarEST(establecimiento){
      this.navCtrl.push(EstablecimientoPage, {
        ESTpri: establecimiento
      });
  }
}
