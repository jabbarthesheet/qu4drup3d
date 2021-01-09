import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ExtrophieVesicalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-extrophie-vesicale',
  templateUrl: 'extrophie-vesicale.html',
})
export class ExtrophieVesicalePage {

  checkedItem:boolean=false;

  public Consultation = <any> [
    { title: 'Réhabilitation' , item: "Evaluation de la possibilité d'une réhabilitation précoce (sans réanimation).", isChecked: false , count: 1},
    { title: 'Comorbidités', item: 'Evaluation des comorbidités du patient.', isChecked: false , count: 1},
    { title: 'Post-opératoire', item: 'Anticiper la période post-opératoire : appele systématique de la réanimation pour réserver une place (4 3416)', isChecked: false , count: 1 },
    { title : 'Epargne sanguine' , item: "Stratégie d'épargne sanguine : prescription de fer, bilan avec NFS, hémostase complète, carte de groupe. Associer un ionogramme sanguin systématique.", isChecked: false , count: 1  },
    { title : 'Infections' ,item: 'Stratégie de contrôle des infections : ECBU, dépistage BLSE par écouvillon rectal et carte fongique (comportant écouiville plaque vésicale, peau à la jonction de la plaque vésicale, aisselles, anus).', isChecked: false  , count: 1},
  ];

  public VPA = <any> [
    { title: 'Bilans' , item: "Vérifier que les bilans prescrits ont été réalisés, vérifier les résultats. Prescrire les RAI et la 2e détermination de groupe.", isChecked: false , class: this.checkedItem},
    { title: 'Transfusion', item: 'Faire une commande de culots globulaires prévisionnelle.', isChecked: false , class: this.checkedItem },
    { title: 'Hydratation', item: 'Perfuser dès le début du jeûne avec du B26.', isChecked: false , class: this.checkedItem  },
     ];

  public PreOperatoire = <any> [
      { title: "Réanimation" , item:"Confirmer la place en réanimation." , isChecked: false, },
      { title: "Monitorage", item:"NIRS en place avant l'induction. TOF pour curarisation continue en IVSE - tracrium - selon le protocole habituel. " , isChecked: false, },
      { title: "Prévention", item: "Infections : Antibioprophylaxie par Céfazoline IV 30 minutes avant l'incision. Saignement : Exacyl - si ostéotomie - selon le protocole habituel. NVPO : Dexaméthasone selon le protocole habituel. Calculer le VPOP." , isChecked: false, },
      { title: "Dispostifs", item:"Pose de cathéter veineux central en jugulaire interne droit (pas en fémoral car ostéotomie). Attention au montage des lignes type réanimation. Discuter la pose d'un cathéter artériel pour monitorage hémodynamique, selon le terrain. Pose d'un cathéter de péridurale, utiliser en per-opératoire, évaluer l'efficacité en per-opératoire." , isChecked: false, },
      ];
  
  public PerOperatoire = <any> [
    { title: "Pendant l'intervention", item:  "Surveillance des saignements en per-opératoire et HemoCue réguliers (1 par heure pendant le temps orthopédique). Seuil transfusionnel à 8 g/dL. NFS de contrôle en post-opératoire."
                   , isChecked: false },
    { title: "En fin d'intervention", item: "Evaluation des critères d'admission en réanimation : transfert en réanimation si transfusion massive, support catécholaminergique, impossibilité d'extubation rapide en SSPI, gestion de l'analgésie prévue comme difficile (mauvaise efficacité de la péridurale, réinjections fréquentes de sufentanil en per-opératoire)."  
                    , isChecked: false },
     ];

  public PostOperatoire = <any> [
    { title: "Réhabilitation précoce", item:  "Chaque fois que possible en l'absence de critère d'admission en réanimation. Extubation précoce en SSPI. Contrôle de l'analgésie par péridurale et paracétamol. Reprise des boissons (liquide clair) dès le soir."
    , isChecked: false },
    { title : "Clinique", item:"Stabilité hémodynamique et diurèse satisfaisante (> 3mL/kg/h) surveillée toutes les 2 heures."},
    { title: "Biologie", item: "NFS à J1 (objectif Hb > 8 g/dL et hémostase normale). Absence de trouble ionique. Stabilité hémodynamique et diurèse satisfaisante (> 3mL/kg/h)."  
     , isChecked: false },
     { title: "Dispositifs", item:"Ablation du cathéter artériel avant la sortie de SSPI. Vérification de l'efficacité de l'analgésie péridurale."}
  ];


