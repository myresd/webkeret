import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'szeged-transport-map';

@ViewChild('mapContainer', {static: false}) gmap: ElementRef;
map: google.maps.Map;
lat = 46.247039;
lng = 20.147005;
coordinates = new google.maps.LatLng(this.lat, this.lng);
mapOptions: google.maps.MapOptions = {
  center: this.coordinates,
  zoom: 15,
};
mapInitializer() {
  this.map = new google.maps.Map(this.gmap.nativeElement, 
  this.mapOptions);
  this.marker.setMap(this.map);
 }

 ngAfterViewInit() {
  this.mapInitializer();
 }

 marker = new google.maps.Marker({
  position: this.coordinates,
  map: this.map,
});

}


