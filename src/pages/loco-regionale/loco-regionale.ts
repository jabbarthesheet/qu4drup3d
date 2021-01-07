import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccueilPage } from '../accueil/accueil';


/**
 * Generated class for the LocoRegionalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loco-regionale',
  templateUrl: 'loco-regionale.html',
})
export class LocoRegionalePage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number; 
  Allergie:number; 
  EstomacPlein:boolean; 
  EstomacOuiNon:string;

  
  Kemura:number;
  Busoni:number;
  BolusPIEBRopiSuf:number;
  BolusPCEARopiSuf:number;
  DoseMaxPCEARopiSuf:number; 
  VolBupi5NN:any; 

  VolBAXmin:number;
  VolBAXmax:number;
  VolFEMmin:number;
  VolFEMmax:number;
  VolSciatMin:number;
  VolSciatMax:number;
  VolIH:number;
  VolPenien:number;
  VolBPV:number;
  VolTAPmin:number;
  VolTAPmax:number;
  VolPudendal:number;
  VolQL:number; 


  isShownAPD:boolean=false;
  isShownRachi:boolean=false;
  isShownALRP:boolean=false; 




  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  ToggleAPD() {
    this.isShownAPD = !this.isShownAPD; 
    this.isShownRachi = this.isShownALRP = false; 
  };

  ToggleRachi() {
    this.isShownRachi = !this.isShownRachi; 
    this.isShownAPD = this.isShownALRP = false;
  };

  ToggleALRP() {
    this.isShownALRP = !this.isShownALRP; 
    this.isShownAPD = this.isShownRachi = false;
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
            this.navCtrl.push(AccueilPage);
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
    this.storage.get('AgeNum').then((Age) => {
        this.AgeNum = Age;
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


          if (!this.PoidsNum || !this.AgeNum) { this.presentAlert();this.calculs();}
          else { this.calculs() }; 
        
        });
    
    })}) }) }));}


    calculs () {
      let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeNum').then((Age) => {
        this.AgeNum = Age;
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

        /*placer les calculs ici*/
          this.Kemura = Math.round(((10+this.PoidsNum)*0.8)*10)/10; 
          this.Busoni = Math.round (((2*(this.AgeNum)/12)+10)*10)/10; 

          this.BolusPIEBRopiSuf = Math.round((this.PoidsNum*0.2)*10)/10 ;
          this.BolusPCEARopiSuf = Math.round((this.PoidsNum*0.15)*10)/10;
          this.DoseMaxPCEARopiSuf = Math.round((this.PoidsNum*1.5)*10)/10; 

          this.VolBupi5NN = (Math.round((this.PoidsNum * 0.2)*10)/10 + " mL"); 
          if (this.VolBupi5NN >= 1){this.VolBupi5NN = "NA - poids > 5 kg"}

          this.VolBAXmin = Math.round((this.PoidsNum * 0.2)*10)/10; 
          this.VolBAXmax = Math.round((this.PoidsNum * 0.5)*10)/10; 
          this.VolFEMmin = Math.round((this.PoidsNum * 0.3)*10)/10; 
          this.VolFEMmax = Math.round((this.PoidsNum * 1)*10)/10; 
          this.VolSciatMin = Math.round((this.PoidsNum * 0.3)*10)/10; 
          this.VolSciatMax = Math.round((this.PoidsNum * 1)*10)/10; 
          this.VolIH = Math.round((this.PoidsNum * 0.5)*10)/10; 
          this.VolPenien = Math.round((this.PoidsNum * 0.1)*10)/10; 
          this.VolBPV = Math.round((this.PoidsNum * 0.5)*10)/10; 
          this.VolTAPmin = Math.round((this.PoidsNum * 0.3)*10)/10; 
          this.VolTAPmax = Math.round((this.PoidsNum * 0.5)*10)/10; 
          this.VolPudendal = Math.round((this.PoidsNum * 0.2)*10)/10; 
          this.VolQL = Math.round((this.PoidsNum * 0.25)*10)/10; 



  })
      })})
    }) 
    }));};



}
