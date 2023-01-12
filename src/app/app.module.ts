import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HttpClientModule } from '@angular/common/http';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    TiendasComponent,
    ListaArticulosComponent,
    ModalEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
