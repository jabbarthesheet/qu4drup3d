import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { TapBlockPage } from '../../pages/pages-alr/tap-block/tap-block';
import { PeriduralePage } from '../../pages/pages-alr/peridurale/peridurale';
import { BlocGrandsDroitsPage } from '../../pages/pages-alr/bloc-grands-droits/bloc-grands-droits';
import { GeneralitesAlrPage } from '../../pages/pages-alr/generalites-alr/generalites-alr';
import { BlocMaxillairePage } from '../../pages/pages-alr/bloc-maxillaire/bloc-maxillaire';
import { BlocTronculaireAbPage } from '../../pages/pages-alr/bloc-tronculaire-ab/bloc-tronculaire-ab';
import { BlocInterCostoBrachialPage } from '../../pages/pages-alr/bloc-inter-costo-brachial/bloc-inter-costo-brachial';
import { BlocAxillairePage } from '../../pages/pages-alr/bloc-axillaire/bloc-axillaire';
import { BlocSupraClaviculairePage } from '../../pages/pages-alr/bloc-supra-claviculaire/bloc-supra-claviculaire';
import { BlocInterScaleniquePage } from '../../pages/pages-alr/bloc-inter-scalenique/bloc-inter-scalenique';
import { BlocNerfSaphenePage } from '../../pages/pages-alr/bloc-nerf-saphene/bloc-nerf-saphene';
import { BlocSciatiquePoplitePage } from '../../pages/pages-alr/bloc-sciatique-poplite/bloc-sciatique-poplite';
import { BlocSciatiqueSousGlutealPage } from '../../pages/pages-alr/bloc-sciatique-sous-gluteal/bloc-sciatique-sous-gluteal';
import { BlocNerfObturateurPage } from '../../pages/pages-alr/bloc-nerf-obturateur/bloc-nerf-obturateur';
import { BlocCanalAdducteursPage } from '../../pages/pages-alr/bloc-canal-adducteurs/bloc-canal-adducteurs';
import { BlocFemoralPage } from '../../pages/pages-alr/bloc-femoral/bloc-femoral';
import { PengBlocPage } from '../../pages/pages-alr/peng-bloc/peng-bloc';
import { CutaneLateralCuissePage } from '../../pages/pages-alr/cutane-lateral-cuisse/cutane-lateral-cuisse';
import { BlocPudendalPage } from '../../pages/pages-alr/bloc-pudendal/bloc-pudendal';
import { BlocPenienPage } from '../../pages/pages-alr/bloc-penien/bloc-penien';


