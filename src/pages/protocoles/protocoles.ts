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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtocolesPage');
  }


  openAntiInfectieuxTraitement()
   {
    this.navCtrl.push (AntiInfectieuxPage); 
   };

   openExtrophieVesicale() {
    this.navCtrl.push (ExtrophieVesicalePage);
   };


}
