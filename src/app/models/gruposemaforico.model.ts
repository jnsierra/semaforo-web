import { PasoModel } from "./paso.model";
import { SemaforoModel } from "./semaforo.model";

export class GrupoSemaforicoModel{

    nro: number;
    nombre: string;
    semaforos: SemaforoModel[];
    pasos: PasoModel[];

    constructor(){
        this.nro = 0;
        this.nombre = "";
        this.semaforos = [];
        this.pasos = [];
    }

}