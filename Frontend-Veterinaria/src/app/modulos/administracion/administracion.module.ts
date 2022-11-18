import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './usuarios/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './usuarios/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './usuarios/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './usuarios/buscar-persona/buscar-persona.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos-servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProductoServicioComponent } from './productos-servicios/buscar-producto-servicio/buscar-producto-servicio.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
    BuscarProductoServicioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
