import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController, NavParams, Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccueilPage } from '../accueil/accueil';

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
  pagepatient:AccueilPage; 
  Taille:number;
  ageLecture:number;
  sexeMF:string;

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

  AdminG10Initial:number; 
  AdminG10Suite:number;
  DeltaNa:number;
  NatremieMesuree:number;
  AdminNa:number;

  AerosolSalbutamolAAG:number; 
  AdminSolumedrolAAG:number;
  IVSESolumedrolAAG:number; 
  AerosolAtroventAAG:number; 
  MgSO4AAG:number;
  SalbutamolIVAAG:number; 
  AdminKClAAG:number; 
  ApportBaseHoraire:number; 
  ApportBaseJour:number;

  LoxenIVSE:number; 
  SectralPO:number; 
  TrandateBolus:number;
  TrandateIVSE:number; 
  AdminRenitec:number; 
  AdminLasilix:number; 
  AdminBurinexIVSE:number;
  AdminAldactoneMin:number;
  AdminAldactoneMax:number;

  AdminRivotrilConvulsion:number;
  AdminGardenal:number;
  AdminDilantin:number;
  AdminMidazolamConvulsion:number;
  AdminKeppra:number;

  AdminGluconateCa:number;
  AdminInsulineHyperK:number;
  AdminG10HyperK:number;

  isShownACR:boolean=false; 
  isShownChocAna:boolean=false; 
  isShownHTM:boolean=false; 
  isShownIAL:boolean=false;
  isShownMetabo:boolean=false; 
  isShownAAG:boolean=false; 
  isShownHTADiuretiques:boolean=false;
  isShownCriseConvulsive:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };

