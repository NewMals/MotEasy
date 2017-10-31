import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, LatLng, CameraPosition, GoogleMapsEvent, MarkerOptions, MyLocationOptions, CircleOptions, Circle, GoogleMapOptions, MarkerIcon } from "@ionic-native/google-maps";
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

  map: GoogleMap;
  mapaCreado : boolean = false;         


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps
    ) {
      //this.crearMapa();
  }

  ionViewDidLoad() {
    this.crearMapa();
  }




  obtenerPosicion():any{
    this.geolocation.watchPosition().subscribe(response => {
      //this.loadMap(response);
      
    })
    // .catch(error =>{
    //   console.log(error);
    // })
  }

  

  loadMap(postion: Geoposition){
    let latitude = postion.coords.latitude;
    let longitud = postion.coords.longitude;
    console.log(latitude, longitud);
    let myPosition: LatLng = new LatLng(latitude,longitud);
    // create a new map by passing HTMLElement
    let circleOptions: CircleOptions;
    let position: CameraPosition<LatLng>;
    let MyLocationOptions : MyLocationOptions = {enableHighAccuracy: true } 

      if(!this.mapaCreado){
          this.crearMapa();
          
          position = {
              target: myPosition,
              zoom: 18,
              tilt: 30
          }

          

          circleOptions = {
            center: myPosition,
            fillColor: "#a24444",
            strokeColor: "#800000",
            radius: 1,
            strokeWidth: 3,         
          };

       }

        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(()=>{

            //create new marker
            let markerOptions: MarkerOptions = {
              position: myPosition,
              title: 'Here'
            };
            //this.map.addMarker(markerOptions);
            
            this.map.animateCamera(position);
            this.map.getMyLocation(MyLocationOptions);
            this.map.addCircle(circleOptions);
            
        });          
        
        this.map.getMyLocation(MyLocationOptions);
        this.map.setMyLocationEnabled(true);
        //this.map.addCircle(circleOptions);
        //this.map.moveCamera(position);
        //let circle = new Circle(this.map, circleOptions);
        //circle.setCenter(myPosition);
        
        //this.map.setCameraTarget(myPosition);

    //map.one(GoogleMapsEvent.MAP_READY).then(()=>{
    
  }

  crearMapa(){
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
    

    this.map = this.googleMaps.create(element, option);

    let position: CameraPosition<any>;
    position = {
      zoom: 1000,
      tilt: 5000
    }

   

    let icono: MarkerIcon ={
      url: 'assets/icon/location-motel.png',
      size: {
        width: 40,
        height: 40
      }
    }

   
    
    
    

    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
          



          
          let valor = this.map.getMyLocation();
          
          valor.then(location =>{ 
           
            let latitude =  location.latLng.lat + 0.0017000
            let longitud =  location.latLng.lng + 0.0017000
            //let latitudeMap = ( (latitude - location.latLng.lat) /2 ) + location.latLng.lat; 
            //let longitudMap = ( (longitud - location.latLng.lng) /2 ) + location.latLng.lng;
            let markerPosition = new LatLng(latitude,longitud);
            //let cameraPosition = new LatLng(latitudeMap,longitudMap);

            //position.target = cameraPosition;
            position.target = location.latLng;

            let markerOptions: MarkerOptions = {
              position: markerPosition,
              title: 'Here',
              icon: icono,
              animation: 'BOUNCE'
            }
            this.map.animateCamera(position);
            this.map.addMarker(markerOptions);            
          });
          
    
          
    });      


  }


}
