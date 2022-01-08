import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { QuestionnaireHemostasePage } from '../questionnaire-hemostase/questionnaire-hemostase';

/**
 * Generated class for the BilanPreOpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bilan-pre-op',
  templateUrl: 'bilan-pre-op.html',
})
export class BilanPreOpPage {

  chirRisqueEleve : string = "Inconnue" ;
  MarcheAcquise : string = "Inconnue" ; 
  DiatheseHemo : string = "Inconnue" ; 
  FdRCarence : string = "Inconnue"
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrhumePage');
  }

  retourHome(){
    this.navCtrl.pop();
  };


  chirRisqueOui(){
    console.log("Chirurgie à risque hémoirragique élevé");
    this.chirRisqueEleve = "Oui" ; 
    this.DiatheseHemo = "Inconnue";
    this.FdRCarence = "Inconnue";
    this.MarcheAcquise = "Inconnue"; 
  } ; 

  chirRisqueNon(){
    console.log("Chirurgie à faible risque hémor");
    this.chirRisqueEleve = "Non" ; 
  } ;

  MarcheOui(){
    console.log("Marche acquise");
    this.MarcheAcquise ="Oui";
    this.DiatheseHemo = "Inconnue";
    this.FdRCarence = "Inconnue";
    } ; 

  MarcheNon(){
    console.log("Marche non acquise");
    this.MarcheAcquise ="Non";
  } ; 

  DiatheseHemoOui(){
    console.log("Diathese hémorragique positive ou doute");
    this.DiatheseHemo = "Oui"; 
    this.FdRCarence = "Inconnue";
  }

  DiatheseHemoNon(){
    console.log("Diathèse hémorragique négative et absence de doute"); 
    this.DiatheseHemo = "Non"; 
  }

  FdRoui(){
    console.log("Présence d'un facteur de risque de carence");
    this.FdRCarence = "Oui";
  };

  FdRnon() {
    console.log("Absence de facteur de risque de carence");
    this.FdRCarence = "Non"; 
  };

  afficherQuestionnaire(){
    this.navCtrl.push( QuestionnaireHemostasePage );
  }

}