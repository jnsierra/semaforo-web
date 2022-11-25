

import { HttpClient } from '@angular/common/http';
import { UrlServices } from './../general/url.entity';
import { Injectable } from '@angular/core';
import { InterseccionModel } from '../models/interseccion.model';
import { RespuestaMensajeModel } from '../models/respuestamensaje.model';
import { PlanSemaforicoModel } from '../models/plansemaforico.model';

@Injectable({
  providedIn: 'root'
})
export class InterseccionService {

  constructor(private _urlService: UrlServices, private http: HttpClient){}

  consultaInfInterseccion(idInterseccion: string){
    const URL_SERVICE = `${this._urlService.getEndPointConsultas()}/infgnral/${idInterseccion}/`;
    return this.http.get<PlanSemaforicoModel>(URL_SERVICE);

  }

  consultarIntersecciones(){
    const URL_SERVICE = `${this._urlService.getEndPointConsultas()}/interseccion/`;
    return this.http.get<InterseccionModel[]>(URL_SERVICE);
  }

  consultarCiclo(idInterseccion: any){
    const URL_SERVICE = `${this._urlService.getEndPointConsultas()}/ciclo/${idInterseccion}/`;
    return this.http.get<RespuestaMensajeModel>(URL_SERVICE);
  }

  cargarJson(idInterseccion: string){
    const URL_SERVICE = `${this._urlService.getEndPointSemaforo()}/${idInterseccion}/`;
    return this.http.post(URL_SERVICE, null);
  }

  esperarClientes(){
    const URL_SERVICE = `${this._urlService.getEndPointSemaforo()}/`;
    return this.http.get(URL_SERVICE);
  }

  consultaNumeroClientes(){
    const URL_SERVICE = `${this._urlService.getEndPointConsultas()}/numclientsconnect/`;
    return this.http.get<RespuestaMensajeModel>(URL_SERVICE);
  }

  consultaEstadoGrpSem(idInterseccion: string){
    const URL_SERVICE = `${this._urlService.getEndPointConsultas()}/estado/${idInterseccion}/`;
    return this.http.get(URL_SERVICE);
  }

  consultaNumeroConectados(idInterseccion: string){
    const URL_SERVICE = `${this._urlService.getEndPointConsultas()}/conexiones/${idInterseccion}/`;
    return this.http.get(URL_SERVICE);
  }

  ejecutarSemaforos(idInterseccion: string){
    const URL_SERVICE = `${this._urlService.getEndPointEjecucion()}/ejecutar/${idInterseccion}/`;
    return this.http.get(URL_SERVICE);
  }
}