import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChirurgieOrthognatiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chirurgie-orthognatique',
  templateUrl: 'chirurgie-orthognatique.html',
})
export class ChirurgieOrthognatiquePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChirurgieOrthognatiquePage');
  }

}
