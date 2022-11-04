import { GrupoSemaforicoModel } from "./gruposemaforico.model";

export class PlanSemaforicoModel{

    nombreInterseccion: string;
    numeroCentral: number; 
    grpSemaforico: GrupoSemaforicoModel[];
    cicloIntersecion: number;

    constructor(){
        this.nombreInterseccion = "";
        this.numeroCentral = 0;
        this.cicloIntersecion = 0;
        this.grpSemaforico = [];

    }
}