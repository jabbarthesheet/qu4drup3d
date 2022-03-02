import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TapBlockPage } from '../../pages-alr/tap-block/tap-block';
import { PeriduralePage } from '../../pages-alr/peridurale/peridurale';
import { BlocGrandsDroitsPage } from '../../pages-alr/bloc-grands-droits/bloc-grands-droits';
import { GeneralitesAlrPage } from '../../pages-alr/generalites-alr/generalites-alr';
import { BlocMaxillairePage } from '../../pages-alr/bloc-maxillaire/bloc-maxillaire';
import { BlocTronculaireAbPage } from '../../pages-alr/bloc-tronculaire-ab/bloc-tronculaire-ab';
import { BlocInterCostoBrachialPage } from '../../pages-alr/bloc-inter-costo-brachial/bloc-inter-costo-brachial';
import { BlocAxillairePage } from '../../pages-alr/bloc-axillaire/bloc-axillaire';
import { BlocSupraClaviculairePage } from '../../pages-alr/bloc-supra-claviculaire/bloc-supra-claviculaire';
import { BlocInterScaleniquePage } from '../../pages-alr/bloc-inter-scalenique/bloc-inter-scalenique';
import { BlocNerfSaphenePage } from '../../pages-alr/bloc-nerf-saphene/bloc-nerf-saphene';
import { BlocSciatiquePoplitePage } from '../../pages-alr/bloc-sciatique-poplite/bloc-sciatique-poplite';
import { BlocSciatiqueSousGlutealPage } from '../../pages-alr/bloc-sciatique-sous-gluteal/bloc-sciatique-sous-gluteal';
import { BlocNerfObturateurPage } from '../../pages-alr/bloc-nerf-obturateur/bloc-nerf-obturateur';
import { BlocCanalAdducteursPage } from '../../pages-alr/bloc-canal-adducteurs/bloc-canal-adducteurs';
import { BlocFemoralPage } from '../../pages-alr/bloc-femoral/bloc-femoral';
import { PengBlocPage } from '../../pages-alr/peng-bloc/peng-bloc';
import { CutaneLateralCuissePage } from '../../pages-alr/cutane-lateral-cuisse/cutane-lateral-cuisse';
import { BlocPudendalPage } from '../../pages-alr/bloc-pudendal/bloc-pudendal';
import { BlocPenienPage } from '../../pages-alr/bloc-penien/bloc-penien';

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

  public pagesALR : any = [
    { titre : "Bloc cutané latéral de cuisse", soustitre : "Bloc du nerf cutané latéral de cuisse" , page :CutaneLateralCuissePage },
    { titre : "Bloc des grands droits" , soustitre : "Bloc des muscles grands droits abdominaux" , page : BlocGrandsDroitsPage },
    { titre : "Bloc du canal des adducteurs", soustitre : "Bloc du nerf fémoral au canal des adducteurs" , page : BlocCanalAdducteursPage },
    { titre : "Bloc fémoral", soustitre : "Bloc du nerf fémoral au triangle de Scarpa", page : BlocFemoralPage },
    { titre : "Bloc intercostobrachial", soustitre : "Bloc des nerfs intercostobrachiaux ou cutané médial du bras et de l'avant-bras" , page : BlocInterCostoBrachialPage },
    { titre : "Bloc interscalénique", soustitre :"Bloc du plexus brachial au niveau interscalénique" , page : BlocInterScaleniquePage },
    { titre : "Bloc maxillaire" , soustitre : "Bloc de la branche maxillaire (2) du nerf trijumeau", page : BlocMaxillairePage }, 
    { titre : "Bloc obturateur", soustitre : "Bloc du nerf obturateur", page : BlocNerfObturateurPage },
    { titre : "Bloc pénien" , soustitre : "Bloc des nerfs péniens" , page : BlocPenienPage },
    { titre : "Bloc pudendal" , soustitre : "Bloc du nerf pudendal par voie transglutéale" , page : BlocPudendalPage },
    { titre : "Bloc saphène", soustitre :"Bloc du nerf saphène à la jambe" , page : BlocNerfSaphenePage },
    { titre : "Bloc sciatique poplité", soustitre : "Bloc du nerf sciatique au niveau du creux poplité" , page : BlocSciatiquePoplitePage },
    { titre : "Bloc sciatique sous glutéal", soustitre : "Bloc du nerf sciatique par l'approche sous glutéale" , page : BlocSciatiqueSousGlutealPage },
    { titre : "Bloc supra-claviculaire", soustitre : "Bloc du plexus brachial à l'étage supra-claviculaire" , page : BlocSupraClaviculairePage },
    { titre : "Blocs tronculaires", soustitre : "Bloc du nerf médian, radial ou ulnaire à l'avant-bras" , page : BlocTronculaireAbPage }, 
    { titre : "PENG Bloc", soustitre : "Bloc obturateur par voie sous pectinéale (PEricapsular Nerve Group)" , page : PengBlocPage },
    { titre : "TAP block" , soustitre : "Transversus Abdominis Plane Block", page : TapBlockPage, critere1 : false , critere2: false , produit1 : "Ropivacaïne 2 mg/mL", posologie1: 0.5, produit2 : "Ropivacaïne 3,75 mg/mL", posologie2 : 0.5 },
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
    this.dataService.orderALR();
  };

  setFilteredChirurgie() {
    this.chirurgie = this.dataService.filterALRchirurgie(this.searchTerm);
  };

  setFilteredSpecialite() {
    this.chirurgie = this.dataService.filterALRspecialite(this.searchTermSpecialite);
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

openPageAPD() {
  this.navCtrl.push( PeriduralePage )
};

openPageBlocAxillaire(){
  this.navCtrl.push( BlocAxillairePage )
};

}
