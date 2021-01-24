import { Injectable } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

/*
  Generated class for the ServiceDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDataProvider {

  public cards: any = [];


  constructor() {
    this.cards = [
      {  
        isShown: false, 
        title: "Aciclovir (Zovirax®)", 
        AMM: "",
        indication: "Antiviral", 
        classeMed: "Anti-HHV", 
        voieAdmin: "IVL", 
        presentation: "ZOVIRAX 250 mg pdre p sol inj IV", 
        posologie: "30 à 60 mg/kg/j en 3 prises.", 
        reconstitution: "avec EPPI ou NaCl 0,9%, 25 mg/mL.", 
        dilution: "NaCl 0,9%, max. 7 mg/mL sur VVP, 25 mg/mL sur VVC.", 
        administration:"IVL sur 60 minutes.", 
        remarques:"Incompatible avec la nutrition parentérale et la ceftazidime." 
      },
      { 
        isShown: false,
        title: "Amikacine (Amiklin®)",
        AMM: "",
        indication: "Antibiothérapie", 
        classeMed: "Aminoside", 
        voieAdmin: "IVL", 
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
        voieAdmin: "IVL",       
        presentation: "",
        posologie: "100 à 200 mg/kg/j en 3 à 4 prises.", 
        reconstitution: "Avec EPPI, 50 mg/mL.", 
        dilution: "NaCl 0,9% (stable 6h) ou G5% (stable 1h), sans dépasser 100 mg/mL", 
        administration:"IVL en 30 à 60 minutes.", 
        remarques:"Ne pas mélanger avec les aminosides. Compatible en Y avec la nutrition parentérale." 
      },

      { 
      isShown:false, 
      title: "Amoxicilline + Acide Clavulanique (Augmentin®)", 
      AMM:"", 
      indication: "Antibiothérapie", 
      classeMed: "β-lactamine", 
      voieAdmin: "IVL",       
      presentation: "",
      posologie: "Avant 3 mois ou 4kg, 100 mg/kg/j en 2 prises. > 3 mois mais < 40 kg, 150 mg/kg/j en 3 prises. Ensuite, posologies adulte.", 
      reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", dilution: "NaCl 0,9% (stable 1h) ou G5% (stable 30 minutes).", 
      administration:"IVL en 30 à 40 minutes. Jamais en moins de 5 minutes avant 3 mois.", 
      remarques:"Attention, posologies et concentrations exprimées en Amoxicilline, veiller à ne pas dépasser la dose d'acide clavulanique maximale de 20 mg/kg/j. Incompatible avec les aminosides. Compatible en Y avec l'alimentation parentérale." 
    },

      { 
        isShown:false, 
        title: "Amphotéricine B liposomale (Ambisome®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "3 mg/kg/j en 1 prise.", 
        reconstitution: "Flacon de 50 mg avec 12 mL d'EPPI pour obtenir une solution-mère à 4 mg/mL.", 
        dilution: "Dans du G5% - jamais dans du NaCl 0,9%. Entre 0,2 et 2 mg/mL. Utiliser le filtre de 5 µm pour mettre la solution reconstituée dans le G5% de dilution.", 
        administration:"IV en 30 à 60 minutes.", remarques:"Filtre à 5 µm livré dans l'emballage, à utiliser pour rettenir d'éventuels agglomérats de liposomes qui se seraient formés pendant la reconstitution, en cas d'agitation insuffisante. Attention, incompatible avec le NaCl, les électrolytes et la nutrition parentérale." 
      },

      
      {       
        isShown:false, 
        title: "Caspofungine (Cancidas®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "70 mg/m²/j à J1, puis 50 mg/m²/j, en 1 prise.", 
        reconstitution: "Flacon de 50 mg avec 10,5 mL d'EPPI pour obtenir une solution mère à 5,2 mg/mL ou flacon de 70 mg avec 10,5 mL d'EPPI pour obtenir une solution-mère à 7,6 mg/mL.", 
        dilution: "NaCl 0,9% (jamais dans du G5%). Max 0,5 mg/mL. Utiliser pur non dilué si restriction hydrique et VVC.", 
        administration:"IVL en 60 minutes", 
        remarques:"Incompatible avec le glucose, la nutrition parentérale et l'héparine." 
      },
    
        { 
        isShown:false, 
        title: "Céfamandole (Céfamandole®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "150 mg/kg/j en 3 à 6 prises, max. 6 g/j", 
        reconstitution: "Flacon de 750 mg avec 10 mL d'EPPI, de G5% ou de NaCl 0,9%.", 
        dilution: "Si besoin dans EPPI, NaCl 0,9% ou G5%, pas de concentration cible.", 
        administration:"IVL en 30 minutes.", 
        remarques:"RAS." 
      },
     
        { 
        isShown:false, 
        title: "Céfépime (Axepim®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "150 mg/kg/j en 3 prises, max 6 g/j", 
        reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 à 200 mg/mL.", 
        dilution: "Dans G5% ou NaCl 0,9%.", 
        administration:"IVL en 30 minutes. ", 
        remarques:"RAS."
       },
     
        { 
        isShown:false, 
        title: "Céfotaxime (Claforan®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "100 à 200 mg/kg/j, 300 mg/kg/j dans les infections méningées, en 3 à 4 prises, sans dépasser 24g/j.", 
        reconstitution: "EPPI 10 mL.", 
        dilution: "G5% ou NaCl 0,9%, 10 à 50 mg/mL, ne pas dépasser 150 mg/mL pour l'administration IV.", 
        administration:"IVL en 20 à 60 minutes.", 
        remarques:"Risque d'arythmie cardiaque en cas d'administration intraveineuse rapide sur cathéter veineux central."
       },
     
        { 
        isShown:false, 
        title: "Ceftazidime (Fortum®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "50 à 200 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", 
        reconstitution: "G5% ou NaCl 0,9%, 10mL.", 
        dilution: "G5% ou NaCl 0,9%, stable 18h si concentration < 40 mg/mL, ne pas dépasser 180 mg/mL de concentration en cas de restriction hydrique.", 
        administration:"IVL sur 30 minutes ou IVSE continue.", 
        remarques:"Incompatible avec le bicarbonate, l'aciclovir et le ganciclovir." 
      },
     
        { 
        isShown:false, 
        title: "Ceftriaxone (Rocéphine®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "50 à 100 mg/kg/j en 1 prise, sans dépasser 4g/j.", 
        reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 mg/mL.", 
        dilution: "G5% ou NaCl 0,9%, 10 à 40 mg/mL.", 
        administration:"IVL sur 30 minutes.", 
        remarques:"Incompatible avec le calcium, la vancomycine, le fluconazole, les aminosides, la nutrition parentérale. Contre indiqué avant 28j et en cas d'administration de calcium IV associée. Coloration jaune normale." 
      },
     
        { 
        isShown:false, 
        title: "Ciprofloxacine (Ciflox®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "20 à 30 mg/kg/j - 45 mg/kg/j chez le drépanocytaire - en 2 à 3 prises, sans dépasser 1,2 g/j.", 
        reconstitution: "", 
        dilution: "", 
        administration:"IVL sur 60 minutes.", 
        remarques:"Incompatible avec la nutrition parentérale, les pénicillines, les héparines, les solutions alcalines. Privilégier la voie orale : la biodisponibilité est identique." 
      },
     
        { 
        isShown:false, 
        title: "Clindamycine (Dalacine®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "30 à 40 mg/kg/j en 3 à 4 prises, sans dépasser 2,4 g/j.", 
        reconstitution: "NA.", 
        dilution: "G5% ou NaCl 0,9%, max. 18 mg/mL.", 
        administration:"IVL en 30 minutes, ne pas dépasser 20 mg/kg/h ou 30 mg/min.", 
        remarques:"Incompatible avec l'ampicilline, la phénytoïne, les barbituriques, l'aminophylline, le calcium, le magnésium, la ceftriaxone, la ciprofloxacine et la ranitidine." 
      },
     
        { 
        isShown:false, 
        title: "Cloxacilline (Orbénine®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "100 à 200 mg/kg/j en 4 à 6 prises, max. 12 g/j.", 
        reconstitution: "EPPI, G5% ou NaCl 0,9%, 1g dans 16 mL.", 
        dilution: "G5% ou NaCl 0,9%, 10 mg/mL.", 
        administration:"IVL sur 60 minutes.", 
        remarques:"Incompatible avec la nutrition parentérale." 
      },
    
        { 
        isShown:false, 
        title: "Fluconazole (Triflucan®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "3 à 12 mg/kg/j en 1 prise.", 
        reconstitution: "NA.", 
        dilution: "NA.", 
        administration:"IVL en 30 minutes, 120 minutes si > 6 mg/kg/j.", 
        remarques:"Inhibiteur enzymatique. Teneur en sodium significative à 0,155 mEq/mL." 
      },
     
        { 
        isShown:false, 
        title: "Fosfomycine (Fosfocine®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "100 à 200 mg/kg/j en 2 à 4 prises, sans dépasser 16 g/j.", 
        reconstitution: "1g avec 10 mL d'EPPI. 4g avec 15 mL d'EPPI.", 
        dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", 
        administration:"IVL en 60 minutes.", 
        remarques:"Apports en sodium significatifs à 14,3 mEq/g." 
      },
      
        { 
        isShown:false, 
        title: "Gentamicine (Gentalline®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "5 à 8 mg/kg/j en 1 prise.", 
        reconstitution: "NA.", 
        dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", 
        administration:"IVL en 30 minutes.", 
        remarques:"Objectifs : pic 60 à 80 mg/L, résiduelle inférieure à 1 mg/L. Incompatible avec les pénicillines et les héparines > 1 UI/mL."
       },
     
        { 
        isShown:false, 
        title: "Imipénème-Cilastine (Tienam®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "60 à 100 mg/kg/j en 4 prises sans dépasser 4 g/j.", 
        reconstitution: "G5% ou NaCl 0,9%, 25 mg/mL.", 
        dilution: "G5% ou NaCl 0,9%, 5 mg/mL, max. 7 mg/mL si restriction hydrique, stable 4h.", 
        administration:"IVL en 30 minutes, 60 minutes au delà de 500 mg.",
        remarques:"Posologies et concentrations exprimées en dose d'Imipgène. Contre indique chez l'insuffisant rénale. Compatible avec la nutrition parentérale." 
      },

      { 
        isShown:false, 
        title: "Lévofloxacine (Tavanic®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "20 mg/kg/j de 6 mois à 5 ans, en 2 prises. 10 mg/kg/j au delà de 5 ans, en 1 prise, sans dépasser 1g/j.",
        reconstitution: "", 
        dilution: "", 
        administration:"IVL en 60 minutes.", 
        remarques:"Incompatible avec les bicarbonates et les héparines. Privilégier la voie orale : la biodisponibilité est identique."
       },

      { 
        isShown:false, 
        title: "Méropénème (Meronem®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "60 à 120 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", 
        reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", 
        dilution: "NaCl 0,9% (stable 8h) ou G5% (stable 2h), 1 à 20 mg/mL.", 
        administration:"IVL en 30 minutes.", 
        remarques:"Compatible avec la nutrition parentérale."
       },

      { 
        isShown:false, 
        title: "Métronidazole (Flagyl®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "30 mg/kg/j en 3 à 4 prises, sans dépasser 4 g/j.", 
        reconstitution: "NA.", 
        dilution: "NA.", 
        administration:"IVL en 30 minutes.", 
        remarques:"Compatible avec la nutrition parentérale." 
      },

      { 
        isShown:false, 
        title: "Pipéracilline-Tazobactam (Tazocilline®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "300 mg/kg/j, en 3 à 4 prises ou en continu, sans dépasser 16 g/j.", 
        reconstitution: "EPPI, G5% ou NaCl 0,9%, 200 mg/mL.", 
        dilution: "G5 ou NaCl 0,9%, 20 à 80 mg/mL, stable 24h.", 
        administration:"IVL en 30 minutes.", 
        remarques:"Posologies et concentrations exprimées en pipéracilline. Incompatible avec les aminosides et les bicarbonates. Compatible avec la nutrition parentérale." },
      { 
        isShown:false, 
        title: "Rifampicine (Rifadine®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "10 à 30 mg/kg/j en 1 prise (tuberculose) ou 2 prises (autres indications), sans dépasser 1,2 g/j.", 
        reconstitution: "EPPI 60 mg/mL.", 
        dilution: "G5% ou NaCl 0,9%, usuel 2,4 mg/mL, ne pas dépasser 6 mg/mL, stable 6h.", 
        administration:"IVL en 30 minutes.", 
        remarques:"Incompatible avec la nutrition parentérale. Très agressif en cas d'extravasation. Inducteur enzymatique." 
      },

      { 
        isShown:false, 
        title: "Ticarcilline-Acide Clavulanique (Claventin®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "225 à 300 mg/kg/j en 3 à 4 prises, sans dépasser 18 g/j.", 
        reconstitution: "EPPI ou NaCl 0,9%.", 
        dilution: "G5% ou NaCl 0,9%, 30 à 50 mg/mL, stable 6h.", 
        administration:"IVL sur 30 minutes.", 
        remarques:"Posologies et concentrations exprimées en ticarcilline. Max 5 mg/kg/prise et 20 mg/kg/j d'acide clavulanique. Incompatible avec les aminosideS, bicarbonates et la nutrition parentérale. Teneur en sodium 5,2 mEq/g et teneur en potassium 0,33 mEq/g. " },
      { 
        isShown:false, 
        title: "Triméthoprime-Sulfaméthoxazole (Bactrim®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "30 à 60 mg/kg/j en 2 prises (curatif pneumocystis carinii : 100 mg/kg/j en 3 prises).", 
        reconstitution: "", 
        dilution: "G5% ou NaCl 0,9% 3,2 mg/mL (stable 6h), max. 8 mg/mL si restriction hydrique (stable 1h).", 
        administration:"IVL sur 60 minutes.", 
        remarques:"Posologies et concentrations exprimées en Sulfaméthoxazole. Peut être administré pur sur VVC. Incompatible avec la nutrition parentérale." },
      { 
        isShown:false, 
        title: "Vancomycine (Vancocine®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "40 à 60 mg/kg/j en 4 prises ou en continu.", 
        reconstitution: "EPPI 50 mg/mL.", 
        dilution: "G5% ou NaCl 0,9%, ne pas dépasser 10 mg/mL, stable 24h.", 
        administration:"IVL en 60 minutes ou IVSE.", 
        remarques:"Objectif : T0 20-25 mg/mL. Ralentir la perfusion en cas de réaction cutanée (Redman Syndrome). Compatible avec la nutrition parentérale, les lipides IV et l'héparine < 1 UI/mL." },
      { 
        isShown:false, 
        title: "Voriconazole (Vfend®)", 
        AMM:"", 
        indication: "", 
        classeMed: "", 
        voieAdmin: "",       
        presentation: "",
        posologie: "2 à 12 ans et < 50 kg : 18 mg/kg/j à J1 puis 16 mg/kg/j. Après 12 ans et > 50 kg, 12 mg/kg/j à J1 puis 8 mg/kg/j. En 2 prises.", 
        reconstitution: "EPPI ou NaCl 0,9%, 19 mL pour obtenir 10 mg/mL.", 
        dilution: "G5% ou NaCl 0,9%, 0,5 à 5 mg/mL.", 
        administration:"IVL en 1 à 3h, sans dépasser 3 mg/kg/h.", 
        remarques:"Risque d'accumulation de l'excipient chez l'insuffisant rénal : préférer la forme orale chaque fois que possible. Incompatible avec la nutrition parentérale et les bicarbonates." },
      
    ];

  }

  filterTitles(searchTerm) {
   return  this.cards.filter(item => {
       return item.title
       .toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ;
    });
  } 
};