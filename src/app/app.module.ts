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

import { OptionsPage } from '../pages/modules/options/options';
import { PlateauInductionPage } from '../pages/modules/plateau-induction/plateau-induction';
import { PlateauVasPage } from '../pages/modules/plateau-vas/plateau-vas';
import { GestionFluidesPage } from '../pages/modules/gestion-fluides/gestion-fluides';
import { AntalgiePage } from '../pages/modules/antalgie/antalgie';
import { EntretienAnesthPage } from '../pages/modules/entretien-anesth/entretien-anesth';
import { LocoRegionalePage } from '../pages/modules/loco-regionale/loco-regionale';

import { ExtrophieVesicalePage } from '../pages/chirurgies/extrophie-vesicale/extrophie-vesicale';
import { MedicamentsPage } from '../pages/main_pages/medicaments/medicaments';


import { ProtocolesPage } from '../pages/main_pages/protocoles/protocoles';
import { RecommandationsPage } from '../pages/main_pages/recommandations/recommandations';
import { MonitoragePage } from '../pages/modules/monitorage/monitorage';
import { CourbesPage } from '../pages/modules/courbes/courbes';
import { AntibioprophylaxiePage } from '../pages/modules/antibioprophylaxie/antibioprophylaxie';
import { ScoresPage } from '../pages/main_pages/scores/scores';
import { InfoPage } from '../pages/main_pages/info/info';
import { ScoliosePage } from '../pages/chirurgies/scoliose/scoliose';
import { SauvegardePatientPage } from '../pages/modules/sauvegarde-patient/sauvegarde-patient';
import { MainPage } from '../pages/main/main';
import { AniPage } from '../pages/pages_dispositifs/ani/ani';
import { AcrPage } from '../pages/Urgences/acr/acr';
import { AnaphylaxiePage } from '../pages/Urgences/anaphylaxie/anaphylaxie';
import { AsthmePage } from '../pages/Urgences/asthme/asthme';
import { CatecholaminesPage } from '../pages/Urgences/catecholamines/catecholamines';
import { EpilepsiePage } from '../pages/Urgences/epilepsie/epilepsie';
import { HtaPage } from '../pages/Urgences/hta/hta';
import { HtmPage } from '../pages/Urgences/htm/htm';
import { IntoxicationPage } from '../pages/Urgences/intoxication/intoxication';
import { MetaboliquePage } from '../pages/Urgences/metabolique/metabolique';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AldretePage } from '../pages/pages_scores/aldrete/aldrete';
import { AnticoagscorePage } from '../pages/pages_scores/anticoagscore/anticoagscore';
import { BromagePage } from '../pages/pages_scores/bromage/bromage';
import { EdinPage } from '../pages/pages_scores/edin/edin';
import { EvendolPage } from '../pages/pages_scores/evendol/evendol';
import { HemstopPage } from '../pages/pages_scores/hemstop/hemstop';
import { PadssPage } from '../pages/pages_scores/padss/padss';
import { ShsPage } from '../pages/pages_scores/shs/shs';
import { VpopPage } from '../pages/pages_scores/vpop/vpop';


@NgModule({
  declarations: [

    /* MAIN PAGES */
    MyApp,
    AccueilPage,
    MainPage, 
    MedicamentsPage,
    ProtocolesPage,
    RecommandationsPage,
    ScoresPage, 
    InfoPage,
    TutorialPage,

    /* MODULES */
    OptionsPage,
    PlateauInductionPage,
    PlateauVasPage,
    GestionFluidesPage,
    AntalgiePage,
    EntretienAnesthPage,
    LocoRegionalePage,
    MonitoragePage,
    CourbesPage,
    AntibioprophylaxiePage,
    SauvegardePatientPage, 
   

    /* CHIRURGIES */
    ExtrophieVesicalePage,
    ScoliosePage,

    /* DISPOSTIFS */
    AniPage,


    /* URGENCES */
    AcrPage,
    AnaphylaxiePage,
    AsthmePage,
    CatecholaminesPage,
    EpilepsiePage,
    HtaPage, 
    HtmPage,
    IntoxicationPage,
    MetaboliquePage, 

    /* SCORES  */
    AldretePage, 
    AnticoagscorePage,
    BromagePage,
    EdinPage,
    EvendolPage,
    HemstopPage,
    PadssPage,
    ShsPage,
    VpopPage, 
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
    AcrPage,
    AnaphylaxiePage,
    AsthmePage,
    CatecholaminesPage,
    EpilepsiePage,
    HtaPage, 
    HtmPage,
    IntoxicationPage,
    MetaboliquePage, 
    TutorialPage,
    AldretePage, 
    AnticoagscorePage,
    BromagePage,
    EdinPage,
    EvendolPage,
    HemstopPage,
    PadssPage,
    ShsPage,
    VpopPage, 
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
