import { OnInit, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UrlServices {

    protocol: string;
    server: string;
    port: string;
    context: string;

    urlBase: string;


    constructor() {
        this.urlBase = "";
        this.server = 'localhost';
        this.protocol = 'http';
        this.port = '8080';
        this.context = 'api/';
        this.init();
    }

    init() {
        this.urlBase = environment.urlBaseBussines;
        console.log('****************');
        console.log(this.urlBase);
        console.log('****************');
    }

    getEndPointConsultas() {
        return `${ this.urlBase }v.1/consultaSemaforo`;
    }

    getEndPointSemaforo() {
        return `${ this.urlBase }v.1/semaforo`;
    }
}