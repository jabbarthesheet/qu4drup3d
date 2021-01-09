import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';

/**
 * Generated class for the PlateauVasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-plateau-vas',
  templateUrl: 'plateau-vas.html',
})
export class PlateauVasPage {

  EstomacPlein:boolean;
  EstomacOuiNon:string;  
  DureeJeune:number=6; 
  dureejeunelast:number=6;
  AgeNum:number;
  PoidsNum:number; 
  Taille:number;
  sexeMF:string;
  ageLecture:number

  TailleSIT:number;
  TailleSITpoids:any;
  TailleSITage:any; 
  RepereSITenfant:any;
  RepereSITnez:number; 
  RepereSITdents:number;
  Volumecourant:number;
  Allergie:string="";

  CouleurCanuleMasque:string; 
  LameIntubation:string; 
  TailleFiltre:string; 
  TailleMasqueLarynge:any;

  isShownVentilation:boolean=false;
  isShownIntubation:boolean=false;
  isShownMasqueLarynge:boolean=false; 
  isShownIntubationDifficile:boolean=false; 


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController) {
  }

  ToggleIntubation() {
    this.isShownIntubation = !this.isShownIntubation;
    this.isShownVentilation = this.isShownMasqueLarynge = this.isShownIntubationDifficile = false; 
  };

  ToggleVentilation () {
    this.isShownVentilation = !this.isShownVentilation; 
    this.isShownIntubation = this.isShownMasqueLarynge = this.isShownIntubationDifficile = false; 
  };

  ToggleMasqueLarynge() {
    this.isShownMasqueLarynge = !this.isShownMasqueLarynge; 
    this.isShownIntubation = this.isShownVentilation = this.isShownIntubationDifficile = false;
  };

  ToggleIntubationDifficile(){
    this.isShownIntubationDifficile = !this.isShownIntubationDifficile; 
    this.isShownIntubation = this.isShownVentilation = this.isShownMasqueLarynge = false;
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alerte',
      title: 'Minute papillon !',
      message: 'Saisissez un âge et un poids pour le patient.',
      buttons: [
        {
          text: 'Nan',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Nan');

          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.pop();          }
        }
      ]
    });
    await alert.present();
    };

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
  
  calculs(){

      if(this.PoidsNum <= 2.5)
        {this.TailleSITage = this.TailleSITpoids = 2.5; 
          this.RepereSITdents = Math.round((this.PoidsNum+6.5)*10)/10;
            this.RepereSITnez = Math.round((this.PoidsNum+7)*10)/10;
             this.RepereSITenfant = "trop petit"; 
          }
      else if (this.PoidsNum <= 3.5) 
        {this.TailleSITage = this.TailleSITpoids = 3;
          this.RepereSITdents = Math.round((this.PoidsNum+6.5)*10)/10;
            this.RepereSITnez = Math.round((this.PoidsNum+7)*10)/10;
              this.RepereSITenfant = "trop petit"; 
          }
      else if (this.PoidsNum <= 7)
        {this.TailleSITage = this.TailleSITpoids = 3.5;
          this.RepereSITdents = Math.round((this.PoidsNum+6.5)*10)/10;
            this.RepereSITnez = Math.round((this.PoidsNum+7)*10)/10;
              this.RepereSITenfant = "trop petit"; 
          }   
      else if (this.PoidsNum > 7)
      {this.TailleSITage = Math.round((this.AgeNum/(12*4)+3.5)*10)/10 ;
        if (this.TailleSITage >= 8){this.TailleSITage = 8;}

        this.TailleSITpoids = Math.round((this.PoidsNum/10+3)*10)/10; 
        if (this.TailleSITpoids >= 7.5) {this.TailleSITpoids = 7.5;}

        this.TailleSIT = Math.round(((this.TailleSITage + this.TailleSITpoids)/2)*10)/10;
        this.RepereSITenfant = Math.round(((this.TailleSITage + this.TailleSITpoids)/2)*3).toString() + " cm" ; 
        this.RepereSITdents = Math.round((this.AgeNum/24 + 12)*10)/10; 
        this.RepereSITnez = Math.round((this.AgeNum/24 + 15)*10)/10;
      };

      this.Volumecourant = Math.round(this.PoidsNum * 6) ; 

      if(this.PoidsNum <= 3 && this.AgeNum <= 1){this.CouleurCanuleMasque = "bleu"}
      else if  (this.AgeNum <= 6){this.CouleurCanuleMasque = "gris"}
      else if (this.AgeNum <= 60){this.CouleurCanuleMasque = "blanc"}
      else if (this.AgeNum <= 120){this.CouleurCanuleMasque = "jaune"}
      else {this.CouleurCanuleMasque = "vert"};

      if(this.PoidsNum <= 10 && this.AgeNum <= 1){this.TailleFiltre = "Filtre Néonat"}
      else if (this.AgeNum <= 72 && this.PoidsNum <= 20){this.TailleFiltre = "Filtre pédiatrique"}
      else {this.TailleFiltre = "Filtre adulte"};


      if(this.PoidsNum <= 15){this.LameIntubation = "Lame d'Oxford ou Miller 1"}
      else if(this.PoidsNum <= 30){this.LameIntubation = "Macintosh 2"}
      else {this.LameIntubation = "Macintosh 3"};

      if(this.PoidsNum <= 5){ this.TailleMasqueLarynge = 1;}
      else if(this.PoidsNum <= 10){ this.TailleMasqueLarynge = 1.5;}
      else if(this.PoidsNum <= 20){ this.TailleMasqueLarynge = 2;}
      else if(this.PoidsNum <= 30){ this.TailleMasqueLarynge = 2.5;}
      else if(this.PoidsNum <= 70){ this.TailleMasqueLarynge = 3;}
      else { this.TailleMasqueLarynge = "4 ou 5";}

        console.log('IonViewWillEnter OptionsPage');
      };

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlateauVasPage');
         };

}
