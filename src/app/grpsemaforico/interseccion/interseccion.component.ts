import { Component, OnInit } from '@angular/core';
import { InterseccionModel } from 'src/app/models/interseccion.model';
import { InterseccionService } from 'src/app/servicios/intersecciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanSemaforicoModel } from 'src/app/models/plansemaforico.model';

@Component({
  selector: 'app-interseccion',
  templateUrl: './interseccion.component.html',
  styleUrls: ['./interseccion.component.css']
})
export class InterseccionComponent implements OnInit {

  id:string;
  planSemaforico: PlanSemaforicoModel;

  constructor(private interseccionService: InterseccionService,
    private activatedRoute: ActivatedRoute) {
      this.id = "";      
      this.planSemaforico = new PlanSemaforicoModel();
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.consultaDatosInterseccion();
  }

  consultaDatosInterseccion(){
    this.interseccionService.consultaInfInterseccion(this.id).subscribe( (data : PlanSemaforicoModel) => {
      this.planSemaforico = data;
      console.log(data);
    });
  }

}