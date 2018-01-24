import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GoogleMaps, GoogleMapOptions, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';
import { EstablecimientoPage } from '../../pages/establecimiento/establecimiento';
import { NavController, App } from 'ionic-angular';



declare var google;
/*
  Generated class for the MapaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapaProvider {
  mapElement: any;
  map: GoogleMap;


  constructor(public googleMaps: GoogleMaps
    , protected app: App
    
  ) {
    console.log('Hello MapaProvider Provider');
  }


  iniciar(mapElement: any): Promise<any> {
      this.mapElement = mapElement;

      return this.cargarMapa();
  }

  cargarMapa(): Promise<any> {
    return new Promise((resolve) => {
        if(typeof google == 'undefined'){
            this.crearMapa();
            resolve(true);
        }
        else{
          resolve(true);
        }
    });
  }

  crearMapa(){
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
    this.map = this.googleMaps.create(this.mapElement, option);
  }

  actualizarMarcas(marcas) {
    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
            this.map.getMyLocation().then(location =>{
              // 
              //   console.log("marcas", this.marcas);
                marcas.forEach(marca => {
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
              // position.target = location.latLng;
              // this.map.animateCamera(position);
        });
      });
    }

  get navCtrl(): NavController {
    return this.app.getRootNav();
  }
}
