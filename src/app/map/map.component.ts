import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { marker } from 'leaflet';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  tempMarker: any;
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
    })
  };
  tempMarkerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://github.com/pointhi/leaflet-color-markers/blob/master/img/marker-icon-orange.png?raw=true",
      shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
    })
  };
  

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  

  constructor(public mapService: MapService) { }

  ngAfterViewInit(): void {
    this.initMap();

    this.map.on("click", (e: any) => {
      if (this.tempMarker) {
        this.map.removeLayer(this.tempMarker)
      }
      console.log(e.latlng); // get the coordinates
      this.tempMarker = L.marker([e.latlng.lat, e.latlng.lng], this.tempMarkerIcon)
      this.tempMarker.addTo(this.map);
      this.mapService.isTempMarkerPlaced = true;
      this.map.setView([e.latlng.lat, e.latlng.lng], 18);
    });

    this.mapService.confirmClicked.subscribe(val => {
      if (val) {
        this.confirm()
        this.mapService.confirmClicked.next(false);
      }
    });
  }

  confirm(){
    L.marker([this.tempMarker.getLatLng().lat, this.tempMarker.getLatLng().lng], this.markerIcon).bindPopup('<p>You are here</p>').addTo(this.map);
    this.map.removeLayer(this.tempMarker)
    this.tempMarker = null
    this.mapService.isTempMarkerPlaced = false;
  }
}