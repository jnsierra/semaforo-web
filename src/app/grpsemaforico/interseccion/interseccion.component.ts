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

  id:string;
  planSemaforico: PlanSemaforicoModel;
  datos:boolean; 
  tiempoActual:number;
  

  constructor(private interseccionService: InterseccionService,
    private activatedRoute: ActivatedRoute) {
      this.id = "";      
      this.planSemaforico = new PlanSemaforicoModel();
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
    });
    this.datos = false;
    this.tiempoActual = 0;
    const source = timer(0,1000);
    const subscribe = source.subscribe(val => this.cambiaTiempo(val));
  }

  ngOnInit(): void {
    this.consultaDatosInterseccion();
  }

  cambiaTiempo(tiempo:number){
    if(this.datos){
      this.tiempoActual = tiempo;
    }
    
  }

  consultaDatosInterseccion(){
    this.interseccionService.consultaInfInterseccion(this.id).subscribe( (data : PlanSemaforicoModel) => {
      this.planSemaforico = data;
      this.datos = true;
    });
  }

}