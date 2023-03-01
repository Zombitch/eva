import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './components/maps/maps.component';
import { WeaponsComponent } from './components/weapons/weapons.component';

const routes: Routes = [
  { path: 'weapons', component: WeaponsComponent, title:"EVA - Armes"},
  { path: 'maps', component: MapsComponent, title:"EVA - Maps"},
  { path: '',   redirectTo: '/weapons', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
