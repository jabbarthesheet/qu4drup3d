import { Component } from '@angular/core';
import { Alert, AlertController, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { Storage } from '@ionic/storage';
import { NumericLiteral } from 'typescript';
import { PatientPage } from '../patient/patient';

/**
 * Generated class for the AntalgiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-antalgie',
  templateUrl: 'antalgie.html',
})
export class AntalgiePage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;

  isShownPal1:boolean=false;
  isShownPal2:boolean=false;
  isShownPal3:boolean=false;
  isShownAutres:boolean=false;
  isShownAntiEmet:boolean=false;

  AdminParacetamol:number;
  AdminKeto:number;
  AdminIbu:number; 
  AdminNubain:number; 
  AdminNubainHdJ:number; 
  AdminAcupan:number; 
  AdminTramadol:number; 
  AdminMorphineBO:number; 
  AdminMorphineTitration:number;
  AdminMorphinePCA:number;
  AdminMorphinePCAMax:number;
  AdminMorphinePOLP:number;
  AdminMorphinePOID:number;
  AdminNeurontin:number;
  AdminSpasfonIV:number;
  AdminSpasfonPO:number;
  AdminLaroxylIV:number;
  AdminLaroxylPO:number;
  AdminRivotrilPO:number;
  GouttesRivotril:number;
  AdminClonidineIVSE:number;
  AdminClonidinePO:number;
  AdminZophren:number;
  AdminDroleptan:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
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
            this.navCtrl.push(PatientPage);
          }
        }
      ]
    });

    await alert.present();
    };


  ionViewDidLoad() {
    console.log('ionViewDidLoad AntalgiePage');
  };

  TogglePalier1() {
    console.log('toggle');
    this.isShownPal1 = !this.isShownPal1;
    this.isShownPal2 = this.isShownPal3 = this.isShownAutres = this.isShownAntiEmet =  false; 
  };

  TogglePalier2() {
    console.log('toggle');
    this.isShownPal2 = !this.isShownPal2;
    this.isShownPal1 = this.isShownPal3 = this.isShownAutres = this.isShownAntiEmet = false; 
  };

  TogglePalier3() {
    console.log('toggle');
    this.isShownPal3 = !this.isShownPal3;
    this.isShownPal1 = this.isShownPal2 = this.isShownAutres = this.isShownAntiEmet = false; 
  };


  ToggleAutres() {

    console.log('toggle');
    this.isShownAutres = !this.isShownAutres;
    this.isShownPal1 = this.isShownPal3 = this.isShownPal2 = this.isShownAntiEmet = false; 
    
  };

  ToggleAntiEmet() {

    console.log('toggle');
    this.isShownAntiEmet = !this.isShownAntiEmet;
    this.isShownPal1 = this.isShownPal3 = this.isShownPal2 = this.isShownAutres = false; 
    
  };

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

        /*Palier 1*/
    this.AdminParacetamol = Math.round((this.PoidsNum * 15)*10)/10;
    this.AdminKeto = Math.round((this.PoidsNum * 1)*10)/10;
    this.AdminIbu = Math.round((this.PoidsNum * 10)*10)/10;


     /*Palier 2*/
    this.AdminNubain = Math.round((this.PoidsNum * 0.2)*10)/10;
    this.AdminNubainHdJ = Math.round((this.PoidsNum * 0.1)*10)/10;
    this.AdminAcupan = Math.round((this.PoidsNum * 1)*10)/10;
    this.AdminTramadol = Math.round((this.PoidsNum * 1)*10)/10;

     /*Palier 3*/
    this.AdminMorphineBO = Math.round((this.PoidsNum * 0.1)*10)/10;
    this.AdminMorphineTitration = Math.round((this.PoidsNum * 0.025)*10)/10;
    this.AdminMorphinePCA = Math.round((this.PoidsNum * 0.02)*10)/10;
    this.AdminMorphinePCAMax = Math.round((this.PoidsNum * 0.4)*10)/10;
    this.AdminMorphinePOLP = Math.round((this.PoidsNum * 1)*10)/10;
    this.AdminMorphinePOID = Math.round((this.PoidsNum * 0.1)*10)/10;

     /*Autres antalgiques*/
    this.AdminNeurontin = Math.round((this.PoidsNum * 5)*10)/10;
    this.AdminSpasfonIV = Math.round((this.PoidsNum * 0.5)*10)/10;
    this.AdminSpasfonPO = Math.round((this.PoidsNum * 1.5)*10)/10;
    this.AdminLaroxylIV = Math.round((this.PoidsNum * 0.5)*10)/10;
    this.AdminLaroxylPO = Math.round((this.PoidsNum * 0.5)*10)/10;
    this.AdminRivotrilPO = Math.round((this.PoidsNum * 0.01)*10)/10;
    this.GouttesRivotril = Math.round(this.PoidsNum/10);
    this.AdminClonidineIVSE = Math.round((this.PoidsNum * 0.5)*10)/10;
    this. AdminClonidinePO = Math.round((this.PoidsNum * 5)*10)/10;

    /* Anti émétiques */

    this.AdminZophren = Math.round((this.PoidsNum * 0.1)*10)/10;
    this.AdminDroleptan = Math.round((this.PoidsNum * 25)*10)/10;


  })
      })})
    }) 
    }));}

    };
