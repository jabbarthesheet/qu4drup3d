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
      { titre : "Scoliose" , auteurs : "Dr. Florence Julien-Marsollier, Pr. Souhayl Dahmani" , datepublication : "15/11/2018" , page : ScoliosePage , objectif1 : "anticiper les risques.", objectif2 : "favoriser réhabilitation accélérée après chirurgie : raccourcir les séjours en SSPI & USC.", objectif3 : "", objectif4 : "" }, 
    ]; 

  public dispositifs = [
      { nom : "ANI" , nomcomplet : "Analgesia/Nociception Index" , page : AniPage },
  ];

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
}
