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
  { path: 'home', component: HomeComponent},
  { path: 'inspiration', component: InspirationComponent},
  { path: 'persoenliches', component: PersoenlichesComponent},
  { path: 'gespraeche', component: GespraecheComponent},
  { path: 'entspannung', component: EntspannungComponent},
  { path: 'klangreise', component: KlangreiseComponent},
  { path: 'ernaehrung', component: ErnaehrungComponent},
  { path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, InspirationComponent, PersoenlichesComponent, GespraecheComponent, EntspannungComponent, ErnaehrungComponent, KlangreiseComponent, ImpressumComponent]