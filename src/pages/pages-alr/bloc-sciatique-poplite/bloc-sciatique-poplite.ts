import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlocSciatiquePoplitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bloc-sciatique-poplite',
  templateUrl: 'bloc-sciatique-poplite.html',
})
export class BlocSciatiquePoplitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlocSciatiquePoplitePage');
  }

}
