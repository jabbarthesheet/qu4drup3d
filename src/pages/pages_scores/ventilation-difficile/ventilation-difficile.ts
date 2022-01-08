import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VentilationDifficilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ventilation-difficile',
  templateUrl: 'ventilation-difficile.html',
})
export class VentilationDifficilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentilationDifficilePage');
  }

  retourHome() {
    this.navCtrl.pop();
  }

}
