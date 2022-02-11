import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the TapBlockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tap-block',
  templateUrl: 'tap-block.html',
})
export class TapBlockPage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number; 
  Allergie:number; 
  EstomacPlein:boolean; 
  EstomacOuiNon:string;
  ageLecture:number;
  Taille:number;
  sexeMF:string;


  hasLegend:boolean=false; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TapBlockPage');
  }

  ionViewWillEnter(){
    let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeNum').then((Age) => {
        this.AgeNum = Age;
        this.ageLecture = Math.round((this.AgeNum/12)*10)/10; 
    this.storage.get('PoidsNum').then((Poids) => {
        this.PoidsNum = Poids;
    this.storage.get('DureeJeune').then((dureejeune) => {
        this.DureeJeune = dureejeune ;   
    this.storage.get('EstomacPlein').then((Estomac) => {
        this.EstomacPlein = Estomac; console.log('lestomac est plein ?', this.EstomacPlein);
        if (this.EstomacPlein == true) {this.EstomacOuiNon = "plein"; }
        else {this.EstomacOuiNon = "vide" ; };
    this.storage.get('Allergie').then((allergie) => {
        this.Allergie = allergie; 
    this.storage.get('sexeMF').then((sexe) => {
        this.sexeMF = sexe; 
        if(!sexe){this.sexeMF="Fille"}
    this.storage.get('Taille').then((Taille) => {
        this.Taille = Taille; 
     this.calculs();
    });
    });
    });
    });
    });
    });
    }));};


calculs () {
      /*placer les calculs ici*/
        };
  

  retourHome(){
    this.navCtrl.pop();
  };

  toggleLegend(){
    this.hasLegend = !this.hasLegend;
  };
}
