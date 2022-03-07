import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GeneralitesAlrPage } from '../../pages-alr/generalites-alr/generalites-alr';

import { Component, OnInit } from '@angular/core';
import { ServiceDataProvider } from "../../../providers/service-data/liste_medicaments";
import 'rxjs/add/operator/debounceTime';


/**
 * Generated class for the LocoRegionalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loco-regionale',
  templateUrl: 'loco-regionale.html',
})
export class LocoRegionalePage {
  
  searchBarType:boolean=false;  

  ALRView:number=1;

  AgeNum:number; 
  PoidsNum:number;
  PoidsRound:number; 
  PoidsRoundALR:number; 
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
  VolBupi5NN:any; 

  public searchTermBloc:string = ""; 
  public searchTerm: string = "";
  public searchTermSpecialite : string = "";
  public chirurgie : any ; 
  public pagesALR : any ; 

  constructor(
    
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertController: AlertController, 
    public storage : Storage,
    public dataService: ServiceDataProvider, 
    ) {
  }

  retourHome() {
    this.navCtrl.pop();
  };

  ngOnInit() {
    this.setFilteredChirurgie();
    this.dataService.orderALR();
    this.setFilteredBloc();
  };

  setFilteredChirurgie() {
    this.chirurgie = this.dataService.filterALRchirurgie(this.searchTerm);
  };
  setFilteredSpecialite() {
    this.chirurgie = this.dataService.filterALRspecialite(this.searchTermSpecialite);
  }

  setFilteredBloc() {
    this.pagesALR = this.dataService.filterBloc(this.searchTermBloc);
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocoRegionalePage');
  }

  toggleSearchBars (){
    this.searchBarType = !this.searchBarType; 
  }

  ionViewWillEnter(){
    let promiseList: Promise<any>[] = [];
    promiseList.push(
    this.storage.get('AgeNum').then((Age) => {
        this.AgeNum = Age;
        this.ageLecture = Math.round((this.AgeNum/12)*10)/10; 
    this.storage.get('PoidsNum').then((Poids) => {
        this.PoidsNum = Poids;
        this.PoidsRound = Math.round(this.PoidsNum);
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


    calculs () {
        /*placer les calculs ici*/

        this.PoidsRoundALR = Math.round(this.PoidsNum); 

        this.BolusPIEBRopiSuf = Math.round((this.PoidsNum*0.2)*10)/10 ;
        this.BolusPCEARopiSuf = Math.round((this.PoidsNum*0.15)*10)/10;
        this.DoseMaxPCEARopiSuf = Math.round((this.PoidsNum*1.5)*10)/10; 
          };

openPageALR(index) {
  this.navCtrl.push(this.pagesALR[index].page);
};

openPageGeneralites() {
  this.navCtrl.push( GeneralitesAlrPage )
};


}
