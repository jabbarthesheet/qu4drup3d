import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MucopolysaccharidosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mucopolysaccharidose',
  templateUrl: 'mucopolysaccharidose.html',
})
export class MucopolysaccharidosePage {

  isShownCS:boolean=false;
  isShownPerioperatoire:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MucopolysaccharidosePage');
  };

  ToggleCS(){
    this.isShownCS = !this.isShownCS;
  };

  TogglePerioperatoire(){
    this.isShownPerioperatoire = !this.isShownPerioperatoire;
  };

  retourHome() {
    this.navCtrl.pop(); 
  };

}
