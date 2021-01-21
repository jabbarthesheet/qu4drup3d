import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



/**
 * Generated class for the RecommandationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recommandations',
  templateUrl: 'recommandations.html',
})
export class RecommandationsPage {

public recommandations:any =  
      [

        { auteur : "S. Dahmani" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "L'anesthésie réanimation en pédiatrie pour tous", lien: "/assets/recos/ar_ped_pour_tous.pdf", class : "logoRecosSFAR", },

        { auteur : "D. Michelet" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "Organisation de l'ambulatoire en pédiatrie", lien: "/assets/recos/ambulatoire_pediatrie.pdf", class : "logoRecosSFAR", },

        { auteur : "F. Veyckemans" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "Comment gérer l'analgésie post-opératoire de l'enfant et en fonction de quoi ?", lien: "/assets/recos/analgesie_post_op_pediatrie.pdf", class : "logoRecosSFAR", },


        { auteur : "C. Lejus-Bourdeau, N. Grillot, M. Azama" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "Bilan pré-opératoire en pédiatrie : pour qui et pourquoi ?", lien: "/assets/recos/bilan_preop_pediatrie.pdf", class : "logoRecosSFAR", },

        { auteur : "F. Michel" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "Indicateurs de complications post-opératoires en anesthésie pédiatrique", lien: "/assets/recos/complications_post_op.pdf", class : "logoRecosSFAR", },

        { auteur : "N. Salvi, N. Leboulanger , G. Orliaguet" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "L'urgence hémorragique post-opératoire : algorithme de gestion", lien: "/assets/recos/hemorragie_pediatrie.pdf", class : "logoRecosSFAR", },

        { auteur : "M. F. Hurtaud-Roux, A. Vincenot, D. Lasne" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "L'hémostase en pédiatrie, ses particularités, les principales pathologies hémorragiques et leur gestion", lien: "/assets/recos/hemostase_pediatrie.pdf", class : "logoRecosSFAR", },

        { auteur : "A. Laffargue" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "Le syndrome d'apnée obstructive du sommeil de l'enfant", lien: "/assets/recos/soas_pediatrie.pdf", class : "logoRecosSFAR", },

        { auteur : "S. Dahmani" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "L'enfant enrhumé : je récuse ? j'endors ?", lien: "/assets/recos/strategie_enfant_enrhume.pdf", class : "logoRecosSFAR", },

        { auteur : "J. M. Devys" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre : "Les voies aériennes en pédiatrie", lien: "/assets/recos/vas_pediatrie.pdf", class : "logoRecosSFAR", },


        { auteur : "HAS" , logo:"/assets/imgs/logoHAS.png", datepublication : "2014", titre: "Agence nationale de sureté du médicament", soustitre : "Bonnes pratiques transfusionnelles", lien: "https://www.has-sante.fr/upload/docs/application/pdf/2015-02/transfusion_de_globules_rouges_homologues_-_produits_indications_alternatives_-_recommandations.pdf", class : "logoRecosHAS", }, 
        { auteur : "SFAR" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Recommandations formalisées d'experts", soustitre : "Gestion des voies aériennes de l'enfant", lien: "https://sfar.org/wp-content/uploads/2019/10/rfe-gestion-des-voies-aeriennes-de-lenfant.pdf", class : "logoRecosSFAR", },
        { auteur : "SFAR" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Recommandations formalisées d'experts", soustitre : "Curarisation et décurarisation en anesthésie", lien: "https://sfar.org/wp-content/uploads/2018/10/2_RFE-CURARE-3.pdf", class : "logoRecosSFAR", },
        { auteur : "SFAR" , logo:"/assets/imgs/logoSFAR.png", datepublication : "2018", titre: "Recommandations formalisées d'experts", soustitre : "Hypothermie per-opératoire accidentelle", lien: "https://sfar.org/wp-content/uploads/2018/09/2_RFE-Hypothermie-Version-Finale-_-Validee-CRC120618.pdf", class : "logoRecosSFAR", },


      ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public InAppBrowser: InAppBrowser,
    public menu: MenuController,) 
  {
  
  }

  menuToggle()
  {
    this.menu.open();
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommandationsPage');
  }

  openWebpage(index) {

  this.InAppBrowser.create(this.recommandations[index].lien, '_system');

  }

}
