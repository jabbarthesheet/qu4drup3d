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
  EstomacOuiNon:string; 
  EstomacPlein:boolean;
  DureeJeune:number; 
  ageLecture:number;
  Taille:number;
  sexeMF:string;
  
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
  SeuilPrescriptionEVENDOL:string="Non atteint.";

  isShownEDIN:boolean=false; 
  EDINVisage:number=0; 
  EDINCorps:number=0;
  EDINSommeil:number=0;
  EDINRelation:number=0;
  EDINReconfort:number=0; 
  EDINTotal:number=0; 
  SeuilPrescriptionEDIN:string="Non atteint.";
  
  isShownAldrete:boolean=false;
  totalAldrete:number=0; 
  CATAldrete:string="Cocher les items du score correspondant à l'état du patient.";

  isShownPADSS:boolean=false; 
  totalPADSS:number;
  CATPADSS:string="Cocher les items du score correspondant à l'état du patient.";

  isShownSHS:boolean=false;
  cumuleSHS:number; 
  risqueSHS:string="Répondre aux questions du score."; 
  SHSQ1:number; 
  SHSQ2:number; 
  SHSQ3:number; 
  SHSQ4:number;
  SHSQ5:number;
  SHSQ6:number;

  isShownHEMSTOP:boolean=false;
  totalHEMSTOP:number;
  risqueHEMSTOP:string="Répondre aux questions du score."


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

  public AldreteForm = [
    { category: "Conscience",  val: 'Réveillé et orienté', isChecked: false , count: 2 },
    { category:"", val : 'Réveillable par stimulation minime', isChecked: false , count : 1},
    { category:"", val: 'Non réveillable par stimulation tactile', isChecked: false , count : 0 },
   
    { category: "Activité",  val: 'Mobilité normale des extrémités', isChecked: false , count: 2 },
    { category:"", val : 'Faiblesse à la mobilité', isChecked: false , count : 1},
    { category:"", val: 'Incapable de bouger les extrémités', isChecked: false , count : 0 },
   
    { category: "Respiration",  val: 'Inspiration profonde possible, toux, normopnée', isChecked: false , count: 2 },
    { category:"", val : 'Tachypnée mais toux préservée', isChecked: false , count : 1},
    { category:"", val: 'Dyspnée, pas de toux possible', isChecked: false , count : 0 },
    
    { category: "Hémodynamique",  val: 'PAS ou PAM +/- 15% des valeurs avant induction', isChecked: false , count: 2 },
    { category:"", val : 'PAS ou PAM +/- 30% des valeurs avant induction', isChecked: false , count : 1},
    { category:"", val: 'PAS ou PAM +/- 50% des valeurs avant induction', isChecked: false , count : 0 },
    
    { category: "Saturation",  val: 'SpO2 > 92% en air ambiant', isChecked: false , count: 2 },
    { category:"", val : 'SpO2 > 90% en air ambiant', isChecked: false , count : 1},
    { category:"", val: 'SpO2 < 90% en air ambiant', isChecked: false , count : 0 },
   
    { category: "Douleur",  val: 'Pas de douleur', isChecked: false , count: 2 },
    { category:"", val : 'Douleur modérée mais contrôlée par les antalgiques', isChecked: false , count : 1},
    { category:"", val: 'Douleur non contrôlée par les antalgiques', isChecked: false , count : 0 },
   
    { category: "NVPO",  val: 'Pas de NVPO', isChecked: false , count: 2 },
    { category:"", val : 'Un épisode de NVPO isolé', isChecked: false , count : 1},
    { category:"", val: 'NVPO persistants ', isChecked: false , count : 0 },
   
    ];


  public PADSSForm =  
  [
    { category: "FC & PAS",  val: 'Variation < 20% par rapport au pré-opératoire', isChecked: false , count: 2 , isItem : 1},
    { category:"", val : 'Variation entre 20 et 40% par rapport au pré-opératoire', isChecked: false , count : 1 , isItem : 1},
    { category:"", val: 'Variation > 40% par rapport au pré-opératoire', isChecked: false , count : 0 , isItem : 1 },
   
    { category: "Marche & activité",  val: 'Marche stable, sans étourdissement', isChecked: false , count: 2 , isItem : 1 },
    { category:"", val : 'Marche avec aide, activité réduite', isChecked: false , count : 1  , isItem : 1},
    { category:"", val: 'Marche impossible, hypotonie', isChecked: false , count : 0 ,  isItem : 1},
   
    { category: "NVPO",  val: 'Pas de NVPO', isChecked: false , count: 2  , isItem : 1},
    { category:"", val : 'Un épisode de NVPO', isChecked: false , count : 1  , isItem : 1},
    { category:"", val: 'NVPO persistants', isChecked: false , count : 0 , isItem : 1 },
    
    { category: "Douleur",  val: 'Bien contrôlée', isChecked: false , count: 2 , isItem : 1 },
    { category:"", val : 'Mal contrôlée', isChecked: false , count : 1 , isItem : 1},
    
    { category: "Saignement",  val: 'Minime ou nul (pas de réfection de pansement)', isChecked: false , count: 2, isItem : 1 },
    { category:"", val : 'Significatif (réfection de pansement)', isChecked: false , count : 1, isItem: 1 },
  
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

public SHSform = [
    { val: "Q1. Besoin de secouer l'enfant :" , count: 0 },
    {  val : "Q2. Arrêts respiratoires nocturnes :" , count : 0 },
    {  val: "Q3. Difficultés à respirer la nuit :", count : 0 },
    {  val: "Q4. Inquiétudes des parents sur le sommeil de l'enfant :", count : 0 },
    {  val: "Q5. Intensité du bruit de son ronflement (pour cette question, échelle de 0 = faible à 4 = très bruyant) :", count : 0 },
    {  val: "Q6. Existence de ronflement :", count : 0 },
  ];

  public HEMSTOPform = [
    {  val: "Q1. Avez-vous déjà consulté un médecin ou reçu un traitement pour un saignement prolongé ou inhabituel par exemple un saignement de nez ou une petite coupure ?" , count: 0 },
    {  val: "Q2. Avez-vous tendance à faire des bleus de plus de 2 cm ou des hématomes importants, sans choc ou traumatisme ou bien à un traumatisme minime ?" , count : 0 },
    {  val: "Q3. Avez-vous reconsulté votre dentiste pour un saignement après une extraction dentaire ?", count : 0 },
    {  val: "Q4. Avez-vous saigné de manière anormale après une intervention chirurgicale (exemple opératoire des amygdales ou circoncision) ?", count : 0 },
    {  val: "Q5. Y a-t-il des membres de la famille proche suivis pour une maladie de la coagulation, comme la maladie de Von Willebrand ou l'hémophilie ?", count : 0 },
    {  val: "Q6. Pour les femmes : avez vous déjà consulté un médecin ou reçu un traitement pour des règles trop abondantes ? Avez vous saigné de façon anormale après un accouchement ?", count : 0 },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

retourHome(){
  this.navCtrl.pop(); 
}

ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
    };

  ionViewWillEnter () {
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
        if (!sexe){this.sexeMF = "Fille";};
    this.storage.get('Taille').then((Taille) => {
        this.Taille = Taille; 
    if (!this.PoidsNum || !this.AgeNum) { /* this.presentAlert(); aucune alerte sur cette page */ this.calculs();}
    else {this.calculs()};
    });
    });
    });
    });
    });
    });
    }));};

    calculs(){

    if(this.AgeNum <= 36) {this.VPOPform[0].isChecked = true;}
    else if (this.AgeNum > 36 && this.AgeNum <= 72) {this.VPOPform[1].isChecked = true;}
    else if (this.AgeNum > 72 && this.AgeNum <= 156) {this.VPOPform[2].isChecked = true;}
    else if (this.AgeNum > 156) {this.VPOPform[3].isChecked = true;};
    
    this.countVPOP(); 
    this.setRiskVPOP();
    }


 /* EVALUATION NVPO PAR LE SCORE DE VPOP */

  toggleVPOP() {
    this.isShownVPOP = !this.isShownVPOP; 
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
};

