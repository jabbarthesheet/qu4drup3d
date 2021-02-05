import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HtmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-htm',
  templateUrl: 'htm.html',
})
export class HtmPage {

  AgeNum:number; 
  PoidsNum:number;
  DureeJeune:number;
  EstomacPlein:boolean; 
  EstomacOuiNon:string; 
  Allergie:string;
  Taille:number;
  ageLecture:number;
  sexeMF:string;
  AdminDantroleneHTM:number; 

  HTMview:number=1; 

  public timeBegan = null;
  public timeStopped:any = null;
  public stoppedDuration:any = 0;
  public started = null;
  public running = false;
  public blankTime = "00:00:00";
  public time = "00:00:00";

  encours:string=""; 
  fin:string="";

  public AlgoHTM : any = [
   
    { 
      isShown: true, 
      isChecked: false, 
      stepnumber : 0, 
      action:"Suspicion d'AAH",
      text: "Augmentation d'EtCO2 brutale, rigidité masséter, tronc ou membres, tachycardie inexpliquée, hyperthermie inexpliquée.", 
      time: "",
      last: false,
      class: "PerCritique",
     }, 
   
    { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 1, 
      action:"Arrêt des AAH",
      text: "", 
      time: "",
      last: false,
      class: "PerCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 2, 
      action:"Hyperventiler FiO2 1",
      text: "Arrêt des halogénés, relai par anesthésique IV (propofol), ventilation à 2-3 Vt du patient", 
      time: "",
      last : false,
      class: "PerCritique",
     }, 


     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 3, 
      action:"Appeler à l'aide",
      text: "", 
      time: "",
      last : false,
      class: "PerCritique",
     }, 

     
     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 4, 
      action:"Monitorer",
      text: "Mesurer la PEtCO2 et la température centrale. Prélever un gaz du sang artériel et veineux.", 
      time: "",
      last : false,
      class: "PerCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 5, 
      action:"Dantrolène injectable",
      text: "Injecter 2,5 mg/kg en IVD le plus vite possible, après dilution dans de l'EPPI. Maintenir le patient en VAC pendant la durée d'action du dantrolène (demi-vie : 10h).", 
      time: "",
      last : false,
      class: "PerCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 6, 
      action:"Dantrolène injectable",
      text: "La régression des symptomes doit apparaître dans les minutes qui suivent l'injection. Sinon, répéter jusqu'à 10 mg/kg par dose de 1 mg/kg IVD. Ne pas associer de bloqueurs calciques.", 
      time: "",
      last : false,
      class: "PerCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 7, 
      action:"Refroidissement",
      text: "Envisager le refroidissement en cas d'hyperthermie importante. Arrêter dès que la température est inférieure à 37°C.", 
      time: "",
      last : false,
      class: "PerCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 8, 
      action:"Surveiller",
      text: "Surveiller diurèse, température centrale, kaliémie, pH, gaz du sang artériel, coagulation, CPK. Traiter par insuline-glucose les hyperkaliémies. Traiter par bicarbonate de sodium IV les acidoses métaboliques : 1 mEq/kg.", 
      time: "",
      last : false,
      class: "PerCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 9, 
      action:"Entraîner la diurèse",
      text: "Poser une sonde vésicale et provoquer une diurèse supérieure à 1 mL/kg/h par hyperhydratation. NB : chaque flacon de Dantrolène (20 mg) contient 3g de Mannitol.", 
      time: "",
      last : false,
      class: "PerCritique",
     }, 

     { 
      isShown: false,
      isChecked: false,  
      stepnumber : 10, 
      action:"Surveillance prolongée",
      text: "Surveiller 24h minimum en réanimation car la crise peut se reproduire.", 
      time: "",
      last : false,
      class: "PostCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 11, 
      action:"Surveillance clinique",
      text: "Transporter sous dantrolène en perfusion contrôlée : 1 mg/kg toutes les 4h (en fonction de l'évolution des signes d'HM).", 
      time: "",
      last : false,
      class: "PostCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 12, 
      action:"Surveillance biologique",
      text: "Monitorer les taux de CPK, potassium, myoglobine dans le sang & myoglobine dans les urines pendant au moins 48h. Un dosage des CPK normal à 12 et 24h est un argument fort en faveur d'un diagnostic différentiel.", 
      time: "",
      last : false,
      class: "PostCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 13, 
      action:"Informer",
      text: "Remettre à la famille un document informant du diagnostic et contacter le centre de référence HTM de Robert Debré pour envisager la suite des explorations.", 
      time: "",
      last : false,
      class: "PostCritique",
     }, 

     { 
      isShown: false, 
      isChecked: false, 
      stepnumber : 14, 
      action:"Anticiper",
      text: "En cas d'évolution défavorable, prélever 2x10mL de sang sur tube EDTA & tube hépariné pour préparation ADN en vue d'une recherche génétique & prévoir une biopsie musculaire en vue d'un examen microscopique.", 
      time: "",
      last : true,
      class: "PostCritique",
     }, 


  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
  }

  retourHome() {
    this.navCtrl.pop()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmPage');
  }

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
    if (!this.PoidsNum || !this.AgeNum) { this.calculs();}
    else {this.calculs()};
    });
    });
    });
    });
    });
    });
    }));};

    calculs () {
      this.AdminDantroleneHTM = Math.round((this.PoidsNum*2.5)*10)/10;
    }; 

    /** FONCTIONS DALGORITHME  */


    algoStep(index){
      this.AlgoHTM[index].time = (this.time).toString(); 
      this.AlgoHTM[index].isShown = false; 
      this.AlgoHTM[index].isChecked = true;
      if (!this.AlgoHTM[index].last) {this.AlgoHTM[index+1].isShown = true;}
      else {
        return; 
      }
    };
}
