import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnrhumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-enrhume',
  templateUrl: 'enrhume.html',
})

export class EnrhumePage {

  chirurgieUrgente : string = "Inconnue" ;
  IVAIouFievre : string = "Inconnue" ; 
  IVASsevere : string = "Inconnue" ; 
  FdRComplication : string = "Inconnue"
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrhumePage');
  }

  retourHome(){
    this.navCtrl.pop();
  };


  urgenceOui(){
    console.log("Chirurgie urgente");
    this.chirurgieUrgente = "Oui" ; 
    this.IVASsevere = "Inconnue";
    this.FdRComplication = "Inconnue";
    this.IVAIouFievre = "Inconnue"; 
  } ; 

  urgenceNon(){
    console.log("Chirurgie non urgente");
    this.chirurgieUrgente = "Non" ; 
  } ;

  IVAIoui(){
    console.log("Présence d'infection des VA inférieures");
    this.IVAIouFievre ="Oui";
    this.IVASsevere = "Inconnue";
    this.FdRComplication = "Inconnue";
    } ; 

  IVAInon(){
    console.log("Présence d'infection des VA inférieures");
    this.IVAIouFievre ="Non";
  } ; 

  IVASsevereoui(){
    console.log("Présence d'infection sévère des VAS");
    this.IVASsevere = "Oui"; 
    this.FdRComplication = "Inconnue";
  }

  IVASseverenon(){
    console.log("Absence d'infection sévère des VAS"); 
    this.IVASsevere = "Non"; 
  }

  FdRoui(){
    console.log("Présence d'un facteur de risque");
    this.FdRComplication = "Oui";
  };

  FdRnon() {
    console.log("Absence de facteur de risque");
    this.FdRComplication = "Non"; 
  }

}
