import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { InfoPage } from '../info/info';
import { ProtocolesPage } from '../protocoles/protocoles';
import { RecommandationsPage } from '../recommandations/recommandations';
import { ScoresPage } from '../scores/scores';
import { MedicamentsPage } from '../medicaments/medicaments'

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
