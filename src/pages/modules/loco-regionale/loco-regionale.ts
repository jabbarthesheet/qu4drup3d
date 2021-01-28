import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccueilPage } from '../../accueil/accueil';


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
  ageLecture:number;
  Taille:number;
  sexeMF:string;
  
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

ALRView:number=1; 



  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
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
        if(!sexe){this.sexeMF="Fille"}
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
          };


}
