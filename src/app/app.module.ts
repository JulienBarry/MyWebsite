import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BASE_URL } from './app.tokens';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { FooterComponent } from './footer/footer.component';
import { AngebotsuebersichtComponent } from './angebotsuebersicht/angebotsuebersicht.component';
import { ContentInspirationComponent } from './content-inspiration/content-inspiration.component';
import { ContentPersoenlichesComponent } from './content-persoenliches/content-persoenliches.component';
import { ContentGespraecheComponent } from './content-gespraeche/content-gespraeche.component';
import { ModalComponent } from './modal/modal.component';
import { ContentEntspannungComponent } from './content-entspannung/content-entspannung.component';
import { ContentKlangreiseComponent } from './content-klangreise/content-klangreise.component';
import { ContentErnaehrungComponent } from './content-ernaehrung/content-ernaehrung.component';
import { BtnAnmeldungComponent } from './btn-anmeldung/btn-anmeldung.component';
import { ModalVNahrungComponent } from './modal-vnahrung/modal-vnahrung.component';
import { ModalGWasserComponent } from './modal-gwasser/modal-gwasser.component';
import { ModalAVSComponent } from './modal-avs/modal-avs.component';
import { ModalKontaktComponent } from './modal-kontakt/modal-kontakt.component';
import { ImpressumComponent } from './impressum/impressum.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentHomeComponent,
    FooterComponent,
    AngebotsuebersichtComponent,
    routingComponents,
    ContentInspirationComponent,
    ContentPersoenlichesComponent,
    ContentGespraecheComponent,
    ModalComponent,
    ContentEntspannungComponent,
    ContentKlangreiseComponent,
    ContentErnaehrungComponent,
    BtnAnmeldungComponent,
    ModalVNahrungComponent,
    ModalGWasserComponent,
    ModalAVSComponent,
    ModalKontaktComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  