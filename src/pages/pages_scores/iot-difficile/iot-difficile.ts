import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IotDifficilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-iot-difficile',
  templateUrl: 'iot-difficile.html',
})
export class IotDifficilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IotDifficilePage');
  };
  
  retourHome() {
    this.navCtrl.pop();
  };


}
