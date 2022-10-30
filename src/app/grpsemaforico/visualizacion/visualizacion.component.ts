import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RespuestaMensajeModel } from 'src/app/models/respuestamensaje.model';
import { InterseccionService } from 'src/app/servicios/intersecciones.service';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.css']
})
export class VisualizacionComponent implements OnInit,OnDestroy {

  intervalId:any;
  _id: string;
  validaId: boolean = false;
  interseccionFuncionado: boolean = false;
  numClientes: number;

  @Input("id") set id(value: string) {
    this._id = value;
    this.consultaDatosInterseccion(this._id);
  }

  constructor(private interseccionService: InterseccionService) {
    this._id = '0';
    this.numClientes = 0;
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnInit(): void {
  }

  consultaDatosInterseccion(id: string) {
    if ("" != id) {
      this.validaId = true;
      //Consulto el ciclo en el que se encuentra la interseccion
      this.interseccionService.consultarCiclo(id).subscribe( (data: RespuestaMensajeModel) => {
        if(data.code == 1){
          this.interseccionFuncionado = true;
        }else{
          this.interseccionFuncionado = false;
        }
      });
    }else{
      this.validaId = false;
    }
  }

  iniciar(){
    console.log('Iniciar Interseccion');
    //Llamo al servicio de cargar json
    this.interseccionService.cargarJson(this._id).subscribe(resp => {
      console.log(resp);
      if(resp){
        this.esperarClientes();
      }else{
        alert('Error al cargar el json');
      }
    });
  }

  esperarClientes(){
    this.interseccionService.esperarClientes().subscribe(resp => {
      if(resp){
        alert('Esperando clientes');
        this.iniciarConsultasCiclicas();
      }else{
        alert('Fallo al esperar clientes');
      }
    });
  }

  iniciarConsultasCiclicas(){
    let valor = setInterval(this.consultaClientesConectados, 15000, this.interseccionService);
    console.log(valor);
  }

  consultaClientesConectados(interseccionService: InterseccionService ){
    let numeroClientesConectados;
    interseccionService.consultaNumeroClientes().subscribe( (data: RespuestaMensajeModel) => {
      if(data.code == 1){
        numeroClientesConectados = data.respuesta;
        return numeroClientesConectados;
      }
    });
  }

  iniciarSemaforo(){

  }
}
