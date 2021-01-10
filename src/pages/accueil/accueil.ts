import { Component, ViewChild, NgModule } from '@angular/core';
import { App, MenuController, NavController, NavParams, PickerController, PickerOptions, PopoverController, ToastController } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Nav } from 'ionic-angular';


import { PlateauInductionPage } from '../plateau-induction/plateau-induction';
import { PlateauVasPage } from '../plateau-vas/plateau-vas';
import { EntretienAnesthPage } from '../entretien-anesth/entretien-anesth';
import { GestionFluidesPage } from '../gestion-fluides/gestion-fluides';
import { LocoRegionalePage } from '../loco-regionale/loco-regionale';
import { AntalgiePage } from '../antalgie/antalgie';
import { UrgencePage } from '../urgence/urgence';
import { OptionsPage } from '../options/options';
import { MonitoragePage } from '../monitorage/monitorage';
import { CourbesPage } from '../courbes/courbes';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AntibioprophylaxiePage } from '../antibioprophylaxie/antibioprophylaxie';
import { ScoresPage } from '../scores/scores';
import { ProtocolesPage } from '../protocoles/protocoles';




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
PoidsNum:number=0;
EstomacPlein:boolean; 
EstomacOuiNon:string;
DureeJeune:number; 
Allergie:string; 
ageannees:number=0;
agemois:number=0;
agesemaines:number=0;
ageLecture:number=0; 
poidskilogrammes:number=0;
poidsgrammes:number=0; 
sexeMF:string="Fille"; 
Taille:number; 
TailleMetre:number; 
TailleCentimetre:number;

public timeBegan = null;
public timeStopped:any = null;
public stoppedDuration:any = 0;
public started = null;
public running = false;
public blankTime = "00:00:00";
public time = "00:00:00";


  constructor(
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController, 
    public app : App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public InAppBrowser: InAppBrowser,
    public pickerController: PickerController,
    public ToastController: ToastController, 
    public popoverController: PopoverController,
    public menu: MenuController,
  ) {}
    
  menuToggle()
  {
    this.menu.open();
  };


  /*** ----------------------------------------------------------TIMER----------------------------------------------------  */ 

