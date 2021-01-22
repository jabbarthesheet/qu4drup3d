import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExtrophieVesicalePage } from '../extrophie-vesicale/extrophie-vesicale';
import { ScoliosePage } from '../scoliose/scoliose';


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

  isShownNAD:boolean=false;
  DosePoids:number; 
  Debit:number;
  QuantiteNADpourPoids:number;
  QuantiteNADreelle:number; 
  PoidsNum:number=25; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtocolesPage');
  }

   openExtrophieVesicale() {
    this.navCtrl.push (ExtrophieVesicalePage);
   };

   openScoliose() {
     this.navCtrl.push(ScoliosePage);
   };

}
