import { Component, ViewChild } from '@angular/core';
import { Alert, AlertController, NavController, NavParams, Nav } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { Storage } from '@ionic/storage';
import { NumericLiteral } from 'typescript';
import { PatientPage } from '../patient/patient';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'page-urgence',
  templateUrl: 'urgence.html',
})


export class UrgencePage {

  @ViewChild(Nav) nav: Nav;

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  pagepatient:PatientPage; 

  ageAnnees:number;
  PAShypoTA:number; 
  SoluteRemplissage:string="";
  VolRemplissage:number;
  AdminEphedrine:number; 
  CEEACR:number;
  PosoAdrenalineACR:number;
  PosoCordaroneACR:number;
  PosoBicarACR:number;

  PosoAdrenalineAnaph:number; 
  PosoSoluAnaph:number; 

  AdminDantroleneHTM:number; 

  PosoRivotrilIAL:number;
  PosoIntralipidesIAL:number;

  isShownHypoTA:boolean=false; 
  isShownACR:boolean=false; 
  isShownChocAna:boolean=false; 
  isShownHTM:boolean=false; 
  isShownIAL:boolean=false; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  /* déclaration des fonctions*/

      
calculs () {
console.log("pret pr le calcul", this.PoidsNum);
this.ageAnnees = Math.round((this.AgeNum/12)*10)/10; 
this.PAShypoTA = Math.round((((this.AgeNum/12)*2)+70)*10)/10; 
if(this.AgeNum <= 15*12){this.SoluteRemplissage = "B26";}
else{this.SoluteRemplissage = "Ringer Lactate";}
this.VolRemplissage = Math.round(((this.PoidsNum)*10)*10)/10;
if(this.AgeNum <= 12){this.AdminEphedrine = Math.round((this.PoidsNum*0.3)*10)/10;}
else if (this.AgeNum <= 36){this.AdminEphedrine = Math.round((this.PoidsNum*0.2)*10)/10;}
else{this.AdminEphedrine = Math.round((this.PoidsNum*0.1)*10)/10;};
this.CEEACR = Math.round((this.PoidsNum*4)*10)/10;
this.PosoAdrenalineACR = Math.round((this.PoidsNum*10)*10)/10; 
this.PosoCordaroneACR = Math.round((this.PoidsNum*5)*10)/10;
this.PosoBicarACR = Math.round((this.PoidsNum*2)*10)/10;
this.PosoAdrenalineAnaph = Math.round((this.PoidsNum*1)*10)/10;
this.PosoSoluAnaph = Math.round((this.PoidsNum*1)*10)/10;
this.AdminDantroleneHTM = Math.round((this.PoidsNum*2.5)*10)/10;
this.PosoRivotrilIAL = Math.round((this.PoidsNum*15)*10)/10;
this.PosoIntralipidesIAL = Math.round((this.PoidsNum*3)*10)/10;

}; 

      /*1. récupération des données du formulaire patient */
      getdata (){

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

              if (!this.PoidsNum || !this.AgeNum) { this.presentAlert(); this.calculs()}
              else { 
                this.calculs();

              };

            })
          })})
        }) 
        }));
      };  

      
      /*2. Fonction d'alerte si données manquantes */

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


            /* 3. Toggle des cartes */

    ToggleHypoTA () {
        this.isShownHypoTA = !this.isShownHypoTA; 
        this.isShownACR = this.isShownChocAna = this.isShownHTM = this.isShownIAL = false;
    };

      ToggleACR () {
        this.isShownACR = !this.isShownACR; 
        this.isShownHypoTA = this.isShownChocAna = this.isShownHTM = this.isShownIAL = false;
    };

    ToggleChocAna () {
      this.isShownChocAna = !this.isShownChocAna;
      this.isShownHypoTA = this.isShownACR = this.isShownHTM = this.isShownIAL = false; 
      
  };

    ToggleHTM () {
      this.isShownHTM = !this.isShownHTM; 
      this.isShownHypoTA = this.isShownACR = this.isShownChocAna = this.isShownIAL = false; 
  };

    ToggleIAL () {
      this.isShownIAL = !this.isShownIAL; 
      this.isShownHypoTA = this.isShownACR = this.isShownChocAna = this.isShownHTM = false;
  };




      /*Chargement des données du formulaire au chargement de la page, alerte si données manquantes*/

  ionViewWillEnter()
  {
    this.getdata ();
}




ionViewDidLoad() {
  console.log('ionViewDidLoad AntalgiePage');
};


  }
