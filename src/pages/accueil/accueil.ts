import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { PlateauInductionPage } from '../plateau-induction/plateau-induction';
import { PlateauVasPage } from '../plateau-vas/plateau-vas';
import { EntretienAnesthPage } from '../entretien-anesth/entretien-anesth';
import { GestionFluidesPage } from '../gestion-fluides/gestion-fluides';
import { LocoRegionalePage } from '../loco-regionale/loco-regionale';
import { AntalgiePage } from '../antalgie/antalgie';
import { UrgencePage } from '../urgence/urgence';
import { OptionsPage } from '../options/options';
import { BiometriePage } from '../biometrie/biometrie';
import { MonitoragePage } from '../monitorage/monitorage';

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  @ViewChild(Nav) nav: Nav;


  // make AccueilPage the root (or first) page
  rootPage = AccueilPage;
  pages: Array<{title: string, component: any}>;
  
isShownFooter:boolean=true; 
biometrie:any = {Kg:"", Gr:"", mois:"", ans:""};
AgeNum:number=0; 
AnsNum:number;
MoisNum:number;
AnsFill:any;
MoisFill:any;
PoidsNum:number=0;
KgNum:any;
GrNum:any; 
KgFill:any;
GrFill:any; 
EstomacPlein:boolean; 
EstomacOuiNon:string;
DureeJeune:number; 
Allergie:string; 



  constructor(
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController, 
    public app : App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,) {}
    

    ionViewDidLoad ()
    { 
      console.log('ionViewDidLoad AccueilPage');
    
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
        })) };

    ToggleFooter() {
      this.isShownFooter = !this.isShownFooter;
    };

    displayInduction(): void {
      this.navCtrl.push(PlateauInductionPage);
    };

    displayVAS(): void {
      this.navCtrl.push(PlateauVasPage);
    };

    displayEntretien(): void {
      this.navCtrl.push(EntretienAnesthPage);
    };

    displayGestionFluides(): void {
      this.navCtrl.push(GestionFluidesPage);
    };

    displayALR(): void {
      this.navCtrl.push(LocoRegionalePage);
    };

    displayPostop(): void {
      this.navCtrl.push(AntalgiePage);
    };  

    displayUrgences(): void{
      this.navCtrl.push(UrgencePage);
    };

    displayOptions(): void{
      this.navCtrl.push(OptionsPage);
    };

    displayBiometrie():void{
      this.navCtrl.push(BiometriePage); 
    };

    displayMonitorage():void{
      this.navCtrl.push(MonitoragePage);
    }

};

