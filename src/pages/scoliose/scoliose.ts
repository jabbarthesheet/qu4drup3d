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
  selector: 'page-scoliose',
  templateUrl: 'scoliose.html',
})
export class ScoliosePage {

  checkedItem:boolean=false;

  public Consultation = <any> [
    { title: 'Cadre nosologique' , item: "Scoliose idiopathique de croissance (peu de comorbidités associées) ou scoliose secondaire : myopathes, infirmes moteurs cérébraux, dystrophie, épilepsie. Risque élevé de comorbidités en cas de scoliose secondaire.", isChecked: false , count: 1},
    { title: 'Comorbidités', item: 'Pour les scolioses secondaires, rechercher et explorer les comorbidités cardiaques (ECG, ETT), respiratoires (EFR pour évaluation du TVR et recherche TVO associé).', isChecked: false , count: 1},
    { title: 'Condition physique', item: "Evaluer la tolérance à l'effort (PE score).", isChecked: false , count: 1 },
    { title: 'Etat nutritionnel', item: "Evaluer l'IMC (risque infectieux augmenté pour un IMC < 16 ou > 30).", isChecked: false , count: 1 },
    { title : 'Risque infectieux' , item: "Eliminer systématiquement un foyer urinaire par un ECBU et un foyer dentaire par examen stomatologique. Réaliser le dépistage nasal du staphylocoque doré et la décontamination cutanée en pré-opératoire.", isChecked: false , count: 1  },
    { title : 'Risque hémorragique' ,item: "Le risque est augmenté par : l'étiologie secondaire de la scoliose, le nombre d'étages à fixer, la nécessité de réaliser des ostéotomies transpédiculaires, une fixation sacrée, et la durée prévue de la chirurgie. Prescrire la supplémentation en fer et acide folique pour 6 semaines avant la chirurgie. Injections d'EPO à J-28, J-21, J-14 et J-7. Objectif : hémoglobinémie > 15 g/dL en pré-opératoire.", isChecked: false  , count: 1},
    { title : "Risque d'intubation difficile" , item: "Rechercher une atteinte thoracique haute, une atteinte cervicale, une instabilité ou un antécédent de luxation cervicale. Le cas échéant, prévoir d'emblée une intubation par fibroscopie.", isChecked: false , count: 1  },
  ];

  public VPA = <any> [
    { title: 'Bilans' , item: "Vérifier que les bilans prescrits ont été réalisés, vérifier les résultats (ojectif d'hémoglobinémie > 15 g/dL). Prescrire les RAI et la 2e détermination de groupe. Vérifier que la décontamination cutanée a bien été réalisée.", isChecked: false , class: this.checkedItem},
    { title: 'Transfusion', item: 'Faire une commande de culots globulaires prévisionnelle.', isChecked: false , class: this.checkedItem },
    { title: 'Analgésie', item: 'Introduire la gabapentine.', isChecked: false , class: this.checkedItem },
   
  ];

  public PreOperatoire = <any> [
      { title: "USC" , item:"Confirmer la place en USC pour le post-opératoire." , isChecked: false, },
      { title: "Monitorage", item:"BIS en place avant l'induction. TOF pour monitorage de la curarisation continue en IVSE - sauf en cas de monitorage des potentiels moteurs. Prévoir un remplissage de 10 mL/kg avant le positionnement en décubitus ventral. Prévoir une sonde de Doppler oesophagien pour le monitorage hémodynamique." , isChecked: false, },
      { title: "Prévention", item: "Infections : Antibioprophylaxie par Céfazoline IV 30 minutes avant l'incision. Saignement : Exacyl systématique : 10 mg/kg sur 30 minutes 20 minutes avant l'incision, puis 5 mg/kg/h IVSE jusqu'au début de la fermeture. Préparer le flacon de récupération du cell saver sur l'aspiration chirurgicale." , isChecked: false, },
      { title: "Dispostifs", item:"Dispositifs : deux voies veineuses (18G), sonde thermique, discuter la pose d'un cathéter veineux central et d'un cathéter artériel selon le terrain. Sondage vésical systématique." , isChecked: false, },
      ];
  
  public PerOperatoire = <any> [
    { title: "Pendant l'intervention", item:  "Réalisation de la rachianesthésie chirurgicale. Surveillance des saignements en per-opératoire et HemoCue. Risque de saignement principal au moment des ostéotomies pédiculaires. Monter le cell-saver à environ 1000cc dans le flacon de récupération. Surveiller régulièrement l'installation (position de la tête, absence de compression des yeux). Surveiller la survenue de variations hémodynamiques brutales pendant la réduction chirurgicale (pouvant signer une souffrance médullaire aiguë). Maintenir des apports de 15 mL/kg/h et surveiller la diurèse."
                   , isChecked: false },
    { title: "En fin d'intervention", item: "Arrêt de la curarisation et de l'acide tranexamique au début de la fermeture."  
                    , isChecked: false },
     ];

  public PostOperatoire = <any> [
    { title: "Réhabilitation précoce", item:  "Extubation en salle. Analgésie multimodale (paracétamol, kétoprofène, acupan IVSE, PCA morphine, Gabapentine) devant permettre le premier lever à J1 avec kinésithérapeute."
    , isChecked: false },
    { title : "Prévention", item:"Thromboprophylaxie systématique : Enoxaparine 4000 UI à H8 post opératoire. Poursuite de l'antibioprophylaxie par Céfazoline pendant 48h. Protection gastrique par Pantoprazole."},
    { title: "Biologie", item: "Bilan à J1 comprenant NFS, Pq, ionogramme sanguin, créatininémie, hémostase. Poursuivre les apports pour maintenir une diurèse > 1 mL/kg/h."  
     , isChecked: false },
     { title: "Dispositifs", item:"Ouverture des redons à H+6 post opératoire avec accord du chirurgien."}
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

  retourHome() {
    this.navCtrl.pop();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtrophieVesicalePage');
  };

  ionViewWillEnter(){

  };

  ToggleConsultation() {
    this.isShownConsultation = !this.isShownConsultation; 
  };
  
  ToggleVPA() {
    this.isShownVPA = !this.isShownVPA;
  };

  TogglePreOp() {
    this.isShownPreOp = !this.isShownPreOp;
  };

  TogglePerOp() {
    this.isShownPerOp = !this.isShownPerOp; 
  };

  TogglePostOp() {
    this.isShownPostOp = !this.isShownPostOp;
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

