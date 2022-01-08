import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CriteresAmbulatoirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-criteres-ambulatoire',
  templateUrl: 'criteres-ambulatoire.html',
})
export class CriteresAmbulatoirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriteresAmbulatoirePage');
  }

  retourHome() {
    this.navCtrl.pop();
  }

}
