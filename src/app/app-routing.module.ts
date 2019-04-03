import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InspirationComponent } from './inspiration/inspiration.component';
import { PersoenlichesComponent } from './persoenliches/persoenliches.component';
import { GespraecheComponent } from './gespraeche/gespraeche.component';
import { EntspannungComponent } from './entspannung/entspannung.component';
import { HomeComponent } from './home/home.component';
import { KlangreiseComponent } from './klangreise/klangreise.component';
import { ErnaehrungComponent } from './ernaehrung/ernaehrung.component';
import { ImpressumComponent } from './impressum/impressum.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'inspiration', component: InspirationComponent, pathMatch: 'full'},
  { path: 'persoenliches', component: PersoenlichesComponent, pathMatch: 'full'},
  { path: 'gespraeche', component: GespraecheComponent, pathMatch: 'full'},
  { path: 'entspannung', component: EntspannungComponent, pathMatch: 'full'},
  { path: 'klangreise', component: KlangreiseComponent, pathMatch: 'full'},
  { path: 'ernaehrung', component: ErnaehrungComponent, pathMatch: 'full'},
  { path: 'impressum', component: ImpressumComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, InspirationComponent, PersoenlichesComponent, GespraecheComponent, EntspannungComponent, ErnaehrungComponent, KlangreiseComponent, ImpressumComponent]