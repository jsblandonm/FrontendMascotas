import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraDeNavegacionComponent } from './plantilla/barra-de-navegacion/barra-de-navegacion.component';
import { PieDePaginaComponent } from './plantilla/pie-de-pagina/pie-de-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    PieDePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
