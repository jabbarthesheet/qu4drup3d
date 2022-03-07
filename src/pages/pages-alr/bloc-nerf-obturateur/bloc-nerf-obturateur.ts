import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlocNerfObturateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bloc-nerf-obturateur',
  templateUrl: 'bloc-nerf-obturateur.html',
})
export class BlocNerfObturateurPage {

  hasLegend:boolean=false;
  isShownIndications : boolean = false; 
  isShownAnatomie : boolean = false; 
  isShownTechnique : boolean = false; 
  isShownPosologie : boolean = false; 
  isShownKTPN : boolean = false; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlocNerfObturateurPage');
  };
  retourHome(){
    this.navCtrl.pop();
  };

  toggleLegend(){
    this.hasLegend = !this.hasLegend;
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

  toggleKTPN(){
    this.isShownKTPN = !this.isShownKTPN;
  };


}
