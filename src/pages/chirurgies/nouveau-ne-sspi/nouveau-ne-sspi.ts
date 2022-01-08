import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-nouveau-ne-sspi',
  templateUrl: 'nouveau-ne-sspi.html',
})
export class NouveauNeSspiPage {

  checkedItem:boolean=false;

  public MesuresGenerales = <any> [
    { title : "Analgésie" , item : "Paracétamol 7,5 mg/kg/6h et Morphine en PCA infirmière.", isChecked : false},
    { title : "Réchauffement" , item : "Systématique en couveuse ou sous couverture à air pulsé, pour un objectif de température > 36,5°C."  , isChecked : false },
    { title : "Surveillance de base" , item : "Toutes les heures : FC, PA, SpO2, température, douleur (échelle EDIN), oxymétrie tissulaire cérébrale, périmètre abdominal, présence de signes de lutte respiratoire, vigilance." , isChecked : false},
    { title : "Surveillances supplémentaires" , item : "Diurèse et glycémie capillaire toutes les 4h. Détermination cutanée et sanguine de la bilirubine en présence d'un ictère. Surveillances supplémentaires adaptées à la pathologie et au contexte clinique." , isChecked : false}
  ];

  public ExamenClinique = <any> [
    { title: 'Antécédents maternels' , item: "Pathologies chroniques, pathologies de la grossesse, groupe sanguin de la mère.", isChecked: false , count: 1},
    { title: 'Accouchement et naissance' , item: "Terme de naissance, mode d'accouchement, poids de naissance, score d'Apgar, notion de rupture prématurée des membranes.", isChecked: false , count: 1},
    { title: 'Contexte infectieux' , item: "Fièvre maternelle ou signe de chorio-amniotite, antibiothérapie maternelle (molécules, délai de mise en place, durée du traitement)." , isChecked: false , count: 1},
    { title: 'Prise en charge péri-partum' , item: "Gaz du sang au cordon, dosage de la CRP et PCR au cordon et en systémique, administration de vitamine K.", isChecked: false, count: 1},
      ];

  public ExamensParacliniques = <any> [
    { title : "Bilan systématique" , item :"NFS Pq, ionogramme sanguin, urémie, créatininémie, hémostase (TP > 70%, TCA/TCK < 1,4, Fibrinogène > 2 g/L), calcémie, phosphorémie, bilirubine libre et conjuguée, CRP, glycémie veineuse et glycémie capillaire." , isChecked : false },
    { title : "Bactériologie systématique" , item :"Prélèvements de liquide gastrique, oreilles et anus, pour le dépistage des infections materno-foetales." , isChecked : false },
    { title : "Examens radiologiques" , item :"Adaptés au contexte : échographie cardiaque, rénale, abdominale, scanner. Tout nouveau-né devant se déplacer au scanner doit être *accompagné*." , isChecked : false },
      ];

  public PerfusionsApports = <any> [
    { title : "Perfusions" , item :"2 voies veineuses périphériques, 22G, une pour les perfusions et une pour les bilans (obturée)" , isChecked : false },
    { title : "Apports hydro-électrolytiques" , item :"Pédiaven NN1 avant 24h de vie (60 mL/kg/j), Pédiaven NN2 après 24h de vie et miction (80 mL/kg/j)." , isChecked : false },
    { title : "Remplissage" , item : "Si indiqué par la clinique (TRC, signes de déshydratation extracellulaire) : sérum physiologique ou albumine à 5%, par bolus de 10 mL/kg renouvelables." , isChecked : false },
    { title : "Ajuster les apports" , item :"Base de calcul 4 mL/kg/h, à ajuster en fonction de la pathologie causale, de la clinique, de la présence d'une fièvre ou d'une photothérapie et au monitorage non invasif de la perfusion tissulaire (NIRS) le cas échéant." , isChecked : false },
      ];
  

  public Ventilation = <any> [
    { title : "Préoxygénation" , item :"Objectif de FeO2 > 0,9" , isChecked : false },
    { title : "Intubation" , item :"Sonde adaptée au poids, sans ballonet en dessous de 3 kg. Au delà, privilégier la sonde à ballonet en monitorant *systématiquement* la pression du ballonet : objectif de 15 cmH20. L'intubation est orale si la chirurgie prévue est courte et l'extubation au décours envisageable ; nasale pour les nouveaux-nés admis en réanimation en post-opératoire." , isChecked : false },
    { title : "Ventilation protective" , item :"6 mL/kg, objectif Pmax 20 cmH20, jamais au dessus de 30 ; PEP 5 à 7, normocapnie, FiO2 minimale pour SpO2 90 à 95% si prématuré, 94 à 98% si nouveau-né à terme." , isChecked : false },
      ];

