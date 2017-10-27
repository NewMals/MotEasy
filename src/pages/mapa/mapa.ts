import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, LatLng, CameraPosition, GoogleMapsEvent, MarkerOptions, MyLocationOptions, CircleOptions } from "@ionic-native/google-maps";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps
    ) {
  }

  ionViewDidLoad() {
    this.obtenerPosicion();
  }

  obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(postion: Geoposition){
    let latitude = postion.coords.latitude;
    let longitud = postion.coords.longitude;
    console.log(latitude, longitud);
    
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');
  
    let map: GoogleMap = this.googleMaps.create(element);
  
    // create LatLng object
    let myPosition: LatLng = new LatLng(latitude,longitud);
  
    // create CameraPosition
    let position: CameraPosition<any> = {
      target: myPosition,
      zoom: 18,
      tilt: 30
    };
  
    //map.one(GoogleMapsEvent.MAP_READY).then(()=>{
    map.on(GoogleMapsEvent.MAP_READY).subscribe(()=>{
      console.log('Map is ready!');
  
      // move the map's camera to position
      map.moveCamera(position);
  
      //create new marker
      let markerOptions: MarkerOptions = {
        position: myPosition,
        title: 'Here'
      };
      //map.addMarker(markerOptions);
      
      let circleOptions: CircleOptions = {
        center: myPosition,
        fillColor: "green",
      };
      map.addCircle(circleOptions);
    });
  
  }
}
