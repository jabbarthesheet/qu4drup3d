import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DrepanocytosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-drepanocytose',
  templateUrl: 'drepanocytose.html',
})
export class DrepanocytosePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrepanocytosePage');
  };

  retourHome() {
    this.navCtrl.pop(); 
  }

}
