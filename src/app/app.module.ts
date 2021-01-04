import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Chart } from 'chart.js'; 

import { AccueilPage } from '../pages/accueil/accueil';

import { BiometriePage } from '../pages/biometrie/biometrie';
import { OptionsPage } from '../pages/options/options';
import { PlateauInductionPage } from '../pages/plateau-induction/plateau-induction';
import { PlateauVasPage } from '../pages/plateau-vas/plateau-vas';
import { GestionFluidesPage } from '../pages/gestion-fluides/gestion-fluides';
import { AntalgiePage } from '../pages/antalgie/antalgie';
import { UrgencePage } from '../pages/urgence/urgence';
import { EntretienAnesthPage } from '../pages/entretien-anesth/entretien-anesth';
import { LocoRegionalePage } from '../pages/loco-regionale/loco-regionale';

import { ExtrophieVesicalePage } from '../pages/extrophie-vesicale/extrophie-vesicale';
import { AntiInfectieuxPage } from '../pages/anti-infectieux/anti-infectieux';

import { AnnuairePage } from '../pages/annuaire/annuaire'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceDataProvider } from '../providers/service-data/liste_anti_infectieux';
import { AnnuaireDataProvider } from '../providers/annuaire-data/annuaire-data';
import { ProtocolesPage } from '../pages/protocoles/protocoles';
import { RecommandationsPage } from '../pages/recommandations/recommandations';
import { MonitoragePage } from '../pages/monitorage/monitorage';
import { CourbesPage } from '../pages/courbes/courbes';

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    BiometriePage, 
    OptionsPage,
    PlateauInductionPage,
    PlateauVasPage,
    GestionFluidesPage,
    AntalgiePage,
    UrgencePage,
    EntretienAnesthPage,
    AntiInfectieuxPage,
    LocoRegionalePage,
    ExtrophieVesicalePage,
    AnnuairePage,
    ProtocolesPage,
    RecommandationsPage,
    MonitoragePage,
    CourbesPage,
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

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    BiometriePage, 
    OptionsPage,
    PlateauInductionPage,
    PlateauVasPage,
    GestionFluidesPage,
    AntalgiePage,
    UrgencePage,
    EntretienAnesthPage,
    AntiInfectieuxPage,
    LocoRegionalePage,
    ExtrophieVesicalePage,
    AnnuairePage,
    ProtocolesPage,
    RecommandationsPage,
    MonitoragePage,
    CourbesPage,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceDataProvider,
    AnnuaireDataProvider,
    InAppBrowser, 
  ]
})
export class AppModule {}
