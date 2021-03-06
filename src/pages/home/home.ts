import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DTOEstablecimiento } from "../../modelos/DTOEstablecimiento";
import { EstablecimientoPage } from "../establecimiento/establecimiento";
import { EstablecimientoProvider } from "../../providers/establecimiento/establecimientoService";
import { Api } from '../../providers/general/api';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';
import { Storage } from '@ionic/storage';


@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Api]
})
export class HomePage implements OnInit {

  //Establecimiento = new Establecimiento;
  //ArrayEST : Array<DTOEstablecimiento> = new Array<DTOEstablecimiento>();
  //private ColletionEST: AngularFirestoreCollection<any>;
  ArrayEST = new Array<DTOEstablecimiento>();
  suscrito: Subscription;
  suscrito2: Subscription;

  ejemploSlide: any = [
    { id: 1, PIC: "https://candela-500700.c.cdn77.org/wp-content/uploads/2016/10/images_2016_09_10_motel0.jpg" }
    , { id: 2, PIC: "http://www.buscadordemoteles.cl/plugimg/img/logos/94.tropicalpark.d3b0c7x960.jpg" }
    , { id: 3, PIC: "http://www.motelrocamar.com/wp-content/uploads/2017/08/motel-rocamar-guimot-dsc_0370editada-2-001-1.jpg" }
  ];


  constructor(public navCtrl: NavController
    //, afDB: AngularFireDatabase
    , private ESTservice: EstablecimientoProvider
    , private api: Api
    , private geolocation: Geolocation
    , private storage: Storage
  ) {
    //this.ejemplo();
    //this.ArrayEST = afDB.list('/Establecimientos').valueChanges();
    // this.ColletionEST = afs.collection('/Establecimientos');
    // console.log('arreglo',this.ColletionEST);
    // this.ArrayEST = this.ColletionEST.valueChanges();  


    // this.suscrito = this.ESTservice.getEstablecimientos().subscribe(establecimientos => {
    //   this.ArrayEST = establecimientos;

      
    this.ObtenerEstablecimiento();

      // this.ArrayEST.forEach( index => {
      //   this.obtenerDistancia(index, index.ESTgeolocalizacion.latitude, index.ESTgeolocalizacion.longitude);

      // });
      //this.obtenerDistancia(this.ArrayEST[0].ESTgeolocalizacion.latitude, this.ArrayEST[0].ESTgeolocalizacion.longitude);
      // this.ArrayEST.forEach(establecimiento => {
      //   console.log("est", establecimiento.ESTgeolocalizacion.latitude)
      //   //establecimiento.ESTdistancia = this.obtenerDistancia(establecimiento.ESTgeolocalizacion.latitud, establecimiento.ESTgeolocalizacion.longitud);
      // });

    //   console.log(this.ArrayEST);
    //   this.suscrito.unsubscribe();
    //   //
    // });


  }

  ngOnInit() {
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

  IngresarEST(establecimiento) {
    this.navCtrl.push(EstablecimientoPage, {
      ESTpri: establecimiento
    });
  }

  ObtenerEstablecimiento() {
    this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
      this.ArrayEST.push(value);
    }).then(() => {
      
      if (this.ArrayEST) {
          this.ESTservice.getEstablecimientos().subscribe(establecimientos => {
          this.ArrayEST = establecimientos;

          let url = "https://maps.googleapis.com/maps/api/distancematrix/json";
          this.geolocation.getCurrentPosition().then(response => {
            url += "?origins=" + response.coords.latitude + "," + response.coords.longitude + "&destinations=";
            for (var i = 0; i < this.ArrayEST.length; i++) {
              url += (i == 0) ? "" : "|";
              url += this.ArrayEST[i].ESTgeolocalizacion.latitude + "," + this.ArrayEST[i].ESTgeolocalizacion.longitude;
            }
            this.api.get(url).then(response => {
              let distancia = response;
              for (var i = 0; i < this.ArrayEST.length; i++) {
                this.ArrayEST[i].ESTdistancia = distancia.rows[0].elements[i].distance.text;
                this.ArrayEST[i].ESTduracion = distancia.rows[0].elements[i].duration.text;
    
                this.storage.set(this.ArrayEST[i].ESTnombre, this.ArrayEST[i]);
              }
            }).catch(error=> console.log(error));
          });
        });
      }
      
    });
  }


  obtenerDistancia(index, latitud, longitud) {

    //console.log("ubicacion", latitud,longitud);
    //let url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=AIzaSyC2uWKfdyE83hwcusrOlIOqW6UJf2cnGms"


    this.geolocation.getCurrentPosition().then(response => {
      let url = "https://maps.googleapis.com/maps/api/distancematrix/json";
      url += "?origins=" + response.coords.latitude + "," + response.coords.longitude;
      url += "&destinations=" + latitud + "," + longitud;
      //url += "&key=AIzaSyC2uWKfdyE83hwcusrOlIOqW6UJf2cnGms";

      console.log(url);

      // this.api.get(url).then(response =>{
      //     let distancia = response.json() as any;
      //     index.ESTdistancia = distancia.rows[0].elements[0].distance.text;
      //     //index.ESTduracion = distancia.rows[0].elements[0].duration.text;
      //     url ="";

      //     //console.log(this.ArrayEST[0].ESTdistancia);
      //     this.storage.set(index.ESTnombre, index);
      // });

    })


  }
}
