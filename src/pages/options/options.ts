import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
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
  options:any = {dureejeune:"", estomacplein:"false"};
  estomaclast:boolean;
  EstomacPlein:boolean; 
  EstomacOuiNon:string;
  DureeJeune:number=6; 
  dureejeunelast:number=6;
  AgeNum:number;
  PoidsNum:number; 
  NewAllergie:string; 
  Allergie:string="Aucune"; 
  
  /* Fin de déclaration des variables */

  constructor(public app : App, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
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
          })
        });
      }))

    let promiseOptions: Promise<any>[] = [];
    promiseOptions.push(
    this.storage.get('EstomacPlein').then((esto) => {
        this.estomaclast = esto;console.log('estomac plein? qqq', this.estomaclast);
    this.storage.get('DureeJeune').then((dureejeune) => {
        this.DureeJeune = dureejeune;console.log('duree du jeune renseignee de', this.DureeJeune, 'heures.')
    }); 
      })); 

        console.log('IonViewWillEnter OptionsPage');
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
    };   
    
  addAllergie() {
    this.Allergie = this.NewAllergie;
    this.storage.set('Allergie' , this.Allergie);
    console.log (this.Allergie, 'a bien été enregistrée')
  };
    
    FnEstomacPlein() {
      this.EstomacPlein = !this.EstomacPlein; 
      console.log("l'estomac est plein ?", this.EstomacPlein);
      if(this.EstomacPlein == true) {this.EstomacOuiNon = "plein" ; }
      else{this.EstomacOuiNon = "vide"; } ;
      this.storage.set('EstomacPlein' , this.EstomacPlein);
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
