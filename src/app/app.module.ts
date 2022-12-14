import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterseccionComponent } from './grpsemaforico/interseccion/interseccion.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';

import { VisualizacionComponent } from './grpsemaforico/visualizacion/visualizacion.component';
import { GnrvisualizacionComponent } from './panel/gnrvisualizacion/gnrvisualizacion.component';
import { CentralesComponent } from './grpsemaforico/centrales/centrales.component';
import { SemaforotiempoComponent } from './grpsemaforico/semaforotiempo/semaforotiempo.component';
import { CentralUnicoComponent } from './grpsemaforico/central-unico/central-unico.component';
import { SemaforoUnicoComponent } from './grpsemaforico/semaforo-unico/semaforo-unico.component';
import { CentralMapaLineasComponent } from './grpsemaforico/central-mapa-lineas/central-mapa-lineas.component';
import { SemaforoLineasComponent } from './grpsemaforico/semaforo-lineas/semaforo-lineas.component';


@NgModule({
  declarations: [
    AppComponent,
    InterseccionComponent,
    VisualizacionComponent,
    GnrvisualizacionComponent,
    CentralesComponent,
    SemaforotiempoComponent,
    CentralUnicoComponent,
    SemaforoUnicoComponent,
    CentralMapaLineasComponent,
    SemaforoLineasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatTabsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