  public Glycemie = <any> [
    { title : "Evaluations" , item :"Rapprochées en raison du risque augmenté d'hypoglycémie chez le nouveau-né et de leur gravité." , isChecked : false },
    { title : "Normes" , item :"Variables selon l'âge et les comorbidités. Les limites inférieures sont présentées dans le tableau ci-dessous." , isChecked : false },
    { title : "Traitement hypoglycémie légère" , item :"2 à 3 mL/kg de G10% en IVD." , isChecked : false },
    { title : "Traitement hypoglycémie < 1,4 mM" , item :"3 mL/kg de G10% en IVD puis relais par solution de G10% jusqu'à normalisation." , isChecked : false },
      ];

  public IctereNeonatal = <any> [
    { title : "Rechercher" , item : "Examen systématique à l'entrée et toutes les 24h : coloration cutanée visuelle et biliCheck (deux mesures au front et sur la région sternale)." , isChecked : false },
    { title : "Diagnostiquer" , item :"Prélever bilirubinémie libre et conjuguée si les valeurs au biliCheck sont supérieures à la normale pour l'âge (valeurs présentées ci-dessous)." , isChecked : false },
    { title : "Explorer" , item :"Associer systématiquement au prelèvement de la bilirubine NFS, Pq, réticulocytes, Gr, Rh, Coombs. Les autres explorations sont réalisées selon le contexte : enzymes érythrocytaires (G6PD et PK), CRP, hémostase, transaminases, ektacytométrie." , isChecked : false },
    { title : "Traiter" , item : "L'indication repose sur l'association de trois éléments : (1) valeur de la bilirubine, (2) âge gestionnel et (3) présence de facteurs de risque. Les facteurs de risque, la courbe d'aide à la décision et les stratégies thérapeutiques sont présentées ci-dessous. La photothérapie est interrompue quand la bilirubine est < 200 µM dans l'ictère hémolytique, < 220 µM pour les autres ictères, et recontrôlée 12 à 24h après l'arrêt de la photothérapie." , isChecked : false}   
  ];

  public Hemoglobine = <any> [
    { title : "Taux souhaité" , item : "Nouveau-né porteur d'une cariopathie cyanogène : 12 g/dL. Autres patients : 10 g/dL." , isChecked : false },
    { title : "Volume à transfuser" , item :"CGR : DeltaHb * (3/HtCG) * poids. PFC : 10 à 20 mL/kg. Plaquettes : 10 à 20 mL/kg" , isChecked : false },
     ];

  public IMF = <any> [
    { title : "Prélever" , item : "Penser aux prélèvements bactériologiques systématiques. Ajouter une PL devant la présence de tout signe neurologique associé." , isChecked : false },
    { title : "Indications de traitement" , item :"La liste des indications de traitement antibiotique est présentée ci-dessous. Vérifier que les deux flacons d'hémocultures ont bien été prélevés avant de débuter tout traitement antibiotique." , isChecked : false },
    { title : "Antibiothérapie" , item :"Augmentin 50 mg/kg/12h, Gentamicine 3 mg/kg/j en 30 minutes, pendant 48h. Remplacer l'Augmentin par Céfotaxime 50mg/kg/12h en cas d'antibiothérapie maternelle au 3e trismestre (plus de 24h), de présence de BG- à l'examen direct des prélèvements bactériologiques ou d'hospitalisation maternelle au troisième trimestre." , isChecked : false },
  ];

  isShownMesuresGenerales:boolean=false; 
  isShownExamenClinique:boolean=false; 
  isShownExamensParacliniques:boolean=false; 
  isShownVentilation:boolean=false;
  isShownGlycemie:boolean=false; 
  isShownIctereNeonatal:boolean=false; 
  isShownHemoglobine:boolean=false;
  isShownIMF:boolean=false;

