import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnticoagscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-anticoagscore',
  templateUrl: 'anticoagscore.html',
})
export class AnticoagscorePage {

  public Anticoagform1 = 
  [ 
    {  val: 'ASA 3', isChecked: false , count: 1 },
    {  val : 'BMI > 30', isChecked: false , count : 1},
    {  val: 'KT veineux central', isChecked: false , count : 1 },
    {  val: 'Pathologie tumorale active', isChecked: false , count : 1 },
    {  val: 'Insuffisance rénale', isChecked: false, count : 1 },
    {  val: 'Déshydratation', isChecked: false , count : 1},
    {  val: 'Grossesse ou accouchement < 6 semaines', isChecked: false , count : 1},
    {  val: 'Contraception orale', isChecked: false , count : 1},
    {  val: 'Cardiopathie congénitale', isChecked: false , count : 1},
    {  val: 'Maladie métabolique ou inflammatoire', isChecked: false , count : 1},
    {  val: 'Thrombophilie connue', isChecked: false , count : 1},
];

public Anticoagform2 = 
[ 
    {  val: 'Durée anesth + chir > 4h', isChecked: false , count: 1 },
    {  val : 'Chirurgie de hanche', isChecked: false , count : 1},
    {  val: 'Arthrodèse vertébrale', isChecked: false , count : 1 },
    {  val: 'Âge supérieur à 13 ans', isChecked: false , count : 1 },
    {  val: 'Chirurgie membre inférieur avec ostéotomie ou plâtre', isChecked: false, count : 1 },
    {  val: 'Chirurgie de FAV', isChecked: false , count : 1},
];

public Anticoagform3 = 
[ 
    {  val: 'Alitement > 3j', isChecked: false , count: 1 },
    {  val: 'Sepsis sévère', isChecked: false , count : 1},
    {  val: 'Traumatisme sévère ISS>9', isChecked: false , count : 1 },
    {  val: 'Traumatisme médullaire et paraplégie', isChecked: false , count : 1 },
    {  val: 'Brûlures sévères', isChecked: false, count : 1 },
    {  val: 'Intubation et ventilation mécanique', isChecked: false , count : 1},
];

Anticoag1:number;
Anticoag2:number;
Anticoag3:number;  
prophylaxieAnticoag:string="Hydratation adéquate, mobilisation précoce, ablation CVC le plus tôt possible (le cas échéant)."; 
MesuresSupplementairesAnticoag:string; 
AnticoagTotal:number=0;
NiveauRisqueThrombose:string="faible"; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  retourHome(){
    this.navCtrl.pop();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnticoagscorePage');
  }

  countAnticoag() { 
    this.Anticoag1 = this.Anticoagform1.filter(item1 => item1.isChecked === true).reduce((sum1, current1) => sum1 + current1.count, 0);
    this.Anticoag2 = this.Anticoagform2.filter(item2 => item2.isChecked === true).reduce((sum2, current2) => sum2 + current2.count, 0);
    this.Anticoag3 = this.Anticoagform3.filter(item3 => item3.isChecked === true).reduce((sum3, current3) => sum3 + current3.count, 0);
    this.AnticoagTotal = (this.Anticoag1 + this.Anticoag2 + this.Anticoag3) ;
    console.log("count total = " , this.AnticoagTotal);
      if (this.AnticoagTotal == 0) { this.MesuresSupplementairesAnticoag = "" ; this.NiveauRisqueThrombose = "faible" ;}
      else if (this.AnticoagTotal == 1) { this.MesuresSupplementairesAnticoag = "Bas anti-thrombose (grade 2)"  ; this.NiveauRisqueThrombose = "intermédiaire" ;}
      else if (this.AnticoagTotal >= 2) {this.MesuresSupplementairesAnticoag = "Bas anti-thrombose (grade 2) + Lovenox 100 UI/kg/j SC sans dépasser 4000 UI/j." ; this.NiveauRisqueThrombose = "élevé" ;}
    console.log(this.NiveauRisqueThrombose);

    }; 

}
