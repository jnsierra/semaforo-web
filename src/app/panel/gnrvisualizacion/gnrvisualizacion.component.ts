import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-gnrvisualizacion',
  templateUrl: './gnrvisualizacion.component.html',
  styleUrls: ['./gnrvisualizacion.component.css']
})
export class GnrvisualizacionComponent implements AfterViewInit {

  private map : any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 4.627248742907958, -74.08099208489621 ],
      zoom: 13
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3
    });

    tiles.addTo(this.map);

    let marker = new L.Marker([4.624192964039957, -74.07629821928991]);
    marker.addTo(this.map);
    marker.on("click", function(event){
      window.location.href = "/interseccion/1";
    });
    marker.bindPopup("Calle 34 Carrera 28").openPopup();

    let marker2 = new L.Marker([4.6210067012858715, -74.16600747218487]);
    marker2.addTo(this.map);
    marker2.on("click", function(event){
      window.location.href = "/interseccion/2";
    });
    marker2.bindPopup("<span (click)=\"enviarGrpSemaforico()\">Carrera 80 Diagonal 43 sur</span>").openPopup();

    
    let marker3 = new L.Marker([4.620957735509959, -74.09940245638137]);
    marker3.bindPopup("<span (click)=\"enviarGrpSemaforico()\">Calle 13 calle 41</span>").openPopup();
    marker3.on("click", function(event){
      window.location.href = "/interseccion/3";
    });
    marker3.addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
