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

  isShownIndications : boolean = false; 
  isShownAnatomie : boolean = false; 
  isShownTechnique : boolean = false; 
  isShownPosologie : boolean = false; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlocCanalAdducteursPage');
  };

  toggleIndications(){
    this.isShownIndications = !this.isShownIndications;
  };

  toggleAnatomie(){
    this.isShownAnatomie = !this.isShownAnatomie;
  };

  toggleTechnique(){
    this.isShownTechnique = !this.isShownTechnique; 
  }; 

  togglePosologie(){
    this.isShownPosologie = !this.isShownPosologie; 
  }; 

  retourHome(){
    this.navCtrl.pop();
  };


}
