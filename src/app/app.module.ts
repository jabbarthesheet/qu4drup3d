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

import { GeneralitesAlrPage } from '../pages/pages-alr/generalites-alr/generalites-alr' ; 
import { LocoRegionalePage } from '../pages/modules/loco-regionale/loco-regionale';
import { TapBlockPage } from '../pages/pages-alr/tap-block/tap-block'; 
import { PeriduralePage } from '../pages/pages-alr/peridurale/peridurale'; 
import { BlocGrandsDroitsPage } from '../pages/pages-alr/bloc-grands-droits/bloc-grands-droits';
import { BlocMaxillairePage } from '../pages/pages-alr/bloc-maxillaire/bloc-maxillaire'; 
import { BlocTronculaireAbPage } from '../pages/pages-alr/bloc-tronculaire-ab/bloc-tronculaire-ab';
import { BlocInterCostoBrachialPage } from '../pages/pages-alr/bloc-inter-costo-brachial/bloc-inter-costo-brachial';
import { BlocAxillairePage } from '../pages/pages-alr/bloc-axillaire/bloc-axillaire';
import { BlocSupraClaviculairePage } from '../pages/pages-alr/bloc-supra-claviculaire/bloc-supra-claviculaire';
import { BlocInterScaleniquePage } from '../pages/pages-alr/bloc-inter-scalenique/bloc-inter-scalenique';
import { BlocNerfSaphenePage } from '../pages/pages-alr/bloc-nerf-saphene/bloc-nerf-saphene';
import { BlocSciatiquePoplitePage } from '../pages/pages-alr/bloc-sciatique-poplite/bloc-sciatique-poplite';
import { BlocSciatiqueSousGlutealPage } from '../pages/pages-alr/bloc-sciatique-sous-gluteal/bloc-sciatique-sous-gluteal';
import { BlocNerfObturateurPage } from '../pages/pages-alr/bloc-nerf-obturateur/bloc-nerf-obturateur';
import { BlocCanalAdducteursPage } from '../pages/pages-alr/bloc-canal-adducteurs/bloc-canal-adducteurs';
import { BlocFemoralPage } from '../pages/pages-alr/bloc-femoral/bloc-femoral';
import { PengBlocPage } from '../pages/pages-alr/peng-bloc/peng-bloc';
import { CutaneLateralCuissePage } from '../pages/pages-alr/cutane-lateral-cuisse/cutane-lateral-cuisse';
import { BlocPudendalPage } from '../pages/pages-alr/bloc-pudendal/bloc-pudendal';
import { BlocPenienPage } from '../pages/pages-alr/bloc-penien/bloc-penien';

import { NouveauNeSspiPage } from '../pages/chirurgies/nouveau-ne-sspi/nouveau-ne-sspi'; 
import { ExtrophieVesicalePage } from '../pages/chirurgies/extrophie-vesicale/extrophie-vesicale';
import { ScoliosePage } from '../pages/chirurgies/scoliose/scoliose';
import { LaparoschisisPage } from '../pages/chirurgies/laparoschisis/laparoschisis' ;
import { ChirurgieOrthognatiquePage } from '../pages/chirurgies/chirurgie-orthognatique/chirurgie-orthognatique' ;

import { MedicamentsPage } from '../pages/main_pages/medicaments/medicaments';

import { EnrhumePage } from '../pages/pages_scores/enrhume/enrhume' ;
import { VentilationDifficilePage } from '../pages/pages_scores/ventilation-difficile/ventilation-difficile';
import { IotDifficilePage } from '../pages/pages_scores/iot-difficile/iot-difficile';
import { VmiotImpossiblePage } from '../pages/pages_scores/vmiot-impossible/vmiot-impossible';
import { BilanPreOpPage } from '../pages/pages_scores/bilan-pre-op/bilan-pre-op' ;
import { QuestionnaireHemostasePage } from '../pages/pages_scores/questionnaire-hemostase/questionnaire-hemostase' ;
import { CriteresAmbulatoirePage } from '../pages/pages_scores/criteres-ambulatoire/criteres-ambulatoire' ;
import { DrepanocytosePage } from '../pages/pages_scores/drepanocytose/drepanocytose' ;
import { MyopathiesPage } from '../pages/pages_scores/myopathies/myopathies';
import { MucopolysaccharidosePage } from '../pages/pages_scores/mucopolysaccharidose/mucopolysaccharidose';


