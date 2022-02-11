import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlocCanalAdducteursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bloc-canal-adducteurs',
  templateUrl: 'bloc-canal-adducteurs.html',
})
export class BlocCanalAdducteursPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlocCanalAdducteursPage');
  }

}
