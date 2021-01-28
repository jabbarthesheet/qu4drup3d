import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../../accueil/accueil';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  /* déclarer ici les variables */
  options:any = {dureejeune:""};
  EstomacPlein:boolean; 
  EstomacOuiNon:string;
  DureeJeune:number=6; 
  dureejeunelast:number=6;
  AgeNum:number;
  PoidsNum:number; 
  Taille:number;
  ageLecture:number;
  sexeMF:string;
  NewAllergie:string; 
  Allergie:string="Aucune"; 
  APC:number; 
  Terme:number; 

  /* Fin de déclaration des variables */

  constructor(
    public app : App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage, 
    
    ) {
  }

  retourHome() {
    this.navCtrl.pop();
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
        if (this.EstomacPlein == true) {this.EstomacOuiNon = "plein"; this.options.estomacplein = true;}
        else {this.EstomacOuiNon = "vide" ; this.options.estomacplein = false; };
    this.storage.get('Allergie').then((allergie) => {
        this.Allergie = allergie; 
    this.storage.get('sexeMF').then((sexe) => {
        this.sexeMF = sexe; 
        if (!this.sexeMF){this.sexeMF = "Fille";};
    this.storage.get('Taille').then((Taille) => {
        this.Taille = Taille; 
    if (!this.PoidsNum || !this.AgeNum) { /*this.presentAlert(); // pas d'alerte sur cette page*/ this.calculs();}
    else { this.calculs()
    };
    });
    });
    });
    });
    });
    });
    }));};

calculs(){
    /* calculs ici (aucun pr le moment)*/
};

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
    };  

    addTerme(Terme:any){
      this.Terme = parseInt(Terme) ; 
      console.log ("le terme est de", this.Terme, " SA" );
      this.APC = this.AgeNum*4 + this.Terme; 
      console.log ("l'APC est de ", this.APC, " Semaines" );
    };
    
  addAllergie() {
    this.Allergie = this.NewAllergie;
    this.storage.set('Allergie' , this.Allergie);
    console.log (this.Allergie, 'a bien été enregistrée')
  };
    
  SaveEstomac() {
      if(this.EstomacPlein == true ) {this.EstomacOuiNon = "plein" ; }
      else {this.EstomacOuiNon = "vide"; }
      this.storage.set('EstomacPlein' , this.EstomacPlein);
      console.log("lestomac enregistré est : ", this.EstomacOuiNon , " soit en booléen" , this.EstomacPlein);
    };  

  FnDureeJeune() {
    console.log('dureejeune = ', this.DureeJeune);
    this.storage.set('DureeJeune', this.DureeJeune);
  };

  goToHome(){
    let nav = this.app.getRootNav();
    nav.setRoot( AccueilPage );
 };

  };