  allCheckedMesuresGenerales:boolean=false;
  allCheckedExamenClinique:boolean=false; 
  allCheckedExamensParacliniques:boolean=false; 
  allCheckedVentilation:boolean=false;
  allCheckedGlycemie:boolean=false; 
  allCheckedIctereNeonatal:boolean=false;
  allCheckedHemoglobine:boolean=false; 
  allCheckedIMF:boolean=false;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public ToastController: ToastController, 
    ) {}

  retourHome() {
    this.navCtrl.pop();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nouveau Né SSPI page');
  };

  ToggleExamenClinique() {
    this.isShownExamenClinique = !this.isShownExamenClinique; 
  };
  
  ToggleExamensParacliniques() {
    this.isShownExamensParacliniques = !this.isShownExamensParacliniques;
  };

  ToggleVentilation() {
    this.isShownVentilation = !this.isShownVentilation;
  };

  ToggleGlycemie() {
    this.isShownGlycemie = !this.isShownGlycemie;
  };

  ToggleIctereNeonatal(){
    this.isShownIctereNeonatal = !this.isShownIctereNeonatal; 
  }; 

  ToggleHemoglobine(){
    this.isShownHemoglobine = !this.isShownHemoglobine;
  };

  ToggleIMF(){
    this.isShownIMF = !this.isShownIMF;
  };

  ToggleMesuresGenerales(){
    this.isShownMesuresGenerales = !this.isShownMesuresGenerales;
  };


  /////////////////////////////////////////////////////////////////

  checkMesuresGenerales() {

    let checkMesuresGenerales = this.MesuresGenerales
      .filter(item => item.isChecked === false)
      .reduce((sum, current) => sum + current.count, 0);
    
    if (checkMesuresGenerales == 0){
    this.allCheckedMesuresGenerales = true;
    const toastMesuresGenerales = this.ToastController.create({
      message: "Items relatifs à l'infection materno-foetale tous validés.",
      position: 'Bottom',
      showCloseButton: true,
      closeButtonText: "OK.",
      duration:3000, 
      });
      toastMesuresGenerales.present();
      }
    else {this.allCheckedMesuresGenerales = false;};
      };
  /////////////////////////////////////////////////////////////////


  checkExamenClinique() {
   let checkSdN = this.ExamenClinique
          .filter(item => item.isChecked === false)
          .reduce((sum, current) => sum + current.count, 0);
    if (checkSdN == 0){
      this.allCheckedExamenClinique = true;
      const toastExamenClinique = this.ToastController.create({
        message: "Items de l'examen clinique tous validés.",
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: "OK.",
        duration:3000, 
        });
      toastExamenClinique.present();
        }
    else {this.allCheckedExamenClinique = false;};
  };

  /////////////////////////////////////////////////////

  checkExamensParacliniques() {
    let checkExamensParacliniques = this.ExamensParacliniques
        .filter(item => item.isChecked === false)
        .reduce((sum, current) => sum + current.count, 0);
    if (checkExamensParacliniques == 0){
    this.allCheckedExamensParacliniques = true;
    const toastExamensParacliniques = this.ToastController.create({
      message: "Items examens paracliniques tous validés.",
      position: 'Bottom',
      showCloseButton: true,
      closeButtonText: "OK.",
      duration:3000, 
      });
    toastExamensParacliniques.present();
      }
    else {this.allCheckedExamensParacliniques = false;};
      };
    
/////////////////////////////////////////////////////////////////

checkVentilation(){    
    let checkVentilation = this.Ventilation
        .filter(item => item.isChecked === false)
        .reduce((sum, current) => sum + current.count, 0);
    
    if (checkVentilation == 0){
    this.allCheckedVentilation = true;
    const toastVentilation = this.ToastController.create({
      message: "Items spécifiques de la ventilation tous validés.",
      position: 'Bottom',
      showCloseButton: true,
      closeButtonText: "OK.",
      duration:3000, 
      });
      toastVentilation.present();
      }
    else {this.allCheckedVentilation = false;};
     
      };
    
    /////////////////////////////////////////////////////////////////
    
    checkGlycemie() {
    
    let checkGlycemie = this.Glycemie
      .filter(item => item.isChecked === false)
      .reduce((sum, current) => sum + current.count, 0);
    
    if (checkGlycemie == 0){
    this.allCheckedGlycemie = true;
    const toastGlycemie = this.ToastController.create({
      message: "Items relatifs à la glycémie tous validés.",
      position: 'Bottom',
      showCloseButton: true,
      closeButtonText: "OK.",
      duration:3000, 
      });
      toastGlycemie.present();
      }
    else {this.allCheckedGlycemie = false;};
    
      };

    /////////////////////////////////////////////////////////////////
    
    checkIctereNeonatal() {
    
      let checkIctereNeonatal = this.IctereNeonatal
        .filter(item => item.isChecked === false)
        .reduce((sum, current) => sum + current.count, 0);
      
      if (checkIctereNeonatal == 0){
      this.allCheckedIctereNeonatal = true;
      const toastIctereNeonatal = this.ToastController.create({
        message: "Items relatifs à l'ictère néonatal tous validés.",
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: "OK.",
        duration:3000, 
        });
        toastIctereNeonatal.present();
        }
      else {this.allCheckedIctereNeonatal = false;};
      
        };

      /////////////////////////////////////////////////////////////////
    
      checkHemoglobine() {
    
        let checkHemoglobine = this.Hemoglobine
          .filter(item => item.isChecked === false)
          .reduce((sum, current) => sum + current.count, 0);
        
        if (checkHemoglobine == 0){
        this.allCheckedHemoglobine = true;
        const toastHemoglobine = this.ToastController.create({
          message: "Items relatifs à l'hémoglobine et la transfusion tous validés.",
          position: 'Bottom',
          showCloseButton: true,
          closeButtonText: "OK.",
          duration:3000, 
          });
          toastHemoglobine.present();
          }
        else {this.allCheckedHemoglobine = false;};
        
          };
          /////////////////////////////////////////////////////////////////
    
          checkIMF() {
    
            let checkIMF = this.IMF
              .filter(item => item.isChecked === false)
              .reduce((sum, current) => sum + current.count, 0);
            
            if (checkIMF == 0){
            this.allCheckedIMF = true;
            const toastIMF = this.ToastController.create({
              message: "Items relatifs à l'infection materno-foetale tous validés.",
              position: 'Bottom',
              showCloseButton: true,
              closeButtonText: "OK.",
              duration:3000, 
              });
              toastIMF.present();
              }
            else {this.allCheckedIMF = false;};
            
              };
        

}

