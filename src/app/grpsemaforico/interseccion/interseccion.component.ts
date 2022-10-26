import { Component, OnInit } from '@angular/core';
import { InterseccionModel } from 'src/app/models/interseccion.model';
import { InterseccionService } from 'src/app/servicios/intersecciones.service';

@Component({
  selector: 'app-interseccion',
  templateUrl: './interseccion.component.html',
  styleUrls: ['./interseccion.component.css']
})
export class InterseccionComponent implements OnInit {

  interseccionList: InterseccionModel[] = [];
  seleccionado:string; 

  constructor(private interseccionService: InterseccionService) {
    this.seleccionado = "";
  }

  ngOnInit(): void {
    this.interseccionService.consultarIntersecciones().subscribe( (data: InterseccionModel[]) => {
      this.interseccionList = data;
    });
  }

}
