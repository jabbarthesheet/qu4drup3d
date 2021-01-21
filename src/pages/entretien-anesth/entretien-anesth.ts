import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


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
  Taille:number;
  sexeMF:string;
  ageLecture:number;

  CAMSevo:number;

  PropoEntretien:number;
  HypnoEntretien:number; 
  RemiEntretien:number; 
  RocuEntretien:number;
  TracEntretien:number;



  XyloEntretien:number;
  KetaEntretien:number; 
  SufEntretien:number; 
  DexdorBolusSeul:number;
  DexdorBolusAvecIVSE:number; 
  DexdorEntretien:number; 
  DexdorAgitation:number; 

  isShownInhalatoire:boolean=false;
  isShownHypnotiquesIntraVeineux:boolean=false;
  isShownAntalgiques:boolean=false;
  isShownCurares:boolean=false; 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome(){
    this.navCtrl.pop();
  };

  ToggleInhalatoire() {
    this.isShownInhalatoire = !this.isShownInhalatoire; 
  };

  ToggleHypnotiquesIntraVeineux() {
    this.isShownHypnotiquesIntraVeineux = !this.isShownHypnotiquesIntraVeineux; 
  };

  ToggleAntalgiques() {
    this.isShownAntalgiques = !this.isShownAntalgiques;
  };

  ToggleCurares(){
    this.isShownCurares = !this.isShownCurares;
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
          if(!sexe){this.sexeMF="Fille"};
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

    calculs () 
    {

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
        this.XyloEntretien = Math.round((this.PoidsNum * 1)*10)/10; 
        this.KetaEntretien = Math.round((this.PoidsNum * 0.15)*10)/10; 
        this.SufEntretien = Math.round((this.PoidsNum * 0.2)*10)/10; 
        this.DexdorBolusSeul = Math.round((this.PoidsNum * 0.5)*10)/10; 
        this.DexdorBolusAvecIVSE = Math.round((this.PoidsNum * 1)*10)/10; 
        this.DexdorEntretien = Math.round((this.PoidsNum * 0.4)*10)/10; 
        this.DexdorAgitation = Math.round((this.PoidsNum * 0.3)*10)/10; 
    };

}
