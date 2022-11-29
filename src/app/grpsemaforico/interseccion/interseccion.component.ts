import { Component, OnInit } from '@angular/core';
import { InterseccionModel } from 'src/app/models/interseccion.model';
import { InterseccionService } from 'src/app/servicios/intersecciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanSemaforicoModel } from 'src/app/models/plansemaforico.model';
import { timer } from 'rxjs';

@Component({
  selector: 'app-interseccion',
  templateUrl: './interseccion.component.html',
  styleUrls: ['./interseccion.component.css']
})
export class InterseccionComponent implements OnInit {

  id: string;
  planSemaforico: PlanSemaforicoModel;
  datos: boolean;
  tiempoActual: number;
  estadoGrpSmf: string;
  clientesConectados: string;
  conexionesCompletas: boolean;
  sourceTime = timer(0, 1000);
  contadorTiempo: number;
  corriendo: number;


  constructor(private interseccionService: InterseccionService,
    private activatedRoute: ActivatedRoute) {
    this.id = "";
    this.estadoGrpSmf = "";
    this.clientesConectados = "";
    this.conexionesCompletas = false;
    this.planSemaforico = new PlanSemaforicoModel();
    this.contadorTiempo = 0;
    this.corriendo = 0;
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.datos = false;
    this.tiempoActual = 0;
    const source = timer(0, 5000);
    const subscribe = source.subscribe(val => this.consultaEstado());

  }

  ngOnInit(): void {
    this.consultaDatosInterseccion();
  }

  consultaConectados(estado: string) {
    if (estado === 'ESPERA_CONEXIONES') {
      this.interseccionService.consultaNumeroConectados(this.id).subscribe(resp => {
        console.log(resp);
        this.clientesConectados = JSON.stringify(resp);
        this.clientesConectados = this.clientesConectados.replace(/['"]+/g, '')
      });
      console.log('Entro para buscar el numero de conectados');
    }
  }

  consultaEstado() {
    if( this.estadoGrpSmf != 'CORRIENDO'){
      this.interseccionService.consultaEstadoGrpSem(this.id).subscribe(resp => {
        console.log("Esta es la respuesta del estado" + resp);
        this.estadoGrpSmf = JSON.stringify(resp);
        this.estadoGrpSmf = this.estadoGrpSmf.replace(/['"]+/g, '')
        this.consultaConectados(this.estadoGrpSmf);
      });
      this.interseccionService.consultaNumeroConectados(this.id).subscribe(resp => {
        this.clientesConectados = JSON.stringify(resp);
        this.clientesConectados = this.clientesConectados.replace(/['"]+/g, '')
        this.conexionesCompletas = true;
      });
    }else{
      if (this.contadorTiempo == 0) {
        const subscribeTime = this.sourceTime.subscribe(val => this.consultaTiempo());
      }
    }
  }

  consultaTiempo() {
    this.interseccionService.consultaTiempo(this.id).subscribe(resp => {
      this.tiempoActual = resp;
      this.contadorTiempo = resp;
    });
  }

  consultaDatosInterseccion() {
    this.interseccionService.consultaInfInterseccion(this.id).subscribe((data: PlanSemaforicoModel) => {
      this.planSemaforico = data;
      this.datos = true;
    });
  }

  iniciarSemaforos() {
    if (this.estadoGrpSmf === 'CONEXIONES_COMPLETAS') {
      this.interseccionService.ejecutarSemaforos(this.id).subscribe(resp => {
        this.interseccionService.consultaEstadoGrpSem(this.id).subscribe(resp => {
          this.estadoGrpSmf = JSON.stringify(resp);
          this.estadoGrpSmf = this.estadoGrpSmf.replace(/['"]+/g, '')
        });
      });
    }
  }

}