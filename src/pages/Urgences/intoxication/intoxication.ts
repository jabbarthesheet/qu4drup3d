import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the IntoxicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-intoxication',
  templateUrl: 'intoxication.html',
})
export class IntoxicationPage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  Taille:number;
  ageLecture:number;
  sexeMF:string;

  PosoRivotrilIAL:number;
  PosoIntralipidesIAL:number;
  AdminNarcan:number;
  AdminAnexate:number;
  AdminNAC1:number;
  AdminNAC2:number;
  AdminNAC3:number;
  AdminNAC4:number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad IntoxicationPage');
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


calculs(){
    this.PosoRivotrilIAL = Math.round((this.PoidsNum*15)*10)/10;
    this.PosoIntralipidesIAL = Math.round((this.PoidsNum*3)*10)/10;
    this.AdminNarcan = Math.round((this.PoidsNum * 10)*10)/10;
    this.AdminAnexate = Math.round((this.PoidsNum * 10)*10)/10;
    this.AdminNAC1 = Math.round((this.PoidsNum * 150)*10)/10;
    this.AdminNAC2 = Math.round((this.PoidsNum * 50)*10)/10;
    this.AdminNAC3 = Math.round((this.PoidsNum * 100)*10)/10;
    this.AdminNAC4 = Math.round((this.PoidsNum * 150)*10)/10; 
};

}
