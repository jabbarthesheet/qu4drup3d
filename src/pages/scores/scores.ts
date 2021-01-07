import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {


  AgeNum:number; 
  PoidsNum:number; 
  Allergie:string; 
  Sexe:boolean; 
  estomaclast:boolean;
  EstomacOuiNon:string; 
  DureeJeune:number; 
  
  isShownVPOP:boolean=false;
  totalVPOP:number=0; 
  risqueVPOP:number; 
  prophylaxieVPOP:string; 

  isShownScoreAnticoag:boolean=false;
  Anticoag1:number;
  Anticoag2:number;
  Anticoag3:number;  
  prophylaxieAnticoag:string="Hydratation adéquate, mobilisation précoce, ablation CVC le plus tôt possible (le cas échéant)."; 
  MesuresSupplementairesAnticoag:string; 
  AnticoagTotal:number=0;
  NiveauRisqueThrombose:string="faible"; 

  isShownEVENDOL:boolean=false; 
  EVENDOLVocal:number=0; 
  EVENDOLMimique:number=0;
  EVENDOLMouvement:number=0;
  EVENDOLPosition:number=0;
  EVENDOLRelation:number=0; 
  EVENDOLTotal:number=0; 
  SeuilPrescription:string="Non atteint.";



  public VPOPform = [
    { val: 'Âge inférieur à 3 ans', isChecked: false , count: 0 },
    {  val : 'Âge entre 3 et 6 ans', isChecked: false , count : 1},
    {  val: 'Âge entre 6 et 13 ans', isChecked: false , count : 2 },
    {  val: 'Âge supérieur à 13 ans', isChecked: false , count : 1 },
    {  val: 'Mal des transports', isChecked: false, count : 1 },
    {  val: 'Chirurgie > 45 minutes', isChecked: false , count : 1},
    {  val: 'Chirurgie à risque : amygdales, strabisme, tympan', isChecked: false , count : 1},
    {  val: 'Réinjection de morphiniques', isChecked: false , count : 1},
  ];

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

  



  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
    
  };

ionViewWillEnter() {
    
      let promiseList: Promise<any>[] = [];
      promiseList.push(
      this.storage.get('AgeNum').then((Age) => {
          this.AgeNum = Age; 
      this.storage.get('PoidsNum').then((Poids) => {
          this.PoidsNum = Poids; console.log(
            'Le patient a', this.AgeNum, "mois au total pour ", this.PoidsNum, " kg.");
          });
        }))
  
      let promiseOptions: Promise<any>[] = [];
      promiseOptions.push(
      this.storage.get('EstomacPlein').then((esto) => {
          this.estomaclast = esto;
          if (this.estomaclast == true) {this.EstomacOuiNon = "plein"; }
          else {this.EstomacOuiNon = "vide" ; }
      this.storage.get('DureeJeune').then((dureejeune:any) => {
          this.DureeJeune = dureejeune;console.log('duree du jeune renseignee de', this.DureeJeune, 'heures.');
      this.storage.get('Allergie').then((allergie:any) => 
      {

        this.Allergie = allergie;
        
        if(this.AgeNum <= 36) {this.VPOPform[0].isChecked = true;}
        else if (this.AgeNum > 36 && this.AgeNum <= 72) {this.VPOPform[1].isChecked = true;}
        else if (this.AgeNum > 72 && this.AgeNum <= 156) {this.VPOPform[2].isChecked = true;}
        else if (this.AgeNum > 156) {this.VPOPform[3].isChecked = true;};
        
        this.countVPOP(); 
        this.setRiskVPOP();
        }); 
        }); 
      })); 
  }

 /* EVALUATION NVPO PAR LE SCORE DE VPOP */

  toggleVPOP() {
    this.isShownVPOP = !this.isShownVPOP; 
    this.isShownScoreAnticoag = this.isShownEVENDOL = false; 
  };

  countVPOP() {
    console.log("count");
    this.totalVPOP = this.VPOPform.filter(item => item.isChecked === true).reduce((sum, current) => sum + current.count, 0);
    this.setRiskVPOP()
                                  
    console.log(this.totalVPOP);
  };

  setRiskVPOP(){

  if (this.totalVPOP == 0) {this.risqueVPOP = 6;}
  else if  (this.totalVPOP == 1 ) {this.risqueVPOP = 7 ;}
  else if (this.totalVPOP == 2 ) {this.risqueVPOP = 15 ;}
  else if (this.totalVPOP == 3 ) {this.risqueVPOP = 25 ;}
  else if (this.totalVPOP == 4 ) {this.risqueVPOP = 39 ;}
  else if (this.totalVPOP == 5 ) {this.risqueVPOP = 53 ;}
  else if (this.totalVPOP == 6 ) {this.risqueVPOP = 69 ;};

  if (this.totalVPOP <= 2){ this.prophylaxieVPOP = "Risque faible. Dexaméthasone seule en prophylaxie.";}
  else if (this.totalVPOP <= 4){ this.prophylaxieVPOP = "Risque Modéré. Déxaméthasone et Dropéridol en prophylaxie. Eviter le protoxyde d'azote. Limiter les opioïdes en post-opératoire."}
  else { this.prophylaxieVPOP = "Risque élevé. Déxaméthasone et Dropéridol en prophy  laxie. Considérer Ondansétron en per opératoire. Eviter le protoxyde d'azote. Limiter les opioïdes en post-opératoire."}
}; 


/* ANTICOAGULATION */

toggleScoreAnticoag() {
  this.isShownScoreAnticoag = !this.isShownScoreAnticoag; 
  this.isShownVPOP = this.isShownEVENDOL = false ;
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


/* DOULEUR EVENDOL */
toggleEVENDOL(){
  this.isShownEVENDOL = !this.isShownEVENDOL;
  this.isShownVPOP = this.isShownScoreAnticoag = false; 
};

CalcEVENDOL() {
  this.EVENDOLTotal = Math.floor(this.EVENDOLVocal) + Math.floor(this.EVENDOLMimique) + Math.floor(this.EVENDOLMouvement) + Math.floor(this.EVENDOLPosition) + Math.floor(this.EVENDOLRelation); 
  console.log(this.EVENDOLTotal);
  if (this.EVENDOLTotal <= 4) {this.SeuilPrescription = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";}
  else {this.SeuilPrescription = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";};
}
    
};

