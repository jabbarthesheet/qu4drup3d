import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the BiométriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-biometrie',
  templateUrl: 'biometrie.html',
})

export class BiometriePage {
  biometrie:any = {Kg:"", Gr:"", mois:"", ans:"", semaines:""};
  AgeNum:number=0; 
  AnsNum:number;
  MoisNum:number;
  AnsFill:any;
  MoisFill:any;
  SemainesFill:any;
  PoidsNum:number=0;
  KgNum:any;
  GrNum:any; 
  KgFill:any;
  GrFill:any; 
  EstomacPlein:boolean; 
  EstomacOuiNon:string;
  DureeJeune:number; 
  Allergie:string; 
   
  constructor(public app : App, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  };

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BiometriePage');
  };


  ionViewWillEnter() {
    let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeForCalc').then((Age) => {
        this.AgeNum = Age; 
    this.storage.get('PoidsForCalc').then((Poids) => {
        this.PoidsNum = Poids; console.log(
          'Le patient a', this.AgeNum, "mois au total pour ", this.PoidsNum, " kg.");
    this.storage.get('EstomacPlein').then((estomacplein) => {
        this.EstomacPlein = estomacplein ; 
        if (this.EstomacPlein == true){this.EstomacOuiNon = "plein"; }
        else {this.EstomacOuiNon = "vide";}
    this.storage.get('DureeJeune').then((dureejeune) => {
      this.DureeJeune = dureejeune; 
    this.storage.get('Allergie').then((allergie) => {
      this.Allergie = allergie; 
    })
      })
      }); 
        });
      }));

    let promiseListFill: Promise<any>[] = [];
    
    promiseListFill.push(
      this.storage.get('SemainesFill').then((Semaines) => {
        this.SemainesFill = Semaines})); 

    promiseListFill.push(
    this.storage.get('MoisFill').then((Mois) => {
      this.MoisFill = Mois})); 
    
    promiseListFill.push(
    this.storage.get('AnsFill').then((Ans) => {
      this.AnsFill = Ans; console.log(
        'Le patient a', this.MoisFill, 'mois au total pour et', this.AnsFill, 'ans soit un total de ', this.AgeNum, 'mois.' 
        );}));


    promiseListFill.push(
      this.storage.get('GrFill').then((grammes) => {
        this.GrFill = grammes;}));
    promiseListFill.push(
      this.storage.get('KgFill').then((kilo) => {
        this.KgFill = kilo; console.log(
          'Le patient pese', this.KgFill, 'kg et', this.GrFill, 'grammes, soit un total de ', this.PoidsNum, ' kg.' 
          );}));
                  
        };  


  delete() {
    this.storage.clear(); 
    this.AgeNum = null;
    this.PoidsNum = null;
    this.DureeJeune = null; 
    this.GrFill = null; 
    this.AnsFill = null;
    this.MoisFill = null; 
    this.SemainesFill= null;
    this.EstomacOuiNon = null; 
    this.Allergie="";

    this.storage.set('KgFill', null);
    this.storage.set('GrFill', null);
    this.storage.set('AnsFill', null);
    this.storage.set('MoisFill', null);
    this.storage.set('SemainesFill', null); 

    let promiseListFill: Promise<any>[] = [];
    promiseListFill.push(
    this.storage.get('MoisFill').then((Mois) => {
      this.MoisFill = Mois})); 
    promiseListFill.push(
    this.storage.get('AnsFill').then((Ans) => {
      this.AnsFill = Ans; console.log(
        'Le patient a', this.MoisFill, 'mois au total pour et', this.AnsFill, 'ans soit un total de ', this.AgeNum, 'mois.' 
        );}));
    promiseListFill.push(
      this.storage.get('GrFill').then((grammes) => {
        this.GrFill = grammes;}));
    promiseListFill.push(
      this.storage.get('KgFill').then((kilo) => {
        this.KgFill = kilo; console.log(
          'Le patient pese', this.KgFill, 'kg et', this.GrFill, 'grammes, soit un total de ', this.PoidsNum, ' kg.' 
          );}));

  }

  logForm(){
    /* Acquisition des données saisies par l'utilisateur*/
    let KgNum:number = parseInt(this.biometrie.Kg);
    let GrNum:number = parseInt(this.biometrie.Gr); 
    if (GrNum && KgNum) {this.PoidsNum = KgNum + GrNum/1000;}
    else if (GrNum && !KgNum) {this.PoidsNum = GrNum/1000;}
    else if (!GrNum && KgNum) {this.PoidsNum = KgNum;};

    if (GrNum == 0 || GrNum == null){this.GrFill = "0";}
    else {this.GrFill = GrNum;}
    if (KgNum == 0 || KgNum == null){this.KgFill = "0";}
    else {this.KgFill = KgNum;};

    let SemainesNum:number = parseInt(this.biometrie.semaines); 
    let MoisNum:number = parseInt(this.biometrie.mois);
    let AnsNum:number = parseInt(this.biometrie.ans);
    /* les 3 sont remplis */
    if (AnsNum && MoisNum && SemainesNum) {this.AgeNum = AnsNum*12 + MoisNum + Math.round((SemainesNum/4)*10)/10;}

    /* 2 sur 3 sont remplis */

    else if (AnsNum && MoisNum && !SemainesNum ){this.AgeNum = AnsNum*12 + MoisNum;}
    else if (MoisNum && !AnsNum && SemainesNum ){this.AgeNum = MoisNum + Math.round((SemainesNum/4)*10)/10;}
    else if (SemainesNum && AnsNum && !MoisNum){this.AgeNum = AnsNum*12 + Math.round((SemainesNum/4)*10)/10;}

    /* 1 seul est rempli */
    else if (AnsNum && !MoisNum && !SemainesNum ){this.AgeNum = AnsNum*12;}
    else if (MoisNum && !AnsNum && !SemainesNum ){this.AgeNum = MoisNum;}
    else if (SemainesNum && !AnsNum && !MoisNum){this.AgeNum = Math.round((SemainesNum/4)*10)/10;}
    
    ;

    if (AnsNum == 0 || AnsNum == null){this.AnsFill = "0";}
    else {this.AnsFill = AnsNum;}
    if (MoisNum == 0 || MoisNum == null){this.MoisFill = "0";}
    else {this.MoisFill = MoisNum;};
    if (SemainesNum == 0 || SemainesNum == null){this.SemainesFill = "0";}
    else {this.SemainesFill = SemainesNum;};

    /* Vérification que le formulaire est correctement complété */

        if (!this.PoidsNum){ alert('Renseigner le poids du patient.');}
        else if(!MoisNum && !AnsNum && !SemainesNum){ alert ('Renseigner un âge pour le patient.');}
        else { console.log('Le patient a', AnsNum, "ans et", MoisNum, "mois soit ", this.AgeNum, "mois au total pour ", this.PoidsNum, " kg.");
               /* Enregistrement des données saisies */
                this.storage.set('AgeForCalc' , this.AgeNum);
                this.storage.set('PoidsForCalc' , this.PoidsNum); 
                this.storage.set('SemainesFill', this.SemainesFill);
                this.storage.set('MoisFill', this.MoisFill); 
                this.storage.set('AnsFill', this.AnsFill);
                this.storage.set('GrFill', this.GrFill);
                this.storage.set('KgFill', this.KgFill);
                this.navCtrl.setRoot( AccueilPage ); 
             }
  };

  goToHome(){
    let nav = this.app.getRootNav();
    nav.setRoot( AccueilPage );
 };
       
}
