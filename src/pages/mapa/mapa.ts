import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, LatLng, CameraPosition, GoogleMapsEvent, MarkerOptions, MyLocationOptions, CircleOptions, Circle, GoogleMapOptions, MarkerIcon, MarkerClusterOptions } from "@ionic-native/google-maps";
import { Storage } from '@ionic/storage';

import { DTOEstablecimiento } from '../../modelos/DTOEstablecimiento';
import { EstablecimientoPage } from '../establecimiento/establecimiento';
/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  map: GoogleMap;
  mapaCreado : boolean = false;
  //element: HTMLElement = document.getElementById('map');
  marcas = new Array<{markerOptions: MarkerOptions, establecimiento: DTOEstablecimiento}>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public googleMaps: GoogleMaps
    , private storage: Storage
    ) {
      //this.crearMapa();
      // this.storage.keys().then(key => {
      //   console.log(key);
      // });
  }

  ionViewDidLoad() {
    
    console.log("meotodo ionvw en la clase mapa");
    this.agregarmarcas().then(map => {
      this.crearMapa();
    });
    

      
  }

  ionViewWillUnload() {
    console.log("salir de mapa");
    
    this.map.destroy();
    //document.getElementById('map').innerHTML ="";
  }

  // obtenerPosicion():any{
  //   this.geolocation.watchPosition().subscribe(response => {
  //     //this.loadMap(response);

  //   })
    // .catch(error =>{
    //   console.log(error);
    // })
  //}



  // loadMap(postion: Geoposition){
  //   let latitude = postion.coords.latitude;
  //   let longitud = postion.coords.longitude;
  //   console.log(latitude, longitud);
  //   let myPosition: LatLng = new LatLng(latitude,longitud);
  //   // create a new map by passing HTMLElement
  //   let circleOptions: CircleOptions;
  //   let position: CameraPosition<LatLng>;
  //   let MyLocationOptions : MyLocationOptions = {enableHighAccuracy: true }

  //     if(!this.mapaCreado){
  //         this.crearMapa();

  //         position = {
  //             target: myPosition,
  //             zoom: 16.5,
  //             tilt: 30
  //         }



  //         circleOptions = {
  //           center: myPosition,
  //           fillColor: "#a24444",
  //           strokeColor: "#800000",
  //           radius: 1,
  //           strokeWidth: 3,
  //         };

  //      }

  //       this.map.on(GoogleMapsEvent.MAP_READY).subscribe(()=>{

  //           //create new marker
  //           let markerOptions: MarkerOptions = {
  //             position: myPosition,
  //             title: 'Here'
  //           };
  //           //this.map.addMarker(markerOptions);

  //           this.map.animateCamera(position);
  //           this.map.getMyLocation(MyLocationOptions);
  //           this.map.addCircle(circleOptions);

  //       });

  //       this.map.getMyLocation(MyLocationOptions);
  //       this.map.setMyLocationEnabled(true);
  //       //this.map.addCircle(circleOptions);
  //       //this.map.moveCamera(position);
  //       //let circle = new Circle(this.map, circleOptions);
  //       //circle.setCenter(myPosition);

  //       //this.map.setCameraTarget(myPosition);

  //   //map.one(GoogleMapsEvent.MAP_READY).then(()=>{

  // }

  crearMapa(){
    //this.agregarmarcas().then(() => {
    var parent = this;
    let element: HTMLElement = document.getElementById('map');
    let option: GoogleMapOptions = {
        mapType: 'MAP_TYPE_ROADMAP',
        controls: {
          myLocationButton: true,
          //mapToolbar: false

        },
        styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ]
      }
   
    console.log("generar mapa");
    this.map = this.googleMaps.create(element, option);

    let position: CameraPosition<any>;
    position = {
      zoom: 16,
      tilt: 30
    }





    
      this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
            this.map.getMyLocation().then(location =>{
              // 
              //   console.log("marcas", this.marcas);
                this.marcas.forEach(marca => {
                  this.map.addMarker(marca.markerOptions).then(index =>{
                    console.log("index " +index.getId() ,index);
                            index.on(GoogleMapsEvent.INFO_CLICK)
                            .subscribe(() => {
                              this.navCtrl.push(EstablecimientoPage, {
                                ESTpri: marca.establecimiento
                              });
                            });
                          });
                });
              //
              position.target = location.latLng;
              this.map.animateCamera(position);
        });
      });
    //});
    // this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{





    //       let valor = this.map.getMyLocation();

    //       valor.then(location =>{
    //         position.target = location.latLng;
    //         let latitude =  location.latLng.lat + 0.0017000
    //         let longitud =  location.latLng.lng + 0.0017000
    //         let latitude2 =  location.latLng.lat - 0.0022000
    //         let longitud2 =  location.latLng.lng - 0.0022000
    //         //let latitudeMap = ( (latitude - location.latLng.lat) /2 ) + location.latLng.lat;
    //         //let longitudMap = ( (longitud - location.latLng.lng) /2 ) + location.latLng.lng;
    //         let markerPosition = new LatLng(latitude,longitud);
    //         let markerPosition2 = new LatLng(latitude2,longitud2);
            //let cameraPosition = new LatLng(latitudeMap,longitudMap);

            //position.target = cameraPosition;


            // let markerOptions: MarkerOptions []= [
            //   {
            //     position: markerPosition,
            //     title: 'Establecimiento 1',
            //     icon: icono,
            //     animation: 'BOUNCE',
            //     snippet: 'Visualizar',
            //   },
            //   {
            //     position: markerPosition2,
            //     title: 'Establecimiento 2 probando...',
            //     icon: icono,
            //     animation: 'BOUNCE',
            //     snippet: 'Visualizar que tipo de contenido se ve',

            //   }
            // ]

            // let iconany : any[] = [{
            //   name: "assets/icon/location-pin.png"
            // }]

            // let Markercluster: MarkerClusterOptions = {
            //   markers: markerOptions,
            //   icons: iconany
            // }

            // this.map.addMarkerCluster(Markercluster)
            // .then(marker => {
            //   console.log(marker);
            //     marker.
            //     marker.on(GoogleMapsEvent.INFO_CLICK)
            //       .subscribe(() => {
            //         alert('clicked');
            //       });
            //   });
        //     let icono: MarkerIcon ={
        //       url: 'assets/icon/location-motel.png',
        //       size: {
        //         width: 35,
        //         height: 35
        //       }
        //     }

        //     let markerOptions : MarkerOptions;

        //     this.map.animateCamera(position);
        //     this.storage.forEach(key =>{
        //       key as DTOEstablecimiento;
        //       console.log("key", key);
        //       let markerPosition = new LatLng(key.ESTgeolocalizacion._lat,key.ESTgeolocalizacion._long);

        //        markerOptions = {
        //         position: markerPosition,
        //         title: key.ESTnombre,
        //         icon: icono,
        //         animation: 'BOUNCE',
        //         snippet: key.ESTlocalidad
        //       };

        //       this.map.addMarker(markerOptions).then(index =>{
        //         console.log("marca " +index.getId() ,index);

        //         index.on(GoogleMapsEvent.INFO_CLICK)
        //         .subscribe(() => {
        //           this.navCtrl.push(EstablecimientoPage, {
        //             ESTpri: key
        //           });
        //         });
        //       });

        //   }).then(() =>{

        //   });
        //   this.mapaCreado = true;
        // });


    // });


  }

   agregarmarcas(): Promise<boolean>{

    let marca : MarkerOptions;
    let icono: MarkerIcon ={
      url: 'assets/icon/location-motel.png',
      size: {
        width: 35,
        height: 35
      }
    }

    return this.storage.forEach((value: any, key: string, iterationNumber: Number) =>{
      let markerPosition = new LatLng(value.ESTgeolocalizacion._lat,value.ESTgeolocalizacion._long);

       marca = {
        position: markerPosition,
        title: value.ESTnombre,
        icon: icono,
        animation: 'BOUNCE',
        snippet: value.ESTlocalidad
      };

      this.marcas.push({markerOptions : marca, establecimiento: value})

    }).then(() => {return true});
  }

}
