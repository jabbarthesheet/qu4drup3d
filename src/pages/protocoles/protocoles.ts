import { Component } from '@angular/core';
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

  isShownChirPediatrique:boolean=false; 
  isShownObstetrique:boolean=false;


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
