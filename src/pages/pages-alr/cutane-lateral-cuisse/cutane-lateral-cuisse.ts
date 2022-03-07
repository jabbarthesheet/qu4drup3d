import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the CutaneLateralCuissePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cutane-lateral-cuisse',
  templateUrl: 'cutane-lateral-cuisse.html',
})
export class CutaneLateralCuissePage {

  hasLegend:boolean=false;
  isShownIndications : boolean = false; 
  isShownAnatomie : boolean = false; 
  isShownTechnique : boolean = false; 
  isShownPosologie : boolean = false; 
  isShownKTPN : boolean = false; 


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CutaneLateralCuissePage');
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


};
