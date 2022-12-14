import { Component, OnInit, Input } from '@angular/core';
import { GrupoSemaforicoModel } from 'src/app/models/gruposemaforico.model';

@Component({
  selector: 'app-centrales',
  templateUrl: './centrales.component.html',
  styleUrls: ['./centrales.component.css']
})
export class CentralesComponent implements OnInit {
  @Input()
  grpSemaforico: GrupoSemaforicoModel[];
  @Input()
  tiempoActual:number;
  @Input()
  unitario:boolean;

  constructor() {
    this.grpSemaforico = [];
    this.tiempoActual = 0;
    this.unitario = true;
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
