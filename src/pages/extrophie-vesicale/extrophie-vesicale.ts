import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExtrophieVesicalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-extrophie-vesicale',
  templateUrl: 'extrophie-vesicale.html',
})
export class ExtrophieVesicalePage {

  isShownConsultation:boolean=false; 
  isShownVPA:boolean=false; 
  isShownPerOp:boolean=false; 
  isShownPostOp:boolean=false; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtrophieVesicalePage');
  }

  ToggleConsultation() {
    this.isShownConsultation = !this.isShownConsultation; 
    this.isShownVPA = this.isShownPerOp = this.isShownPostOp = false; 
  }
  
  ToggleVPA() {
    this.isShownVPA = !this.isShownVPA;
    this.isShownConsultation = this.isShownPerOp = this.isShownPostOp = false; 
  }

  TogglePerOp() {
    this.isShownPerOp = !this.isShownPerOp; 
    this.isShownConsultation = this.isShownVPA = this.isShownPostOp = false; 
  }

  TogglePostOp() {
    this.isShownPostOp = !this.isShownPostOp;
    this.isShownConsultation = this.isShownVPA = this.isShownPerOp = false;
  }
}
