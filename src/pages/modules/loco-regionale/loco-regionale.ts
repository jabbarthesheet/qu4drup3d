import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TapBlockPage } from '../../pages-alr/tap-block/tap-block';
import { PeriduralePage } from '../../pages-alr/peridurale/peridurale';
import { BlocGrandsDroitsPage } from '../../pages-alr/bloc-grands-droits/bloc-grands-droits';
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

  public pagesALR = [
    { titre : "APD" , soustitre : "Anesthésie Péridurale" , page : PeriduralePage },
    { titre : "Grands droits" , soustitre : "Bloc des muscles grands droits abdominaux" , page : BlocGrandsDroitsPage },
    { titre : "TAP block" , soustitre : "Transversus Abdominis Plane Block", page : TapBlockPage },
  ]; 
  
  searchBarType:boolean=false;  

  AgeNum:number; 
  PoidsNum:number;
  PoidsRound:number; 
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

  VolBAXmin:number;
  VolBAXmax:number;
  VolFEMmin:number;
  VolFEMmax:number;
  VolSciatMin:number;
  VolSciatMax:number;
  VolIH:number;
  VolPenien:number;
  VolBPV:number;
  VolTAPmin:number;
  VolTAPmax:number;
  VolPudendal:number;
  VolQL:number; 

  public searchTerm: string = "";
  public searchTermSpecialite : string = "";
  public chirurgie : any ; 

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
    this.dataService.orderChirurgie();
  };

  setFilteredChirurgie() {
    this.chirurgie = this.dataService.filterChirurgie(this.searchTerm);
  };

  setFilteredSpecialite() {
    this.chirurgie = this.dataService.filterSpecialite(this.searchTermSpecialite);
  }


  displayChirurgie(index) {
    this.chirurgie[index].isShown = !this.chirurgie[index].isShown; 
  }

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
          this.Kemura = Math.round(((10+this.PoidsNum)*0.8)*10)/10; 
          this.Busoni = Math.round (((2*(this.AgeNum)/12)+10)*10)/10; 

          this.BolusPIEBRopiSuf = Math.round((this.PoidsNum*0.2)*10)/10 ;
          this.BolusPCEARopiSuf = Math.round((this.PoidsNum*0.15)*10)/10;
          this.DoseMaxPCEARopiSuf = Math.round((this.PoidsNum*1.5)*10)/10; 

          this.VolBupi5NN = (Math.round((this.PoidsNum * 0.2)*10)/10 + " mL"); 
          if (this.VolBupi5NN >= 1){this.VolBupi5NN = "NA - poids > 5 kg"}

          this.VolBAXmin = Math.round((this.PoidsNum * 0.2)*10)/10; 
          this.VolBAXmax = Math.round((this.PoidsNum * 0.5)*10)/10; 
          this.VolFEMmin = Math.round((this.PoidsNum * 0.3)*10)/10; 
          this.VolFEMmax = Math.round((this.PoidsNum * 1)*10)/10; 
          this.VolSciatMin = Math.round((this.PoidsNum * 0.3)*10)/10; 
          this.VolSciatMax = Math.round((this.PoidsNum * 1)*10)/10; 
          this.VolIH = Math.round((this.PoidsNum * 0.5)*10)/10; 
          this.VolPenien = Math.round((this.PoidsNum * 0.1)*10)/10; 
          this.VolBPV = Math.round((this.PoidsNum * 0.5)*10)/10; 
          this.VolTAPmin = Math.round((this.PoidsNum * 0.3)*10)/10; 
          this.VolTAPmax = Math.round((this.PoidsNum * 0.5)*10)/10; 
          this.VolPudendal = Math.round((this.PoidsNum * 0.2)*10)/10; 
          this.VolQL = Math.round((this.PoidsNum * 0.25)*10)/10; 
          };

openPageALR(index) {
  this.navCtrl.push(this.pagesALR[index].page);
};

openPageGeneralites() {
  this.navCtrl.push( GeneralitesAlrPage )
};

}
