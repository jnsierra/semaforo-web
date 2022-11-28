import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-semaforo-unico',
  templateUrl: './semaforo-unico.component.html',
  styleUrls: ['./semaforo-unico.component.css']
})
export class SemaforoUnicoComponent implements OnInit, AfterViewInit {

  accion: string;

  @Input()
  set _accion(val: string){
    this.accion = val;
    console.log(val);
    this.validaOperacion();
    this.rePaint();
  }

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
    this.rePaint();
    this.validaOperacion();
  }

  ngOnInit(): void {
    
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

  rePaint(){
    if(this.stage !== undefined ){
      var context = this.stage.nativeElement.getContext('2d');
      if(context != null)  {
        context.fillStyle = "#ffffff";
        context.fillRect(1, 1, 27, 42);
        context.fillStyle = "#000000";
        context.strokeRect(2, 2, 25, 40);
        context.beginPath();
        context.arc(14, 10, 5, 0, Math.PI * 2, false );
        context.stroke();
        context.beginPath();
        context.arc(14, 23, 5, 0, Math.PI * 2, false );
        context.stroke();
        context.beginPath();
        context.arc(14, 34, 5, 0, Math.PI * 2, false );
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
      context.arc(14, 34, 5, 0, (Math.PI * 2) / intermitencia, false );
      context.fill();
    }
    if(this.amarillo){
      context.fillStyle = "#ff8000";
      context.beginPath();
      context.arc(14, 23, 5, 0, (Math.PI * 2) / intermitencia, false );
      context.fill();
    }

    if(this.rojo){
      context.fillStyle = "#ff0000";
      context.beginPath();
      context.arc(14, 10, 5, 0, (Math.PI * 2) / intermitencia, false );
      context.fill();
    }

  }

}
