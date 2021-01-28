import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AniPage } from '../../pages_dispositifs/ani/ani';
import { ExtrophieVesicalePage } from '../../chirurgies/extrophie-vesicale/extrophie-vesicale';
import { ScoliosePage } from '../../chirurgies/scoliose/scoliose';


/**
 * Generated class for the ProtocolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-protocoles',
  templateUrl: 'protocoles.html',
})

 

export class ProtocolesPage {

  public protocoles = [
      { titre : "Extrophie vésicale" , auteurs : "Dr. Charlotte Fait, Pr. Souhayl Dahmani" , datepublication : "21/09/2020" , page : ExtrophieVesicalePage , objectif1 : "réduction des jours de réanimation avec intubation.", objectif2 : "réhabilitation précoce avec passage de la première nuit en SSPI puis USC à J1.", objectif3 : "optimisation de l'analgésie.", objectif4 : "" }, 
      { titre : "Scoliose" , auteurs : "Dr. Florence Julien-Marsollier, Pr. Souhayl Dahmani" , datepublication : "15/11/2018" , page : ScoliosePage , objectif1 : "anticiper les risques.", objectif2 : "favoriser réhabilitation accélérée après chirurgie : raccourcir les séjours en SSPI & USC.", objectif3 : "", objectif4 : "" }, 
    ]; 

  public dispositifs = [
      { nom : "ANI" , nomcomplet : "Analgesia/Nociception Index" , page : AniPage },
  ];


    ProtocolesView:number=1; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtocolesPage');
  }

  openProtocole(index) {
    this.navCtrl.push(this.protocoles[index].page); 
  }

  openDispositif(index) {
    this.navCtrl.push(this.dispositifs[index].page); 
  }
}
