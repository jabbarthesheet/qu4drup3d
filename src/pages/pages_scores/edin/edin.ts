import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EdinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edin',
  templateUrl: 'edin.html',
})
export class EdinPage {

  isShownEDIN:boolean=false; 
  EDINVisage:number=0; 
  EDINCorps:number=0;
  EDINSommeil:number=0;
  EDINRelation:number=0;
  EDINReconfort:number=0; 
  EDINTotal:number=0; 
  SeuilPrescriptionEDIN:string="Non atteint.";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  retourHome(){
    this.navCtrl.pop();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdinPage');
  }

  CalcEDIN() {
    this.EDINTotal = Math.floor(this.EDINVisage) + Math.floor(this.EDINCorps) + Math.floor(this.EDINSommeil) + Math.floor(this.EDINRelation) + Math.floor(this.EDINReconfort); 
    console.log(this.EDINTotal);
    if (this.EDINTotal <= 3) {this.SeuilPrescriptionEDIN = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";}
    else {this.SeuilPrescriptionEDIN = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";};
  }

}
