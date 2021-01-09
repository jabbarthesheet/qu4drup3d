import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';

/**
 * Generated class for the PlateauInductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-plateau-induction',
  templateUrl: 'plateau-induction.html',
})


export class PlateauInductionPage {
  AgeNum:number;
  PoidsNum:number;  
  EstomacPlein:boolean;
  EstomacOuiNon:string;
  DureeJeune:number;
  sexeMF:string; 
  Taille:number; 
  ageLecture:number; 


  AdminPropofol:number;
  PosoPropofol:string;
  DiluPropofol:string;
  
  AdminThiopental:number; 
  PosoThiopental:string;
  DiluThiopental:string; 

  AdminEtomidate:number; 
  PosoEtomidate:string;
  DiluEtomidate:string; 

  AdminKetamine:number;
  PosoKetamine:string;
  DiluKetamine:string;

  AdminSufentanil:number;
  PosoSufentanil:string;
  DiluSufentanil:string; 

  AdminAlfentanil:number;
  PosoAlfentanil:string;
  DiluAlfentanil:string;

  AdminCelocurine:number;
  PosoCelocurine:string;
  DiluCelocurine:string;

  AdminRocuronium:number;
  PosoRocuronium:string;
  DiluRocuronium:string;

  AdminAtracurium:number;
  PosoAtracurium:string; 
  DiluAtracurium:string; 

  AdminDexa:number;
  DiluDexa:string; 

  AdminExacyl:number;
  EntretienExacyl:number; 
  DiluExacyl:string;

  AdminEphedrine:number;
  DiluEphedrine:string; 
  AdminAtropine:number;
  DiluAtropine:string; 

  AdminXylo:number; 
  AdminKetaAntalgique:number; 
  DiluKetaAntalgique:string;

  DexdorPremed:number; 
  DexdorBolusSeul:number;

  Allergie:string;

 isShownHypno:boolean=false;
 isShownMorphiniques:boolean=false;
 isShownCurares:boolean=false;
 isShownAutres:boolean=false; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController) {
  };


  ToggleHypno() {
    this.isShownHypno = !this.isShownHypno; 
    this.isShownMorphiniques = this.isShownCurares = this.isShownAutres = false; 
  };

  ToggleMorphiniques() {
    this.isShownMorphiniques = !this.isShownMorphiniques; 
    this.isShownHypno = this.isShownCurares = this.isShownAutres = false; 
  };

  ToggleCurares () {
    this.isShownCurares = !this.isShownCurares;
    this.isShownHypno = this.isShownMorphiniques = this.isShownAutres = false; 
  };

  ToggleAutres () {
    this.isShownAutres = !this.isShownAutres; 
    this.isShownHypno = this.isShownMorphiniques = this.isShownCurares = false; 
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
            this.navCtrl.pop();
          }
        }
      ]
    });

    await alert.present();
    };

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
     /* PROPOFOL */
     if (this.AgeNum <= 1 )
         { this.AdminPropofol = Math.round((this.PoidsNum * 3)*10)/10 ; this.PosoPropofol = "3 mg/kg jusqu'à 1 mois";}
     else {this. AdminPropofol = Math.round((this.PoidsNum * 5)*10)/10 ; this.PosoPropofol = "5 mg/kg";}; 
 
     if (this.AgeNum <= 1 )
     { this.DiluPropofol = "5 mg/mL";}
     else {this.DiluPropofol = "10 mg/mL";}; 
 
     /* PENTO */
     if (this.AgeNum <= 1)
         {this.AdminThiopental = Math.round((this.PoidsNum * 10)*10)/10; this.PosoThiopental = "10 mg/kg jusqu'à 1 mois" ; }
     else {this.AdminThiopental = Math.round((this.PoidsNum * 7)*10)/10; this.PosoThiopental = "7 mg/kg" ;};
 
     if (this.AgeNum <= 12 )
     { this.DiluThiopental = "10 mg/mL";}
     else {this.DiluThiopental = "25 mg/mL";}; 
 
     /* KETA */
    this.AdminKetamine = Math.round((3*this.PoidsNum)*10)/10;
    this.PosoKetamine = "3 mg/kg en IV"; 
     if (this.AgeNum <= 1)
       {this.DiluKetamine = "5 mg/mL";}
     else {this.DiluKetamine = "10 mg/mL";};
 
     /* ETO */
     this.AdminEtomidate= Math.round((0.5*this.PoidsNum)*10)/10;   
     this.PosoEtomidate = "0,5 mg/kg"
     if (this.AgeNum <= 1)
         {this.DiluEtomidate = "0,5 mg/mL";}
     else if (this.AgeNum <= 24)
         {this.DiluEtomidate = "1 mg/mL";}
     else if (this.AgeNum > 24)
         {this.DiluEtomidate = "2 mg/mL";};
 
     /* SUF */
     this.AdminSufentanil=Math.round((0.2*this.PoidsNum)*10)/10; 
     this.PosoSufentanil = "0,2 µg/kg";
     if(this.AgeNum <= 1){this.DiluSufentanil = "0,5 µg/mL";}
     else if (this.AgeNum <= 12){this.DiluSufentanil = "1 µg/mL";}
     else if (this.AgeNum <= 72){this.DiluSufentanil = "2 µg/mL";}
     else if (this.AgeNum > 72){this.DiluSufentanil = "5 µg/mL";};
 
     /* RAPI */
     this.AdminAlfentanil=Math.round((20*this.PoidsNum)*10)/10; 
     this.PosoAlfentanil = "20 µg/kg";
     if(this.PoidsNum <= 30){this.DiluAlfentanil = "100 µg/mL";}
     else {this.DiluAlfentanil = "500 µg/mL";}
 
     /* CELO */
     if (this.AgeNum <= 24){this.AdminCelocurine = Math.round((this.PoidsNum * 2)*10)/10; this.PosoCelocurine = "2 mg/kg jusqu'à 2 ans"}
     else {this.AdminCelocurine = Math.round((this.PoidsNum)*10)/10; this.PosoCelocurine = "1 mg/kg";};
     if (this.AgeNum <= 1){this.DiluCelocurine = "2 mg/mL";}
     else if (this.AgeNum <= 24){this.DiluCelocurine = "5 mg/mL";}
     else if (this.AgeNum > 24){this.DiluCelocurine = "10 mg/mL";};
 
     /* ROCU */
     if (!this.EstomacPlein){this.AdminRocuronium = Math.round((this.PoidsNum * 0.6)*10)/10; this.PosoRocuronium = "0,6 mg/kg hors urgence";}
     else {this.AdminRocuronium = Math.round((this.PoidsNum * 1.2)*10)/10; this.PosoRocuronium = "1,2 mg/kg pour ISR";};
     if (this.AgeNum <= 12){this.DiluRocuronium = "1 mg/mL";}
     else if (this.AgeNum <= 60){this.DiluRocuronium = "2,5 mg/mL";}
     else if (this.AgeNum > 60){this.DiluRocuronium = "10 mg/mL";};
 
     /* TRAC */
     this.AdminAtracurium=Math.round((0.5*this.PoidsNum)*10)/10; 
     this.PosoAtracurium = "0,5 mg/kg";
     if (this.AgeNum <= 1){this.DiluAtracurium = "0,5 mg/mL";}
     else if (this.AgeNum <= 12){this.DiluAtracurium = "1 mg/mL";}
     else if (this.AgeNum <= 60){this.DiluAtracurium = "2,5 mg/mL";}
     else if (this.AgeNum > 60){this.DiluAtracurium = "10 mg/mL";};

     /* DEXA */
     if (this.PoidsNum <= 80 ) {this.AdminDexa = Math.round(((this.PoidsNum * 0.15)*10)/10);}
     else {this.AdminDexa = 12 ;} 
     if (this.PoidsNum > 40 ) {this.DiluDexa = "4 mg/mL";}
     else {this.DiluDexa = "1 mg/mL";};

    /* EXACYL */
    this.AdminExacyl = Math.round(((this.PoidsNum * 10)*10)/10); 
    this.EntretienExacyl = Math.round(((this.PoidsNum * 5)*10)/10);
    if (this.PoidsNum <= 20) {this.DiluExacyl = "50 mg/mL";}
    else {this.DiluExacyl = "100 mg/mL";};
    

    /* Ephedrine & Atropine*/

    this.AdminEphedrine = Math.round((this.PoidsNum*0.3)*10)/10;

    if (this.PoidsNum <= 50 ){this.AdminAtropine = Math.round((this.PoidsNum*0.02)*100)/100;}
    else {this.AdminAtropine = 1 ;}
  
    if (this.PoidsNum < 5){this.DiluEphedrine = "0,5 mg/mL"}
    else if (this.PoidsNum < 10){this.DiluEphedrine = "1 mg/mL"}
    else {this.DiluEphedrine = "3 mg/mL"}; 

    if(this.PoidsNum < 5){this.DiluAtropine = "20 µg/mL"}
    else if (this.PoidsNum < 15){this.DiluAtropine = "100 µg/mL"}
    else {this.DiluAtropine = "500 µg/mL"};

    /* Xylocaïne et Keta version antalgique */

    this.AdminXylo = Math.round((this.PoidsNum*1.5)*10)/10;
    this.AdminKetaAntalgique = Math.round((this.PoidsNum*0.5)*10)/10; 
    
    if (this.PoidsNum <= 10) {this.DiluKetaAntalgique = "1 mg/mL";}
    else if (this.PoidsNum <= 30 ) {this.DiluKetaAntalgique = "5 mg/mL";} 
    else {this.DiluKetaAntalgique = "10 mg/mL";};

    /* Dexdor prémed et bolus */
    this.DexdorPremed = Math.round((this.PoidsNum*2)*10)/10;
    this.DexdorBolusSeul = Math.round((this.PoidsNum*0.5)*10)/10;

  }; 



    ionViewDidLoad (){
      console.log('ionViewDidLoad PlateauInductionPage');

    };


}