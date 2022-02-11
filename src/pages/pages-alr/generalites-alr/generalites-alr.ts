import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeneralitesAlrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-generalites-alr',
  templateUrl: 'generalites-alr.html',
})
export class GeneralitesAlrPage {

  isShown1:boolean=false; 
  isShown2:boolean=false;
  isShown3:boolean=false; 
  isShown4:boolean=false; 
  isShown5:boolean=false; 
  isShown6:boolean=false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralitesAlrPage');
  };

  retourHome() {
    this.navCtrl.pop();
  };

  toggle1(){
    this.isShown1 = !this.isShown1;
  };

  toggle2(){
    this.isShown2 = !this.isShown2;
  };

  toggle3(){
    this.isShown3 = !this.isShown3;
  };

  toggle4(){
    this.isShown4 = !this.isShown4;
  };

  toggle5(){
    this.isShown5 = !this.isShown5;
  };

  toggle6(){
    this.isShown6 = !this.isShown6;
  };
}
