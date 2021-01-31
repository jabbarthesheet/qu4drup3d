import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EpilepsiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-epilepsie',
  templateUrl: 'epilepsie.html',
})
export class EpilepsiePage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  Taille:number;
  ageLecture:number;
  sexeMF:string;

  AdminRivotrilConvulsion:number;
  AdminGardenal:number;
  AdminDilantin:number;
  AdminMidazolamConvulsion:number;
  AdminKeppra:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad EpilepsiePage');
  }

  ionViewWillEnter () {
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
        if (!sexe){this.sexeMF = "Fille";};
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

  this.AdminRivotrilConvulsion = Math.round((this.PoidsNum * 20)*10)/10; 
  this.AdminGardenal = Math.round((this.PoidsNum * 15)*10)/10; 
  if (this.AdminGardenal >= 500){this.AdminGardenal = 500; }; 
  this.AdminDilantin = Math.round((this.PoidsNum * 20)*10)/10;
  if (this.AdminDilantin >= 1500){this.AdminDilantin = 1500; }; 
  this.AdminMidazolamConvulsion = Math.round((this.PoidsNum * 0.25)*10)/10;
  this.AdminKeppra = Math.round((this.PoidsNum * 30)*10)/10;
  if (this.AdminKeppra >= 2000){this.AdminKeppra = 2000;};
};

}
