import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SemaforoModel } from 'src/app/models/semaforo.model';

@Component({
  selector: 'app-semaforo-lineas',
  templateUrl: './semaforo-lineas.component.html',
  styleUrls: ['./semaforo-lineas.component.css']
})
export class SemaforoLineasComponent implements OnInit, AfterViewInit {

  @Input()
  accion: string;

  @Input()
  tiempo: number;

  @ViewChild('stage')
  stage: ElementRef<HTMLCanvasElement> = {} as ElementRef;

  verde:boolean;
  amarillo:boolean;
  rojo:boolean;
  intermitencia:boolean;

  constructor() {
    this.accion = "";
    this.tiempo = 0;
    this.verde = true;
    this.amarillo = true;
    this.rojo = true;
    this.intermitencia = true;
    this.tiempo = 0;
  }
  ngAfterViewInit(): void {
    this.repaint();    
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

  repaint(){
    if(this.stage !== undefined ){
      var context = this.stage.nativeElement.getContext('2d');
      if(context != null)  {
        context = this.getLuces(context);
        context.fillRect(1,1,22,18);
      }
    }
  }

  getLuces(context: CanvasRenderingContext2D): CanvasRenderingContext2D{
    let intermitencia = (this.intermitencia) ? 2: 1;
    if(this.verde){
      context.fillStyle = "#008F39";
    }
    if(this.amarillo){
      context.fillStyle = "#ff8000";
    }

    if(this.rojo){
      context.fillStyle = "#ff0000";
    }
    return context;
  }

}
