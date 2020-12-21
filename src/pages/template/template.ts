  import { Component } from '@angular/core';
  import { Alert, AlertController, NavController, NavParams } from 'ionic-angular';
  import { AccueilPage } from '../accueil/accueil';
  import { Storage } from '@ionic/storage';
  import { NumericLiteral } from 'typescript';
  import { PatientPage } from '../patient/patient';
  
  @Component({
    selector: 'page-template',
    templateUrl: 'template.html',
  })
  export class TemplatePage {
  
    AgeNum:number; 
    PoidsNum:number;
    DureeJeune:number;
    EstomacPlein:boolean; 
    EstomacOuiNon:string; 
    Allergie:string;
  
  
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertController: AlertController ) {
    }

    /**STANDARD TEMPLATE PAGE & CODE FOR QUADRUPED V. au 07.12.2020 */
  
    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'alerte',
        title: 'Minute papillon !',
        message: 'Saisissez un âge et un poids pour le patient.',
        buttons: [
          {
            text: 'Nan',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: Nan');
  
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
              this.navCtrl.push(PatientPage);
            }
          }
        ]
      });
  
      await alert.present();
      };
  
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad AntalgiePage');
    };
  
    ionViewWillLoad()
    {
  
      let promiseList: Promise<any>[] = [];
      promiseList.push(
      this.storage.get('AgeForCalc').then((Age) => {
          this.AgeNum = Age;
      this.storage.get('PoidsForCalc').then((Poids) => {
          this.PoidsNum = Poids;
      this.storage.get('DureeJeune').then((dureejeune) => {
          this.DureeJeune = dureejeune ;   
      this.storage.get('EstomacPlein').then((Estomac) => {
          this.EstomacPlein = Estomac; console.log('lestomac est plein ?', this.EstomacPlein);
          if (this.EstomacPlein == true) {this.EstomacOuiNon = "plein"; }
          else {this.EstomacOuiNon = "vide" ; };
          this.storage.get('Allergie').then((allergie) => {
            this.Allergie = allergie; 
  
  
            if (!this.PoidsNum || !this.AgeNum) { this.presentAlert();}
            else { return };
  
    })
        })})
      }) 
      }));}
    }