import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceDataProvider } from "../../providers/service-data/liste_medicaments";
import 'rxjs/add/operator/debounceTime';


/**
 * Generated class for the AntibioprophylaxiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-antibioprophylaxie',
  templateUrl: 'antibioprophylaxie.html',
})
export class AntibioprophylaxiePage implements OnInit 

{
  public searchTerm: string = "";
  public searchTermSpecialite : string = "";
  public chirurgie : any ; 

AgeNum:number; 
PoidsNum:number;
DureeJeune:number; 
Allergie:number; 
EstomacPlein:boolean; 
EstomacOuiNon:string;
ageLecture:number;
sexeMF:string;
Taille:number;


  isShownPosologies:boolean;
  isShownIndications:boolean;  

  AdminAugmentin:number; 
  ReInjAugmentin:number;
  MaxAcideClavulanique:number;

  AdminCefamandole:number;
  ReInjCefamandole:number;

  AdminCefazoline:number; 
  ReInjCefazoline:number;

  AdminClindamycine:number; 
  ReInjClindamycine:number; 

  AdminGentamicine:number; 

  AdminMetronidazole:number;
  ReInjMetronidazole:number;

  AdminVancomycine:number;
  ReInjVancomycine:number;   

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

  ionViewDidLoad() {
    this.setFilteredChirurgie();
    this.dataService.orderChirurgie(); 
    console.log('chirurgies rangées par ordre alphabétique');
  }

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

  ToggleIndications() {
    this.isShownIndications = !this.isShownIndications;
  }; 

  TogglePosologies() {
    this.isShownPosologies = !this.isShownPosologies;
  };



  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alerte',
      title: 'Minute papillon !',
      message: 'Saisissez un âge et un poids pour le patient.',
      buttons: [
        {
          text: 'Plus tard.',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Nan');

          }
        }, {
          text: 'OK.',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.pop();          }
        }
      ]
    });

    await alert.present();
    };



    ionViewWillEnter(){
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
          if (!this.sexeMF){this.sexeMF = "Fille";};
      this.storage.get('Taille').then((Taille) => {
          this.Taille = Taille; 
      if (!this.PoidsNum || !this.AgeNum) { this.presentAlert(); this.calculs()}
      else { this.calculs()
      };
      });
      });
      });
      });
      });
      });
      }));};


    calculs () {

        /*placer les calculs ici*/
       

        this.AdminAugmentin = Math.round((this.PoidsNum * 50)*10)/10;
        if (this.AdminAugmentin >= 2000){this.AdminAugmentin = 2000;};
        this.ReInjAugmentin = Math.round((this.PoidsNum * 25)*10)/10;
        if (this.ReInjAugmentin >= 1000){this.ReInjAugmentin = 1000;};

        this.MaxAcideClavulanique = Math.round((this.PoidsNum * 20)*10)/10;

        this.AdminCefamandole = Math.round((this.PoidsNum * 40)*10)/10;
        if (this.AdminCefamandole >= 1500){this.AdminCefamandole = 1500;};
        this.ReInjCefamandole = Math.round((this.PoidsNum * 20)*10)/10;
        if (this.ReInjCefamandole >= 750){this.ReInjCefamandole = 750;};


        this.AdminCefazoline = Math.round((this.PoidsNum * 50)*10)/10;
        if (this.AdminCefazoline >= 2000){this.AdminCefazoline = 2000;};
        this.ReInjCefazoline = Math.round((this.PoidsNum * 25)*10)/10;
        if (this.ReInjCefazoline >= 1000){this.ReInjCefazoline = 1000;};


        this.AdminClindamycine = Math.round((this.PoidsNum * 15)*10)/10;
        if (this.AdminClindamycine >= 600){this.AdminClindamycine = 600;};
        this.ReInjClindamycine = Math.round((this.PoidsNum * 7.5)*10)/10;
        if (this.ReInjClindamycine >= 600){this.ReInjClindamycine = 600;};


        this.AdminGentamicine = Math.round((this.PoidsNum * 3)*10)/10;
        if (this.AdminGentamicine >= 160){this.AdminGentamicine = 160;};

        this.AdminMetronidazole = Math.round((this.PoidsNum * 20)*10)/10;
        if (this.AdminMetronidazole >= 1000){this.AdminMetronidazole = 1000;};
        this.ReInjMetronidazole = Math.round((this.PoidsNum * 10)*10)/10;
        if (this.ReInjMetronidazole >= 500){this.ReInjMetronidazole = 500;};


        this.AdminVancomycine = Math.round((this.PoidsNum * 15)*10)/10;
        if (this.AdminVancomycine >= 2000){this.AdminVancomycine = 2000;};
        this.ReInjVancomycine = Math.round((this.PoidsNum * 15)*10)/10;
        if (this.ReInjVancomycine >= 2000){this.ReInjVancomycine = 2000;};
  
  };

}
