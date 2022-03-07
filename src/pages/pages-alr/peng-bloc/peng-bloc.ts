import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the PengBlocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-peng-bloc',
  templateUrl: 'peng-bloc.html',
})
export class PengBlocPage {
    
  isShownIndications : boolean = false; 
  isShownAnatomie : boolean = false; 
  isShownTechnique : boolean = false; 
  isShownPosologie : boolean = false; 
 
   constructor(
     public navCtrl: NavController, 
     public navParams: NavParams,
     public storage: Storage) {
   }

   ionViewDidLoad() {
    console.log('ionViewDidLoad PENGBlocPage');
   };


  retourHome(){
    this.navCtrl.pop();
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



};