  isShownConsultation:boolean=false; 
  isShownVPA:boolean=false; 
  isShownPerOp:boolean=false; 
  isShownPostOp:boolean=false; 
  isShownPreOp:boolean=false;

  allCheckedConsultation:boolean=false; 
  allCheckedVPA:boolean=false; 
  allCheckedPreOp:boolean=false;
  allCheckedPerOp:boolean=false;
  allCheckedPostOp:boolean=false; 


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public ToastController: ToastController, 
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtrophieVesicalePage');
  };

  ionViewWillEnter(){

  };

  ToggleConsultation() {
    this.isShownConsultation = !this.isShownConsultation; 
    this.isShownVPA = this.isShownPerOp = this.isShownPostOp = this.isShownPreOp = false; 
  };
  
  ToggleVPA() {
    this.isShownVPA = !this.isShownVPA;
    this.isShownConsultation = this.isShownPerOp = this.isShownPostOp = this.isShownPreOp = false; 
  };

  TogglePreOp() {
    this.isShownPreOp = !this.isShownPreOp;
    this.isShownConsultation = this.isShownVPA = this.isShownPerOp = this.isShownPostOp = false;
  };

  TogglePerOp() {
    this.isShownPerOp = !this.isShownPerOp; 
    this.isShownConsultation = this.isShownVPA = this.isShownPostOp = this.isShownPreOp = false; 
  };

  TogglePostOp() {
    this.isShownPostOp = !this.isShownPostOp;
    this.isShownConsultation = this.isShownVPA = this.isShownPerOp = this.isShownPreOp = false;
  };

  checkCS() {
   let checkCS = this.Consultation
          .filter(item => item.isChecked === false)
          .reduce((sum, current) => sum + current.count, 0);

    if (checkCS == 0){
      this.allCheckedConsultation = true;
      const toastCS = this.ToastController.create({
        message: "Items spécifiques de consultation tous validés.",
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: "OK.",
        duration:3000, 
        });
      toastCS.present();
        }
    else {this.allCheckedConsultation = false;};
  };

checkVPA() {

let checkVPA = this.VPA
    .filter(item => item.isChecked === false)
    .reduce((sum, current) => sum + current.count, 0);

if (checkVPA == 0){
this.allCheckedVPA = true;
const toastVPA = this.ToastController.create({
  message: "Items spécifiques de VPA tous validés.",
  position: 'Bottom',
  showCloseButton: true,
  closeButtonText: "OK.",
  duration:3000, 
  });
toastVPA.present();
  }
else {this.allCheckedVPA = false;};

  };

  checkPreOperatoire(){

let checkPreOp = this.PreOperatoire
    .filter(item => item.isChecked === false)
    .reduce((sum, current) => sum + current.count, 0);

if (checkPreOp == 0){
this.allCheckedPreOp = true;
const toastPreOp = this.ToastController.create({
  message: "Items spécifiques du pré-opératoire tous validés.",
  position: 'Bottom',
  showCloseButton: true,
  closeButtonText: "OK.",
  duration:3000, 
  });
  toastPreOp.present();
  }
else {this.allCheckedPreOp = false;};
 
  };

  checkPerOperatoire() {

    let checkPerOp = this.PerOperatoire
    .filter(item => item.isChecked === false)
    .reduce((sum, current) => sum + current.count, 0);

if (checkPerOp == 0){
this.allCheckedPerOp = true;
const toastPerOp = this.ToastController.create({
  message: "Items spécifiques du per-opératoire tous validés.",
  position: 'Bottom',
  showCloseButton: true,
  closeButtonText: "OK.",
  duration:3000, 
  });
  toastPerOp.present();
  }
else {this.allCheckedPerOp = false;};

  }; 

  checkPostOperatoire() {

let checkPostOp = this.PostOperatoire
  .filter(item => item.isChecked === false)
  .reduce((sum, current) => sum + current.count, 0);

if (checkPostOp == 0){
this.allCheckedPostOp = true;
const toastPostOp = this.ToastController.create({
  message: "Items spécifiques du post-opératoire tous validés.",
  position: 'Bottom',
  showCloseButton: true,
  closeButtonText: "OK.",
  duration:3000, 
  });
  toastPostOp.present();
  }
else {this.allCheckedPostOp = false;};

  };


}
