import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the PeriduralePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-peridurale',
  templateUrl: 'peridurale.html',
})
export class PeriduralePage {


  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number; 
  Allergie:number; 
  EstomacPlein:boolean; 
  EstomacOuiNon:string;
  ageLecture:number;
  Taille:number;
  sexeMF:string;

  Kemura:number;
  Busoni:number;
  BolusPIEBRopiSuf:number;
  BolusPCEARopiSuf:number;
  DoseMaxPCEARopiSuf:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeriduralePage');
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
        if (this.EstomacPlein == true) {this.EstomacOuiNon = "plein"; }
        else {this.EstomacOuiNon = "vide" ; };
    this.storage.get('Allergie').then((allergie) => {
        this.Allergie = allergie; 
    this.storage.get('sexeMF').then((sexe) => {
        this.sexeMF = sexe; 
        if(!sexe){this.sexeMF="Fille"}
    this.storage.get('Taille').then((Taille) => {
        this.Taille = Taille; 
     this.calculs();
    });
    });
    });
    });
    });
    });
    }));};


  retourHome(){
    this.navCtrl.pop();
  };
  
    calculs () {
      /*placer les calculs ici*/
      this.Kemura = Math.round(((10+this.PoidsNum)*0.8)*10)/10; 
          this.Busoni = Math.round (((2*(this.AgeNum)/12)+10)*10)/10; 

          this.BolusPIEBRopiSuf = Math.round((this.PoidsNum*0.2)*10)/10 ;
          this.BolusPCEARopiSuf = Math.round((this.PoidsNum*0.15)*10)/10;
          this.DoseMaxPCEARopiSuf = Math.round((this.PoidsNum*1.5)*10)/10; 
        };




}
