import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
  DureeJeune:number=0; 
  dureejeunelast:number=6;
  AgeNum:number;
  PoidsNum:number; 
  Allergie:string;
  ageLecture:number;
  sexeMF:string;
  Taille:number;
  SurfaceCorporelle:number; 

  ApportBaseHoraire:number; 
  CompJeune:number;
  CompJeune1:number;
  CompJeune2:number;
  Solute:string;

  PertesRespiratoires:number;
  PertesChir:number=2;
  CompPertesChir:number;


  TotalHoraire:number; 
  TotalH1:number; 
  TotalH2et3:number; 

  Total1:number;
  Total2et3:number;

  UnitesPlaquettaires:number; 
  VolumePlaquettes:number;
  VolPFC:number; 
  ExacylChocHemorragique:number;
  FibrinogengeChocHemorragique:number;
  NovosevenChocHemorragique:number;


  MasseSanguine:number;
  MasseSanguineAge:number;
  DiffHb:number; 
  VolCGR:any;

  Hbmesuree:number=8;
  Hbsouhaitee:number=12;

  PAShypoTA:number; 
  SoluteRemplissage:string; 
  VolRemplissage:number; 
  AdminEphedrine:number; 
  PosoEphedrine:string;
  AdminAlbumine:number; 

  GestionFluidesView:number=1;
  
  CategorieAge:string; 



  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController : AlertController) {
  }

  retourHome(){
    this.navCtrl.pop();
  };

    UpdatePerteChir(){
      this.CompPertesChir = Math.round(this.PertesChir*this.PoidsNum);
      this.TotalHoraire = this.ApportBaseHoraire + this.PertesRespiratoires + this.CompPertesChir; 
      this.Total1 = this.TotalHoraire + this.CompJeune1; 
      this.Total2et3 = this.TotalHoraire + this.CompJeune2;
    }


    calculs(){

          this.SurfaceCorporelle = Math.round(((4*this.PoidsNum + 7)/ (this.PoidsNum + 90)) *10)/10;
          this.PertesRespiratoires = Math.round(((this.SurfaceCorporelle*17) *10)/10);;


          if(this.AgeNum < 15*12){this.Solute = "B26 ou NaCl 0.9%" ; }
          else {this.Solute = "RL ou NaCl 0.9%";};
  
          if (this.PoidsNum <= 10) {this.ApportBaseHoraire = Math.round(4*this.PoidsNum);} 
          else if (this.PoidsNum <= 20) {this.ApportBaseHoraire = Math.round(40 + (this.PoidsNum - 10)*2);}
          else if (this.PoidsNum > 20) {this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));};
  
          this.CompJeune = Math.round(this.ApportBaseHoraire * this.DureeJeune); 
          this.CompJeune1 = Math.round(this.CompJeune/2);
          this.CompJeune2 = Math.round((this.CompJeune - this.CompJeune1)/2) ;
  
          this.CompPertesChir = Math.round(this.PertesChir*this.PoidsNum);

          this.TotalHoraire = this.ApportBaseHoraire + this.PertesRespiratoires + this.CompPertesChir; 

          this.Total1 = this.TotalHoraire + this.CompJeune1; 
          this.Total2et3 = this.TotalHoraire + this.CompJeune2;
  
          this.UnitesPlaquettaires = Math.round(this.PoidsNum/10); 
          this.VolumePlaquettes = Math.round(this.PoidsNum * 20);
  
          this.VolPFC = Math.round(this.PoidsNum*20); 
  
          this.VolCGR = Math.round(this.PoidsNum * 16).toString() + " mL" ; 
          this.DiffHb = 4; 
          if(this.AgeNum <= 3){this.MasseSanguineAge = 80; }
          else if (this.AgeNum <= 12){this.MasseSanguineAge = 75; }
          else {this.MasseSanguineAge = 70;};
          this.MasseSanguine = Math.round(this.PoidsNum * this.MasseSanguineAge); 

          this.ExacylChocHemorragique = Math.round((this.PoidsNum*20)*10)/10;
          this.FibrinogengeChocHemorragique = Math.round((this.PoidsNum*20)*10)/10;
          this.NovosevenChocHemorragique = Math.round((this.PoidsNum*90)*10)/10;

          this.PAShypoTA = Math.round((((this.AgeNum/12)*2)+70)*10)/10; 
          if(this.AgeNum <= 15*12){this.SoluteRemplissage = "NaCl 0,9%";}
          else{this.SoluteRemplissage = "Ringer Lactate";}
          this.VolRemplissage = Math.round(((this.PoidsNum)*10)*10)/10;
          if(this.AgeNum <= 12){this.PosoEphedrine = "200 µg/kg" ; this.AdminEphedrine = Math.round((this.PoidsNum*0.3)*10)/10;}
          else if (this.AgeNum <= 36){this.PosoEphedrine = "200 µg/kg" ; this.AdminEphedrine = Math.round((this.PoidsNum*0.2)*10)/10;}
          else{this.PosoEphedrine = "100 µg/kg" ;this.AdminEphedrine = Math.round((this.PoidsNum*0.1)*10)/10;};

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
      if (!this.PoidsNum || !this.AgeNum || !this.DureeJeune) { /*this.presentAlert();*/ this.calculs()}
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



  MesureeHb () 
    { 
    console.log('Hb mesuree = ', this.Hbmesuree);
    this.DiffHb = this.Hbsouhaitee - this.Hbmesuree; 
    console.log('Diff Hb = ', this.DiffHb);
    if (this.Hbmesuree >= 12) {this.VolCGR = "Non (Hb > 12 g/dL)";}
    else if (this.DiffHb <= 1) {this.VolCGR = "Non (diff < 1 g)";}
    else {this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + " mL";} 
    };
  
  SouhaiteeHb ()
    {
    console.log('Hb souhaitee =', this.Hbsouhaitee);
    this.DiffHb = this.Hbsouhaitee - this.Hbmesuree;
    console.log('Diff Hb = ', this.DiffHb);
    if (this.DiffHb <= 1) {this.VolCGR = "Non (diff < 1 g)";}
    else {this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + " mL";} 
    };

    FnDureeJeune() {
      console.log('dureejeune = ', this.DureeJeune);
      this.storage.set('DureeJeune', this.DureeJeune);
      if (this.PoidsNum <= 10) {this.ApportBaseHoraire = Math.round(4*this.PoidsNum);} 
          else if (this.PoidsNum <= 20) {this.ApportBaseHoraire = Math.round(40 + (this.PoidsNum - 10)*2);}
          else if (this.PoidsNum > 20) {this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));};
  
          this.CompJeune = Math.round(this.ApportBaseHoraire * this.DureeJeune); 
          this.CompJeune1 = Math.round(this.CompJeune/2);
          this.CompJeune2 = Math.round((this.CompJeune - this.CompJeune1)/2) ;
    };
}
