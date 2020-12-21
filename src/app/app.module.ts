import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { App, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { AccueilPage } from '../pages/accueil/accueil';

import { PatientPage } from '../pages/patient/patient';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceDataProvider } from '../providers/service-data/liste_anti_infectieux';

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    PatientPage,
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
    PatientPage,
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
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceDataProvider
  ]
})
export class AppModule {}
