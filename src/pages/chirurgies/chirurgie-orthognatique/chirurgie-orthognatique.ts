import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ChirurgieOrthognatiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chirurgie-orthognatique',
  templateUrl: 'chirurgie-orthognatique.html',
})
export class ChirurgieOrthognatiquePage {


  public Dispositifs = <any> [
    { title: "Intubation nasotrachéale", item:"" , isChecked: false, },
    { title: "Prévention", item: "Sonde naso-gastrique systématique. Sonde thermique rectale et réchauffement cutané externe. Packing endobuccal." , isChecked: false, },
    ];

public PerOperatoire = <any> [
  { title: "Entretien par halogénés", item:  "Objectif de PAM adapté à l'âge (65 mmHg pour les adolescents).", isChecked: false },
  { title: "Analgésie per-opératoire", item: "Sufentanil en réinjections par bolus.", isChecked: false },
  { title: "Exacyl", item:"10 mg/kg sur 30 minutes, débuté 20 minutes avant l'incision, puis 5 mg/kg/h en continu en per-opératoire, sans dépasser 4g/24h." , isChecked: false},
  { title : "Antibioprophylaxie" , item : "Augmentin 50 mg/kg. Dalacine 15 mg/kg et Flagyl 20 mg/kg en cas d'allergie aux béta-lactamines." , isChecked : false},
  { title : "Prévention douleur & NVPO" , item : "Dexaméthasone 0,15 mg/kg et Paracétamol 15 mg/kg en systématique. Discuter Acupan et Ondansetron en fin de chirurgie en fonction des facteurs de risque (cf. score VPOP).", isChecked : false},
  { title : "Anesthésie loco-régionale" , item : "Proposer une ALR de la face en fin de chirurgie : bloc du V-2 pour les ostéotomies maxillaires, bloc du V-3 pour les OSBM."}   
];

public PostOperatoire = <any> [
  { title: "Antibioprophylaxie", item: "Poursuivie 48h en accord avec les recommandations SFAR : Augmentin 25 mg/kg/8h.", isChecked: false },
  { title : "Antalgiques et anti-émétiques", item:"Analgésie multimodale comprenant glace sur le visage et antalgiques intraveineux : Paracétamol, Acupan, Tramadol. Proposer l'Ondansetron en première intention dans le traitement des NVPO ; le Droleptan en rescue."},
  { title: "Sécurité du patient", item: "Paire de ciseaux scotchée sur le lit si blocage.", isChecked: false },
  { title: "Lutte contre l'inflammation", item:"Methylprednisolone 1 mg/kg/j pendant 3 jours : 24h IV puis 48h PO.", isChecked : false},
  { title : "Réhabilitation précoce", item : "Position demi-assise dès la SSPI. Ablation de la SNG après vidange gastrique à J1 puis alimentation orale mixée. Sortie à J1 en l'absence de contre-indication."}
];


isShownDispositifs:boolean=false; 
isShownPostOp:boolean=false; 
isShownPerOp:boolean=false;

allCheckedDispositifs:boolean=false;
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
    console.log('ionViewDidLoad ChirurgieOrthognatiquePage');
  };

  retourHome(){
    this.navCtrl.pop();
  };

  ToggleDispositifs() {
    this.isShownDispositifs = !this.isShownDispositifs;
  };

  TogglePerOp() {
    this.isShownPerOp = !this.isShownPerOp; 
  };

  TogglePostOp() {
    this.isShownPostOp = !this.isShownPostOp;
  };

  checkDispositifs(){

    let checkPreOp = this.Dispositifs
        .filter(item => item.isChecked === false)
        .reduce((sum, current) => sum + current.count, 0);
    
    if (checkPreOp == 0){
    this.allCheckedDispositifs = true;
    const toastDispositifs = this.ToastController.create({
      message: "Items dispostifs tous validés.",
      position: 'Bottom',
      showCloseButton: true,
      closeButtonText: "OK.",
      duration:3000, 
      });
      toastDispositifs.present();
      }
    else {this.allCheckedDispositifs = false;};
     
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
