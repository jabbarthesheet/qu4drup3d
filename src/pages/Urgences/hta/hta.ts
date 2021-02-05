import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HtaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hta',
  templateUrl: 'hta.html',
})
export class HtaPage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  Taille:number;
  ageLecture:number;
  sexeMF:string;

  LoxenIVSE:number; 
  SectralPO:number; 
  TrandateBolus:number;
  TrandateIVSE:number; 
  AdminRenitec:number; 
  AdminLasilix:number; 
  AdminBurinexIVSE:number;
  AdminAldactoneMin:number;
  AdminAldactoneMax:number;

  HTAView:number=1; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtaPage');
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
    this.calculs()
    });
    });
    });
    });
    });
    });
    }));};

calculs(){

  this.LoxenIVSE = Math.round((this.PoidsNum * 60)*10)/10;
  this.SectralPO = Math.round((this.PoidsNum * 2)*10)/10;  
  this.TrandateBolus = Math.round((this.PoidsNum * 0.3)*10)/10 ;
  this.TrandateIVSE = Math.round((this.PoidsNum * 2 )*10)/10 ; 
  this.AdminRenitec = Math.round((this.PoidsNum * 50)*10)/10 ; 
  if (this.AdminRenitec >= 5000){this.AdminRenitec = 5000;};


  this.AdminLasilix  = Math.round((this.PoidsNum * 1)*10)/10; 
  this.AdminBurinexIVSE = Math.round((this.PoidsNum * 10)*10)/10; 
  this.AdminAldactoneMin = Math.round((this.PoidsNum * 1)*10)/10; 
  this.AdminAldactoneMax = Math.round((this.PoidsNum * 5)*10)/10; 
};

}
