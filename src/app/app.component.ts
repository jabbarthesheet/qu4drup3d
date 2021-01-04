import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';



import { AccueilPage } from '../pages/accueil/accueil';
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
import { MonitoragePage } from '../pages/monitorage/monitorage';
import { ProtocolesPage } from '../pages/protocoles/protocoles';
import { RecommandationsPage } from '../pages/recommandations/recommandations';

import { AnnuairePage } from '../pages/annuaire/annuaire'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourbesPage } from '../pages/courbes/courbes';



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
      { title : 'Protocoles', component : ProtocolesPage},
      {title : 'Recommandations' , component : RecommandationsPage},
      {title: 'Monitorage', component : MonitoragePage},
      {title : 'Courbes', component : CourbesPage},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
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


openProtocoles() {
  this.nav.setRoot(ProtocolesPage); 
  this.menu.close();
};

openRecommandations()
{
  this.nav.setRoot(RecommandationsPage); 
  this.menu.close();
};

openAccueilPage ()
{
   this.nav.setRoot(AccueilPage); 
   this.menu.close();
};

openAnnuaire()
 {
  this.nav.setRoot(AnnuairePage); 
   this.menu.close();
   };


};




