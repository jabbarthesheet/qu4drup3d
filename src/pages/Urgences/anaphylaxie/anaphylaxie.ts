import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccueilPage } from '../../accueil/accueil';

/**
 * Generated class for the AnaphylaxiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-anaphylaxie',
  templateUrl: 'anaphylaxie.html',
})
export class AnaphylaxiePage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  pagepatient:AccueilPage; 
  Taille:number;
  ageLecture:number;
  sexeMF:string;
  AdminDantroleneHTM:number; 


  PosoAdrenalineAnaph:number; 
  PosoSoluAnaph:number; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnaphylaxiePage');
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
      

      /* Anaphylaxie */

   this.PosoAdrenalineAnaph = Math.round((this.PoidsNum*1)*10)/10;
   this.PosoSoluAnaph = Math.round((this.PoidsNum*1)*10)/10;
    };

}
