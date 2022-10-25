

import { HttpClient } from '@angular/common/http';
import { UrlServices } from './../general/url.entity';
import { Injectable } from '@angular/core';
import { InterseccionModel } from '../models/interseccion.model';

@Injectable({
  providedIn: 'root'
})
export class InterseccionService {

  constructor(private _urlService: UrlServices, private http: HttpClient){}

  consultarIntersecciones(){
    const URL_SERVICE = `${this._urlService.getEndPointConsultas()}/interseccion/`;
    return this.http.get<InterseccionModel[]>(URL_SERVICE);
  }

}