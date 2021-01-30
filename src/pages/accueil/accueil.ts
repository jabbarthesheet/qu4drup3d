import { Component, ViewChild } from '@angular/core';
import { AlertController, App, MenuController, NavController, NavParams, PickerController, PickerOptions, PopoverController, ToastController } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Nav } from 'ionic-angular';


import { PlateauInductionPage } from '../modules/plateau-induction/plateau-induction';
import { PlateauVasPage } from '../modules/plateau-vas/plateau-vas';
import { EntretienAnesthPage } from '../modules/entretien-anesth/entretien-anesth';
import { GestionFluidesPage } from '../modules/gestion-fluides/gestion-fluides';
import { LocoRegionalePage } from '../modules/loco-regionale/loco-regionale';
import { AntalgiePage } from '../modules/antalgie/antalgie';
import { UrgencePage } from '../modules/urgence/urgence';
import { OptionsPage } from '../modules/options/options';
import { MonitoragePage } from '../modules/monitorage/monitorage';
import { CourbesPage } from '../modules/courbes/courbes';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AntibioprophylaxiePage } from '../modules/antibioprophylaxie/antibioprophylaxie';
import { ScoresPage } from '../main_pages/scores/scores';
import { ProtocolesPage } from '../main_pages/protocoles/protocoles';
import { SauvegardePatientPage } from '../modules/sauvegarde-patient/sauvegarde-patient';





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


Prenom:string="";

MorceauChoisi:string="Choisir...";
musicPlaying:boolean=false;
audio = new Audio();


public timeBegan = null;
public timeStopped:any = null;
public stoppedDuration:any = 0;
public started = null;
public running = false;
public blankTime = "00:00:00";
public time = "00:00:00";

