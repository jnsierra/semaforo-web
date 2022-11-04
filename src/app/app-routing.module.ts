import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterseccionComponent } from './grpsemaforico/interseccion/interseccion.component';
import { GnrvisualizacionComponent } from './panel/gnrvisualizacion/gnrvisualizacion.component';

const routes: Routes = [
  { path: 'gnrvisualizacion', component: GnrvisualizacionComponent },
  { path: 'interseccion/:id', component: InterseccionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'gnrvisualizacion'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
