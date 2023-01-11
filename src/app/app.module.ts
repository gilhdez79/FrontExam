import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HttpClientModule } from '@angular/common/http';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    TiendasComponent,
    ListaArticulosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