start() {
  if(this.running) return;
  if (this.timeBegan === null) {
      this.reset();
      this.timeBegan = new Date();
  }
  if (this.timeStopped !== null) {
    let newStoppedDuration:any = (+new Date() - this.timeStopped)
    this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
  }
  this.started = setInterval(this.clockRunning.bind(this), 10);
    this.running = true;
  }
  stop() {
    this.running = false;
    this.timeStopped = new Date();
    clearInterval(this.started);
 }
  reset() {
    this.running = false;
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.time = this.blankTime;
  }
  zeroPrefix(num, digit) {
    let zero = '';
    for(let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }
  
  clockRunning(){
    let currentTime:any = new Date()
    let timeElapsed:any = new Date(currentTime - this.timeBegan - this.stoppedDuration)
    let hour = timeElapsed.getUTCHours()
    let min = timeElapsed.getUTCMinutes()
    let sec = timeElapsed.getUTCSeconds()
  this.time =
    this.zeroPrefix(hour, 2) + ":" +
    this.zeroPrefix(min, 2) + ":" +
    this.zeroPrefix(sec, 2) ;
  };


/* --------------------------------------------------------- END TIMER ------------------------------------------ */

    ionViewDidLoad ()
    { 
      this.toastCGU()
    };

   async toastCGU() {
      const toast = await this.ToastController.create({
        message: "En utilisant l'application, vous acceptez les conditions générales d'utilisation.",
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: "OK.",
        duration:5000, 
        });
      toast.present();
    };

    async showPickerAge() {
      let options: PickerOptions = {
          buttons: [
              {
                text: "Annuler",
                role: 'cancel',
              },
              {
                text:'Valider',
                handler:(value:any) => {
                  console.log(value.annees);
                  this.ageannees = value.annees.value; 
                  this.agemois = value.mois.value; 
                  this.agesemaines = value.semaines.value; 
                  console.log("âge de ",this.ageannees, " années, ", this.agemois, " mois, ", this.agesemaines, " semaines.");
                  this.AgeNum = this.ageannees*12 + this.agemois + Math.round((this.agesemaines/4)*10)/10 ; 
                  console.log("âge total en mois : ", this.AgeNum);
                  this.ageLecture = Math.round((this.AgeNum/12)*10)/10; 
                  this.storage.set("AgeNum", this.AgeNum); 
                  this.storage.set("ageLecture", this.ageLecture);
                }
              }
            ],
            columns:[
              { name: "annees", 
                prefix: "Ans",
                options: [
                  { text: '0', value: 0 },
                  { text: '1', value: 1 },
                  { text: '2', value: 2 },
                  { text: '3', value: 3 },
                  { text: '4', value: 4 },
                  { text: '5', value: 5 },
                  { text: '6', value: 6 },
                  { text: '7', value: 7 },
                  { text: '8', value: 8 },
                  { text: '9', value: 9 },
                  { text: '10', value: 10 },
                  { text: '11', value: 11 },
                  { text: '12', value: 12 },
                  { text: '13', value: 13 },
                  { text: '14', value: 14 },
                  { text: '15', value: 15 },
                  { text: '16', value: 16 },
                  { text: '17', value: 17 },
                  { text: '18', value: 18 },
                ]
              },
              { name: "mois", 
              prefix: "Mois",
              options: [
                { text: '0', value: 0 },
                { text: '1', value: 1 },
                { text: '2', value: 2 },
                { text: '3', value: 3 },
                { text: '4', value: 4 },
                { text: '5', value: 5 },
                { text: '6', value: 6 },
                { text: '7', value: 7 },
                { text: '8', value: 8 },
                { text: '9', value: 9 },
                { text: '10', value: 10 },
                { text: '11', value: 11 },
                { text: '12', value: 12 },
                { text: '13', value: 13 },
                { text: '14', value: 14 },
                { text: '15', value: 15 },
                { text: '16', value: 16 },
                { text: '17', value: 17 },
                { text: '18', value: 18 },
              ]
            },
            { name: "semaines", 
            prefix: "Sem.",
            options: [
              { text: '0', value: 0 },
              { text: '1', value: 1 },
              { text: '2', value: 2 },
              { text: '3', value: 3 },
              { text: '4', value: 4 },
              { text: '5', value: 5 },
              { text: '6', value: 6 },
              { text: '7', value: 7 },
              { text: '8', value: 8 },
              { text: '9', value: 9 },
              { text: '10', value: 10 },
              { text: '11', value: 11 },
              { text: '12', value: 12 },
              { text: '13', value: 13 },
              { text: '14', value: 14 },
              { text: '15', value: 15 },
              { text: '16', value: 16 },
              { text: '17', value: 17 },
              { text: '18', value: 18 },
            ]
          },
            ]
      };
  
      let picker = await this.pickerController.create(options);
      picker.present();
    }
  
  
    async showPickerPoids() {
      let options: PickerOptions = {
          buttons: [
              {
                text: "Annuler",
                role: 'cancel'
              },
              {
                text:'Valider',
                handler:(value:any) => {
                this.poidskilogrammes = value.kilogrammes.value; 
                this.poidsgrammes = value.grammes.value; 
                this.PoidsNum = this.poidskilogrammes + Math.round((this.poidsgrammes/1000)*10)/10;
                console.log(this.PoidsNum);
                this.storage.set("PoidsNum", this.PoidsNum);  
                }
              }
            ],
            columns:[
              { name: "kilogrammes", 
                prefix: "Kg",
                options: [
                  { text: '0', value: 0 },
                  { text: '1', value: 1 },
                  { text: '2', value: 2 },
                  { text: '3', value: 3 },
                  { text: '4', value: 4 },
                  { text: '5', value: 5 },
                  { text: '6', value: 6 },
                  { text: '7', value: 7 },
                  { text: '8', value: 8 },
                  { text: '9', value: 9 },
                  { text: '10', value: 10 },
                  { text: '11', value: 11 },
                  { text: '12', value: 12 },
                  { text: '13', value: 13 },
                  { text: '14', value: 14 },
                  { text: '15', value: 15 },
                  { text: '16', value: 16 },
                  { text: '17', value: 17 },
                  { text: '18', value: 18 },
                  { text: '19', value: 19 },
                  { text: '20', value: 20 },
                  { text: '21', value: 21 },
                  { text: '22', value: 22 },
                  { text: '23', value: 23 },
                  { text: '24', value: 24 },
                  { text: '25', value: 25 },
                  { text: '26', value: 26 },
                  { text: '27', value: 27 },
                  { text: '28', value: 28 },
                  { text: '29', value: 29 },
                  { text: '30', value: 30 },
                  { text: '31', value: 31 },
                  { text: '32', value: 32 },
                  { text: '33', value: 33 },
                  { text: '34', value: 34 },
                  { text: '35', value: 35 },
                  { text: '36', value: 36 },
                  { text: '37', value: 37 },
                  { text: '38', value: 38 },
                  { text: '39', value: 39 },
                  { text: '40', value: 40 },
                  { text: '41', value: 41 },
                  { text: '42', value: 42 },
                  { text: '43', value: 43 },
                  { text: '44', value: 44 },
                  { text: '45', value: 45 },
                  { text: '46', value: 46 },
                  { text: '47', value: 47 },
                  { text: '48', value: 48 },
                  { text: '49', value: 49 },
                  { text: '50', value: 50 },
                  { text: '51', value: 51 },
                  { text: '52', value: 52 },
                  { text: '53', value: 53 },
                  { text: '54', value: 54 },
                  { text: '55', value: 55 },
                  { text: '56', value: 56 },
                  { text: '57', value: 57 },
                  { text: '58', value: 58 },
                  { text: '59', value: 59 },
                  { text: '60', value: 60 },
                  { text: '61', value: 61 },
                  { text: '62', value: 62 },
                  { text: '63', value: 63 },
                  { text: '64', value: 64 },
                  { text: '65', value: 65 },
                  { text: '66', value: 66 },
                  { text: '67', value: 67 },
                  { text: '68', value: 68 },
                  { text: '69', value: 69 },
                  { text: '70', value: 70 },
                  { text: '71', value: 71 },
                  { text: '72', value: 72 },
                  { text: '73', value: 73 },
                  { text: '74', value: 74 },
                  { text: '75', value: 75 },
                  { text: '76', value: 76 },
                  { text: '77', value: 77 },
                  { text: '78', value: 78 },
                  { text: '79', value: 79 },
                  { text: '80', value: 80 },
                  { text: '81', value: 81 },
                  { text: '82', value: 82 },
                  { text: '83', value: 83 },
                  { text: '84', value: 84 },
                  { text: '85', value: 85 },
                  { text: '86', value: 86 },
                  { text: '87', value: 87 },
                  { text: '88', value: 88 },
                  { text: '89', value: 89 },
                  { text: '90', value: 90 },
                  { text: '91', value: 91 },
                  { text: '92', value: 92 },
                  { text: '93', value: 93 },
                  { text: '94', value: 94 },
                  { text: '95', value: 95 },
                  { text: '96', value: 96 },
                  { text: '97', value: 97 },
                  { text: '98', value: 98 },
                  { text: '99', value: 99 },
                  { text: '100', value: 100 },
                  
  
                ]
              },
              { name: "grammes", 
              prefix: "Grammes",
              options: [
                { text: '0', value: 0 },
                { text: '100', value: 100 },
                { text: '200', value: 200 },
                { text: '300', value: 300 },
                { text: '400', value: 400 },
                { text: '500', value: 500 },
                { text: '600', value: 600 },
                { text: '700', value: 700 },
                { text: '800', value: 800 },
                { text: '900', value: 900 },
              ]
            },
            ]
      };
  
      let picker = await this.pickerController.create(options);
      picker.present();
    }

    async showPickerTaille() {
      let options: PickerOptions = {
          buttons: [
              {
                text: "Annuler",
                role: 'cancel'
              },
              {
                text:'Valider',
                handler:(value:any) => {
                this.TailleMetre = value.metre.value; 
                this.TailleCentimetre = value.centimetre.value; 
                this.Taille = Math.floor(this.TailleMetre*100) + Math.floor(this.TailleCentimetre);
                console.log(this.PoidsNum);
                this.storage.set("Taille", this.Taille);  
                }
              }
            ],
            columns:[
              { name: "metre", 
              prefix: "m.",
              options: [
                { text: '0', value: 0 },
                { text: '1', value: 1 },
                { text: '2', value: 2 },
              ]
            },
              { name: "centimetre", 
                prefix: "Cm.",
                options: [
                  { text: '0', value: 0 },
                  { text: '1', value: 1 },
                  { text: '2', value: 2 },
                  { text: '3', value: 3 },
                  { text: '4', value: 4 },
                  { text: '5', value: 5 },
                  { text: '6', value: 6 },
                  { text: '7', value: 7 },
                  { text: '8', value: 8 },
                  { text: '9', value: 9 },
                  { text: '10', value: 10 },
                  { text: '11', value: 11 },
                  { text: '12', value: 12 },
                  { text: '13', value: 13 },
                  { text: '14', value: 14 },
                  { text: '15', value: 15 },
                  { text: '16', value: 16 },
                  { text: '17', value: 17 },
                  { text: '18', value: 18 },
                  { text: '19', value: 19 },
                  { text: '20', value: 20 },
                  { text: '21', value: 21 },
                  { text: '22', value: 22 },
                  { text: '23', value: 23 },
                  { text: '24', value: 24 },
                  { text: '25', value: 25 },
                  { text: '26', value: 26 },
                  { text: '27', value: 27 },
                  { text: '28', value: 28 },
                  { text: '29', value: 29 },
                  { text: '30', value: 30 },
                  { text: '31', value: 31 },
                  { text: '32', value: 32 },
                  { text: '33', value: 33 },
                  { text: '34', value: 34 },
                  { text: '35', value: 35 },
                  { text: '36', value: 36 },
                  { text: '37', value: 37 },
                  { text: '38', value: 38 },
                  { text: '39', value: 39 },
                  { text: '40', value: 40 },
                  { text: '41', value: 41 },
                  { text: '42', value: 42 },
                  { text: '43', value: 43 },
                  { text: '44', value: 44 },
                  { text: '45', value: 45 },
                  { text: '46', value: 46 },
                  { text: '47', value: 47 },
                  { text: '48', value: 48 },
                  { text: '49', value: 49 },
                  { text: '50', value: 50 },
                  { text: '51', value: 51 },
                  { text: '52', value: 52 },
                  { text: '53', value: 53 },
                  { text: '54', value: 54 },
                  { text: '55', value: 55 },
                  { text: '56', value: 56 },
                  { text: '57', value: 57 },
                  { text: '58', value: 58 },
                  { text: '59', value: 59 },
                  { text: '60', value: 60 },
                  { text: '61', value: 61 },
                  { text: '62', value: 62 },
                  { text: '63', value: 63 },
                  { text: '64', value: 64 },
                  { text: '65', value: 65 },
                  { text: '66', value: 66 },
                  { text: '67', value: 67 },
                  { text: '68', value: 68 },
                  { text: '69', value: 69 },
                  { text: '70', value: 70 },
                  { text: '71', value: 71 },
                  { text: '72', value: 72 },
                  { text: '73', value: 73 },
                  { text: '74', value: 74 },
                  { text: '75', value: 75 },
                  { text: '76', value: 76 },
                  { text: '77', value: 77 },
                  { text: '78', value: 78 },
                  { text: '79', value: 79 },
                  { text: '80', value: 80 },
                  { text: '81', value: 81 },
                  { text: '82', value: 82 },
                  { text: '83', value: 83 },
                  { text: '84', value: 84 },
                  { text: '85', value: 85 },
                  { text: '86', value: 86 },
                  { text: '87', value: 87 },
                  { text: '88', value: 88 },
                  { text: '89', value: 89 },
                  { text: '90', value: 90 },
                  { text: '91', value: 91 },
                  { text: '92', value: 92 },
                  { text: '93', value: 93 },
                  { text: '94', value: 94 },
                  { text: '95', value: 95 },
                  { text: '96', value: 96 },
                  { text: '97', value: 97 },
                  { text: '98', value: 98 },
                  { text: '99', value: 99 },
                  { text: '100', value: 100 },
                  
  
                ]
              },
            ]
      };
  
      let picker = await this.pickerController.create(options);
      picker.present();
    }

    ionViewWillEnter() {
      let promiseList: Promise<any>[] = [];
      promiseList.push(
      this.storage.get('AgeNum').then((Age) => {
          this.AgeNum = Age; 
          this.ageLecture = Math.round((this.AgeNum/12)*10)/10; 
      this.storage.get('PoidsNum').then((Poids) => {
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
      this.storage.get('sexeMF').then((sexe) => {
        this.sexeMF = sexe; 
        if (!this.sexeMF){this.sexeMF = "Fille"}
        else {this.sexeMF == sexe;};
        this.storage.set('sexeMF', this.sexeMF);

      });

      });
        });
        }); 
          });
        })) };

  SetSexe(){
    this.storage.set("sexeMF", this.sexeMF);
    console.log("sexe enregistré : ", this.sexeMF);
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

    displayMonitorage():void{
      this.navCtrl.push(MonitoragePage);
    };

    displayCourbes():void{
      this.navCtrl.push(CourbesPage);
    };

    displayATBprophylaxie():void {
      this.navCtrl.push(AntibioprophylaxiePage);
    };

    displayScores():void {
      this.navCtrl.push(ScoresPage);
    };

    displayProtocoles():void {
      this.navCtrl.push(ProtocolesPage);
    }

    openDARwebsite() {
      this.InAppBrowser.create("http://www.dar-robertdebre.com", '_system');
    };


      
    async help() {
      const toastHelp = await this.ToastController.create({
        message: "Pour utiliser QuadruPed, renseignez un âge et un poids pour le patient en cliquant sur les boutons. Cliquez ensuite sur les différents boutons pour obtenir des suggestions de posologie et de stratégies. Renseignez la taille et le sexe du patient pour utiliser les données de biométrie.",
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: "OK.",
        duration:5000, 
        });
      toastHelp.present();
    };


    effacer(){
      this.storage.clear();
      this.AgeNum=0;
      this.ageLecture=0;
      this.PoidsNum=0;
      this.Taille=0; 
      this.sexeMF="Fille";
      this.DureeJeune = 0; 
      this.Allergie = "";
      this.EstomacOuiNon = "vide";
    }

};

