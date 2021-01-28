import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { InfoPage } from '../main_pages/info/info';
import { ProtocolesPage } from '../main_pages/protocoles/protocoles';
import { RecommandationsPage } from '../main_pages/recommandations/recommandations';
import { ScoresPage } from '../main_pages/scores/scores';
import { MedicamentsPage } from '../main_pages/medicaments/medicaments'

/**
 * Generated class for the MainPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  medicamentsRoot = MedicamentsPage ; 
  anesthesieRoot = AccueilPage ;
  protocolesRoot =  ProtocolesPage ; 
  scoresRoot = ScoresPage ; 
  recommandationsRoot = RecommandationsPage;
  infoRoot = InfoPage;


  constructor(public navCtrl: NavController) {}

}
