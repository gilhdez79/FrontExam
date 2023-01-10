import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';

const routes: Routes = [
  {path:'articulos', component:ArticulosComponent},
  {path:'tiendas', component:TiendasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
