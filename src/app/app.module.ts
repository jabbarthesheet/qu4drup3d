import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceDataProvider } from '../providers/service-data/liste_medicaments';

import { AccueilPage } from '../pages/accueil/accueil';

import { OptionsPage } from '../pages/options/options';
import { PlateauInductionPage } from '../pages/plateau-induction/plateau-induction';
import { PlateauVasPage } from '../pages/plateau-vas/plateau-vas';
import { GestionFluidesPage } from '../pages/gestion-fluides/gestion-fluides';
import { AntalgiePage } from '../pages/antalgie/antalgie';
import { UrgencePage } from '../pages/urgence/urgence';
import { EntretienAnesthPage } from '../pages/entretien-anesth/entretien-anesth';
import { LocoRegionalePage } from '../pages/loco-regionale/loco-regionale';

import { ExtrophieVesicalePage } from '../pages/extrophie-vesicale/extrophie-vesicale';
import { MedicamentsPage } from '../pages/medicaments/medicaments';


import { ProtocolesPage } from '../pages/protocoles/protocoles';
import { RecommandationsPage } from '../pages/recommandations/recommandations';
import { MonitoragePage } from '../pages/monitorage/monitorage';
import { CourbesPage } from '../pages/courbes/courbes';
import { AntibioprophylaxiePage } from '../pages/antibioprophylaxie/antibioprophylaxie';
import { ScoresPage } from '../pages/scores/scores';
import { InfoPage } from '../pages/info/info';
import { ScoliosePage } from '../pages/scoliose/scoliose';
import { SauvegardePatientPage } from '../pages/sauvegarde-patient/sauvegarde-patient';
import { MainPage } from '../pages/main/main';
import { AniPage } from '../pages/ani/ani';


@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    OptionsPage,
    PlateauInductionPage,
    PlateauVasPage,
    GestionFluidesPage,
    AntalgiePage,
    UrgencePage,
    EntretienAnesthPage,
    MedicamentsPage,
    LocoRegionalePage,
    ExtrophieVesicalePage,
    ScoliosePage,
    ProtocolesPage,
    RecommandationsPage,
    MonitoragePage,
    CourbesPage,
    AntibioprophylaxiePage,
    ScoresPage, 
    InfoPage,
    SauvegardePatientPage, 
    MainPage, 
    AniPage,
  ],

  imports: [
    HttpClientModule,  
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'retour',
      iconMode: 'md'
     }),
    IonicStorageModule.forRoot(),
  ],

  bootstrap: [
    IonicApp,
  ],

  entryComponents: 
  [
    MyApp,
    AccueilPage,
    OptionsPage,
    PlateauInductionPage,
    PlateauVasPage,
    GestionFluidesPage,
    AntalgiePage,
    UrgencePage,
    EntretienAnesthPage,
    MedicamentsPage,
    LocoRegionalePage,
    ExtrophieVesicalePage,
    ScoliosePage, 
    ProtocolesPage,
    RecommandationsPage,
    MonitoragePage,
    CourbesPage,
    AntibioprophylaxiePage,
    ScoresPage,
    InfoPage,
    SauvegardePatientPage, 
    MainPage,
    AniPage,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceDataProvider,
    InAppBrowser, 
  ],

  exports: [ 

   ]
})


export class AppModule {}
