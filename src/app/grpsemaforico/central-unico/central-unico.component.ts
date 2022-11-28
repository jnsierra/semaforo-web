import { Component, Input, OnInit } from '@angular/core';
import { GrupoSemaforicoModel } from 'src/app/models/gruposemaforico.model';

@Component({
  selector: 'app-central-unico',
  templateUrl: './central-unico.component.html',
  styleUrls: ['./central-unico.component.css']
})
export class CentralUnicoComponent implements OnInit {

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

}
