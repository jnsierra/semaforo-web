import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SemaforoModel } from 'src/app/models/semaforo.model';

@Component({
  selector: 'app-semaforotiempo',
  templateUrl: './semaforotiempo.component.html',
  styleUrls: ['./semaforotiempo.component.css']
})
export class SemaforotiempoComponent implements OnInit, AfterViewInit {

  @Input()
  accion: string;
  @Input()
  tipoSemaforo: SemaforoModel; 
  @Input()
  tiempo:number;

  verde:boolean;
  amarillo:boolean;
  rojo:boolean;
  intermitencia:boolean;

  @ViewChild('stage')
  stage: ElementRef<HTMLCanvasElement> = {} as ElementRef;

  constructor() {
    this.accion = "";
    this.tipoSemaforo = new SemaforoModel();
    this.verde = true;
    this.amarillo = true;
    this.rojo = true;
    this.intermitencia = true;
    this.tiempo = 0;
  }
  ngAfterViewInit(): void {
    this.pintarSemaforo();
  }

  ngOnInit(): void {
    this.validaOperacion();    
  }

  validaOperacion(){
    var intermitenciaN = this.accion.substring(0, 1);
    var rojoN = this.accion.substring(1, 2);
    var amarilloN = this.accion.substring(2, 3);
    var verdeN = this.accion.substring(3, 4);
    this.intermitencia = (intermitenciaN === '0') ? false : true;
    
    this.rojo = (rojoN === '0') ? false : true;
    this.amarillo = (amarilloN === '0') ? false : true;
    this.verde = (verdeN === '0') ? false : true;
  }

  pintarSemaforo(){
    if(this.stage !== undefined ){
      var context = this.stage.nativeElement.getContext('2d');
      if(context != null)  {
        context.fillStyle = "#000000";
        context.strokeRect(5, 5, 50, 80);
        context.beginPath();
        context.arc(30, 20, 10, 0, Math.PI * 2, false );
        context.stroke();
        context.beginPath();
        context.arc(30, 45, 10, 0, Math.PI * 2, false );
        context.stroke();
        context.beginPath();
        context.arc(30, 70, 10, 0, Math.PI * 2, false );
        context.stroke();
        this.pintarLuces(context);
      }
    }
  }

  pintarLuces(context: CanvasRenderingContext2D){
    let intermitencia = (this.intermitencia) ? 2: 1;
    if(this.verde){
      context.fillStyle = "#008F39";
      context.beginPath();
      context.arc(30, 70, 10, 0, (Math.PI * 2) / intermitencia, false );
      context.fill();
    }
    if(this.amarillo){
      context.fillStyle = "#ff8000";
      context.beginPath();
      context.arc(30, 45, 10, 0, (Math.PI * 2) / intermitencia, false );
      context.fill();
    }

    if(this.rojo){
      context.fillStyle = "#ff0000";
      context.beginPath();
      context.arc(30, 20, 10, 0, (Math.PI * 2) / intermitencia, false );
      context.fill();
    }

  }
}