/*Chargement des données du formulaire au chargement de la page, alerte si données manquantes*/

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
        if (!this.PoidsNum || !this.AgeNum) { this.presentAlert(); this.calculs();}
        else {this.calculs()};
        });
        });
        });
        });
        });
        });
        }));};
    
 
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
            this.navCtrl.push(AccueilPage); 
            
          }
        }
      ]
    });
    await alert.present();
    };

    CalculDeltaNa() {
      this.DeltaNa = 125 - this.NatremieMesuree; 
      this.AdminNa = Math.round((this.DeltaNa*this.PoidsNum*0.6)*10)/10; 
    }

    calculs () {
      
      /* ACR */

      this.CEEACR = Math.round((this.PoidsNum*4)*10)/10;
      this.PosoAdrenalineACR = Math.round((this.PoidsNum*10)*10)/10; 
      this.PosoCordaroneACR = Math.round((this.PoidsNum*5)*10)/10;
      this.PosoBicarACR = Math.round((this.PoidsNum*2)*10)/10;

         /* Anaphylaxie */

      this.PosoAdrenalineAnaph = Math.round((this.PoidsNum*1)*10)/10;
      this.PosoSoluAnaph = Math.round((this.PoidsNum*1)*10)/10;

        /* HTM */

      this.AdminDantroleneHTM = Math.round((this.PoidsNum*2.5)*10)/10;

        /* Intox aux AL */

      this.PosoRivotrilIAL = Math.round((this.PoidsNum*15)*10)/10;
      this.PosoIntralipidesIAL = Math.round((this.PoidsNum*3)*10)/10;

        /* Desordres métaboliques  */

      this.AdminG10Initial =  Math.round((this.PoidsNum*3)*10)/10;
      this.AdminG10Suite =  Math.round((this.PoidsNum*0.4)*10)/10;

      this.AdminGluconateCa =  Math.round((this.PoidsNum*2)*10)/10;
      this.AdminInsulineHyperK =  Math.round((this.PoidsNum*0.1)*10)/10;
      this.AdminG10HyperK =  Math.round((this.PoidsNum*10)*10)/10;

      /* Asthme aigu grave  */

      if (this.PoidsNum <= 20){this.AerosolSalbutamolAAG = 2.5 ; }
      else {this.AerosolSalbutamolAAG = 5 ;};
      if (this.AgeNum < 72){ this.AerosolAtroventAAG = 0.25;}
      else {this. AerosolAtroventAAG = 0.5;};
      this.AdminSolumedrolAAG = Math.round((this.PoidsNum*2)*10)/10;
      this.IVSESolumedrolAAG = Math.round((this.PoidsNum*0.5)*10)/10;
      this.MgSO4AAG = Math.round((this.PoidsNum*40)*10)/10;
      if (this.MgSO4AAG >= 2000){this.MgSO4AAG = 2000;};
      this.SalbutamolIVAAG = Math.round((this.PoidsNum*0.5)*10)/10;
      this.AdminKClAAG = Math.round((this.PoidsNum*3)*10)/10;
      if (this.PoidsNum <= 10) {this.ApportBaseHoraire = Math.round(4*this.PoidsNum);} 
      else if (this.PoidsNum <= 20) {this.ApportBaseHoraire = Math.round(40+(this.PoidsNum - 10)*2);}
      else if (this.PoidsNum > 20) {this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));};
      this.ApportBaseJour = Math.round((this.ApportBaseHoraire * 24)*10)/10;

      /* HTA & diurétiques  */

      this.LoxenIVSE = Math.round((this.PoidsNum * 60)*10)/10;
      this.SectralPO = Math.round((this.PoidsNum * 2)*10)/10;  
      this.TrandateBolus = Math.round((this.PoidsNum * 0.3)*10)/10 ;
      this.TrandateIVSE = Math.round((this.PoidsNum * 2 )*10)/10 ; 
      this.AdminRenitec = Math.round((this.PoidsNum * 50)*10)/10 ; 
      if (this.AdminRenitec >= 5000){this.AdminRenitec = 5000;};


      this.AdminLasilix  = Math.round((this.PoidsNum * 1)*10)/10; 
      this.AdminBurinexIVSE = Math.round((this.PoidsNum * 10)*10)/10; 
      this.AdminAldactoneMin = Math.round((this.PoidsNum * 1)*10)/10; 
      this.AdminAldactoneMax = Math.round((this.PoidsNum * 5)*10)/10; 
    
      /* Anticonvulsivants  */


      this.AdminRivotrilConvulsion = Math.round((this.PoidsNum * 20)*10)/10; 
      this.AdminGardenal = Math.round((this.PoidsNum * 15)*10)/10; 
      if (this.AdminGardenal >= 500){this.AdminGardenal = 500; }; 
      this.AdminDilantin = Math.round((this.PoidsNum * 20)*10)/10;
      if (this.AdminDilantin >= 1500){this.AdminDilantin = 1500; }; 
      this.AdminMidazolamConvulsion = Math.round((this.PoidsNum * 0.25)*10)/10;
      this.AdminKeppra = Math.round((this.PoidsNum * 30)*10)/10;
      if (this.AdminKeppra >= 2000){this.AdminKeppra = 2000;};

    };





  /* Toggle des cartes */

    
    ToggleACR () {
      this.isShownACR = !this.isShownACR; 
      this.isShownChocAna = this.isShownCriseConvulsive = this.isShownHTM = this.isShownIAL = this.isShownMetabo = this.isShownAAG = this.isShownHTADiuretiques = false;
    };
    ToggleChocAna () {
      this.isShownChocAna = !this.isShownChocAna;
      this.isShownACR = this.isShownCriseConvulsive = this.isShownHTM = this.isShownIAL = this.isShownMetabo = this.isShownAAG = this.isShownHTADiuretiques = false; 
    };
    ToggleHTM () {
      this.isShownHTM = !this.isShownHTM; 
      this.isShownACR = this.isShownCriseConvulsive = this.isShownChocAna = this.isShownIAL = this.isShownMetabo = this.isShownAAG = this.isShownHTADiuretiques = false; 
    };
    ToggleIAL () {
      this.isShownIAL = !this.isShownIAL; 
      this.isShownACR = this.isShownCriseConvulsive = this.isShownChocAna = this.isShownHTM = this.isShownMetabo = this.isShownAAG = this.isShownHTADiuretiques = false;
    };
    ToggleMetabo () {
      this.isShownMetabo = !this.isShownMetabo; 
      this.isShownACR = this.isShownCriseConvulsive = this.isShownChocAna = this.isShownHTM = this.isShownIAL = this.isShownAAG = this.isShownHTADiuretiques = false;
    };

    ToggleAAG () {
      this.isShownAAG = !this.isShownAAG ;
      this.isShownACR = this.isShownCriseConvulsive = this.isShownChocAna = this.isShownHTM = this.isShownIAL = this.isShownMetabo = this.isShownHTADiuretiques =false;
    }; 

    ToggleHTADiuretiques(){
      this.isShownHTADiuretiques = !this.isShownHTADiuretiques ; 
      this.isShownACR = this.isShownCriseConvulsive = this.isShownChocAna = this.isShownHTM = this.isShownIAL = this.isShownMetabo = this.isShownAAG = false;
    };

    ToggleCriseConvulsive () {
      this.isShownCriseConvulsive = !this.isShownCriseConvulsive; 
      this.isShownACR = this.isShownChocAna = this.isShownHTM = this.isShownIAL = this.isShownMetabo = this.isShownAAG = this.isShownHTADiuretiques =false;
    };

ionViewDidLoad() {
  console.log('ionViewDidLoad AntalgiePage');
};


  }