public NewPatient : any [] = []; 
public PatientsSauvegardes: any =[];


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
    public alertController : AlertController,
  ) {}
    
  menuToggle()
  {
    this.menu.open();
    this.stopMusic(); 
  };



    /** ----------------------------  MODULE ENREGISTREMENT  ----------------------------------------------------------------- */

  enregistrer(){

    const PrenomPatientAlert = this.alertController.create({
      cssClass: 'alerte',
      title: 'Prénom ?',
      message: "Renseignez un prénom pour le patient afin d'enregistrer les données.",
      inputs: [
        {
          name: 'Prenom',
          type: 'text',
          placeholder: 'Renseigner...'
        },
      ],
      buttons: [
        {
          text: "Enregistrer",
          handler: (AlertData) =>  {
                this.Prenom = AlertData.Prenom; 
                this.NewPatient = [ 
                  { 
                  Prenom : AlertData.Prenom , 
                  Age : this.AgeNum , 
                  Poids : this.PoidsNum , 
                  Taille : this.Taille , 
                  Sexe : this.sexeMF , 
                  DureeJeune : this.DureeJeune , 
                  EstomacPlein : this.EstomacOuiNon ,
                  Allergie : this.Allergie , 
                } ] 
              if (!this.PatientsSauvegardes){this.PatientsSauvegardes = this.NewPatient}
              else {
              this.PatientsSauvegardes = this.PatientsSauvegardes.concat(this.NewPatient)}; 
              console.log (this.PatientsSauvegardes); 
              this.storage.set( 'SavedPatients' , this.PatientsSauvegardes);
          } } ,
          {
            text: "Annuler",
            handler: () =>  {
              return; 
            } } 
      ],
    });
    PrenomPatientAlert.present();
  }; 

  openSauvegarde() {
    this.navCtrl.push(SauvegardePatientPage);
  }



  /** ----------------------------  RENSEIGNER AGE ET POIDS ou RENSEIGNER TAILLE ----------------------------------------------------------------- */
  alertAgePoidsTaille()
  {
    const AgePoidsTailleAlert = this.alertController.create({
      cssClass: 'alerte',
      title: 'Données manquantes',
      message: "Renseignez l'âge, le poids et la taille de votre patient pour accéder aux données de biométrie.",
      buttons: [
        {
          text: "OK",
          handler: () =>  {
            return; 
          } } 
      ],
    });
    AgePoidsTailleAlert.present();
  };

  alertPoidsAge()
  {
    const AgePoidsAlert = this.alertController.create({
      cssClass: 'alerte',
      title: 'Données manquantes',
      message: "Renseignez l'âge et le poids de votre patient pour accéder à ce module.",
      buttons: [
        {
          text: "OK",
          handler: () =>  {
            return; 
          } } 
      ],
    });
    AgePoidsAlert.present();
  };

  /*** ----------------------------------------------------------MUSIQUE----------------------------------------------------  */ 

  async selectMusic() {
    let options: PickerOptions = {
        buttons: [
            {
              text: "Annuler",
              role: 'cancel',
            },
            {
              text:'Valider',
              handler:(value) => {
                console.log(value.morceau.value);
                this.MorceauChoisi = value.morceau.value; 
                console.log(this.MorceauChoisi);
              }
            }
          ],
          columns:[
            { name: "morceau", 
              options: [
                { text: 'Ha les crocodiles', value: 'Crocodiles' },
              /*  { text: 'Un éléphant qui se balançait', value: 'Elephants' },
                { text: 'Une souris verte', value: 'Souris verte' },*/


          ]
        },
          ]
    };

    let picker = await this.pickerController.create(options);
    picker.present();
  };

  playMusic (){
    console.log(this.MorceauChoisi);
    if (this.MorceauChoisi == "Choisir...") {
        const musicAlert = this.alertController.create({
          cssClass: 'alerte',
          title: 'Choisir une musique',
          message: 'Choisissez un morceau parmi les classiques intemporels proposés !',
          buttons: [
            {
              text: "OK",
              handler: () =>  {
                return; 
              } } 
          ],
        });
        musicAlert.present();
        }
    else if (this.MorceauChoisi == "Elephants"){ 
      this.musicPlaying = true;   
      this.audio.src = "/assets/music/elephant.mp3"; }

    else if (this.MorceauChoisi == "Crocodiles"){ 
      this.musicPlaying = true; 
      this.audio.src = "/assets/music/crocodiles.mp3"; }

    else if (this.MorceauChoisi == "Souris verte"){ 
      this.musicPlaying = true; 
      this.audio.src = "/assets/music/sourisverte.mp3"; };

      this.audio.load();
      this.audio.play();
  };

  stopMusic (){
    this.musicPlaying = false; 
    this.audio.pause(); 
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
                this.poidskilogrammes = value.kilogrammes.value + value.DixKilogrammes.value; 
                this.poidsgrammes = value.grammes.value; 
                this.PoidsNum = this.poidskilogrammes + Math.round((this.poidsgrammes/1000)*10)/10;
                console.log(this.PoidsNum);
                this.storage.set("PoidsNum", this.PoidsNum);  
                }
              }
            ],
            columns:[
              { name: "DixKilogrammes", 
                prefix: "Kg.",
                options: [
                  { text: '0', value: 0 },
                  { text: '10', value: 10 },
                  { text: '20', value: 20 },
                  { text: '30', value: 30 },
                  { text: '40', value: 40 },
                  { text: '50', value: 50 },
                  { text: '60', value: 60 },
                  { text: '70', value: 70 },
                  { text: '80', value: 80 },
                  { text: '90', value: 90 },
                ]
              },
              { name: "kilogrammes", 
                prefix: "Kg.",
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
                 
                ]
              },
              { name: "grammes", 
              prefix: "g.",
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
                { text: '0,10', value: 0.1 },
                { text: '0,20', value: 0.2 },
                { text: '0,30', value: 0.3 },
                { text: '0,40', value: 0.4 },
                { text: '0,50', value: 0.5 },
                { text: '0,60', value: 0.6 },
                { text: '0,70', value: 0.7 },
                { text: '0,80', value: 0.8 },
                { text: '0,90', value: 0.9 },
                { text: '1', value: 1 },
                { text: '1,10', value: 1.1 },
                { text: '1,20', value: 1.2 },
                { text: '1,30', value: 1.3 },
                { text: '1,40', value: 1.4 },
                { text: '1,50', value: 1.5 },
                { text: '1,60', value: 1.6 },
                { text: '1,70', value: 1.7 },
                { text: '1,80', value: 1.8 },
                { text: '1,90', value: 1.9 },
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
                ]
              },
            ]
      };
  
      let picker = await this.pickerController.create(options);
      picker.present();
    }

