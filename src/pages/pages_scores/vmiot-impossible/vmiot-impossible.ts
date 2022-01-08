import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VmiotImpossiblePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vmiot-impossible',
  templateUrl: 'vmiot-impossible.html',
})
export class VmiotImpossiblePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VmiotImpossiblePage');
  }

  
  retourHome() {
    this.navCtrl.pop();
  }

}
