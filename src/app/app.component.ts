import { Component, ViewChild, NgModule } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { AccueilPage } from '../pages/accueil/accueil';
import { PlateauInductionPage } from '../pages/plateau-induction/plateau-induction';
import { GestionFluidesPage } from '../pages/gestion-fluides/gestion-fluides';
import { PlateauVasPage } from '../pages/plateau-vas/plateau-vas';
import { AntalgiePage } from '../pages/antalgie/antalgie';
import { UrgencePage } from '../pages/urgence/urgence'; 
import { PreMedicationPage } from '../pages/pre-medication/pre-medication';
import { EntretienAnesthPage } from '../pages/entretien-anesth/entretien-anesth';
import { MedicamentsPage } from '../pages/medicaments/medicaments';
import { LocoRegionalePage } from '../pages/loco-regionale/loco-regionale';
import { ExtrophieVesicalePage } from '../pages/extrophie-vesicale/extrophie-vesicale';
import { MonitoragePage } from '../pages/monitorage/monitorage';
import { ProtocolesPage } from '../pages/protocoles/protocoles';
import { RecommandationsPage } from '../pages/recommandations/recommandations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourbesPage } from '../pages/courbes/courbes';
import { ScoresPage } from '../pages/scores/scores';
import { InfoPage } from '../pages/info/info';
import { MainPage } from '../pages/main/main';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  // make AccueilPage the root (or first) page
  rootPage = MainPage;
  pages: Array<{title: string, component: any}>;
  navigate : any;

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
      { title : 'Voies aériennes', component: PlateauVasPage },
      { title : "Urgences", component : UrgencePage },
      { title : 'Entretien anesthéique', component: EntretienAnesthPage },
      { title : 'Gestion des fluides', component: GestionFluidesPage },
      { title : 'Analgésie & NVPO', component: AntalgiePage },
      { title : 'Medicaments', component: MedicamentsPage },
      { title : 'Loco-régionale', component : LocoRegionalePage },
      { title : 'Extrophie vésicale', component : ExtrophieVesicalePage },
      { title : 'Protocoles', component : ProtocolesPage },
      { title : 'Recommandations' , component : RecommandationsPage },
      { title : 'Monitorage', component : MonitoragePage },
      { title : 'Courbes', component : CourbesPage },
      { title : 'Scores' , component: ScoresPage },
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

  /* openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
*/


};