/* ----------------------------RECUPERATION DES DONNEES ANTERIEURES LE CAS ECHEANT---------------------------------------------------------------------------- */


    ionViewWillEnter() {
      this.storage.get('AgeNum').then((Age) => {
          this.AgeNum = Age; 
          this.ageLecture = Math.round((this.AgeNum/12)*10)/10;
          });
          
      this.storage.get('PoidsNum').then((Poids) => {
          this.PoidsNum = Poids;
          });

      this.storage.get('EstomacPlein').then((estomacplein) => {
          this.EstomacPlein = estomacplein ; 
          if (this.EstomacPlein == true){this.EstomacOuiNon = "plein"; }
          else {this.EstomacOuiNon = "vide";}
          });


      this.storage.get('DureeJeune').then((dureejeune) => {
         this.DureeJeune = dureejeune;
         }); 

      this.storage.get('Allergie').then((allergie) => {
        this.Allergie = allergie;
        });

      this.storage.get('sexeMF').then((sexe) => {
        this.sexeMF = sexe; 
        if (!this.sexeMF){this.sexeMF = "Fille"}
        else {this.sexeMF == sexe;};
        this.storage.set('sexeMF', this.sexeMF);
        });


    this.storage.get('Taille').then((Taille) => {
        this.Taille = Taille;
         });

    this.storage.get('Prenom').then((Prenom) => {
        this.Prenom = Prenom; 
    });
   
    this.storage.get('SavedPatients').then((SavedPatients) => {
        this.PatientsSauvegardes = SavedPatients});
    console.log("patient chargés = ", this.PatientsSauvegardes);
    
  }

  SetSexeFille(){
    this.sexeMF = "Fille"; 
    this.storage.set("sexeMF", this.sexeMF);
    console.log("sexe enregistré : ", this.sexeMF);
  };

  SetSexeGarcon(){
    this.sexeMF = "Garçon"; 
    this.storage.set("sexeMF", this.sexeMF);
    console.log("sexe enregistré : ", this.sexeMF);
  };

/* ----------------------------BOUTONS DE NAVIGATION---------------------------------------------------------------------------- */



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

/* ----------------------------BOUTON DAIDE---------------------------------------------------------------------------- */

    async help() {
      const alert = await this.alertController.create({
        cssClass: 'alerte',
        title: 'Utiliser QuadruPed',
        message: 'Pour utiliser QuadruPed, renseignez un âge et un poids pour le patient en appuyant sur les boutons correspondant. Naviguez ensuite entre les différents onglets pour obtenir des suggestions de posologie et de stratégies. Renseignez la taille et le sexe du patient pour utiliser les données de biométrie.',
        buttons: [
          {
            text: "J'ai compris !",
            handler: () =>  {
              return; 
            } } 
        ],
      });
      await alert.present();
      };
  
/* ----------------------------BOUTON EFFACER---------------------------------------------------------------------------- */


    effacer(){

    

        const EffacerToutAlert = this.alertController.create({
          cssClass: 'alerte',
          title: 'Tout supprimer ?',
          message: "Attention, en appuyant sur 'valider' vous supprimerez l'ensemble des données patient enregistrées.",
          buttons: [
            {
              text: "Valider",
              handler: () =>  {
                this.storage.clear(); /* ATTTENTION EFFACE TOUT TOTALEMENT TOUT */
                this.AgeNum=0;
                this.ageLecture=0;
                this.PoidsNum=0;
                this.Taille=0; 
                this.sexeMF="Fille";
                this.DureeJeune = 0; 
                this.Allergie = "";
                this.EstomacOuiNon = "vide";
                this.Prenom=""; 
             
              }
              } ,
              {
                text: "Annuler",
                handler: () =>  {
                  return; 
                } 
              }
          ],
        });
        EffacerToutAlert.present();
      }; 


};

