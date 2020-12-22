import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceDataProvider } from "../providers/service-data/liste_anti_infectieux";



import { AccueilPage } from '../pages/accueil/accueil';
import { PatientPage } from '../pages/patient/patient';
import { BiometriePage } from '../pages/biometrie/biometrie';
import { OptionsPage } from '../pages/options/options';
import { PlateauInductionPage } from '../pages/plateau-induction/plateau-induction';
import { GestionFluidesPage } from '../pages/gestion-fluides/gestion-fluides';
import { PlateauVasPage } from '../pages/plateau-vas/plateau-vas';
import { AntalgiePage } from '../pages/antalgie/antalgie';
import { UrgencePage } from '../pages/urgence/urgence'; 
import { PreMedicationPage } from '../pages/pre-medication/pre-medication';
import { EntretienAnesthPage } from '../pages/entretien-anesth/entretien-anesth';
import { AntiInfectieuxPage } from '../pages/anti-infectieux/anti-infectieux';
import { LocoRegionalePage } from '../pages/loco-regionale/loco-regionale';
import { ExtrophieVesicalePage } from '../pages/extrophie-vesicale/extrophie-vesicale';

import { AnnuairePage } from '../pages/annuaire/annuaire'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  


  // make AccueilPage the root (or first) page
  rootPage = AccueilPage;
  pages: Array<{title: string, component: any}>;
  navigate : any;
  isShownCalculs: boolean=false; 
  isShownProtocoles: boolean=false;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title : 'Accueil', component: AccueilPage },
      { title : 'Patient' , component: PatientPage },
      { title : 'Premedication', component:PreMedicationPage },
      { title : 'Plateau pour induction', component: PlateauInductionPage },
      { title : 'Voies aériennes', component: PlateauVasPage},
      { title : "Urgences", component : UrgencePage},
      { title : 'Entretien anesthéique', component: EntretienAnesthPage},
      { title : 'Gestion des fluides', component: GestionFluidesPage },
      { title : 'Analgésie & NVPO', component: AntalgiePage},
      { title : 'Anti-infectieux', component: AntiInfectieuxPage},
      { title : 'Loco-régionale', component : LocoRegionalePage},
      { title : 'Extrophie vésicale', component : ExtrophieVesicalePage},
      {title : 'Annuaire', component : AnnuairePage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ToggleCalculs(){
    this.isShownCalculs = !this.isShownCalculs; 
    this.isShownProtocoles = false;
  }

  ToggleProtocoles(){
    this.isShownProtocoles = !this.isShownProtocoles;
    this.isShownCalculs = false; 
  }

  /* openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
*/

  openPatientPage() {
    console.log("ouverture de page patient");
    this.nav.setRoot(PatientPage); 
    this.menu.close();
  };

  openInductionPage() {
    console.log("ouverture de page induction");
    this.nav.setRoot(PlateauInductionPage); 
    this.menu.close();
  };

  openVASPage() {
    console.log("ouverture de page VAS");
    this.nav.setRoot(PlateauVasPage); 
    this.menu.close();
  };

  
  openALRPage() {
    console.log("ouverture de page ALR");
    this.nav.setRoot(LocoRegionalePage); 
    this.menu.close();
  };
  

  openUrgencesPage() {
    console.log("ouverture de page urgences");
    this.nav.setRoot(UrgencePage); 
    this.menu.close();
  };

  openEntretienPage() {
    console.log("ouverture de page entrtien");
    this.nav.setRoot(EntretienAnesthPage); 
    this.menu.close();
  };

  openFluidesPage() {
    console.log("ouverture de page fluides");
    this.nav.setRoot(GestionFluidesPage); 
    this.menu.close();
  };

  openAntalgiePage() {
    console.log("ouverture de page antalgie NVPO");
    this.nav.setRoot(AntalgiePage); 
    this.menu.close();
  };

  openAntiInfPage() {
    console.log("ouverture de page anti infectieux");
    this.nav.setRoot(AntiInfectieuxPage); 
    this.menu.close();
  };

  openExtrophieVesicalePage(){
    console.log("ouverture de page anti infectieux");
    this.nav.setRoot(ExtrophieVesicalePage); 
    this.menu.close();
  };

  openAccueilPage ()
  {
    console.log("ouverture de page d'accueil");
    this.nav.setRoot(AccueilPage); 
    this.menu.close();
  };

  openAnnuaire()
  {
    console.log("ouverture de page annuaire");
    this.nav.setRoot(AnnuairePage); 
    this.menu.close();
  };


};




