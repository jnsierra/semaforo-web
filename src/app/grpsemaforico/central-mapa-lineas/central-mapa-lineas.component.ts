import { Component, Input, OnInit } from '@angular/core';
import { GrupoSemaforicoModel } from 'src/app/models/gruposemaforico.model';

@Component({
  selector: 'app-central-mapa-lineas',
  templateUrl: './central-mapa-lineas.component.html',
  styleUrls: ['./central-mapa-lineas.component.css']
})
export class CentralMapaLineasComponent implements OnInit {

  @Input()
  grpSemaforico: GrupoSemaforicoModel[];
  @Input()
  tiempoActual:number;

  constructor() {
    this.grpSemaforico = [];
    this.tiempoActual = 0;
  }

  ngOnInit(): void {
  }

  dividirAccion(accion: string, num: number){
    let accionUno = accion.substring(0,4);
    let accionDos = accion.substring(4,8);
    if(num == 0){
      return accionUno;
    }else{
      return accionDos;
    }
  }

  validaTiempo(tmpPaso: number){
    //console.log('Tiempo Actual: ' + this.tiempoActual + ' Tiempo Paso: ' +  tmpPaso );
    if(this.tiempoActual === tmpPaso ){
      return true;
    }
    return false;
  }

}
