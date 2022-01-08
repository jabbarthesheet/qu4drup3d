import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AniPage } from '../../pages_dispositifs/ani/ani';

import { ExtrophieVesicalePage } from '../../chirurgies/extrophie-vesicale/extrophie-vesicale';
import { ScoliosePage } from '../../chirurgies/scoliose/scoliose';

import { ShsPage } from '../../pages_scores/shs/shs';
import { HemstopPage } from '../../pages_scores/hemstop/hemstop';
import { VpopPage } from '../../pages_scores/vpop/vpop';
import { AnticoagscorePage } from '../../pages_scores/anticoagscore/anticoagscore';
import { EvendolPage } from '../../pages_scores/evendol/evendol';
import { EdinPage } from '../../pages_scores/edin/edin';
import { AldretePage } from '../../pages_scores/aldrete/aldrete';
import { PadssPage } from '../../pages_scores/padss/padss';
import { BromagePage } from '../../pages_scores/bromage/bromage';
import { EnrhumePage } from '../../pages_scores/enrhume/enrhume';
import { VentilationDifficilePage } from '../../pages_scores/ventilation-difficile/ventilation-difficile';
import { IotDifficilePage } from '../../pages_scores/iot-difficile/iot-difficile';
import { VmiotImpossiblePage } from '../../pages_scores/vmiot-impossible/vmiot-impossible';
import { LaparoschisisPage } from '../../chirurgies/laparoschisis/laparoschisis';
import { BilanPreOpPage } from '../../pages_scores/bilan-pre-op/bilan-pre-op';
import { CriteresAmbulatoirePage } from '../../pages_scores/criteres-ambulatoire/criteres-ambulatoire';
import { DrepanocytosePage } from '../../pages_scores/drepanocytose/drepanocytose';
import { NouveauNeSspiPage } from '../../chirurgies/nouveau-ne-sspi/nouveau-ne-sspi';
import { MyopathiesPage } from '../../pages_scores/myopathies/myopathies';
import { MucopolysaccharidosePage } from '../../pages_scores/mucopolysaccharidose/mucopolysaccharidose';
import { ChirurgieOrthognatiquePage } from '../../chirurgies/chirurgie-orthognatique/chirurgie-orthognatique';
import { DopplerOesophagienPage } from '../../pages_dispositifs/doppler-oesophagien/doppler-oesophagien';


