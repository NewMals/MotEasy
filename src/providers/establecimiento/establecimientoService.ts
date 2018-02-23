import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";
import { DTOEstablecimiento } from '../../modelos/DTOEstablecimiento';
import { Geolocation } from '@ionic-native/geolocation';
import { global } from '../../global';
/*
  Generated class for the EstablecimientoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstablecimientoProvider {

  ESTcolletion: AngularFirestoreCollection<DTOEstablecimiento>;
  EST: Observable<any>;
  posicion: any = { latitude: 4.564938810824294 };

  constructor(public afs: AngularFirestore
    , private geolocation: Geolocation
  ) {
    this.consultaInical();
  }

  getEstablecimientos() {
    
    return this.EST;
  }

  obtenerHabitacionTipos(idDocumento): Observable<any[]> {
    return this.afs.collection('/Establecimientos/' + idDocumento + '/HabitacionTipos').valueChanges();
  }

  obtenerHabitacion(idDocumento): Observable<any[]> {
    return this.afs.collection('/Establecimientos/' + idDocumento + '/Habitaciones').valueChanges();
  }


  localizarPosicion() {
    this.geolocation.watchPosition()
      .subscribe(response => {

        console.log("actual", response.coords.latitude, response.coords.longitude);
        console.log("suma", response.coords.latitude + global.lat5km, response.coords.longitude + global.long5km);
        console.log("resta", response.coords.latitude - global.lat5km, response.coords.longitude - global.long5km);
        this.posicion = { latitud: response.coords.latitude, longitud: response.coords.longitude }

        localStorage.setItem("Posicion", JSON.stringify(this.posicion));

      })

  }

  consultaInical() {
    this.ESTcolletion = this.afs.collection('/Establecimientos'
      , query => query

      //.orderBy("ESTciudad")
      //.where("ESTgeolocalizacion", "==", this.posicion.latitude)
      //.where("ESTciudad","==", "Cali")  
    )
      ;

    this.EST = this.ESTcolletion
      .snapshotChanges().map(actions => {

        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.ESTid = a.payload.doc.id;

          //  this.obtenerHabitacionTipos(data.ESTid).subscribe( coleccion =>{
          //      data.ESThabitacionesTipos = coleccion as DTOHabitaciontipo[];            
          //  });
          //data.ESThabitacionesTipos = new DTOHabitaciontipo;
          // this.obtenerHabitacion(data.id).subscribe( coleccion =>{
          //   data.ESThabitaciones = coleccion as DTOhabitacion[];
          // });
          return data;
        });
      });
  }



}
