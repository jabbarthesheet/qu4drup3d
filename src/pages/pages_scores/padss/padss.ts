import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-padss',
  templateUrl: 'padss.html',
})
export class PadssPage {

  public PADSSForm =  
  [
    { category: "1. FC & PAS",  val: 'Variation < 20% par rapport au pré-opératoire', isChecked: false , count: 2 , isItem : 1},
    { category:"", val : 'Variation entre 20 et 40% par rapport au pré-opératoire', isChecked: false , count : 1 , isItem : 1},
    { category:"", val: 'Variation > 40% par rapport au pré-opératoire', isChecked: false , count : 0 , isItem : 1 },
   
    { category: "2. Marche & activité",  val: 'Marche stable, sans étourdissement', isChecked: false , count: 2 , isItem : 1 },
    { category:"", val : 'Marche avec aide, activité réduite', isChecked: false , count : 1  , isItem : 1},
    { category:"", val: 'Marche impossible, hypotonie', isChecked: false , count : 0 ,  isItem : 1},
   
    { category: "3. NVPO",  val: 'Pas de NVPO', isChecked: false , count: 2  , isItem : 1},
    { category:"", val : 'Un épisode de NVPO', isChecked: false , count : 1  , isItem : 1},
    { category:"", val: 'NVPO persistants', isChecked: false , count : 0 , isItem : 1 },
    
    { category: "4. Douleur",  val: 'Bien contrôlée', isChecked: false , count: 2 , isItem : 1 },
    { category:"", val : 'Mal contrôlée', isChecked: false , count : 1 , isItem : 1},
    
    { category: "5. Saignement",  val: 'Minime ou nul (pas de réfection de pansement)', isChecked: false , count: 2, isItem : 1 },
    { category:"", val : 'Significatif (réfection de pansement)', isChecked: false , count : 1, isItem: 1 },
  
  ];

  totalPADSS:number;
  CATPADSS:string="Cocher les items du score correspondant à l'état du patient.";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  retourHome(){
    this.navCtrl.pop();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadssPage');
  }

  countPADSS() {
    this.totalPADSS = this.PADSSForm.filter(item => item.isChecked === true).reduce((sum, current) => sum + current.count, 0);                                
    console.log("PADSS = " , this.totalPADSS);
  
    let IsZeroPADSS = this.PADSSForm.filter(item => item.count == 0 && item.isChecked === true).reduce((sum, current) => sum + current.isItem, 0);  
    console.log("nombre d'items cotant 0 cochés = ", IsZeroPADSS);
  
    if (this.totalPADSS <= 8 && IsZeroPADSS ==0 ){this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (score total insuffisant).";}
    else if (this.totalPADSS <= 8 && IsZeroPADSS !=0 ){this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (un item coté 0, score total insuffisant).";}
    else if (this.totalPADSS > 8 && IsZeroPADSS !=0 ){this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (un item coté 0).";}
    else {this.CATPADSS = "Sortie ambulatoire possible avec accord du MAR référent du patient.";};
  };

}
