import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OptionsPage } from '../options/options';
import { AccueilPage } from '../accueil/accueil';

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


  EstomacPlein:boolean; 
  EstomacOuiNon:string;
  DureeJeune:number; 
  dureejeunelast:number=6;
  AgeNum:number;
  PoidsNum:number; 
  Allergie:string;
  ageLecture:number;
  sexeMF:string;
  Taille:number;


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

  PAShypoTA:number; 
  SoluteRemplissage:string; 
  VolRemplissage:number; 
  AdminEphedrine:number; 
  AdminAlbumine:number; 

  isShownApports:boolean=false; 
  isShownCGR:boolean=false;
  isShownAutresPSL:boolean=false;
  isShownHypoTA:boolean=false; 



  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController : AlertController) {
  }

  ToggleApports() {
    this.isShownApports = !this.isShownApports; 
    this.isShownCGR = this.isShownAutresPSL = this.isShownHypoTA = false; 
  };
  ToggleCGR() {
    this.isShownCGR = !this.isShownCGR; 
    this.isShownApports = this.isShownAutresPSL = this.isShownHypoTA = false; 
  };
  ToggleAutresPSL () {
    this.isShownAutresPSL = !this.isShownAutresPSL;
    this.isShownCGR = this.isShownApports = this.isShownHypoTA = false; 
  };
  ToggleHypoTA () {
    this.isShownHypoTA = !this.isShownHypoTA; 
    this.isShownCGR = this.isShownApports = this.isShownAutresPSL = false;
};



  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alerte',
      title: 'Minute papillon !',
      message: 'Saisissez un âge et un poids pour le patient. Pensez aussi à renseigner la durée du jeûne pré-opératoire dans les options  pour profiter du calcul des apports horaires recommandés',
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
            this.navCtrl.push(AccueilPage);
          }
        }
      ]
    });

    await alert.present();
    };


    calculs(){
          if(this.AgeNum < 15*12){this.Solute = "B26 ou NaCl 0.9%" ; }
          else {this.Solute = "RL ou NaCl 0.9%";};
  
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

          this.PAShypoTA = Math.round((((this.AgeNum/12)*2)+70)*10)/10; 
          if(this.AgeNum <= 15*12){this.SoluteRemplissage = "NaCl 0,9%";}
          else{this.SoluteRemplissage = "Ringer Lactate";}
          this.VolRemplissage = Math.round(((this.PoidsNum)*10)*10)/10;
          if(this.AgeNum <= 12){this.AdminEphedrine = Math.round((this.PoidsNum*0.3)*10)/10;}
          else if (this.AgeNum <= 36){this.AdminEphedrine = Math.round((this.PoidsNum*0.2)*10)/10;}
          else{this.AdminEphedrine = Math.round((this.PoidsNum*0.1)*10)/10;};

          this.AdminAlbumine = Math.round((this.PoidsNum*10)*10)/10;
        
        };

    
              
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
      if (!this.PoidsNum || !this.AgeNum || !this.DureeJeune) { this.presentAlert(); this.calculs()}
      else { this.calculs()
      };
      });
      });
      });
      });
      });
      });
      }));};

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

    displayOptions(): void{
      this.navCtrl.push(OptionsPage);
    };

}
