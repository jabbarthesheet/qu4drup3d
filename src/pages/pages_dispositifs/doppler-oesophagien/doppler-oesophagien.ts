import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DopplerOesophagienPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-doppler-oesophagien',
  templateUrl: 'doppler-oesophagien.html',
})
export class DopplerOesophagienPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DopplerOesophagienPage');
  }

  retourHome() {
    this.navCtrl.pop();
  };

}
