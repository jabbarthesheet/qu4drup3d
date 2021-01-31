import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AsthmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-asthme',
  templateUrl: 'asthme.html',
})
export class AsthmePage {


  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  Taille:number;
  ageLecture:number;
  sexeMF:string;

  AerosolSalbutamolAAG:number; 
  AdminSolumedrolAAG:number;
  IVSESolumedrolAAG:number; 
  AerosolAtroventAAG:number; 
  MgSO4AAG:number;
  SalbutamolIVAAG:number; 
  AerosolBricanylAAG:number; 
  AdminKClAAG:number; 
  AdminKClAAGmg:number; 
  ApportBaseHoraire:number; 
  ApportBaseJour:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsthmePage');
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

  if (this.PoidsNum <= 20){this.AerosolSalbutamolAAG = 2.5 ; }
      else {this.AerosolSalbutamolAAG = 5 ;};
      if (this.AgeNum < 72){ this.AerosolAtroventAAG = 0.25;}
      else {this. AerosolAtroventAAG = 0.5;};
      this.AdminSolumedrolAAG = Math.round((this.PoidsNum*2)*10)/10;
      this.IVSESolumedrolAAG = Math.round((this.PoidsNum*0.5)*10)/10;
      this.MgSO4AAG = Math.round((this.PoidsNum*40)*10)/10;
      if (this.MgSO4AAG >= 2000){this.MgSO4AAG = 2000;};
      this.SalbutamolIVAAG = Math.round((this.PoidsNum*0.5)*10)/10;
      this.AdminKClAAG = Math.round((this.PoidsNum*2)*10)/10;
      this.AdminKClAAGmg = Math.round((this.PoidsNum*150)*10)/10;
      if (this.AdminKClAAGmg >= 4000){this.AdminKClAAGmg = 4000;};
      if (this.PoidsNum <= 10) {this.ApportBaseHoraire = Math.round(4*this.PoidsNum);} 
      else if (this.PoidsNum <= 20) {this.ApportBaseHoraire = Math.round(40+(this.PoidsNum - 10)*2);}
      else if (this.PoidsNum > 20) {this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));};
      this.ApportBaseJour = Math.round((this.ApportBaseHoraire * 24)*10)/10;
      this.AerosolBricanylAAG = Math.round((this.PoidsNum * 0.2)*10)/10;
      if (this.AerosolBricanylAAG >= 5) {this.AerosolBricanylAAG = 5;};

};
}