/*
Generated class for the ServiceDataProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ServiceDataProvider {

public medicaments: any = [];

public chirurgie : any = []; 

public ALRprotocole : any = []; 

public pagesALR : any = []; 

constructor(public storage : Storage) {

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

this.ALRprotocole = [

//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////CHIRURGIE ORTHOPEDIQUE//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
{ isShown: false, 
  intitule: "Creation de fistule artério-veineuse (FAV)",
  specialite : "Orthopedie",
  commentaire : "Le bloc axillaire peut être utilisé à visée anesthésique chez l'adolescent acceptant la technique. Il doit être systématiquement proposé à visée analgésique pour les créations de fistules sous anesthésie générale.",
  
  recommandationALR : "Recommandée", 
  techniqueproposeeA : "Bloc axillaire", 
  commentairetechniqueA : "Administrer la déxaméthasone au moment de la réalisation du bloc pour optimiser la durée d'action.",
  produitALR1A : "Ropivacaïne à visée analgésique",
  produitALR2A : "Mépivacaïne à visée anesthésique",
  adjuvantALRA : "Clonidine", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},


{ isShown: false, 
  intitule: "Fracture de tuberosite tibiale anterieure (TTA)",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

  //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Fracture malleolaire",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

    //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Fracture supra-condylienne (stades 1 à 4)",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges dans les stades 3 et 4, la réduction soulage la douleur dans les stades 1 et 2.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

    //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Fracture humerale distale",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

    //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Fracture distale du radius et poignet",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

    //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Fracture des deux os de l'avant bras",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

    //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Injection de toxine botulique",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Pose de halo",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Ponction de hanche",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},


      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Ponction de genou",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Ablation de materiel orthopedique (AMO)",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Osteotomie malleolaire",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Main de petard",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Panaris",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Phlegmon",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Hygroma coude",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Hygroma genou",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Fracture diaphysaire tibiale",
  specialite : "Orthopedie",
  commentaire : "Risque élevé de syndrome de loges.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Epiphysiolyse par vissage simple",
  specialite : "Orthopedie",
  commentaire : "Geste peu pourvoyeur de douleur post-opératoire.",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

      //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Allongement tendineux au membre supérieur",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},


        //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Reduction sanglante LCH (Salter)",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Recommandée", 
  techniqueproposeeA : "Anesthésie péridurale lombaire", 
  commentairetechniqueA : "",
  produitALR1A : "Ropivacaïne +/- Sufentanil",
  produitALR2A : "Lévobupivacaïne +/- Sufentanil",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

        //////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
  intitule: "Allongement tendineux au membre supérieur",
  specialite : "Orthopedie",
  commentaire : "",
  
  recommandationALR : "Non recommandée", 
  techniqueproposeeA : "", 
  commentairetechniqueA : "",
  produitALR1A : "",
  produitALR2A : "",
  adjuvantALRA : "", 
  
  techniqueproposeeB : "", 
  commentairetechniqueB : "",
  produitALR1B : "",
  produitALR2B : "",
  adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////CHIRURGIE NEONATALE//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
{ isShown: false, 
intitule: "Young Dees",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Laparoschisis",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Omphalocèle avec ou sans Schuster",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Entérostomie",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Hernie du cordon",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Hernie diaphragmatique",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Fermeture de canal artériel",
specialite : "Neonatologie (thoracique)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Anoplastie",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Fermeture de Schuster",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Transposition anale",
specialite : "Neonatologie (digestive)",
commentaire : "",

recommandationALR : "A discuter", 
techniqueproposeeA : "Anesthésie péridurale lombaire", 
commentairetechniqueA : "Envisageable au delà de 5kg",
produitALR1A : "Ropivacaïne +/- Sufentanil",
produitALR2A : "Levobupivacaïne +/- SUfentanil",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
///////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////CHIRURGIE UROLOGIQUE//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


{ isShown: false, 
intitule: "Hydrocele",
specialite : "Urologie",
commentaire : "Chirurgie classiquement réalisée par abord inguinal chez l'enfant (hydrocèle d'origine péritonéale), abord scrotal chez le grand enfant ou l'adulte (hydrocèle en rapport avec la vaginale testiculaire). En cas de recours à la Clonidine, utiliser une seule fois.",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc ilio-inguinal échoguidé", 
commentairetechniqueA : "Si abord inguinal.",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "Bloc pudendal sous neuro-stimulation", 
commentairetechniqueB : "Si abord scrotal.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////


{ isShown: false, 
intitule: "Ectopie testiculaire par coelioscopie",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "Bloc pudendal sous neuro-stimulation", 
commentairetechniqueB : "Si abord scrotal.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////


{ isShown: false, 
intitule: "Ectopie testiculaire par laparotomie",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc ilio-inguinal", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "Bloc pudendal sous neuro-stimulation", 
commentairetechniqueB : "Si abord scrotal.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Posthectomie (circoncision)",
specialite : "Urologie",
commentaire : "Choisir l'une ou l'autre des techniques ; le bloc pudendal reste la technique de référence.",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc pudendal sous neuro-stimulation", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "Bloc pénien", 
commentairetechniqueB : "Alternative possible avec recours à l'échographie, vérifier la diffusion de l'anesthésique local sous les corps caverneux.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Nephrectomie",
specialite : "Urologie",
commentaire : "Discuter avec l'opérateur la balance bénéfice-risque en fonction de l'indication et de l'âge de l'enfant.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Anesthésie péridurale lombaire", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne +/- sufentanil",
produitALR2A : "Levobupivacaïne +/- sufentanil",
adjuvantALRA : "", 

techniqueproposeeB : "Bloc du muscle carré des lombes", 
commentairetechniqueB : "Technique présentant une morbidité non négligeable, avec notamment un risque d'hématome au point de ponction, requiérant un opérateur entraîné.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Hypospade antérieur ou moyen",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc pudendal sous neuro-stimulation", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Hypospade postérieur",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Anesthésie péridurale lombaire", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne +/- sufentanil",
produitALR2A : "Levobupivacaïne +/- sufentanil",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Bricker",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Anesthésie péridurale lombaire", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne +/- sufentanil",
produitALR2A : "Levobupivacaïne +/- sufentanil",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Enterocystoplastie",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Anesthésie péridurale lombaire", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne +/- sufentanil",
produitALR2A : "Levobupivacaïne +/- sufentanil",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Transplantation rénale (greffe)",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Deflux (par cystoscopie)",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////


{ isShown: false, 
intitule: "Cryopreservation testiculaire",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Uréthroscopie ou cystoscopie",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////


{ isShown: false, 
intitule: "Valves de l'uretre postérieur",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trocarts", 
commentairetechniqueA : "Pour les abords par coelioscopie et par robot",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Nephrolithotomie percutanee",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////


{ isShown: false, 
intitule: "Ureteroscopie souple ou rigide",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Pyeloplastie",
specialite : "Urologie",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trocarts", 
commentairetechniqueA : "Pour les abords par coelioscopie et robot.",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////CHIRURGIE DIGESTIVE//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


{ isShown: false, 
intitule: "Abaissement colique transanal",
specialite : "Chirurgie digestive",
commentaire : "Chirurgie majeure source de douleurs importantes.",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Anesthésie péridurale lombaire", 
commentairetechniqueA : "Se référer à la fiche APD pour évaluer la profondeur de l'espace selon l'âge et le poids et le détail du calcul des doses horaires et bolus PCEA.",
produitALR1A : "Ropivacaïne 1 mg/mL +/- Sufentanil 0,25 mg/mL",
produitALR2A : "Lévobupivacaïne 1,25 mg/mL +/- Sufentanil 0,25 mg/mL",

techniqueproposeeB : "TAP block bilatéral", 
commentairetechniqueB : "En cas de contre-indication à l'APD.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Biopsie rectale",
specialite : "Chirurgie digestive",
commentaire : "",
recommandationALR : "Non recommandée", 
},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Dilatation anale",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc pudendal bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Fistule anale",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc pudendal bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////
{ isShown: false, 
intitule: "Fermeture de stomie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc ipsilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////
{ isShown: false, 
intitule: "Colostomie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Ileostomie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Resection grelique par laparotomie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////
{ isShown: false, 
intitule: "Colectomie par coelioscopie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "A discuter", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "Technique la plus fréquemment employée",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "TAP bloc bilatéral", 
commentairetechniqueB : "En cas de chirurgie longue ou compliquée, risque de douleurs sous-diaphragmatiques ou sous-scapulaires en rapport avec la coelioscopie pour lesquelles le TAP bloc pourrait apporter un meilleur résultat.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////
{ isShown: false, 
intitule: "Colectomie par laparotomie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "Anesthésie péridurale lombaire", 
commentairetechniqueB : "En cas de douleurs importantes en post-opératoires anticipées par l'opérateur.",
produitALR1B : "Ropivacaïne+/- Sufentanil",
produitALR2B : "Lévobupivacaïne +/- Sufentanil",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Jéjunostomie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "A discuter", 
techniqueproposeeA : "TAP bloc bilatéral", 
commentairetechniqueA : "Technique la plus fréquemment employée",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Resection grelique par coelioscopie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "A discuter", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "Technique la plus fréquemment employée",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "TAP bloc bilatéral", 
commentairetechniqueB : "En cas de chirurgie longue ou compliquée, risque de douleurs sous-diaphragmatiques ou sous-scapulaires en rapport avec la coelioscopie pour lesquelles le TAP bloc pourrait apporter un meilleur résultat.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Anastomose bilio-digestive",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "Technique la plus fréquemment employée",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "TAP bloc bilatéral", 
commentairetechniqueB : "En cas de chirurgie longue ou compliquée, risque de douleurs sous-diaphragmatiques ou sous-scapulaires en rapport avec la coelioscopie pour lesquelles le TAP bloc pourrait apporter un meilleur résultat.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Levobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Anastomose bilio-digestive",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Levobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Pancreatectomie cephalique",
specialite : "Chirurgie digestive",
commentaire : "Discuter avec l'opérateur et selon l'âge et la balance bénéfice risque la faisabilité de l'une ou l'autre des techniques.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Anesthésie péridurale thoracique", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "Anesthésie péridurale lombaire", 
commentairetechniqueB : "",
produitALR1B : "Ropivacaïne +/- Sufentanil",
produitALR2B : "Lévobupivacaïne +/- Sufentanil",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Pancréatectomie caudale",
specialite : "Chirurgie digestive",
commentaire : "Discuter avec l'opérateur et selon l'âge et la balance bénéfice risque la faisabilité de l'une ou l'autre des techniques.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Anesthésie péridurale thoracique", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "Anesthésie péridurale lombaire", 
commentairetechniqueB : "",
produitALR1B : "Ropivacaïne +/- Sufentanil",
produitALR2B : "Lévobupivacaïne +/- Sufentanil",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Oeso-coloplastie",
specialite : "Chirurgie digestive",
commentaire : "Discuter avec l'opérateur et selon l'âge et la balance bénéfice risque la faisabilité de l'une ou l'autre des techniques.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Anesthésie péridurale thoracique", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "Anesthésie péridurale lombaire", 
commentairetechniqueB : "",
produitALR1B : "Ropivacaïne +/- Sufentanil",
produitALR2B : "Lévobupivacaïne +/- Sufentanil",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Chirurgie de Nissen",
specialite : "Chirurgie digestive",
commentaire : "Discuter avec l'opérateur et selon l'âge et la balance bénéfice risque la faisabilité de l'une ou l'autre des techniques.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Anesthésie péridurale thoracique", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "Anesthésie péridurale lombaire", 
commentairetechniqueB : "",
produitALR1B : "Ropivacaïne +/- Sufentanil",
produitALR2B : "Lévobupivacaïne +/- Sufentanil",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Kyste du choledoque par coelioscopie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Cholecystectomie par coelioscopie",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Pose de prothèse biliaire",
specialite : "Endoscopie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Endoscopie des voies biliaires",
specialite : "Endoscopie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Gastrostomie chirurgicale",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Duplication oesophagienne",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Appendicectomie",
specialite : "Chirurgie digestive",
commentaire : "Préciser le diagnostic et la voie d'abord avec l'opérateur : infiltration des trous de trocarts semble préférable pour les appendicites aiguës simples et les péritonites localisées ; le TAP bloc serait préférable dans les péritonites appendiculaires généralisées.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "Pour les abords coelioscopiques sur appendicite simple ou péritonite localisée",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "TAP bloc droit ou bilatéral", 
commentairetechniqueB : "Pour les abords laparotomiques ou les péritonites généralisées",
produitALR1B : "Ropivacaïne",
produitALR2B : "Lévobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Splénectomie",
specialite : "Chirurgie digestive",
commentaire : "Préciser la voie d'abord avec l'opérateur. En cas de recours à la Clonidine, n'utiliser qu'une seule fois.",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc gauche ''haut''", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "Bloc du grand droit gauche ''haut''", 
commentairetechniqueB : "Selon la voie d'abord",
produitALR1B : "Ropivacaïne",
produitALR2B : "Lévobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Hernie inguinale",
specialite : "Chirurgie digestive",
commentaire : "Rachianesthésie envisageable uniquement pour les nouveaux-nés de moins de 5kg",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Rachianesthésie", 
commentairetechniqueA : "Chez le nouveau-né de moins de 5 kg ou chez le grand enfant.",
produitALR1A : "Bupivacaïne",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "Bloc ilio-inguinal", 
commentairetechniqueB : "Pour les chirurgies sous anesthésie générale",
produitALR1B : "Ropivacaïne",
produitALR2B : "Lévobupivacaïne",
adjuvantALRB : "Clonidine",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Hernie ombilicale",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc des grands droits bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Cure d'éventration",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc ipsilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Coelioscopie exploratrice",
specialite : "Chirurgie digestive",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "Clonidine", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


{ isShown: false, 
intitule: "Sténose du pylore",
specialite : "Chirurgie digestive",
commentaire : "L'objectif de l'ALR est notamment de permettre chaque fois que possible l'abstention de morphinomimétiques en per-opératoires. L'ajout de la barrette sous-cutanée autorise à débuter la chirurgie sans morphinique. Attention aux quantités totales d'anesthésique local chez le nouveau-né.",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc des grands droits", 
commentairetechniqueA : "Diluer les produits pour autoriser plus de volume.",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "Barrette sous-cutanée ", 
commentairetechniqueB : "",
produitALR1B : "Ropivacaïne",
produitALR2B : "Lévobupivacaïne",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////ENDOSCOPIE//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Fibroscopie oesogastroduodénale",
specialite : "Endoscopie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Coloscopie",
specialite : "Endoscopie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Pose de prothèse digestive",
specialite : "Endoscopie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Ligature de varices oesophagiennes",
specialite : "Endoscopie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Sclérose de varices oesophagiennes",
specialite : "Endoscopie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Gastrostomie par voie endoscopique",
specialite : "Endoscopie",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////CHIRURGIE GYNECOLOGIQUE//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
{ isShown: false, 
intitule: "Hernie de l'ovaire",
specialite : "Chirurgie gynécologique",
commentaire : "Rachianesthésie envisageable uniquement pour les nouveaux-nés de moins de 5kg.",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Rachianesthésie", 
commentairetechniqueA : "Chez le nouveau né de moins de 5 kg.",
produitALR1A : "Bupivacaïne",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "Bloc ilio-inguinal", 
commentairetechniqueB : "Pour les chirurgies sous anesthésie générale.",
produitALR1B : "Ropivacaïne",
produitALR2B : "Lévobupivacaïne",
adjuvantALRB : "Clonidine",},


///////////////////////////////////////////////////////////////////


{ isShown: false, 
intitule: "Kyste ovarien coelioscopie",
specialite : "Chirurgie gynécologique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


///////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Kyste ovarien par laparatomie",
specialite : "Chirurgie gynécologique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc ipsilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


///////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Coelioscopie exploratrice",
specialite : "Chirurgie gynécologique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

///////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Torsion d'annexe par coelioscopie",
specialite : "Chirurgie gynécologique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


///////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Cryoconservation ovarienne par coelioscopie",
specialite : "Chirurgie gynécologique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration des trous de trocarts", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

///////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Cryoconservation ovarienne par laparotomie",
specialite : "Chirurgie gynécologique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc ipsilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

///////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Hystérectomie par voie haute",
specialite : "Chirurgie gynécologique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


///////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Hystérectomie par voie basse",
specialite : "Chirurgie gynécologique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "TAP bloc bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////CHIRURGIE ORL//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Amygdalectomie",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Adénoïdectomie",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Tracheotomie",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},
//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Chirurgie d'oreille moyenne",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Implant cochléaire",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Infiltration cutanée chirurgicale", 
commentairetechniqueA : "Xylocaïne adrénalinée envisageable chez l'enfant d'âge scolaire et l'adolescent.",
produitALR1A : "Xylocaïne adrénalinée",
produitALR2A : "Ropivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Avulsion dentaire",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Chirurgie des glandes salivaires",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Chirurgie de Nagata",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Cervictomie",
specialite : "Chirurgie ORL",
commentaire : "Discuter avec l'opérateur la balance bénéfice-risque d'une ALR en tenant notamment compte de l'âge de l'enfant.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Bloc cervical superficiel", 
commentairetechniqueA : "Ne s'envisage pas chez le petit enfant.",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Curage ganglionnaire cervical",
specialite : "Chirurgie ORL",
commentaire : "Discuter avec l'opérateur la balance bénéfice-risque d'une ALR en tenant notamment compte de l'âge de l'enfant.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Bloc cervical superficiel", 
commentairetechniqueA : "Ne s'envisage pas chez le petit enfant.",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Cure de fente velaire ou palatine (veloplastie)",
specialite : "Chirurgie ORL",
commentaire : "Discuter avec l'opérateur la balance bénéfice-risque d'une ALR en tenant compte de l'emplacement de la fente (antérieure ou postérieure).",

recommandationALR : "A discuter", 
techniqueproposeeA : "Bloc du V-2 bilatéral échoguidé", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Cure de fente labiale et cheiloplastie",
specialite : "Chirurgie ORL",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc du V-2 bilatéral échoguidé", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////CHIRURGIE PLASTIQUE//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Exerese de naevus",
specialite : "Chirurgie plastique",
commentaire : "Discuter avec l'opérateur selon la localisation, la largeur des marges et la profondeur de la résection.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Infiltration cutanée péri-lésionnelle", 
commentairetechniqueA : "",
produitALR1A : "Xylocaïne adrénalinée",
produitALR2A : "Ropivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Enchondrome",
specialite : "Chirurgie plastique",
commentaire : "Discuter avec l'opérateur selon la localisation et la balance bénéfice-risque au regard de l'âge de l'enfant.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Bloc nerveux adapté à la localisation", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Kyste sebace",
specialite : "Chirurgie plastique",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Plastie cutanee",
specialite : "Chirurgie plastique",
commentaire : "Discuter avec l'opérateur selon la localisation et l'étendue du geste, et l'âge de l'enfant.",

recommandationALR : "A discuter", 
techniqueproposeeA : "Infiltration sous cutanée", 
commentairetechniqueA : "",
produitALR1A : "Xylocaïne adrénalinée",
produitALR2A : "Ropivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Rhinoplastie",
specialite : "Chirurgie plastique",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Ablation de prothese sous cutanee",
specialite : "Chirurgie plastique",
commentaire : "",

recommandationALR : "Non recommandée", 
techniqueproposeeA : "", 
commentairetechniqueA : "",
produitALR1A : "",
produitALR2A : "",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Greffe maxillaire",
specialite : "Chirurgie plastique",
commentaire : "",

recommandationALR : "Recommandée", 
techniqueproposeeA : "Bloc du V-2 bilatéral", 
commentairetechniqueA : "",
produitALR1A : "Ropivacaïne",
produitALR2A : "Lévobupivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},

//////////////////////////////////////////////////////////////////////////////////////////////

{ isShown: false, 
intitule: "Pose d'expanseur sous cutane",
specialite : "Chirurgie plastique",
commentaire : "Discuter avec l'opérateur l'intérêt d'une infiltration sous-cutanée selon la localisation et l'étendue de l'intervention.",

recommandationALR : "ALR à discuter", 
techniqueproposeeA : "Infiltration sous cutanée", 
commentairetechniqueA : "",
produitALR1A : "Xylocaïne adrénalinée",
produitALR2A : "Ropivacaïne",
adjuvantALRA : "", 

techniqueproposeeB : "", 
commentairetechniqueB : "",
produitALR1B : "",
produitALR2B : "",
adjuvantALRB : "",},


//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////CHIRURGIE NEONATALE//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////





] ; 

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


this.medicaments = [
{ 
isShown:false, 
title: "Thiopental (Pentothal®)", 
AMM:"", 
indication: "Hypnotique", 
classeMed: "Barbiturique", 
voieAdmin: "IV", 
presentation: "PENTOTHAL 0,5 g Pdr sol inj",
posologie: "7 mg/kg", 
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/thiopental-sodique-7736.html",
},

{ 
isShown:false, 
title: "Clonidine (Catapressan®)", 
AMM:"", 
indication: "HTA", 
indication1: "Antalgique",
classeMed: "α-agoniste central", 
voieAdmin: "IV", 
voieAdmin1 : "PO",
presentation: "CLONIDINE CHLORHYDRATE 0,15 mg cp ou 0,15mg/1mL sol inj",
posologie: "IVSE 0,5 µg/kg/h", 
posologie1: "PO 5µg/kg",
reconstitution: "", 
dilution: "", 
administration:"IVSE ou PO", 
remarques:"Prise PO toutes les 8h maximum",
lien: "https://www.vidal.fr/medicaments/substances/clonidine-6747.html",
},


{ 
isShown:false, 
title: "Propofol (Diprivan®)", 
AMM:"", 
indication: "Hypnotique", 
classeMed: "GABA inhibiteur", 
voieAdmin: "IV", 
presentation: "PROPOFOL 200mg/20mL sol inj",
posologie: "3 à 5 mg/kg en induction seule", 
posologie1: "1 à 2 mg/kg en co-induction avec agent inhalé",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/propofol-2939.html",
},

{ 
isShown:false, 
title: "Etomidate (Hypnomidate®)", 
AMM:"Âge > 2 ans", 
indication: "Hypnotique", 
classeMed: "Hypnotique", 
voieAdmin: "IV", 
presentation: "ETOMIDATE 2 mg/ml émuls inj ",
posologie: "0,5 mg/kg", 
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/etomidate-1431.html",
},

{ 
isShown:false, 
title: "Ketamine (Ketalar®)", 
AMM:"", 
indication: "Hypnotique",
indication1: "Antalgique", 
classeMed: "Hypnotique", 
voieAdmin: "IV", 
voieAdmin1 : "IM",
presentation: "KETAMINE 50 mg/5 ml sol inj",
posologie: "3 mg/kg (hypnotique)", 
posologie1: "0,5 mg/kg (antalgique)",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"Utilisation en entretien IVSE : 0,15 mg/kg/h",
lien: "https://www.vidal.fr/medicaments/substances/ketamine-6970.html",
},

{ 
isShown:false, 
title: "Dexmédétomidine (Dexdor®)", 
AMM:"Sédation chez l'adulte en USI", 
indication: "Hypnotique",
indication1: "Antalgique", 
classeMed: "α2-agoniste sélectif", 
voieAdmin: "IV", 
voieAdmin1 : "intra-nasale",
presentation: "DEXMEDETOMIDINE 100 µg/ml sol diluer p perf",
posologie: "2 µg/kg (sédatif intra-nasal)", 
posologie1: "0,5 µg/kg (antalgique IVL à l'induction)",
reconstitution: "", 
dilution: "4 µg/mL", 
administration:"IVL, IVSE ou intra-nasale", 
remarques:"Utilisation en entretien IVSE : 1 µg/kg sur 10 minutes puis 0,4 µg/kg/h. Prévention de l'agitation au réveil : 0,3 µg/kg sur 10 minutes.",
lien: "https://www.vidal.fr/medicaments/substances/dexmedetomidine-23522.html",
},

{ 
isShown:false, 
title: "Sufentanil (Sufenta®)", 
AMM:"", 
indication: "Antalgique",
indication1: "", 
classeMed: "Opioïde de synthèse", 
voieAdmin: "IV", 
voieAdmin1 : "Péridurale ou intrathécale",
presentation: "SUFENTANIL 50µg/10mL sol inj",
posologie: "0,2 µg/kg", 
posologie1: "0,2 µg/kg/h en entretien IVSE",
reconstitution: "", 
dilution: "Adapter selon le poids", 
administration:"IVD, IVSE péridurale ou intrathécale", 
remarques:"Attention à la demi-vie contextuelle (accumulation)",
lien: "https://www.vidal.fr/medicaments/substances/sufentanil-3378.html",
},

{ 
isShown:false, 
title: "Alfentanil (Rapifen®)", 
AMM:"", 
indication: "Antalgique",
indication1: "", 
classeMed: "Opioïde de synthèse", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "ALFENTANIL 1mg/2mL sol inj",
posologie: "20 µg/kg", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/alfentanil-222.html",
},

{ 
isShown:false, 
title: "Atracurium (Tracrium®)", 
AMM:"", 
indication: "Curarisation",
indication1: "", 
classeMed: "Curare non dépolarisant, benzylisoquinoline", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "ATRACURIUM 25mg/2,5mL ou 50mg/5mL sol inj",
posologie: "0,5 mg/kg", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"0,5 mg/kg/h en entretien",
lien: "https://www.vidal.fr/medicaments/substances/atracurium-besilate-5748.html",
},

{ 
isShown:false, 
title: "Rocuronium (Esmeron®)", 
AMM:"", 
indication: "Curarisation",
indication1: "", 
classeMed: "Curare non dépolarisant, stéroidien", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "ROCURONIUM 50mg/5mL sol inj",
posologie: "0,6 mg/kg", 
posologie1: "1 à 1,2 mg/kg pour ISR",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"0,6 mg/kg/h en entretien",
lien: "https://www.vidal.fr/medicaments/substances/rocuronium-bromure-6322.html",
},

{ 
isShown:false, 
title: "Suxamethonium (Celocurine®)", 
AMM:"", 
indication: "Curarisation",
indication1: "", 
classeMed: "Curare dépolarisant", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "CELOCURINE 100mg/2mL sol inj",
posologie: "1 mg/kg", 
posologie1: "2 mg/kg avant 2 ans",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/suxamethonium-15608.html",
},

{ 
isShown:false, 
title: "Suggamadex (Bridion®)", 
AMM:"", 
indication: "Décurarisation",
indication1: "", 
classeMed: "Gamma cyclodextrine", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "BRIDION 200mg/2mL sol inj",
posologie: "2 mg/kg (TOF 4 réponses)", 
posologie1: "4 mg/kg (TOF 2 réponses)",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"16 mg/kg pour réversion immédiate après administration de rocuronium.",
lien: "https://www.vidal.fr/medicaments/substances/suxamethonium-15608.html",
},

{ 
isShown:false, 
title: "Dexaméthasone", 
AMM:"", 
indication: "Prevention NVPO",
indication1: "", 
classeMed: "Glucocorticoïde", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "DEXAMETHASONE 4mg/1mL ou 20mg/5mL sol inj",
posologie: "1,5 mg/kg", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/dexamethasone-1201.html",
},

{ 
isShown:false, 
title: "Acide tranexamique (Exacyl®)", 
AMM:"", 
indication: "Prevention saignement",
indication1: "", 
classeMed: "Inhibiteur de la fibrinolyse", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "Acide tranexamique 500mg/5mL sol inj",
posologie: "10 mg/kg IVL", 
posologie1: "5 mg/kg/h IVSE ne pas dépasser 4g/j",
reconstitution: "", 
dilution: "", 
administration:"IVL ou IVSE", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/acide-tranexamique-127.html#:~:text=L'acide%20tranexamique%20d%C3%A9veloppe%20une,de%20sa%20transformation%20en%20plasmine.",
},

{ 
isShown:false, 
title: "Lidocaine (Xylocaine®, Xylocard®)", 
AMM:"", 
indication: "Antalgique",
indication1: "", 
classeMed: "Anesthesique local", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "LIDOCAINE 100mg/20mL, 200mg/20mL, 400mg/20mL",
posologie: "1,5 mg/kg IVD lent", 
posologie1: "1 mg/kg/h IVSE en entretien",
reconstitution: "", 
dilution: "", 
administration:"IVD ou IVSE", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/lidocaine-2097.html",
},

{ 
isShown:false, 
title: "Ondansetron (Zophren®)", 
AMM:"Âge > 1 an", 
indication: "Anti-emetique",
indication1: "", 
classeMed: "Inhibiteur 5HT3", 
voieAdmin: "IV", 
voieAdmin1 : "Orale (sublinguale)",
presentation: "ONDANSETRON 8mg/2mL sol inj - ONDANSETRON 4mg ou 8mg cp orodisp",
posologie: "0,1 mg/kg", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/ondansetron-6843.html",
},

{ 
isShown:false, 
title: "Dropéridol (Droleptan®)", 
AMM:"", 
indication: "Anti-emetique",
indication1: "Sedatif", 
classeMed: "Neuroleptique", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "",
posologie: "25 µg/kg", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVL", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/droperidol-1321.html",
},

{ 
isShown:false, 
title: "Paracétamol (Doliprane®, Perfalgan®)", 
AMM:"", 
indication: "Antalgique Palier 1",
indication1: "", 
classeMed: "Antalgique central", 
voieAdmin: "IV", 
voieAdmin1 : "PO",
presentation: "",
posologie: "15 mg/kg/6h", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVL ou PO", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/paracetamol-2649.html",
},

{ 
isShown:false, 
title: "Nalbuphine (Nubain®)", 
AMM:"", 
indication: "Antalgique Palier 2",
indication1: "", 
classeMed: "Phenantrène (agoniste/antagoniste morphinique)", 
voieAdmin: "IV", 
voieAdmin1 : "",
presentation: "NALBUPHINE CHLORHYDRATE 10 mg/ml sol inj",
posologie: "0,2 mg/kg/4h", 
posologie1: "0,1 mg/kg/4h en contexte ambulatoire",
reconstitution: "", 
dilution: "", 
administration:"IVL", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/nalbuphine-6317.html",
},

{ 
isShown:false, 
title: "Ketoprofene (Profenid®)", 
AMM:"IV 15 ans, sirop 6 mois", 
indication: "Antalgique Palier 1",
indication1: "", 
classeMed: "AINS", 
voieAdmin: "IV", 
voieAdmin1 : "PO",
presentation: "KETOPROFENE 100mg/4mL sol inj",
posologie: "1 mg/kg/8h", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVL ou PO", 
remarques:"Utilisation hors AMM fréquente",
lien: "https://www.vidal.fr/medicaments/substances/ketoprofene-1957.html",
},

{ 
isShown:false, 
title: "Ibuprofene (Advil®, Nurofen®)", 
AMM:"Âge > 3 mois", 
indication: "Antalgique Palier 1",
indication1: "", 
classeMed: "AINS", 
voieAdmin: "PO", 
voieAdmin1 : "",
presentation: "IBUPROFENE 200mg ou 400mg cp",
posologie: "10 mg/kg/8h", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"PO", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/ibuprofene-1844.html",
},

{ 
isShown:false, 
title: "Nefopam (Acupan®)", 
AMM:"Âge > 15 ans", 
indication: "Antalgique Palier 2",
indication1: "", 
classeMed: "Analgésique central non morphinique", 
voieAdmin: "IV", 
voieAdmin1 : "PO",
presentation: "NEFOPAM 20mg/2mL sol inj",
posologie: "1 mg/kg/j IVSE", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVSE ou PO", 
remarques:"Préférer l'administration IVSE en pédiatrie",
lien: "https://www.vidal.fr/medicaments/substances/nefopam-11988.html",
},

{ 
isShown:false, 
title: "Tramadol (Contramal®)", 
AMM:"Âge > 15 ans IV, âge > 3 ans PO", 
indication: "Antalgique Palier 2",
indication1: "", 
classeMed: "Agoniste récepteur µ", 
voieAdmin: "IV", 
voieAdmin1 : "PO",
presentation: "CONTRAMAL 100mg/2mL sol inj",
posologie: "1 mg/kg/6h", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVL ou PO", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/tramadol-15308.html",
},

{ 
isShown:false, 
title: "Phloroglucinol (Spasfon®)", 
AMM:"", 
indication: "Antalgique (autres)",
indication1: "Antispasmodique", 
classeMed: "", 
voieAdmin: "IV", 
voieAdmin1 : "PO",
presentation: "PHLOROGLUCINOL 80mg/2mL sol inj - 80mg cp",
posologie: "0,5 mg/kg/6h IV", 
posologie1: "1,5 mg/kg/6h PO",
reconstitution: "", 
dilution: "", 
administration:"IVL ou PO", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/phloroglucinol-3760.html",
},

{ 
isShown:false, 
title: "Bumétanide (Burinex®)", 
AMM:"", 
indication: "HTA", 
indication1: "Insuff. card.",
classeMed: "Diurétique (anse)", 
voieAdmin: "PO", 
voieAdmin1: "IV",      
presentation: "BUMETANIDE 1 mg cp",
presentation1: "BUMETANIDE 2 mg/4 ml sol inj",
posologie: "10 µg/kg/h", 
reconstitution: "", 
dilution: "", 
administration:"IVSE", 
remarques:"possibilité  de doubler si insuffisant",
lien: "https://www.vidal.fr/medicaments/substances/bumetanide-670.html",
},

{ 
isShown:false, 
title: "Furosémide (Lasilix®)", 
AMM:"max. 4 mg/kg/jg", 
indication: "HTA", 
indication1: "Insuff. card.",
classeMed: "Diurétique (anse)", 
voieAdmin: "IV",
voieAdmin1: "PO",        
presentation: "FUROSEMIDE 20 mg cp ou 10 mg/mL sol pr perf",
posologie: "1 mg/kg", 
reconstitution: "", 
dilution: "Serum physiologique", 
administration:"PO ou IVL", 
remarques:"ne pas dépasser 4 prises par jour",
lien: "https://www.vidal.fr/medicaments/substances/furosemide-1579.html",
},


{ 
isShown:false, 
title: "Enalapril (Renitec®)", 
AMM:"", 
indication: "HTA", 
classeMed: "Inhibiteur ECA", 
voieAdmin: "PO",       
presentation: "ENALAPRIL MALEATE 5 mg cp",
posologie: "25 µg/kg", 
reconstitution: "", 
dilution: "", 
administration:"PO en 2 prises", 
remarques:"ne pas dépasser 5 mg/j",
lien: "https://www.vidal.fr/medicaments/substances/enalapril-6771.html",
},

{ 
isShown:false, 
title: "Labétolol (Trandate®)", 
AMM:"", 
indication: "HTA", 
classeMed: "β-bloquant", 
voieAdmin: "IV",       
presentation: "LABETALOL CHLORHYDRATE 5 mg/ml sol inj",
posologie: "0,3 mg/kg", 
reconstitution: "", 
dilution: "", 
administration:"IVL", 
remarques:"Administration IVSE possible 2 mg/kg/j",
lien: "https://www.vidal.fr/medicaments/substances/labetalol-6535.html",
},

{ 
isShown:false, 
title: "Acebutolol (Sectral®)", 
AMM:"", 
indication: "HTA", 
classeMed: "β-bloquant", 
voieAdmin: "PO",       
presentation: "ACEBUTOLOL (chlorhydrate) 200 mg cp",
posologie: "1 mg/kg", 
reconstitution: "", 
dilution: "", 
administration:"PO en 2 prises par jour", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/acebutolol-4283.html",
},


{ 
isShown:false, 
title: "Nicardipine (Loxen®)", 
AMM:"", 
indication: "HTA", 
classeMed: "Anti-calcique", 
voieAdmin: "IV",       
presentation: "NICARDIPINE CHLORHYDRATE 1 mg/ml sol p perf",
posologie: "60 µg/kg/h", 
reconstitution: "", 
dilution: "", 
administration:"IVSE", 
remarques:"possibilité d'augmenter jusqu'à 120 µg/kg/h si insuffisant",
lien: "https://www.vidal.fr/medicaments/substances/nicardipine-6838.html",
},

{ 
isShown:false, 
title: "Lévétiracetam (Keppra®)", 
AMM:"", 
indication: "Epilepsie", 
classeMed: "Anti-épileptique", 
voieAdmin: "PO",       
presentation: "LEVETIRACETAM 250 mg cp",
posologie: "30 mg/kg", 
reconstitution: "", 
dilution: "", 
administration:"PO toutes les 12h", 
remarques:"ne pas dépasser 2g/j",
lien: "https://www.vidal.fr/medicaments/gammes/levetiracetam-eg-61517.html",
},

{ 
isShown:false, 
title: "Phénytoïne (Dilantin®)", 
AMM:"", 
indication: "Epilepsie", 
classeMed: "Anti-épileptique", 
voieAdmin: "IV",       
presentation: "PHENYTOINE SODIQUE 50 mg/ml sol inj (DILANTIN)",
posologie: "20 mg/kg/prise", 
reconstitution: "", 
dilution: "", 
administration:"IVL sur 20 minutes", 
remarques:"ne pas dépasser 1500 mg/administration",
lien: "https://www.vidal.fr/medicaments/dilantin-250-mg-5-ml-sol-inj-5235.html",
},

{ 
isShown:false, 
title: "Phénobarbital (Gardénal®)", 
AMM:"", 
indication: "Epilepsie", 
classeMed: "Barbiturique", 
voieAdmin: "IV",       
presentation: "PHENOBARBITAL (sodique) 40 mg/2 ml pdre/solv p sol inj",
posologie: "15 mg/kg/prise", 
reconstitution: "", 
dilution: "", 
administration:"IVL sur 20 minutes", 
remarques:"ne pas dépasser 500 mg/administration",
lien: "https://www.vidal.fr/medicaments/substances/phenobarbital-2729.html",
},

{ 
isShown:false, 
title: "Clonazépam (Rivotril®)", 
AMM:"", 
indication: "Epilepsie", 
indication1: "Intox. AL",
classeMed: "Benzodiazépine", 
voieAdmin: "IV", 
voieAdmin1: "PO",      
presentation: "CLONAZEPAM 1 mg/1 ml sol diluer/solv p sol inj",
posologie: "Crise convulsive 20 µg/kg, IAL 15 µg/kg", 
posologie1: "Douleur ou agitation post-op : 0,01 mg/kg soit 1gtte/10kg toutes les 8h",
reconstitution: "", 
dilution: "", 
administration:"IVD ou PO", 
remarques:"Renouvelable 2 fois ou administrable IVSE 20 µg/kg/6h",
lien: "https://www.vidal.fr/medicaments/substances/clonazepam-4157.html",
},

{ 
isShown:false, 
title: "Amitryptiline (Laroxyl®)", 
AMM:"", 
indication: "Antidépresseur", 
indication1: "",
classeMed: "Inhibiteur recapture monoamine (NS)", 
voieAdmin: "IV", 
voieAdmin1: "PO",      
presentation: "RIVOTRIL 25 mg cp ou 50mg/2mL sol inj ",
posologie: "0,5 mg/kg/j", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"IVSE ou PO", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/amitriptyline-6678.html",
},

{ 
isShown:false, 
title: "Gabapentine (Neurontin®)", 
AMM:"", 
indication: "Antiépileptique", 
indication1: "Antalgique",
classeMed: "Antiépileptique", 
voieAdmin: "PO", 
presentation: "GABAPENTINE 300 mg gél",
posologie: "5 mg/kg toutes les 8h", 
posologie1: "",
reconstitution: "", 
dilution: "", 
administration:"PO", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/gabapentine-7048.html",
},

{ 
isShown:false, 
title: "Terbutaline (Bricanyl®)", 
AMM:"", 
indication: "Asthme aigu grave", 
classeMed: "β2-agoniste MD", 
voieAdmin: "nébulisation",       
presentation: "BRICANYL 5 mg/2 ml sol p inhal p nébulis en récipient unidose",
posologie: "0,2 mg/kg", 
reconstitution: "", 
dilution: "", 
administration:"aérosol", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/bricanyl-5-mg-2-ml-sol-p-inhal-p-nebulis-en-recipient-unidose-2493.html",
},

{ 
isShown:false, 
title: "Ipratropium (Atrovent®) aérosol", 
AMM:"", 
indication: "Asthme aigu grave", 
classeMed: "Anticholinergique", 
voieAdmin: "nébulisation",       
presentation: "ATROVENT 0,50 mg/2 ml sol p inhal p nébulis",
posologie: "0,25 à 0,5mg", 
reconstitution: "", 
dilution: "", 
administration:"aérosol", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/atrovent-0-50-mg-2-ml-sol-p-inhal-p-nebulis-en-recipient-unidose-adulte-1705.html",
},

{ 
isShown:false, 
title: "Methylprednisolone (Solumédrol®)", 
AMM:"", 
indication: "Anaphylaxie", 
indication1: "AAG",
classeMed: "Corticoïde", 
voieAdmin: "IV",       
presentation: "SOLUMEDROL 1 g pdre/solv p sol inj",
posologie: "Anaphylaxie 1 mg/kg, Asthme aigu grave 2 mg/kg", 
reconstitution: "Serum physiologique", 
dilution: "", 
administration:"IVD", 
remarques:"Dans l'AAG, entretien 0,5 mg/kg/6h au décours",
lien: "https://www.vidal.fr/medicaments/solumedrol-1-g-pdre-solv-p-sol-inj-15189.html",
},

{ 
isShown:false, 
title: "Salbutamol aérosol (Ventoline®)", 
AMM:"", 
indication: "Asthme aigu", 
classeMed: "β2-agoniste CD", 
voieAdmin: "nébulisation",       
presentation: "2,5 mg/2,5 ml sol p inhal p nébulis",
posologie: "2,5 à 5mg", 
reconstitution: "", 
dilution: "", 
administration:"aérosol", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/ventoline-2-5-mg-2-5-ml-sol-p-inhal-p-nebulis-en-recipient-unidose-17379.html",
},

{ 
isShown:false, 
title: "Dantrolene (Dantrium®)", 
AMM:"", 
indication: "HTM", 
classeMed: "Myorelaxant", 
voieAdmin: "IV",       
presentation: "DANTROLENE SODIQUE 20 mg pdre p sol inj",
posologie: "2,5 mg/kg", 
reconstitution: "utiliser de l'EPPI", 
dilution: "1 ampoule dans 60 mL d'EPPI", 
administration:"IVL", 
remarques:"Après reconstitution, conserver à l'abri de la lumière et utiliser dans les 6h",
lien: "https://www.vidal.fr/medicaments/dantrium-intraveineux-lyoph-p-us-parenter-4780.html",
},

{ 
isShown:false, 
title: "Amiodarone (Cordarone®)", 
AMM:"", 
indication: "ACR", 
classeMed: "Anti-arythmique", 
voieAdmin: "IV",       
presentation: "CORDARONE 150 mg/3 ml sol inj en ampoule IV",
posologie: "5 mg/kg", 
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"Renouvelable après 5 minutes",
lien: "https://www.vidal.fr/medicaments/cordarone-150-mg-3-ml-sol-inj-en-ampoule-iv-4468.html",
},

{ 
isShown:false, 
title: "Adrenaline", 
AMM:"", 
indication: "ACR",
indication1: "Anaphylaxie", 
classeMed: "αβ-agoniste", 
voieAdmin: "IV",       
presentation: "ADRENALINE 1 mg/ml sol inj",
posologie: "ACR 10 µg/kg, Anaphylaxie 1 µg/kg", 
reconstitution: "", 
dilution: "", 
administration:"IVD", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/adrenaline-1356.html",
},

{ 
isShown:false, 
title: "Noradrenaline", 
AMM:"", 
indication: "Vasoplégie", 
classeMed: "α-agoniste", 
voieAdmin: "IV",       
presentation: "NorAdrenaline ",
posologie: "Protocole (cf. Urgences)", 
reconstitution: "", 
dilution: "", 
administration:"IVSE", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/noradrenaline-7019.html",
},

{ 
isShown:false, 
title: "Voriconazole (Vfend®)", 
AMM:"", 
indication: "Antifongique", 
classeMed: "Azolés ", 
voieAdmin: "IV",       
presentation: "VORICONAZOLE 200 mg pdre p sol p perf",
posologie: "2 à 12 ans et < 50 kg : 18 mg/kg/j à J1 puis 16 mg/kg/j. Après 12 ans et > 50 kg, 12 mg/kg/j à J1 puis 8 mg/kg/j. En 2 prises.", 
reconstitution: "EPPI ou NaCl 0,9%, 19 mL pour obtenir 10 mg/mL.", 
dilution: "G5% ou NaCl 0,9%, 0,5 à 5 mg/mL.", 
administration:"IVL en 1 à 3h, sans dépasser 3 mg/kg/h.", 
remarques:"Risque d'accumulation de l'excipient chez l'insuffisant rénal : préférer la forme orale chaque fois que possible. Incompatible avec la nutrition parentérale et les bicarbonates.",
lien: "https://www.vidal.fr/medicaments/substances/voriconazole-21915.html",
},


{  
isShown: false, 
title: "Aciclovir (Zovirax®)", 
AMM: "",
indication: "Antiviral", 
classeMed: "Anti-HHV", 
voieAdmin: "IV", 
presentation: "ZOVIRAX 250 mg pdre p sol inj IV", 
posologie: "30 à 60 mg/kg/j en 3 prises.", 
reconstitution: "avec EPPI ou NaCl 0,9%, 25 mg/mL.", 
dilution: "NaCl 0,9%, max. 7 mg/mL sur VVP, 25 mg/mL sur VVC.", 
administration:"IVL sur 60 minutes.", 
remarques:"Incompatible avec la nutrition parentérale et la ceftazidime.",
lien: "https://www.vidal.fr/medicaments/gammes/aciclovir-mylan-40986.html",
},
{ 
isShown: false,
title: "Amikacine (Amiklin®)",
AMM: "",
indication: "Antibiothérapie", 
classeMed: "Aminoside", 
voieAdmin: "IV", 
presentation: "Amikacine 2,5 à 10 mg/mL sol p perf",
posologie: "15 à 30 mg/kg/j en 1 prise.", 
reconstitution: "", 
dilution: "si besoin, avec EPPI, 125 mg/mL.", 
administration:"IV en 30 minutes.", 
remarques:"Objectif : pic 60 à 80 mg/L ; résiduelle inférieure à 4 mg/L. Utiliser une ligne dédiée, ne pas mélanger avec béta-lactamines, héparines, dexaméthasone.",
lien: "https://www.vidal.fr/medicaments/substances/amikacine-6676.html",
},

{ 
isShown: false,
title: "Amoxicilline (Clamoxyl®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "β-lactamine", 
voieAdmin: "IV",       
presentation: "",
posologie: "100 à 200 mg/kg/j en 3 à 4 prises.", 
reconstitution: "Avec EPPI, 50 mg/mL.", 
dilution: "NaCl 0,9% (stable 6h) ou G5% (stable 1h), sans dépasser 100 mg/mL", 
administration:"IVL en 30 à 60 minutes.", 
remarques:"Ne pas mélanger avec les aminosides. Compatible en Y avec la nutrition parentérale.",
lien: "https://www.vidal.fr/medicaments/substances/amoxicilline-310.html",
},

{ 
isShown:false, 
title: "Amoxicilline + Acide Clavulanique (Augmentin®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "β-lactamine", 
voieAdmin: "IV",       
presentation: "",
posologie: "Avant 3 mois ou 4kg, 100 mg/kg/j en 2 prises. > 3 mois mais < 40 kg, 150 mg/kg/j en 3 prises. Ensuite, posologies adulte.", 
reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", dilution: "NaCl 0,9% (stable 1h) ou G5% (stable 30 minutes).", 
administration:"IVL en 30 à 40 minutes. Jamais en moins de 5 minutes avant 3 mois.", 
remarques:"Attention, posologies et concentrations exprimées en Amoxicilline, veiller à ne pas dépasser la dose d'acide clavulanique maximale de 20 mg/kg/j. Incompatible avec les aminosides. Compatible en Y avec l'alimentation parentérale.",
lien: "https://www.vidal.fr/medicaments/gammes/augmentin-784.html", 
},

{ 
isShown:false, 
title: "Amoxicilline + Acide Clavulanique (Augmentin®) prophylactique", 
AMM:"", 
indication: "Antibioprohylaxie", 
classeMed: "β-lactamine", 
voieAdmin: "IV",       
presentation: "",
posologie: "50 mg/kg, sans dépasser 2g",  
remarques:"Réinjection toutes les 2h, 25 mg/kg",
lien: "https://www.vidal.fr/medicaments/gammes/augmentin-784.html", 
},

{ 
isShown:false, 
title: "Cefazoline prophylactique", 
AMM:"", 
indication: "Antibioprohylaxie", 
classeMed: "β-lactamine (C2G)", 
voieAdmin: "IV",       
presentation: "",
posologie: "50 mg/kg, sans dépasser 2g",  
remarques:"Réinjection toutes les 4h, 25 mg/kg",
lien: "https://www.vidal.fr/medicaments/substances/cefazoline-856.html", 
},

{ 
isShown:false, 
title: "Cefamandole prophylactique", 
AMM:"", 
indication: "Antibioprohylaxie", 
classeMed: "β-lactamine (C2G)", 
voieAdmin: "IV",       
presentation: "",
posologie: "40 mg/kg, sans dépasser 2g",  
remarques:"Réinjection toutes les 2h, 20 mg/kg",
lien: "https://www.vidal.fr/medicaments/substances/cefamandole-853.html", 
},

{ 
isShown:false, 
title: "Clindamycine prophylactique", 
AMM:"", 
indication: "Antibioprohylaxie", 
classeMed: "Lincosamide", 
voieAdmin: "SE sur 30 minutes",       
presentation: "",
posologie: "15 mg/kg, sans dépasser 600mg",  
remarques:"Réinjection toutes les 4h, 15 mg/kg",
lien: "https://www.vidal.fr/medicaments/substances/clindamycine-6742.html", 
},

{ 
isShown:false, 
title: "Gentamicine prophylactique", 
AMM:"", 
indication: "Antibioprohylaxie", 
classeMed: "Aminoside", 
voieAdmin: "SE sur 30 minutes",       
presentation: "",
posologie: "3 mg/kg, sans dépasser 160mg",  
remarques:"Pas de réinjection",
lien: "https://www.vidal.fr/medicaments/substances/gentamicine-1610.html", 
},

{ 
isShown:false, 
title: "Metronidazole prophylactique", 
AMM:"", 
indication: "Antibioprohylaxie", 
classeMed: "Nitro-5-imidazolé", 
voieAdmin: "SE sur 30 minutes",       
presentation: "",
posologie: "20 mg/kg, sans dépasser 1g",  
remarques:"Réinjection toutes les 8h, 10 mg/kg",
lien: "https://www.vidal.fr/medicaments/substances/metronidazole-2370.html", 
},

{ 
isShown:false, 
title: "Vancomycine prophylactique", 
AMM:"", 
indication: "Antibioprohylaxie", 
classeMed: "Glycopeptide", 
voieAdmin: "SE sur 1 heure",       
presentation: "",
posologie: "15 mg/kg, sans dépasser 2g",  
remarques:"Réinjection toutes les 12h, 15mg/kg. Surveiller les dosages.",
lien: "https://www.vidal.fr/medicaments/substances/vancomycine-6898.html", 
},

{ 
isShown:false, 
title: "Amphotéricine B liposomale (Ambisome®, Fungizone®)", 
AMM:"", 
indication: "Antifongique", 
classeMed: "Antiparasitaire", 
voieAdmin: "IV",       
presentation: "AMPHOTERICINE B (liposomale) 50 mg pdre p dispers p perf",
posologie: "3 mg/kg/j en 1 prise.", 
reconstitution: "Flacon de 50 mg avec 12 mL d'EPPI pour obtenir une solution-mère à 4 mg/mL.", 
dilution: "Dans du G5% - jamais dans du NaCl 0,9%. Entre 0,2 et 2 mg/mL. Utiliser le filtre de 5 µm pour mettre la solution reconstituée dans le G5% de dilution.", 
administration:"IV en 30 à 60 minutes.", 
remarques:"Filtre à 5 µm livré dans l'emballage, à utiliser pour rettenir d'éventuels agglomérats de liposomes qui se seraient formés pendant la reconstitution, en cas d'agitation insuffisante. Attention, incompatible avec le NaCl, les électrolytes et la nutrition parentérale.",
lien: "https://www.vidal.fr/medicaments/substances/amphotericine-b-314.html",
},


{       
isShown:false, 
title: "Caspofungine (Cancidas®)", 
AMM:"", 
indication: "Antifongique", 
classeMed: "Échinocandines", 
voieAdmin: "IV",       
presentation: "CASPOFUNGINE (acétate) 50 mg pdre p sol diluer p perf ",
posologie: "70 mg/m²/j à J1, puis 50 mg/m²/j, en 1 prise.", 
reconstitution: "Flacon de 50 mg avec 10,5 mL d'EPPI pour obtenir une solution mère à 5,2 mg/mL ou flacon de 70 mg avec 10,5 mL d'EPPI pour obtenir une solution-mère à 7,6 mg/mL.", 
dilution: "NaCl 0,9% (jamais dans du G5%). Max 0,5 mg/mL. Utiliser pur non dilué si restriction hydrique et VVC.", 
administration:"IVL en 60 minutes", 
remarques:"Incompatible avec le glucose, la nutrition parentérale et l'héparine.",
lien: "https://www.vidal.fr/medicaments/substances/caspofungine-21849.html",
},

{ 
isShown:false, 
title: "Cefamandole", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "C2G", 
voieAdmin: "IV",       
presentation: "CEFAMANDOLE (nafate) 750 mg pdre p sol inj",
posologie: "150 mg/kg/j en 3 à 6 prises, max. 6 g/j", 
reconstitution: "Flacon de 750 mg avec 10 mL d'EPPI, de G5% ou de NaCl 0,9%.", 
dilution: "Si besoin dans EPPI, NaCl 0,9% ou G5%, pas de concentration cible.", 
administration:"IVL en 30 minutes.", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/cefamandole-853.html",
},

{ 
isShown:false, 
title: "Cefepime (Axepim®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "C4G", 
voieAdmin: "IV",       
presentation: "CEFEPIME (chlorhydrate) 500 mg pdre p sol inj",
posologie: "150 mg/kg/j en 3 prises, max 6 g/j", 
reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 à 200 mg/mL.", 
dilution: "Dans G5% ou NaCl 0,9%.", 
administration:"IVL en 30 minutes. ", 
remarques:"",
lien: "https://www.vidal.fr/medicaments/substances/cefepime-6916.html",
},

{ 
isShown:false, 
title: "Cefotaxime (Claforan®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "C3G", 
voieAdmin: "IV",       
presentation: "CEFOTAXIME (sel de na) 500 mg pdre p sol inj",
posologie: "100 à 200 mg/kg/j, 300 mg/kg/j dans les infections méningées, en 3 à 4 prises, sans dépasser 24g/j.", 
reconstitution: "EPPI 10 mL.", 
dilution: "G5% ou NaCl 0,9%, 10 à 50 mg/mL, ne pas dépasser 150 mg/mL pour l'administration IV.", 
administration:"IVL en 20 à 60 minutes.", 
remarques:"Risque d'arythmie cardiaque en cas d'administration intraveineuse rapide sur cathéter veineux central.",
lien: "https://www.vidal.fr/medicaments/substances/cefotaxime-861.html",
},

{ 
isShown:false, 
title: "Ceftazidime (Fortum®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "C4G", 
voieAdmin: "IV",       
presentation: "CEFTAZIDIME 250 mg pdre p sol inj",
posologie: "50 à 200 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", 
reconstitution: "G5% ou NaCl 0,9%, 10mL.", 
dilution: "G5% ou NaCl 0,9%, stable 18h si concentration < 40 mg/mL, ne pas dépasser 180 mg/mL de concentration en cas de restriction hydrique.", 
administration:"IVL sur 30 minutes ou IVSE continue.", 
remarques:"Incompatible avec le bicarbonate, l'aciclovir et le ganciclovir.",
lien: "https://www.vidal.fr/medicaments/gammes/fortum-3888.html",
},

{ 
isShown:false, 
title: "Ceftriaxone (Rocéphine®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "C3G", 
voieAdmin: "IV",       
presentation: "CEFTRIAXONE (sodique) 1 g/10 ml pdre/solv p sol inj ",
posologie: "50 à 100 mg/kg/j en 1 prise, sans dépasser 4g/j.", 
reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 mg/mL.", 
dilution: "G5% ou NaCl 0,9%, 10 à 40 mg/mL.", 
administration:"IVL sur 30 minutes.", 
remarques:"Incompatible avec le calcium, la vancomycine, le fluconazole, les aminosides, la nutrition parentérale. Contre indiqué avant 28j et en cas d'administration de calcium IV associée. Coloration jaune normale.",
lien: "https://www.vidal.fr/medicaments/gammes/rocephine-8900.html", 
},

{ 
isShown:false, 
title: "Ciprofloxacine (Ciflox®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Fluoroquinolones", 
voieAdmin: "IV",       
presentation: "CIPROFLOXACINE (sulfate) 2 mg/ml sol p perf",
posologie: "20 à 30 mg/kg/j - 45 mg/kg/j chez le drépanocytaire - en 2 à 3 prises, sans dépasser 1,2 g/j.", 
reconstitution: "", 
dilution: "", 
administration:"IVL sur 60 minutes.", 
remarques:"Incompatible avec la nutrition parentérale, les pénicillines, les héparines, les solutions alcalines. Privilégier la voie orale : la biodisponibilité est identique.",
lien: "https://www.vidal.fr/medicaments/gammes/ciflox-1909.html",
},

{ 
isShown:false, 
title: "Clindamycine (Dalacine®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Lincosamide", 
voieAdmin: "IV",       
presentation: "CLINDAMYCINE (phosphate) 600 mg/4 ml sol inj",
posologie: "30 à 40 mg/kg/j en 3 à 4 prises, sans dépasser 2,4 g/j.", 
reconstitution: "NA.", 
dilution: "G5% ou NaCl 0,9%, max. 18 mg/mL.", 
administration:"IVL en 30 minutes, ne pas dépasser 20 mg/kg/h ou 30 mg/min.", 
remarques:"Incompatible avec l'ampicilline, la phénytoïne, les barbituriques, l'aminophylline, le calcium, le magnésium, la ceftriaxone, la ciprofloxacine et la ranitidine.",
lien: "https://www.vidal.fr/medicaments/gammes/dalacine-2500.html",
},

{ 
isShown:false, 
title: "Cloxacilline (Orbénine®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "β-lactamine", 
voieAdmin: "IV",       
presentation: "CLOXACILLINE (sodique) 1 g pdre p sol inj",
posologie: "100 à 200 mg/kg/j en 4 à 6 prises, max. 12 g/j.", 
reconstitution: "EPPI, G5% ou NaCl 0,9%, 1g dans 16 mL.", 
dilution: "G5% ou NaCl 0,9%, 10 mg/mL.", 
administration:"IVL sur 60 minutes.", 
remarques:"Incompatible avec la nutrition parentérale.",
lien: "https://www.vidal.fr/medicaments/gammes/orbenine-7195.html",
},

{ 
isShown:false, 
title: "Fluconazole (Triflucan®)", 
AMM:"", 
indication: "Antifongiques", 
classeMed: "Azolés", 
voieAdmin: "IV",       
presentation: "FLUCONAZOLE 2 mg/ml sol p perf",
posologie: "3 à 12 mg/kg/j en 1 prise.", 
reconstitution: "", 
dilution: "", 
administration:"IVL en 30 minutes, 120 minutes si > 6 mg/kg/j.", 
remarques:"Inhibiteur enzymatique. Teneur en sodium significative à 0,155 mEq/mL.",
lien: "https://www.vidal.fr/medicaments/gammes/triflucan-10578.html", 
},

{ 
isShown:false, 
title: "Fosfomycine (Fosfocine®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Antibactérien", 
voieAdmin: "IV",       
presentation: "FOSFOMYCINE (disodique) 1 g pdre p sol p perf ",
posologie: "100 à 200 mg/kg/j en 2 à 4 prises, sans dépasser 16 g/j.", 
reconstitution: "1g avec 10 mL d'EPPI. 4g avec 15 mL d'EPPI.", 
dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", 
administration:"IVL en 60 minutes.", 
remarques:"Apports en sodium significatifs à 14,3 mEq/g.",
lien: "https://www.vidal.fr/medicaments/substances/fosfomycine-1547.html", 
},

{ 
isShown:false, 
title: "Gentamicine (Gentalline®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Aminoside", 
voieAdmin: "IV",       
presentation: "GENTAMICINE (sulfate) 40 mg/2 ml sol inj",
posologie: "5 à 8 mg/kg/j en 1 prise.", 
reconstitution: "NA.", 
dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", 
administration:"IVL en 30 minutes.", 
remarques:"Objectifs : pic 60 à 80 mg/L, résiduelle inférieure à 1 mg/L. Incompatible avec les pénicillines et les héparines > 1 UI/mL.",
lien: "https://www.vidal.fr/medicaments/substances/gentamicine-1610.html",
},

{ 
isShown:false, 
title: "Imipeneme-Cilastine (Tienam®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "β-lactamine", 
voieAdmin: "IV",       
presentation: "CILASTATINE (sodique) 500 mg + IMIPENEM 500 mg pdre p sol p perf",
posologie: "60 à 100 mg/kg/j en 4 prises sans dépasser 4 g/j.", 
reconstitution: "G5% ou NaCl 0,9%, 25 mg/mL.", 
dilution: "G5% ou NaCl 0,9%, 5 mg/mL, max. 7 mg/mL si restriction hydrique, stable 4h.", 
administration:"IVL en 30 minutes, 60 minutes au delà de 500 mg.",
remarques:"Posologies et concentrations exprimées en dose d'Imipénème. Contre indique chez l'insuffisant rénale. Compatible avec la nutrition parentérale.",
lien: "https://www.vidal.fr/medicaments/gammes/tienam-10335.html", 
},

{ 
isShown:false, 
title: "Lévofloxacine (Tavanic®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Fluoroquinolones", 
voieAdmin: "IV",       
presentation: "LEVOFLOXACINE 5 mg/ml sol p perf ",
posologie: "20 mg/kg/j de 6 mois à 5 ans, en 2 prises. 10 mg/kg/j au delà de 5 ans, en 1 prise, sans dépasser 1g/j.",
reconstitution: "", 
dilution: "", 
administration:"IVL en 60 minutes.", 
remarques:"Incompatible avec les bicarbonates et les héparines. Privilégier la voie orale : la biodisponibilité est identique.",
lien: "https://www.vidal.fr/medicaments/gammes/tavanic-17333.html",
},

{ 
isShown:false, 
title: "Meropeneme (Meronem®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "β-lactamine", 
voieAdmin: "IV",       
presentation: "MEROPENEM 1 g pdre p sol inj/p perf ",
posologie: "60 à 120 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", 
reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", 
dilution: "NaCl 0,9% (stable 8h) ou G5% (stable 2h), 1 à 20 mg/mL.", 
administration:"IVL en 30 minutes.", 
remarques:"Compatible avec la nutrition parentérale.",
lien: "https://www.vidal.fr/medicaments/meronem-1-g-pdre-p-sol-inj-p-perf-10764.html",
},

{ 
isShown:false, 
title: "Métronidazole (Flagyl®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Imidazolés", 
voieAdmin: "IV",       
presentation: "METRONIDAZOLE 0,5 % sol p perf",
posologie: "30 mg/kg/j en 3 à 4 prises, sans dépasser 4 g/j.", 
reconstitution: "NA.", 
dilution: "NA.", 
administration:"IVL en 30 minutes.", 
remarques:"Compatible avec la nutrition parentérale.",
lien: "https://www.vidal.fr/medicaments/gammes/flagyl-3734.html", 
},

{ 
isShown:false, 
title: "Pipéracilline-Tazobactam (Tazocilline®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "β-lactamine", 
voieAdmin: "IV",       
presentation: "PIPERACILLINE (sodique) 2 g + TAZOBACTAM (sodique) 250 mg pdre p sol inj",
posologie: "300 mg/kg/j, en 3 à 4 prises ou en continu, sans dépasser 16 g/j.", 
reconstitution: "EPPI, G5% ou NaCl 0,9%, 200 mg/mL.", 
dilution: "G5 ou NaCl 0,9%, 20 à 80 mg/mL, stable 24h.", 
administration:"IVL en 30 minutes.", 
remarques:"Posologies et concentrations exprimées en pipéracilline. Incompatible avec les aminosides et les bicarbonates. Compatible avec la nutrition parentérale.",
lien: "https://www.vidal.fr/medicaments/tazocilline-2-g-0-25-g-pdre-p-sol-p-perf-127614.html",
},

{ 
isShown:false, 
title: "Rifampicine (Rifadine®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Anti-tuberculeux", 
voieAdmin: "IV",       
presentation: "RIFAMPICINE (sel de na) 600 mg/10 ml pdre/solv p sol diluer p perf",
posologie: "10 à 30 mg/kg/j en 1 prise (tuberculose) ou 2 prises (autres indications), sans dépasser 1,2 g/j.", 
reconstitution: "EPPI 60 mg/mL.", 
dilution: "G5% ou NaCl 0,9%, usuel 2,4 mg/mL, ne pas dépasser 6 mg/mL, stable 6h.", 
administration:"IVL en 30 minutes.", 
remarques:"Incompatible avec la nutrition parentérale. Très agressif en cas d'extravasation. Inducteur enzymatique.",
lien: "https://www.vidal.fr/medicaments/gammes/rifadine-8827.html",
},

{ 
isShown:false, 
title: "Ticarcilline-Acide Clavulanique (Claventin®, Timentin®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "β-lactamine", 
voieAdmin: "IV",       
presentation: "TIMENTIN 3,2 g pdre p sol inj",
posologie: "225 à 300 mg/kg/j en 3 à 4 prises, sans dépasser 18 g/j.", 
reconstitution: "EPPI ou NaCl 0,9%.", 
dilution: "G5% ou NaCl 0,9%, 30 à 50 mg/mL, stable 6h.", 
administration:"IVL sur 30 minutes.", 
remarques:"Posologies et concentrations exprimées en ticarcilline. Max 5 mg/kg/prise et 20 mg/kg/j d'acide clavulanique. Incompatible avec les aminosideS, bicarbonates et la nutrition parentérale. Teneur en sodium 5,2 mEq/g et teneur en potassium 0,33 mEq/g. ",
lien: "https://www.vidal.fr/medicaments/substances/ticarcilline-3998.html",
},

{ 
isShown:false, 
title: "Triméthoprime-Sulfaméthoxazole (Bactrim®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Sulfamide", 
voieAdmin: "IV",       
presentation: "SULFAMETHOXAZOLE 400 mg/5 ml + TRIMETHOPRIME 80 mg/5 ml sol diluer p perf",
posologie: "30 à 60 mg/kg/j en 2 prises (curatif pneumocystis carinii : 100 mg/kg/j en 3 prises).", 
reconstitution: "", 
dilution: "G5% ou NaCl 0,9% 3,2 mg/mL (stable 6h), max. 8 mg/mL si restriction hydrique (stable 1h).", 
administration:"IVL sur 60 minutes.", 
remarques:"Posologies et concentrations exprimées en Sulfaméthoxazole. Peut être administré pur sur VVC. Incompatible avec la nutrition parentérale.",
lien: "https://www.vidal.fr/medicaments/gammes/bactrim-897.html",
},

{ 
isShown:false, 
title: "Vancomycine (Vancocine®)", 
AMM:"", 
indication: "Antibiothérapie", 
classeMed: "Glycopeptide", 
voieAdmin: "IV",       
presentation: "VANCOMYCINE (chlorhydrate) 250 mg pdre p sol diluer p perf ",
posologie: "40 à 60 mg/kg/j en 4 prises ou en continu.", 
reconstitution: "EPPI 50 mg/mL.", 
dilution: "G5% ou NaCl 0,9%, ne pas dépasser 10 mg/mL, stable 24h.", 
administration:"IVL en 60 minutes ou IVSE.", 
remarques:"Objectif : T0 20-25 mg/mL. Ralentir la perfusion en cas de réaction cutanée (Redman Syndrome). Compatible avec la nutrition parentérale, les lipides IV et l'héparine < 1 UI/mL.",
lien: "https://www.vidal.fr/medicaments/substances/vancomycine-6898.html", 
},

];

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

this.chirurgie = [

{
isShown: false, 
intitule: "Dilatation anale",
specialite : "Chir. proctologique",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Métronidazole",
posologieATB1 : "20 mg/kg", 
posologieNumATB1 : 20, 
administrationATB1 : "IVL",
doseMaxATB1 : 1000,
delaiReinjectionATB1 : "8 heures",
posologiereinjectionATB1 : "",
posologiereinjectionNumATB1 : 10,
doseMaxReinjectionATB1 : 500, 
}, 

{
isShown: false, 
intitule: "Fistule anale",
specialite : "Chir. proctologique",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Métronidazole",
posologieATB1 : "20 mg/kg", 
posologieNumATB1 : 20, 
administrationATB1 : "IVL",
doseMaxATB1 : 1000,
delaiReinjectionATB1 : "8 heures",
posologiereinjectionATB1 : "",
posologiereinjectionNumATB1 : 10,
doseMaxReinjectionATB1 : 500, 
},  

{
isShown: false, 
intitule: "Biopsie rectale",
specialite : "Chir. proctologique",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Métronidazole",
posologieATB1 : "20 mg/kg", 
posologieNumATB1 : 20, 
administrationATB1 : "IVL",
doseMaxATB1 : 1000,
delaiReinjectionATB1 : "8 heures",
posologiereinjectionATB1 : "",
posologiereinjectionNumATB1 : 10,
doseMaxReinjectionATB1 : 500, 
},  

{
isShown: false, 
intitule: "Fermeture de stomie",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Abaissement colique",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Colostomie",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Colectomie",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Iléostomie",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Jéjunostomie",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Résection de grêle",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Anastomose bilio-digestive",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Pancréatectomie céphalique",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Oeso-coloplastie",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Pancréatectomie caudale",
specialite : "Viscerale",
classeConta : "Propre",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Kyste du cholédoque",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Cholecystectomie",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Pose de prothese biliaire",
specialite : "Endoscopie interventionnelle",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Endoscopie des voies biliaires",
specialite : "Endoscopie interventionnelle",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Gastrostomie chirurgicale",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Duplication oesophagienne",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Appendicectomie simple",
specialite : "Viscerale",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},  

{
isShown: false, 
intitule: "Splénectomie",
specialite : "Viscerale",
classeConta : "Propre",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 
},  

{
isShown: false, 
intitule: "Hernie inguinale",
specialite : "Viscerale",
classeConta : "Propre",
VoieATB : "IV",  
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Hernie ombilicale",
specialite : "Viscerale",
classeConta : "Propre",
VoieATB : "IV",  
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Eventration",
specialite : "Viscerale",
classeConta : "Propre",
VoieATB : "IV",  
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Coelioscopie exploratrice",
specialite : "Viscerale",
classeConta : "Propre",
VoieATB : "IV",  
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Nissen",
specialite : "Viscerale",
classeConta : "Propre",
VoieATB : "IV",  
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Sténose du pylore",
specialite : "Viscerale",
classeConta : "Propre",
VoieATB : "IV",  
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Fibroscopie OGD",
specialite : "Endoscopie diagnostique",
classeConta : "Propre",
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Coloscopie",
specialite : "Endoscopie diagnostique",
classeConta : "Propre",
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Pose de prothese digestive",
specialite : "Endoscopie interventionnelle",
classeConta : "Propre",
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Ligature de varices oesophagiennes hémorragiques",
specialite : "Endoscopie interventionnelle",
classeConta : "Contaminée",
VoieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},

{
isShown: false, 
intitule: "Sclérose de varices oesophagiennes",
specialite : "Endoscopie interventionnelle",
classeConta : "Contaminée",
VoieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},

{
isShown: false, 
intitule: "Gastrostomie endoscopique",
specialite : "Endoscopie interventionnelle",
classeConta : "Contaminée",
VoieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0, 
},

{
isShown: false, 
intitule: "Ophtalmologie",
specialite : "Ophtalmologie",
classeConta : "Propre",
recommandation : "Non recommandée",
},

{
isShown: false, 
intitule: "Ophtalmologie - patient immunodéprimé",
specialite : "Ophtalmologie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefuroxime",
administrationATB1 : "Intra-oculaire",
},

{
isShown: false, 
intitule: "Ophtalmologie - patient diabétique",
specialite : "Ophtalmologie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefuroxime",
administrationATB1 : "Intra-oculaire",
},

{
isShown: false, 
intitule: "Ophtalmologie - implantation secondaire",
specialite : "Ophtalmologie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefuroxime",
administrationATB1 : "Intra-oculaire",
},

{
isShown: false, 
intitule: "Reprise endo-oculaire < 1 mois",
specialite : "Ophtalmologie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefuroxime",
administrationATB1 : "Intra-oculaire",
},

{
isShown: false, 
intitule: "Cataracte avec ouverture capsulaire",
specialite : "Ophtalmologie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefuroxime",
administrationATB1 : "Intra-oculaire",
},

{
isShown: false, 
intitule: "Effraction capsulaire",
specialite : "Ophtalmologie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefuroxime",
administrationATB1 : "Intra-oculaire",
},

{
isShown: false, 
intitule: "Kyste de l'ovaire",
specialite : "Gynécologique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Coelioscopie exploratrice",
specialite : "Gynécologique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Amygdalectomie",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Adénoidectomie (VG)",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Aérateurs trans-tympaniques (ATT, yoyo)",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Chirurgie vélo-palatine",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Cervicotomie",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Curage ganglionnaire cervical",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Thyroïdectomie",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Trachéotomie",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Oreille moyenne - hors infection",
specialite : "ORL",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Avulsion dentaire - hors infection",
specialite : "Stomatologie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Chirurgie cervico-faciale sans ouverture bucco-pharyngée",
specialite : "Stomatologie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Chirurgie des glandes salivaires",
specialite : "Stomatologie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Torsion d'annexe",
specialite : "Gynécologique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Cryopréservation ovarienne",
specialite : "Gynécologique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Génitoplastie",
specialite : "Gynécologique",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
presentationATB1 : "500 mg, 1g ou 2g", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Chirurgie naso-sinusienne avec méchage",
specialite : "ORL",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Avulsion de dent en désinclusion",
specialite : "Stomatologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Nagata + greffe osseuse",
specialite : "ORL",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Implant cochléaire",
specialite : "Stomatologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Chirurgie maxillo-faciale avec ouverture bucco-pharyngée",
specialite : "Stomatologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Parties molles non infectées",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Ablation de matériel orthopédique",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Arthroscopie diagnostique",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Fracture fermée avec ostéosynthèse extra-focale",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Geste osseux",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Mise en place de matériel",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Ligamentoplastie",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Fracture fermée avec ostéosynthèse intra-focale",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Prothese articulaire",
specialite : "Orthopédie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Fracture ouverte Cauchoix 1",
specialite : "Orthopédie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Plaie des parties molles non souillée",
specialite : "Orthopédie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Plaie articulaire non souillée",
specialite : "Orthopédie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Fracture ouverte Cauchoix 2 ou 3",
specialite : "Orthopédie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Plaie des parties molles contuse ou souillée",
specialite : "Orthopédie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Plaie articulaire contuse ou souillée",
specialite : "Orthopédie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Naevus",
specialite : "Plastique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Enchondrome",
specialite : "Plastique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Kyste sébacé",
specialite : "Plastique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Chirurgie de la levre",
specialite : "Plastique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Greffe maxillaire",
specialite : "Plastique",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  
},

{
isShown: false, 
intitule: "Plastie cutanée",
specialite : "Plastique",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  
},

{
isShown: false, 
intitule: "Ablation de prothese",
specialite : "Plastique",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Augmentin",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  
},

{
isShown: false, 
intitule: "Rhinoplastie",
specialite : "Plastique",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  
},

{
isShown: false, 
intitule: "Pose de prothese d'expansion",
specialite : "Plastique",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  
},

{
isShown: false, 
intitule: "Chirurgie nasale avec greffe cartilagineuse",
specialite : "Plastique",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  
},

{
isShown: false, 
intitule: "Médiastinoscopie",
specialite : "Thoracique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Vidéothoracoscopie",
specialite : "Thoracique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Drainage thoracique",
specialite : "Thoracique",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Chirurgie médiastinale",
specialite : "Thoracique",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Décortication pleurale",
specialite : "Thoracique",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Résection pleurale",
specialite : "Thoracique",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Exerese pulmonaire",
specialite : "Thoracique",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",


ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Clindamycine",
posologieATBAllergie1 : "15 mg/kg", 
posologieNumATBAllergie1: 15,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 600,
delaiReinjectionATBAllergie1 : "4 heures",
posologiereinjectionATBAllergie1 : "15 mg/kg",
posologiereinjectionNumATBAllergie1 : 15,
doseMaxReinjectionATBAllergie1 : 600,  

ATBAllergie2 : "Gentamicine",
posologieATBAllergie2 : "3 mg/kg", 
posologieNumATBAllergie2: 3,
administrationATBAllergie2 : "SE/30 min",
doseMaxATBAllergie2 : 160,
delaiReinjectionATBAllergie2 : "Pas de réinjection",
posologiereinjectionATBAllergie2 : "",
posologiereinjectionNumATBAllergie2 : 0,
doseMaxReinjectionATBAllergie2 : 0,
},

{
isShown: false, 
intitule: "Ectopie",
specialite : "Urologie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Hydrocele",
specialite : "Urologie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Posthectomie",
specialite : "Urologie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Nephrectomie",
specialite : "Urologie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Cryopréservation testiculaire",
specialite : "Urologie",
classeConta : "Propre",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Uréthro-cystoscopie simple",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Valves de l'urethre posterieur",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Non recommandée",
remarque : "",
},

{
isShown: false, 
intitule: "Néphrolithotomie percutanée",
specialite : "Urologie",
classeConta : "Propre",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,
},

{
isShown: false, 
intitule: "Urétroscopie",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,
},

{
isShown: false, 
intitule: "Montée de sonde urétérale",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,
},

{
isShown: false, 
intitule: "Traitement des lithiases rénale ou urétérales",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,
},

{
isShown: false, 
intitule: "Pyéloplastie",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,
},

{
isShown: false, 
intitule: "Geste anti reflux vésico-urétéral",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,
},

{
isShown: false, 
intitule: "Hypospade",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,
},

{
isShown: false, 
intitule: "Transplantation rénale (greffe)",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefuroxime",
posologieATB1 : "", 
posologieNumATB1 : 0, 
administrationATB1 : "IVL",
doseMaxATB1 : 0,
delaiReinjectionATB1 : "",
posologiereinjectionATB1 : "",
posologiereinjectionNumATB1 : 0,
doseMaxReinjectionATB1 : 0, 
},

{
isShown: false, 
intitule: "Bricker",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "10 mg/kg",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,

ATBAllergie2 : "Métronidazole",
posologieATBAllergie2 : "20 mg/kg", 
posologieNumATBAllergie2 : 20, 
administrationATBAllergie2 : "IVL",
doseMaxATBAllergie2 : 1000,
delaiReinjectionATBAllergie2 : "8 heures",
posologiereinjectionATBAllergie2 : "10 mg/kg",
posologiereinjectionNumATBAllergie2 : 10,
doseMaxReinjectionATBAllergie2 : 500, 
},

{
isShown: false, 
intitule: "Enterocystoplastie",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "10 mg/kg",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,

ATBAllergie2 : "Métronidazole",
posologieATBAllergie2 : "20 mg/kg", 
posologieNumATBAllergie2 : 20, 
administrationATBAllergie2 : "IVL",
doseMaxATBAllergie2 : 1000,
delaiReinjectionATBAllergie2 : "8 heures",
posologiereinjectionATBAllergie2 : "10 mg/kg",
posologiereinjectionNumATBAllergie2 : 10,
doseMaxReinjectionATBAllergie2 : 500, 
},

{
isShown: false, 
intitule: "Young Dees",
specialite : "Urologie",
classeConta : "Contaminée",
recommandation : "Recommandée",
remarque : "",

ATB1 : "Cefazoline",
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "4 heures",
posologiereinjectionATB1 : "25 mg/kg",
posologiereinjectionNumATB1 : 25,
doseMaxReinjectionATB1 : 1000, 

ATB2 : "Métronidazole",
posologieATB2 : "20 mg/kg", 
posologieNumATB2 : 20, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "8 heures",
posologiereinjectionATB2 : "10 mg/kg",
posologiereinjectionNumATB2 : 10,
doseMaxReinjectionATB2 : 500, 

ATBAllergie1 : "Gentamicine",
posologieATBAllergie1 : "3 mg/kg", 
posologieNumATBAllergie1: 3,
administrationATBAllergie1 : "SE/30 min",
doseMaxATBAllergie1 : 160,
delaiReinjectionATBAllergie1 : "Pas de réinjection",
posologiereinjectionATBAllergie1 : "",
posologiereinjectionNumATBAllergie1 : 0,
doseMaxReinjectionATBAllergie1 : 0,

ATBAllergie2 : "Métronidazole",
posologieATBAllergie2 : "20 mg/kg", 
posologieNumATBAllergie2 : 20, 
administrationATBAllergie2 : "IVL",
doseMaxATBAllergie2 : 1000,
delaiReinjectionATBAllergie2 : "8 heures",
posologiereinjectionATBAllergie2 : "10 mg/kg",
posologiereinjectionNumATBAllergie2 : 10,
doseMaxReinjectionATBAllergie2 : 500, 
},

{
isShown: false, 
intitule: "Laparoschisis",
specialite : "Viscerale néonatale première",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefotaxime",
presentationATB1 : "500 mg pdr inj", 
posologieATB1 : "100 mg/kg", 
posologieNumATB1 : 100, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "Réinjection selon bactériologie",


ATB2 : "Gentamicine",
posologieATB2 : "3 mg/kg", 
posologieNumATB2 : 3, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "Pas de réinjection",

ATB3 : "Métronidazole",
posologieATB3 : "20 mg/kg", 
posologieNumATB3 : 20, 
administrationATB3 : "IVL : si IMF ou ouverture du tube digestif",
doseMaxATB3 : 1000,
delaiReinjectionATB3 : "Réinjection selon bactériologie",
},  

{
isShown: false, 
intitule: "Omphalocele avec Schuster",
specialite : "Viscerale néonatale première",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Cefotaxime",
presentationATB1 : "500 mg pdr inj", 
posologieATB1 : "100 mg/kg", 
posologieNumATB1 : 100, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "Réinjection selon bactériologie",


ATB2 : "Gentamicine",
posologieATB2 : "3 mg/kg", 
posologieNumATB2 : 3, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "Pas de réinjection",

ATB3 : "Métronidazole",
posologieATB3 : "20 mg/kg", 
posologieNumATB3 : 20, 
administrationATB3 : "IVL : si IMF ou ouverture du tube digestif",
doseMaxATB3 : 1000,
delaiReinjectionATB3 : "Réinjection selon bactériologie",
},  

{
isShown: false, 
intitule: "Occlusion neonatale",
specialite : "Viscerale néonatale première",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Augmentin",
presentationATB1 : "500 mg pdr inj", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "Réinjection selon bactériologie",


ATB2 : "Gentamicine",
posologieATB2 : "3 mg/kg", 
posologieNumATB2 : 3, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "Pas de réinjection",

ATB3 : "Métronidazole",
posologieATB3 : "20 mg/kg", 
posologieNumATB3 : 20, 
administrationATB3 : "IVL : si suspicion IMF",
doseMaxATB3 : 1000,
delaiReinjectionATB3 : "Réinjection selon bactériologie",
},  

{
isShown: false, 
intitule: "Enterostomie",
specialite : "Viscerale néonatale première",
classeConta : "Contaminée",
voieATB : "IV",  
recommandation : "Recommandée",

ATB1 : "Augmentin",
presentationATB1 : "500 mg pdr inj", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "Réinjection selon bactériologie",


ATB2 : "Gentamicine",
posologieATB2 : "3 mg/kg", 
posologieNumATB2 : 3, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "Pas de réinjection",

ATB3 : "Métronidazole",
posologieATB3 : "20 mg/kg", 
posologieNumATB3 : 20, 
administrationATB3 : "IVL : si suspicion IMF",
doseMaxATB3 : 1000,
delaiReinjectionATB3 : "Réinjection selon bactériologie",
},  

{
isShown: false, 
intitule: "Hernie du cordon",
specialite : "Viscerale néonatale première",
classeConta : "Propre",
voieATB : "",  
recommandation : "Non recommandée",
},  

{
isShown: false, 
intitule: "Omphalocele sans Schuster",
specialite : "Viscerale néonatale première",
classeConta : "Propre",
voieATB : "",  
recommandation : "Non recommandée",
},  

{
isShown: false, 
intitule: "Hernie diaphragmatique",
specialite : "Viscerale néonatale différée",
classeConta : "Propre",
voieATB : "",  
recommandation : "Non recommandée",
},  

{
isShown: false, 
intitule: "Fermeture du canal artériel",
specialite : "Viscerale néonatale différée",
classeConta : "Propre",
voieATB : "",  
recommandation : "Non recommandée",
},  

{
isShown: false, 
intitule: "Hernie inguinale",
specialite : "Viscerale néonatale différée",
classeConta : "Propre",
voieATB : "",  
recommandation : "Non recommandée",
}, 

{
isShown: false, 
intitule: "Hernie de l'ovaire",
specialite : "Viscerale néonatale différée",
classeConta : "Propre",
voieATB : "",  
recommandation : "Non recommandée",
}, 

{
isShown: false, 
intitule: "Anoplastie",
specialite : "Viscerale néonatale",
classeConta : "Contaminée",
voieATB : "",  
recommandation : "Recommandée",

ATB1 : "Augmentin",
presentationATB1 : "500 mg pdr inj", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2h",
},  

{
isShown: false, 
intitule: "Transposition anale",
specialite : "Viscerale néonatale",
classeConta : "Contaminée",
voieATB : "",  
recommandation : "Recommandée",

ATB1 : "Augmentin",
presentationATB1 : "500 mg pdr inj", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "2h",
},  

{
isShown: false, 
intitule: "Fermeture de Schuster (omphalocele)",
specialite : "Viscerale néonatale",
classeConta : "Contaminée",
voieATB : "",  
recommandation : "Recommandée",


ATB1 : "Ceftazidime",
presentationATB1 : "250 mg pdr inj", 
posologieATB1 : "50 mg/kg", 
posologieNumATB1 : 50, 
administrationATB1 : "IVL sur 30 minutes",
doseMaxATB1 : 2000,
delaiReinjectionATB1 : "Selon résultats de bactériologie, toutes les 8h",

ATB2 : "Gentamicine",
posologieATB2 : "3 mg/kg", 
posologieNumATB2 : 3, 
administrationATB2 : "IVL",
doseMaxATB2 : 1000,
delaiReinjectionATB2 : "Pas de réinjection",

ATB3 : "Vancomycine",
posologieATB3 : "15 mg/kg", 
posologieNumATB3 : 20, 
administrationATB3 : "IVSE sur 1h",
doseMaxATB3 : 2000,
delaiReinjectionATB3 : "Réinjection selon bactériologie, toutes les 12h",
},  

];


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

this.pagesALR = [

  { 
    titre : "Anesthésie péridurale (APD)", 
    soustitre : "Pose de cathéter d'anesthésie péridurale lombaire ou thoracique",
    APD: true,  
    objectif1 : "analgésique", 
    page : PeriduralePage,
  },

  { 
    titre : "Bloc axillaire (BAX)", 
    soustitre : "Bloc du plexus brachial au creux axillaire" , 
    page : BlocAxillairePage,

    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL",
    posologieSSAG1texte : "0,5 mL/kg", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 

    objectif2: "anesthésique (adolescent seulement)",
    produitSSAN1: "Mépivacaïne 10 mg/mL", 
    posologieSSAN1texte : "0,3 mL/kg",
    posologieSSAN1 : 0.3, 
    produitSSAN2 : "", 
    posologieSSAN2 : "",
    },

  { 
    titre : "Bloc cutané latéral de cuisse (CLC)", 
    soustitre : "Bloc du nerf cutané latéral de cuisse" , 
    page :CutaneLateralCuissePage, 
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL",
    posologieSSAG1texte : "0,5 mL/kg",  
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
  },
  
  { 
    titre : "Bloc des grands droits" , 
    soustitre : "Bloc des muscles grands droits abdominaux" , 
    page : BlocGrandsDroitsPage,
    objectif1 : "analgésique (uni ou bilatéral)",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,3 mL/kg", 
    posologieSSAG1 : 0.3, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
  },

  { 
    titre : "Bloc du canal des adducteurs (FCA)", 
    soustitre : "Bloc du nerf fémoral au canal des adducteurs" , 
    page : BlocCanalAdducteursPage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,5 mL/kg", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
  
    objectif2: "anesthésique (adolescent seulement)",
    produitSSAN1: "Mépivacaïne 10 mg/mL", 
    posologieSSAN1texte : "0,3 mL/kg",
    posologieSSAN1 : 0.3, 
    produitSSAN2 : "", 
    posologieSSAN2 : "",
  },

  { 
    titre : "Bloc fémoral", 
    soustitre : "Bloc du nerf fémoral au triangle de Scarpa", 
    page : BlocFemoralPage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,5 mL/kg", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 

    objectif2: "anesthésique (adolescent seulement)",
    produitSSAN1: "Mépivacaïne 10 mg/mL", 
    posologieSSAN1texte : "0,3 mL/kg",
    posologieSSAN1 : 0.3, 
    produitSSAN2 : "", 
    posologieSSAN2 : "",
    },

  { 
    titre : "Bloc intercostobrachial", 
    soustitre : "Bloc des nerfs intercostobrachiaux ou cutané médial du bras et de l'avant-bras" , 
    page : BlocInterCostoBrachialPage,
    objectif1 : "analgésique en complément du bloc axillaire",
  },

  { 
    titre : "Bloc interscalénique (BIS)", 
    soustitre :"Bloc du plexus brachial au niveau interscalénique" , 
    page : BlocInterScaleniquePage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,4 mL/kg", 
    posologieSSAG1 : 0.4, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
  },

  { 
    titre : "Bloc maxillaire (V-2)" , 
    soustitre : "Bloc de la branche maxillaire (2) du nerf trijumeau", 
    page : BlocMaxillairePage,
    objectif1 : "analgésique (bilatéral)",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,3 mL/kg/côté", 
    posologieSSAG1 : 0.3, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
   },

  { 
    titre : "Bloc obturateur", 
    soustitre : "Bloc du nerf obturateur", 
    page : BlocNerfObturateurPage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,5 mL/kg", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
   },

  { 
    titre : "Bloc pénien" , 
    soustitre : "Bloc des nerfs péniens" , 
    page : BlocPenienPage,
    objectif1 : "analgésique (bilatéral)",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL",
    posologieSSAG1texte : "0,1 mL/kg/côté",  
    posologieSSAG1 : 0.1, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
  },

  { 
    titre : "Bloc pudendal" , 
    soustitre : "Bloc du nerf pudendal par voie transglutéale" , 
    page : BlocPudendalPage,
    objectif1 : "analgésique (bilatéral)",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,2 mL/kg/côté", 
    posologieSSAG1 : 0.2, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
  },

  { 
    titre : "Bloc saphène", 
    soustitre :"Bloc du nerf saphène à la jambe" , 
    page : BlocNerfSaphenePage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,5 mL/kg", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 

    objectif2: "anesthésique (adolescent seulement)",
    produitSSAN1: "Mépivacaïne 10 mg/mL", 
    posologieSSAN1texte : "0,3 mL/kg",
    posologieSSAN1 : 0.3, 
    produitSSAN2 : "", 
    posologieSSAN2 : "",
  },

  {
     titre : "Bloc sciatique poplité (BSP)", 
     soustitre : "Bloc du nerf sciatique au niveau du creux poplité" , 
     page : BlocSciatiquePoplitePage,
     objectif1 : "analgésique",  
     SingleShot: true, 
     KTPN: true, 
     produitSSAG1: "Ropivacaïne 2 mg/mL", 
     posologieSSAG1texte : "0,5 mL/kg", 
     posologieSSAG1 : 0.5, 
     produitSSAG2 : "", 
     posologieSSAG2 : "", 

     objectif2: "anesthésique (adolescent seulement)",
     produitSSAN1: "Mépivacaïne 10 mg/mL", 
     posologieSSAN1texte : "0,3 mL/kg",
     posologieSSAN1 : 0.3, 
     produitSSAN2 : "", 
     posologieSSAN2 : "",
    },

  { 
    titre : "Bloc sciatique sous glutéal (BSG)", 
    soustitre : "Bloc du nerf sciatique par l'approche sous glutéale" , 
    page : BlocSciatiqueSousGlutealPage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,5 mL/kg", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 

    objectif2: "anesthésique (adolescent seulement)",
    produitSSAN1: "Mépivacaïne 10 mg/mL", 
    posologieSSAN1texte : "0,3 mL/kg",
    posologieSSAN1 : 0.3, 
    produitSSAN2 : "", 
    posologieSSAN2 : "",
    mepivacaine10:true,
  },

  { 
    titre : "Bloc supra-claviculaire (BSC)", 
    soustitre : "Bloc du plexus brachial à l'étage supra-claviculaire" , 
    page : BlocSupraClaviculairePage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,5 mL/kg", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 

    objectif2: "anesthésique (adolescent seulement)",
    produitSSAN1: "Mépivacaïne 10 mg/mL", 
    posologieSSAN1texte : "0,3 mL/kg",
    posologieSSAN1 : 0.3, 
    produitSSAN2 : "", 
    posologieSSAN2 : "",
    mepivacaine10:true,
  },

  { 
    titre : "Blocs tronculaires", 
    soustitre : "Bloc du nerf médian, radial ou ulnaire à l'avant-bras" , 
    page : BlocTronculaireAbPage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,2 mL/kg", 
    posologieSSAG1 : 0.2, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 

    objectif2: "anesthésique (adolescent seulement)",
    produitSSAN1: "Mépivacaïne 10 mg/mL", 
    posologieSSAN1texte : "0,2 mL/kg",
    posologieSSAN1 : 0.2, 
    produitSSAN2 : "", 
    posologieSSAN2 : "",

  },

  { 
    titre : "PENG Bloc", 
    soustitre : "Bloc obturateur par voie sous pectinéale (PEricapsular Nerve Group)" , 
    page : PengBlocPage,
    objectif1 : "analgésique",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,5 mL/kg", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
   },

  { 
    titre : "TAP bloc" , 
    soustitre : "Transversus Abdominis Plane Block", 
    page : TapBlockPage, 
    objectif1 : "analgésique (uni ou bilatéral)",  
    SingleShot: true, 
    KTPN: true, 
    produitSSAG1: "Ropivacaïne 2 mg/mL", 
    posologieSSAG1texte : "0,5 mL/kg/côté", 
    posologieSSAG1 : 0.5, 
    produitSSAG2 : "", 
    posologieSSAG2 : "", 
  },
]; 


}



// traitement des éléments pour technique d'ALR

orderBlocs(){
  const sortedBlocs = this.pagesALR.sort((a, b) => a.intitule > b.intitule ? 1 : -1);
  const groupedBlocs = sortedBlocs.reduce((groups, blocs:any) => {
  const letterBlocs = blocs.titre.charAt(0);
  
  groups[letterBlocs] = groups[letterBlocs] || [];
  groups[letterBlocs].push(blocs);
  
  return groups;}, {});
  
  const result = Object.keys(groupedBlocs).map(key => ({key, chirurgie: groupedBlocs[key]}));
  };
  
 
  filterBloc(searchTerm) {
  return this.pagesALR.filter(bloc => {
  return bloc.titre
  .toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ;
  });
  };


// traitement des éléments pour recommandations ALR
orderALR(){
const sorted = this.ALRprotocole.sort((a, b) => a.intitule > b.intitule ? 1 : -1);
const grouped = sorted.reduce((groups, chir) => {
const letter = chir.intitule.charAt(0);

groups[letter] = groups[letter] || [];
groups[letter].push(chir);

return groups;}, {});

const result = Object.keys(grouped).map(key => ({key, chirurgie: grouped[key]}));
};

filterALRchirurgie(searchTerm) {
return  this.ALRprotocole.filter(item => {
return item.intitule
.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ;
});
};

filterALRspecialite(searchTermSpecialite) {
return  this.ALRprotocole.filter(item => {
return item.specialite
.toLowerCase().indexOf(searchTermSpecialite.toLowerCase()) > -1 ;
});
};

// traitement des éléments chirurgie pour ATB prophylaxie 

orderChirurgie(){
const sorted = this.chirurgie.sort((a, b) => a.intitule > b.intitule ? 1 : -1);
const grouped = sorted.reduce((groups, chir) => {
const letter = chir.intitule.charAt(0);

groups[letter] = groups[letter] || [];
groups[letter].push(chir);

return groups;}, {});

const result = Object.keys(grouped).map(key => ({key, chirurgie: grouped[key]}));
};

filterChirurgie(searchTerm) {
return  this.chirurgie.filter(item => {
return item.intitule
.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ;
});
};

filterSpecialite(searchTermSpecialite) {
return  this.chirurgie.filter(item => {
return item.specialite
.toLowerCase().indexOf(searchTermSpecialite.toLowerCase()) > -1 ;
});
}; 


// traitement des éléments médicaments pour recherche par nom  


orderMedicaments(){

const sorted = this.medicaments.sort((a, b) => a.title > b.title ? 1 : -1);
const grouped = sorted.reduce((groups, meds) => {
const letter = meds.title.charAt(0);

groups[letter] = groups[letter] || [];
groups[letter].push(meds);

return groups;}, {});

const result = Object.keys(grouped).map(key => ({key, cards: grouped[key]}));
};

filterMedicaments(searchTerm) {
return  this.medicaments.filter(item => {
return item.title
.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ;
});
} ;

filterIndication(searchTerm){
return  this.medicaments.filter(item => {
return item.indication
.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ;
});
} ;







};