/**
 * Generated class for the ProtocolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-protocoles',
  templateUrl: 'protocoles.html',
})

 

export class ProtocolesPage {

  public protocoles = [
      { titre : "Extrophie vésicale" , auteurs : "Dr. Charlotte Fait, Pr. Souhayl Dahmani" , datepublication : "21/09/2020" , page : ExtrophieVesicalePage , objectif1 : "réduction des jours de réanimation avec intubation.", objectif2 : "réhabilitation précoce avec passage de la première nuit en SSPI puis USC à J1.", objectif3 : "optimisation de l'analgésie.", objectif4 : "" },
      { titre : "Laparoschisis" , auteurs : "Dr. B. Bruneau, Dr. L. Marsac" , datepublication : "03/03/2021" , page : LaparoschisisPage , objectif1 : "Optimiser l'interfaçage Salle de naissance - bloc - néonatalogie", objectif2 : "Optimiser les délais de prise en charge" , objectif3 : "" , objectif4 : "" }, 
      { titre : "Nouveau né en SSPI" , auteurs : "Dr. D. Michelet, Dr. L. Marsac" , datepublication : "01/05/2017" , page : NouveauNeSspiPage , objectif1 : "Evaluation et prise en charge pré-opératoire d'un nouveau né accueilli en SSPI" , objectif2 :"", objectif3 : "", objectif4 : "" },
      { titre : "Scoliose" , auteurs : "Dr. Florence Julien-Marsollier, Pr. Souhayl Dahmani" , datepublication : "15/11/2018" , page : ScoliosePage , objectif1 : "anticiper les risques.", objectif2 : "favoriser réhabilitation accélérée après chirurgie : raccourcir les séjours en SSPI & USC.", objectif3 : "", objectif4 : "" }, 
      { titre : "Chirurgies orthognatiques" , auteur : "Pr. S. Dahmani" , datepublication : "27/03/2018" , page : ChirurgieOrthognatiquePage }
    ]; 

  public dispositifs = [
      { nom : "ANI" , nomcomplet : "Analgesia/Nociception Index" , page : AniPage },
      { nom : "DTO" , nomcomplet : "Doppler Trans-Oesophagien" , page : DopplerOesophagienPage },
  ];

  public algorithmes = [ 
      { nom : "Bilan préopératoire" , nomcomplet : "Algorithme décisionnel d'aide à la prescription de bilan pré-opératoire en pédiatrie" , validation : "Pr. S. Dahmani, juin 2018", page : BilanPreOpPage },
      { nom : "Drépanocytose" , nomcomplet : "Stratégie de prise en charge péri-opératoire d'un syndrome drépanocytaire majeur" , validation : "Pr. S. Dahmani, mai 2017", page : DrepanocytosePage },
      { nom : "Eligibilité à l'ambulatoire" , nomcomplet : "Evaluation des critères d'éligibilité à la chirurgie ambulatoire en pédiatrie" , validation : "Pr. S. Dahmani, novembre 2021", page : CriteresAmbulatoirePage },
      { nom : "Enfant enrhumé" , nomcomplet : "Gestion de l'enfant enrhumé en CS ou VPA" , validation : "Pr. S. Dahmani, avril 2019" , page : EnrhumePage},
      { nom : "Intubation difficile" , nomcomplet: "Conduite à tenir en cas d'intubation difficile non prévue en pédiatrie" , validation : "Pr. S. Dahmani, octobre 2018" , page : IotDifficilePage },
      { nom : "Mucopolysaccharidoses" , nomcomplet : "Stratégie de prise en charge péri-opératoire des patients atteints de mucopolysaccharidose" , validation : " Pr. S. Dahmani, octobre 2017" , page : MucopolysaccharidosePage },
      { nom : "Myopathies" , nomcomplet : "Stratégies de prise en charge péri-opératoire des principales myopathies." , validation : "Pr. S. Dahmani, avril 2013"  , page : MyopathiesPage },
      { nom : "Ventilation difficile"  , nomcomplet : "Conduite à tenir en cas de ventilation difficile non prévue en pédiatrie", validation : "Pr. S. Dahmani, octobre 2018", page : VentilationDifficilePage},
      { nom : "VM & IOT impossibles" , nomcomplet : "Conduite à tenir en cas de ventilation et intubation difficiles non prévues en pédiatrie" , validation : "Pr. S. Dahmani, octobre 2018", page : VmiotImpossiblePage },
  ]

  public scores = [
    { 
      titre : "SHS score",
      page: ShsPage, 
      soustitre: "Sleep-disordered Hypoxia Severity", 
      objectif : "Evaluation du caractère sévère d'un SAOS de l'enfant.", 
  },

  { 
    titre : "HEMSTOP",
    page: HemstopPage, 
    soustitre: "Questionnaire saignement", 
    objectif : "Dépistage des coagulopathies chez l'enfant et aide à la décision pour la prescription de bilan d'hémostase.", 
},

{ 
  titre : "VPOP",
  page: VpopPage, 
  soustitre: "Vomissements Post-Opératoires en Pédiatrie", 
  objectif : "Evaluation du risque de NVPO de l'enfant et attitude à adopter pour la prévention.", 
},

{ 
  titre : "Risque thrombo-embolique",
  page: AnticoagscorePage, 
  soustitre: "Score à utiliser chez l'adolescent pubère", 
  objectif : "Evaluation du risque de maladie thrombo-embolique veineuse post-opératoire chez l'enfant et attitude à adopter pour la prévention.", 
},

{ 
  titre : "EVENDOL",
  page: EvendolPage, 
  soustitre: "Douleur chez l'enfant", 
  objectif : "Hétéroévaluation de la douleur chez l'enfant après 3 mois.", 
},

{ 
  titre : "EDIN",
  page: EdinPage, 
  soustitre: "Douleur chez le nourrisson", 
  objectif : "Hétéroévaluation de la douleur chez l'enfant avant 3 mois.", 
},

{ 
  titre : "Aldrete",
  page: AldretePage, 
  soustitre: "Sortie de SSPI", 
  objectif : "Permettre la sortie de SSPI après évaluation des critères de réveil.", 
},

{ 
  titre : "PADSS",
  page: PadssPage, 
  soustitre: "Sortie pour l'ambulatoire", 
  objectif : "Permettre la sortie vers le domicile après évaluation des critères de réveil et d'aptitude à la rue.", 
},

{ 
  titre : "Bromage",
  page: BromagePage, 
  soustitre: "Sortie de SSPI", 
  objectif : "Evaluer la levée du bloc moteur après un geste de rachi-anesthésie.", 
},



  ]; 


    ProtocolesView:number=1; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtocolesPage');
  }

  openProtocole(index) {
    this.navCtrl.push(this.protocoles[index].page); 
  }

  openDispositif(index) {
    this.navCtrl.push(this.dispositifs[index].page); 
  }

  openScore(index) {
    this.navCtrl.push(this.scores[index].page); 
  }

  openAlgorithme(index) {
    this.navCtrl.push(this.algorithmes[index].page); 
  }
}
