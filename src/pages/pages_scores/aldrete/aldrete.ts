import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AldretePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-aldrete',
  templateUrl: 'aldrete.html',
})
export class AldretePage {


  public AldreteForm = [
    { category: "1. Conscience",  val: 'Réveillé et orienté', isChecked: false , count: 2 },
    { category:"", val : 'Réveillable par stimulation minime', isChecked: false , count : 1},
    { category:"", val: 'Non réveillable par stimulation tactile', isChecked: false , count : 0 },
   
    { category: "2. Activité",  val: 'Mobilité normale des extrémités', isChecked: false , count: 2 },
    { category:"", val : 'Faiblesse à la mobilité', isChecked: false , count : 1},
    { category:"", val: 'Incapable de bouger les extrémités', isChecked: false , count : 0 },
   
    { category: "3. Respiration",  val: 'Inspiration profonde possible, toux, normopnée', isChecked: false , count: 2 },
    { category:"", val : 'Tachypnée mais toux préservée', isChecked: false , count : 1},
    { category:"", val: 'Dyspnée, pas de toux possible', isChecked: false , count : 0 },
    
    { category: "4. Hémodynamique",  val: 'PAS ou PAM +/- 15% des valeurs avant induction', isChecked: false , count: 2 },
    { category:"", val : 'PAS ou PAM +/- 30% des valeurs avant induction', isChecked: false , count : 1},
    { category:"", val: 'PAS ou PAM +/- 50% des valeurs avant induction', isChecked: false , count : 0 },
    
    { category: "5. Saturation",  val: 'SpO2 > 92% en air ambiant', isChecked: false , count: 2 },
    { category:"", val : 'SpO2 > 90% en air ambiant', isChecked: false , count : 1},
    { category:"", val: 'SpO2 < 90% en air ambiant', isChecked: false , count : 0 },
   
    { category: "6. Douleur",  val: 'Pas de douleur', isChecked: false , count: 2 },
    { category:"", val : 'Douleur modérée mais contrôlée par les antalgiques', isChecked: false , count : 1},
    { category:"", val: 'Douleur non contrôlée par les antalgiques', isChecked: false , count : 0 },
   
    { category: "7. NVPO",  val: 'Pas de NVPO', isChecked: false , count: 2 },
    { category:"", val : 'Un épisode de NVPO isolé', isChecked: false , count : 1},
    { category:"", val: 'NVPO persistants ', isChecked: false , count : 0 },
   
    ];

    totalAldrete:number=0; 
    CATAldrete:string="Cocher les items du score correspondant à l'état du patient.";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  retourHome(){
    this.navCtrl.pop();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad AldretePage');
  }

  countAldrete() {
    this.totalAldrete = this.AldreteForm.filter(item => item.isChecked === true).reduce((sum, current) => sum + current.count, 0);                                
    console.log(this.totalAldrete);
  
    if (this.totalAldrete <= 11){this.CATAldrete = "Réveil insuffisant pour autoriser la sortie de SSPI.";}
    else {this.CATAldrete = "Sortie de SSPI possible avec accord du MAR référent du patient.";}
  };

}
