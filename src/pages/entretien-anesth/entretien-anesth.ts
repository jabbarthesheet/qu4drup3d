import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { Storage } from '@ionic/storage';
import { PatientPage } from '../patient/patient';


/**
 * Generated class for the LocoRegionalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-entretien-anesth',
  templateUrl: 'entretien-anesth.html',
})
export class EntretienAnesthPage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number; 
  Allergie:number; 
  EstomacPlein:boolean; 
  EstomacOuiNon:string;


  CAMSevo:number;

  PropoEntretien:number;
  HypnoEntretien:number; 
  RemiEntretien:number; 
  RocuEntretien:number;
  TracEntretien:number;

  isShownInhalatoire:boolean=false;
  isShownIntraVeineux:boolean=false;
  



  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  ToggleInhalatoire() {
    this.isShownInhalatoire = !this.isShownInhalatoire; 
    this.isShownIntraVeineux = false; 
  };

  ToggleIntraVeineux() {
    this.isShownIntraVeineux = !this.isShownIntraVeineux; 
    this.isShownInhalatoire = false;
  };

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
            this.navCtrl.push(PatientPage);
          }
        }
      ]
    });

    await alert.present();
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocoRegionalePage');
  }

  ionViewWillEnter()
  {

    let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeForCalc').then((Age) => {
        this.AgeNum = Age;
    this.storage.get('PoidsForCalc').then((Poids) => {
        this.PoidsNum = Poids;
    this.storage.get('DureeJeune').then((dureejeune) => {
        this.DureeJeune = dureejeune ;   
    this.storage.get('EstomacPlein').then((Estomac) => {
        this.EstomacPlein = Estomac; console.log('lestomac est plein ?', this.EstomacPlein);
        if (this.EstomacPlein == true) {this.EstomacOuiNon = "plein"; }
        else {this.EstomacOuiNon = "vide" ; };

        this.storage.get('Allergie').then((allergie) => {
          this.Allergie = allergie; 


          if (!this.PoidsNum || !this.AgeNum) { this.presentAlert();this.calculs();}
          else { this.calculs() }; 
        
        });
    
    })}) }) }));}


    calculs () {
      let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeForCalc').then((Age) => {
        this.AgeNum = Age;
    this.storage.get('PoidsForCalc').then((Poids) => {
        this.PoidsNum = Poids;
    this.storage.get('DureeJeune').then((dureejeune) => {
        this.DureeJeune = dureejeune ;   
    this.storage.get('EstomacPlein').then((Estomac) => {
        this.EstomacPlein = Estomac; console.log('lestomac est plein ?', this.EstomacPlein);
        if (this.EstomacPlein == true) {this.EstomacOuiNon = "plein"; }
        else {this.EstomacOuiNon = "vide" ; };
        this.storage.get('Allergie').then((allergie) => {
          this.Allergie = allergie; 

        /*placer les calculs ici*/
       
        if (this.AgeNum <= 1){ this.CAMSevo = 3.3 ;}
        else if (this.AgeNum <= 6){ this.CAMSevo = 3.1 ;}
        else if (this.AgeNum <= 12){ this.CAMSevo = 2.7 ;}
        else if (this.AgeNum <= 60){ this.CAMSevo = 2.5 ;}
        else { this.CAMSevo = 1.7 ;};


        this.PropoEntretien = Math.round((this.PoidsNum * 10)*10)/10;
        this.HypnoEntretien = Math.round((this.PoidsNum * 0.1)*10)/10; 
        this.RemiEntretien = Math.round((this.PoidsNum * 10)*10)/10;
        this.RocuEntretien = Math.round((this.PoidsNum * 0.6)*10)/10;
        this.TracEntretien = Math.round((this.PoidsNum * 0.5)*10)/10;



  })
      })})
    }) 
    }));};



}
