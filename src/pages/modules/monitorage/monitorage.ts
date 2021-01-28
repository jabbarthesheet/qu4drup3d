import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccueilPage } from '../../accueil/accueil';

@Component({
  selector: 'page-monitorage',
  templateUrl: 'monitorage.html',
})

export class MonitoragePage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number; 
  Allergie:number; 
  EstomacPlein:boolean; 
  EstomacOuiNon:string;
  sexeMF:string;
  ageLecture:number;
  Taille:number;

  MonitorageView:number=1; 

  FCnormale:any;
  FCdangerHaut:any;
  FCdangerBas:any;
  
  FRnormale:any;
  FRdangerHaut:any;
  FRdangerBas:any; 

  SpO2normale:any;
  SpO2dangerBas:any;

  PASnormale:any;
  PASdangerHaut:any;
  PASdangerBas:any;

  PADnormale:any;
  PADdangerHaut:any;
  PADdangerBas:any;

  PAMnormale:any;
  PAMdangerHaut:any;
  PAMdangerBas:any;

  Diuresenormale:any;
  DiuresedangerHaut:any;
  DiuresedangerBas:any;

  NormeGR:string;
  NormeHb:string;
  NormeVGM:string;
  NormePq:string; 
  NormeRetic:string;
  NormeGB:string;
  NormePNN:string;
  NormeLympho:string;

  SondeDoppler:string; 
  CapteurNirs:string; 
  ElectrodesBIS:string;
  TailleSondeUrinaire:string;
  TailleSondeGastrique:string;

  public lineChart: Chart;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public storage: Storage, 
    public alertController: AlertController, 
    )
    {
  }

  retourHome(){
    this.navCtrl.pop();
  };

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alerte',
      title: 'Minute papillon !',
      message: 'Saisissez un âge et un poids pour le patient.',
      buttons: [
        {
          text: 'Plus tard.',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Nan');

          }
        }, {
          text: 'OK.',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.pop();          }
        }
      ]
    });

    await alert.present();
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocoRegionalePage');
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
        if (!this.sexeMF){this.sexeMF = "Fille";};
    this.storage.get('Taille').then((Taille) => {
        this.Taille = Taille; 
    if (!this.PoidsNum || !this.AgeNum) { this.presentAlert(); this.calculs()}
    else { this.calculs()
    };
    });
    });
    });
    });
    });
    });
    }));};


    calculs () {
        /*placer les calculs ici*/
        if (this.PoidsNum <= 3) {this.SondeDoppler = "Non utilisable";}
        else if (this.PoidsNum > 3 && this.PoidsNum <= 60 && this.AgeNum < 180) {this.SondeDoppler = "Sonde pédiatrique (KDP72)";}
        else {this.SondeDoppler = "Sonde adulte";};

        if (this.PoidsNum <= 5) {this.CapteurNirs = "Néonatal (CNN/SNN)";}
        else if (this.PoidsNum <= 40) {this.CapteurNirs = "Pédiatrique (SPFB)";}
        else {this.CapteurNirs = "Adulte (SAFB)";};

        if (this.PoidsNum <= 10){this.ElectrodesBIS = "Pédiatrique";}
        else {this.ElectrodesBIS = "Adulte";}; 

        if(this.PoidsNum <= 2){this.TailleSondeUrinaire = "4 CH sans ballonnet";}
        else if(this.PoidsNum <= 4){this.TailleSondeUrinaire = "6 CH avec ballonnet";}
        else if(this.PoidsNum <= 25){this.TailleSondeUrinaire = "6 à 10 CH avec ballonnet";}
        else if(this.PoidsNum <= 50){this.TailleSondeUrinaire = "12 à 14 CH avec ballonnet";}
        else if(this.PoidsNum > 50){this.TailleSondeUrinaire = "14 à 18 CH avec ballonnet";}

        if(this.PoidsNum <= 4){this.TailleSondeGastrique = "Calibre 5-6 (longueur 40 cm)";}
        else if(this.PoidsNum <= 10){this.TailleSondeGastrique = "Calibre 8-10 (longueur 50 cm)";}
        else if(this.PoidsNum <= 25){this.TailleSondeGastrique = "Calibre 12 (longueur 50 cm)";}
        else if(this.PoidsNum > 25){this.TailleSondeGastrique = "Calibre 14-16";}

        if (this.AgeNum <= 1) {

          this.FCnormale = "90-180";
          this. FCdangerHaut = " > 190";
          this.FCdangerBas = " < 90";
          
          this.FRnormale = "40" ;
          this.FRdangerHaut = " > 60" ;
          this.FRdangerBas =  " < 20";
        
          this.SpO2normale = 100 ;
          this.SpO2dangerBas = " < 90";
        
          this.PASnormale = "70-90";
          this.PASdangerHaut = " > 100";
          this.PASdangerBas = " < 60";
        
          this.PADnormale = "40-50";
          this.PADdangerHaut = " > 50";
          this.PADdangerBas = " < 30";
        
          this.PAMnormale = "45-55";
          this.PAMdangerHaut = " > 55";
          this.PAMdangerBas = " < 45";
        
          this.Diuresenormale = Math.round((this.PoidsNum * 2.5)*10)/10;
          this.DiuresedangerHaut = "> " + (Math.round((this.PoidsNum * 4)*10)/10 ).toString() ;
          this.DiuresedangerBas = "< " + (Math.round((this.PoidsNum * 1)*10)/10 ).toString();
          ;}

        else if (this.AgeNum <= 24) {

          this.FCnormale = "80-155" ;
          this. FCdangerHaut = " > 170";
          this.FCdangerBas = " < 80";
          
          this.FRnormale = 30 ;
          this.FRdangerHaut = " > 60";
          this.FRdangerBas =  " < 20";
        
          this.SpO2normale = 100;
          this.SpO2dangerBas = " < 90";
        
          this.PASnormale = "85-105";
          this.PASdangerHaut = " > 110";
          this.PASdangerBas = " < 75";
        
          this.PADnormale = "50-65";
          this.PADdangerHaut = " > 65";
          this.PADdangerBas = " < 50" ;
        
          this.PAMnormale = "65-80";
          this.PAMdangerHaut = " > 80";
          this.PAMdangerBas = " < 60";
        
          this.Diuresenormale = Math.round((this.PoidsNum * 2.5)*10)/10;
          this.DiuresedangerHaut = " > " + (Math.round((this.PoidsNum * 4)*10)/10 ).toString();
          this.DiuresedangerBas = " < " + (Math.round((this.PoidsNum * 1)*10)/10 ).toString();
          ;}

        else if (this.AgeNum <= 48) {

            this.FCnormale = "70-140";
            this. FCdangerHaut = " > 160" ;
            this.FCdangerBas = " < 70";
            
            this.FRnormale = 20 ;
            this.FRdangerHaut = " > 40";
            this.FRdangerBas =  " < 15";
          
            this.SpO2normale = 100 ;
            this.SpO2dangerBas = 92 ;
          
            this.PASnormale = " 90-110";
            this.PASdangerHaut = " > 130";
            this.PASdangerBas = " < 80";
          
            this.PADnormale = "50-65";
            this.PADdangerHaut = " > 65";
            this.PADdangerBas = " < 35";
          
            this.PAMnormale = "65 - 80";
            this.PAMdangerHaut = " > 80" ;
            this.PAMdangerBas = " < 65";
          
            this.Diuresenormale = Math.round((this.PoidsNum * 2)*10)/10;
            this.DiuresedangerHaut = " > " + (Math.round((this.PoidsNum * 4)*10)/10 ).toString();
            this.DiuresedangerBas = " < " + (Math.round((this.PoidsNum * 1)*10)/10 ).toString();
            ;}

            
    else if (this.AgeNum <= 120) {

      this.FCnormale = "65-125";
      this. FCdangerHaut = " > 140" ;
      this.FCdangerBas = " < 60";
      
      this.FRnormale = 18 ;
      this.FRdangerHaut = " > 30";
      this.FRdangerBas =  " < 15";
    
      this.SpO2normale = 100 ;
      this.SpO2dangerBas = 92 ;
    
      this.PASnormale = "95-115";
      this.PASdangerHaut = " > 140";
      this.PASdangerBas = " < 85";
    
      this.PADnormale = "55-70";
      this.PADdangerHaut = " > 75";
      this.PADdangerBas =  " < 35";
    
      this.PAMnormale = "70-85";
      this.PAMdangerHaut = " > 90";
      this.PAMdangerBas = " < 70";
    
      this.Diuresenormale = Math.round((this.PoidsNum * 1.5)*10)/10;
      this.DiuresedangerHaut = " > " + (Math.round((this.PoidsNum * 4)*10)/10 ).toString();
      this.DiuresedangerBas = " < " + (Math.round((this.PoidsNum * 1)*10)/10 ).toString();
      ;}


      else {

        this.FCnormale = "55-105";
        this. FCdangerHaut = " > 130";
        this.FCdangerBas = " < 50";
        
        this.FRnormale = 15;
        this.FRdangerHaut = " > 30" ;
        this.FRdangerBas =  " < 10";
      
        this.SpO2normale = 100 ;
        this.SpO2dangerBas = 94 ;
      
        this.PASnormale = "110-130";
        this.PASdangerHaut = " < 90" ;
        this.PASdangerBas = " > 160";
      
        this.PADnormale = "65 - 80";
        this.PADdangerHaut = " > 85";
        this.PADdangerBas = " < 40" ;
      
        this.PAMnormale = "80-95";
        this.PAMdangerHaut = " > 100";
        this.PAMdangerBas = " < 80";
      
        this.Diuresenormale = Math.round((this.PoidsNum * 1)*10)/10;
        this.DiuresedangerHaut = " > " + (Math.round((this.PoidsNum * 4)*10)/10 ).toString() ;
        this.DiuresedangerBas = " < " + (Math.round((this.PoidsNum * 1)*10)/10 ).toString();
        ;};


        if (this.AgeNum <= 1) {  
          this.NormeGR = "3,0 - 5,4";
          this.NormeHb = "10,0 - 18,0" ;
          this.NormeVGM = "85 - 123";
          this.NormePq = "150 - 400"; 
          this.NormeRetic = "20 - 140";
          this.NormeGB = "5 - 20";
          this.NormePNN = "1 - 9";
          this.NormeLympho = "2 - 16,5";
        }

      else if (this.AgeNum <= 6) {  
        this.NormeGR = "3,1 - 4,5";
        this.NormeHb = "9,5 - 14,1";
        this.NormeVGM = "68 - 108";
        this.NormePq = "200 - 550"; 
        this.NormeRetic = "40 - 80";
        this.NormeGB = "6 - 18";
        this.NormePNN = "1 - 6";
        this.NormeLympho = "4 - 12";
      }

      else if (this.AgeNum <= 24) {  
        this.NormeGR = "3,7 - 5,5";
        this.NormeHb = "10,5 - 13,5";
        this.NormeVGM = "68 - 86";
        this.NormePq = "200 - 550"; 
        this.NormeRetic = "40 - 80";
        this.NormeGB = "6 - 17,5";
        this.NormePNN = "1 - 8,5";
        this.NormeLympho = "3 - 13,5";
      }

      else if (this.AgeNum <= 144) {  
        this.NormeGR = "3,9 - 5,2";
        this.NormeHb = "11,1 - 14,7";
        this.NormeVGM = "72 - 87";
        this.NormePq = "166 - 463"; 
        this.NormeRetic = "40 - 80";
        this.NormeGB = "4 - 14,5";
        this.NormePNN = "1,5 - 8";
        this.NormeLympho = "1 - 7";
      }

      else  {  
        this.NormeGR = "4 - 5,6";
        this.NormeHb = "11,3 - 16,6";
        this.NormeVGM = "75 - 102";
        this.NormePq = "160 - 439"; 
        this.NormeRetic = "40 - 80";
        this.NormeGB = "3,75 - 13";
        this.NormePNN = "1,5 - 6,3";
        this.NormeLympho = "1,3 - 4,5";
      };


      };


    
}
