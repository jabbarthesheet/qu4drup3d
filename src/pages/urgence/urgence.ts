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
  AerosolBricanylAAG:number; 
  AdminKClAAG:number; 
  AdminKClAAGmg:number; 
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

  AdminNarcan:number;
  AdminAnexate:number;
  AdminNAC1:number;
  AdminNAC2:number;
  AdminNAC3:number;
  AdminNAC4:number;

  ProtocoleNAD:string; 
  QuantiteNAD:number;
  VolumeNAD:number;
  AmpoulesNAD:number; 
  VolumeSerumPhyNAD:number; 
  DebitNADmlh:number; 
  DebitNADgammakgmin:number;
  DixiemeDebitNADgammakgmin:number=100;
  DebitNADmgh:number;

  isShownNAD:boolean=false; 
  isShownACR:boolean=false; 
  isShownChocAna:boolean=false; 
  isShownHTM:boolean=false; 
  isShownIAL:boolean=false;
  isShownMetabo:boolean=false; 
  isShownAAG:boolean=false; 
  isShownHTADiuretiques:boolean=false;
  isShownCriseConvulsive:boolean=false;
  isShownAntidotes:boolean=false;

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
      this.AdminKClAAG = Math.round((this.PoidsNum*2)*10)/10;
      this.AdminKClAAGmg = Math.round((this.PoidsNum*150)*10)/10;
      if (this.AdminKClAAGmg >= 4000){this.AdminKClAAGmg = 4000;};
      if (this.PoidsNum <= 10) {this.ApportBaseHoraire = Math.round(4*this.PoidsNum);} 
      else if (this.PoidsNum <= 20) {this.ApportBaseHoraire = Math.round(40+(this.PoidsNum - 10)*2);}
      else if (this.PoidsNum > 20) {this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));};
      this.ApportBaseJour = Math.round((this.ApportBaseHoraire * 24)*10)/10;
      this.AerosolBricanylAAG = Math.round((this.PoidsNum * 0.2)*10)/10;
      if (this.AerosolBricanylAAG >= 5) {this.AerosolBricanylAAG = 5;};
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

      /** ANTIDOTES */

      this.AdminNarcan = Math.round((this.PoidsNum * 10)*10)/10;
      this.AdminAnexate = Math.round((this.PoidsNum * 10)*10)/10;
      this.AdminNAC1 = Math.round((this.PoidsNum * 150)*10)/10;
      this.AdminNAC2 = Math.round((this.PoidsNum * 50)*10)/10;
      this.AdminNAC3 = Math.round((this.PoidsNum * 100)*10)/10;
      this.AdminNAC4 = Math.round((this.PoidsNum * 150)*10)/10; 

      /** NAD */

      if (this.PoidsNum <= 10){
      this.ProtocoleNAD = "3 mg/kg dans 50 mL"; 
      this.QuantiteNAD = Math.round(this.PoidsNum*3*10)/10; 
      this.VolumeNAD = Math.round(this.QuantiteNAD/2*10)/10;
      this.AmpoulesNAD = Math.round(this.VolumeNAD/4*10)/10;
      this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD)*10)/10; 
      this.DebitNADmlh = 1 ; 
      this.DebitNADgammakgmin = 1 ;
      this.DebitNADmgh = Math.round((this.DebitNADgammakgmin*this.PoidsNum*60/1000)*10)/10 ;
      this.DixiemeDebitNADgammakgmin=100;

      }

      else if (this.PoidsNum <= 30){
        this.ProtocoleNAD = "1,5 mg/kg dans 50 mL"; 
        this.QuantiteNAD = Math.round(this.PoidsNum*1.5*10)/10; 
        this.VolumeNAD = Math.round(this.QuantiteNAD/2*10)/10;
        this.AmpoulesNAD = Math.round(this.VolumeNAD/4*10)/10;
        this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD)*10)/10; 
        this.DebitNADmlh = 2 ; 
        this.DebitNADgammakgmin = 1 ; 
        this.DebitNADmgh = Math.round((this.DebitNADgammakgmin*this.PoidsNum*60/1000)*10)/10 ;
        this.DixiemeDebitNADgammakgmin=100;

        }


        else {
          this.ProtocoleNAD = "0,6 mg/kg dans 50 mL"; 
          this.QuantiteNAD = Math.round(this.PoidsNum*0.6*10)/10; 
          this.VolumeNAD = Math.round(this.QuantiteNAD/2*10)/10;
          this.AmpoulesNAD = Math.round(this.VolumeNAD/4*10)/10;
          this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD)*10)/10; 
          this.DebitNADmlh = 5 ; 
          this.DebitNADgammakgmin = 1 ; 
          this.DebitNADmgh = Math.round((this.DebitNADgammakgmin*this.PoidsNum*60/1000)*10)/10 ;
          this.DixiemeDebitNADgammakgmin=100;

          };
    };


    /**NAD PREPARATION */

    toggleNAD(){
      this.isShownNAD = !this.isShownNAD;
     };

     VariationNAD(){
      this.DebitNADgammakgmin = this.DixiemeDebitNADgammakgmin/100; 
      this.DebitNADmgh = Math.round((this.DebitNADgammakgmin*this.PoidsNum*60/1000)*10)/10 ;
      if (this.ProtocoleNAD == "0,6 mg/kg dans 50 mL"){this.DebitNADmlh = Math.round((this.DebitNADgammakgmin*5)*10)/10; }
      else if (this.ProtocoleNAD == "1,5 mg/kg dans 50 mL"){this.DebitNADmlh = Math.round((this.DebitNADgammakgmin*2)*10)/10; }
      else if (this.ProtocoleNAD == "3 mg/kg dans 50 mL"){this.DebitNADmlh = this.DebitNADgammakgmin; };
     }



  /* Toggle des cartes */

  ToggleAntidotes() 
  {
    this.isShownAntidotes = !this.isShownAntidotes;
  }
    
    ToggleACR () {
      this.isShownACR = !this.isShownACR; 
    };
    ToggleChocAna () {
      this.isShownChocAna = !this.isShownChocAna;
    };
    ToggleHTM () {
      this.isShownHTM = !this.isShownHTM; 
    };
    ToggleIAL () {
      this.isShownIAL = !this.isShownIAL; 
    };
    ToggleMetabo () {
      this.isShownMetabo = !this.isShownMetabo; 
    };

    ToggleAAG () {
      this.isShownAAG = !this.isShownAAG ;
    }; 

    ToggleHTADiuretiques(){
      this.isShownHTADiuretiques = !this.isShownHTADiuretiques ; 
    };

    ToggleCriseConvulsive () {
      this.isShownCriseConvulsive = !this.isShownCriseConvulsive; 
    };

ionViewDidLoad() {
  console.log('ionViewDidLoad AntalgiePage');
};


  }
