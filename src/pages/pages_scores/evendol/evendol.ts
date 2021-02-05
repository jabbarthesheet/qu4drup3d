import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EvendolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-evendol',
  templateUrl: 'evendol.html',
})
export class EvendolPage {

  isShownEVENDOL:boolean=false; 
  EVENDOLVocal:number=0; 
  EVENDOLMimique:number=0;
  EVENDOLMouvement:number=0;
  EVENDOLPosition:number=0;
  EVENDOLRelation:number=0; 
  EVENDOLTotal:number=0; 
  SeuilPrescriptionEVENDOL:string="Non atteint.";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvendolPage');
  }

  retourHome(){
    this.navCtrl.pop();
  };

  CalcEVENDOL() {
    this.EVENDOLTotal = Math.floor(this.EVENDOLVocal) + Math.floor(this.EVENDOLMimique) + Math.floor(this.EVENDOLMouvement) + Math.floor(this.EVENDOLPosition) + Math.floor(this.EVENDOLRelation); 
    console.log(this.EVENDOLTotal);
    if (this.EVENDOLTotal <= 3) {this.SeuilPrescriptionEVENDOL = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";}
    else {this.SeuilPrescriptionEVENDOL = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";};
  }
}
