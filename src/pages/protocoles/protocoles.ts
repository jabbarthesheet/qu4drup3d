import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { AntiInfectieuxPage } from '../anti-infectieux/anti-infectieux';
import { ExtrophieVesicalePage } from '../extrophie-vesicale/extrophie-vesicale';


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

  retourHome(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtocolesPage');
  }

   openExtrophieVesicale() {
    this.navCtrl.push (ExtrophieVesicalePage);
   };

}
