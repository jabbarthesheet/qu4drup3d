import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the SauvegardePatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sauvegarde-patient',
  templateUrl: 'sauvegarde-patient.html',
})
export class SauvegardePatientPage {


public PatientsSauvegardes = []; 

public ExemplesPatients = [
  { Prenom : "Garçon 1 mois", Sexe : "Garçon" ,  Age : 1, Poids : 4.2, Taille : 60, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Fille 1 mois", Sexe : "Fille" ,  Age : 1, Poids : 4.1, Taille : 60, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Garçon 6 mois", Sexe : "Garçon" ,  Age : 6, Poids : 8, Taille : 68, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Fille 6 mois", Sexe : "Fille" ,  Age : 6, Poids : 7.8, Taille : 65, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Garçon 1 an", Sexe : "Garçon" ,  Age : 12, Poids : 10, Taille : 75, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Fille 1 an", Sexe : "Fille" ,  Age : 12, Poids : 9.5, Taille : 75, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Garçon 5 ans", Sexe : "Garçon" ,  Age : 60, Poids : 18, Taille : 110, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Fille 5 ans", Sexe : "Fille" ,  Age : 60, Poids : 18, Taille : 110, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Garçon 10 ans", Sexe : "Garçon" ,  Age : 120, Poids : 33, Taille : 140, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Fille 10 ans", Sexe : "Fille" ,  Age : 120, Poids : 33, Taille : 140, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Garçon 15 ans", Sexe : "Garçon" ,  Age : 180, Poids : 57, Taille : 165, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
  { Prenom : "Fille 15 ans", Sexe : "Fille" ,  Age : 180, Poids : 52, Taille : 161, EstomacPlein : "vide" , DureeJeune : 6, Allergie : "aucune connue"},
]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage : Storage,
    ) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SauvegardePatientPage');
    let promiseList: Promise<any>[] = [];
      promiseList.push(
      this.storage.get('SavedPatients').then((SavedPatients) => {
      if(!SavedPatients){return;}
      else if (this.PatientsSauvegardes == SavedPatients){return; }
      else {this.PatientsSauvegardes = this.PatientsSauvegardes.concat(SavedPatients);};
      console.log("patient chargés = ", this.PatientsSauvegardes);
    }));
    
  };

  retourHome()
   {
     this.navCtrl.pop();
   }

   loadExemplePatient(index) {
    console.log(this.ExemplesPatients[index].Taille)
    this.storage.set('sexeMF', this.ExemplesPatients[index].Sexe)
    this.storage.set('Taille', this.ExemplesPatients[index].Taille);
    this.storage.set('AgeNum', this.ExemplesPatients[index].Age);
    this.storage.set('PoidsNum', this.ExemplesPatients[index].Poids);
    this.storage.set('Allergie', this.ExemplesPatients[index].Allergie);
    this.storage.set('DureeJeune', this.ExemplesPatients[index].DureeJeune); 
    this.storage.set('EstomacPlein', this.ExemplesPatients[index].EstomacPlein); 
    this.storage.set('Prenom', this.ExemplesPatients[index].Prenom);
    this.navCtrl.pop();
  }; 


   loadMyPatient(index) {
     console.log(this.PatientsSauvegardes[index].Taille)
     this.storage.set('sexeMF', this.PatientsSauvegardes[index].Sexe)
     this.storage.set('Taille', this.PatientsSauvegardes[index].Taille);
     this.storage.set('AgeNum', this.PatientsSauvegardes[index].Age);
     this.storage.set('PoidsNum', this.PatientsSauvegardes[index].Poids);
     this.storage.set('Allergie', this.PatientsSauvegardes[index].Allergie);
     this.storage.set('DureeJeune', this.PatientsSauvegardes[index].DureeJeune); 
     this.storage.set('EstomacPlein', this.PatientsSauvegardes[index].EstomacPlein); 
     this.storage.set('Prenom', this.PatientsSauvegardes[index].Prenom);
     this.navCtrl.pop();
   }; 

   deleteMyPatient(index){
     this.PatientsSauvegardes = this.PatientsSauvegardes.filter(item => item !== this.PatientsSauvegardes[index]);
     this.storage.set('SavedPatients', this.PatientsSauvegardes); 
     console.log(this.PatientsSauvegardes); 
   }

}