CalcEVENDOL() {
  this.EVENDOLTotal = Math.floor(this.EVENDOLVocal) + Math.floor(this.EVENDOLMimique) + Math.floor(this.EVENDOLMouvement) + Math.floor(this.EVENDOLPosition) + Math.floor(this.EVENDOLRelation); 
  console.log(this.EVENDOLTotal);
  if (this.EVENDOLTotal <= 3) {this.SeuilPrescriptionEVENDOL = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";}
  else {this.SeuilPrescriptionEVENDOL = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";};
}
    


/* DOULEUR EDIN */
toggleEDIN(){
  this.isShownEDIN = !this.isShownEDIN;
};

CalcEDIN() {
  this.EDINTotal = Math.floor(this.EDINVisage) + Math.floor(this.EDINCorps) + Math.floor(this.EDINSommeil) + Math.floor(this.EDINRelation) + Math.floor(this.EDINReconfort); 
  console.log(this.EDINTotal);
  if (this.EDINTotal <= 3) {this.SeuilPrescriptionEDIN = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";}
  else {this.SeuilPrescriptionEDIN = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";};
}
    
/**Score d'ALDRETE sortie SSPI */
toggleAldrete()
{
  this.isShownAldrete = !this.isShownAldrete; 
}

countAldrete() {
  this.totalAldrete = this.AldreteForm.filter(item => item.isChecked === true).reduce((sum, current) => sum + current.count, 0);                                
  console.log(this.totalAldrete);

  if (this.totalAldrete <= 11){this.CATAldrete = "Réveil insuffisant pour autoriser la sortie de SSPI.";}
  else {this.CATAldrete = "Sortie de SSPI possible avec accord du MAR référent du patient.";}
};

/**Score PADSS Sortie ambulatoire */
togglePADSS()
{
  this.isShownPADSS = !this.isShownPADSS; 
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


/**Score SHS Risque de SAOS sévère de l'enfant */

toggleSHS(){
  this.isShownSHS = !this.isShownSHS;
}

countSHS(){
this.SHSQ1 = Math.floor(this.SHSform[0].count);
this.SHSQ2 = Math.floor(this.SHSform[1].count);
this.SHSQ3 = Math.floor(this.SHSform[2].count);
this.SHSQ4 = Math.floor(this.SHSform[3].count);
this.SHSQ5 = Math.floor(this.SHSform[4].count);
this.SHSQ6 = Math.floor(this.SHSform[5].count);
console.log(this.SHSQ1, this.SHSQ2, this.SHSQ3);

  this.cumuleSHS = Math.round((((((((( ((this.SHSQ1+this.SHSQ2)/2) + this.SHSQ3)/2) + this.SHSQ4)/2)+this.SHSQ5)/2) + this.SHSQ6)/2)*100)/100 ; 
  console.log("index cumule = ", this.cumuleSHS); 
  if (this.cumuleSHS >= 2.72){this.risqueSHS = "Enfant présentant probablement un SAOS sévère et à risque élevé d'apnées post-opératoire. Prévoir une hospitalisation post-opératoire. Prudence avec les morphiniques en post-opératoire.";}
  else {this.risqueSHS = "Enfant ne présentant probablement pas un SAOS sévère. Pas de contre indication à l'ambulatoire liée à ce paramètre."}
};


/** SCORE HEMSTOP RISQUE DE SAIGNEMENT */

toggleHEMSTOP() {
  this.isShownHEMSTOP = !this.isShownHEMSTOP; 
};

countHEMSTOP(){
  this.totalHEMSTOP =  Math.floor(this.HEMSTOPform[0].count) + 
                        Math.floor(this.HEMSTOPform[1].count) +
                        Math.floor(this.HEMSTOPform[2].count) + 
                        Math.floor(this.HEMSTOPform[3].count) + 
                        Math.floor(this.HEMSTOPform[4].count) + 
                        Math.floor(this.HEMSTOPform[5].count) ; 
  console.log(this.totalHEMSTOP); 
  
  if (this.totalHEMSTOP >= 2){this.risqueHEMSTOP = "Forte probabilité de sur-risque hémorragique. Bilan d'hémostase recommandé.";}
  else if (this.totalHEMSTOP == 1){this.risqueHEMSTOP = "Probabilité intermédiaire de sur-risque hémorragique. Bilan d'hémostase à discuter."}
  else {this.risqueHEMSTOP = "Probabilité très faible de sur-risque hémorragique. Pas de bilan d'hémostase."}

};

};

