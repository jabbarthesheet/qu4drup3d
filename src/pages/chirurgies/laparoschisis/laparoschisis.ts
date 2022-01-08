import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LaparoschisisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-laparoschisis',
  templateUrl: 'laparoschisis.html',
})
export class LaparoschisisPage {

  checkedItem:boolean=false;

  public Salledenaissance = <any> [
    { title: 'Isolement protecteur' , item: "Port de gants, charlotte, masque par toute l'équipe.", isChecked: false , count: 1},
    { title: 'Obstétricien' , item: "Laisser le cordon le plus long possible (minimum 10 cm), et l'enrouler dans une compresse humide.", isChecked: false , count: 1},
    { title: 'Pédiatre de maternité' , item: "- Prévenir chirurgien, anesthésiste de la naissance, transmettre les informations médicales." , item1: "- Pose de sonde de Salem et aspiration douce à la seringue du contenu gastrique.", item2: "Enfant en décubitus latéral droit avec surveillance de la colorations des anses intestinales à travers le sac à grêle." , item3:"Prise en charge habituelle de la détresse respiratoire le cas échéant.", item4: "Préparer le dossier médical ORBIS : information du bloc par le chirurgien et l'anesthésiste (besoin de salle opératoire, délai non précisé) et transfert de l'enfant en SSPI -3." , isChecked: false , count: 1},
  ];

  public SSPIpreop = <any> [
    { title: 'Isolement protecteur' , item: "Port de gants, charlotte, masque par toute l'équipe.", isChecked: false},
    { title: 'Réchauffer', item: 'Mise en incubateur de néonatalogie.', isChecked: false  },
    { title: 'Techniquer', item: "Pose de sonde de Salem en aspiration douce. Pose d'une voie veineuse périphérique, en préservant un bras pour un catéther de Jonathan si possible." , isChecked: false  },
    { title: 'Prélever le bilan', item: 'Prélever NFS, Pq, hémostase complète, CRP, PCT, hémocultures, deux déterminations de groupe sanguin, RAI, calcémie, lactate veineux et dextro. Ne pas attendre les résultats pour passer à la suite de la prise en charge.', isChecked: false  },
    { title: 'Hydrater', item: 'Perfusion de Pediaven NN1 en base 60 mL/kg/j à J1 de vie ; compenser les pertes digestives par du sérum physiologique.', isChecked: false  },
    { title: 'Vitamine K', item: '5 mg en IV sur 1 heure.', isChecked: false  },
   
  ];

  public Bloc = <any> [
      { title: "Anesthésie" , item:"Réchauffer, poursuivre l'aspiration gastrique, paracétamol 20 mg/kg en dose de charge. Utiliser tétine et G30% pour améliorer le confort." , isChecked: false, },
      { title: "Antibiothérapie", item:"Seulement en cas de suspicion d'IMF, sinon l'antibioprophylaxie n'est pas recommandée. Nouveau né à terme, première dose : Amoxicilline 50 mg/kg, Gentamicine 6 mg/kg, Métronidazole 7,5 mg/kg. En cas de prématurité : Céfotaxime 50 mg/kg, Gentamicine 6 mg/kg, Métronidazole 7,5 mg/kg. Vérifier la bactériologie maternelle pour adapter à des résistances le cas échéant (BLSE par exemple)." , isChecked: false, },
      { title: "Equipe de néonatalogie", item: "Présente au bloc opératoire." , isChecked: false, },
      { title: "Equipe chirurgicale", item:"Au moins deux personnes. Clampage stérile du cordon et badigeon à la biseptine. Pose de sonde vésicale +/- lavement. Vérifier si la réintégration est possible en 1 temps : impression clinique, saturation au pied, possible utilisation du Silo. Fermeture simple si mpossible ; Réintégration progressive nécessaire en cas d'utilisation du silo." , isChecked: false, },
      ];
  

  public PostOperatoire = <any> [
    { title: "Techniquer", item:  "KTC de type Jonathan en première intention." , isChecked: false },
    { title : "Réintégration", item:"Réintégration la plus rapide possible, idéalement sur 2 à 3 jours, maximum en 7 jours. En cas de doute sur la coloration, repose du silo en néonatalogie ou au bloc opératoire" , isChecked: false},
    { title: "Anesthésie pour gestes", item: "Réintégration sous Paracétamol + G30% +/- Midazolam +/- Sufentanyl si insuffisant.", isChecked: false },
  ];


  isShownSalledenaissance:boolean=false; 
  isShownSSPIpreop:boolean=false; 
  isShownBloc:boolean=false;
  isShownPostOp:boolean=false; 

  allCheckedSalledenaissance:boolean=false; 
  allCheckedSSPIpreop:boolean=false; 
  allCheckedBloc:boolean=false;
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
    console.log('ionViewDidLoad Laparoschisis page');
  };

  ionViewWillEnter(){

  };

  ToggleSalledenaissance() {
    this.isShownSalledenaissance = !this.isShownSalledenaissance; 
  };
  
  ToggleSSPIpreop() {
    this.isShownSSPIpreop = !this.isShownSSPIpreop;
  };

  ToggleBloc() {
    this.isShownBloc = !this.isShownBloc;
  };

  TogglePostOp() {
    this.isShownPostOp = !this.isShownPostOp;
  };

  checkSdN() {
   let checkSdN = this.Salledenaissance
          .filter(item => item.isChecked === false)
          .reduce((sum, current) => sum + current.count, 0);

    if (checkSdN == 0){
      this.allCheckedSalledenaissance = true;
      const toastCS = this.ToastController.create({
        message: "Items spécifiques de salle de naissance tous validés.",
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: "OK.",
        duration:3000, 
        });
      toastCS.present();
        }
    else {this.allCheckedSalledenaissance = false;};
  };

checkSSPIpreop() {

let checkSSPIpreop = this.SSPIpreop
    .filter(item => item.isChecked === false)
    .reduce((sum, current) => sum + current.count, 0);

if (checkSSPIpreop == 0){
this.allCheckedSSPIpreop = true;
const toastVPA = this.ToastController.create({
  message: "Items spécifiques de SSPI pré-opératoire tous validés.",
  position: 'Bottom',
  showCloseButton: true,
  closeButtonText: "OK.",
  duration:3000, 
  });
toastVPA.present();
  }
else {this.allCheckedSSPIpreop = false;};

  };

  checkBloc(){

let checkPreOp = this.Bloc
    .filter(item => item.isChecked === false)
    .reduce((sum, current) => sum + current.count, 0);

if (checkPreOp == 0){
this.Bloc = true;
const toastPreOp = this.ToastController.create({
  message: "Items spécifiques du bloc opératoire tous validés.",
  position: 'Bottom',
  showCloseButton: true,
  closeButtonText: "OK.",
  duration:3000, 
  });
  toastPreOp.present();
  }
else {this.allCheckedBloc = false;};
 
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

