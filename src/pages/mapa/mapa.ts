import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LatLng,  MarkerOptions, MarkerIcon } from "@ionic-native/google-maps";
import { Storage } from '@ionic/storage';

import { DTOEstablecimiento } from '../../modelos/DTOEstablecimiento';
import { MapaProvider } from '../../providers/mapa/mapaService';
declare var google;
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

  @ViewChild('map') mapElement: ElementRef;
  MyLocation: any;
  // map: GoogleMap;
  // mapaCreado : boolean = false;
  //element: HTMLElement ;
  marcas = new Array<{markerOptions: MarkerOptions, establecimiento: DTOEstablecimiento}>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    //public googleMaps: GoogleMaps
    public googleMaps: MapaProvider 
    , private storage: Storage
    ) {
      //this.crearMapa();
      // this.storage.keys().then(key => {
      //   console.log(key);
      // });
  }

  ionViewDidLoad() {
    this.googleMaps.iniciar(this.mapElement.nativeElement).then(() =>{
        this.agregarmarcas().then(()=> {
              this.googleMaps.actualizarMarcas(this.marcas);
        });
    });

    //this.calculateAndDisplayRoute();

    //this.element = document.getElementById('map');

    // if (!this.element.getAttribute('__pluginMapId')) {
    //  this.crearMapa();
    //   console.log(this.element);
    //   this.agregarmarcas().then(() => {
    //     this.cargarMarcas();
    //   });
    // }
    // else {
    //   this.map = new GoogleMap(this.element);
    //   console.log(this.map);
    //   //this.crearMapa();
    // }    
      
  }

  ionViewWillUnload() {
    console.log("salir de mapa");
    
    
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

  // crearMapa(){
  //   let element: HTMLElement = document.getElementById('map');
  //   let option: GoogleMapOptions = {
  //       mapType: 'MAP_TYPE_ROADMAP',
  //       controls: {
  //         myLocationButton: true,
  //         //mapToolbar: false

  //       },
  //       styles: [
  //         {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  //         {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  //         {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  //         {
  //           featureType: 'administrative.locality',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#d59563'}]
  //         },
  //         {
  //           featureType: 'poi',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#d59563'}]
  //         },
  //         {
  //           featureType: 'poi.park',
  //           elementType: 'geometry',
  //           stylers: [{color: '#263c3f'}]
  //         },
  //         {
  //           featureType: 'poi.park',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#6b9a76'}]
  //         },
  //         {
  //           featureType: 'road',
  //           elementType: 'geometry',
  //           stylers: [{color: '#38414e'}]
  //         },
  //         {
  //           featureType: 'road',
  //           elementType: 'geometry.stroke',
  //           stylers: [{color: '#212a37'}]
  //         },
  //         {
  //           featureType: 'road',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#9ca5b3'}]
  //         },
  //         {
  //           featureType: 'road.highway',
  //           elementType: 'geometry',
  //           stylers: [{color: '#746855'}]
  //         },
  //         {
  //           featureType: 'road.highway',
  //           elementType: 'geometry.stroke',
  //           stylers: [{color: '#1f2835'}]
  //         },
  //         {
  //           featureType: 'road.highway',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#f3d19c'}]
  //         },
  //         {
  //           featureType: 'transit',
  //           elementType: 'geometry',
  //           stylers: [{color: '#2f3948'}]
  //         },
  //         {
  //           featureType: 'transit.station',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#d59563'}]
  //         },
  //         {
  //           featureType: 'water',
  //           elementType: 'geometry',
  //           stylers: [{color: '#17263c'}]
  //         },
  //         {
  //           featureType: 'water',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#515c6d'}]
  //         },
  //         {
  //           featureType: 'water',
  //           elementType: 'labels.text.stroke',
  //           stylers: [{color: '#17263c'}]
  //         }
  //       ]
  //     }
   
  //   //this.map = this.googleMaps.create(element, option);
    
  //   console.log('creado',element);
  

  // }


  // cargarMarcas(){
    
  //   let position: CameraPosition<any>;
  //   position = {
  //     zoom: 13,
  //     tilt: 30,
  //     duration: 2500
      
  //   }
  //     this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
  //           this.map.getMyLocation().then(location =>{
  //             // 
  //             //   console.log("marcas", this.marcas);
  //               this.marcas.forEach(marca => {
  //                 this.map.addMarker(marca.markerOptions).then(index =>{
  //                   console.log("index " +index.getId() ,index);
  //                           index.on(GoogleMapsEvent.INFO_CLICK)
  //                           .subscribe(() => {
  //                             this.navCtrl.push(EstablecimientoPage, {
  //                               ESTpri: marca.establecimiento
  //                             });
  //                           });
  //                         });
  //               });
  //             //
  //             position.target = location.latLng;
  //             this.map.animateCamera(position);
  //       });
  //     });
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


  //}

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


  calculateAndDisplayRoute() {
    let that = this;
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        that.MyLocation = new google.maps.LatLng(pos);

      }, function() {

      });
    } else {
      // Browser doesn't support Geolocation
    }

    var posd = {
      lat: 4.564938810824294,
      lng: -74.12605404853821
    }

    var destino = new google.maps.LatLng(posd);
    var markerArray = [];


    directionsService.route({
    origin: new LatLng(4.564938810824294, -74.10605404853821),
    destination: new LatLng(4.564938810824294, -74.12605404853821),
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.IMPERIAL
  }, function(response, status) {
    if (status === 'OK') {  
      
      directionsDisplay.setDirections(response);
      var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 4.564938810824294, lng: -74.10605404853821}
      });
      marker.setMap(null);
      console.log('objeto',response)

      var myRoute = response.routes[0].legs[0];
      
        for (var i = 0; i < myRoute.steps.length; i++) {
            var marker = new google.maps.Marker({
              position: myRoute.steps[i].start_point,
              map: map
            });
            
        }

    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}



}
