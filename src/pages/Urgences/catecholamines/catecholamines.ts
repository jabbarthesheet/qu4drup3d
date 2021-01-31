import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the CatecholaminesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-catecholamines',
  templateUrl: 'catecholamines.html',
})
export class CatecholaminesPage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  Taille:number;
  ageLecture:number;
  sexeMF:string;

  ProtocoleNAD:string; 
  QuantiteNAD:number;
  VolumeNAD:number;
  AmpoulesNAD:number; 
  VolumeSerumPhyNAD:number; 
  DebitNADmlh:number; 
  DebitNADgammakgmin:number;
  DixiemeDebitNADgammakgmin:number=100;
  DebitNADmgh:number;

  CatecholaminesView:number=1; 


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatecholaminesPage');
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

  /** NAD */

  if (this.PoidsNum <= 10){
  this.ProtocoleNAD = "3 mg/kg dans 50 mL"; 
  this.QuantiteNAD = Math.round(this.PoidsNum*3*10)/10; 
  this.VolumeNAD = Math.round(this.QuantiteNAD/2*10)/10;
  this.AmpoulesNAD = Math.round(this.VolumeNAD/4*10)/10;
  this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD)*10)/10; 
  this.DebitNADmlh = 1 ; 
  this.DebitNADgammakgmin = 1 ;
  this.DebitNADmgh = Math.round((this.DebitNADgammakgmin*this.PoidsNum*60/1000)*10)/10 ;
  this.DixiemeDebitNADgammakgmin=100;

  }

  else if (this.PoidsNum <= 30){
    this.ProtocoleNAD = "1,5 mg/kg dans 50 mL"; 
    this.QuantiteNAD = Math.round(this.PoidsNum*1.5*10)/10; 
    this.VolumeNAD = Math.round(this.QuantiteNAD/2*10)/10;
    this.AmpoulesNAD = Math.round(this.VolumeNAD/4*10)/10;
    this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD)*10)/10; 
    this.DebitNADmlh = 2 ; 
    this.DebitNADgammakgmin = 1 ; 
    this.DebitNADmgh = Math.round((this.DebitNADgammakgmin*this.PoidsNum*60/1000)*10)/10 ;
    this.DixiemeDebitNADgammakgmin=100;

    }


    else {
      this.ProtocoleNAD = "0,6 mg/kg dans 50 mL"; 
      this.QuantiteNAD = Math.round(this.PoidsNum*0.6*10)/10; 
      this.VolumeNAD = Math.round(this.QuantiteNAD/2*10)/10;
      this.AmpoulesNAD = Math.round(this.VolumeNAD/4*10)/10;
      this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD)*10)/10; 
      this.DebitNADmlh = 5 ; 
      this.DebitNADgammakgmin = 1 ; 
      this.DebitNADmgh = Math.round((this.DebitNADgammakgmin*this.PoidsNum*60/1000)*10)/10 ;
      this.DixiemeDebitNADgammakgmin=100;

      };
};


/**NAD PREPARATION */


 VariationNAD(){
  this.DebitNADgammakgmin = this.DixiemeDebitNADgammakgmin/100; 
  this.DebitNADmgh = Math.round((this.DebitNADgammakgmin*this.PoidsNum*60/1000)*10)/10 ;
  if (this.ProtocoleNAD == "0,6 mg/kg dans 50 mL"){this.DebitNADmlh = Math.round((this.DebitNADgammakgmin*5)*10)/10; }
  else if (this.ProtocoleNAD == "1,5 mg/kg dans 50 mL"){this.DebitNADmlh = Math.round((this.DebitNADgammakgmin*2)*10)/10; }
  else if (this.ProtocoleNAD == "3 mg/kg dans 50 mL"){this.DebitNADmlh = this.DebitNADgammakgmin; };
 }



}