import { ProtocolesPage } from '../pages/main_pages/protocoles/protocoles';
import { RecommandationsPage } from '../pages/main_pages/recommandations/recommandations';
import { MonitoragePage } from '../pages/modules/monitorage/monitorage';
import { CourbesPage } from '../pages/modules/courbes/courbes';
import { AntibioprophylaxiePage } from '../pages/modules/antibioprophylaxie/antibioprophylaxie';
import { ScoresPage } from '../pages/main_pages/scores/scores';
import { InfoPage } from '../pages/main_pages/info/info';
import { SauvegardePatientPage } from '../pages/modules/sauvegarde-patient/sauvegarde-patient';
import { MainPage } from '../pages/main/main';


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

import { AniPage } from '../pages/pages_dispositifs/ani/ani';
import { DopplerOesophagienPage } from '../pages/pages_dispositifs/doppler-oesophagien/doppler-oesophagien' ;
import { ALRPageModule } from '../pages/modules/loco-regionale/loco-regionale.module';


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
    NouveauNeSspiPage,
    ExtrophieVesicalePage,
    ScoliosePage,
    LaparoschisisPage,
    ChirurgieOrthognatiquePage,

    /* DISPOSTIFS */
    AniPage,
    DopplerOesophagienPage,


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

    /* SCORES et ALGORITHMES  */
    AldretePage, 
    AnticoagscorePage,
    BromagePage,
    EdinPage,
    EvendolPage,
    HemstopPage,
    PadssPage,
    ShsPage,
    VpopPage, 
    EnrhumePage, 
    VentilationDifficilePage,
    IotDifficilePage,
    VmiotImpossiblePage,
    BilanPreOpPage,
    QuestionnaireHemostasePage,
    CriteresAmbulatoirePage,
    DrepanocytosePage,
    MyopathiesPage,
    MucopolysaccharidosePage,

    /* ALR */ 
    TapBlockPage, 
    PeriduralePage,
    GeneralitesAlrPage,
    BlocGrandsDroitsPage,
    BlocMaxillairePage, 
    CutaneLateralCuissePage,
    PengBlocPage,
    BlocFemoralPage,
    BlocCanalAdducteursPage,
    BlocNerfObturateurPage,
    BlocSciatiqueSousGlutealPage,
    BlocSciatiquePoplitePage,
    BlocNerfSaphenePage,
    BlocInterScaleniquePage,
    BlocSupraClaviculairePage,
    BlocAxillairePage,
    BlocInterCostoBrachialPage,
    BlocTronculaireAbPage,
    BlocPudendalPage,
    BlocPenienPage,
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
    LaparoschisisPage,
    NouveauNeSspiPage,
    ChirurgieOrthognatiquePage,


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
    DopplerOesophagienPage,
    
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
    
    EnrhumePage,
    VentilationDifficilePage,
    IotDifficilePage, 
    VmiotImpossiblePage,
    BilanPreOpPage,
    QuestionnaireHemostasePage,
    CriteresAmbulatoirePage,
    DrepanocytosePage,
    MyopathiesPage,
    MucopolysaccharidosePage,


    TapBlockPage, 
    PeriduralePage, 
    GeneralitesAlrPage,
    BlocGrandsDroitsPage,
    BlocMaxillairePage,
    CutaneLateralCuissePage,
    PengBlocPage,
    BlocFemoralPage,
    BlocCanalAdducteursPage,
    BlocNerfObturateurPage,
    BlocSciatiqueSousGlutealPage,
    BlocSciatiquePoplitePage,
    BlocNerfSaphenePage,
    BlocInterScaleniquePage,
    BlocSupraClaviculairePage,
    BlocAxillairePage,
    BlocInterCostoBrachialPage,
    BlocTronculaireAbPage,
    BlocPudendalPage,
    BlocPenienPage

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
