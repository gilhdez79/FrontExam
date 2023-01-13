import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'articulos', component:ArticulosComponent},
  {path:'tiendas', component:TiendasComponent},
  {path:'lista-articulos', component:ListaArticulosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
