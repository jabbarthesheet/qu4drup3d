import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MetaboliquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-metabolique',
  templateUrl: 'metabolique.html',
})
export class MetaboliquePage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  Taille:number;
  ageLecture:number;
  sexeMF:string;

  AdminG10Initial:number; 
  AdminG10Suite:number;
  DeltaNa:number;
  NatremieMesuree:number;
  AdminNa:number;
  AdminGluconateCa:number;
  AdminInsulineHyperK:number;
  AdminG10HyperK:number;

  CategorieAge:string; 
  
  StandardEau:number;
  StandardKCal:number; 
  StandardGlucides:number; 
  StandardAcidesAmines:number; 
  StandardLipides:number; 
  StandardSodium:number; 
  StandardPotassium:number; 
  StandardCalcium:number; 
  StandardPhosphore:number; 
  StandardMagnesium:number; 
  
  Eau:number;
  KCal:number;
  Glucides:number; 
  AcidesAmines:number;
  Lipides:number;
  Sodium:number;
  Potassium:number;
  Calcium:number;
  Phosphore:number;
  Magnesium:number;

  MetaboliqueView:number=1; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetaboliquePage');
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

CalculDeltaNa() {
  this.DeltaNa = 125 - this.NatremieMesuree; 
  this.AdminNa = Math.round((this.DeltaNa*this.PoidsNum*0.6)*10)/10; 
}

calculs () {
  this.AdminG10Initial =  Math.round((this.PoidsNum*3)*10)/10;
  this.AdminG10Suite =  Math.round((this.PoidsNum*0.4)*10)/10;

  this.AdminGluconateCa =  Math.round((this.PoidsNum*2)*10)/10;
  this.AdminInsulineHyperK =  Math.round((this.PoidsNum*0.1)*10)/10;
  this.AdminG10HyperK =  Math.round((this.PoidsNum*10)*10)/10;

   /** Apports journaliers */
        
   if (this.AgeNum <= 1){
    this.CategorieAge = "nouveau-né";
    this.StandardEau = 160; 
    this.StandardKCal = 110;
    this.StandardGlucides = 17;
    this.StandardAcidesAmines = 3.5; 
    this.StandardLipides = 6;
    this.StandardSodium = 290;
    this.StandardPotassium = 150; 
    this.StandardCalcium = 45;
    this.StandardPhosphore = 35;
    this.StandardMagnesium = 10;
  }

  else if (this.AgeNum <= 3)
  {
    this.CategorieAge = "nourrisson";
    this.StandardEau = 105; 
    this.StandardKCal = 100;
    this.StandardGlucides = 14;
    this.StandardAcidesAmines = 2.5; 
    this.StandardLipides = 3;
    this.StandardSodium = 203; 
    this.StandardPotassium = 262.5; 
    this.StandardCalcium = 25;
    this.StandardPhosphore = 25;
    this.StandardMagnesium = 10;
  }

  else if (this.AgeNum <= 12*12)
  {
    this.CategorieAge = "enfant";
    this.StandardEau = 70;
    this.StandardKCal = 70;
    this.StandardGlucides = 12;
    this.StandardAcidesAmines = 2; 
    this.StandardLipides = 2;
    this.StandardSodium = 145;
    this.StandardPotassium = 187.5; 
    this.StandardCalcium = 10;
    this.StandardPhosphore = 10;
    this.StandardMagnesium = 8;
  }

  else 
  {
    this.CategorieAge = "jeune adulte";
    this.StandardEau = 50;
    this.StandardKCal = 50;
    this.StandardGlucides = 10;
    this.StandardAcidesAmines = 2; 
    this.StandardLipides = 1.5;
    this.StandardSodium = 145;
    this.StandardPotassium = 187.5; 
    this.StandardCalcium = 10;
    this.StandardPhosphore = 10;
    this.StandardMagnesium = 8;
  }

  this.Eau = Math.round((this.PoidsNum*this.StandardEau)*10)/10 ;
  this.KCal = Math.round((this.PoidsNum*this.StandardKCal)*10)/10 ;
  this.Glucides = Math.round((this.PoidsNum*this.StandardGlucides)*10)/10 ; 
  this.AcidesAmines = Math.round((this.PoidsNum*this.StandardAcidesAmines)*10)/10 ;
  this.Lipides = Math.round((this.PoidsNum*this.StandardLipides)*10)/10 ;
  this.Sodium = Math.round((this.PoidsNum*this.StandardSodium)*10)/10 ;
  this.Potassium = Math.round((this.PoidsNum*this.StandardPotassium)*10)/10 ;
  this.Calcium = Math.round((this.PoidsNum*this.StandardCalcium)*10)/10 ;
  this.Phosphore = Math.round((this.PoidsNum*this.StandardPhosphore)*10)/10 ;
  this.Magnesium = Math.round((this.PoidsNum*this.StandardMagnesium)*10)/10 ;

};

}
