import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { Storage } from '@ionic/storage';
import { PatientPage } from '../patient/patient';

/**
 * Generated class for the GestionFluidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gestion-fluides',
  templateUrl: 'gestion-fluides.html',
})
export class GestionFluidesPage {

  estomaclast:boolean;
  EstomacPlein:boolean; 
  EstomacOuiNon:string;
  DureeJeune:number; 
  dureejeunelast:number=6;
  AgeNum:number;
  PoidsNum:number; 

  ApportBaseHoraire:number; 
  CompJeune:number;
  CompJeuneH1:number;
  CompJeuneH2:number;
  Solute:string;

  chir:any = {pertes:""};
  perteschir:string;
  CompPertesChir:number;
  PertesChirNum:number=2; 


  TotalHoraire:number; 
  TotalH1:number; 
  TotalH2et3:number; 

  UnitesPlaquettaires:number; 
  VolPFC:number; 
  MasseSanguine:number;
  DiffHb:number; 
  VolCGR:any;

  Hbmesuree:number=8;
  Hbsouhaitee:number=12;

  Allergie:string;

  isShownApports:boolean=false; 
  isShownCGR:boolean=false;
  isShownAutresPSL:boolean=false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController : AlertController) {
  }

  ToggleApports() {
    this.isShownApports = !this.isShownApports; 
    this.isShownCGR = this.isShownAutresPSL = false; 
  };

  ToggleCGR() {
    this.isShownCGR = !this.isShownCGR; 
    this.isShownApports = this.isShownAutresPSL = false; 
  };

  ToggleAutresPSL () {
    this.isShownAutresPSL = !this.isShownAutresPSL;
    this.isShownCGR = this.isShownApports = false; 
  };


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alerte',
      title: 'Minute papillon !',
      message: 'Saisissez un âge et un poids pour le patient. Pensez aussi à renseigner la durée du jeûne pré-opératoire pour profiter du calcul des apports horaires recommandés',
      buttons: [
        {
          text: 'Nan',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            console.log('Confirm Cancel: Nan');
          }
        }, {
          text: 'Okay',
          handler: (OK) => {
            console.log('Confirm Okay');
            this.navCtrl.push(PatientPage);
          }
        }
      ]
    });

    await alert.present();
    };


    loadcontent(){
      let promiseOptions: Promise<any>[] = [];
      promiseOptions.push(
      this.storage.get('EstomacPlein').then((esto) => {
          this.estomaclast = esto;console.log('estomac plein? qqq', this.estomaclast);
          if (this.estomaclast == true) {this.EstomacOuiNon = "plein"; }
          else {this.EstomacOuiNon = "vide" ; };
  
          this.storage.get('DureeJeune').then((dureejeune) => {
          this.DureeJeune = dureejeune;console.log('duree du jeune renseignee de', this.DureeJeune, 'heures.');  
          if(this.AgeNum < 15*12){this.Solute = "B26" ; }
          else {this.Solute = "Ringer Lactate";};
  
          if (this.PoidsNum <= 10) {this.ApportBaseHoraire = Math.round(4*this.PoidsNum);} 
          else if (this.PoidsNum <= 20) {this.ApportBaseHoraire = Math.round(40+(this.PoidsNum - 10)*2);}
          else if (this.PoidsNum > 20) {this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));};
  
          this.CompJeune = Math.round(this.ApportBaseHoraire * this.DureeJeune); 
          this.CompJeuneH1 = Math.round(this.CompJeuneH2 = this.CompJeune/2);
  
          this.CompPertesChir = Math.round(this.PertesChirNum*this.PoidsNum);
  
          this.TotalH1 = Math.round(this.ApportBaseHoraire + this.CompJeuneH1 + this.CompPertesChir); 
          this.TotalH2et3 = Math.round(this.ApportBaseHoraire + this.CompJeuneH1/2 + this.CompPertesChir);
          this.TotalHoraire = Math.round(this.ApportBaseHoraire + (this.CompPertesChir));
  
          if (this.AgeNum <= 15*12){this.UnitesPlaquettaires = Math.round(this.PoidsNum/5);}
          else {this.UnitesPlaquettaires = Math.round(this.PoidsNum/7);}; 
  
          this.VolPFC = Math.round(this.PoidsNum*20); 
  
          this.VolCGR = Math.round(this.PoidsNum * 16).toString() + " mL CGR" ; 
          this.DiffHb = 4; 
          this.MasseSanguine = Math.round(this.PoidsNum * 80); 
  
  
                }); 
              })); 
    }

  ionViewWillEnter() {
    
    let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeForCalc').then((Age) => {
        this.AgeNum = Age; 
    this.storage.get('PoidsForCalc').then((Poids) => {
        this.PoidsNum = Poids; console.log(
          'Le patient a', this.AgeNum, "mois au total pour ", this.PoidsNum, " kg.");
          this.storage.get('Allergie').then((allergie) => {
            this.Allergie = allergie; 
            this.storage.get('DureeJeune').then((dureejeune) => {
              this.DureeJeune = dureejeune;
              console.log('duree du jeune renseignee de', this.DureeJeune, 'heures.');

            if (!this.PoidsNum || !this.AgeNum || !this.DureeJeune) { this.presentAlert(); this.loadcontent()}
            else {  this.loadcontent()
          };



        })
    })
    });
    }))

};

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionFluidesPage');
  }

  SelectPerteChir(ValeurChoisie:string) {
    this.perteschir = ValeurChoisie ;
    console.log(this.perteschir);
    if (this.perteschir == "Mineures") {this.PertesChirNum = 2; }
    else if (this.perteschir == "Moderees") {this.PertesChirNum = 5 ; }
    else if (this.perteschir == "Importantes") {this.PertesChirNum = 10 ; }; 
    console.log('pertes chir =', this.PertesChirNum, 'mL/h');
    this.CompPertesChir = this.PertesChirNum*this.PoidsNum;

    this.TotalH1 = this.ApportBaseHoraire + this.CompJeuneH1 + this.CompPertesChir; 
    this.TotalH2et3 = this.ApportBaseHoraire + this.CompJeuneH1/2 + this.CompPertesChir;
    this.TotalHoraire = this.ApportBaseHoraire + (this.CompPertesChir);
  };

  MesureeHb () 
    { 
    console.log('Hb mesuree = ', this.Hbmesuree);
    this.DiffHb = this.Hbsouhaitee - this.Hbmesuree; 
    console.log('Diff Hb = ', this.DiffHb);
    if (this.Hbmesuree >= 12) {this.VolCGR = "Non (Hb > 12 g/dL)";}
    else if (this.DiffHb <= 1) {this.VolCGR = "Non (diff < 1 g)";}
    else {this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + "mL CGR";} 
    };
  
  SouhaiteeHb ()
    {
    console.log('Hb souhaitee =', this.Hbsouhaitee);
    this.DiffHb = this.Hbsouhaitee - this.Hbmesuree;
    console.log('Diff Hb = ', this.DiffHb);
    if (this.DiffHb <= 1) {this.VolCGR = "Non (diff < 1 g)";}
    else {this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + " mL CGR";} 
    };

}
