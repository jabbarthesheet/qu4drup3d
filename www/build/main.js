webpackJsonp([1],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ServiceDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceDataProvider = /** @class */ (function () {
    function ServiceDataProvider() {
        this.medicaments = [];
        this.chirurgie = [];
        this.medicaments = [
            {
                isShown: false,
                title: "Thiopental (Pentothal®)",
                AMM: "",
                indication: "Hypnotique",
                classeMed: "Barbiturique",
                voieAdmin: "IV",
                presentation: "PENTOTHAL 0,5 g Pdr sol inj",
                posologie: "7 mg/kg",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/thiopental-sodique-7736.html",
            },
            {
                isShown: false,
                title: "Propofol (Diprivan®)",
                AMM: "",
                indication: "Hypnotique",
                classeMed: "GABA inhibiteur",
                voieAdmin: "IV",
                presentation: "PROPOFOL 200mg/20mL sol inj",
                posologie: "3 à 5 mg/kg en induction seule",
                posologie1: "1 à 2 mg/kg en co-induction avec agent inhalé",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/propofol-2939.html",
            },
            {
                isShown: false,
                title: "Etomidate (Hypnomidate®)",
                AMM: "Âge > 2 ans",
                indication: "Hypnotique",
                classeMed: "Hypnotique",
                voieAdmin: "IV",
                presentation: "ETOMIDATE 2 mg/ml émuls inj ",
                posologie: "0,5 mg/kg",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/etomidate-1431.html",
            },
            {
                isShown: false,
                title: "Ketamine (Ketalar®)",
                AMM: "",
                indication: "Hypnotique",
                indication1: "Antalgique",
                classeMed: "Hypnotique",
                voieAdmin: "IV",
                voieAdmin1: "IM",
                presentation: "KETAMINE 50 mg/5 ml sol inj",
                posologie: "3 mg/kg (hypnotique)",
                posologie1: "0,5 mg/kg (antalgique)",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "Utilisation en entretien IVSE : 0,15 mg/kg/h",
                lien: "https://www.vidal.fr/medicaments/substances/ketamine-6970.html",
            },
            {
                isShown: false,
                title: "Dexmédétomidine (Dexdor®)",
                AMM: "Sédation chez l'adulte en USI",
                indication: "Hypnotique",
                indication1: "Antalgique",
                classeMed: "α2-agoniste sélectif",
                voieAdmin: "IV",
                voieAdmin1: "intra-nasale",
                presentation: "DEXMEDETOMIDINE 100 µg/ml sol diluer p perf",
                posologie: "2 µg/kg (sédatif intra-nasal)",
                posologie1: "0,5 µg/kg (antalgique IVL à l'induction)",
                reconstitution: "",
                dilution: "4 µg/mL",
                administration: "IVL, IVSE ou intra-nasale",
                remarques: "Utilisation en entretien IVSE : 1 µg/kg sur 10 minutes puis 0,4 µg/kg/h. Prévention de l'agitation au réveil : 0,3 µg/kg sur 10 minutes.",
                lien: "https://www.vidal.fr/medicaments/substances/dexmedetomidine-23522.html",
            },
            {
                isShown: false,
                title: "Sufentanil (Sufenta®)",
                AMM: "",
                indication: "Antalgique",
                indication1: "",
                classeMed: "Opioïde de synthèse",
                voieAdmin: "IV",
                voieAdmin1: "Péridurale ou intrathécale",
                presentation: "SUFENTANIL 50µg/10mL sol inj",
                posologie: "0,2 µg/kg",
                posologie1: "0,2 µg/kg/h en entretien IVSE",
                reconstitution: "",
                dilution: "Adapter selon le poids",
                administration: "IVD, IVSE péridurale ou intrathécale",
                remarques: "Attention à la demi-vie contextuelle (accumulation)",
                lien: "https://www.vidal.fr/medicaments/substances/sufentanil-3378.html",
            },
            {
                isShown: false,
                title: "Alfentanil (Rapifen®)",
                AMM: "",
                indication: "Antalgique",
                indication1: "",
                classeMed: "Opioïde de synthèse",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "ALFENTANIL 1mg/2mL sol inj",
                posologie: "20 µg/kg",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/alfentanil-222.html",
            },
            {
                isShown: false,
                title: "Atracurium (Tracrium®)",
                AMM: "",
                indication: "Curarisation",
                indication1: "",
                classeMed: "Curare non dépolarisant, benzylisoquinoline",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "ATRACURIUM 25mg/2,5mL ou 50mg/5mL sol inj",
                posologie: "0,5 mg/kg",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "0,5 mg/kg/h en entretien",
                lien: "https://www.vidal.fr/medicaments/substances/atracurium-besilate-5748.html",
            },
            {
                isShown: false,
                title: "Rocuronium (Esmeron®)",
                AMM: "",
                indication: "Curarisation",
                indication1: "",
                classeMed: "Curare non dépolarisant, stéroidien",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "ROCURONIUM 50mg/5mL sol inj",
                posologie: "0,6 mg/kg",
                posologie1: "1 à 1,2 mg/kg pour ISR",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "0,6 mg/kg/h en entretien",
                lien: "https://www.vidal.fr/medicaments/substances/rocuronium-bromure-6322.html",
            },
            {
                isShown: false,
                title: "Suxamethonium (Celocurine®)",
                AMM: "",
                indication: "Curarisation",
                indication1: "",
                classeMed: "Curare dépolarisant",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "CELOCURINE 100mg/2mL sol inj",
                posologie: "1 mg/kg",
                posologie1: "2 mg/kg avant 2 ans",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/suxamethonium-15608.html",
            },
            {
                isShown: false,
                title: "Suggamadex (Bridion®)",
                AMM: "",
                indication: "Décurarisation",
                indication1: "",
                classeMed: "Gamma cyclodextrine",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "BRIDION 200mg/2mL sol inj",
                posologie: "2 mg/kg (TOF 4 réponses)",
                posologie1: "4 mg/kg (TOF 2 réponses)",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "16 mg/kg pour réversion immédiate après administration de rocuronium.",
                lien: "https://www.vidal.fr/medicaments/substances/suxamethonium-15608.html",
            },
            {
                isShown: false,
                title: "Dexaméthasone",
                AMM: "",
                indication: "Prevention NVPO",
                indication1: "",
                classeMed: "Glucocorticoïde",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "DEXAMETHASONE 4mg/1mL ou 20mg/5mL sol inj",
                posologie: "1,5 mg/kg",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/dexamethasone-1201.html",
            },
            {
                isShown: false,
                title: "Acide tranexamique (Exacyl®)",
                AMM: "",
                indication: "Prevention saignement",
                indication1: "",
                classeMed: "Inhibiteur de la fibrinolyse",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "Acide tranexamique 500mg/5mL sol inj",
                posologie: "10 mg/kg IVL",
                posologie1: "5 mg/kg/h IVSE ne pas dépasser 4g/j",
                reconstitution: "",
                dilution: "",
                administration: "IVL ou IVSE",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/acide-tranexamique-127.html#:~:text=L'acide%20tranexamique%20d%C3%A9veloppe%20une,de%20sa%20transformation%20en%20plasmine.",
            },
            {
                isShown: false,
                title: "Lidocaine (Xylocaine®, Xylocard®)",
                AMM: "",
                indication: "Antalgique",
                indication1: "",
                classeMed: "Anesthesique local",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "LIDOCAINE 100mg/20mL, 200mg/20mL, 400mg/20mL",
                posologie: "1,5 mg/kg IVD lent",
                posologie1: "1 mg/kg/h IVSE en entretien",
                reconstitution: "",
                dilution: "",
                administration: "IVD ou IVSE",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/lidocaine-2097.html",
            },
            {
                isShown: false,
                title: "Ondansetron (Zophren®)",
                AMM: "Âge > 1 an",
                indication: "Anti-emetique",
                indication1: "",
                classeMed: "Inhibiteur 5HT3",
                voieAdmin: "IV",
                voieAdmin1: "Orale (sublinguale)",
                presentation: "ONDANSETRON 8mg/2mL sol inj - ONDANSETRON 4mg ou 8mg cp orodisp",
                posologie: "0,1 mg/kg",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/ondansetron-6843.html",
            },
            {
                isShown: false,
                title: "Dropéridol (Droleptan®)",
                AMM: "",
                indication: "Anti-emetique",
                indication1: "Sedatif",
                classeMed: "Neuroleptique",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "",
                posologie: "25 µg/kg",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVL",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/droperidol-1321.html",
            },
            {
                isShown: false,
                title: "Paracétamol (Doliprane®, Perfalgan®)",
                AMM: "",
                indication: "Antalgique Palier 1",
                indication1: "",
                classeMed: "Antalgique central",
                voieAdmin: "IV",
                voieAdmin1: "PO",
                presentation: "",
                posologie: "15 mg/kg/6h",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVL ou PO",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/paracetamol-2649.html",
            },
            {
                isShown: false,
                title: "Nalbuphine (Nubain®)",
                AMM: "",
                indication: "Antalgique Palier 2",
                indication1: "",
                classeMed: "Phenantrène (agoniste/antagoniste morphinique)",
                voieAdmin: "IV",
                voieAdmin1: "",
                presentation: "NALBUPHINE CHLORHYDRATE 10 mg/ml sol inj",
                posologie: "0,2 mg/kg/4h",
                posologie1: "0,1 mg/kg/4h en contexte ambulatoire",
                reconstitution: "",
                dilution: "",
                administration: "IVL",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/nalbuphine-6317.html",
            },
            {
                isShown: false,
                title: "Ketoprofene (Profenid®)",
                AMM: "IV 15 ans, sirop 6 mois",
                indication: "Antalgique Palier 1",
                indication1: "",
                classeMed: "AINS",
                voieAdmin: "IV",
                voieAdmin1: "PO",
                presentation: "KETOPROFENE 100mg/4mL sol inj",
                posologie: "1 mg/kg/8h",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVL ou PO",
                remarques: "Utilisation hors AMM fréquente",
                lien: "https://www.vidal.fr/medicaments/substances/ketoprofene-1957.html",
            },
            {
                isShown: false,
                title: "Ibuprofene (Advil®, Nurofen®)",
                AMM: "Âge > 3 mois",
                indication: "Antalgique Palier 1",
                indication1: "",
                classeMed: "AINS",
                voieAdmin: "PO",
                voieAdmin1: "",
                presentation: "IBUPROFENE 200mg ou 400mg cp",
                posologie: "10 mg/kg/8h",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "PO",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/ibuprofene-1844.html",
            },
            {
                isShown: false,
                title: "Nefopam (Acupan®)",
                AMM: "Âge > 15 ans",
                indication: "Antalgique Palier 2",
                indication1: "",
                classeMed: "Analgésique central non morphinique",
                voieAdmin: "IV",
                voieAdmin1: "PO",
                presentation: "NEFOPAM 20mg/2mL sol inj",
                posologie: "1 mg/kg/j IVSE",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVSE ou PO",
                remarques: "Préférer l'administration IVSE en pédiatrie",
                lien: "https://www.vidal.fr/medicaments/substances/nefopam-11988.html",
            },
            {
                isShown: false,
                title: "Tramadol (Contramal®)",
                AMM: "Âge > 15 ans IV, âge > 3 ans PO",
                indication: "Antalgique Palier 2",
                indication1: "",
                classeMed: "Agoniste récepteur µ",
                voieAdmin: "IV",
                voieAdmin1: "PO",
                presentation: "CONTRAMAL 100mg/2mL sol inj",
                posologie: "1 mg/kg/6h",
                posologie1: "",
                reconstitution: "",
                dilution: "",
                administration: "IVL ou PO",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/tramadol-15308.html",
            },
            {
                isShown: false,
                title: "Phloroglucinol (Spasfon®)",
                AMM: "",
                indication: "Antalgique (autres)",
                indication1: "Antispasmodique",
                classeMed: "",
                voieAdmin: "IV",
                voieAdmin1: "PO",
                presentation: "PHLOROGLUCINOL 80mg/2mL sol inj - 80mg cp",
                posologie: "0,5 mg/kg/6h IV",
                posologie1: "1,5 mg/kg/6h PO",
                reconstitution: "",
                dilution: "",
                administration: "IVL ou PO",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/phloroglucinol-3760.html",
            },
            {
                isShown: false,
                title: "Bumétanide (Burinex®)",
                AMM: "",
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
                administration: "IVSE",
                remarques: "possibilité  de doubler si insuffisant",
                lien: "https://www.vidal.fr/medicaments/substances/bumetanide-670.html",
            },
            {
                isShown: false,
                title: "Furosémide (Lasilix®)",
                AMM: "max. 4 mg/kg/jg",
                indication: "HTA",
                indication1: "Insuff. card.",
                classeMed: "Diurètique (anse)",
                voieAdmin: "IV",
                voieAdmin1: "PO",
                presentation: "FUROSEMIDE 20 mg cp ou 10 mg/mL sol pr perf",
                posologie: "1 mg/kg",
                reconstitution: "",
                dilution: "Serum physiologique",
                administration: "PO ou IVL",
                remarques: "ne pas dépasser 4 prises par jour",
                lien: "https://www.vidal.fr/medicaments/substances/furosemide-1579.html",
            },
            {
                isShown: false,
                title: "Enalapril (Renitec®)",
                AMM: "",
                indication: "HTA",
                classeMed: "Inhibiteur ECA",
                voieAdmin: "PO",
                presentation: "ENALAPRIL MALEATE 5 mg cp",
                posologie: "25 µg/kg",
                reconstitution: "",
                dilution: "",
                administration: "PO en 2 prises",
                remarques: "ne pas dépasser 5 mg/j",
                lien: "https://www.vidal.fr/medicaments/substances/enalapril-6771.html",
            },
            {
                isShown: false,
                title: "Labétolol (Trandate®)",
                AMM: "",
                indication: "HTA",
                classeMed: "β-bloquant",
                voieAdmin: "IV",
                presentation: "LABETALOL CHLORHYDRATE 5 mg/ml sol inj",
                posologie: "0,3 mg/kg",
                reconstitution: "",
                dilution: "",
                administration: "IVL",
                remarques: "Administration IVSE possible 2 mg/kg/j",
                lien: "https://www.vidal.fr/medicaments/substances/labetalol-6535.html",
            },
            {
                isShown: false,
                title: "Acebutolol (Sectral®)",
                AMM: "",
                indication: "HTA",
                classeMed: "β-bloquant",
                voieAdmin: "PO",
                presentation: "ACEBUTOLOL (chlorhydrate) 200 mg cp",
                posologie: "1 mg/kg",
                reconstitution: "",
                dilution: "",
                administration: "PO en 2 prises par jour",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/acebutolol-4283.html",
            },
            {
                isShown: false,
                title: "Nicardipine (Loxen®)",
                AMM: "",
                indication: "HTA",
                classeMed: "Anti-calcique",
                voieAdmin: "IV",
                presentation: "NICARDIPINE CHLORHYDRATE 1 mg/ml sol p perf",
                posologie: "60 µg/kg/h",
                reconstitution: "",
                dilution: "",
                administration: "IVSE",
                remarques: "possibilité d'augmenter jusqu'à 120 µg/kg/h si insuffisant",
                lien: "https://www.vidal.fr/medicaments/substances/nicardipine-6838.html",
            },
            {
                isShown: false,
                title: "Lévétiracetam (Keppra®)",
                AMM: "",
                indication: "Epilepsie",
                classeMed: "Anti-épileptique",
                voieAdmin: "PO",
                presentation: "LEVETIRACETAM 250 mg cp",
                posologie: "30 mg/kg",
                reconstitution: "",
                dilution: "",
                administration: "PO toutes les 12h",
                remarques: "ne pas dépasser 2g/j",
                lien: "https://www.vidal.fr/medicaments/gammes/levetiracetam-eg-61517.html",
            },
            {
                isShown: false,
                title: "Phénytoïne (Dilantin®)",
                AMM: "",
                indication: "Epilepsie",
                classeMed: "Anti-épileptique",
                voieAdmin: "IV",
                presentation: "PHENYTOINE SODIQUE 50 mg/ml sol inj (DILANTIN)",
                posologie: "20 mg/kg/prise",
                reconstitution: "",
                dilution: "",
                administration: "IVL sur 20 minutes",
                remarques: "ne pas dépasser 1500 mg/administration",
                lien: "https://www.vidal.fr/medicaments/dilantin-250-mg-5-ml-sol-inj-5235.html",
            },
            {
                isShown: false,
                title: "Phénobarbital (Gardénal®)",
                AMM: "",
                indication: "Epilepsie",
                classeMed: "Barbiturique",
                voieAdmin: "IV",
                presentation: "PHENOBARBITAL (sodique) 40 mg/2 ml pdre/solv p sol inj",
                posologie: "15 mg/kg/prise",
                reconstitution: "",
                dilution: "",
                administration: "IVL sur 20 minutes",
                remarques: "ne pas dépasser 500 mg/administration",
                lien: "https://www.vidal.fr/medicaments/substances/phenobarbital-2729.html",
            },
            {
                isShown: false,
                title: "Clonazépam (Rivotril®)",
                AMM: "",
                indication: "Epilepsie",
                indication1: "Intox. AL",
                classeMed: "Benzodiazépine",
                voieAdmin: "IV",
                presentation: "CLONAZEPAM 1 mg/1 ml sol diluer/solv p sol inj",
                posologie: "Crise convulsive 20 µg/kg, IAL 15 µg/kg",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "Renouvelable 2 fois ou administrable IVSE 20 µg/kg/6h",
                lien: "https://www.vidal.fr/medicaments/substances/clonazepam-4157.html",
            },
            {
                isShown: false,
                title: "Terbutaline (Bricanyl®)",
                AMM: "",
                indication: "Asthme aigu grave",
                classeMed: "β2-agoniste MD",
                voieAdmin: "nébulisation",
                presentation: "BRICANYL 5 mg/2 ml sol p inhal p nébulis en récipient unidose",
                posologie: "0,2 mg/kg",
                reconstitution: "",
                dilution: "",
                administration: "aérosol",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/bricanyl-5-mg-2-ml-sol-p-inhal-p-nebulis-en-recipient-unidose-2493.html",
            },
            {
                isShown: false,
                title: "Ipratropium (Atrovent®) aérosol",
                AMM: "",
                indication: "Asthme aigu grave",
                classeMed: "Anticholinergique",
                voieAdmin: "nébulisation",
                presentation: "ATROVENT 0,50 mg/2 ml sol p inhal p nébulis",
                posologie: "0,25 à 0,5mg",
                reconstitution: "",
                dilution: "",
                administration: "aérosol",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/atrovent-0-50-mg-2-ml-sol-p-inhal-p-nebulis-en-recipient-unidose-adulte-1705.html",
            },
            {
                isShown: false,
                title: "Methylprednisolone (Solumédrol®)",
                AMM: "",
                indication: "Anaphylaxie",
                indication1: "AAG",
                classeMed: "Corticoïde",
                voieAdmin: "IV",
                presentation: "SOLUMEDROL 1 g pdre/solv p sol inj",
                posologie: "Anaphylaxie 1 mg/kg, Asthme aigu grave 2 mg/kg",
                reconstitution: "Serum physiologique",
                dilution: "",
                administration: "IVD",
                remarques: "Dans l'AAG, entretien 0,5 mg/kg/6h au décours",
                lien: "https://www.vidal.fr/medicaments/solumedrol-1-g-pdre-solv-p-sol-inj-15189.html",
            },
            {
                isShown: false,
                title: "Salbutamol aérosol (Ventoline®)",
                AMM: "",
                indication: "Asthme aigu",
                classeMed: "β2-agoniste CD",
                voieAdmin: "nébulisation",
                presentation: "2,5 mg/2,5 ml sol p inhal p nébulis",
                posologie: "2,5 à 5mg",
                reconstitution: "",
                dilution: "",
                administration: "aérosol",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/ventoline-2-5-mg-2-5-ml-sol-p-inhal-p-nebulis-en-recipient-unidose-17379.html",
            },
            {
                isShown: false,
                title: "Dantrolène (Dantrium®)",
                AMM: "",
                indication: "HTM",
                classeMed: "Myorelaxant",
                voieAdmin: "IV",
                presentation: "DANTROLENE SODIQUE 20 mg pdre p sol inj",
                posologie: "2,5 mg/kg",
                reconstitution: "utiliser de l'EPPI",
                dilution: "1 ampoule dans 60 mL d'EPPI",
                administration: "IVL",
                remarques: "Après reconstitution, conserver à l'abri de la lumière et utiliser dans les 6h",
                lien: "https://www.vidal.fr/medicaments/dantrium-intraveineux-lyoph-p-us-parenter-4780.html",
            },
            {
                isShown: false,
                title: "Amiodarone (Cordarone®)",
                AMM: "",
                indication: "ACR",
                classeMed: "Anti-arythmique",
                voieAdmin: "IV",
                presentation: "CORDARONE 150 mg/3 ml sol inj en ampoule IV",
                posologie: "5 mg/kg",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "Renouvelable après 5 minutes",
                lien: "https://www.vidal.fr/medicaments/cordarone-150-mg-3-ml-sol-inj-en-ampoule-iv-4468.html",
            },
            {
                isShown: false,
                title: "Adrenaline",
                AMM: "",
                indication: "ACR",
                indication1: "Anaphylaxie",
                classeMed: "αβ-agoniste",
                voieAdmin: "IV",
                presentation: "ADRENALINE 1 mg/ml sol inj",
                posologie: "ACR 10 µg/kg, Anaphylaxie 1 µg/kg",
                reconstitution: "",
                dilution: "",
                administration: "IVD",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/adrenaline-1356.html",
            },
            {
                isShown: false,
                title: "Noradrenaline",
                AMM: "",
                indication: "Vasoplégie",
                classeMed: "α-agoniste",
                voieAdmin: "IV",
                presentation: "NorAdrenaline ",
                posologie: "Protocole (cf. Urgences)",
                reconstitution: "",
                dilution: "",
                administration: "IVSE",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/noradrenaline-7019.html",
            },
            {
                isShown: false,
                title: "Voriconazole (Vfend®)",
                AMM: "",
                indication: "Antifongique",
                classeMed: "Azolés ",
                voieAdmin: "IV",
                presentation: "VORICONAZOLE 200 mg pdre p sol p perf",
                posologie: "2 à 12 ans et < 50 kg : 18 mg/kg/j à J1 puis 16 mg/kg/j. Après 12 ans et > 50 kg, 12 mg/kg/j à J1 puis 8 mg/kg/j. En 2 prises.",
                reconstitution: "EPPI ou NaCl 0,9%, 19 mL pour obtenir 10 mg/mL.",
                dilution: "G5% ou NaCl 0,9%, 0,5 à 5 mg/mL.",
                administration: "IVL en 1 à 3h, sans dépasser 3 mg/kg/h.",
                remarques: "Risque d'accumulation de l'excipient chez l'insuffisant rénal : préférer la forme orale chaque fois que possible. Incompatible avec la nutrition parentérale et les bicarbonates.",
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
                administration: "IVL sur 60 minutes.",
                remarques: "Incompatible avec la nutrition parentérale et la ceftazidime.",
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
                administration: "IV en 30 minutes.",
                remarques: "Objectif : pic 60 à 80 mg/L ; résiduelle inférieure à 4 mg/L. Utiliser une ligne dédiée, ne pas mélanger avec béta-lactamines, héparines, dexaméthasone.",
                lien: "https://www.vidal.fr/medicaments/substances/amikacine-6676.html",
            },
            {
                isShown: false,
                title: "Amoxicilline (Clamoxyl®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "β-lactamine",
                voieAdmin: "IV",
                presentation: "",
                posologie: "100 à 200 mg/kg/j en 3 à 4 prises.",
                reconstitution: "Avec EPPI, 50 mg/mL.",
                dilution: "NaCl 0,9% (stable 6h) ou G5% (stable 1h), sans dépasser 100 mg/mL",
                administration: "IVL en 30 à 60 minutes.",
                remarques: "Ne pas mélanger avec les aminosides. Compatible en Y avec la nutrition parentérale.",
                lien: "https://www.vidal.fr/medicaments/substances/amoxicilline-310.html",
            },
            {
                isShown: false,
                title: "Amoxicilline + Acide Clavulanique (Augmentin®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "β-lactamine",
                voieAdmin: "IV",
                presentation: "",
                posologie: "Avant 3 mois ou 4kg, 100 mg/kg/j en 2 prises. > 3 mois mais < 40 kg, 150 mg/kg/j en 3 prises. Ensuite, posologies adulte.",
                reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", dilution: "NaCl 0,9% (stable 1h) ou G5% (stable 30 minutes).",
                administration: "IVL en 30 à 40 minutes. Jamais en moins de 5 minutes avant 3 mois.",
                remarques: "Attention, posologies et concentrations exprimées en Amoxicilline, veiller à ne pas dépasser la dose d'acide clavulanique maximale de 20 mg/kg/j. Incompatible avec les aminosides. Compatible en Y avec l'alimentation parentérale.",
                lien: "https://www.vidal.fr/medicaments/gammes/augmentin-784.html",
            },
            {
                isShown: false,
                title: "Amoxicilline + Acide Clavulanique (Augmentin®) prophylactique",
                AMM: "",
                indication: "Antibioprohylaxie",
                classeMed: "β-lactamine",
                voieAdmin: "IV",
                presentation: "",
                posologie: "50 mg/kg, sans dépasser 2g",
                remarques: "Réinjection toutes les 2h, 25 mg/kg",
                lien: "https://www.vidal.fr/medicaments/gammes/augmentin-784.html",
            },
            {
                isShown: false,
                title: "Cefazoline prophylactique",
                AMM: "",
                indication: "Antibioprohylaxie",
                classeMed: "β-lactamine (C2G)",
                voieAdmin: "IV",
                presentation: "",
                posologie: "50 mg/kg, sans dépasser 2g",
                remarques: "Réinjection toutes les 4h, 25 mg/kg",
                lien: "https://www.vidal.fr/medicaments/substances/cefazoline-856.html",
            },
            {
                isShown: false,
                title: "Cefamandole prophylactique",
                AMM: "",
                indication: "Antibioprohylaxie",
                classeMed: "β-lactamine (C2G)",
                voieAdmin: "IV",
                presentation: "",
                posologie: "40 mg/kg, sans dépasser 2g",
                remarques: "Réinjection toutes les 2h, 20 mg/kg",
                lien: "https://www.vidal.fr/medicaments/substances/cefamandole-853.html",
            },
            {
                isShown: false,
                title: "Clindamycine prophylactique",
                AMM: "",
                indication: "Antibioprohylaxie",
                classeMed: "Lincosamide",
                voieAdmin: "SE sur 30 minutes",
                presentation: "",
                posologie: "15 mg/kg, sans dépasser 600mg",
                remarques: "Réinjection toutes les 4h, 15 mg/kg",
                lien: "https://www.vidal.fr/medicaments/substances/clindamycine-6742.html",
            },
            {
                isShown: false,
                title: "Gentamicine prophylactique",
                AMM: "",
                indication: "Antibioprohylaxie",
                classeMed: "Aminoside",
                voieAdmin: "SE sur 30 minutes",
                presentation: "",
                posologie: "3 mg/kg, sans dépasser 160mg",
                remarques: "Pas de réinjection",
                lien: "https://www.vidal.fr/medicaments/substances/gentamicine-1610.html",
            },
            {
                isShown: false,
                title: "Metronidazole prophylactique",
                AMM: "",
                indication: "Antibioprohylaxie",
                classeMed: "Nitro-5-imidazolé",
                voieAdmin: "SE sur 30 minutes",
                presentation: "",
                posologie: "20 mg/kg, sans dépasser 1g",
                remarques: "Réinjection toutes les 8h, 10 mg/kg",
                lien: "https://www.vidal.fr/medicaments/substances/metronidazole-2370.html",
            },
            {
                isShown: false,
                title: "Vancomycine prophylactique",
                AMM: "",
                indication: "Antibioprohylaxie",
                classeMed: "Glycopeptide",
                voieAdmin: "SE sur 1 heure",
                presentation: "",
                posologie: "15 mg/kg, sans dépasser 2g",
                remarques: "Réinjection toutes les 12h, 15mg/kg. Surveiller les dosages.",
                lien: "https://www.vidal.fr/medicaments/substances/vancomycine-6898.html",
            },
            {
                isShown: false,
                title: "Amphotéricine B liposomale (Ambisome®, Fungizone®)",
                AMM: "",
                indication: "Antifongique",
                classeMed: "Antiparasitaire",
                voieAdmin: "IV",
                presentation: "AMPHOTERICINE B (liposomale) 50 mg pdre p dispers p perf",
                posologie: "3 mg/kg/j en 1 prise.",
                reconstitution: "Flacon de 50 mg avec 12 mL d'EPPI pour obtenir une solution-mère à 4 mg/mL.",
                dilution: "Dans du G5% - jamais dans du NaCl 0,9%. Entre 0,2 et 2 mg/mL. Utiliser le filtre de 5 µm pour mettre la solution reconstituée dans le G5% de dilution.",
                administration: "IV en 30 à 60 minutes.",
                remarques: "Filtre à 5 µm livré dans l'emballage, à utiliser pour rettenir d'éventuels agglomérats de liposomes qui se seraient formés pendant la reconstitution, en cas d'agitation insuffisante. Attention, incompatible avec le NaCl, les électrolytes et la nutrition parentérale.",
                lien: "https://www.vidal.fr/medicaments/substances/amphotericine-b-314.html",
            },
            {
                isShown: false,
                title: "Caspofungine (Cancidas®)",
                AMM: "",
                indication: "Antifongique",
                classeMed: "Échinocandines",
                voieAdmin: "IV",
                presentation: "CASPOFUNGINE (acétate) 50 mg pdre p sol diluer p perf ",
                posologie: "70 mg/m²/j à J1, puis 50 mg/m²/j, en 1 prise.",
                reconstitution: "Flacon de 50 mg avec 10,5 mL d'EPPI pour obtenir une solution mère à 5,2 mg/mL ou flacon de 70 mg avec 10,5 mL d'EPPI pour obtenir une solution-mère à 7,6 mg/mL.",
                dilution: "NaCl 0,9% (jamais dans du G5%). Max 0,5 mg/mL. Utiliser pur non dilué si restriction hydrique et VVC.",
                administration: "IVL en 60 minutes",
                remarques: "Incompatible avec le glucose, la nutrition parentérale et l'héparine.",
                lien: "https://www.vidal.fr/medicaments/substances/caspofungine-21849.html",
            },
            {
                isShown: false,
                title: "Cefamandole",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "C2G",
                voieAdmin: "IV",
                presentation: "CEFAMANDOLE (nafate) 750 mg pdre p sol inj",
                posologie: "150 mg/kg/j en 3 à 6 prises, max. 6 g/j",
                reconstitution: "Flacon de 750 mg avec 10 mL d'EPPI, de G5% ou de NaCl 0,9%.",
                dilution: "Si besoin dans EPPI, NaCl 0,9% ou G5%, pas de concentration cible.",
                administration: "IVL en 30 minutes.",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/cefamandole-853.html",
            },
            {
                isShown: false,
                title: "Cefepime (Axepim®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "C4G",
                voieAdmin: "IV",
                presentation: "CEFEPIME (chlorhydrate) 500 mg pdre p sol inj",
                posologie: "150 mg/kg/j en 3 prises, max 6 g/j",
                reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 à 200 mg/mL.",
                dilution: "Dans G5% ou NaCl 0,9%.",
                administration: "IVL en 30 minutes. ",
                remarques: "",
                lien: "https://www.vidal.fr/medicaments/substances/cefepime-6916.html",
            },
            {
                isShown: false,
                title: "Cefotaxime (Claforan®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "C3G",
                voieAdmin: "IV",
                presentation: "CEFOTAXIME (sel de na) 500 mg pdre p sol inj",
                posologie: "100 à 200 mg/kg/j, 300 mg/kg/j dans les infections méningées, en 3 à 4 prises, sans dépasser 24g/j.",
                reconstitution: "EPPI 10 mL.",
                dilution: "G5% ou NaCl 0,9%, 10 à 50 mg/mL, ne pas dépasser 150 mg/mL pour l'administration IV.",
                administration: "IVL en 20 à 60 minutes.",
                remarques: "Risque d'arythmie cardiaque en cas d'administration intraveineuse rapide sur cathéter veineux central.",
                lien: "https://www.vidal.fr/medicaments/substances/cefotaxime-861.html",
            },
            {
                isShown: false,
                title: "Ceftazidime (Fortum®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "C4G",
                voieAdmin: "IV",
                presentation: "CEFTAZIDIME 250 mg pdre p sol inj",
                posologie: "50 à 200 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.",
                reconstitution: "G5% ou NaCl 0,9%, 10mL.",
                dilution: "G5% ou NaCl 0,9%, stable 18h si concentration < 40 mg/mL, ne pas dépasser 180 mg/mL de concentration en cas de restriction hydrique.",
                administration: "IVL sur 30 minutes ou IVSE continue.",
                remarques: "Incompatible avec le bicarbonate, l'aciclovir et le ganciclovir.",
                lien: "https://www.vidal.fr/medicaments/gammes/fortum-3888.html",
            },
            {
                isShown: false,
                title: "Ceftriaxone (Rocéphine®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "C3G",
                voieAdmin: "IV",
                presentation: "CEFTRIAXONE (sodique) 1 g/10 ml pdre/solv p sol inj ",
                posologie: "50 à 100 mg/kg/j en 1 prise, sans dépasser 4g/j.",
                reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 mg/mL.",
                dilution: "G5% ou NaCl 0,9%, 10 à 40 mg/mL.",
                administration: "IVL sur 30 minutes.",
                remarques: "Incompatible avec le calcium, la vancomycine, le fluconazole, les aminosides, la nutrition parentérale. Contre indiqué avant 28j et en cas d'administration de calcium IV associée. Coloration jaune normale.",
                lien: "https://www.vidal.fr/medicaments/gammes/rocephine-8900.html",
            },
            {
                isShown: false,
                title: "Ciprofloxacine (Ciflox®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Fluoroquinolones",
                voieAdmin: "IV",
                presentation: "CIPROFLOXACINE (sulfate) 2 mg/ml sol p perf",
                posologie: "20 à 30 mg/kg/j - 45 mg/kg/j chez le drépanocytaire - en 2 à 3 prises, sans dépasser 1,2 g/j.",
                reconstitution: "",
                dilution: "",
                administration: "IVL sur 60 minutes.",
                remarques: "Incompatible avec la nutrition parentérale, les pénicillines, les héparines, les solutions alcalines. Privilégier la voie orale : la biodisponibilité est identique.",
                lien: "https://www.vidal.fr/medicaments/gammes/ciflox-1909.html",
            },
            {
                isShown: false,
                title: "Clindamycine (Dalacine®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Lincosamide",
                voieAdmin: "IV",
                presentation: "CLINDAMYCINE (phosphate) 600 mg/4 ml sol inj",
                posologie: "30 à 40 mg/kg/j en 3 à 4 prises, sans dépasser 2,4 g/j.",
                reconstitution: "NA.",
                dilution: "G5% ou NaCl 0,9%, max. 18 mg/mL.",
                administration: "IVL en 30 minutes, ne pas dépasser 20 mg/kg/h ou 30 mg/min.",
                remarques: "Incompatible avec l'ampicilline, la phénytoïne, les barbituriques, l'aminophylline, le calcium, le magnésium, la ceftriaxone, la ciprofloxacine et la ranitidine.",
                lien: "https://www.vidal.fr/medicaments/gammes/dalacine-2500.html",
            },
            {
                isShown: false,
                title: "Cloxacilline (Orbénine®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "β-lactamine",
                voieAdmin: "IV",
                presentation: "CLOXACILLINE (sodique) 1 g pdre p sol inj",
                posologie: "100 à 200 mg/kg/j en 4 à 6 prises, max. 12 g/j.",
                reconstitution: "EPPI, G5% ou NaCl 0,9%, 1g dans 16 mL.",
                dilution: "G5% ou NaCl 0,9%, 10 mg/mL.",
                administration: "IVL sur 60 minutes.",
                remarques: "Incompatible avec la nutrition parentérale.",
                lien: "https://www.vidal.fr/medicaments/gammes/orbenine-7195.html",
            },
            {
                isShown: false,
                title: "Fluconazole (Triflucan®)",
                AMM: "",
                indication: "Antifongiques",
                classeMed: "Azolés",
                voieAdmin: "IV",
                presentation: "FLUCONAZOLE 2 mg/ml sol p perf",
                posologie: "3 à 12 mg/kg/j en 1 prise.",
                reconstitution: "",
                dilution: "",
                administration: "IVL en 30 minutes, 120 minutes si > 6 mg/kg/j.",
                remarques: "Inhibiteur enzymatique. Teneur en sodium significative à 0,155 mEq/mL.",
                lien: "https://www.vidal.fr/medicaments/gammes/triflucan-10578.html",
            },
            {
                isShown: false,
                title: "Fosfomycine (Fosfocine®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Antibactérien",
                voieAdmin: "IV",
                presentation: "FOSFOMYCINE (disodique) 1 g pdre p sol p perf ",
                posologie: "100 à 200 mg/kg/j en 2 à 4 prises, sans dépasser 16 g/j.",
                reconstitution: "1g avec 10 mL d'EPPI. 4g avec 15 mL d'EPPI.",
                dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.",
                administration: "IVL en 60 minutes.",
                remarques: "Apports en sodium significatifs à 14,3 mEq/g.",
                lien: "https://www.vidal.fr/medicaments/substances/fosfomycine-1547.html",
            },
            {
                isShown: false,
                title: "Gentamicine (Gentalline®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Aminoside",
                voieAdmin: "IV",
                presentation: "GENTAMICINE (sulfate) 40 mg/2 ml sol inj",
                posologie: "5 à 8 mg/kg/j en 1 prise.",
                reconstitution: "NA.",
                dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.",
                administration: "IVL en 30 minutes.",
                remarques: "Objectifs : pic 60 à 80 mg/L, résiduelle inférieure à 1 mg/L. Incompatible avec les pénicillines et les héparines > 1 UI/mL.",
                lien: "https://www.vidal.fr/medicaments/substances/gentamicine-1610.html",
            },
            {
                isShown: false,
                title: "Imipénème-Cilastine (Tienam®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "β-lactamine",
                voieAdmin: "IV",
                presentation: "CILASTATINE (sodique) 500 mg + IMIPENEM 500 mg pdre p sol p perf",
                posologie: "60 à 100 mg/kg/j en 4 prises sans dépasser 4 g/j.",
                reconstitution: "G5% ou NaCl 0,9%, 25 mg/mL.",
                dilution: "G5% ou NaCl 0,9%, 5 mg/mL, max. 7 mg/mL si restriction hydrique, stable 4h.",
                administration: "IVL en 30 minutes, 60 minutes au delà de 500 mg.",
                remarques: "Posologies et concentrations exprimées en dose d'Imipgène. Contre indique chez l'insuffisant rénale. Compatible avec la nutrition parentérale.",
                lien: "https://www.vidal.fr/medicaments/gammes/tienam-10335.html",
            },
            {
                isShown: false,
                title: "Lévofloxacine (Tavanic®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Fluoroquinolones",
                voieAdmin: "IV",
                presentation: "LEVOFLOXACINE 5 mg/ml sol p perf ",
                posologie: "20 mg/kg/j de 6 mois à 5 ans, en 2 prises. 10 mg/kg/j au delà de 5 ans, en 1 prise, sans dépasser 1g/j.",
                reconstitution: "",
                dilution: "",
                administration: "IVL en 60 minutes.",
                remarques: "Incompatible avec les bicarbonates et les héparines. Privilégier la voie orale : la biodisponibilité est identique.",
                lien: "https://www.vidal.fr/medicaments/gammes/tavanic-17333.html",
            },
            {
                isShown: false,
                title: "Méropénème (Meronem®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "β-lactamine",
                voieAdmin: "IV",
                presentation: "MEROPENEM 1 g pdre p sol inj/p perf ",
                posologie: "60 à 120 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.",
                reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.",
                dilution: "NaCl 0,9% (stable 8h) ou G5% (stable 2h), 1 à 20 mg/mL.",
                administration: "IVL en 30 minutes.",
                remarques: "Compatible avec la nutrition parentérale.",
                lien: "https://www.vidal.fr/medicaments/meronem-1-g-pdre-p-sol-inj-p-perf-10764.html",
            },
            {
                isShown: false,
                title: "Métronidazole (Flagyl®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Imidazolés",
                voieAdmin: "IV",
                presentation: "METRONIDAZOLE 0,5 % sol p perf",
                posologie: "30 mg/kg/j en 3 à 4 prises, sans dépasser 4 g/j.",
                reconstitution: "NA.",
                dilution: "NA.",
                administration: "IVL en 30 minutes.",
                remarques: "Compatible avec la nutrition parentérale.",
                lien: "https://www.vidal.fr/medicaments/gammes/flagyl-3734.html",
            },
            {
                isShown: false,
                title: "Pipéracilline-Tazobactam (Tazocilline®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "β-lactamine",
                voieAdmin: "IV",
                presentation: "PIPERACILLINE (sodique) 2 g + TAZOBACTAM (sodique) 250 mg pdre p sol inj",
                posologie: "300 mg/kg/j, en 3 à 4 prises ou en continu, sans dépasser 16 g/j.",
                reconstitution: "EPPI, G5% ou NaCl 0,9%, 200 mg/mL.",
                dilution: "G5 ou NaCl 0,9%, 20 à 80 mg/mL, stable 24h.",
                administration: "IVL en 30 minutes.",
                remarques: "Posologies et concentrations exprimées en pipéracilline. Incompatible avec les aminosides et les bicarbonates. Compatible avec la nutrition parentérale.",
                lien: "https://www.vidal.fr/medicaments/tazocilline-2-g-0-25-g-pdre-p-sol-p-perf-127614.html",
            },
            {
                isShown: false,
                title: "Rifampicine (Rifadine®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Anti-tuberculeux",
                voieAdmin: "IV",
                presentation: "RIFAMPICINE (sel de na) 600 mg/10 ml pdre/solv p sol diluer p perf",
                posologie: "10 à 30 mg/kg/j en 1 prise (tuberculose) ou 2 prises (autres indications), sans dépasser 1,2 g/j.",
                reconstitution: "EPPI 60 mg/mL.",
                dilution: "G5% ou NaCl 0,9%, usuel 2,4 mg/mL, ne pas dépasser 6 mg/mL, stable 6h.",
                administration: "IVL en 30 minutes.",
                remarques: "Incompatible avec la nutrition parentérale. Très agressif en cas d'extravasation. Inducteur enzymatique.",
                lien: "https://www.vidal.fr/medicaments/gammes/rifadine-8827.html",
            },
            {
                isShown: false,
                title: "Ticarcilline-Acide Clavulanique (Claventin®, Timentin®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "β-lactamine",
                voieAdmin: "IV",
                presentation: "TIMENTIN 3,2 g pdre p sol inj",
                posologie: "225 à 300 mg/kg/j en 3 à 4 prises, sans dépasser 18 g/j.",
                reconstitution: "EPPI ou NaCl 0,9%.",
                dilution: "G5% ou NaCl 0,9%, 30 à 50 mg/mL, stable 6h.",
                administration: "IVL sur 30 minutes.",
                remarques: "Posologies et concentrations exprimées en ticarcilline. Max 5 mg/kg/prise et 20 mg/kg/j d'acide clavulanique. Incompatible avec les aminosideS, bicarbonates et la nutrition parentérale. Teneur en sodium 5,2 mEq/g et teneur en potassium 0,33 mEq/g. ",
                lien: "https://www.vidal.fr/medicaments/substances/ticarcilline-3998.html",
            },
            {
                isShown: false,
                title: "Triméthoprime-Sulfaméthoxazole (Bactrim®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Sulfamide",
                voieAdmin: "IV",
                presentation: "SULFAMETHOXAZOLE 400 mg/5 ml + TRIMETHOPRIME 80 mg/5 ml sol diluer p perf",
                posologie: "30 à 60 mg/kg/j en 2 prises (curatif pneumocystis carinii : 100 mg/kg/j en 3 prises).",
                reconstitution: "",
                dilution: "G5% ou NaCl 0,9% 3,2 mg/mL (stable 6h), max. 8 mg/mL si restriction hydrique (stable 1h).",
                administration: "IVL sur 60 minutes.",
                remarques: "Posologies et concentrations exprimées en Sulfaméthoxazole. Peut être administré pur sur VVC. Incompatible avec la nutrition parentérale.",
                lien: "https://www.vidal.fr/medicaments/gammes/bactrim-897.html",
            },
            {
                isShown: false,
                title: "Vancomycine (Vancocine®)",
                AMM: "",
                indication: "Antibiothérapie",
                classeMed: "Glycopeptide",
                voieAdmin: "IV",
                presentation: "VANCOMYCINE (chlorhydrate) 250 mg pdre p sol diluer p perf ",
                posologie: "40 à 60 mg/kg/j en 4 prises ou en continu.",
                reconstitution: "EPPI 50 mg/mL.",
                dilution: "G5% ou NaCl 0,9%, ne pas dépasser 10 mg/mL, stable 24h.",
                administration: "IVL en 60 minutes ou IVSE.",
                remarques: "Objectif : T0 20-25 mg/mL. Ralentir la perfusion en cas de réaction cutanée (Redman Syndrome). Compatible avec la nutrition parentérale, les lipides IV et l'héparine < 1 UI/mL.",
                lien: "https://www.vidal.fr/medicaments/substances/vancomycine-6898.html",
            },
        ];
        this.chirurgie = [
            {
                isShown: false,
                intitule: "Dilatation anale",
                specialite: "Chir. proctologique",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Métronidazole",
                posologieATB1: "20 mg/kg",
                posologieNumATB1: 20,
                administrationATB1: "IVL",
                doseMaxATB1: 1000,
                delaiReinjectionATB1: "8 heures",
                posologiereinjectionATB1: "",
                posologiereinjectionNumATB1: 10,
                doseMaxReinjectionATB1: 500,
            },
            {
                isShown: false,
                intitule: "Fistule anale",
                specialite: "Chir. proctologique",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Métronidazole",
                posologieATB1: "20 mg/kg",
                posologieNumATB1: 20,
                administrationATB1: "IVL",
                doseMaxATB1: 1000,
                delaiReinjectionATB1: "8 heures",
                posologiereinjectionATB1: "",
                posologiereinjectionNumATB1: 10,
                doseMaxReinjectionATB1: 500,
            },
            {
                isShown: false,
                intitule: "Biopsie rectale",
                specialite: "Chir. proctologique",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Métronidazole",
                posologieATB1: "20 mg/kg",
                posologieNumATB1: 20,
                administrationATB1: "IVL",
                doseMaxATB1: 1000,
                delaiReinjectionATB1: "8 heures",
                posologiereinjectionATB1: "",
                posologiereinjectionNumATB1: 10,
                doseMaxReinjectionATB1: 500,
            },
            {
                isShown: false,
                intitule: "Fermeture de stomie",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Abaissement colique",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Colostomie",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Colectomie",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Iléostomie",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Jéjunostomie",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Résection de grêle",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Anastomose bilio-digestive",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Pancréatectomie céphalique",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Oeso-coloplastie",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Pancréatectomie caudale",
                specialite: "Viscerale",
                classeConta: "Propre",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Kyste du cholédoque",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Cholecystectomie",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Pose de prothèse biliaire",
                specialite: "Endoscopie interventionnelle",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Endoscopie des voies biliaires",
                specialite: "Endoscopie interventionnelle",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Gastrostomie chirurgicale",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Duplication oesophagienne",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Appendicectomie simple",
                specialite: "Viscerale",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Splénectomie",
                specialite: "Viscerale",
                classeConta: "Propre",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
            },
            {
                isShown: false,
                intitule: "Hernie inguinale",
                specialite: "Viscerale",
                classeConta: "Propre",
                VoieATB: "IV",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Hernie ombilicale",
                specialite: "Viscerale",
                classeConta: "Propre",
                VoieATB: "IV",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Eventration",
                specialite: "Viscerale",
                classeConta: "Propre",
                VoieATB: "IV",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Coelioscopie exploratrice",
                specialite: "Viscerale",
                classeConta: "Propre",
                VoieATB: "IV",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Nissen",
                specialite: "Viscerale",
                classeConta: "Propre",
                VoieATB: "IV",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Sténose du pylore",
                specialite: "Viscerale",
                classeConta: "Propre",
                VoieATB: "IV",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Fibroscopie OGD",
                specialite: "Endoscopie diagnostique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Coloscopie",
                specialite: "Endoscopie diagnostique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Pose de prothèse digestive",
                specialite: "Endoscopie interventionnelle",
                classeConta: "Propre",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Ligature de varices oesophagiennes hémorragiques",
                specialite: "Endoscopie interventionnelle",
                classeConta: "Contaminée",
                VoieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Sclérose de varices oesophagiennes",
                specialite: "Endoscopie interventionnelle",
                classeConta: "Contaminée",
                VoieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Gastrostomie endoscopique",
                specialite: "Endoscopie interventionnelle",
                classeConta: "Contaminée",
                VoieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Ophtalmologie",
                specialite: "Ophtalmologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Ophtalmologie - patient immunodéprimé",
                specialite: "Ophtalmologie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefuroxime",
                administrationATB1: "Intra-oculaire",
            },
            {
                isShown: false,
                intitule: "Ophtalmologie - patient diabétique",
                specialite: "Ophtalmologie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefuroxime",
                administrationATB1: "Intra-oculaire",
            },
            {
                isShown: false,
                intitule: "Ophtalmologie - implantation secondaire",
                specialite: "Ophtalmologie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefuroxime",
                administrationATB1: "Intra-oculaire",
            },
            {
                isShown: false,
                intitule: "Reprise endo-oculaire < 1 mois",
                specialite: "Ophtalmologie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefuroxime",
                administrationATB1: "Intra-oculaire",
            },
            {
                isShown: false,
                intitule: "Cataracte avec ouverture capsulaire",
                specialite: "Ophtalmologie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefuroxime",
                administrationATB1: "Intra-oculaire",
            },
            {
                isShown: false,
                intitule: "Effraction capsulaire",
                specialite: "Ophtalmologie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefuroxime",
                administrationATB1: "Intra-oculaire",
            },
            {
                isShown: false,
                intitule: "Kyste de l'ovaire",
                specialite: "Gynécologique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Coelioscopie exploratrice",
                specialite: "Gynécologique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Amygdalectomie",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Adénoidectomie (VG)",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Aérateurs trans-tympaniques (ATT, yoyo)",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Chirurgie vélo-palatine",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Cervicotomie",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Curage ganglionnaire cervical",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Thyroïdectomie",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Trachéotomie",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Oreille moyenne - hors infection",
                specialite: "ORL",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Avulsion dentaire - hors infection",
                specialite: "Stomatologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Chirurgie cervico-faciale sans ouverture bucco-pharyngée",
                specialite: "Stomatologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Chirurgie des glandes salivaires",
                specialite: "Stomatologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Torsion d'annexe",
                specialite: "Gynécologique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Cryopréservation ovarienne",
                specialite: "Gynécologique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Génitoplastie",
                specialite: "Gynécologique",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                presentationATB1: "500 mg, 1g ou 2g",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Chirurgie naso-sinusienne avec méchage",
                specialite: "ORL",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Avulsion de dent en désinclusion",
                specialite: "Stomatologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Nagata + greffe osseuse",
                specialite: "ORL",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Implant cochléaire",
                specialite: "Stomatologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Chirurgie maxillo-faciale avec ouverture bucco-pharyngée",
                specialite: "Stomatologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Parties molles non infectées",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Ablation de matériel orthopédique",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Arthroscopie diagnostique",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Fracture fermée avec ostéosynthèse extra-focale",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Geste osseux",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Mise en place de matériel",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Ligamentoplastie",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Fracture fermée avec ostéosynthèse intra-focale",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Prothèse articulaire",
                specialite: "Orthopédie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Fracture ouverte Cauchoix 1",
                specialite: "Orthopédie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Plaie des parties molles non souillée",
                specialite: "Orthopédie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Plaie articulaire non souillée",
                specialite: "Orthopédie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Fracture ouverte Cauchoix 2 ou 3",
                specialite: "Orthopédie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Plaie des parties molles contuse ou souillée",
                specialite: "Orthopédie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Plaie articulaire contuse ou souillée",
                specialite: "Orthopédie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Naevus",
                specialite: "Plastique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Enchondrome",
                specialite: "Plastique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Kyste sébacé",
                specialite: "Plastique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Chirurgie de la lèvre",
                specialite: "Plastique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Greffe maxillaire",
                specialite: "Plastique",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
            },
            {
                isShown: false,
                intitule: "Plastie cutanée",
                specialite: "Plastique",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
            },
            {
                isShown: false,
                intitule: "Ablation de prothèse",
                specialite: "Plastique",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Augmentin",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
            },
            {
                isShown: false,
                intitule: "Rhinoplastie",
                specialite: "Plastique",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
            },
            {
                isShown: false,
                intitule: "Pose de prothèse d'expansion",
                specialite: "Plastique",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
            },
            {
                isShown: false,
                intitule: "Chirurgie nasale avec greffe cartilagineuse",
                specialite: "Plastique",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
            },
            {
                isShown: false,
                intitule: "Médiastinoscopie",
                specialite: "Thoracique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Vidéothoracoscopie",
                specialite: "Thoracique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Drainage thoracique",
                specialite: "Thoracique",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Chirurgie médiastinale",
                specialite: "Thoracique",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Décortication pleurale",
                specialite: "Thoracique",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Résection pleurale",
                specialite: "Thoracique",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Exérèse pulmonaire",
                specialite: "Thoracique",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Clindamycine",
                posologieATBAllergie1: "15 mg/kg",
                posologieNumATBAllergie1: 15,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 600,
                delaiReinjectionATBAllergie1: "4 heures",
                posologiereinjectionATBAllergie1: "15 mg/kg",
                posologiereinjectionNumATBAllergie1: 15,
                doseMaxReinjectionATBAllergie1: 600,
                ATBAllergie2: "Gentamicine",
                posologieATBAllergie2: "3 mg/kg",
                posologieNumATBAllergie2: 3,
                administrationATBAllergie2: "SE/30 min",
                doseMaxATBAllergie2: 160,
                delaiReinjectionATBAllergie2: "Pas de réinjection",
                posologiereinjectionATBAllergie2: "",
                posologiereinjectionNumATBAllergie2: 0,
                doseMaxReinjectionATBAllergie2: 0,
            },
            {
                isShown: false,
                intitule: "Ectopie",
                specialite: "Urologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Hydrocèle",
                specialite: "Urologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Posthectomie",
                specialite: "Urologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Néphrectomie",
                specialite: "Urologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Cryopréservation testiculaire",
                specialite: "Urologie",
                classeConta: "Propre",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Uréthro-cystoscopie simple",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Valves de l'urèthre postérieur",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Non recommandée",
                remarque: "",
            },
            {
                isShown: false,
                intitule: "Néphrolithotomie percutanée",
                specialite: "Urologie",
                classeConta: "Propre",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
            },
            {
                isShown: false,
                intitule: "Urétroscopie",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
            },
            {
                isShown: false,
                intitule: "Montée de sonde urétérale",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
            },
            {
                isShown: false,
                intitule: "Traitement des lithiases rénale ou urétérales",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
            },
            {
                isShown: false,
                intitule: "Pyéloplastie",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
            },
            {
                isShown: false,
                intitule: "Geste anti reflux vésico-urétéral",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
            },
            {
                isShown: false,
                intitule: "Hypospade",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
            },
            {
                isShown: false,
                intitule: "Transplantation rénale (greffe)",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefuroxime",
                posologieATB1: "",
                posologieNumATB1: 0,
                administrationATB1: "IVL",
                doseMaxATB1: 0,
                delaiReinjectionATB1: "",
                posologiereinjectionATB1: "",
                posologiereinjectionNumATB1: 0,
                doseMaxReinjectionATB1: 0,
            },
            {
                isShown: false,
                intitule: "Bricker",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "10 mg/kg",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
                ATBAllergie2: "Métronidazole",
                posologieATBAllergie2: "20 mg/kg",
                posologieNumATBAllergie2: 20,
                administrationATBAllergie2: "IVL",
                doseMaxATBAllergie2: 1000,
                delaiReinjectionATBAllergie2: "8 heures",
                posologiereinjectionATBAllergie2: "10 mg/kg",
                posologiereinjectionNumATBAllergie2: 10,
                doseMaxReinjectionATBAllergie2: 500,
            },
            {
                isShown: false,
                intitule: "Entérocystoplastie",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "10 mg/kg",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
                ATBAllergie2: "Métronidazole",
                posologieATBAllergie2: "20 mg/kg",
                posologieNumATBAllergie2: 20,
                administrationATBAllergie2: "IVL",
                doseMaxATBAllergie2: 1000,
                delaiReinjectionATBAllergie2: "8 heures",
                posologiereinjectionATBAllergie2: "10 mg/kg",
                posologiereinjectionNumATBAllergie2: 10,
                doseMaxReinjectionATBAllergie2: 500,
            },
            {
                isShown: false,
                intitule: "Young Dees",
                specialite: "Urologie",
                classeConta: "Contaminée",
                recommandation: "Recommandée",
                remarque: "",
                ATB1: "Cefazoline",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "4 heures",
                posologiereinjectionATB1: "25 mg/kg",
                posologiereinjectionNumATB1: 25,
                doseMaxReinjectionATB1: 1000,
                ATB2: "Métronidazole",
                posologieATB2: "20 mg/kg",
                posologieNumATB2: 20,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "8 heures",
                posologiereinjectionATB2: "10 mg/kg",
                posologiereinjectionNumATB2: 10,
                doseMaxReinjectionATB2: 500,
                ATBAllergie1: "Gentamicine",
                posologieATBAllergie1: "3 mg/kg",
                posologieNumATBAllergie1: 3,
                administrationATBAllergie1: "SE/30 min",
                doseMaxATBAllergie1: 160,
                delaiReinjectionATBAllergie1: "Pas de réinjection",
                posologiereinjectionATBAllergie1: "",
                posologiereinjectionNumATBAllergie1: 0,
                doseMaxReinjectionATBAllergie1: 0,
                ATBAllergie2: "Métronidazole",
                posologieATBAllergie2: "20 mg/kg",
                posologieNumATBAllergie2: 20,
                administrationATBAllergie2: "IVL",
                doseMaxATBAllergie2: 1000,
                delaiReinjectionATBAllergie2: "8 heures",
                posologiereinjectionATBAllergie2: "10 mg/kg",
                posologiereinjectionNumATBAllergie2: 10,
                doseMaxReinjectionATBAllergie2: 500,
            },
            {
                isShown: false,
                intitule: "Laparoschisis",
                specialite: "Viscerale néonatale première",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefotaxime",
                presentationATB1: "500 mg pdr inj",
                posologieATB1: "100 mg/kg",
                posologieNumATB1: 100,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "Réinjection selon bactériologie",
                ATB2: "Gentamicine",
                posologieATB2: "3 mg/kg",
                posologieNumATB2: 3,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "Pas de réinjection",
                ATB3: "Métronidazole",
                posologieATB3: "20 mg/kg",
                posologieNumATB3: 20,
                administrationATB3: "IVL : si IMF ou ouverture du tube digestif",
                doseMaxATB3: 1000,
                delaiReinjectionATB3: "Réinjection selon bactériologie",
            },
            {
                isShown: false,
                intitule: "Omphalocele avec Schuster",
                specialite: "Viscerale néonatale première",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Cefotaxime",
                presentationATB1: "500 mg pdr inj",
                posologieATB1: "100 mg/kg",
                posologieNumATB1: 100,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "Réinjection selon bactériologie",
                ATB2: "Gentamicine",
                posologieATB2: "3 mg/kg",
                posologieNumATB2: 3,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "Pas de réinjection",
                ATB3: "Métronidazole",
                posologieATB3: "20 mg/kg",
                posologieNumATB3: 20,
                administrationATB3: "IVL : si IMF ou ouverture du tube digestif",
                doseMaxATB3: 1000,
                delaiReinjectionATB3: "Réinjection selon bactériologie",
            },
            {
                isShown: false,
                intitule: "Occlusion néonatale",
                specialite: "Viscerale néonatale première",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Augmentin",
                presentationATB1: "500 mg pdr inj",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "Réinjection selon bactériologie",
                ATB2: "Gentamicine",
                posologieATB2: "3 mg/kg",
                posologieNumATB2: 3,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "Pas de réinjection",
                ATB3: "Métronidazole",
                posologieATB3: "20 mg/kg",
                posologieNumATB3: 20,
                administrationATB3: "IVL : si suspicion IMF",
                doseMaxATB3: 1000,
                delaiReinjectionATB3: "Réinjection selon bactériologie",
            },
            {
                isShown: false,
                intitule: "Entérostomie",
                specialite: "Viscerale néonatale première",
                classeConta: "Contaminée",
                voieATB: "IV",
                recommandation: "Recommandée",
                ATB1: "Augmentin",
                presentationATB1: "500 mg pdr inj",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "Réinjection selon bactériologie",
                ATB2: "Gentamicine",
                posologieATB2: "3 mg/kg",
                posologieNumATB2: 3,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "Pas de réinjection",
                ATB3: "Métronidazole",
                posologieATB3: "20 mg/kg",
                posologieNumATB3: 20,
                administrationATB3: "IVL : si suspicion IMF",
                doseMaxATB3: 1000,
                delaiReinjectionATB3: "Réinjection selon bactériologie",
            },
            {
                isShown: false,
                intitule: "Hernie du cordon",
                specialite: "Viscerale néonatale première",
                classeConta: "Propre",
                voieATB: "",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Omphalocele sans Schuster",
                specialite: "Viscerale néonatale première",
                classeConta: "Propre",
                voieATB: "",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Hernie diaphragmatique",
                specialite: "Viscerale néonatale différée",
                classeConta: "Propre",
                voieATB: "",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Fermeture du canal artériel",
                specialite: "Viscerale néonatale différée",
                classeConta: "Propre",
                voieATB: "",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Hernie inguinale",
                specialite: "Viscerale néonatale différée",
                classeConta: "Propre",
                voieATB: "",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Hernie de l'ovaire",
                specialite: "Viscerale néonatale différée",
                classeConta: "Propre",
                voieATB: "",
                recommandation: "Non recommandée",
            },
            {
                isShown: false,
                intitule: "Anoplastie",
                specialite: "Viscerale néonatale",
                classeConta: "Contaminée",
                voieATB: "",
                recommandation: "Recommandée",
                ATB1: "Augmentin",
                presentationATB1: "500 mg pdr inj",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2h",
            },
            {
                isShown: false,
                intitule: "Transposition anale",
                specialite: "Viscerale néonatale",
                classeConta: "Contaminée",
                voieATB: "",
                recommandation: "Recommandée",
                ATB1: "Augmentin",
                presentationATB1: "500 mg pdr inj",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "2h",
            },
            {
                isShown: false,
                intitule: "Fermeture de Schuster (omphalocele)",
                specialite: "Viscerale néonatale",
                classeConta: "Contaminée",
                voieATB: "",
                recommandation: "Recommandée",
                ATB1: "Ceftazidime",
                presentationATB1: "250 mg pdr inj",
                posologieATB1: "50 mg/kg",
                posologieNumATB1: 50,
                administrationATB1: "IVL sur 30 minutes",
                doseMaxATB1: 2000,
                delaiReinjectionATB1: "Selon résultats de bactériologie, toutes les 8h",
                ATB2: "Gentamicine",
                posologieATB2: "3 mg/kg",
                posologieNumATB2: 3,
                administrationATB2: "IVL",
                doseMaxATB2: 1000,
                delaiReinjectionATB2: "Pas de réinjection",
                ATB3: "Vancomycine",
                posologieATB3: "15 mg/kg",
                posologieNumATB3: 20,
                administrationATB3: "IVSE sur 1h",
                doseMaxATB3: 2000,
                delaiReinjectionATB3: "Réinjection selon bactériologie, toutes les 12h",
            },
        ];
    }
    ServiceDataProvider.prototype.orderChirurgie = function () {
        var sorted = this.chirurgie.sort(function (a, b) { return a.intitule > b.intitule ? 1 : -1; });
        var grouped = sorted.reduce(function (groups, chir) {
            var letter = chir.intitule.charAt(0);
            groups[letter] = groups[letter] || [];
            groups[letter].push(chir);
            return groups;
        }, {});
        var result = Object.keys(grouped).map(function (key) { return ({ key: key, chirurgie: grouped[key] }); });
    };
    ;
    ServiceDataProvider.prototype.filterChirurgie = function (searchTerm) {
        return this.chirurgie.filter(function (item) {
            return item.intitule
                .toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ServiceDataProvider.prototype.filterSpecialite = function (searchTermSpecialite) {
        return this.chirurgie.filter(function (item) {
            return item.specialite
                .toLowerCase().indexOf(searchTermSpecialite.toLowerCase()) > -1;
        });
    };
    ServiceDataProvider.prototype.orderMedicaments = function () {
        var sorted = this.medicaments.sort(function (a, b) { return a.title > b.title ? 1 : -1; });
        var grouped = sorted.reduce(function (groups, meds) {
            var letter = meds.title.charAt(0);
            groups[letter] = groups[letter] || [];
            groups[letter].push(meds);
            return groups;
        }, {});
        var result = Object.keys(grouped).map(function (key) { return ({ key: key, cards: grouped[key] }); });
    };
    ;
    ServiceDataProvider.prototype.filterMedicaments = function (searchTerm) {
        return this.medicaments.filter(function (item) {
            return item.title
                .toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ;
    ServiceDataProvider.prototype.filterIndication = function (searchTerm) {
        return this.medicaments.filter(function (item) {
            return item.indication
                .toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ;
    ServiceDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ServiceDataProvider);
    return ServiceDataProvider;
}());

;
//# sourceMappingURL=liste_medicaments.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dispositifs_ani_ani__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chirurgies_extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chirurgies_scoliose_scoliose__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProtocolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProtocolesPage = /** @class */ (function () {
    function ProtocolesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.protocoles = [
            { titre: "Extrophie vésicale", auteurs: "Dr. Charlotte Fait, Pr. Souhayl Dahmani", datepublication: "21/09/2020", page: __WEBPACK_IMPORTED_MODULE_3__chirurgies_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */], objectif1: "réduction des jours de réanimation avec intubation.", objectif2: "réhabilitation précoce avec passage de la première nuit en SSPI puis USC à J1.", objectif3: "optimisation de l'analgésie.", objectif4: "" },
            { titre: "Scoliose", auteurs: "Dr. Florence Julien-Marsollier, Pr. Souhayl Dahmani", datepublication: "15/11/2018", page: __WEBPACK_IMPORTED_MODULE_4__chirurgies_scoliose_scoliose__["a" /* ScoliosePage */], objectif1: "anticiper les risques.", objectif2: "favoriser réhabilitation accélérée après chirurgie : raccourcir les séjours en SSPI & USC.", objectif3: "", objectif4: "" },
        ];
        this.dispositifs = [
            { nom: "ANI", nomcomplet: "Analgesia/Nociception Index", page: __WEBPACK_IMPORTED_MODULE_2__pages_dispositifs_ani_ani__["a" /* AniPage */] },
        ];
        this.ProtocolesView = 1;
    }
    ProtocolesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProtocolesPage');
    };
    ProtocolesPage.prototype.openProtocole = function (index) {
        this.navCtrl.push(this.protocoles[index].page);
    };
    ProtocolesPage.prototype.openDispositif = function (index) {
        this.navCtrl.push(this.dispositifs[index].page);
    };
    ProtocolesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-protocoles',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\protocoles\protocoles.html"*/'\n<ion-header>\n  <br>\n  <!-- HEADER MENU  -->\n  <div class="header"> \nProtocoles & dispositifs</div>\n      <br>\n  \n      <ion-segment color="turquoise-fonce" [(ngModel)]="ProtocolesView">\n        <ion-segment-button value="1">Interventions</ion-segment-button>\n        <ion-segment-button value="2">Dispostifs</ion-segment-button>\n      </ion-segment>\n <!-- END HEADER -->\n</ion-header>\n\n <ion-content >\n\n  <div *ngIf="ProtocolesView == 1">\n  <ion-card (click)="openProtocole(index)" class="drogueContainer" *ngFor="let entry of protocoles, let index = index">\n    <ion-card-content  class="cardRecos">\n    <div class="headerProtocoles">\n    Auteurs : {{entry.auteurs}}\n    <br>\n    Publication : {{entry.datepublication}}\n    </div>\n    <div class="contentProtocoles">\n      <ion-icon start name="list-box"></ion-icon> &nbsp; <b>{{entry.titre}}</b>\n    <hr> </div>\n      <div class="objectifsProtocoles">\n      Objectifs :\n        <li *ngIf = "entry.objectif1"> {{entry.objectif1}}</li>\n        <li *ngIf = "entry.objectif2"> {{entry.objectif2}}</li>\n        <li *ngIf = "entry.objectif3"> {{entry.objectif3}}</li>\n        <li *ngIf = "entry.objectif4"> {{entry.objectif4}}</li>\n    </div>\n    </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf="ProtocolesView == 2">\n\n    <ion-card (click)="openDispositif(index)" class="drogueContainer" *ngFor="let entry of dispositifs, let index = index">\n      <ion-card-content  class="cardRecos">\n      <div class="nomDispositif">\n        <ion-icon start name="easel"></ion-icon> &nbsp; <b>{{entry.nom}}</b></div>\n      <div class="nomcompletDispostif">{{entry.nomcomplet}}</div>\n      </ion-card-content>\n      </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\protocoles\protocoles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProtocolesPage);
    return ProtocolesPage;
}());

//# sourceMappingURL=protocoles.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_accueil__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_pages_info_info__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_pages_protocoles_protocoles__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_pages_recommandations_recommandations__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_pages_scores_scores__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_pages_medicaments_medicaments__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MainPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.medicamentsRoot = __WEBPACK_IMPORTED_MODULE_7__main_pages_medicaments_medicaments__["a" /* MedicamentsPage */];
        this.anesthesieRoot = __WEBPACK_IMPORTED_MODULE_2__accueil_accueil__["a" /* AccueilPage */];
        this.protocolesRoot = __WEBPACK_IMPORTED_MODULE_4__main_pages_protocoles_protocoles__["a" /* ProtocolesPage */];
        this.scoresRoot = __WEBPACK_IMPORTED_MODULE_6__main_pages_scores_scores__["a" /* ScoresPage */];
        this.recommandationsRoot = __WEBPACK_IMPORTED_MODULE_5__main_pages_recommandations_recommandations__["a" /* RecommandationsPage */];
        this.infoRoot = __WEBPACK_IMPORTED_MODULE_3__main_pages_info_info__["a" /* InfoPage */];
    }
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main\main.html"*/'<ion-tabs>\n    <ion-tab [root]="anesthesieRoot" tabTitle="" tabIcon="cloud-circle"></ion-tab>\n    <ion-tab [root]="protocolesRoot" tabTitle="" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="scoresRoot" tabTitle="" tabIcon="stats"></ion-tab>\n    <ion-tab [root]="medicamentsRoot" tabTitle="" tabIcon="flask"></ion-tab>\n    <ion-tab [root]="recommandationsRoot" tabTitle="" tabIcon="clipboard"></ion-tab>\n    <ion-tab [root]="infoRoot" tabTitle="" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main\main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/main/main.module": [
		837,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateauInductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the PlateauInductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlateauInductionPage = /** @class */ (function () {
    function PlateauInductionPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.InductionView = 1;
    }
    ;
    PlateauInductionPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    PlateauInductionPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    PlateauInductionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    PlateauInductionPage.prototype.calculs = function () {
        /* PROPOFOL */
        if (this.AgeNum <= 1) {
            this.AdminPropofol = Math.round((this.PoidsNum * 3) * 10) / 10;
            this.PosoPropofol = "3 mg/kg jusqu'à 1 mois";
        }
        else {
            this.AdminPropofol = Math.round((this.PoidsNum * 5) * 10) / 10;
            this.PosoPropofol = "5 mg/kg";
        }
        ;
        if (this.AgeNum <= 1) {
            this.DiluPropofol = "5 mg/mL";
        }
        else {
            this.DiluPropofol = "10 mg/mL";
        }
        ;
        /* PENTO */
        if (this.AgeNum <= 1) {
            this.AdminThiopental = Math.round((this.PoidsNum * 10) * 10) / 10;
            this.PosoThiopental = "10 mg/kg jusqu'à 1 mois";
        }
        else {
            this.AdminThiopental = Math.round((this.PoidsNum * 7) * 10) / 10;
            this.PosoThiopental = "7 mg/kg";
        }
        ;
        if (this.AgeNum <= 12) {
            this.DiluThiopental = "10 mg/mL";
        }
        else {
            this.DiluThiopental = "25 mg/mL";
        }
        ;
        /* KETA */
        this.AdminKetamine = Math.round((3 * this.PoidsNum) * 10) / 10;
        this.PosoKetamine = "3 mg/kg en IV";
        if (this.AgeNum <= 1) {
            this.DiluKetamine = "5 mg/mL";
        }
        else {
            this.DiluKetamine = "10 mg/mL";
        }
        ;
        /* ETO */
        this.AdminEtomidate = Math.round((0.5 * this.PoidsNum) * 10) / 10;
        this.PosoEtomidate = "0,5 mg/kg";
        if (this.AgeNum <= 1) {
            this.DiluEtomidate = "0,5 mg/mL";
        }
        else if (this.AgeNum <= 24) {
            this.DiluEtomidate = "1 mg/mL";
        }
        else if (this.AgeNum > 24) {
            this.DiluEtomidate = "2 mg/mL";
        }
        ;
        /* SUF */
        this.AdminSufentanil = Math.round((0.2 * this.PoidsNum) * 10) / 10;
        this.PosoSufentanil = "0,2 µg/kg";
        if (this.AgeNum <= 1) {
            this.DiluSufentanil = "0,5 µg/mL";
        }
        else if (this.AgeNum <= 12) {
            this.DiluSufentanil = "1 µg/mL";
        }
        else if (this.AgeNum <= 72) {
            this.DiluSufentanil = "2 µg/mL";
        }
        else if (this.AgeNum > 72) {
            this.DiluSufentanil = "5 µg/mL";
        }
        ;
        /* RAPI */
        this.AdminAlfentanil = Math.round((20 * this.PoidsNum) * 10) / 10;
        this.PosoAlfentanil = "20 µg/kg";
        if (this.PoidsNum <= 30) {
            this.DiluAlfentanil = "100 µg/mL";
        }
        else {
            this.DiluAlfentanil = "500 µg/mL";
        }
        /* CELO */
        if (this.AgeNum <= 24) {
            this.AdminCelocurine = Math.round((this.PoidsNum * 2) * 10) / 10;
            this.PosoCelocurine = "2 mg/kg jusqu'à 2 ans";
        }
        else {
            this.AdminCelocurine = Math.round((this.PoidsNum) * 10) / 10;
            this.PosoCelocurine = "1 mg/kg";
        }
        ;
        if (this.AgeNum <= 1) {
            this.DiluCelocurine = "2 mg/mL";
        }
        else if (this.AgeNum <= 24) {
            this.DiluCelocurine = "5 mg/mL";
        }
        else if (this.AgeNum > 24) {
            this.DiluCelocurine = "10 mg/mL";
        }
        ;
        /* ROCU */
        if (!this.EstomacPlein) {
            this.AdminRocuronium = Math.round((this.PoidsNum * 0.6) * 10) / 10;
            this.PosoRocuronium = "0,6 mg/kg hors urgence";
        }
        else {
            this.AdminRocuronium = Math.round((this.PoidsNum * 1.2) * 10) / 10;
            this.PosoRocuronium = "1,2 mg/kg pour ISR";
        }
        ;
        if (this.AgeNum <= 12) {
            this.DiluRocuronium = "1 mg/mL";
        }
        else if (this.AgeNum <= 60) {
            this.DiluRocuronium = "2,5 mg/mL";
        }
        else if (this.AgeNum > 60) {
            this.DiluRocuronium = "10 mg/mL";
        }
        ;
        this.AdminBridion = Math.round((this.PoidsNum * 16) * 10) / 10;
        /* TRAC */
        this.AdminAtracurium = Math.round((0.5 * this.PoidsNum) * 10) / 10;
        this.PosoAtracurium = "0,5 mg/kg";
        if (this.AgeNum <= 1) {
            this.DiluAtracurium = "0,5 mg/mL";
        }
        else if (this.AgeNum <= 12) {
            this.DiluAtracurium = "1 mg/mL";
        }
        else if (this.AgeNum <= 60) {
            this.DiluAtracurium = "2,5 mg/mL";
        }
        else if (this.AgeNum > 60) {
            this.DiluAtracurium = "10 mg/mL";
        }
        ;
        /* DEXA */
        if (this.PoidsNum <= 80) {
            this.AdminDexa = Math.round(((this.PoidsNum * 0.15) * 10) / 10);
        }
        else {
            this.AdminDexa = 12;
        }
        if (this.PoidsNum > 40) {
            this.DiluDexa = "4 mg/mL";
        }
        else {
            this.DiluDexa = "1 mg/mL";
        }
        ;
        /* EXACYL */
        this.AdminExacyl = Math.round(((this.PoidsNum * 10) * 10) / 10);
        this.EntretienExacyl = Math.round(((this.PoidsNum * 5) * 10) / 10);
        if (this.PoidsNum <= 20) {
            this.DiluExacyl = "50 mg/mL";
        }
        else {
            this.DiluExacyl = "100 mg/mL";
        }
        ;
        /* Ephedrine & Atropine*/
        this.AdminEphedrine = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        if (this.PoidsNum <= 50) {
            this.AdminAtropine = Math.round((this.PoidsNum * 0.02) * 100) / 100;
        }
        else {
            this.AdminAtropine = 1;
        }
        if (this.PoidsNum < 5) {
            this.DiluEphedrine = "0,5 mg/mL";
        }
        else if (this.PoidsNum < 10) {
            this.DiluEphedrine = "1 mg/mL";
        }
        else {
            this.DiluEphedrine = "3 mg/mL";
        }
        ;
        if (this.PoidsNum < 5) {
            this.DiluAtropine = "20 µg/mL";
        }
        else if (this.PoidsNum < 15) {
            this.DiluAtropine = "100 µg/mL";
        }
        else {
            this.DiluAtropine = "500 µg/mL";
        }
        ;
        /* Xylocaïne et Keta version antalgique */
        this.AdminXylo = Math.round((this.PoidsNum * 1.5) * 10) / 10;
        this.AdminKetaAntalgique = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        if (this.PoidsNum <= 10) {
            this.DiluKetaAntalgique = "1 mg/mL";
        }
        else if (this.PoidsNum <= 30) {
            this.DiluKetaAntalgique = "5 mg/mL";
        }
        else {
            this.DiluKetaAntalgique = "10 mg/mL";
        }
        ;
        /* Dexdor prémed et bolus */
        this.DexdorPremed = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.DexdorBolusSeul = Math.round((this.PoidsNum * 0.5) * 10) / 10;
    };
    ;
    PlateauInductionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlateauInductionPage');
    };
    ;
    PlateauInductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plateau-induction',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\plateau-induction\plateau-induction.html"*/'\n<ion-header>\n  <br>\n        <!-- HEADER MENU  -->\n        <div class="header"> \n\n          <div (click)="retourHome()" class="backButton">\n          <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n          Retour\n          </div>\nInduction anesthésique  </div>\n            <br>\n      \n                  <!-- HEADER MON PATIENT  -->\n            <ion-item color="turquoise-fonce"> \n              <ion-label>\n                <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n            </ion-item>\n        <!-- ITEM MON PATIENT -->\n         <ion-segment color="turquoise-fonce" [(ngModel)]="InductionView">\n           <ion-segment-button class="inductionViewer"  value="1">Hypnotiques</ion-segment-button>\n           <ion-segment-button class="inductionViewer" value="2">Antalgiques</ion-segment-button>\n           <ion-segment-button class="inductionViewer" value="3">Curares</ion-segment-button>\n           <ion-segment-button class="inductionViewer" value="4">Autres</ion-segment-button>\n\n         </ion-segment>\n       <!-- END HEADER -->\n</ion-header>\n  \n  <ion-content>\n\n<ion-list>\n  <ion-item-group>\n\n    <ion-card *ngIf="InductionView ==1" class="drogueContainer">\n\n    <ion-item >\n      <ion-label class="drogueInduction" >\n        <ion-chip color="warning"><ion-label>Sevoflurane : 6% - Voie inhalée</ion-label></ion-chip> \n        <p class="dilutionDrogueInduction">Présentation : Sevorane®</p>\n        <p class="dilutionDrogueInduction">DGF pour l\'induction : 6-8 L/min</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction"> \n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoThiopental}}</p>\n        <ion-chip color="warning">\n          <ion-label>Thiopental : {{AdminThiopental}} mg - IVD </ion-label>\n        </ion-chip>\n        <p class="dilutionDrogueInduction"> Présentation : Pentotal® 500mg pdr</p>\n        <p class="dilutionDrogueInduction"> Dilution : {{DiluThiopental}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoPropofol}}</p>\n        <ion-chip color="warning"><ion-label>Propofol : {{AdminPropofol}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : Diprivan® 200mg/20mL</p>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluPropofol}}</p></ion-label>\n    </ion-item>\n\n    <ion-item  class="avecAMM">\n      <ion-label class="drogueInduction">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoEtomidate}}</p>\n        <ion-chip color="warning"><ion-label>Etomidate : {{AdminEtomidate}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : Hypnomidate® 20mg/10mL</p> \n        <p class="dilutionDrogueInduction">Dilution : {{DiluEtomidate}}</p> \n      </ion-label>\n    </ion-item>\n\n    <div class="AMM">AMM <br> > 2 ans</div>\n\n    <ion-item>\n      <ion-label class="drogueInduction"> \n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoKetamine}}</p>\n        <ion-chip color="warning"><ion-label>Ketamine : {{AdminKetamine}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : Ketalar® 50mg/5mL</p>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluKetamine}}</p> </ion-label>\n      <div ></div>\n    </ion-item>\n\n\n    <ion-item class="avecAMM">         \n      <ion-label class="drogueInduction" >Dexmédétomidine : \n        <p class="dilutionDrogueInduction">Présentation : Dexdor® 200µg/2mL</p>\n        <hr>\n        <p class="dilutionDrogueInduction">Posologie proposée : 2 µg/kg</p>\n          <ion-chip color="dark-blue"><ion-label>Prémédication :  {{DexdorPremed}} µg intranasal</ion-label></ion-chip>\n          <p class="dilutionDrogueInduction">intra-nasal, 20 min avant induction </p>\n        <hr>\n        <p class="dilutionDrogueInduction">Posologie proposée : 0,5 µg/kg</p>\n        <ion-chip color="dark-blue"><ion-label>Induction :  {{DexdorBolusSeul}} µg IVD</ion-label></ion-chip>\n    </ion-label>\n      </ion-item>\n    \n      <div class="AMM">AMM : <br> sédation chez l\'adulte en USI objectif RASS [0 ; -3]</div>\n\n  </ion-card>\n    \n\n\n\n  <ion-card *ngIf="InductionView ==2" class="drogueContainer">\n    <ion-item>\n      <ion-label class="drogueInduction">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoSufentanil}}</p>\n        <ion-chip color="primary"><ion-label>Sufentanil : {{AdminSufentanil}} µg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : 50µg/10mL ou 10µg/2mL</p>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluSufentanil}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="primary">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoAlfentanil}}</p>\n        <ion-chip color="primary"><ion-label>Alfentanil : {{AdminAlfentanil}} µg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : 1mg/2mL</p>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluAlfentanil}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction">\n        <p class="posologieDrogueInduction">Posologie proposée : 1.5 mg/kg</p>\n        <ion-chip color="grisclair"><ion-label>Xylocaïne : {{AdminXylo}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation 100mg/20mL</p>\n        <p class="dilutionDrogueInduction">Dilution : 5 mg/mL</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="warning">\n        <p class="posologieDrogueInduction">Posologie proposée : 0.5 mg/kg</p>\n        <ion-chip color="warning"><ion-label> Ketamine antalgique : {{AdminKetaAntalgique}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : Ketalar® 50mg/5mL</p>\n      <p class="dilutionDrogueInduction">Dilution : {{DiluKetaAntalgique}}</p></ion-label>\n    </ion-item>\n  </ion-card>\n\n    <ion-card *ngIf="InductionView ==3" class="drogueContainer">\n    <ion-item>\n      <ion-label class="drogueInduction">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoAtracurium}}</p>\n        <ion-chip color="danger"><ion-label>Atracurium : {{AdminAtracurium}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : Tracrium® 25mg/2,5mL ou 50mg/5mL</p>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluAtracurium}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="danger">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoRocuronium}}</p>\n        <ion-chip color="danger"><ion-label> Rocuronium : {{AdminRocuronium}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : Esméron® 50mg/5mL</p>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluRocuronium}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction">\n        <p class="posologieDrogueInduction">Posologie proposée : 16 mg/kg</p>\n        <ion-chip color="orange"><ion-label> Suggamadex : {{AdminBridion}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : Bridion® 200mg/2mL</p>\n        <p class="dilutionDrogueInduction"><b>Pour réversion immédiate en cas d\'urgence après curarisation par rocuronium</b></p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="danger">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoCelocurine}}</p>\n        <ion-chip color="danger"><ion-label> Suxaméthonium : {{AdminCelocurine}} mg - IVD</ion-label></ion-chip>\n        <p class="dilutionDrogueInduction">Présentation : Celocurine® 100mg/2mL</p>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluCelocurine}}</p></ion-label>\n    </ion-item>\n  </ion-card>\n\n    <ion-card *ngIf="InductionView ==4"  class="drogueContainer">\n\n      <ion-item>  \n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,15 mg/kg</p>\n          <ion-chip outline color="light"><ion-label> Dexamethasone : {{AdminDexa}} mg - IVD</ion-label></ion-chip>\n          <p class="dilutionDrogueInduction">Présentation : 4mg/1mL ou 20mg/5mL</p> \n          <p class="dilutionDrogueInduction">Dilution : {{DiluDexa}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">Acide tranexamique\n          <p class="dilutionDrogueInduction">Présentation : Exacyl® 500mg/5mL</p>\n          <hr>\n          <p class="posologieDrogueInduction">Posologie proposée : bolus 10 mg/kg</p>\n          <ion-chip outline color="light"><ion-label>Bolus : {{AdminExacyl}} mg - IVSE sur 30 min</ion-label></ion-chip>\n          <p class="dilutionDrogueInduction">Dilution : {{DiluExacyl}}</p>\n          <hr>\n          <p class="posologieDrogueInduction">Posologie proposée : 5 mg/kg/h</p>\n          <ion-chip outline color="light"><ion-label>Entretien : {{EntretienExacyl}} mg/h - IVSE</ion-label></ion-chip>\n          <p class="dilutionDrogueInduction">Dilution : {{DiluExacyl}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 100 µg/kg</p>\n          <ion-chip color="dark-pink"><ion-label>Ephédrine : {{AdminEphedrine}} mg - IVD</ion-label></ion-chip>\n          <p class="dilutionDrogueInduction">Présentation : seringue pré-remplie 30mg/10mL</p>\n          <p class="dilutionDrogueInduction">Dilution : {{DiluEphedrine}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 20 µg/kg</p>\n          \n          <ion-chip color="dark-green"><ion-label>Atropine : {{AdminAtropine}} mg - IVD</ion-label></ion-chip>\n          <p class="dilutionDrogueInduction">Présentation : 0,5mg/1mL ou seringue pré-remplie 1mg/5mL</p>\n          <p class="dilutionDrogueInduction">Dilution : {{DiluAtropine}}</p></ion-label>\n      </ion-item>\n    </ion-card>\n\n  </ion-item-group>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\plateau-induction\plateau-induction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlateauInductionPage);
    return PlateauInductionPage;
}());

//# sourceMappingURL=plateau-induction.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateauVasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the PlateauVasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlateauVasPage = /** @class */ (function () {
    function PlateauVasPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.DureeJeune = 6;
        this.dureejeunelast = 6;
        this.Allergie = "";
        this.VASView = 1;
    }
    PlateauVasPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    PlateauVasPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    PlateauVasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    PlateauVasPage.prototype.calculs = function () {
        if (this.PoidsNum <= 2.5) {
            this.TailleSITage = this.TailleSITpoids = 2.5;
            this.RepereSITdents = Math.round((this.PoidsNum + 6.5) * 10) / 10;
            this.RepereSITnez = Math.round((this.PoidsNum + 7) * 10) / 10;
            this.RepereSITenfant = "trop petit";
        }
        else if (this.PoidsNum <= 3.5) {
            this.TailleSITage = this.TailleSITpoids = 3;
            this.RepereSITdents = Math.round((this.PoidsNum + 6.5) * 10) / 10;
            this.RepereSITnez = Math.round((this.PoidsNum + 7) * 10) / 10;
            this.RepereSITenfant = "trop petit";
        }
        else if (this.PoidsNum <= 7) {
            this.TailleSITage = this.TailleSITpoids = 3.5;
            this.RepereSITdents = Math.round((this.PoidsNum + 6.5) * 10) / 10;
            this.RepereSITnez = Math.round((this.PoidsNum + 7) * 10) / 10;
            this.RepereSITenfant = "trop petit";
        }
        else if (this.PoidsNum > 7) {
            this.TailleSITage = Math.round((this.AgeNum / (12 * 4) + 3.5) * 10) / 10;
            if (this.TailleSITage >= 8) {
                this.TailleSITage = 8;
            }
            this.TailleSITpoids = Math.round((this.PoidsNum / 10 + 3) * 10) / 10;
            if (this.TailleSITpoids >= 7.5) {
                this.TailleSITpoids = 7.5;
            }
            this.TailleSIT = Math.round(((this.TailleSITage + this.TailleSITpoids) / 2) * 10) / 10;
            this.RepereSITenfant = Math.round(((this.TailleSITage + this.TailleSITpoids) / 2) * 3).toString() + " cm";
            this.RepereSITdents = Math.round((this.AgeNum / 24 + 12) * 10) / 10;
            this.RepereSITnez = Math.round((this.AgeNum / 24 + 15) * 10) / 10;
        }
        ;
        this.Volumecourant = Math.round(this.PoidsNum * 6);
        if (this.PoidsNum <= 3 || this.AgeNum <= 1) {
            this.CouleurCanuleMasque = "bleu";
        }
        else if (this.AgeNum <= 6) {
            this.CouleurCanuleMasque = "gris";
        }
        else if (this.AgeNum <= 60) {
            this.CouleurCanuleMasque = "blanc";
        }
        else if (this.AgeNum <= 120) {
            this.CouleurCanuleMasque = "jaune";
        }
        else {
            this.CouleurCanuleMasque = "vert";
        }
        ;
        if (this.PoidsNum <= 10 && this.AgeNum <= 1) {
            this.TailleFiltre = "néonat";
        }
        else if (this.AgeNum <= 72 && this.PoidsNum <= 20) {
            this.TailleFiltre = "pédiatrique";
        }
        else {
            this.TailleFiltre = "adulte";
        }
        ;
        if (this.PoidsNum <= 10) {
            this.LameIntubation = "Lame d'Oxford, Miller 1 ou Macinstosh 0";
        }
        if (this.PoidsNum <= 15) {
            this.LameIntubation = "Macintosh 1";
        }
        else if (this.PoidsNum <= 30) {
            this.LameIntubation = "Macintosh 2";
        }
        else {
            this.LameIntubation = "Macintosh 3";
        }
        ;
        if (this.PoidsNum <= 5) {
            this.TailleMasqueLarynge = 1;
        }
        else if (this.PoidsNum <= 10) {
            this.TailleMasqueLarynge = 1.5;
        }
        else if (this.PoidsNum <= 20) {
            this.TailleMasqueLarynge = 2;
        }
        else if (this.PoidsNum <= 30) {
            this.TailleMasqueLarynge = 2.5;
        }
        else if (this.PoidsNum <= 70) {
            this.TailleMasqueLarynge = 3;
        }
        else {
            this.TailleMasqueLarynge = "4 ou 5";
        }
        if (this.PoidsNum <= 10) {
            this.LameMcGrath = "lame 1";
        }
        else if (this.PoidsNum <= 30) {
            this.LameMcGrath = "lame 2";
        }
        else if (this.PoidsNum <= 70) {
            this.LameMcGrath = "lame 3";
        }
        else {
            this.LameMcGrath = "lame 4";
        }
        ;
        if (this.PoidsNum <= 1.5) {
            this.LameGlideScope = "manche 1-2, lame 0";
        }
        else if (this.PoidsNum <= 3.8) {
            this.LameGlideScope = "manche 1-2, lame 1";
        }
        else if (this.PoidsNum <= 10) {
            this.LameGlideScope = "manche 1-2, lame 2";
        }
        else if (this.PoidsNum <= 28) {
            this.LameGlideScope = "manche AVL 1-2, lame 2.5";
        }
        else if (this.PoidsNum <= 40) {
            this.LameGlideScope = "manche 3-4, lame 3";
        }
        else {
            this.LameGlideScope = "manche 3-4, lame GVL 4";
        }
        ;
        if (this.AgeNum <= 1) {
            this.FrequenceVentilatoire = 35;
        }
        else if (this.AgeNum <= 3) {
            this.FrequenceVentilatoire = 30;
        }
        else if (this.AgeNum <= 24) {
            this.FrequenceVentilatoire = 25;
        }
        else if (this.AgeNum <= 96) {
            this.FrequenceVentilatoire = 20;
        }
        else {
            this.FrequenceVentilatoire = 15;
        }
        ;
        this.VolumeMinute = (this.Volumecourant * this.FrequenceVentilatoire) / 1000;
        this.SurfaceCorporelle = Math.round(((4 * this.PoidsNum + 7) / (this.PoidsNum + 90)) * 10) / 10;
        this.PertesInsensiblesVSjour = Math.round(((800 * this.SurfaceCorporelle) * 10) / 10);
        this.PertesInsensiblesVSheure = Math.round(((this.PertesInsensiblesVSjour / 24) * 10) / 10);
        this.PertesInsensiblesIOTjour = Math.round(((400 * this.SurfaceCorporelle) * 10) / 10);
        this.PertesInsensiblesIOTheure = Math.round(((this.PertesInsensiblesIOTjour / 24) * 10) / 10);
        ;
        this.PertesInsensiblesVNIjour = Math.round(((600 * this.SurfaceCorporelle) * 10) / 10);
        this.PertesInsensiblesVNIheure = Math.round(((this.PertesInsensiblesVNIjour / 24) * 10) / 10);
        ;
        console.log('IonViewWillEnter OptionsPage');
    };
    ;
    PlateauVasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlateauVasPage');
    };
    ;
    PlateauVasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plateau-vas',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\plateau-vas\plateau-vas.html"*/'<ion-header>\n  <br>\n          <!-- HEADER MENU  -->\n          <div class="header"> \n\n            <div (click)="retourHome()" class="backButton">\n            <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n            Retour\n            </div>\n  Gestion des voies aériennes</div>\n              <br>\n        \n                    <!-- HEADER MON PATIENT  -->\n    \n              <ion-item color="turquoise-fonce"> \n                <ion-label>\n                  <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                  <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                  <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n              </ion-item>\n       \n         <!-- END HEADER -->\n         <ion-segment color="turquoise-fonce" [(ngModel)]="VASView">\n          <ion-segment-button value="1">Matériel</ion-segment-button>\n          <ion-segment-button value="2">Réglages</ion-segment-button>\n        </ion-segment>\n\n        </ion-header> \n\n         <ion-content>\n\n          <p *ngIf="VASView ==1" class="reference">Référence : RFE SFAR 2018. Il est probablement recommandé d’utiliser un vidéolaryngoscope en première intention chez les patients avec intubation difficile prévue et ventilation au masque\n            possible ou après échec de la laryngoscopie directe afin d’augmenter les chances de succès de l’intubation.\n          </p>\n\n            <ion-grid *ngIf="VASView ==1">\n              <ion-row>\n                <ion-col>\n                  Dispositif\n                </ion-col>\n                <ion-col>\n                  Taille\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  Filtre\n                </ion-col>\n                <ion-col>\n                  <ion-chip color="primary"><ion-label>{{TailleFiltre}}</ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  Guédel & masque\n                </ion-col>\n                <ion-col>\n                  <ion-chip outline color="{{CouleurCanuleMasque}}"><ion-label> {{CouleurCanuleMasque}}</ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  Masque laryngé\n                </ion-col>\n                <ion-col>\n                  <ion-chip outline color="light"><ion-label> #{{TailleMasqueLarynge}}</ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  IOT standard\n                </ion-col>\n                <ion-col>\n                  <ion-chip outline color="light"><ion-label> {{LameIntubation}}</ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  McGrath\n                </ion-col>\n                <ion-col>\n                  <ion-chip outline color="danger"><ion-label>{{LameMcGrath}}</ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  GlideScope\n                </ion-col>\n                <ion-col>\n                <ion-chip outline color="danger"><ion-label>{{LameGlideScope}}</ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  &#10061; sonde (poids)\n                  <p class="comment">Poids/10 + 3</p>\n                </ion-col>\n                <ion-col>\n                <ion-chip outline color="primary"><ion-label>{{TailleSITage}} mm</ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  &#10061; sonde (age)\n                  <p class="comment">Age/4 + 3,5</p>\n                </ion-col>\n                <ion-col>\n                <ion-chip outline color="primary"><ion-label>{{TailleSITpoids}} mm</ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n            </ion-grid>\n\n            \n            <ion-grid *ngIf="VASView ==2">\n              <ion-row>\n                <ion-col>\n                  Paramètre\n                </ion-col>\n                <ion-col>\n                  Formule\n                </ion-col>\n                <ion-col>\n                  Résultat\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  Fixation (standard)\n                </ion-col>\n                <ion-col>\n                  &#10061; sonde x3\n                </ion-col>\n                <ion-col>\n                  <ion-chip color="turquoise"><ion-label>\n                    {{RepereSITenfant}}\n                  </ion-label></ion-chip>\n                 \n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  Fixation (bouche)\n                </ion-col>\n                <ion-col>\n                Age/2 + 12\n                </ion-col>\n                <ion-col>\n                  <ion-chip color="turquoise"><ion-label>\n                    {{RepereSITdents}} cm (AD)\n                  </ion-label></ion-chip>\n                  \n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  Fixation (nez)\n                </ion-col>\n                <ion-col>\n                Age/2 + 15\n                </ion-col>\n                <ion-col>\n                  <ion-chip color="turquoise"><ion-label>\n                    {{RepereSITnez}} cm\n                  </ion-label></ion-chip>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  Volume courant (Vt)\n                </ion-col>\n                <ion-col>\n                6 mL/kg\n                </ion-col>\n                <ion-col>\n                  <ion-chip color="primary"><ion-label>\n                    Vt = {{Volumecourant}} mL\n                  </ion-label></ion-chip>\n        \n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                Fréquence respiratoire (FR)\n                </ion-col>\n                <ion-col>\n                -\n                </ion-col>\n                <ion-col>\n                  <ion-chip color="primary"><ion-label>\n                    FR = {{FrequenceVentilatoire}}/min \n                  </ion-label></ion-chip>              \n                 </ion-col>\n              </ion-row>\n\n\n              <ion-row>\n                <ion-col>\n                  Volume minute (Vm)\n                </ion-col>\n                <ion-col>\n                Vt*FR\n                </ion-col>\n                <ion-col>\n                  <ion-chip color="warning"><ion-label>\n                    Vm = {{VolumeMinute}} L/min\n                  </ion-label></ion-chip>     \n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                Pertes insensibles en VS (PIVS)\n                <p class="comment">Estimations pour SC = {{SurfaceCorporelle}} m²</p>\n                </ion-col>\n                <ion-col>\n                  800 mL/m²/j <br>\n                  soit 33 mL/m²/h\n                  </ion-col>\n                <ion-col>\n                PIVS = {{PertesInsensiblesVSjour}} mL/j \n                <br> soit {{PertesInsensiblesVSheure}} mL/h\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                Pertes insensibles en VM (PIVM)\n                <p class="comment">Estimations pour SC = {{SurfaceCorporelle}} m²</p>\n                </ion-col>\n                <ion-col>\n                  400 mL/m²/j <br>\n                  soit 17 mL/m²/h\n                  </ion-col>\n                <ion-col>\n                PIVM = {{PertesInsensiblesIOTjour}} mL/j \n                <br> soit {{PertesInsensiblesIOTheure}} mL/h\n                </ion-col>\n              </ion-row>\n\n              \n            </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\plateau-vas\plateau-vas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlateauVasPage);
    return PlateauVasPage;
}());

//# sourceMappingURL=plateau-vas.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntretienAnesthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the LocoRegionalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntretienAnesthPage = /** @class */ (function () {
    function EntretienAnesthPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.EntretienView = 1;
    }
    EntretienAnesthPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    EntretienAnesthPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    EntretienAnesthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocoRegionalePage');
    };
    EntretienAnesthPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    EntretienAnesthPage.prototype.calculs = function () {
        /*placer les calculs ici*/
        if (this.AgeNum <= 1) {
            this.CAMSevo = 3.3;
        }
        else if (this.AgeNum <= 6) {
            this.CAMSevo = 3.1;
        }
        else if (this.AgeNum <= 12) {
            this.CAMSevo = 2.7;
        }
        else if (this.AgeNum <= 60) {
            this.CAMSevo = 2.5;
        }
        else {
            this.CAMSevo = 1.7;
        }
        ;
        this.PropoEntretien = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.HypnoEntretien = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.RemiEntretien = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.RocuEntretien = Math.round((this.PoidsNum * 0.6) * 10) / 10;
        this.TracEntretien = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.XyloEntretien = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.KetaEntretien = Math.round((this.PoidsNum * 0.15) * 10) / 10;
        this.SufEntretien = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        this.DexdorBolusSeul = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.DexdorBolusAvecIVSE = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.DexdorEntretien = Math.round((this.PoidsNum * 0.4) * 10) / 10;
        this.DexdorAgitation = Math.round((this.PoidsNum * 0.3) * 10) / 10;
    };
    ;
    EntretienAnesthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entretien-anesth',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\entretien-anesth\entretien-anesth.html"*/'\n<ion-header>\n  <br>\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n    Entretien anesthésique\n  </div>\n      <br>\n\n      <ion-item color="turquoise-fonce"> \n        <ion-label>\n          <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n          <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n      </ion-item>\n\n      <ion-segment color="turquoise-fonce" [(ngModel)]="EntretienView" >\n        <ion-segment-button value="1">\n      Hypnotiques\n        </ion-segment-button>\n        <ion-segment-button value="2">\n      Antalgiques\n        </ion-segment-button>\n        <ion-segment-button value="3">\n          Curares\n            </ion-segment-button>\n      </ion-segment>\n      \n  \n    </ion-header>\n\n      <ion-content>\n\n\n  <ion-card *ngIf="EntretienView == 1" class="drogueContainer">\n      <ion-item>         \n        <ion-label class="drogueInduction"> \n          <ion-chip color="warning"><ion-label>Sevoflurane : {{CAMSevo}} %</ion-label></ion-chip>\n      <p class="dilutionDrogueInduction"> Sevorane® - %EtHalogéné, bas DGF</p>\n    </ion-label>\n  </ion-item>\n\n<ion-item>     \n  <ion-label class="drogueInduction" color="warning">\n  <p class="posologieDrogueInduction">Posologie proposée : 10 mg/kg/h </p>\n  <ion-chip color="warning"><ion-label>Propofol : {{PropoEntretien}} mg/h IVSE</ion-label></ion-chip>\n  <p class="dilutionDrogueInduction">Présentation : Diprivan® 200mg/20mL</p>\n</ion-label>\n  </ion-item>\n<ion-item >         \n  <ion-label class="drogueInduction" color="orange">\n    <p class="dilutionDrogueInduction">Posologie proposée : 0,1 mg/kg/h </p>\n    <ion-chip color="warning"><ion-label>Midazolam : {{HypnoEntretien}} mg/h IVSE</ion-label></ion-chip>\n    <p class="dilutionDrogueInduction">Présentation : Hypnovel® 5mg/5mL</p>\n </ion-label>\n  </ion-item>\n\n\n<ion-item class="avecAMM">         \n  <ion-label class="drogueInduction">Dexmédétomidine \n    <p class="dilutionDrogueInduction">Présentation : Dexdor® 200µg/2mL</p>\n    <hr>\n    <p class="dilutionDrogueInduction">Posologie proposée : 1 µg/kg sur 10\' puis 0,4 µg/kg/h  </p>\n    <ion-chip color="dark-blue"><ion-label>Entretien : {{DexdorBolusAvecIVSE}} µg sur 10\' puis {{DexdorEntretien}} µg/h</ion-label></ion-chip>\n    <hr>\n    <p class="dilutionDrogueInduction">pour 0,3 µg/kg, en fin d\'intervention </p>\n    <ion-chip color="dark-blue"><ion-label>Prévention agitation : {{DexdorAgitation}} µg IVD</ion-label></ion-chip>\n</ion-label>\n\n  </ion-item>\n\n  <div class="AMM">AMM : <br> sédation chez l\'adulte en USI objectif RASS [0 ; -3]</div>\n\n</ion-card>  \n\n\n\n\n<ion-card *ngIf="EntretienView == 2" class="drogueContainer">\n\n<ion-item>         \n<ion-label class="drogueInduction" color="primary">\n  <p  class="dilutionDrogueInduction">Posologie proposée 10 µg/kg/h </p>\n  <ion-chip color="primary"><ion-label>Remifentanil : {{RemiEntretien}} µg/h IVSE</ion-label></ion-chip>\n  <p class="dilutionDrogueInduction">Présentation : 2 mg pdr</p>\n\n</ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="primary">\n  <p  class="dilutionDrogueInduction">Posologie proposée : 0,2 µg/kg/h </p>\n  <ion-chip color="primary"><ion-label>Sufentanil : {{SufEntretien}} µg/h IVSE</ion-label></ion-chip>\n  <p class="dilutionDrogueInduction">Présentation : 50µg/10mL ou 10µg/2mL</p>\n</ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="dark">\n  <p  class="dilutionDrogueInduction">Posologie proposée : 1 mg/kg/h </p>\n  <ion-chip color="grisclair"><ion-label> Xylocaïne : {{XyloEntretien}} mg/h IVSE</ion-label></ion-chip>\n  <p class="dilutionDrogueInduction">Présentation : 100mg/20mL</p>\n\n</ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="warning">\n  <p  class="dilutionDrogueInduction">Posologie proposée : 0,15 mg/kg/h </p>\n  <ion-chip color="warning"><ion-label>  Ketamine : {{KetaEntretien}} mg/h IVSE</ion-label></ion-chip>\n  <p class="dilutionDrogueInduction">Présentation : Ketalar® 50mg/5mL</p>\n</ion-label>\n</ion-item>\n\n</ion-card>\n\n<ion-card *ngIf="EntretienView == 3" class="drogueContainer">\n\n<ion-item >         \n<ion-label color="danger" class="drogueInduction">\n  <p class="dilutionDrogueInduction">Posologie proposée : 0,6 mg/kg/h </p>\n  <ion-chip color="danger"><ion-label>Rocuronium : {{RocuEntretien}} mg/h IVSE</ion-label></ion-chip>\n    <p class="dilutionDrogueInduction">Présentation : Esméron® 50mg/5mL</p>\n</ion-label>\n</ion-item>\n\n<ion-item >         \n<ion-label color="danger" class="drogueInduction">\n  <p class="dilutionDrogueInduction">Posologie proposée </p>\n  <ion-chip color="danger"><ion-label> Atracurium : {{TracEntretien}} mg/h IVSE</ion-label></ion-chip>\n  <p class="dilutionDrogueInduction">Présentation : Tracrium® 25mg/2,5mL</p>\n</ion-label>\n</ion-item>  \n\n</ion-card>  \n\n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\entretien-anesth\entretien-anesth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EntretienAnesthPage);
    return EntretienAnesthPage;
}());

//# sourceMappingURL=entretien-anesth.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionFluidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the GestionFluidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GestionFluidesPage = /** @class */ (function () {
    function GestionFluidesPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.DureeJeune = 0;
        this.dureejeunelast = 6;
        this.PertesChir = 2;
        this.Hbmesuree = 8;
        this.Hbsouhaitee = 12;
        this.GestionFluidesView = 1;
    }
    GestionFluidesPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    GestionFluidesPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Pensez à renseigner la durée du jeûne pré-opératoire dans les options pour profiter du calcul des apports horaires recommandés.',
                            buttons: [
                                {
                                    text: 'Compris.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (cancel) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    GestionFluidesPage.prototype.UpdatePerteChir = function () {
        this.CompPertesChir = Math.round(this.PertesChir * this.PoidsNum);
        this.TotalHoraire = this.ApportBaseHoraire + this.PertesRespiratoires + this.CompPertesChir;
        this.Total1 = this.TotalHoraire + this.CompJeune1;
        this.Total2et3 = this.TotalHoraire + this.CompJeune2;
    };
    GestionFluidesPage.prototype.calculs = function () {
        this.SurfaceCorporelle = Math.round(((4 * this.PoidsNum + 7) / (this.PoidsNum + 90)) * 10) / 10;
        this.PertesRespiratoires = Math.round(((this.SurfaceCorporelle * 17) * 10) / 10);
        ;
        if (this.AgeNum < 15 * 12) {
            this.Solute = "B26 ou NaCl 0.9%";
        }
        else {
            this.Solute = "RL ou NaCl 0.9%";
        }
        ;
        if (this.PoidsNum <= 10) {
            this.ApportBaseHoraire = Math.round(4 * this.PoidsNum);
        }
        else if (this.PoidsNum <= 20) {
            this.ApportBaseHoraire = Math.round(40 + (this.PoidsNum - 10) * 2);
        }
        else if (this.PoidsNum > 20) {
            this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));
        }
        ;
        this.CompJeune = Math.round(this.ApportBaseHoraire * this.DureeJeune);
        this.CompJeune1 = Math.round(this.CompJeune / 2);
        this.CompJeune2 = Math.round((this.CompJeune - this.CompJeune1) / 2);
        this.CompPertesChir = Math.round(this.PertesChir * this.PoidsNum);
        this.TotalHoraire = this.ApportBaseHoraire + this.PertesRespiratoires + this.CompPertesChir;
        this.Total1 = this.TotalHoraire + this.CompJeune1;
        this.Total2et3 = this.TotalHoraire + this.CompJeune2;
        if (this.AgeNum <= 15 * 12) {
            this.UnitesPlaquettaires = Math.round(this.PoidsNum / 5);
        }
        else {
            this.UnitesPlaquettaires = Math.round(this.PoidsNum / 7);
        }
        ;
        this.VolPFC = Math.round(this.PoidsNum * 20);
        this.VolCGR = Math.round(this.PoidsNum * 16).toString() + " mL";
        this.DiffHb = 4;
        if (this.AgeNum <= 3) {
            this.MasseSanguineAge = 80;
        }
        else if (this.AgeNum <= 12) {
            this.MasseSanguineAge = 75;
        }
        else {
            this.MasseSanguineAge = 70;
        }
        ;
        this.MasseSanguine = Math.round(this.PoidsNum * this.MasseSanguineAge);
        this.ExacylChocHemorragique = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.FibrinogengeChocHemorragique = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.NovosevenChocHemorragique = Math.round((this.PoidsNum * 90) * 10) / 10;
        this.PAShypoTA = Math.round((((this.AgeNum / 12) * 2) + 70) * 10) / 10;
        if (this.AgeNum <= 15 * 12) {
            this.SoluteRemplissage = "NaCl 0,9%";
        }
        else {
            this.SoluteRemplissage = "Ringer Lactate";
        }
        this.VolRemplissage = Math.round(((this.PoidsNum) * 10) * 10) / 10;
        if (this.AgeNum <= 12) {
            this.PosoEphedrine = "200 µg/kg";
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        }
        else if (this.AgeNum <= 36) {
            this.PosoEphedrine = "200 µg/kg";
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        }
        else {
            this.PosoEphedrine = "100 µg/kg";
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        }
        ;
        this.AdminAlbumine = Math.round((this.PoidsNum * 10) * 10) / 10;
        /** Apports journaliers */
        if (this.AgeNum <= 1) {
            this.CategorieAge = "nouveau-né";
            this.StandardEau = 160;
            this.StandardKCal = 110;
            this.StandardGlucides = 17;
            this.StandardAcidesAmines = 3.5;
            this.StandardLipides = 6;
            this.StandardSodium = 290;
            this.StandardPotassium = 150;
            this.StandardCalcium = 45;
            this.StandardPhosphore = 35;
            this.StandardMagnesium = 10;
        }
        else if (this.AgeNum <= 3) {
            this.CategorieAge = "nourrisson";
            this.StandardEau = 105;
            this.StandardKCal = 100;
            this.StandardGlucides = 14;
            this.StandardAcidesAmines = 2.5;
            this.StandardLipides = 3;
            this.StandardSodium = 203;
            this.StandardPotassium = 262.5;
            this.StandardCalcium = 25;
            this.StandardPhosphore = 25;
            this.StandardMagnesium = 10;
        }
        else if (this.AgeNum <= 12 * 12) {
            this.CategorieAge = "enfant";
            this.StandardEau = 70;
            this.StandardKCal = 70;
            this.StandardGlucides = 12;
            this.StandardAcidesAmines = 2;
            this.StandardLipides = 2;
            this.StandardSodium = 145;
            this.StandardPotassium = 187.5;
            this.StandardCalcium = 10;
            this.StandardPhosphore = 10;
            this.StandardMagnesium = 8;
        }
        else {
            this.CategorieAge = "jeune adulte";
            this.StandardEau = 50;
            this.StandardKCal = 50;
            this.StandardGlucides = 10;
            this.StandardAcidesAmines = 2;
            this.StandardLipides = 1.5;
            this.StandardSodium = 145;
            this.StandardPotassium = 187.5;
            this.StandardCalcium = 10;
            this.StandardPhosphore = 10;
            this.StandardMagnesium = 8;
        }
        this.Eau = Math.round((this.PoidsNum * this.StandardEau) * 10) / 10;
        this.KCal = Math.round((this.PoidsNum * this.StandardKCal) * 10) / 10;
        this.Glucides = Math.round((this.PoidsNum * this.StandardGlucides) * 10) / 10;
        this.AcidesAmines = Math.round((this.PoidsNum * this.StandardAcidesAmines) * 10) / 10;
        this.Lipides = Math.round((this.PoidsNum * this.StandardLipides) * 10) / 10;
        this.Sodium = Math.round((this.PoidsNum * this.StandardSodium) * 10) / 10;
        this.Potassium = Math.round((this.PoidsNum * this.StandardPotassium) * 10) / 10;
        this.Calcium = Math.round((this.PoidsNum * this.StandardCalcium) * 10) / 10;
        this.Phosphore = Math.round((this.PoidsNum * this.StandardPhosphore) * 10) / 10;
        this.Magnesium = Math.round((this.PoidsNum * this.StandardMagnesium) * 10) / 10;
    };
    ;
    GestionFluidesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum || !_this.DureeJeune) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    GestionFluidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestionFluidesPage');
    };
    GestionFluidesPage.prototype.MesureeHb = function () {
        console.log('Hb mesuree = ', this.Hbmesuree);
        this.DiffHb = this.Hbsouhaitee - this.Hbmesuree;
        console.log('Diff Hb = ', this.DiffHb);
        if (this.Hbmesuree >= 12) {
            this.VolCGR = "Non (Hb > 12 g/dL)";
        }
        else if (this.DiffHb <= 1) {
            this.VolCGR = "Non (diff < 1 g)";
        }
        else {
            this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + " mL";
        }
    };
    ;
    GestionFluidesPage.prototype.SouhaiteeHb = function () {
        console.log('Hb souhaitee =', this.Hbsouhaitee);
        this.DiffHb = this.Hbsouhaitee - this.Hbmesuree;
        console.log('Diff Hb = ', this.DiffHb);
        if (this.DiffHb <= 1) {
            this.VolCGR = "Non (diff < 1 g)";
        }
        else {
            this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + " mL";
        }
    };
    ;
    GestionFluidesPage.prototype.FnDureeJeune = function () {
        console.log('dureejeune = ', this.DureeJeune);
        this.storage.set('DureeJeune', this.DureeJeune);
        if (this.PoidsNum <= 10) {
            this.ApportBaseHoraire = Math.round(4 * this.PoidsNum);
        }
        else if (this.PoidsNum <= 20) {
            this.ApportBaseHoraire = Math.round(40 + (this.PoidsNum - 10) * 2);
        }
        else if (this.PoidsNum > 20) {
            this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));
        }
        ;
        this.CompJeune = Math.round(this.ApportBaseHoraire * this.DureeJeune);
        this.CompJeune1 = Math.round(this.CompJeune / 2);
        this.CompJeune2 = Math.round((this.CompJeune - this.CompJeune1) / 2);
    };
    ;
    GestionFluidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestion-fluides',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\gestion-fluides\gestion-fluides.html"*/'<ion-header><br>\n\n\n      <!-- HEADER MENU  -->\n      <div class="header"> \n\n        <div (click)="retourHome()" class="backButton">\n        <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n        Retour\n        </div>\nApports et produits sanguins \n</div>\n          <br>\n    \n                <!-- HEADER MON PATIENT  -->\n\n          <ion-item color="turquoise-fonce"> \n            <ion-label>\n              <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n              <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n              <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n          </ion-item>\n      \n\n          <ion-segment color="turquoise-fonce" [(ngModel)]="GestionFluidesView">\n            <ion-segment-button value="1">Besoins</ion-segment-button>\n            <ion-segment-button value="2">Apports IV</ion-segment-button>\n            <ion-segment-button value="3">HypoTA</ion-segment-button>\n            <ion-segment-button value="4"><span class="saignement">Hémorragie</span></ion-segment-button>\n          </ion-segment>\n        </ion-header>\n     <!-- END HEADER -->\n     <ion-content>\n  \n      <!-- ITEMS CALCULES-->\n\n            \n              <ion-grid  fixed="true" *ngIf="GestionFluidesView == 1">\n                <ion-row *ngIf="AgeNum >= 24">\n                  <ion-col>Apports journaliers - {{CategorieAge}} de {{ageLecture}} ans</ion-col>\n              </ion-row>\n              <ion-row *ngIf="AgeNum < 24">\n                <ion-col>Apports journaliers - {{CategorieAge}} de {{AgeNum}} mois</ion-col>\n                </ion-row>\n                <ion-row class="subHeaderRow">\n                  <ion-col >\n                    Apports cibles\n                  </ion-col>\n                  <ion-col>\n                    En dose poids (/kg)\n                  </ion-col>\n                  <ion-col>\n                    Pour mon patient\n                  </ion-col>            \n                </ion-row>\n\n                <ion-row class="TableApportsEven">\n                  <ion-col>\n                    Eau (mL/j)\n                  </ion-col>\n                  <ion-col>\n                    {{StandardEau}}\n                  </ion-col>\n                  <ion-col>\n                    {{Eau}}\n                  </ion-col>            \n                </ion-row>\n\n                <ion-row class="TableApportsOdd">\n                <ion-col>\n                  Calories (KCal/j)\n                </ion-col>\n                <ion-col>\n                  {{StandardKCal}}\n                </ion-col>\n                <ion-col>\n                  {{KCal}}\n                </ion-col>            \n              </ion-row>\n\n              <ion-row class="TableApportsEven">\n              <ion-col>\n                Glucides (g/j)\n              </ion-col>\n              <ion-col>\n                {{StandardGlucides}}\n              </ion-col>\n              <ion-col>\n                {{Glucides}}\n              </ion-col>            \n            </ion-row>\n\n            <ion-row class="TableApportsOdd">\n            <ion-col>\n              Acides aminés (g/j)\n            </ion-col>\n            <ion-col>\n              {{StandardAcidesAmines}}\n            </ion-col>\n            <ion-col>\n              {{AcidesAmines}}\n            </ion-col>            \n          </ion-row>\n            \n          <ion-row class="TableApportsEven">\n          <ion-col>\n            Lipides (g/j)\n          </ion-col>\n          <ion-col>\n            {{StandardLipides}}\n          </ion-col>\n          <ion-col>\n            {{Lipides}}\n          </ion-col>            \n        </ion-row>\n\n        <ion-row class="TableApportsOdd">\n        <ion-col>\n        Sodium (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardSodium}}\n        </ion-col>\n        <ion-col>\n          {{Sodium}}\n        </ion-col>            \n      </ion-row>\n\n      <ion-row class="TableApportsEven">\n      <ion-col>\n        Potassium (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardPotassium}}\n        </ion-col>\n        <ion-col>\n          {{Potassium}}\n        </ion-col>            \n      </ion-row>\n\n      <ion-row class="TableApportsOdd">\n      <ion-col>\n        Calcium (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardCalcium}}\n        </ion-col>\n        <ion-col>\n          {{Calcium}}\n        </ion-col>            \n      </ion-row>\n\n      <ion-row class="TableApportsEven">\n      <ion-col>\n        Phosphore (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardPhosphore}}\n        </ion-col>\n        <ion-col>\n          {{Phosphore}}\n        </ion-col>            \n      </ion-row>\n\n      <ion-row class="TableApportsOdd">\n      <ion-col>\n        Magnesium (mg/j)\n          </ion-col>\n        <ion-col>\n          {{StandardMagnesium}}\n        </ion-col>\n        <ion-col>\n          {{Magnesium}}\n        </ion-col>            \n      </ion-row>\n\n                </ion-grid>\n\n\n          <ion-card *ngIf="GestionFluidesView == 2" class="drogueContainer">\n\n           <p class="dilutionDrogueInduction">\n              Soluté proposé : {{Solute}} \n           </p>\n\n            <hr>\n            <h2>Apports de base</h2>\n\n            <ion-item>\n              <ion-label color="primary" class="drogueInduction">Pertes chirurgicales estimées :</ion-label>\n            <ion-select #newselect (ionChange)="UpdatePerteChir()" [(ngModel)]="PertesChir" interface="action-sheet"\n            okText="OK" cancelText="Retour" class="drogueInduction">\n             <ion-option checked="true" value="2" color="turquoise-fonce">2 mL/kg/h</ion-option>\n             <ion-option value="5" color="turquoise-fonce">5 mL/kg/h</ion-option>\n             <ion-option value="10" color="turquoise-fonce">10 mL/kg/h</ion-option>\n            </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label class="drogueInduction">\n                Apports horaires = {{ApportBaseHoraire}} + {{PertesRespiratoires}} + {{CompPertesChir}} = <ion-chip color="primary"><ion-label>{{TotalHoraire}} mL/h</ion-label></ion-chip>\n                <p class="dilutionDrogueInduction"> - 1. Besoins de base : {{ApportBaseHoraire}} mL/h</p>\n                <p class="comment"> &nbsp; &nbsp; Règle 4-2-1</p>\n                <p class="dilutionDrogueInduction"> - 2. Compensation respiratoire : {{PertesRespiratoires}} mL/h</p>\n                <p class="comment"> &nbsp; &nbsp; Pertes estimées à 17 mL/m²SC/h, applicable sur SIOT ou ML</p>\n                <p class="dilutionDrogueInduction"> - 3. Compensation chirurgicale : {{CompPertesChir}} mL/h</p>\n                <p class="comment"> &nbsp; &nbsp; Pertes estimées à {{PertesChir}} mL/kg/h</p>\n                </ion-label>\n            </ion-item>\n\n            <hr>\n            <h2>Compensation du jeûne</h2>\n\n\n            <ion-item>\n              <ion-label class="drogueInduction">Durée du jeune pré-op : <b>{{DureeJeune}} heures</b></ion-label>\n              <ion-range class="drogueInduction" color="primary" max="12" step="1" ticks="true" snaps (ionChange)="FnDureeJeune()" [(ngModel)]="DureeJeune"> </ion-range>\n            </ion-item>\n\n          <ion-item>\n            <ion-label class="drogueInduction">Compensation jeûne de {{DureeJeune}} heures : <ion-chip color="primary"><ion-label>{{CompJeune}} mL</ion-label></ion-chip>\n            <p class="dilutionDrogueInduction">- {{CompJeune1}} mL/h pendant 1h</p>\n            <p class="dilutionDrogueInduction">- puis {{CompJeune2}} mLh pendant 2h</p>\n          </ion-label>\n          </ion-item>\n\n        </ion-card>\n\n          <ion-card class="drogueContainer" *ngIf="GestionFluidesView == 3">\n            <ion-item>\n              <ion-label>\n                <p class="dilutionDrogueInduction">PAM < 20% de la valeur avant induction.</p>\n                <p class="dilutionDrogueInduction"><i>Enfant de {{ageLecture}} ans, PAS minimale de +/- {{PAShypoTA}} mmHg</i></p>\n              </ion-label>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>\n                <p class="dilutionDrogueInduction">Remplissage : 10 mL/kg</p>\n                  <ion-chip color="primary"><ion-label>NaCl 0,9% : {{VolRemplissage}} mL</ion-label></ion-chip>\n                  <p class="dilutionDrogueInduction">Renouvelable 1 à 2 fois</p>\n              </ion-label>\n            </ion-item>\n            \n            <ion-item>\n              <ion-label>\n                <p class="dilutionDrogueInduction">Ephédrine : {{PosoEphedrine}}</p>\n                  <ion-chip color="dark-pink"><ion-label>Ephédrine : {{AdminEphedrine}} mg IVD</ion-label></ion-chip>\n                  <p class="dilutionDrogueInduction">Renouvelable</p>\n              </ion-label>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>\n                <p class="dilutionDrogueInduction">Albumine : 1 g/kg</p>\n                <p class="comment">Mélange équivolume Albumine 20% & NaCl 0.9%</p>\n                  <ion-chip color="dark-green"><ion-label>Albumine 10% : {{AdminAlbumine}} mL IVSE sur 30 minutes</ion-label></ion-chip>\n                  <p class="dilutionDrogueInduction">Indication principale : nouveau-né & nourrisson</p>\n              </ion-label>\n            </ion-item>\n\n        </ion-card>\n\n          \n\n\n\n          <ion-card *ngIf="GestionFluidesView == 4" class="drogueContainer">\n          \n          <ion-card class="drogueContainer">\n          <ion-card-header color="danger">Concentré de globules rouges </ion-card-header>\n          <ion-item>\n            <ion-label class="drogueInduction">\n              Masse sanguine estimée : <ion-chip color="danger"><ion-label>{{MasseSanguine}} mL</ion-label></ion-chip>\n              <p *ngIf="AgeNum <= 24" class="comment">{{MasseSanguineAge}} mL/kg à {{AgeNum}} mois</p>\n              <p *ngIf="AgeNum > 24" class="comment">{{MasseSanguineAge}} mL/kg à {{ageLecture}} ans</p>\n          </ion-label>\n          </ion-item>\n\n          <ion-item class="HbItem">\n            <ion-label color="danger" class="drogueInduction">Hb mesurée : {{Hbmesuree}} g/dL</ion-label>\n          </ion-item>\n          <ion-range class="HbRange" max="16" step="0.5" color="danger" (ionChange)="MesureeHb()" [(ngModel)]="Hbmesuree"> </ion-range>\n\n<br><br><br><br>\n\n          <ion-item class="HbItem">\n             <ion-label color="turquoise-fonce" class="drogueInduction">Souhaitée : {{Hbsouhaitee}} g/dL</ion-label>\n          </ion-item>\n          <ion-range class="HbRange" color="turquoise-fonce" max="16" step="0.5" (ionChange)="SouhaiteeHb()" [(ngModel)]="Hbsouhaitee"> </ion-range>\n\n\n          <ion-item>\n            <ion-label class="drogueInduction">\n              Transfuser : <ion-chip color="danger"><ion-label>{{VolCGR}}</ion-label></ion-chip> \n              <p class="dilutionDrogueInduction"><b>Pour corriger {{DiffHb}} g/dL d\'hémoglobine</b></p>\n              <p class="comment">4 mL/kg/g/dL d\'Hb à corriger </p>\n            </ion-label>\n        </ion-item>\n    \n      <hr>\n\n          <ion-item>\n            <ion-label class="drogueInduction">\n              <p *ngIf="AgeNum <= 180" class="posologieDrogueInduction">Posologie proposée : 1 UP/5kg avant 15 ans </p>\n              <p *ngIf="AgeNum > 180" class="posologieDrogueInduction">Posologie proposée : 1 UP/7kg après 15 ans </p>\n              <ion-chip color="warning"><ion-label>CPA : {{UnitesPlaquettaires}} UI Plaquettaires</ion-label></ion-chip>\n              <p class="comment">1 UP = 5x10^10 Pq</p></ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class="drogueInduction">\n              <p class="posologieDrogueInduction">Posologie proposée : 20 mL/kg</p>\n              <ion-chip color="warning"><ion-label>  PFC : {{VolPFC}} mL de PFC</ion-label></ion-chip>\n              <p class="comment">1 poche = +/- 200 mL</p>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n        <hr>\n\n\n        <ion-card class="drogueContainer">\n          <ion-card-header>Médicaments hémorragie aiguë</ion-card-header>\n          <ion-item>\n            <ion-label class="drogueInduction">\n              <p class="posologieDrogueInduction">Posologie proposée : 20 mg/kg</p>\n              <ion-chip color="light"><ion-label> Ac. Tranexamique : {{ExacylChocHemorragique}} mg IVL</ion-label></ion-chip>\n             <p class="dilutionDrogueInduction">Présentation : Exacyl® 0,5g/5mL</p>\n              <p class="comment">Administration : sur 1 min, insuffisant rénal : demi-dose</p>\n            </ion-label>\n          </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction">\n            <p class="posologieDrogueInduction">Posologie proposée : 20 mg/kg</p>\n            <ion-chip color="light"><ion-label>   Fibrinogène : {{FibrinogengeChocHemorragique}} mg IVL</ion-label></ion-chip>\n            <p class="dilutionDrogueInduction">Présentation : Clottafact® 1,5 g/100mL</p>\n            <p class="comment">Administration : 300mg/min soit 20 mL/min de préparation pure</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction">\n            <p class="posologieDrogueInduction">Posologie proposée : 90 µg/kg</p>\n            <ion-chip color="light"><ion-label>Facteur VIIa : {{NovosevenChocHemorragique}} µg IVL</ion-label></ion-chip>\n           <p class="dilutionDrogueInduction">Présentation : Novoseven® 1 mg</p>\n            <p class="comment">Administration sur 5 minutes</p>\n          </ion-label>\n        </ion-item>\n      </ion-card>\n\n      </ion-card>\n   \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\gestion-fluides\gestion-fluides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GestionFluidesPage);
    return GestionFluidesPage;
}());

//# sourceMappingURL=gestion-fluides.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocoRegionalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the LocoRegionalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocoRegionalePage = /** @class */ (function () {
    function LocoRegionalePage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.ALRView = 1;
    }
    LocoRegionalePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    LocoRegionalePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    LocoRegionalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocoRegionalePage');
    };
    LocoRegionalePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    LocoRegionalePage.prototype.calculs = function () {
        /*placer les calculs ici*/
        this.Kemura = Math.round(((10 + this.PoidsNum) * 0.8) * 10) / 10;
        this.Busoni = Math.round(((2 * (this.AgeNum) / 12) + 10) * 10) / 10;
        this.BolusPIEBRopiSuf = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        this.BolusPCEARopiSuf = Math.round((this.PoidsNum * 0.15) * 10) / 10;
        this.DoseMaxPCEARopiSuf = Math.round((this.PoidsNum * 1.5) * 10) / 10;
        this.VolBupi5NN = (Math.round((this.PoidsNum * 0.2) * 10) / 10 + " mL");
        if (this.VolBupi5NN >= 1) {
            this.VolBupi5NN = "NA - poids > 5 kg";
        }
        this.VolBAXmin = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        this.VolBAXmax = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.VolFEMmin = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.VolFEMmax = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.VolSciatMin = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.VolSciatMax = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.VolIH = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.VolPenien = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.VolBPV = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.VolTAPmin = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.VolTAPmax = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.VolPudendal = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        this.VolQL = Math.round((this.PoidsNum * 0.25) * 10) / 10;
    };
    ;
    LocoRegionalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loco-regionale',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\loco-regionale\loco-regionale.html"*/'<ion-header>\n  <br>\n\n        <!-- HEADER MENU  -->\n        <div class="header"> \n\n          <div (click)="retourHome()" class="backButton">\n          <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n          Retour\n          </div>\nAnesthésie Loco-régionale\n            </div>\n            <br>\n      \n                  <!-- HEADER MON PATIENT  -->\n  \n            <ion-item color="turquoise-fonce"> \n              <ion-label>\n                <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n            </ion-item>\n        \n\n            <ion-segment color="turquoise-fonce" [(ngModel)]="ALRView" >\n              <ion-segment-button value="1">\n            Péridurale\n              </ion-segment-button>\n              <ion-segment-button value="2">\n            Rachianesthésie\n              </ion-segment-button>\n              <ion-segment-button value="3">\n                Blocs\n                  </ion-segment-button>\n            </ion-segment>\n       \n\n          </ion-header>\n       <!-- END HEADER -->\n       <ion-content>\n\n    <ion-grid *ngIf="ALRView ==1">\n\n      <ion-row class="subHeaderRow">\n        <ion-col>\n          Réalisation\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Ponction\n        </ion-col>\n        <ion-col>\n         <ion-chip color="primary"><ion-label>L4-L5</ion-label></ion-chip>  </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Aiguille\n        </ion-col>\n        <ion-col>\n         <ion-chip color="primary"><ion-label>Pédiatrique</ion-label></ion-chip> (graduation/5mm)\n         </ion-col>\n      </ion-row>\n\n\n      <ion-row class="subHeaderRow">\n        <ion-col>\n          Mesures\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Estimation EPD Kemura \n          <p class="comment">(Poids+10)/0,8</p>\n        </ion-col>\n        <ion-col>\n          <ion-chip color="turquoise"><ion-label>{{Kemura}} mm</ion-label></ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Estimation EPD Busoni \n          <p class="comment">Agex2 + 10</p>\n        </ion-col>\n        <ion-col>\n          <ion-chip color="turquoise"><ion-label>{{Busoni}} mm</ion-label></ion-chip>\n          </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Cathétérisation \n        </ion-col>\n        <ion-col>\n          <ion-chip color="turquoise"><ion-label>30 mm</ion-label></ion-chip>\n       </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Insertion\n          <p class="comment">Distance espace + Cathétérisation</p> \n        </ion-col>\n        <ion-col>\n          <ion-chip color="warning"><ion-label>{{(Busoni+Kemura)/2 + 30}} mm</ion-label></ion-chip>\n       </ion-col>\n      </ion-row>\n\n      <ion-row class="subHeaderRow">\n        <ion-col>\n          Cassette PIEB & PCEA\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Volume total\n        </ion-col>\n        <ion-col>\n          <ion-chip color="light"><ion-label>50 mL</ion-label></ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Mélange\n        </ion-col>\n        <ion-col>\n          <ion-chip color="grisclair"><ion-label>Ropi 1 mg/mL</ion-label></ion-chip>\n          + <ion-chip color="primary"><ion-label>Suf 0,2 µg/mL</ion-label></ion-chip>  \n        </ion-col>\n      </ion-row>\n\n      <ion-row class="subHeaderRow">\n        <ion-col>\n        Posologies\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Bolus horaire\n          <p class="comment">0,2 mL/kg/h</p>\n\n        </ion-col>\n        <ion-col>\n          <ion-chip color="warning"><ion-label>{{BolusPIEBRopiSuf}} mL </ion-label></ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Bolus demande\n          <p class="comment">0,15 mL/kg/bolus</p>\n        </ion-col>\n        <ion-col>\n          <ion-chip color="warning"><ion-label>{{BolusPCEARopiSuf}} mL</ion-label></ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Période réfractaire\n        </ion-col>\n        <ion-col>\n          <ion-chip color="warning"><ion-label>20 minutes</ion-label></ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Dose max. /4h\n          <p class="comment">1,5 mL/kg/4h</p>\n        </ion-col>\n        <ion-col>\n          <ion-chip color="danger"><ion-label>{{DoseMaxPCEARopiSuf}} mL</ion-label></ion-chip>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n    <ion-card *ngIf="ALRView == 2 && PoidsNum > 5" class="drogueContainer">\n    <ion-card-content>\n      Non applicable au delà de 5 kg.\n    </ion-card-content>\n    </ion-card>\n\n \n\n    <ion-grid *ngIf="ALRView == 2 && PoidsNum <= 5">\n\n      <ion-row class="subHeaderRow">\n        <ion-col>\n          Critères\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Nouveau né de moins de 5 kg\n        </ion-col>\n      </ion-row> \n      \n      <ion-row>\n        <ion-col>\n          Chirurgie sous ombilicale\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="subHeaderRow">\n        <ion-col>\n          Réalisation\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Ponction\n        </ion-col>\n        <ion-col>\n         <ion-chip color="primary"><ion-label>L4-L5</ion-label></ion-chip>  </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Aiguille\n        </ion-col>\n        <ion-col>\n         <ion-chip color="primary"><ion-label>25G - 25mm</ion-label></ion-chip>  </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Seringue\n        </ion-col>\n        <ion-col>\n         <ion-chip color="primary"><ion-label>1 mL - 10 graduations</ion-label></ion-chip> (type insuline)  </ion-col>\n      </ion-row>\n\n      <ion-row class="subHeaderRow">\n        <ion-col>\n          Posologie\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          Bupivacaïne 5 mg/mL\n          <p class="comment">0,2 mL/kg</p>\n        </ion-col>\n        <ion-col>\n         <ion-chip color="warning"><ion-label>{{VolBupi5NN}}</ion-label></ion-chip>  </ion-col>\n      </ion-row>\n      </ion-grid>\n\n      <div *ngIf="ALRView == 2 && PoidsNum <= 5" class="astucediv" padding = "15 px">\n        <img class="lightbulb" src="/assets/imgs/light-bulb.png">\n        <p class="astuce"> \n        <b>L\'astuce de Joëlle</b> : Quelques gouttes de G30% sur les lèvres, avant, pendant et après la rachianesthésie</p>\n        </div>\n\n\n  <ion-grid *ngIf="ALRView ==3">\n\n    <ion-row class="subHeaderRow">\n      <ion-col>\n        Produits\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Ropivacaïne\n      </ion-col>\n      <ion-col>\n        2 mg/mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Injection\n      </ion-col>\n      <ion-col>\n        Unique\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="subHeaderRow">\n      <ion-col>\n      Bloc\n      <p class="comment">Posologie</p>\n      </ion-col>\n      <ion-col>\n      Volume\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col>\n        Axillaire\n        <p class="comment">0,2 à 0,5 mL/kg</p>\n            </ion-col>\n      <ion-col>\n        <ion-chip color="light"><ion-label>{{VolBAXmin}} à {{VolBAXmax}} mL</ion-label></ion-chip>\n     \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Fémoral\n        <p class="comment">0,3 à 1 mL/kg</p>\n            </ion-col>\n      <ion-col>\n        <ion-chip color="light"><ion-label>{{VolFEMmin}} à {{VolFEMmax}} mL</ion-label></ion-chip>\n      \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Sciatique\n        <p class="comment">0,3 à 1 mL/kg</p>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="light"><ion-label>{{VolSciatMin}} à {{VolSciatMax}} mL</ion-label></ion-chip>\n      \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Ilio-hypogastrique\n        <p class="comment">0,5 mL/kg</p>\n       </ion-col>\n      <ion-col>\n        <ion-chip color="light"><ion-label>{{VolIH}} mL</ion-label></ion-chip>\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Pénien\n        <p class="comment"> 0,1 mL/kg</p>\n       </ion-col>\n      <ion-col>\n        <ion-chip color="light"><ion-label>{{VolPenien}} mL</ion-label></ion-chip>\n    \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Paravertébral\n        <p class="comment">0,5 mL/kg</p>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="light"><ion-label>{{VolBPV}} mL</ion-label></ion-chip>\n        \n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      TAP\n      <p class="comment">0,3 à 0,5 mL/kg/côté</p>\n   </ion-col>\n    <ion-col>\n      <ion-chip color="light"><ion-label>{{VolTAPmin}} à {{VolTAPmax}} mL/côté</ion-label></ion-chip>\n      \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      Carré des lombes \n      <p class="comment"> 0,25 mL/kg/côté</p>\n       </ion-col>\n    <ion-col>\n      <ion-chip color="light"><ion-label>{{VolQL}} mL/côté</ion-label></ion-chip>\n      \n     </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      Erecteurs du rachis\n      <p class="comment">0,25 mL/kg/côté</p>\n    </ion-col>\n    <ion-col>\n      <ion-chip color="light"><ion-label>{{VolQL}} mL/côté</ion-label></ion-chip>\n      \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n    Pudendal    \n    <p class="comment">0,2 mL/kg/côté\n    </p>\n    </ion-col>\n    <ion-col>\n      <ion-chip color="light"><ion-label>{{VolPudendal}} mL/côté</ion-label></ion-chip>\n      \n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\loco-regionale\loco-regionale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LocoRegionalePage);
    return LocoRegionalePage;
}());

//# sourceMappingURL=loco-regionale.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntalgiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_pages_scores_scores__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the AntalgiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AntalgiePage = /** @class */ (function () {
    function AntalgiePage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.isShownPal1 = false;
        this.isShownPal2 = false;
        this.isShownPal3 = false;
        this.isShownAutres = false;
        this.PostOpView = 1;
    }
    AntalgiePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    AntalgiePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AntalgiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntalgiePage');
    };
    ;
    AntalgiePage.prototype.TogglePalier1 = function () {
        this.isShownPal1 = !this.isShownPal1;
    };
    ;
    AntalgiePage.prototype.TogglePalier2 = function () {
        this.isShownPal2 = !this.isShownPal2;
    };
    ;
    AntalgiePage.prototype.TogglePalier3 = function () {
        this.isShownPal3 = !this.isShownPal3;
    };
    ;
    AntalgiePage.prototype.ToggleAutres = function () {
        this.isShownAutres = !this.isShownAutres;
    };
    ;
    AntalgiePage.prototype.openScores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_pages_scores_scores__["a" /* ScoresPage */]);
    };
    AntalgiePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    AntalgiePage.prototype.calculs = function () {
        /** Antagonisation curares */
        this.PosoBridion2reponses = Math.round((this.PoidsNum * 4) * 10) / 10;
        this.PosoBridion4reponses = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.AdminAtropineAntagonisation = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.AdminProstigmineAntagonisation = Math.round((this.PoidsNum * 40) * 10) / 10;
        /*Palier 1*/
        this.AdminParacetamol = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.AdminParacetamol >= 1000) {
            this.AdminParacetamol = 1000;
        }
        this.AdminKeto = Math.round((this.PoidsNum * 1) * 10) / 10;
        if (this.AdminKeto >= 100) {
            this.AdminKeto = 100;
        }
        this.AdminIbu = Math.round((this.PoidsNum * 10) * 10) / 10;
        if (this.AdminIbu >= 400) {
            this.AdminIbu = 400;
        }
        /*Palier 2*/
        this.AdminNubain = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        if (this.AdminNubain >= 10) {
            this.AdminNubain = 10;
        }
        this.AdminNubainHdJ = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        if (this.AdminNubainHdJ >= 10) {
            this.AdminNubainHdJ = 10;
        }
        this.AdminAcupan = Math.round((this.PoidsNum * 1) * 10) / 10;
        if (this.AdminAcupan >= 120) {
            this.AdminAcupan = 120;
        }
        this.AdminTramadol = Math.round((this.PoidsNum * 1) * 10) / 10;
        if (this.AdminTramadol >= 100) {
            this.AdminTramadol = 100;
        }
        /*Palier 3*/
        this.AdminMorphineBO = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.AdminMorphineTitration = Math.round((this.PoidsNum * 0.025) * 10) / 10;
        this.AdminMorphinePCA = Math.round((this.PoidsNum * 0.02) * 10) / 10;
        this.AdminMorphinePCAMax = Math.round((this.PoidsNum * 0.4) * 10) / 10;
        this.AdminMorphinePOLP = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.AdminMorphinePOID = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        /*Autres antalgiques*/
        this.AdminNeurontin = Math.round((this.PoidsNum * 5) * 10) / 10;
        if (this.AdminNeurontin >= 300) {
            this.AdminNeurontin = 300;
        }
        this.AdminSpasfonIV = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        if (this.AdminSpasfonIV >= 120) {
            this.AdminSpasfonIV = 120;
        }
        this.AdminSpasfonPO = Math.round((this.PoidsNum * 1.5) * 10) / 10;
        if (this.AdminSpasfonPO >= 120) {
            this.AdminSpasfonPO = 120;
        }
        this.AdminLaroxylIV = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.AdminLaroxylPO = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.AdminRivotrilPO = Math.round((this.PoidsNum * 0.01) * 10) / 10;
        this.GouttesRivotril = Math.round(this.PoidsNum / 10);
        this.AdminClonidineIVSE = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.AdminClonidinePO = Math.round((this.PoidsNum * 5) * 10) / 10;
        /* Anti émétiques */
        this.AdminZophren = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        if (this.AdminZophren >= 8) {
            this.AdminZophren = 8;
        }
        this.AdminDroleptan = Math.round((this.PoidsNum * 25) * 10) / 10;
        if (this.AdminDroleptan >= 1250) {
            this.AdminDroleptan = 1250;
        }
        /* Anticoagulation*/
        this.AdminHBPMpreventive = Math.round((this.PoidsNum * 100) * 10) / 10;
        if (this.AgeNum <= 6 * 12) {
            this.AdminHBPMefficace = Math.round((this.PoidsNum * 130) * 10) / 10;
            this.PosoHBPMefficace = "130 UI/kg x2/j avant 6 ans";
        }
        else {
            this.AdminHBPMefficace = Math.round((this.PoidsNum * 100) * 10) / 10;
            this.PosoHBPMefficace = "100 UI/kg x2/j après 6 ans";
        }
        ;
        this.AdminHNF50 = Math.round((this.PoidsNum * 50) * 10) / 10;
        this.AdminHNF100 = Math.round((this.PoidsNum * 100) * 10) / 10;
        this.AdminHNFentretien = Math.round((this.PoidsNum * 20) * 10) / 10;
    };
    ;
    AntalgiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-antalgie',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\antalgie\antalgie.html"*/'\n\n<ion-header><br>\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n\n    Réveil & SSPI</div>\n      <br>\n\n      <ion-item color="turquoise-fonce"> \n        <ion-label>\n          <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n          <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n      </ion-item>\n      <ion-segment color="turquoise-fonce" [(ngModel)]="PostOpView">\n        <ion-segment-button value="1">Décurar.</ion-segment-button>\n        <ion-segment-button value="2">Douleur</ion-segment-button>\n        <ion-segment-button value="3">NVPO</ion-segment-button>\n        <ion-segment-button value="4">Anti-coag.</ion-segment-button>\n      </ion-segment>\n    </ion-header>\n\n      <ion-content>\n\n\n    <ion-card *ngIf="PostOpView ==1" class="drogueContainer">\n    <ion-item class="avecAMM">\n      <ion-label color="dark-green" class="drogueInduction">\n        <p class="dilutionDrogueInduction">Posologie proposée : 20 µg/kg</p>\n       - Atropine (0,5mg/mL) : {{AdminAtropineAntagonisation}} µg IVD\n      <p class="dilutionDrogueInduction">\n        Antagonisation curare en association avec prostigmine\n      </p></ion-label>\n    </ion-item>\n    <div class="AMM">Vérifier : <br> TOF > 2/4</div>\n  \n    <ion-item class="avecAMM">    \n      <ion-label color="primary" class="drogueInduction"> \n    <p class="dilutionDrogueInduction">Posologie proposée : 40 µg/kg</p>\n    - Prostigmine (0,5mg/mL) : {{AdminProstigmineAntagonisation}} µg IVD\n    <p class="dilutionDrogueInduction">\n      Antagonisation curare en association avec atropine\n    </p></ion-label>\n    </ion-item>\n    <div class="AMM">Vérifier : <br> TOF > 2/4</div>\n  \n    <ion-item class="avecAMM">         \n      <ion-label color="orange" class="drogueInduction">Antagonisation rocuronium   \n      <p color="dark-green" class="dilutionDrogueInduction">- TOF > 2/4 : Suggamadex (Bridion® 200mg/2mL) {{PosoBridion2reponses}} mg  (4 mg/kg) IVD</p>\n      <p color="primary" class="dilutionDrogueInduction">- TOF > 4/4 : Suggamadex (Bridion® 200mg/2mL) {{PosoBridion4reponses}} mg (2 mg/kg) IVD </p>\n    </ion-label> \n    </ion-item>\n    \n      <div class="AMM">Vérifier : <br> TOF > 2/4</div>\n  </ion-card>\n\n\n<div *ngIf="PostOpView == 2">\n      <ion-item-divider (click)="TogglePalier1()"> \n        <ion-label color="dark-turquoise">Antalgiques palier 1 \n          <ion-icon *ngIf="!isShownPal1" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal1" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n        </ion-label>\n      </ion-item-divider> \n  \n      <ion-card *ngIf="isShownPal1" class="drogueContainer">\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 15 mg/kg</p>\n          Paracétamol : {{AdminParacetamol}} mg IVL ou PO\n          <p class="dilutionDrogueInduction">Toutes les 6h</p>\n        </ion-label>\n      </ion-item>\n  \n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 1 mg/kg</p>\n          Ketoprofene (Profenid<span>&#174;</span>) : {{AdminKeto}} mg IVL\n          <p class="dilutionDrogueInduction">Toutes les 8 h</p> \n        </ion-label>\n      </ion-item>\n      \n      <div class="AMM">AMM <br> IV 15 ans <br> Sirop 6 mois</div>\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 10 mg/kg</p>\n          Ibuprofene : {{AdminIbu}} mg PO \n          <p class="dilutionDrogueInduction">Toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 3 mois</div>\n\n    </ion-card>\n\n      \n  \n      <ion-item-divider (click)="TogglePalier2()">\n        <ion-label color="dark-turquoise">Antalgiques palier 2\n\n          <ion-icon *ngIf="!isShownPal2" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal2" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-card *ngIf="isShownPal2" class="drogueContainer">\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,2 mg/kg</p>\n          Nalbuphine (Nubain<span>&#174;</span>) : {{AdminNubain}} mg PO ou IVL\n          <p class="dilutionDrogueInduction">Toutes les 4h</p> \n          <p class="comment">En ambulatoire, diviser par 2 : {{AdminNubainHdJ}} mg</p>\n          <p class="comment">injecter sur 20 minutes avant 1 an</p>\n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 18 mois</div>\n      \n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée 1 mg/kg/j</p>\n          Nefopam (Acupan<span>&#174;</span>) : {{AdminAcupan}} mg/j IVSE\n          <p class="dilutionDrogueInduction">IVSE continu sur 24h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 15 ans</div>\n      \n      <ion-item class="avecAMM" >\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 1 mg/kg</p>\n          Tramadol (Contramal<span>&#174;</span>) : {{AdminTramadol}} mg PO ou IVL\n          <p class="dilutionDrogueInduction">Toutes les 6h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> PO 3 ans <br> IV 15 ans</div>\n\n    </ion-card>\n  \n      <ion-item-divider (click)="TogglePalier3()">\n        <ion-label color="dark-turquoise">Antalgiques palier 3\n\n          <ion-icon *ngIf="!isShownPal3" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal3" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n\n      <ion-card *ngIf="isShownPal3" class="drogueContainer">\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 100 µg/kg</p>\n          Morphine avant réveil : {{AdminMorphineBO}} mg IVD\n          <p class="dilutionDrogueInduction">Une seule fois</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 25 µg/kg</p>\n          Morphine en titration : {{AdminMorphineTitration}} mg IVD\n          <p class="dilutionDrogueInduction">Toutes les 3 min, réévaluer après 4 boli</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 20 µg/kg</p>\n          Morphine en PCA : {{AdminMorphinePCA}} mg IVL\n          <p class="dilutionDrogueInduction">PR de 5 min, dose max : {{AdminMorphinePCAMax}} mg (400 µg/kg) par 4h</p> \n        </ion-label>\n      </ion-item> \n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : LP 1 mg/kg PO ou standard 0,1 mg/kg</p>\n          Morphine per os :\n          <p class="dilutionDrogueInduction">- {{AdminMorphinePOLP}} mg LP toutes les 12h (1 mg/kg) PO</p> \n          <p class="dilutionDrogueInduction">- {{AdminMorphinePOID}} mg toutes les 4h SB (0,1 mg/kg) PO</p> \n        </ion-label>\n      </ion-item> \n\n      <div class="AMM">AMM <br> > 6 mois</div>  \n\n    </ion-card>\n\n\n      <ion-item-divider (click)="ToggleAutres()">\n        <ion-label color="dark-turquoise">Autres antalgiques\n\n          <ion-icon *ngIf="!isShownAutres" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownAutres" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAutres" class="drogueContainer">\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 5 mg/kg</p>\n          Gabapentine (Neurontin<span>&#174;</span>) : {{AdminNeurontin}} mg PO\n          <p class="dilutionDrogueInduction">Toutes les 8h</p> \n          <p class="comment">NB : comprimés de 150 ou 300 mg</p>\n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 6 ans</div>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : IV 0,5 mg/kg, PO 1,5 mg/kg </p>\n          Phloroglucinol (Spasfon<span>&#174;</span>) :\n          <p class="dilutionDrogueInduction">- {{AdminSpasfonIV}} mg IVL, toutes les 6h</p> \n          <p class="dilutionDrogueInduction">- {{AdminSpasfonPO}} mg PO, toutes les 6h</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,5 mg/kg</p>\n          Amitryptiline (Laroxyl<span>&#174;</span>) : {{AdminLaroxylIV}} mg\n          <p class="dilutionDrogueInduction">IVSE sur 6h ou PO, 1 fois par jour</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 6 ans</div>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,01 mg/kg</p>\n          Clonazepam (Rivotril<span>&#174;</span>) : {{AdminRivotrilPO}} mg PO\n          <p class="dilutionDrogueInduction">Toutes les 8h</p> \n          <p class="comment">- soit <b>{{GouttesRivotril}} gouttes</b> (1 gtte/10kg), 3 fois par jour</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : IVSE 0,5 µg/kg/h ou PO 5 µg/kg</p>\n          Catapressan (Clonidine <span>&#174;</span>) : {{AdminClonidineIVSE}} µg/h IVSE \n          <p class="dilutionDrogueInduction">- {{AdminClonidinePO}} mg (5 µg/kg) PO, toutes les 8h</p>\n          <p class="comment">Possibilité de doubler si insuffisant</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card>\n    </div>\n\n\n  \n      <ion-card *ngIf="PostOpView == 3" class="drogueContainer">\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée 0,1 mg/kg</p>\n          Ondansétron (Zophren<span>&#174;</span>) : {{AdminZophren}} mg IVL ou PO\n          <p class="dilutionDrogueInduction">toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 1 an</div>  \n\n      <ion-item>\n        <ion-label class="drogueInduction">\n          <p class="posologieDrogueInduction">Posologie proposée : 25 µg/kg</p>\n          Dropéridol (Droleptan<span>&#174;</span>) : {{AdminDroleptan}} µg IVL\n          <p class="dilutionDrogueInduction">2 fois par jour maximum</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card>\n\n  \n      <ion-card *ngIf="PostOpView == 4" class="drogueContainer">\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Enoxaparine (Lovenox<span>&#174;</span>):</b>\n          <p class="dilutionDrogueInduction">Préventive : {{AdminHBPMpreventive}} UI/j </p>\n          <p class="dilutionDrogueInduction">- Pour 100 UI/kg/j</p>\n          <p class="dilutionDrogueInduction"><b>- Administrer en 2 injections avant 1 mois</b></p>\n          <p class="dilutionDrogueInduction">Curative : {{AdminHBPMefficace}} UI <b>x2/j</b> </p>\n          <p class="dilutionDrogueInduction">- Pour {{PosoHBPMefficace}}</p>\n          <p class="dilutionDrogueInduction"><b>- Obj aXa [0,5-1] ; 4h après 3e inj.</b></p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>HNF efficace :</b>\n    \n          <p class="dilutionDrogueInduction">Bolus : {{AdminHNF50}} à {{AdminHNF100}} UI </p>\n          <p class="dilutionDrogueInduction">- Pour 50 à 100 UI/kg</p>\n      \n          <p class="dilutionDrogueInduction">Entretien : {{AdminHNFentretien}} UI/h</p>\n          <p class="dilutionDrogueInduction">- Pour 20 UI/kg/h</p>\n          <p class="dilutionDrogueInduction"><b>- Obj aXa [0,3-0,6] à H4.</b></p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Protamine :</b>\n          <br>\n          <p class="dilutionDrogueInduction">1 mg pour 100 UI d\'héparine administrées</p>\n          <p class="dilutionDrogueInduction">IV <b>lent</b> sans dépasser 50mg/10min.</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\antalgie\antalgie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AntalgiePage);
    return AntalgiePage;
}());

;
//# sourceMappingURL=antalgie.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrgencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var UrgencePage = /** @class */ (function () {
    function UrgencePage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.SoluteRemplissage = "";
        this.DixiemeDebitNADgammakgmin = 100;
        this.isShownNAD = false;
        this.isShownACR = false;
        this.isShownChocAna = false;
        this.isShownHTM = false;
        this.isShownIAL = false;
        this.isShownMetabo = false;
        this.isShownAAG = false;
        this.isShownHTADiuretiques = false;
        this.isShownCriseConvulsive = false;
        this.isShownAntidotes = false;
    }
    UrgencePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    /*Chargement des données du formulaire au chargement de la page, alerte si données manquantes*/
    UrgencePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    /*2. Fonction d'alerte si données manquantes */
    UrgencePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__accueil_accueil__["a" /* AccueilPage */]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    UrgencePage.prototype.CalculDeltaNa = function () {
        this.DeltaNa = 125 - this.NatremieMesuree;
        this.AdminNa = Math.round((this.DeltaNa * this.PoidsNum * 0.6) * 10) / 10;
    };
    UrgencePage.prototype.calculs = function () {
        /* ACR */
        this.CEEACR = Math.round((this.PoidsNum * 4) * 10) / 10;
        this.PosoAdrenalineACR = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.PosoCordaroneACR = Math.round((this.PoidsNum * 5) * 10) / 10;
        this.PosoBicarACR = Math.round((this.PoidsNum * 2) * 10) / 10;
        /* Anaphylaxie */
        this.PosoAdrenalineAnaph = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.PosoSoluAnaph = Math.round((this.PoidsNum * 1) * 10) / 10;
        /* HTM */
        this.AdminDantroleneHTM = Math.round((this.PoidsNum * 2.5) * 10) / 10;
        /* Intox aux AL */
        this.PosoRivotrilIAL = Math.round((this.PoidsNum * 15) * 10) / 10;
        this.PosoIntralipidesIAL = Math.round((this.PoidsNum * 3) * 10) / 10;
        /* Desordres métaboliques  */
        this.AdminG10Initial = Math.round((this.PoidsNum * 3) * 10) / 10;
        this.AdminG10Suite = Math.round((this.PoidsNum * 0.4) * 10) / 10;
        this.AdminGluconateCa = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.AdminInsulineHyperK = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        this.AdminG10HyperK = Math.round((this.PoidsNum * 10) * 10) / 10;
        /* Asthme aigu grave  */
        if (this.PoidsNum <= 20) {
            this.AerosolSalbutamolAAG = 2.5;
        }
        else {
            this.AerosolSalbutamolAAG = 5;
        }
        ;
        if (this.AgeNum < 72) {
            this.AerosolAtroventAAG = 0.25;
        }
        else {
            this.AerosolAtroventAAG = 0.5;
        }
        ;
        this.AdminSolumedrolAAG = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.IVSESolumedrolAAG = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.MgSO4AAG = Math.round((this.PoidsNum * 40) * 10) / 10;
        if (this.MgSO4AAG >= 2000) {
            this.MgSO4AAG = 2000;
        }
        ;
        this.SalbutamolIVAAG = Math.round((this.PoidsNum * 0.5) * 10) / 10;
        this.AdminKClAAG = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.AdminKClAAGmg = Math.round((this.PoidsNum * 150) * 10) / 10;
        if (this.AdminKClAAGmg >= 4000) {
            this.AdminKClAAGmg = 4000;
        }
        ;
        if (this.PoidsNum <= 10) {
            this.ApportBaseHoraire = Math.round(4 * this.PoidsNum);
        }
        else if (this.PoidsNum <= 20) {
            this.ApportBaseHoraire = Math.round(40 + (this.PoidsNum - 10) * 2);
        }
        else if (this.PoidsNum > 20) {
            this.ApportBaseHoraire = Math.round(60 + (this.PoidsNum - 20));
        }
        ;
        this.ApportBaseJour = Math.round((this.ApportBaseHoraire * 24) * 10) / 10;
        this.AerosolBricanylAAG = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        if (this.AerosolBricanylAAG >= 5) {
            this.AerosolBricanylAAG = 5;
        }
        ;
        /* HTA & diurétiques  */
        this.LoxenIVSE = Math.round((this.PoidsNum * 60) * 10) / 10;
        this.SectralPO = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.TrandateBolus = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        this.TrandateIVSE = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.AdminRenitec = Math.round((this.PoidsNum * 50) * 10) / 10;
        if (this.AdminRenitec >= 5000) {
            this.AdminRenitec = 5000;
        }
        ;
        this.AdminLasilix = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.AdminBurinexIVSE = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.AdminAldactoneMin = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.AdminAldactoneMax = Math.round((this.PoidsNum * 5) * 10) / 10;
        /* Anticonvulsivants  */
        this.AdminRivotrilConvulsion = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.AdminGardenal = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.AdminGardenal >= 500) {
            this.AdminGardenal = 500;
        }
        ;
        this.AdminDilantin = Math.round((this.PoidsNum * 20) * 10) / 10;
        if (this.AdminDilantin >= 1500) {
            this.AdminDilantin = 1500;
        }
        ;
        this.AdminMidazolamConvulsion = Math.round((this.PoidsNum * 0.25) * 10) / 10;
        this.AdminKeppra = Math.round((this.PoidsNum * 30) * 10) / 10;
        if (this.AdminKeppra >= 2000) {
            this.AdminKeppra = 2000;
        }
        ;
        /** ANTIDOTES */
        this.AdminNarcan = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.AdminAnexate = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.AdminNAC1 = Math.round((this.PoidsNum * 150) * 10) / 10;
        this.AdminNAC2 = Math.round((this.PoidsNum * 50) * 10) / 10;
        this.AdminNAC3 = Math.round((this.PoidsNum * 100) * 10) / 10;
        this.AdminNAC4 = Math.round((this.PoidsNum * 150) * 10) / 10;
        /** NAD */
        if (this.PoidsNum <= 10) {
            this.ProtocoleNAD = "3 mg/kg dans 50 mL";
            this.QuantiteNAD = Math.round(this.PoidsNum * 3 * 10) / 10;
            this.VolumeNAD = Math.round(this.QuantiteNAD / 2 * 10) / 10;
            this.AmpoulesNAD = Math.round(this.VolumeNAD / 4 * 10) / 10;
            this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD) * 10) / 10;
            this.DebitNADmlh = 1;
            this.DebitNADgammakgmin = 1;
            this.DebitNADmgh = Math.round((this.DebitNADgammakgmin * this.PoidsNum * 60 / 1000) * 10) / 10;
            this.DixiemeDebitNADgammakgmin = 100;
        }
        else if (this.PoidsNum <= 30) {
            this.ProtocoleNAD = "1,5 mg/kg dans 50 mL";
            this.QuantiteNAD = Math.round(this.PoidsNum * 1.5 * 10) / 10;
            this.VolumeNAD = Math.round(this.QuantiteNAD / 2 * 10) / 10;
            this.AmpoulesNAD = Math.round(this.VolumeNAD / 4 * 10) / 10;
            this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD) * 10) / 10;
            this.DebitNADmlh = 2;
            this.DebitNADgammakgmin = 1;
            this.DebitNADmgh = Math.round((this.DebitNADgammakgmin * this.PoidsNum * 60 / 1000) * 10) / 10;
            this.DixiemeDebitNADgammakgmin = 100;
        }
        else {
            this.ProtocoleNAD = "0,6 mg/kg dans 50 mL";
            this.QuantiteNAD = Math.round(this.PoidsNum * 0.6 * 10) / 10;
            this.VolumeNAD = Math.round(this.QuantiteNAD / 2 * 10) / 10;
            this.AmpoulesNAD = Math.round(this.VolumeNAD / 4 * 10) / 10;
            this.VolumeSerumPhyNAD = Math.round((50 - this.VolumeNAD) * 10) / 10;
            this.DebitNADmlh = 5;
            this.DebitNADgammakgmin = 1;
            this.DebitNADmgh = Math.round((this.DebitNADgammakgmin * this.PoidsNum * 60 / 1000) * 10) / 10;
            this.DixiemeDebitNADgammakgmin = 100;
        }
        ;
    };
    ;
    /**NAD PREPARATION */
    UrgencePage.prototype.toggleNAD = function () {
        this.isShownNAD = !this.isShownNAD;
    };
    ;
    UrgencePage.prototype.VariationNAD = function () {
        this.DebitNADgammakgmin = this.DixiemeDebitNADgammakgmin / 100;
        this.DebitNADmgh = Math.round((this.DebitNADgammakgmin * this.PoidsNum * 60 / 1000) * 10) / 10;
        if (this.ProtocoleNAD == "0,6 mg/kg dans 50 mL") {
            this.DebitNADmlh = Math.round((this.DebitNADgammakgmin * 5) * 10) / 10;
        }
        else if (this.ProtocoleNAD == "1,5 mg/kg dans 50 mL") {
            this.DebitNADmlh = Math.round((this.DebitNADgammakgmin * 2) * 10) / 10;
        }
        else if (this.ProtocoleNAD == "3 mg/kg dans 50 mL") {
            this.DebitNADmlh = this.DebitNADgammakgmin;
        }
        ;
    };
    /* Toggle des cartes */
    UrgencePage.prototype.ToggleAntidotes = function () {
        this.isShownAntidotes = !this.isShownAntidotes;
    };
    UrgencePage.prototype.ToggleACR = function () {
        this.isShownACR = !this.isShownACR;
    };
    ;
    UrgencePage.prototype.ToggleChocAna = function () {
        this.isShownChocAna = !this.isShownChocAna;
    };
    ;
    UrgencePage.prototype.ToggleHTM = function () {
        this.isShownHTM = !this.isShownHTM;
    };
    ;
    UrgencePage.prototype.ToggleIAL = function () {
        this.isShownIAL = !this.isShownIAL;
    };
    ;
    UrgencePage.prototype.ToggleMetabo = function () {
        this.isShownMetabo = !this.isShownMetabo;
    };
    ;
    UrgencePage.prototype.ToggleAAG = function () {
        this.isShownAAG = !this.isShownAAG;
    };
    ;
    UrgencePage.prototype.ToggleHTADiuretiques = function () {
        this.isShownHTADiuretiques = !this.isShownHTADiuretiques;
    };
    ;
    UrgencePage.prototype.ToggleCriseConvulsive = function () {
        this.isShownCriseConvulsive = !this.isShownCriseConvulsive;
    };
    ;
    UrgencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntalgiePage');
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], UrgencePage.prototype, "nav", void 0);
    UrgencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-urgence',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\urgence\urgence.html"*/'<ion-header>\n        <!-- HEADER MENU  -->\n        <div class="header"> \n<br>\n          <div (click)="retourHome()" class="backButton">\n          <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n          Retour\n          </div>\nUrgences</div>\n            <br>\n      \n                  <!-- HEADER MON PATIENT  -->\n  \n            <ion-item color="turquoise-fonce"> \n              <ion-label>\n                <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n            </ion-item>\n        \n          \n\n          </ion-header>\n       <!-- END HEADER -->\n       <ion-content>\n\n<ion-list>\n\n  <ion-item (click)="toggleNAD()" ><ion-label color="dark-turquoise">\n    <ion-icon start name="flask"></ion-icon>\n    &nbsp;&nbsp; Noradrénaline\n    <ion-icon *ngIf="!isShownNAD" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownNAD" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label></ion-item>\n\n\n  <ion-card class="drogueContainer" *ngIf="isShownNAD">\n    <ion-card-content>\n\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark">\n          <p class="comment">Patient de {{PoidsNum}} kg</p>\n          <p class="dilutionDrogueInduction">Protocole proposé : {{ProtocoleNAD}}</p>\n          Noradrénaline (8mg/4mL) : <b>{{QuantiteNAD}}mg/50mL</b>\n          <p class="dilutionDrogueInduction">Préparation : </p>\n          <p class="dilutionDrogueInduction">{{VolumeNAD}}mL de NAD (= {{AmpoulesNAD}} ampoules de 4mL)</p>\n          <p class="dilutionDrogueInduction">+ {{VolumeSerumPhyNAD}}mL de NaCl 0,9%</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class="drogueInduction">Débit : {{DebitNADgammakgmin}} µg/kg/min \n          <br> Vitesse : {{DebitNADmlh}} mL/h\n          <br> Posologie : {{DebitNADmgh}} mg/h\n        </ion-label>\n        <ion-range color="turquoise-fonce" max="500" step="10" (ngModelChange)="VariationNAD()" [(ngModel)]="DixiemeDebitNADgammakgmin"> </ion-range>\n\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n    <ion-item  (click)="ToggleACR()">\n        <ion-label color="danger"><ion-icon start name="medkit"></ion-icon>\n          &nbsp;&nbsp; Arrêt cardio-respiratoire\n        <ion-icon *ngIf="!isShownACR" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownACR" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n        </ion-label>\n    </ion-item>\n\n        <ion-card class="drogueContainer" *ngIf="isShownACR">\n          <ion-card-content>\n          <p>1. Appel à l\'aide (RDB <b>3535</b>).</p>\n          <p>2. Débuter le massage cardiaque externe.</p>\n          <p>3. Ventiler en FiO2 1.</p>\n          <br>\n          <h4>Posologies ACR : </h4>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="danger">\n            Adrénaline : <b>{{PosoAdrenalineACR}} µg</b> - IVD/5 minutes\n            <p class="dilutionDrogueInduction">- 10 µg/kg, renouvellable</p>\n            <p>- d\'emblée si asystolie, au 3e choc si TV/FV</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="danger">\n            CEE : <b>{{CEEACR}} J</b> \n            <p class="dilutionDrogueInduction">- 4 J/kg</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="dark">\n            Cordarone : <b>{{PosoCordaroneACR}} mg</b> - IVD \n            <p class="dilutionDrogueInduction">- 5 mg/kg</p>\n            <p class="dilutionDrogueInduction">- renouvelable 1 fois après 5 min</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="dark">\n            Bicar 4,2% : <b>{{PosoBicarACR}} mL</b> - IVL \n            <p class="dilutionDrogueInduction">- 2 mL/kg dès la 15e minute</p>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-item (click)="ToggleHTM()">\n      <ion-label color="warning"><ion-icon start name="alert"></ion-icon>\n        &nbsp;&nbsp; Hyperthermie maligne\n        <ion-icon *ngIf="!isShownHTM" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownHTM" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item>\n\n      <ion-card class="drogueContainer" *ngIf="isShownHTM">\n      <ion-card-content>\n        <p  class="drogueInduction">Evoquer devant  :\n          <p class="dilutionDrogueInduction">- augmentation importante et inexpliquée de l\'EtCO2, de la FC ou de la température</p>\n          <p class="dilutionDrogueInduction">- apparition d\'une rigidité musculaire des masséters, du tronc ou des membres.</p>\n          <br>\n        <p  class="drogueInduction">Conduite à tenir en cas de suspicion :</p>\n        <p class="dilutionDrogueInduction">- Arrêt halogénés, changement des filtres et tuyaux</p>\n        <p class="dilutionDrogueInduction">- Hyperventilation en FiO2 1</p>\n        <p class="dilutionDrogueInduction">- Contre indication absolue celocurine jusqu\'à preuve du contraire</p>\n        <p class="dilutionDrogueInduction">- Dantrolène <b>{{AdminDantroleneHTM}} mg IVL</b> (soit 2,5 mg/kg, renouvelable 4 fois max) à diluer dans de l\'<b>EPPI</b></p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item (click)="ToggleChocAna()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Anaphylaxie\n        <ion-icon *ngIf="!isShownChocAna" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownChocAna" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item>\n\n    <ion-card class="drogueContainer" *ngIf="isShownChocAna">\n      <ion-card-content >\n        <p class="drogueInduction">Réaction anaphylactique de grade 2 ou 3 si : </p>\n            <p class="dilutionDrogueInduction">- Hypotension : -30% PAS référence</p> \n            <p class="dilutionDrogueInduction">- Tachycardie : +30% FC référence</p> \n            <p class="dilutionDrogueInduction">- Oedeme de Quincke ou bronchospasme</p>\n        \n        <br>\n        <p class="drogueInduction">Mesures à mettre en place :</p>\n        <p class="dilutionDrogueInduction">- éviction de tout allergène suspecté,</p>\n        <p class="dilutionDrogueInduction">- adrénaline : <b>{{PosoAdrenalineAnaph}} µg IVD</b>, renouvelable 5 à 10 fois,</p>\n        <p class="dilutionDrogueInduction">- methylprednisolone (Solumédrol® 20 mg/mL): <b>{{PosoSoluAnaph}} mg IVD</b>, renouvelable 1 fois,</p>\n        <p class="dilutionDrogueInduction">- prévoir bilan allergo-immunologique après contrôle de la situation clinique.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item (click)="ToggleIAL()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Intoxication aux AL\n        <ion-icon *ngIf="!isShownIAL" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownIAL" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownIAL" class="drogueContainer">\n      <ion-card-content>\n        <p class="drogueInduction">Devant toute suspicion, en présence de signes neurologiques :</p>\n        <p class="dilutionDrogueInduction">- Rivotril : <b>{{PosoRivotrilIAL}} µg IVD</b> (soit 15 µg/kg)</p>\n        <p class="dilutionDrogueInduction">- Intralipides 20% : <b>{{PosoIntralipidesIAL}} mL IVL</b> (soit 3mL/kg), renouvelable</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item (click)="ToggleMetabo()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Désordres métaboliques\n        <ion-icon *ngIf="!isShownMetabo" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownMetabo" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownMetabo" class="drogueContainer">\n      <ion-card-content>\n\n        <p class="drogueInduction"><b>Hypoglycémie &lt; 3 mmol/L</b> :</p>\n        <p class="dilutionDrogueInduction">- G10% : <b>{{AdminG10Initial}} mL</b> sur 5 minutes (3 mL/kg)</p>\n        <p class="dilutionDrogueInduction">- puis G10% : <b>{{AdminG10Suite}} mL/min</b> IVSE jusqu\'à normalisation (0,4 mL/kg/min).</p>\n        \n        <hr>\n        <p class="drogueInduction"><b>Hyponatrémie &lt; 125 mmol/L & symptomatique </b>:</p>\n        <ion-item>\n          <ion-label class="dilutionDrogueInduction" position="stacked">Natrémie mesurée</ion-label>\n          <ion-input class="dilutionDrogueInduction" inputmode ="number" type="number" (ionChange)="CalculDeltaNa(NatremieMesuree)" [(ngModel)]="NatremieMesuree" placeholder="Renseigner"></ion-input>\n        </ion-item>\n        <p class="dilutionDrogueInduction">- Le delta sodium est de {{DeltaNa}} mM.</p>\n        <p class="dilutionDrogueInduction">- Sodium IVD : <b>{{AdminNa}} mEq</b> IVD jusqu\'à amélioration des symptomes (Delta x Poids x 0,6)</p>\n        <p class="dilutionDrogueInduction">- puis Sodium IVSE : <b>{{AdminNa}} mEq/4h</b> IVSE jusqu\'à normalisation de la natrémie</p>\n        <p class="dilutionDrogueInduction">- Utiliser du SSH (NaCl 20%) pour limiter les apports hydriques.</p>\n       \n        <hr>\n        <p class="drogueInduction"><b>Hyperkaliémie menaçante </b>:</p>\n        <p class="dilutionDrogueInduction">- Arrêt des apports</p>\n        <p class="dilutionDrogueInduction">- Si arythmie cardiaque : gluconate de calcium {{AdminGluconateCa}} mL IVD (2 mL/kg)</p>\n        <p class="dilutionDrogueInduction">- Traitement hypokaliémiant : insuline {{AdminInsulineHyperK}} UI (0,1 UI/kg) + G10 {{AdminG10HyperK}} mL (10 mL/kg) IVL sur 15 minutes</p>\n        \n      \n      \n      </ion-card-content>\n    </ion-card> \n\n    <ion-item (click)="ToggleAAG()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Asthme aigu grave\n        <ion-icon *ngIf="!isShownAAG" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownAAG" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownAAG" class="drogueContainer">\n      <ion-card-content>\n        <p class="drogueInduction">- <b>Penser à l\'hydratation & au potassium !</b></p>\n        <p class="comment">NaCl 0,9% {{ApportBaseJour}} mL/j + KCl {{AdminKClAAGmg}} mg/j (pour 150 mg/kg/j)</p>\n        <p class="comment">Remplacer après 24h par du B26</p>\n        <br>\n        <p class="drogueInduction">- <b>Salbutamol aérosol (Ventoline®): {{AerosolSalbutamolAAG}} mg</b></p>\n        <p class="comment">Renouvelable après 15 minutes</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 2 mg/kg</p>\n        <p class="drogueInduction">- <b>Methylprednisolone (Solumédrol® 20 mg/2mL) : {{AdminSolumedrolAAG}} mg en bolus</b></p>\n        <p class="comment">Puis entretien par {{IVSESolumedrolAAG}} mg/6h IVSE (pour 0,5 mg/kg/6h)</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 1/2 à 1 flacon</p>\n        <p class="drogueInduction">- <b>Ipratropium (Atrovent® 0,5 mg/2mL) : {{AerosolAtroventAAG}} mg en aérosol</b></p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 0,2 mg/kg</p>\n        <p class="drogueInduction">- <b>Terbutaline (Bricanyl® 5mg/2mL) : {{AerosolBricanylAAG}} mg en aérosol </b></p> \n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 40 mg/kg sans dépasser 2g</p>\n        <p class="drogueInduction">- <b>MgSO4 (1,5g/10mL) : {{MgSO4AAG}} mg IVL sur 20 minutes</b></p>\n        <p class="comment">A diluer dans du NaCl 0,9%</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 0,5 µg/kg/min</p>\n        <p class="drogueInduction">- <b>Salbutamol (5 mg/5 mL) : {{SalbutamolIVAAG}} µg/min IVSE</b></p>\n        <p class="comment">Possibilité d\'augmenter de 0,1 µg/kg/min toutes les 10 minutes</p>\n        <p class="comment">Ne s\'envisage qu\'en secteur de réanimation</p>\n        <p class="comment">Ne pas administrer pur, dilution minimale de 1/2</p>\n        <br>\n        \n      </ion-card-content>\n    </ion-card> \n\n    <ion-item (click)="ToggleHTADiuretiques()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Hypertension & diurétiques\n        <ion-icon *ngIf="!isShownHTADiuretiques" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownHTADiuretiques" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownHTADiuretiques" class="drogueContainer">\n      <ion-card-content>\n        <p class="posologieDrogueInduction">Posologie proposée : 60 µg/kg/h</p>\n        <p class="drogueInduction">- <b>Nicardipine (Loxen® 1 mg/mL) : {{LoxenIVSE}} µg/h IVSE </b></p>\n        <p class="comment">Possibilité de doubler la dose si insuffisant</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 2 mg/kg/j en deux prises</p>\n        <p class="drogueInduction">- <b>Acebutolol (Sectral®) : {{SectralPO}} mg/j PO</b></p>\n        <p class="comment">A répartir sur 2 prises PO</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 0,3 mg/kg/prise</p>\n        <p class="drogueInduction">- <b>Labétolol (Trandate®) : {{TrandateBolus}} mg IVL</b></p>\n        <p class="comment">En IVSE : {{TrandateIVSE}} mg/j (pour 2 mg/kg/j), possibilité d\'augmenter jusqu\'à 24 mg/kg/j </p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 50 µg/kg/j en deux prises</p>\n        <p class="drogueInduction">- <b>Enalapril (Renitec®) : {{AdminRenitec}} µg/j PO</b></p>\n        <p class="comment">Sans dépasser 5 mg/j</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 1 mg/kg/prise</p>\n        <p class="drogueInduction">- <b>Furosémide (Lasilix® 10 mg/mL) : {{AdminLasilix}} mg PO ou IV</b></p>\n        <p class="comment">AMM : 4 mg/kg/j maximum, soit 1 prise/6h maximum</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 10 µg/kg/h</p>\n        <p class="drogueInduction">- <b>Bumétanide (Burinex® 500 µg/mL) : {{AdminBurinexIVSE}} mg/h IVSE</b></p>\n        <p class="comment">Possibilité de doubler la dose si insuffisant</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 1 à 5 mg/kg/j</p>\n        <p class="drogueInduction">- <b>Spironolactone (Aldactone®) : {{AdminAldactoneMin}} - {{AdminAldactoneMax}} mg/j PO</b></p>\n        <br>\n\n      </ion-card-content>\n    </ion-card> \n\n    <ion-item (click)="ToggleCriseConvulsive()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Crises convulsives\n        <ion-icon *ngIf="!isShownCriseConvulsive" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownCriseConvulsive" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownCriseConvulsive" class="drogueContainer">\n      <ion-card-content>\n        <p class="posologieDrogueInduction">Posologie proposée : 20 µg/kg/prise</p>\n        <p class="drogueInduction">- <b>Clonazépam (Rivotril® 1 mg/mL) : {{AdminRivotrilConvulsion}} µg IVD </b></p>\n        <p class="comment">Répéter une seconde fois si nécessaire</p>\n        <p class="comment">{{AdminRivotrilConvulsion}} mg/6h IVSE si nécessaire</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 15 mg/kg/j prise</p>\n        <p class="drogueInduction">- <b>Phénobarbital (Gardénal® 40 mg/2mL) : {{AdminGardenal}} mg IVL sur 20 minutes </b></p>\n        <p class="comment">Sans dépasser 500 mg/administration</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 20 mg/kg/prise</p>\n        <p class="drogueInduction">- <b>Phénytoïne (Dilantin® 250 µg/5mL) : {{AdminDilantin}} mg IVL sur 20 minutes </b></p>\n        <p class="comment">Sans dépasser 1500 mg/administration</p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 0,25 mg/kg/prise</p>\n        <p class="drogueInduction">- <b>Midazolam (Hypnovel® 1 mg/mL) : {{AdminMidazolamConvulsion}} mg IVD</b></p>\n        <br>\n        <p class="posologieDrogueInduction">Posologie proposée : 30 mg/kg/12h</p>\n        <p class="drogueInduction">- <b>Lévétiracetam (Keppra® 100 mg/mL) : {{AdminKeppra}} mg IVL sur 5 min ou PO</b></p>\n        <p class="comment">Sans dépasser 2g/j</p>\n        <br>\n\n      </ion-card-content>\n    </ion-card> \n\n    <ion-item (click)="ToggleAntidotes()">\n      <ion-label color="dark-turquoise"><ion-icon start name="clipboard"></ion-icon>\n        &nbsp;&nbsp; Intoxications & antidotes\n        <ion-icon *ngIf="!isShownAntidotes" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownAntidotes" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownAntidotes" class="drogueContainer">\n      <ion-card-content>\n        <p class="dilutionDrogueInduction">Intoxication aux opiacés</p>\n        <p class="posologieDrogueInduction">Posologie proposée : 10 µg/kg dans 10 mL</p>\n        <p class="drogueInduction"><b>Naloxone (Narcan® 0,4mg/mL) : {{AdminNarcan}} mg IVL </b></p>\n        <p class="comment">Injecter 1 mL/30 secondes jusqu\'à efficacité</p>\n        <br>\n        <p class="dilutionDrogueInduction">Intoxication aux benzodiazépines</p>\n        <p class="posologieDrogueInduction">Posologie proposée : 10 µg/kg sur 10 minutes</p>\n        <p class="drogueInduction"><b>Flumazénil (Anexate® 0,1mg/mL) : {{AdminAnexate}} mg IVL </b></p>\n        <p class="comment">Puis entretien 10 µg/kg/h IVSE</p>\n        <br>        \n        <p class="dilutionDrogueInduction">Intoxication au paracétamol</p>\n        <p class="drogueInduction"><b>N-acetyl-cystéine (5g/25mL) : protocole </b></p>\n        <p class="comment">1. 150 mg/kg/15min = {{AdminNAC1}} mg en 15 minutes</p>\n        <p class="comment">2. 50 mg/kg/4h = {{AdminNAC2}} mg en 4 heures</p>\n        <p class="comment">3. 100 mg/kg/20h = {{AdminNAC3}} mg en 20 heures</p>\n        <p class="comment">4. 150 mg/kg/j = {{AdminNAC4}} par jour</p>\n        <br>\n\n      </ion-card-content>\n    </ion-card> \n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\urgence\urgence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UrgencePage);
    return UrgencePage;
}());

//# sourceMappingURL=urgence.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_accueil__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptionsPage = /** @class */ (function () {
    /* Fin de déclaration des variables */
    function OptionsPage(app, navCtrl, navParams, storage) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        /* déclarer ici les variables */
        this.options = { dureejeune: "" };
        this.DureeJeune = 6;
        this.dureejeunelast = 6;
        this.Allergie = "Aucune";
    }
    OptionsPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    OptionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                            _this.options.estomacplein = true;
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                            _this.options.estomacplein = false;
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    OptionsPage.prototype.calculs = function () {
        /* calculs ici (aucun pr le moment)*/
    };
    ;
    OptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsPage');
    };
    ;
    OptionsPage.prototype.addTerme = function (Terme) {
        this.Terme = parseInt(Terme);
        console.log("le terme est de", this.Terme, " SA");
        this.APC = this.AgeNum * 4 + this.Terme;
        console.log("l'APC est de ", this.APC, " Semaines");
    };
    ;
    OptionsPage.prototype.addAllergie = function () {
        this.Allergie = this.NewAllergie;
        this.storage.set('Allergie', this.Allergie);
        console.log(this.Allergie, 'a bien été enregistrée');
    };
    ;
    OptionsPage.prototype.SaveEstomac = function () {
        if (this.EstomacPlein == true) {
            this.EstomacOuiNon = "plein";
        }
        else {
            this.EstomacOuiNon = "vide";
        }
        this.storage.set('EstomacPlein', this.EstomacPlein);
        console.log("lestomac enregistré est : ", this.EstomacOuiNon, " soit en booléen", this.EstomacPlein);
    };
    ;
    OptionsPage.prototype.FnDureeJeune = function () {
        console.log('dureejeune = ', this.DureeJeune);
        this.storage.set('DureeJeune', this.DureeJeune);
    };
    ;
    OptionsPage.prototype.goToHome = function () {
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__accueil_accueil__["a" /* AccueilPage */]);
    };
    ;
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\options\options.html"*/'<ion-content>\n\n          <!-- HEADER MENU  -->\n          <div class="header"> \n            <br>\n            <div (click)="retourHome()" class="backButton">\n            <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n            Retour\n            </div>\n  Options</div>\n              <br>\n        \n                    <!-- HEADER MON PATIENT  -->\n    \n              <ion-item color="turquoise-fonce"> \n                <ion-label>\n                  <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                  <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                  <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n              </ion-item>\n          \n              <br>\n         <!-- END HEADER -->\n\n  <ion-item>\n    <ion-label color="dark-turquoise">Risque anesthésique</ion-label></ion-item>\n\n\n  <ion-item>\n    <ion-label  class="drogueInduction">Allergies</ion-label>\n    <ion-input  class="drogueInduction" inputmode ="text" type="text" (ionChange)="addAllergie()" [(ngModel)]="NewAllergie" placeholder="Renseigner ici"></ion-input>\n    </ion-item>\n\n    \n<ion-item>\n  <ion-label class="drogueInduction">Durée du jeune pré-op : <b>{{DureeJeune}} heures</b></ion-label>\n  <ion-range class="drogueInduction" color="turquoise-fonce" max="12" step="1" ticks="true" snaps (ionChange)="FnDureeJeune()" [(ngModel)]="DureeJeune"> </ion-range>\n</ion-item>\n  \n\n  <ion-item>\n    <ion-label class="drogueInduction">Estomac plein</ion-label>\n    <ion-toggle class="drogueInduction"  color="turquoise-fonce" [(ngModel)]="EstomacPlein" (ionChange)="SaveEstomac()"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark-turquoise">Prématurité & APC\n    </ion-label>\n    </ion-item>\n\n  <ion-item>\n    <ion-label class="drogueInduction" position="stacked">Terme naissance (SA)</ion-label>\n    <ion-input class="drogueInduction" inputmode ="number" type="number" (ionChange)="addTerme(Terme)" [(ngModel)]="Terme" placeholder="Renseigner"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class="drogueInduction">\n    APC : {{APC}} semaines</ion-label></ion-item>\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\options\options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], OptionsPage);
    return OptionsPage;
}());

;
//# sourceMappingURL=options.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MonitoragePage = /** @class */ (function () {
    function MonitoragePage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.MonitorageView = 1;
    }
    MonitoragePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    MonitoragePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    MonitoragePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocoRegionalePage');
    };
    MonitoragePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    MonitoragePage.prototype.calculs = function () {
        /*placer les calculs ici*/
        if (this.PoidsNum <= 3) {
            this.SondeDoppler = "Non utilisable";
        }
        else if (this.PoidsNum > 3 && this.PoidsNum <= 60 && this.AgeNum < 180) {
            this.SondeDoppler = "Sonde pédiatrique (KDP72)";
        }
        else {
            this.SondeDoppler = "Sonde adulte";
        }
        ;
        if (this.PoidsNum <= 5) {
            this.CapteurNirs = "Néonatal (CNN/SNN)";
        }
        else if (this.PoidsNum <= 40) {
            this.CapteurNirs = "Pédiatrique (SPFB)";
        }
        else {
            this.CapteurNirs = "Adulte (SAFB)";
        }
        ;
        if (this.PoidsNum <= 10) {
            this.ElectrodesBIS = "Pédiatrique";
        }
        else {
            this.ElectrodesBIS = "Adulte";
        }
        ;
        if (this.PoidsNum <= 2) {
            this.TailleSondeUrinaire = "4 CH sans ballonnet";
        }
        else if (this.PoidsNum <= 4) {
            this.TailleSondeUrinaire = "6 CH avec ballonnet";
        }
        else if (this.PoidsNum <= 25) {
            this.TailleSondeUrinaire = "6 à 10 CH avec ballonnet";
        }
        else if (this.PoidsNum <= 50) {
            this.TailleSondeUrinaire = "12 à 14 CH avec ballonnet";
        }
        else if (this.PoidsNum > 50) {
            this.TailleSondeUrinaire = "14 à 18 CH avec ballonnet";
        }
        if (this.PoidsNum <= 4) {
            this.TailleSondeGastrique = "Calibre 5-6 (longueur 40 cm)";
        }
        else if (this.PoidsNum <= 10) {
            this.TailleSondeGastrique = "Calibre 8-10 (longueur 50 cm)";
        }
        else if (this.PoidsNum <= 25) {
            this.TailleSondeGastrique = "Calibre 12 (longueur 50 cm)";
        }
        else if (this.PoidsNum > 25) {
            this.TailleSondeGastrique = "Calibre 14-16";
        }
        if (this.AgeNum <= 1) {
            this.FCnormale = "90-180";
            this.FCdangerHaut = " > 190";
            this.FCdangerBas = " < 90";
            this.FRnormale = "40";
            this.FRdangerHaut = " > 60";
            this.FRdangerBas = " < 20";
            this.SpO2normale = 100;
            this.SpO2dangerBas = " < 90";
            this.PASnormale = "70-90";
            this.PASdangerHaut = " > 100";
            this.PASdangerBas = " < 60";
            this.PADnormale = "40-50";
            this.PADdangerHaut = " > 50";
            this.PADdangerBas = " < 30";
            this.PAMnormale = "45-55";
            this.PAMdangerHaut = " > 55";
            this.PAMdangerBas = " < 45";
            this.Diuresenormale = Math.round((this.PoidsNum * 2.5) * 10) / 10;
            this.DiuresedangerHaut = "> " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = "< " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        else if (this.AgeNum <= 24) {
            this.FCnormale = "80-155";
            this.FCdangerHaut = " > 170";
            this.FCdangerBas = " < 80";
            this.FRnormale = 30;
            this.FRdangerHaut = " > 60";
            this.FRdangerBas = " < 20";
            this.SpO2normale = 100;
            this.SpO2dangerBas = " < 90";
            this.PASnormale = "85-105";
            this.PASdangerHaut = " > 110";
            this.PASdangerBas = " < 75";
            this.PADnormale = "50-65";
            this.PADdangerHaut = " > 65";
            this.PADdangerBas = " < 50";
            this.PAMnormale = "65-80";
            this.PAMdangerHaut = " > 80";
            this.PAMdangerBas = " < 60";
            this.Diuresenormale = Math.round((this.PoidsNum * 2.5) * 10) / 10;
            this.DiuresedangerHaut = " > " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = " < " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        else if (this.AgeNum <= 48) {
            this.FCnormale = "70-140";
            this.FCdangerHaut = " > 160";
            this.FCdangerBas = " < 70";
            this.FRnormale = 20;
            this.FRdangerHaut = " > 40";
            this.FRdangerBas = " < 15";
            this.SpO2normale = 100;
            this.SpO2dangerBas = 92;
            this.PASnormale = " 90-110";
            this.PASdangerHaut = " > 130";
            this.PASdangerBas = " < 80";
            this.PADnormale = "50-65";
            this.PADdangerHaut = " > 65";
            this.PADdangerBas = " < 35";
            this.PAMnormale = "65 - 80";
            this.PAMdangerHaut = " > 80";
            this.PAMdangerBas = " < 65";
            this.Diuresenormale = Math.round((this.PoidsNum * 2) * 10) / 10;
            this.DiuresedangerHaut = " > " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = " < " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        else if (this.AgeNum <= 120) {
            this.FCnormale = "65-125";
            this.FCdangerHaut = " > 140";
            this.FCdangerBas = " < 60";
            this.FRnormale = 18;
            this.FRdangerHaut = " > 30";
            this.FRdangerBas = " < 15";
            this.SpO2normale = 100;
            this.SpO2dangerBas = 92;
            this.PASnormale = "95-115";
            this.PASdangerHaut = " > 140";
            this.PASdangerBas = " < 85";
            this.PADnormale = "55-70";
            this.PADdangerHaut = " > 75";
            this.PADdangerBas = " < 35";
            this.PAMnormale = "70-85";
            this.PAMdangerHaut = " > 90";
            this.PAMdangerBas = " < 70";
            this.Diuresenormale = Math.round((this.PoidsNum * 1.5) * 10) / 10;
            this.DiuresedangerHaut = " > " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = " < " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        else {
            this.FCnormale = "55-105";
            this.FCdangerHaut = " > 130";
            this.FCdangerBas = " < 50";
            this.FRnormale = 15;
            this.FRdangerHaut = " > 30";
            this.FRdangerBas = " < 10";
            this.SpO2normale = 100;
            this.SpO2dangerBas = 94;
            this.PASnormale = "110-130";
            this.PASdangerHaut = " < 90";
            this.PASdangerBas = " > 160";
            this.PADnormale = "65 - 80";
            this.PADdangerHaut = " > 85";
            this.PADdangerBas = " < 40";
            this.PAMnormale = "80-95";
            this.PAMdangerHaut = " > 100";
            this.PAMdangerBas = " < 80";
            this.Diuresenormale = Math.round((this.PoidsNum * 1) * 10) / 10;
            this.DiuresedangerHaut = " > " + (Math.round((this.PoidsNum * 4) * 10) / 10).toString();
            this.DiuresedangerBas = " < " + (Math.round((this.PoidsNum * 1) * 10) / 10).toString();
            ;
        }
        ;
        if (this.AgeNum <= 1) {
            this.NormeGR = "3,0 - 5,4";
            this.NormeHb = "10,0 - 18,0";
            this.NormeVGM = "85 - 123";
            this.NormePq = "150 - 400";
            this.NormeRetic = "20 - 140";
            this.NormeGB = "5 - 20";
            this.NormePNN = "1 - 9";
            this.NormeLympho = "2 - 16,5";
        }
        else if (this.AgeNum <= 6) {
            this.NormeGR = "3,1 - 4,5";
            this.NormeHb = "9,5 - 14,1";
            this.NormeVGM = "68 - 108";
            this.NormePq = "200 - 550";
            this.NormeRetic = "40 - 80";
            this.NormeGB = "6 - 18";
            this.NormePNN = "1 - 6";
            this.NormeLympho = "4 - 12";
        }
        else if (this.AgeNum <= 24) {
            this.NormeGR = "3,7 - 5,5";
            this.NormeHb = "10,5 - 13,5";
            this.NormeVGM = "68 - 86";
            this.NormePq = "200 - 550";
            this.NormeRetic = "40 - 80";
            this.NormeGB = "6 - 17,5";
            this.NormePNN = "1 - 8,5";
            this.NormeLympho = "3 - 13,5";
        }
        else if (this.AgeNum <= 144) {
            this.NormeGR = "3,9 - 5,2";
            this.NormeHb = "11,1 - 14,7";
            this.NormeVGM = "72 - 87";
            this.NormePq = "166 - 463";
            this.NormeRetic = "40 - 80";
            this.NormeGB = "4 - 14,5";
            this.NormePNN = "1,5 - 8";
            this.NormeLympho = "1 - 7";
        }
        else {
            this.NormeGR = "4 - 5,6";
            this.NormeHb = "11,3 - 16,6";
            this.NormeVGM = "75 - 102";
            this.NormePq = "160 - 439";
            this.NormeRetic = "40 - 80";
            this.NormeGB = "3,75 - 13";
            this.NormePNN = "1,5 - 6,3";
            this.NormeLympho = "1,3 - 4,5";
        }
        ;
    };
    ;
    MonitoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-monitorage',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\monitorage\monitorage.html"*/'\n\n\n<ion-header>\n  <br>\n\n        <!-- HEADER MENU  -->\n        <div class="header"> \n\n          <div (click)="retourHome()" class="backButton">\n          <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n          Retour\n          </div>\nMonitorage & dispositifs  </div>\n            <br>\n      \n                  <!-- HEADER MON PATIENT  -->\n  \n            <ion-item color="turquoise-fonce"> \n              <ion-label>\n                <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n                <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n                <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n            </ion-item>\n\n\n            <ion-segment color="turquoise-fonce" [(ngModel)]="MonitorageView">\n              <ion-segment-button  value="1">Vitals</ion-segment-button>\n              <ion-segment-button  value="2">Bilans</ion-segment-button>\n              <ion-segment-button  value="3">Dispositifs</ion-segment-button>\n   \n            </ion-segment>\n          </ion-header>\n       <!-- END HEADER -->\n\n\n       <ion-content>\n\n  <ion-grid fixed="true" *ngIf="MonitorageView ==1">\n    <ion-row class="TableApportsHeader"><ion-col> <span *ngIf="this.AgeNum <= 24">\n      Pour un enfant de {{AgeNum}} mois\n    </span>\n    <span  *ngIf="this.AgeNum > 24 && this.AgeNum > 0">\n      Pour un enfant de {{ageLecture}} ans</span></ion-col></ion-row>\n    <ion-row >\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        Trop bas\n      </ion-col>\n      <ion-col>\n        Normale\n      </ion-col>\n      <ion-col>\n        Trop haut\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          FC <br> (/min)\n      </ion-col>\n      <ion-col>\n        <ion-chip color="primary">&nbsp;&nbsp;&nbsp;{{FCdangerBas}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="pastel-green">&nbsp;&nbsp;&nbsp;{{FCnormale}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="danger">&nbsp;&nbsp;&nbsp;{{FCdangerHaut}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules" >\n          FR <br>(/min)\n      </ion-col>\n      <ion-col>\n        <ion-chip color="primary">&nbsp;&nbsp;&nbsp;{{FRdangerBas}}<ion-label></ion-label></ion-chip>\n\n      </ion-col>\n      <ion-col> \n        <ion-chip color="pastel-green">&nbsp;&nbsp;&nbsp;{{FRnormale}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="danger">&nbsp;&nbsp;&nbsp;{{FRdangerHaut}}<ion-label></ion-label></ion-chip>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          SpO2 <br>(%)\n      </ion-col>\n      <ion-col>\n        <ion-chip color="primary">&nbsp;&nbsp;&nbsp;{{SpO2dangerBas}}<ion-label></ion-label></ion-chip>\n   \n      </ion-col>\n      <ion-col>\n        <ion-chip color="pastel-green">&nbsp;&nbsp;&nbsp;{{SpO2normale}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        -\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAS <br>(mmHg)\n      </ion-col>\n      <ion-col>\n        <ion-chip color="primary">&nbsp;&nbsp;&nbsp;{{PASdangerBas}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="pastel-green">&nbsp;&nbsp;&nbsp;{{PASnormale}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col >\n        <ion-chip color="danger">&nbsp;&nbsp;&nbsp;{{PASdangerHaut}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAM <br>(mmHg)\n      </ion-col>\n      <ion-col>\n        <ion-chip color="primary">&nbsp;&nbsp;&nbsp;{{PAMdangerBas}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="pastel-green">&nbsp;&nbsp;&nbsp;{{PAMnormale}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="danger">&nbsp;&nbsp;&nbsp;{{PAMdangerHaut}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAD <br>(mmHg)\n      </ion-col>\n      <ion-col>\n        <ion-chip color="primary">&nbsp;&nbsp;&nbsp;{{PADdangerBas}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="pastel-green">&nbsp;&nbsp;&nbsp;{{PADnormale}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="danger">&nbsp;&nbsp;&nbsp;{{PADdangerHaut}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col class="intitules">\n          Diurèse <br>(mL/h sur 3h)\n      </ion-col>\n      <ion-col>\n        <ion-chip color="primary">&nbsp;&nbsp;&nbsp;{{DiuresedangerBas}}<ion-label></ion-label></ion-chip>\n        \n      </ion-col>\n      <ion-col>\n        <ion-chip color="pastel-green">&nbsp;&nbsp;&nbsp;{{Diuresenormale}}<ion-label></ion-label></ion-chip>\n      </ion-col>\n      <ion-col>\n        <ion-chip color="danger">&nbsp;&nbsp;&nbsp;{{DiuresedangerHaut}}<ion-label></ion-label></ion-chip>\n      </ion-col>      \n\n    </ion-row>\n    </ion-grid>\n\n\n\n    <ion-card class="drogueContainer" *ngIf="MonitorageView ==2">\n    <p class="reference">Reference : ANAES - lecture critique de l\'hémogramme - mise à jour 2007.</p>\n\n    <ion-grid fixed="true">\n\n      <ion-row class="TableApportsHeader">\n        <ion-col>\n          Paramètre\n        </ion-col>\n        <ion-col *ngIf="this.AgeNum <= 24">\n          Normes à {{AgeNum}} mois\n        </ion-col>\n        <ion-col  *ngIf="this.AgeNum > 24 && this.AgeNum > 0">\n          Normes à {{ageLecture}} ans\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansEven">\n        <ion-col>\n          Hématies\n        </ion-col>\n        <ion-col>\n          {{NormeGR}}.10<sup>12</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansOdd">\n        <ion-col>\n         Hémoglobinémie\n        </ion-col>\n        <ion-col>\n          {{NormeHb}} g/dL\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansEven">\n        <ion-col>\n          VGM\n        </ion-col>\n        <ion-col>\n          {{NormeVGM}} µm<sup>3</sup>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansOdd">\n        <ion-col>\n         Réticulocytes\n        </ion-col>\n        <ion-col>\n          {{NormeRetic}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansEven">\n        <ion-col>\n          GB \n        </ion-col>\n        <ion-col>\n          {{NormeGB}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansOdd">\n        <ion-col>\n         Neutrophiles\n        </ion-col>\n        <ion-col>\n          {{NormePNN}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansEven">\n        <ion-col>\n          Lymphocytes\n        </ion-col>\n        <ion-col>\n          {{NormeLympho}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="TableBilansOdd">\n        <ion-col>\n         Plaquettes\n        </ion-col>\n        <ion-col>\n          {{NormePq}}.10<sup>9</sup>/L\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n    <ion-list *ngIf="MonitorageView ==3">\n      <ion-item>\n        <ion-label class="drogueInduction">Doppler Oesophagien\n            <p class="dilutionDrogueInduction">Modele de sonde : {{SondeDoppler}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">NIRS - Stable à +/- 20%\n            <p class="dilutionDrogueInduction">Capteur : {{CapteurNirs}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">BIS - Objectif 40 à 60\n            <p class="dilutionDrogueInduction">Electrodes : {{ElectrodesBIS}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">Sonde urinaire\n            <p class="dilutionDrogueInduction">Taille de sonde : {{TailleSondeUrinaire}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">Sonde gastrique\n            <p class="dilutionDrogueInduction">Taille de sonde : {{TailleSondeGastrique}} </p>\n        </ion-label>\n      </ion-item>\n\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\monitorage\monitorage.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], MonitoragePage);
    return MonitoragePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=monitorage.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourbesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CourbesPage = /** @class */ (function () {
    function CourbesPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.sexeMF = "Fille";
    }
    /* Poids : obtention du set de données et chargement du graph */
    CourbesPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    CourbesPage.prototype.setDataPoids = function () {
        if (this.AgeNum <= 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataPoidsMediane = [3.4, 4.4, 5.4, 6.2, 6.7, 7.4, 7.9, 8.3, 8.7, 9, 9.4, 9.6, 9.9, 10.2];
            this.dataPoids3 = [2.5, 3.4, 4.2, 5, 5.5, 6, 6.4, 6.8, 7.1, 7.4, 7.6, 7.9, 8, 8.2];
            this.dataPoids97 = [4.7, 5.4, 6.5, 7.5, 8.3, 9, 9.6, 10.2, 10.6, 10.8, 11.4, 11.7, 12, 12.3];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum <= 12 && this.sexeMF == "Fille") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataPoidsMediane = [3.4, 4.2, 5, 5.7, 6.4, 6.9, 7.4, 7.7, 8.1, 8.4, 8.8, 9, 9.3, 9.6];
            this.dataPoids3 = [2.5, 3.4, 4, 4.5, 5, 5.5, 5.9, 6.5, 6.7, 6.8, 7.1, 7.4, 7.6, 7.8];
            this.dataPoids97 = [4.5, 5, 6, 6.9, 7.7, 8.4, 9, 9.5, 10, 10.4, 10.7, 11, 11.4, 11.8];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataPoidsMediane = [10, 12.2, 14.5, 16.3, 18.3, 21, 23.5, 26, 29.5, 32.5, 36, 40, 45.5, 51, 56, 60, 63.5, 66];
            this.dataPoids3 = [8, 10, 12, 13.3, 15, 16.2, 18, 20, 22, 24, 26, 28.2, 31, 35, 39.5, 44, 46.5, 48.5];
            this.dataPoids97 = [12, 15, 18, 21.5, 24.2, 28, 32.5, 37.5, 43.5, 49, 55, 62, 70, 78, 82.5, 86, 90.5, 96.5];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Fille") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataPoidsMediane = [9.5, 12, 14, 16, 18, 20.5, 23, 26, 29, 32.5, 36, 41, 46, 50, 52.5, 54.3, 55.8, 56.2];
            this.dataPoids3 = [7.5, 9.5, 11.5, 13, 14.5, 16, 18, 19.5, 21.5, 23.5, 25.5, 28.5, 32, 36, 39, 41, 42, 43];
            this.dataPoids97 = [11.5, 15, 18, 21, 24.5, 28, 32.5, 38, 42.5, 48.5, 55, 62, 68, 72.5, 74.5, 77, 79, 81];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
    };
    ;
    CourbesPage.prototype.graphPoidsLoad = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.PoidsCanvas.nativeElement, {
            type: "line",
            data: {
                labels: this.ageLabels,
                datasets: [
                    {
                        label: "97%",
                        data: this.dataPoids97,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "50%",
                        data: this.dataPoidsMediane,
                        borderColor: this.mainColor,
                        backgroundColor: "rgba(0,0,0,0)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "3%",
                        data: this.dataPoids3,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "Mon Patient",
                        data: [
                            {
                                x: this.AgeCourbe,
                                y: this.PoidsNum,
                            }
                        ],
                        borderColor: this.bubbleColor,
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 3,
                        pointRadius: 2,
                        type: "bubble",
                    },
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'Age (mois)'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'kg'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
        console.log(this.AgeCourbe);
    };
    ;
    /* Taille : obtention du set de données et chargement du graph */
    CourbesPage.prototype.setDataTaille = function () {
        if (this.AgeNum <= 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataTailleMediane = [50, 54, 58, 61, 63.5, 66, 67.5, 69, 71, 72, 73.5, 74.5, 75.5];
            this.dataTaille3 = [47, 50, 54, 57, 59, 62, 63.5, 65, 66, 67.5, 68.5, 69.5, 71];
            this.dataTaille97 = [54, 58, 62, 65, 68, 70, 72, 74, 75, 77, 78, 79.5, 81];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum <= 12 && this.sexeMF == "Fille") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataTailleMediane = [50, 53, 56.5, 59.5, 62, 64.5, 65.5, 67, 69, 70.5, 72, 73, 74];
            this.dataTaille3 = [47, 49.5, 52.5, 55, 58, 60, 62, 63, 64.5, 66, 67, 68, 69];
            this.dataTaille97 = [54, 57, 60, 63.5, 66, 68, 70, 72, 73, 75, 76.5, 78, 79];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataTailleMediane = [76, 88, 96.5, 104, 111, 117, 123.5, 129, 134.5, 140, 145, 150.5, 157, 164, 169.5, 173, 175, 176];
            this.dataTaille3 = [71, 82, 90, 96, 102, 108, 113, 118, 123, 127.5, 132, 135.5, 140, 146, 152, 157, 160, 162];
            this.dataTaille97 = [81, 94, 104, 112, 120, 127, 134, 140, 146.5, 152.5, 158.5, 165.5, 174, 182, 187, 188.5, 189.5, 190.5];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Fille") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataTailleMediane = [74.5, 87, 95.5, 103, 110, 117.5, 122.5, 128, 134, 139.5, 146, 152, 157.5, 161, 162.5, 163.5, 164, 164.5];
            this.dataTaille3 = [69.5, 80.5, 88, 95, 101, 106.5, 112, 117, 122, 126, 131, 137, 143.5, 148, 150, 151, 151.5, 151.8];
            this.dataTaille97 = [79, 93, 103, 111, 119, 126, 133, 140, 146, 153, 160, 167, 172, 174, 175.5, 176, 177, 177.5];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
    };
    ;
    CourbesPage.prototype.graphTailleLoad = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.TailleCanvas.nativeElement, {
            type: "line",
            data: {
                labels: this.ageLabels,
                datasets: [
                    {
                        label: "97%",
                        data: this.dataTaille97,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "50%",
                        data: this.dataTailleMediane,
                        borderColor: this.mainColor,
                        backgroundColor: "rgba(0,0,0,0)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "3%",
                        data: this.dataTaille3,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "Mon Patient",
                        data: [
                            {
                                x: this.AgeCourbe,
                                y: this.Taille,
                            }
                        ],
                        borderColor: this.bubbleColor,
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 3,
                        pointRadius: 2,
                        type: "bubble",
                    },
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'Age (mois)'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'kg'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
        console.log(this.AgeCourbe);
    };
    ;
    /* IMC : obtention du set de données et chargement du graph */
    CourbesPage.prototype.setDataBMI = function () {
        if (this.AgeNum <= 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataIMCNormBasse = [12.2, 13, 13.8, 14.5, 14.8, 15, 15.2, 15.3, 15.4, 15.4, 15.3, 15.25, 15.2];
            this.dataIMCNormHaute = [16, 17, 18, 19, 19.5, 19.7, 19.8, 19.9, 20, 19.9, 19.75, 19.6, 19.5];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum <= 12 && this.sexeMF == "Fille") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.dataIMCNormBasse = [12.5, 13, 13.5, 14.2, 14.5, 14.75, 14.9, 15, 15.1, 15.15, 15.1, 15, 14.9];
            this.dataIMCNormHaute = [16, 16.5, 17, 18.5, 18.8, 19.1, 19.3, 19.4, 19.5, 19.45, 19.4, 19.3, 19.2];
            this.mainColor = "rgba(255,20,147,1)";
            this.bubbleColor = "rgba(255,20,147,1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataIMCNormBasse = [15.25, 14.25, 13.95, 13.7, 13.4, 13.2, 13, 13.1, 13.3, 13.5, 13.7, 14.1, 14.5, 15, 15.5, 16.1, 16.6, 17];
            this.dataIMCNormHaute = [19.7, 18.4, 17.9, 17.5, 17.4, 17.5, 17.9, 18.4, 19, 19.8, 20.5, 21.2, 21.9, 22.6, 23.3, 23.9, 24.5, 25];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
        else if (this.AgeNum > 12 && this.sexeMF == "Fille") {
            this.ageLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.dataIMCNormBasse = [15, 14, 13.8, 13.5, 13.2, 13, 12.9, 13, 13.2, 13.5, 13.8, 14.3, 14.9, 15.5, 16, 16.5, 16.7, 17];
            this.dataIMCNormHaute = [19.2, 18.1, 17.7, 17.3, 17.2, 17.3, 17.7, 18.3, 19, 19.8, 20.7, 21.7, 22.5, 23.2, 23.9, 24.4, 24.7, 25];
            this.mainColor = "rgb(255,20,147,1)";
            this.bubbleColor = "rgb(255,20,147,1)";
            this.AgeCourbe = Math.round(this.AgeNum / 12);
            this.AgeRange = "1 à 18 ans";
        }
    };
    ;
    CourbesPage.prototype.graphBMILoad = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.BMICanvas.nativeElement, {
            type: "line",
            data: {
                labels: this.ageLabels,
                datasets: [
                    {
                        label: "Norme haute",
                        data: this.dataIMCNormHaute,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "Norme basse",
                        data: this.dataIMCNormBasse,
                        borderColor: "rgba(180, 180, 180, 1)",
                        backgroundColor: "rgba(180, 180, 180, 0.3)",
                        borderWidth: 1,
                        pointRadius: 1,
                    },
                    {
                        label: "Mon Patient",
                        data: [
                            {
                                x: this.AgeCourbe,
                                y: this.BMI,
                            }
                        ],
                        borderColor: this.bubbleColor,
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 3,
                        pointRadius: 2,
                        type: "bubble",
                    },
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'Age (mois)'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                fontSize: 10,
                                display: false,
                                labelString: 'kg'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
        console.log(this.AgeCourbe);
    };
    ;
    CourbesPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    CourbesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page de Biométrie');
    };
    CourbesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    CourbesPage.prototype.calculs = function () {
        /*placer les calculs ici*/
        this.SurfaceCorporelle = Math.round(((4 * this.PoidsNum + 7) / (this.PoidsNum + 90)) * 10) / 10;
        console.log("la surface corporelle est de ", this.SurfaceCorporelle, " m2");
        if (this.Taille) {
            this.BMIinfo = "Poids/Taille²";
        }
        else {
            this.BMIinfo = "Renseigner une taille dans les options";
        }
        ;
        if (this.Taille > 0) {
            this.BMI = Math.round(this.PoidsNum / ((this.Taille / 100) * (this.Taille / 100)) * 10) / 10;
        }
        else {
            this.BMI = "NA";
        }
        ;
        this.setDataPoids();
        this.graphPoidsLoad();
        this.setDataTaille();
        this.graphTailleLoad();
        this.setDataBMI();
        this.graphBMILoad();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("PoidsCanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CourbesPage.prototype, "PoidsCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("TailleCanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CourbesPage.prototype, "TailleCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("BMICanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CourbesPage.prototype, "BMICanvas", void 0);
    CourbesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courbes',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\courbes\courbes.html"*/'\n<ion-header>\n  <div class="header"> \n<br>\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div> \n    Biométrie & croissance\n   </div>\n      <br>\n\n      <ion-item color="turquoise-fonce"> \n        <ion-label>\n          <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n          <p class="MonPatient">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n      </ion-item>\n  \n    </ion-header>\n\n      <ion-content>\n\n      <ion-item>\n        <ion-label>IMC : {{BMI}} kg/m²\n        <p class="comment">{{BMIinfo}}</p>\n      </ion-label>\n    </ion-item>\n    \n      <ion-item>\n        <ion-label>Surface corporelle : {{SurfaceCorporelle}} m²\n          <p class="comment">(Poidsx4 + 7)/(Poids + 90) </p>\n        </ion-label>\n      </ion-item>\n\n      <br>\n      <div class="courbesTitle">Courbes de croissance <br> {{sexeMF}} de {{AgeRange}}</div>\n\n\n      <ion-card class="drogueContainer">\n        <ion-card-header>\n          Poids (kg)\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #PoidsCanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class="drogueContainer">\n        <ion-card-header>\n          Taille (cm)\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #TailleCanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class="drogueContainer">\n        <ion-card-header>\n          IMC (kg/m²)\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #BMICanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\courbes\courbes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CourbesPage);
    return CourbesPage;
}());

//# sourceMappingURL=courbes.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntibioprophylaxiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_medicaments__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the AntibioprophylaxiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AntibioprophylaxiePage = /** @class */ (function () {
    function AntibioprophylaxiePage(navCtrl, navParams, alertController, storage, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.storage = storage;
        this.dataService = dataService;
        this.searchTerm = "";
        this.searchTermSpecialite = "";
        this.ProphylaxieView = 1;
        this.searchBarType = false;
    }
    AntibioprophylaxiePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    AntibioprophylaxiePage.prototype.toggleSearchBars = function () {
        this.searchBarType = !this.searchBarType;
    };
    AntibioprophylaxiePage.prototype.ionViewDidLoad = function () {
        this.setFilteredChirurgie();
        this.dataService.orderChirurgie();
        console.log('chirurgies rangées par ordre alphabétique');
    };
    AntibioprophylaxiePage.prototype.ngOnInit = function () {
        this.setFilteredChirurgie();
        this.dataService.orderChirurgie();
    };
    ;
    AntibioprophylaxiePage.prototype.setFilteredChirurgie = function () {
        this.chirurgie = this.dataService.filterChirurgie(this.searchTerm);
    };
    ;
    AntibioprophylaxiePage.prototype.setFilteredSpecialite = function () {
        this.chirurgie = this.dataService.filterSpecialite(this.searchTermSpecialite);
    };
    AntibioprophylaxiePage.prototype.displayChirurgie = function (index) {
        this.chirurgie[index].isShown = !this.chirurgie[index].isShown;
    };
    AntibioprophylaxiePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient.',
                            buttons: [
                                {
                                    text: 'Plus tard.',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'OK.',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AntibioprophylaxiePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.PoidsRound = Math.round(_this.PoidsNum);
                console.log(_this.PoidsRound);
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!_this.sexeMF) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.presentAlert();
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    AntibioprophylaxiePage.prototype.calculs = function () {
        this.AdminAugmentin = Math.round((this.PoidsNum * 50) * 10) / 10;
        if (this.AdminAugmentin >= 2000) {
            this.AdminAugmentin = 2000;
        }
        ;
        this.ReInjAugmentin = Math.round((this.PoidsNum * 25) * 10) / 10;
        if (this.ReInjAugmentin >= 1000) {
            this.ReInjAugmentin = 1000;
        }
        ;
        this.MaxAcideClavulanique = Math.round((this.PoidsNum * 20) * 10) / 10;
        this.AdminCefamandole = Math.round((this.PoidsNum * 40) * 10) / 10;
        if (this.AdminCefamandole >= 1500) {
            this.AdminCefamandole = 1500;
        }
        ;
        this.ReInjCefamandole = Math.round((this.PoidsNum * 20) * 10) / 10;
        if (this.ReInjCefamandole >= 750) {
            this.ReInjCefamandole = 750;
        }
        ;
        this.AdminCefazoline = Math.round((this.PoidsNum * 50) * 10) / 10;
        if (this.AdminCefazoline >= 2000) {
            this.AdminCefazoline = 2000;
        }
        ;
        this.ReInjCefazoline = Math.round((this.PoidsNum * 25) * 10) / 10;
        if (this.ReInjCefazoline >= 1000) {
            this.ReInjCefazoline = 1000;
        }
        ;
        this.AdminClindamycine = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.AdminClindamycine >= 600) {
            this.AdminClindamycine = 600;
        }
        ;
        this.ReInjClindamycine = Math.round((this.PoidsNum * 7.5) * 10) / 10;
        if (this.ReInjClindamycine >= 600) {
            this.ReInjClindamycine = 600;
        }
        ;
        this.AdminGentamicine = Math.round((this.PoidsNum * 3) * 10) / 10;
        if (this.AdminGentamicine >= 160) {
            this.AdminGentamicine = 160;
        }
        ;
        this.AdminMetronidazole = Math.round((this.PoidsNum * 20) * 10) / 10;
        if (this.AdminMetronidazole >= 1000) {
            this.AdminMetronidazole = 1000;
        }
        ;
        this.ReInjMetronidazole = Math.round((this.PoidsNum * 10) * 10) / 10;
        if (this.ReInjMetronidazole >= 500) {
            this.ReInjMetronidazole = 500;
        }
        ;
        this.AdminVancomycine = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.AdminVancomycine >= 2000) {
            this.AdminVancomycine = 2000;
        }
        ;
        this.ReInjVancomycine = Math.round((this.PoidsNum * 15) * 10) / 10;
        if (this.ReInjVancomycine >= 2000) {
            this.ReInjVancomycine = 2000;
        }
        ;
    };
    ;
    AntibioprophylaxiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-antibioprophylaxie',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\antibioprophylaxie\antibioprophylaxie.html"*/'\n<ion-header><br>\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n\nTraitements anti-infectieux</div>\n      <br>\n      <ion-item color="turquoise-fonce"> \n        <ion-label>\n          <p class="MonPatient">{{sexeMF}} - {{ageLecture}} ans ( = {{AgeNum}} mois) - {{PoidsNum}} kg - {{Taille}} cm</p> \n          <p class="MonPatient">Allergie : {{Allergie}}</p></ion-label> \n      </ion-item>\n      <ion-toolbar>\n\n  <ion-searchbar *ngIf = "!this.searchBarType"\n  class="interventionSearchbar"\n  [(ngModel)]="searchTerm"\n  (ionChange)="setFilteredChirurgie()"\n  placeholder="Intervention..."\n  inputmode="text"\n></ion-searchbar><br *ngIf = "!this.searchBarType"><ion-icon *ngIf = "!this.searchBarType" zoom:1.5 name="repeat" (click)="toggleSearchBars()"></ion-icon>\n\n<ion-searchbar *ngIf = "this.searchBarType"\nclass="specialiteSearchbar"\n[(ngModel)]="searchTermSpecialite"\n(ionChange)="setFilteredSpecialite()"\nplaceholder="Specialite..."\ninputmode="text"\n></ion-searchbar><br *ngIf = "this.searchBarType"><ion-icon *ngIf = "this.searchBarType" zoom:1.5 name="repeat" (click)="toggleSearchBars()"></ion-icon>\n\n\n\n</ion-toolbar>\n    </ion-header>\n\n\n\n    <ion-content>\n\n\n    <ion-card class="chirurgieContainer" (click)="displayChirurgie(index)" *ngFor="let chir of chirurgie, let index = index" [attr.data-index]="index">\n      <ion-card-header>\n        <ion-card-title class="intituleChirurgie">\n          {{chir.intitule}}     \n          <br><br>\n          <ion-chip *ngIf="chir.recommandation == \'Non recommandée\'" class="indicationantibioprophylaxieChirurgie">\n            <ion-label>Antibioprophylaxie : {{chir.recommandation}}\n            </ion-label>\n          </ion-chip>\n          <ion-chip *ngIf="chir.recommandation == \'Recommandée\'" class="voieAntibioChip">\n            <ion-label>Antibioprophylaxie : {{chir.recommandation}}</ion-label>\n          </ion-chip>\n        \n        </ion-card-title>\n        <span *ngIf="chir.specialite" class="specialiteChirurgie">{{chir.specialite}}</span> - <span *ngIf="chir.classeConta" class="classeContaminationChirurgie">Classe Altemeier : {{chir.classeConta}}</span>\n      </ion-card-header>\n\n\n      <ion-card-content class="chirurgiesubContainer" *ngIf="chir.isShown && chir.ATB1">\n        <hr>\n          <div *ngIf = "chir.ATB1"> \n            <div class="intentionATB" *ngIf="chir.ATBAllergie1">Première intention</div>\n          <ion-chip *ngIf = "chir.ATB1" class="ATBchip">\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATB1 <= chir.doseMaxATB1 || !chir.posologieNumATB1" >{{chir.ATB1}} : <span *ngIf="chir.posologieNumATB1"> {{PoidsRound * chir.posologieNumATB1}} mg</span> {{chir.administrationATB1}}</ion-label>\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATB1 > chir.doseMaxATB1" >{{chir.ATB1}} : {{chir.doseMaxATB1}} mg {{chir.administrationATB1}}</ion-label>\n          </ion-chip>\n         \n          <ul class="infoAntibioChirurgie">\n            <li *ngIf="chir.posologieATB1">Posologie/poids : {{chir.posologieATB1}} (max. : {{chir.doseMaxATB1}} mg)</li>\n            <li *ngIf="chir.dilutionATB1">Dilution : {{chir.dilutionATB1}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATB1 <= chir.doseMaxReinjectionATB1">Réinjection : {{chir.posologiereinjectionNumATB1 * PoidsRound}} mg/{{chir.delaiReinjectionATB1}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATB1 > chir.doseMaxReinjectionATB1">Réinjection : {{chir.doseMaxReinjectionATB1}} mg/{{chir.delaiReinjectionATB1}} </li>\n          </ul>\n\n          <ion-chip *ngIf = "chir.ATB2" class="ATBchip">\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATB2 <= chir.doseMaxATB2" >+ {{chir.ATB2}} : {{PoidsRound * chir.posologieNumATB2}} mg {{chir.administrationATB2}}</ion-label>\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATB2 > chir.doseMaxATB2" >+ {{chir.ATB2}} : {{chir.doseMaxATB2}} mg {{chir.administrationATB2}}</ion-label>\n          </ion-chip>\n          <ul *ngIf = "chir.ATB2" class="infoAntibioChirurgie">\n            <li *ngIf="chir.posologieATB2">Posologie/poids : {{chir.posologieATB2}} (max. : {{chir.doseMaxATB2}} mg)</li>\n            <li *ngIf="chir.dilutionATB2">Dilution : {{chir.dilutionATB2}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATB2 <= chir.doseMaxReinjectionATB2">Réinjection : {{chir.posologiereinjectionNumATB2 * PoidsRound}} mg/{{chir.delaiReinjectionATB2}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATB2 > chir.doseMaxReinjectionATB2">Réinjection : {{chir.doseMaxReinjectionATB2}} mg/{{chir.delaiReinjectionATB2}} </li>\n          </ul>\n\n          <ion-chip *ngIf = "chir.ATB3" class="ATBchip">\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATB3 <= chir.doseMaxATB3" >+ {{chir.ATB3}} : {{PoidsRound * chir.posologieNumATB3}} mg {{chir.administrationATB3}}</ion-label>\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATB3 > chir.doseMaxATB3" >+ {{chir.ATB3}} : {{chir.doseMaxATB2}} mg {{chir.administrationATB3}}</ion-label>\n          </ion-chip>\n          <ul *ngIf = "chir.ATB3" class="infoAntibioChirurgie"> \n            <li *ngIf="chir.posologieATB3">Posologie/poids : {{chir.posologieATB3}} (max. : {{chir.doseMaxATB3}} mg)</li>\n            <li *ngIf="chir.dilutionATB3">Dilution : {{chir.dilutionATB3}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATB3 <= chir.doseMaxReinjectionATB3">Réinjection : {{chir.posologiereinjectionNumATB3 * PoidsRound}} mg/{{chir.delaiReinjectionATB3}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATB3 > chir.doseMaxReinjectionATB3">Réinjection : {{chir.doseMaxReinjectionATB3}} mg/{{chir.delaiReinjectionATB3}} </li>\n          </ul>\n        </div>\n\n        <hr>\n        <div *ngIf= "chir.ATBAllergie1">\n          <div class="intentionATB">Seconde intention (allergie)</div>\n          <ion-chip class="ATBchip">\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATBAllergie1 <= chir.doseMaxATBAllergie1">{{chir.ATBAllergie1}} : {{PoidsRound * chir.posologieNumATBAllergie1}} mg {{chir.administrationATBAllergie1}}</ion-label>\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATBAllergie1 > chir.doseMaxATBAllergie1">{{chir.ATBAllergie1}} : {{chir.doseMaxATBAllergie1}} mg {{chir.administrationATBAllergie1}}</ion-label>\n          </ion-chip>\n\n          <ul class="infoAntibioChirurgie">\n            <li *ngIf="chir.posologieATBAllergie1">Posologie/poids : {{chir.posologieATBAllergie1}} (max. : {{chir.doseMaxATBAllergie1}} mg)</li>\n            <li *ngIf="chir.dilutionATBAllergie1">Dilution : {{chir.dilutionATBAllergie1}}</li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATBAllergie1 <= chir.doseMaxReinjectionATBAllergie1">Réinjection : {{chir.posologiereinjectionNumATBAllergie1 * PoidsRound}} mg/{{chir.delaiReinjectionATBAllergie1}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATBAllergie1 > chir.doseMaxReinjectionATBAllergie1">Réinjection : {{chir.doseMaxReinjectionATBAllergie1}} mg/{{chir.delaiReinjectionATBAllergie1}} </li>\n          </ul> \n\n     \n          <ion-chip *ngIf = "chir.ATBAllergie2" class="ATBchip">\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATBAllergie2 <= chir.doseMaxATBAllergie2" >+ {{chir.ATBAllergie2}} : {{PoidsRound * chir.posologieNumATBAllergie2}} mg {{chir.administrationATBAllergie2}}</ion-label>\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATBAllergie2 > chir.doseMaxATBAllergie2" >+ {{chir.ATBAllergie2}} : {{chir.doseMaxATBAllergie2}} mg {{chir.administrationATBAllergie2}}</ion-label>\n          </ion-chip>\n\n          <ul *ngIf="chir.ATBAllergie2" class="infoAntibioChirurgie"><b>{{chir.ATBAllergie2}}</b>\n            <li *ngIf="chir.posologieATBAllergie2">Posologie/poids : {{chir.posologieATBAllergie2}} (max. : {{chir.doseMaxATBAllergie2}} mg)</li>\n            <li *ngIf="chir.dilutionATBAllergie2">Dilution : {{chir.dilutionATBAllergie2}}</li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATBAllergie2 <= chir.doseMaxReinjectionATBAllergie2">Réinjection : {{chir.posologiereinjectionNumATBAllergie2 * PoidsRound}} mg/{{chir.delaiReinjectionATBAllergie2}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATBAllergie2 > chir.doseMaxReinjectionATBAllergie2">Réinjection : {{chir.doseMaxReinjectionATBAllergie2}} mg/{{chir.delaiReinjectionATBAllergie2}} </li>\n          </ul> \n\n          <ion-chip *ngIf = "chir.ATBAllergie3" class="ATBchip">\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATBAllergie3 <= chir.doseMaxATBAllergie3" >+ {{chir.ATBAllergie3}} : {{PoidsRound * chir.posologieNumATBAllergie3}} mg {{chir.administrationATBAllergie3}}</ion-label>\n            <ion-label *ngIf = "PoidsNum * chir.posologieNumATBAllergie3 > chir.doseMaxATBAllergie3" >+ {{chir.ATBAllergie3}} : {{chir.doseMaxATBAllergie3}} mg {{chir.administrationATBAllergie3}}</ion-label>\n          </ion-chip>\n\n          <ul *ngIf="chir.ATBAllergie3" class="infoAntibioChirurgie"><b>{{chir.ATBAllergie3}}</b>\n            <li *ngIf="chir.posologieATBAllergie3">Posologie/poids : {{chir.posologieATBAllergie3}} (max. : {{chir.doseMaxATBAllergie3}} mg)</li>\n            <li *ngIf="chir.dilutionATBAllergie3">Dilution : {{chir.dilutionATBAllergie3}}</li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATBAllergie3 <= chir.doseMaxReinjectionATBAllergie3">Réinjection : {{chir.posologiereinjectionNumATBAllergie3 * PoidsRound}} mg/{{chir.delaiReinjectionATBAllergie3}} </li>\n            <li *ngIf="PoidsNum * chir.posologiereinjectionNumATBAllergie3 > chir.doseMaxReinjectionATBAllergie3">Réinjection : {{chir.doseMaxReinjectionATBAllergie3}} mg/{{chir.delaiReinjectionATBAllergie3}} </li>\n          </ul> \n        </div>\n      </ion-card-content>\n\n    </ion-card>\n\n\n      \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\antibioprophylaxie\antibioprophylaxie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_medicaments__["a" /* ServiceDataProvider */]])
    ], AntibioprophylaxiePage);
    return AntibioprophylaxiePage;
}());

//# sourceMappingURL=antibioprophylaxie.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AniPage = /** @class */ (function () {
    function AniPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AniPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AniPage');
    };
    AniPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    AniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ani',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\pages_dispositifs\ani\ani.html"*/'<!--\n  Generated template for the AniPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding>\n  <div class="header"> \n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n    ANI</div>\n    <br>\n    <span class="reference">Fabriquant : MDoloris Medical Systems, Lille, France</span>\n</ion-header>\n<ion-content>\n  <ion-card class="drogueContainer">\n    <ion-card-content>\n     \n  \n      <p class="aideMemoire"><b>Objectif</b> : faciliter la gestion des drogues antalgiques en per-opératoire</p> \n      <br>\n      <p class="aideMemoire"><b>Principe</b> : propose un index d\'activité parasympathique (p&Sigma;) calculé sur la base des variations de l\'espace RR (ECG) au cours du cycle respiratoire. </p> \n      <br>\n      <p class="aideMemoire">\n        <b>Interprétation</b> : réactivité sympathique à une stimulation nociceptive dans les 10 minutes.\n        <br>- p&Sigma; > 70 :  très improbable, envisager une réduction des doses d\'antalgique ;\n        <br>- 50 < p&Sigma; < 70 : peu probable, fenêtre cible ;\n        <br>- p&Sigma; < 50 : très probable, envisager l\'administration d\'antalgique.\n      </p>\n      <br>\n      <p class="aideMemoire"><b>Limites</b> : \n        <br> - arythmie cardiaque\n        <br> - changement de volume courant dans la dernière minute, respiration irrégulière\n        <br> - fréquence respiratoire < 9/minute ou apnée \n        <br> - modification pharmacologique de la fréquence cardiaque : atropine, éphédrine, catécholamines, etc.\n      </p>\n      <br>\n      <p class="aideMemoire"><b>Electrodes & moniteur</b> :</p>\n      <img class="imgAideMemoire" src="/assets/imgs/ani.jpg">\n      <img class="imgANIMoniteur" src="/assets/imgs/animoniteur.png">\n  \n    </ion-card-content>\n  \n  \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\pages_dispositifs\ani\ani.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AniPage);
    return AniPage;
}());

//# sourceMappingURL=ani.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrophieVesicalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExtrophieVesicalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtrophieVesicalePage = /** @class */ (function () {
    function ExtrophieVesicalePage(navCtrl, navParams, storage, ToastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.ToastController = ToastController;
        this.checkedItem = false;
        this.Consultation = [
            { title: 'Réhabilitation', item: "Evaluation de la possibilité d'une réhabilitation précoce (sans réanimation).", isChecked: false, count: 1 },
            { title: 'Comorbidités', item: 'Evaluation des comorbidités du patient.', isChecked: false, count: 1 },
            { title: 'Post-opératoire', item: 'Anticiper la période post-opératoire : appele systématique de la réanimation pour réserver une place (4 3416)', isChecked: false, count: 1 },
            { title: 'Epargne sanguine', item: "Stratégie d'épargne sanguine : prescription de fer, bilan avec NFS, hémostase complète, carte de groupe. Associer un ionogramme sanguin systématique.", isChecked: false, count: 1 },
            { title: 'Infections', item: 'Stratégie de contrôle des infections : ECBU, dépistage BLSE par écouvillon rectal et carte fongique (comportant écouiville plaque vésicale, peau à la jonction de la plaque vésicale, aisselles, anus).', isChecked: false, count: 1 },
        ];
        this.VPA = [
            { title: 'Bilans', item: "Vérifier que les bilans prescrits ont été réalisés, vérifier les résultats. Prescrire les RAI et la 2e détermination de groupe.", isChecked: false, class: this.checkedItem },
            { title: 'Transfusion', item: 'Faire une commande de culots globulaires prévisionnelle.', isChecked: false, class: this.checkedItem },
            { title: 'Hydratation', item: 'Perfuser dès le début du jeûne avec du B26.', isChecked: false, class: this.checkedItem },
        ];
        this.PreOperatoire = [
            { title: "Réanimation", item: "Confirmer la place en réanimation.", isChecked: false, },
            { title: "Monitorage", item: "NIRS en place avant l'induction. TOF pour curarisation continue en IVSE - tracrium - selon le protocole habituel. ", isChecked: false, },
            { title: "Prévention", item: "Infections : Antibioprophylaxie par Céfazoline IV 30 minutes avant l'incision. Saignement : Exacyl - si ostéotomie - selon le protocole habituel. NVPO : Dexaméthasone selon le protocole habituel. Calculer le VPOP.", isChecked: false, },
            { title: "Dispostifs", item: "Pose de cathéter veineux central en jugulaire interne droit (pas en fémoral car ostéotomie). Attention au montage des lignes type réanimation. Discuter la pose d'un cathéter artériel pour monitorage hémodynamique, selon le terrain. Pose d'un cathéter de péridurale, utiliser en per-opératoire, évaluer l'efficacité en per-opératoire.", isChecked: false, },
        ];
        this.PerOperatoire = [
            { title: "Pendant l'intervention", item: "Surveillance des saignements en per-opératoire et HemoCue réguliers (1 par heure pendant le temps orthopédique). Seuil transfusionnel à 8 g/dL. NFS de contrôle en post-opératoire.",
                isChecked: false },
            { title: "En fin d'intervention", item: "Evaluation des critères d'admission en réanimation : transfert en réanimation si transfusion massive, support catécholaminergique, impossibilité d'extubation rapide en SSPI, gestion de l'analgésie prévue comme difficile (mauvaise efficacité de la péridurale, réinjections fréquentes de sufentanil en per-opératoire).",
                isChecked: false },
        ];
        this.PostOperatoire = [
            { title: "Réhabilitation précoce", item: "Chaque fois que possible en l'absence de critère d'admission en réanimation. Extubation précoce en SSPI. Contrôle de l'analgésie par péridurale et paracétamol. Reprise des boissons (liquide clair) dès le soir.",
                isChecked: false },
            { title: "Clinique", item: "Stabilité hémodynamique et diurèse satisfaisante (> 3mL/kg/h) surveillée toutes les 2 heures." },
            { title: "Biologie", item: "NFS à J1 (objectif Hb > 8 g/dL et hémostase normale). Absence de trouble ionique. Stabilité hémodynamique et diurèse satisfaisante (> 3mL/kg/h).",
                isChecked: false },
            { title: "Dispositifs", item: "Ablation du cathéter artériel avant la sortie de SSPI. Vérification de l'efficacité de l'analgésie péridurale." }
        ];
        this.isShownConsultation = false;
        this.isShownVPA = false;
        this.isShownPerOp = false;
        this.isShownPostOp = false;
        this.isShownPreOp = false;
        this.allCheckedConsultation = false;
        this.allCheckedVPA = false;
        this.allCheckedPreOp = false;
        this.allCheckedPerOp = false;
        this.allCheckedPostOp = false;
    }
    ExtrophieVesicalePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    ExtrophieVesicalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtrophieVesicalePage');
    };
    ;
    ExtrophieVesicalePage.prototype.ionViewWillEnter = function () {
    };
    ;
    ExtrophieVesicalePage.prototype.ToggleConsultation = function () {
        this.isShownConsultation = !this.isShownConsultation;
    };
    ;
    ExtrophieVesicalePage.prototype.ToggleVPA = function () {
        this.isShownVPA = !this.isShownVPA;
    };
    ;
    ExtrophieVesicalePage.prototype.TogglePreOp = function () {
        this.isShownPreOp = !this.isShownPreOp;
    };
    ;
    ExtrophieVesicalePage.prototype.TogglePerOp = function () {
        this.isShownPerOp = !this.isShownPerOp;
    };
    ;
    ExtrophieVesicalePage.prototype.TogglePostOp = function () {
        this.isShownPostOp = !this.isShownPostOp;
    };
    ;
    ExtrophieVesicalePage.prototype.checkCS = function () {
        var checkCS = this.Consultation
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkCS == 0) {
            this.allCheckedConsultation = true;
            var toastCS = this.ToastController.create({
                message: "Items spécifiques de consultation tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastCS.present();
        }
        else {
            this.allCheckedConsultation = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage.prototype.checkVPA = function () {
        var checkVPA = this.VPA
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkVPA == 0) {
            this.allCheckedVPA = true;
            var toastVPA = this.ToastController.create({
                message: "Items spécifiques de VPA tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastVPA.present();
        }
        else {
            this.allCheckedVPA = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage.prototype.checkPreOperatoire = function () {
        var checkPreOp = this.PreOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPreOp == 0) {
            this.allCheckedPreOp = true;
            var toastPreOp = this.ToastController.create({
                message: "Items spécifiques du pré-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPreOp.present();
        }
        else {
            this.allCheckedPreOp = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage.prototype.checkPerOperatoire = function () {
        var checkPerOp = this.PerOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPerOp == 0) {
            this.allCheckedPerOp = true;
            var toastPerOp = this.ToastController.create({
                message: "Items spécifiques du per-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPerOp.present();
        }
        else {
            this.allCheckedPerOp = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage.prototype.checkPostOperatoire = function () {
        var checkPostOp = this.PostOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPostOp == 0) {
            this.allCheckedPostOp = true;
            var toastPostOp = this.ToastController.create({
                message: "Items spécifiques du post-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPostOp.present();
        }
        else {
            this.allCheckedPostOp = false;
        }
        ;
    };
    ;
    ExtrophieVesicalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-extrophie-vesicale',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\chirurgies\extrophie-vesicale\extrophie-vesicale.html"*/'<ion-header><br>\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n    Extrophie vésicale  </div>\n      <br>\n\n      <ion-item color="warning">\n        <p class="entete_protocole">Auteurs : Dr. Charlotte FAIT, Pr. Souhayl DAHMANI</p>\n        <p class="entete_protocole">Date de publication : 21/09/2020</p>\n      </ion-item>\n  \n    \n    </ion-header>\n    <ion-content>\n \n\n  <ion-card color="turquoise-fonce">\n    <ion-card-content>  Objectifs : \n      <p class="dilutionDrogueInduction"> - réduction des jours de réanimation avec intubation.</p> \n      <p class="dilutionDrogueInduction"> - réhabilitation précoce avec passage de la première nuit en SSPI puis USC à J1.</p>\n      <p class="dilutionDrogueInduction"> - optimisation de l\'analgésie.</p></ion-card-content>\n  </ion-card>\n\n\n  <!-- PARTIE CONSULTATION -->\n\n  <ion-item class="drogueContainer" (click)="ToggleConsultation()">\n      <ion-label class="drogueInduction" color="dark-turquoise">Consultation &nbsp;&nbsp;\n      <ion-icon *ngIf="allCheckedConsultation" name="checkbox"  style="zoom:1"></ion-icon>\n      <ion-icon *ngIf="!isShownConsultation" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n      <ion-icon *ngIf="isShownConsultation" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <div *ngIf="isShownConsultation">\n      <ion-card *ngFor="let entry of Consultation" class="drogueContainer">\n        <ion-item>\n        <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n        <ion-checkbox color="turquoise-fonce" (click)="checkCS()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n      </ion-item>\n      <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}</ion-card-content></ion-card>\n      </div>\n\n\n\n<!-- PARTIE VPA -->\n\n<ion-item class="drogueContainer" (click)="ToggleVPA()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Visite pré-anesthésique &nbsp;&nbsp;\n  <ion-icon *ngIf="allCheckedVPA" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownVPA" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownVPA" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownVPA">\n  <ion-card *ngFor="let entry of VPA" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkVPA()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}</ion-card-content></ion-card>\n  </div>\n\n\n  <!-- PARTIE PRE OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePreOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Pré-opératoire &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPreOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPreOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPreOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n \n  <div *ngIf="isShownPreOp">\n  <ion-card *ngFor="let entry of PreOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPreOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n\n<!-- PARTIE PER OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePerOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Per-opératoire &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPerOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPerOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPerOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownPerOp">\n  <ion-card *ngFor="let entry of PerOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPerOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content  *ngIf="!entry.isChecked" class="comment"> {{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n\n<!-- PARTIE POST OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePostOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Post-opératoire & SSPI &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPostOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPostOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPostOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownPostOp">\n  <ion-card *ngFor="let entry of PostOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPostOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment"> {{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\chirurgies\extrophie-vesicale\extrophie-vesicale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ExtrophieVesicalePage);
    return ExtrophieVesicalePage;
}());

//# sourceMappingURL=extrophie-vesicale.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoliosePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExtrophieVesicalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScoliosePage = /** @class */ (function () {
    function ScoliosePage(navCtrl, navParams, storage, ToastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.ToastController = ToastController;
        this.checkedItem = false;
        this.Consultation = [
            { title: 'Cadre nosologique', item: "Scoliose idiopathique de croissance (peu de comorbidités associées) ou scoliose secondaire : myopathes, infirmes moteurs cérébraux, dystrophie, épilepsie. Risque élevé de comorbidités en cas de scoliose secondaire.", isChecked: false, count: 1 },
            { title: 'Comorbidités', item: 'Pour les scolioses secondaires, rechercher et explorer les comorbidités cardiaques (ECG, ETT), respiratoires (EFR pour évaluation du TVR et recherche TVO associé).', isChecked: false, count: 1 },
            { title: 'Condition physique', item: "Evaluer la tolérance à l'effort (PE score).", isChecked: false, count: 1 },
            { title: 'Etat nutritionnel', item: "Evaluer l'IMC (risque infectieux augmenté pour un IMC < 16 ou > 30).", isChecked: false, count: 1 },
            { title: 'Risque infectieux', item: "Eliminer systématiquement un foyer urinaire par un ECBU et un foyer dentaire par examen stomatologique. Réaliser le dépistage nasal du staphylocoque doré et la décontamination cutanée en pré-opératoire.", isChecked: false, count: 1 },
            { title: 'Risque hémorragique', item: "Le risque est augmenté par : l'étiologie secondaire de la scoliose, le nombre d'étages à fixer, la nécessité de réaliser des ostéotomies transpédiculaires, une fixation sacrée, et la durée prévue de la chirurgie. Prescrire la supplémentation en fer et acide folique pour 6 semaines avant la chirurgie. Injections d'EPO à J-28, J-21, J-14 et J-7. Objectif : hémoglobinémie > 15 g/dL en pré-opératoire.", isChecked: false, count: 1 },
            { title: "Risque d'intubation difficile", item: "Rechercher une atteinte thoracique haute, une atteinte cervicale, une instabilité ou un antécédent de luxation cervicale. Le cas échéant, prévoir d'emblée une intubation par fibroscopie.", isChecked: false, count: 1 },
        ];
        this.VPA = [
            { title: 'Bilans', item: "Vérifier que les bilans prescrits ont été réalisés, vérifier les résultats (ojectif d'hémoglobinémie > 15 g/dL). Prescrire les RAI et la 2e détermination de groupe. Vérifier que la décontamination cutanée a bien été réalisée.", isChecked: false, class: this.checkedItem },
            { title: 'Transfusion', item: 'Faire une commande de culots globulaires prévisionnelle.', isChecked: false, class: this.checkedItem },
            { title: 'Analgésie', item: 'Introduire la gabapentine.', isChecked: false, class: this.checkedItem },
        ];
        this.PreOperatoire = [
            { title: "USC", item: "Confirmer la place en USC pour le post-opératoire.", isChecked: false, },
            { title: "Monitorage", item: "BIS en place avant l'induction. TOF pour monitorage de la curarisation continue en IVSE - sauf en cas de monitorage des potentiels moteurs. Prévoir un remplissage de 10 mL/kg avant le positionnement en décubitus ventral. Prévoir une sonde de Doppler oesophagien pour le monitorage hémodynamique.", isChecked: false, },
            { title: "Prévention", item: "Infections : Antibioprophylaxie par Céfazoline IV 30 minutes avant l'incision. Saignement : Exacyl systématique : 10 mg/kg sur 30 minutes 20 minutes avant l'incision, puis 5 mg/kg/h IVSE jusqu'au début de la fermeture. Préparer le flacon de récupération du cell saver sur l'aspiration chirurgicale.", isChecked: false, },
            { title: "Dispostifs", item: "Dispositifs : deux voies veineuses (18G), sonde thermique, discuter la pose d'un cathéter veineux central et d'un cathéter artériel selon le terrain. Sondage vésical systématique.", isChecked: false, },
        ];
        this.PerOperatoire = [
            { title: "Pendant l'intervention", item: "Réalisation de la rachianesthésie chirurgicale. Surveillance des saignements en per-opératoire et HemoCue. Risque de saignement principal au moment des ostéotomies pédiculaires. Monter le cell-saver à environ 1000cc dans le flacon de récupération. Surveiller régulièrement l'installation (position de la tête, absence de compression des yeux). Surveiller la survenue de variations hémodynamiques brutales pendant la réduction chirurgicale (pouvant signer une souffrance médullaire aiguë). Maintenir des apports de 15 mL/kg/h et surveiller la diurèse.",
                isChecked: false },
            { title: "En fin d'intervention", item: "Arrêt de la curarisation et de l'acide tranexamique au début de la fermeture.",
                isChecked: false },
        ];
        this.PostOperatoire = [
            { title: "Réhabilitation précoce", item: "Extubation en salle. Analgésie multimodale (paracétamol, kétoprofène, acupan IVSE, PCA morphine, Gabapentine) devant permettre le premier lever à J1 avec kinésithérapeute.",
                isChecked: false },
            { title: "Prévention", item: "Thromboprophylaxie systématique : Enoxaparine 4000 UI à H8 post opératoire. Poursuite de l'antibioprophylaxie par Céfazoline pendant 48h. Protection gastrique par Pantoprazole." },
            { title: "Biologie", item: "Bilan à J1 comprenant NFS, Pq, ionogramme sanguin, créatininémie, hémostase. Poursuivre les apports pour maintenir une diurèse > 1 mL/kg/h.",
                isChecked: false },
            { title: "Dispositifs", item: "Ouverture des redons à H+6 post opératoire avec accord du chirurgien." }
        ];
        this.isShownConsultation = false;
        this.isShownVPA = false;
        this.isShownPerOp = false;
        this.isShownPostOp = false;
        this.isShownPreOp = false;
        this.allCheckedConsultation = false;
        this.allCheckedVPA = false;
        this.allCheckedPreOp = false;
        this.allCheckedPerOp = false;
        this.allCheckedPostOp = false;
    }
    ScoliosePage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    ;
    ScoliosePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtrophieVesicalePage');
    };
    ;
    ScoliosePage.prototype.ionViewWillEnter = function () {
    };
    ;
    ScoliosePage.prototype.ToggleConsultation = function () {
        this.isShownConsultation = !this.isShownConsultation;
    };
    ;
    ScoliosePage.prototype.ToggleVPA = function () {
        this.isShownVPA = !this.isShownVPA;
    };
    ;
    ScoliosePage.prototype.TogglePreOp = function () {
        this.isShownPreOp = !this.isShownPreOp;
    };
    ;
    ScoliosePage.prototype.TogglePerOp = function () {
        this.isShownPerOp = !this.isShownPerOp;
    };
    ;
    ScoliosePage.prototype.TogglePostOp = function () {
        this.isShownPostOp = !this.isShownPostOp;
    };
    ;
    ScoliosePage.prototype.checkCS = function () {
        var checkCS = this.Consultation
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkCS == 0) {
            this.allCheckedConsultation = true;
            var toastCS = this.ToastController.create({
                message: "Items spécifiques de consultation tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastCS.present();
        }
        else {
            this.allCheckedConsultation = false;
        }
        ;
    };
    ;
    ScoliosePage.prototype.checkVPA = function () {
        var checkVPA = this.VPA
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkVPA == 0) {
            this.allCheckedVPA = true;
            var toastVPA = this.ToastController.create({
                message: "Items spécifiques de VPA tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastVPA.present();
        }
        else {
            this.allCheckedVPA = false;
        }
        ;
    };
    ;
    ScoliosePage.prototype.checkPreOperatoire = function () {
        var checkPreOp = this.PreOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPreOp == 0) {
            this.allCheckedPreOp = true;
            var toastPreOp = this.ToastController.create({
                message: "Items spécifiques du pré-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPreOp.present();
        }
        else {
            this.allCheckedPreOp = false;
        }
        ;
    };
    ;
    ScoliosePage.prototype.checkPerOperatoire = function () {
        var checkPerOp = this.PerOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPerOp == 0) {
            this.allCheckedPerOp = true;
            var toastPerOp = this.ToastController.create({
                message: "Items spécifiques du per-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPerOp.present();
        }
        else {
            this.allCheckedPerOp = false;
        }
        ;
    };
    ;
    ScoliosePage.prototype.checkPostOperatoire = function () {
        var checkPostOp = this.PostOperatoire
            .filter(function (item) { return item.isChecked === false; })
            .reduce(function (sum, current) { return sum + current.count; }, 0);
        if (checkPostOp == 0) {
            this.allCheckedPostOp = true;
            var toastPostOp = this.ToastController.create({
                message: "Items spécifiques du post-opératoire tous validés.",
                position: 'Bottom',
                showCloseButton: true,
                closeButtonText: "OK.",
                duration: 3000,
            });
            toastPostOp.present();
        }
        else {
            this.allCheckedPostOp = false;
        }
        ;
    };
    ;
    ScoliosePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scoliose',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\chirurgies\scoliose\scoliose.html"*/'\n<ion-header><br>\n  <div class="header"> \n\n    <div (click)="retourHome()" class="backButton">\n    <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n    Retour\n    </div>\n    Scoliose</div>\n    <br>\n      <ion-item color="warning">\n        <p class="entete_protocole">Auteurs : Dr. Florence Julien-Marsollier, Pr. Souhayl DAHMANI</p>\n        <p class="entete_protocole">Date de publication : 15/11/2018</p>\n      </ion-item>\n    </ion-header>\n\n    <ion-content>\n  <ion-card color="turquoise-fonce">\n    <ion-card-content>  Objectifs : \n      <p class="dilutionDrogueInduction"> - anticiper les risques.</p> \n      <p class="dilutionDrogueInduction"> - favoriser réhabilitation accélérée après chirurgie : raccourcir les séjours en SSPI & USC</p>\n      </ion-card-content>\n      </ion-card>\n\n  \n  <!-- PARTIE CONSULTATION -->\n\n  <ion-item class="drogueContainer" (click)="ToggleConsultation()">\n      <ion-label class="drogueInduction" color="dark-turquoise">Consultation &nbsp;&nbsp;\n      <ion-icon *ngIf="allCheckedConsultation" name="checkbox"  style="zoom:1"></ion-icon>\n      <ion-icon *ngIf="!isShownConsultation" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n      <ion-icon *ngIf="isShownConsultation" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <div *ngIf="isShownConsultation">\n      <ion-card *ngFor="let entry of Consultation" class="drogueContainer">\n        <ion-item>\n        <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n        <ion-checkbox color="turquoise-fonce" (click)="checkCS()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n      </ion-item>\n      <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}</ion-card-content></ion-card>\n      </div>\n\n\n\n<!-- PARTIE VPA -->\n\n<ion-item class="drogueContainer" (click)="ToggleVPA()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Visite pré-anesthésique &nbsp;&nbsp;\n  <ion-icon *ngIf="allCheckedVPA" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownVPA" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownVPA" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownVPA">\n  <ion-card *ngFor="let entry of VPA" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkVPA()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}</ion-card-content></ion-card>\n  </div>\n\n\n  <!-- PARTIE PRE OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePreOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Pré-opératoire &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPreOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPreOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPreOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n \n  <div *ngIf="isShownPreOp">\n  <ion-card *ngFor="let entry of PreOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPreOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment">{{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n\n<!-- PARTIE PER OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePerOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Per-opératoire &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPerOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPerOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPerOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownPerOp">\n  <ion-card *ngFor="let entry of PerOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPerOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content  *ngIf="!entry.isChecked" class="comment"> {{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n\n<!-- PARTIE POST OP -->\n\n<ion-item class="drogueContainer" (click)="TogglePostOp()">\n  <ion-label class="drogueInduction" color="dark-turquoise">Post-opératoire & SSPI &nbsp;&nbsp;\n    <ion-icon *ngIf="allCheckedPostOp" name="checkbox"  style="zoom:1"></ion-icon>\n  <ion-icon *ngIf="!isShownPostOp" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownPostOp" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n  </ion-item>\n\n  <div *ngIf="isShownPostOp">\n  <ion-card *ngFor="let entry of PostOperatoire" class="drogueContainer">\n    <ion-item>\n    <ion-label class="drogueInduction">{{entry.title}}</ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="checkPostOperatoire()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n  <ion-card-content *ngIf="!entry.isChecked" class="comment"> {{entry.item}}\n  </ion-card-content></ion-card>\n  </div>\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\chirurgies\scoliose\scoliose.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ScoliosePage);
    return ScoliosePage;
}());

//# sourceMappingURL=scoliose.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SauvegardePatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SauvegardePatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SauvegardePatientPage = /** @class */ (function () {
    function SauvegardePatientPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.PatientsSauvegardes = [];
        this.ExemplesPatients = [
            { Prenom: "Garçon 1 mois", Sexe: "Garçon", Age: 1, Poids: 4.2, Taille: 55, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Fille 1 mois", Sexe: "Fille", Age: 1, Poids: 4.1, Taille: 55, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Garçon 6 mois", Sexe: "Garçon", Age: 6, Poids: 8, Taille: 68, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Fille 6 mois", Sexe: "Fille", Age: 6, Poids: 7.8, Taille: 65, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Garçon 1 an", Sexe: "Garçon", Age: 12, Poids: 10, Taille: 75, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Fille 1 an", Sexe: "Fille", Age: 12, Poids: 9.5, Taille: 75, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Garçon 5 ans", Sexe: "Garçon", Age: 60, Poids: 18, Taille: 110, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Fille 5 ans", Sexe: "Fille", Age: 60, Poids: 18, Taille: 110, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Garçon 10 ans", Sexe: "Garçon", Age: 120, Poids: 33, Taille: 140, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Fille 10 ans", Sexe: "Fille", Age: 120, Poids: 33, Taille: 140, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Garçon 15 ans", Sexe: "Garçon", Age: 180, Poids: 57, Taille: 165, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
            { Prenom: "Fille 15 ans", Sexe: "Fille", Age: 180, Poids: 52, Taille: 161, EstomacPlein: "vide", DureeJeune: 6, Allergie: "aucune connue" },
        ];
    }
    SauvegardePatientPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SauvegardePatientPage');
        this.PatientsView = 1;
        var promiseList = [];
        promiseList.push(this.storage.get('SavedPatients').then(function (SavedPatients) {
            if (!SavedPatients) {
                return;
            }
            else if (_this.PatientsSauvegardes == SavedPatients) {
                return;
            }
            else {
                _this.PatientsSauvegardes = _this.PatientsSauvegardes.concat(SavedPatients);
            }
            ;
            console.log("patient chargés = ", _this.PatientsSauvegardes);
        }));
    };
    ;
    SauvegardePatientPage.prototype.retourHome = function () {
        this.navCtrl.pop();
    };
    SauvegardePatientPage.prototype.loadExemplePatient = function (index) {
        console.log(this.ExemplesPatients[index].Taille);
        this.storage.set('sexeMF', this.ExemplesPatients[index].Sexe);
        this.storage.set('Taille', this.ExemplesPatients[index].Taille);
        this.storage.set('AgeNum', this.ExemplesPatients[index].Age);
        this.storage.set('PoidsNum', this.ExemplesPatients[index].Poids);
        this.storage.set('Allergie', this.ExemplesPatients[index].Allergie);
        this.storage.set('DureeJeune', this.ExemplesPatients[index].DureeJeune);
        this.storage.set('EstomacPlein', this.ExemplesPatients[index].EstomacPlein);
        this.storage.set('Prenom', this.ExemplesPatients[index].Prenom);
        this.navCtrl.pop();
    };
    ;
    SauvegardePatientPage.prototype.loadMyPatient = function (index) {
        console.log(this.PatientsSauvegardes[index].Taille);
        this.storage.set('sexeMF', this.PatientsSauvegardes[index].Sexe);
        this.storage.set('Taille', this.PatientsSauvegardes[index].Taille);
        this.storage.set('AgeNum', this.PatientsSauvegardes[index].Age);
        this.storage.set('PoidsNum', this.PatientsSauvegardes[index].Poids);
        this.storage.set('Allergie', this.PatientsSauvegardes[index].Allergie);
        this.storage.set('DureeJeune', this.PatientsSauvegardes[index].DureeJeune);
        this.storage.set('EstomacPlein', this.PatientsSauvegardes[index].EstomacPlein);
        this.storage.set('Prenom', this.PatientsSauvegardes[index].Prenom);
        this.navCtrl.pop();
    };
    ;
    SauvegardePatientPage.prototype.deleteMyPatient = function (index) {
        var _this = this;
        this.PatientsSauvegardes = this.PatientsSauvegardes.filter(function (item) { return item !== _this.PatientsSauvegardes[index]; });
        this.storage.set('SavedPatients', this.PatientsSauvegardes);
        console.log(this.PatientsSauvegardes);
    };
    ;
    SauvegardePatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sauvegarde-patient',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\sauvegarde-patient\sauvegarde-patient.html"*/'<ion-content>\n\n\n\n<div class="header"> \n\n  <div (click)="retourHome()" class="backButton">\n  <ion-icon start color="turquoise-fonce" name="arrow-back"></ion-icon>\n  Retour\n  </div>\n\n  Mes patients\n\n\n\n <br>\n \n    <ion-segment color="turquoise-fonce" [(ngModel)]="PatientsView">\n      <ion-segment-button value="1">Standards</ion-segment-button>\n      <ion-segment-button value="2">Enregistrés</ion-segment-button>\n    </ion-segment>\n\n\n</div>\n\n  <!-- END HEADER -->\n\n<div *ngIf="PatientsView == 1 ">\n\n  <div padding class="fichePatient" *ngFor="let item of ExemplesPatients; let index = index;">\n    <div class="iconPatient">\n      <ion-icon color="primary" name="download" (click)="loadExemplePatient(index)"></ion-icon>\n      <br><br>\n    </div>\n    <span class="prenomPatient">{{item.Prenom}}</span><br>\n    <span class="comment">    \n        {{item.Poids}} kg - {{item.Taille}} cm\n    </span>\n  </div>\n  </div>\n\n\n  <div *ngIf="PatientsView == 2 ">\n  <ion-card><ion-card-content>Les patients enregistrés à partir de l\'écran d\'accueil sont enregistrés ici.</ion-card-content></ion-card>\n  <div padding class="fichePatient" *ngFor="let item of PatientsSauvegardes; let index = index;">\n    <div class="iconPatient">\n      <ion-icon color="primary" name="download" (click)="loadMyPatient(index)"></ion-icon>\n      <br><br>\n      <ion-icon color="danger" name="trash" (click)="deleteMyPatient(index)"></ion-icon>\n    </div>  \n    <span class="prenomPatient">{{item.Prenom}}</span>\n    <p class="comment">    \n        {{item.Sexe}} - {{item.Age}} mois \n        <br>{{item.Poids}} kg - {{item.Taille}} cm\n      </p>\n    </div>\n\n</div>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\modules\sauvegarde-patient\sauvegarde-patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SauvegardePatientPage);
    return SauvegardePatientPage;
}());

//# sourceMappingURL=sauvegarde-patient.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
    }
    InfoPage.prototype.menuToggle = function () {
        this.menu.open();
    };
    ;
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.openDARwebsite = function () {
        window.open("http://www.dar-robertdebre.com", '_system');
    };
    ;
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\info\info.html"*/'<ion-header> <br> \n\n  <div padding class="credits">\n    <b>\n    Merci d\'utiliser QuadruPed ! \n  <br>\n  Application gratuite développée avec <ion-icon zoom="0.6" color="danger" name="heart"></ion-icon> par l\'équipe d\'anesthésie de l\'hôpital Robert Debré.</b>\n  <br><br>\n  <ion-icon zoom="0.5" color="primary" name="mail"></ion-icon> : contact@quadruped.app\n  <br> \n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="CGU">\n  <p class="CGUtitle">CONDITIONS GENERALES D\'UTILISATION (CGU) <br>DE L\'APPLICATION</p>\n  <hr> <br>\n  <b>PREAMBULE</b>\n  <br><br>\n\n  L’application QUADRUPED, créée et développée par l\'équipe d\'anesthésie de l\'hôpital Robert Debré, ci-après « l’Editeur », a pour objet de promouvoir la qualité et la sécurité des soins en partageant des protocoles de prise en charge, des suggestions de posologies, des aides au calcul de dose et au calcul de scores en anesthésie pédiatrique.\n  <br><br>L’utilisateur reconnaît avoir pris connaissance des présentes Conditions Générales et s’engage à les respecter.\n  <br><br>\n  <b>ARTICLE 1 : DEFINITION</b>\n  <br><br> « Utilisateur » désigne toute personne physique ayant téléchargé l’Application, tout utilisateur de l’application.\n  <br><br> « Contenu » désigne sans que cette liste soit limitative, la structure de l’Application, le contenu éditorial, les dessins, les illustrations, les images, les photographies, les chartes graphiques, les marques, les logos, les sigles, les dénominations sociales, les œuvres audiovisuelles, les œuvres multimédia, les contenus visuels, les contenus audio  et  sonores,  ainsi  que  tout  autre  contenu  présent  au  sein  de  l’Application  et/ou  tout  autre  élément composant l’Application.\n  <br><br> « Services » désignent les différentes fonctionnalités et services proposées par l’Application.\n \n  <br><br>\n   <b>ARTICLE 2. OBJET DES CGU ET CHAMP D’APPLICATION</b>\n   <br><br>\n   Les présentes conditions générales d’utilisation (ci-après dénommées « CGU ») ont pour objet de déterminer les règles d’utilisation de l’application mobile « QUADRUPED» (ci-après dénommée l’« Application ») développée et éditée par l\'équipe d\'anesthésie de l\'hôpital Robert Debré, ainsi que les droits et obligations des parties.\n   <br><br>Les CGU sont applicables à tout Utilisateur de l’Application et des Services.\n  \n  <br><br>\n  <b>ARTICLE 3 : DROIT DE L’EDITEUR SUR L’APPLICATION ET SON CONTENU</b>\n  <br><br>\n  L’Editeur est le seul titulaire des droits portant sur le Contenu et l’ensemble des éléments de l’application. \n  <br><br> Toute utilisation du Contenu ou des éléments constituant l’application est prohibée et constitutive de contrefaçon.\n  <br><br>L’Application pourra faire l’objet de mises à jour à tout moment et sans préavis par l’Editeur.\n  <br><br> Les interventions de maintenance pourront être effectuées sans que les Utilisateurs aient été préalablement avertis. L’Editeur n’est tenu à aucune continuité dans les services proposés.\n  \n  <br><br>\n  <b>ARTICLE 4 : DROIT D’USAGE A TITRE GRATUIT</b>\n  <br><br>\n  L’éditeur concède à l’Utilisateur un droit d’usage personnel de l’Application à  titre  gratuit,  non  exclusif,  non  cessible,  non  transmissible  à  un  tiers et  révocable à tout moment.\n  <br><br>Ce droit d’usage ne peut faire l’objet d’aucune transaction commerciale.\n  <br><br>Il est strictement interdit à l’Utilisateur :\n  <br>-  d’accéder  et/ou  d’utiliser  les  codes  source  de  l’Application  et/ou  des  composants  logiciels  de l’Application\n  <br>-  de reproduire, représenter, adapter et/ou exploiter l’Application et/ou ses composants logiciels,  ainsi que tout ou partie du Contenu.\n  <br><br>L\'Utilisateur s\'engage expressément à ce que son usage de  l\'Application ne porte en aucun cas atteinte aux droits de l’Editeur.\n  <br><br>L’Utilisateur s’engage expressément :\n  <br>- à télécharger l’Application sur son équipement pour un usage personnel sans but lucratif, \n  <br>- à ne pas reproduire de façon permanente ou provisoire l’Application, le Contenu et/ou les Services, en tout ou partie, par quelque moyen que ce soit et quelle qu’en soit la forme ;\n  <br>- à  ne  procéder à  aucune  adaptation, modification, traduction, transcription,  ou toutes autres actions dites de « rétro-ingénierie » de tout ou partie de l’Application, du Contenu et/ou des Services ;\n  <br>- à ne pas exporter l’Application,\n  <br>- à ne pas fusionner tout ou partie de l’Application avec d\'autres programmes informatiques ;\n  <br>- à  respecter  les  droits  de  propriété  intellectuelle  de  l’Editeur  sur  l’Application,  le Contenu et les Services ; \n  <br>- à ne pas perturber le bon fonctionnement de l’Application quel que ce soit le moyen utilisé, \n  <br>- à  ne  pas  mettre  en  place  de  systèmes  pouvant  pirater  l’Application  et/ou  son  Contenu  et/ou  les Services, en tout ou partie, en violation des présentes CGU ;\n  <br>- à  informer  immédiatement  l’Editeur  d\'un  acte  de  piratage  ou  de  toute  utilisation illicite ou non contractuelle de l’Application et/ou du Contenu  et/ou des Services ;\n  <br>- à ne pas exploiter  l’Application, le Contenu et/ou les Services à d’autres fins que celles prévues aux présentes CGU, telles que notamment la vente ou la location. \n  <br><br>L’Application  est  proposée  gratuitement  aux  Utilisateurs. \n  <br><br>L’éditeur n’est pas responsables des éventuels coûts  d’abonnement  auprès  de  l’opérateur  de téléphonie  mobile,  des coûts  de  connexion  et  d’accès  au  réseau  sécurisé  Internet  et  des  surcoûts  éventuel facturés pour le chargement des données.\n  <br><br>Plusieurs services sont  proposés  à  l’Utilisateur.  \n  <br><br>Ces  services  peuvent être modifiés  à tout moment par  l’éditeur sans que sa responsabilité civile ou pénale puisse être engagée à ce titre.\n  \n  <br><br>\n  <b>ARTICLE 5 : TRAITEMENT DES DONNEES PERSONNELLES</b>\n  <br><br>\n  L’Editeur ne procède à aucun traitement de données personnelles de l’Utilisateur.\n  <br><br>L’utilisation de l’application ne requiert pas la création d’un compte. L’Editeur n’a accès à aucune donnée personne de l’Utilisateur. \n  <br><br>Il est rappelé que conformément à l’article 4 du Règlement 2016/679 du 27 avril 2015, constitue une donnée personnelle toute information se rapportant à une personne physique identifiée ou identifiable. \n  <br><br>Aucune donnée traitée par l’application ne permet d’identifier une personne physique. \n  <br><br>Les données traitées par l’application sont relatives à l’âge, le poids et la taille et traitées entièrement anonymement.\n  <br><br>L’utilisateur s’engage à ne traiter aucune personnelle identifiant ou de nature à identifier une personne physique. \n  \n  <br><br>\n  <b>ARTICLE 6. RESPONSABILITE DE L’EDITEUR ET LIMITATION DE GARANTIE</b>\n  <br><br>\n  L’accès et l’utilisation de l\'Application se font aux risques et périls de l\'Utilisateur.\n  <br><br>La présente application ne fait que proposer des méthodes et calcul en fonction d’éléments introduits par l’Utilisateur. \n  <br><br>Il ne s’agit que d’un support à la décision, sans aucune dimension ou vocation médicale.\n  <br><br>L’Utilisateur reste seul responsable de la décision finale qu’il prend en fonction de nombreux éléments extrinsèques que l’application ne peut traiter. \n  <br><br>En conséquence, l’Utilisateur renonce à toute mise en œuvre de la responsabilité de l’Editeur à cet égard.\n  <br><br>L’Application est fournie « en l’état » sans garantie quelle qu’elle soit.\n  <br><br>L’Editeur ne garantit nullement que l’application sera accessible à tout moment ou sans erreur et/ou exempt de vices.\n  <br><br>Il appartient à  tout  Utilisateur  de  prendre  toutes  les  mesures  appropriées  de  façon  à  protéger  ses  propres données et/ ou logiciels stockés sur ses équipements informatiques et téléphoniques contre toute atteinte.\n  <br><br>L\'éventualité d\'une indisponibilité temporaire ou définitive de l’application ne peut en aucun cas donner lieu à une demande de dommages et intérêts ou toute autre forme de réparation.\n  <br><br>L’Editeur ne peut être tenu pour responsable :\n  <br> - en cas de défaut, de perte, de retard ou d’erreur de transmission de données qui sont indépendants de sa volonté ;\n  <br> - si des données ne lui parvenaient pas, pour quelque raison que ce soit, ou si les données qu’elle reçoit étaient illisibles ou impossibles à traiter ;\n  <br> - au cas où l’Utilisateur ne parvenait à accéder ou à utiliser l’Application et/ou les Services pour quelque raison que ce soit ;\n  <br> - si, pour quelque raison que ce soit, la connexion devait être interrompue.\n  <br><br>L’Editeur  ne saurait  en  aucun  cas  être  tenu  responsable  de  tout  dommage,  de  quelque  nature  que  ce  soit,  causé  aux Utilisateurs, à leurs terminaux, à leurs équipements informatiques et téléphoniques et aux données qui y sont stockées,  ni  des  conséquences  pouvant  en  découler  sur  leur  activité  personnelle,  professionnelle  ou commerciale (notamment, sans que cela ne soit exhaustif manque à gagner, perte d’exploitation, perte de chiffre d’affaires, atteinte à l’image, perte de données).\n  \n  <br><br>\n  <b>ARTICLE 7. MODIFICATION DES CONDITIONS GENERALES D\'UTILISATION</b>\n  <br><br>\n  Les CGU applicables  sont  celles  en  vigueur  à  la  date  de  la  connexion  et  de  l’utilisation  de  l’Application  par l’Utilisateur.\n  <br><br>L’Editeur se réserve le droit de modifier, à tout moment, tout ou partie, des dispositions des CGU sans préavis ni information préalable des Utilisateurs afin notamment de les adapter aux évolutions des Services, aux évolutions techniques, légales ou jurisprudentielles ou lors de la mise en place de nouvelles prestations.  \n  <br><br>Les modifications éventuellement apportées par l’Editeur aux CGU seront portées à la connaissance des Utilisateurs par leur simple mise en ligne.\n  <br><br>Elles sont réputées acceptées sans réserve par tout Utilisateur qui accède à l’Application postérieurement à ladite mise en ligne. \n  <br><br>L’Editeur invite tout Utilisateur à consulter régulièrement les CGU.\n  <br><br>Tout nouveau Service intégrant de nouvelles techniques ou nouvelles caractéristiques améliorant la qualité des Services existants seront aussi soumis aux présentes CGU, sauf disposition expresse contraire.\n  \n  <br><br>\n  <b>ARTICLE 8. DUREE</b>\n  <br><br>\n  Les présentes entrent en vigueur à compter du téléchargement de l’application par l’Utilisateur pour une durée indéterminée.\n  <br>\n  <br>\n  <b>ARTICLE 9. CONSENTEMENT</b> \n  <br><br>\n  L’utilisateur reconnaît être parfaitement informé du fait que son accord concernant le contenu des présentes Conditions Générales ne nécessite pas la signature manuscrite de ce document, mais résulte de sa seule consultation de l’Application. \n  \n  <br><br>\n  <b>ARTICLE 10. CONTACT</b>\n  <br><br>\n  Toute question relative à l’Application et/ou aux Services doit être adressée à la boite mail suivante : contact@quadruped.app. \n  \n  <br><br>\n  <b>ARTICLE 11. LOI APPLICABLE </b>\n  <br><br>\n  Les présentes CGU sont soumises aux lois françaises.\n\n</div>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommandationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecommandationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecommandationsPage = /** @class */ (function () {
    function RecommandationsPage(navCtrl, navParams, InAppBrowser, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InAppBrowser = InAppBrowser;
        this.menu = menu;
        this.recommandations = [
            { auteur: "S. Dahmani", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "L'anesthésie réanimation en pédiatrie pour tous", lien: "https://www.quadruped.app/recommandations/ar_ped_pour_tous.pdf", class: "logoRecosSFAR", },
            { auteur: "D. Michelet", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "Organisation de l'ambulatoire en pédiatrie", lien: "https://www.quadruped.app/recommandations/ambulatoire_pediatrie.pdf", class: "logoRecosSFAR", },
            { auteur: "F. Veyckemans", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "Comment gérer l'analgésie post-opératoire de l'enfant et en fonction de quoi ?", lien: "https://www.quadruped.app/recommandations/analgesie_post_op_pediatrie.pdf", class: "logoRecosSFAR", },
            { auteur: "C. Lejus-Bourdeau, N. Grillot, M. Azama", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "Bilan pré-opératoire en pédiatrie : pour qui et pourquoi ?", lien: "https://www.quadruped.app/recommandations/bilan_preop_pediatrie.pdf", class: "logoRecosSFAR", },
            { auteur: "F. Michel", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "Indicateurs de complications post-opératoires en anesthésie pédiatrique", lien: "https://www.quadruped.app/recommandations/complications_post_op.pdf", class: "logoRecosSFAR", },
            { auteur: "N. Salvi, N. Leboulanger , G. Orliaguet", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "L'urgence hémorragique post-opératoire : algorithme de gestion", lien: "https://www.quadruped.app/recommandations/hemorragie_pediatrie.pdf", class: "logoRecosSFAR", },
            { auteur: "M. F. Hurtaud-Roux, A. Vincenot, D. Lasne", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "L'hémostase en pédiatrie, ses particularités, les principales pathologies hémorragiques et leur gestion", lien: "https://www.quadruped.app/recommandations/hemostase_pediatrie.pdf", class: "logoRecosSFAR", },
            { auteur: "A. Laffargue", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "Le syndrome d'apnée obstructive du sommeil de l'enfant", lien: "https://www.quadruped.app/recommandations/saos_pediatrie.pdf", class: "logoRecosSFAR", },
            { auteur: "S. Dahmani", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "L'enfant enrhumé : je récuse ? j'endors ?", lien: "https://www.quadruped.app/recommandations/strategie_enfant_enrhume.pdf", class: "logoRecosSFAR", },
            { auteur: "J. M. Devys", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Pub. in Anesthésie & Réanimation", soustitre: "Les voies aériennes en pédiatrie", lien: "https://www.quadruped.app/recommandations/vas_pediatrie.pdf", class: "logoRecosSFAR", },
            { auteur: "HAS", logo: "/assets/imgs/logoHAS.png", datepublication: "2014", titre: "Agence nationale de sureté du médicament", soustitre: "Bonnes pratiques transfusionnelles", lien: "https://www.has-sante.fr/upload/docs/application/pdf/2015-02/transfusion_de_globules_rouges_homologues_-_produits_indications_alternatives_-_recommandations.pdf", class: "logoRecosHAS", },
            { auteur: "SFAR", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Recommandations formalisées d'experts", soustitre: "Gestion des voies aériennes de l'enfant", lien: "https://sfar.org/wp-content/uploads/2019/10/rfe-gestion-des-voies-aeriennes-de-lenfant.pdf", class: "logoRecosSFAR", },
            { auteur: "SFAR", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Recommandations formalisées d'experts", soustitre: "Curarisation et décurarisation en anesthésie", lien: "https://sfar.org/wp-content/uploads/2018/10/2_RFE-CURARE-3.pdf", class: "logoRecosSFAR", },
            { auteur: "SFAR", logo: "/assets/imgs/logoSFAR.png", datepublication: "2018", titre: "Recommandations formalisées d'experts", soustitre: "Hypothermie per-opératoire accidentelle", lien: "https://sfar.org/wp-content/uploads/2018/09/2_RFE-Hypothermie-Version-Finale-_-Validee-CRC120618.pdf", class: "logoRecosSFAR", },
        ];
    }
    RecommandationsPage.prototype.menuToggle = function () {
        this.menu.open();
    };
    ;
    RecommandationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecommandationsPage');
    };
    RecommandationsPage.prototype.openWebpage = function (index) {
        window.open(this.recommandations[index].lien, '_system');
    };
    RecommandationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommandations',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\recommandations\recommandations.html"*/'<ion-header><br>\n\n  <div class="header">  \n      Recommandations</div> \n      <p padding>Cliquer sur une recommandation pour l\'ouvrir dans le navigateur.</p>\n    </ion-header>\n\n      <ion-content>\n\n  <ion-card (click)="openWebpage(index)" class="drogueContainer" *ngFor="let reco of recommandations, let index = index">\n    <ion-card-content  class="cardRecos">\n      <img class="{{reco.class}}" src="{{reco.logo}}">\n    <div class="headerRecos">\n     <b> {{reco.auteur}} {{reco.datepublication}} </b>\n    </div>\n    <div class="contentRecos">\n      <b>{{reco.titre}}</b>\n      <br>\n      {{reco.soustitre}}\n      <br>\n    </div>\n    \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\recommandations\recommandations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], RecommandationsPage);
    return RecommandationsPage;
}());

//# sourceMappingURL=recommandations.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_medicaments__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedicamentsPage = /** @class */ (function () {
    function MedicamentsPage(navCtrl, navParams, storage, alertController, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.dataService = dataService;
        this.searchTerm = "";
        this.searchTermIndication = "";
        this.searchBarType = false;
    }
    MedicamentsPage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
        this.dataService.orderMedicaments();
        console.log('medicaments rangés par ordre alphabétique');
    };
    MedicamentsPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
        this.dataService.orderMedicaments();
    };
    ;
    MedicamentsPage.prototype.setFilteredItems = function () {
        this.medicaments = this.dataService.filterMedicaments(this.searchTerm);
    };
    ;
    MedicamentsPage.prototype.setFilteredIndication = function () {
        this.medicaments = this.dataService.filterIndication(this.searchTermIndication);
    };
    MedicamentsPage.prototype.displayMedicament = function (index) {
        this.medicaments[index].isShown = !this.medicaments[index].isShown;
    };
    ;
    MedicamentsPage.prototype.toggleSearchBars = function () {
        this.searchBarType = !this.searchBarType;
    };
    MedicamentsPage.prototype.openVidal = function (index) {
        window.open(this.medicaments[index].lien, '_system');
    };
    MedicamentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicaments',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\medicaments\medicaments.html"*/'  <ion-header>\n    <br>\n    Médicaments \n    <div padding>Les posologies proposées sont envisagées pour la <b>pédiatrie</b> uniquement.\n    <br>Légende : \n    <ion-chip class="indicationChip">\n      <ion-label>Indication</ion-label>\n    </ion-chip>\n    <ion-chip class="classeMedicamenteuseChip">\n      <ion-label>Classe</ion-label>\n    </ion-chip>\n    <ion-chip class="voieAdminChip">\n      <ion-label>Voie</ion-label>\n    </ion-chip> \n    <ion-chip class="AMMChip">\n      <ion-label>AMM</ion-label>\n    </ion-chip></div>\n    <ion-toolbar>\n      <ion-searchbar *ngIf = "!this.searchBarType"\n      class="specialiteSearchbar"\n      [(ngModel)]="searchTerm"\n      (ionChange)="setFilteredItems()"\n      placeholder="Nom..."\n      inputmode="text">\n    </ion-searchbar><br *ngIf = "!this.searchBarType"><ion-icon *ngIf = "!this.searchBarType" zoom:1.5 name="repeat" (click)="toggleSearchBars()"></ion-icon>\n\n    <ion-searchbar *ngIf = "this.searchBarType"\n    class="specialiteSearchbar"\n    [(ngModel)]="searchTermIndication"\n    (ionChange)="setFilteredIndication()"\n    placeholder="Indication..."\n    inputmode="text"\n    ></ion-searchbar><br *ngIf = "this.searchBarType"><ion-icon *ngIf = "this.searchBarType" zoom:1.5 name="repeat" (click)="toggleSearchBars()"></ion-icon>\n\n  </ion-toolbar> \n    </ion-header>\n\n    <ion-content>\n\n\n\n  <ion-list>\n    <ion-card class="medicamentContainer" *ngFor="let card of medicaments, let index = index" [attr.data-index]="index">\n      \n      <div class="medicamentTitle" padding (click)="displayMedicament(index)"> {{card.title}}\n      </div>\n      <img class="logoVidal" (click)="openVidal(index)" src="/assets/imgs/logo-vidal.png">\n    \n      \n      \n\n      <ion-card-content class="medicamentsubContainer" *ngIf="card.isShown">\n        <br> <br> <br>\n        <div class="commentMedicament">\n          <ion-chip *ngIf="card.indication" class="indicationChip">\n            <ion-label>{{card.indication}}</ion-label>\n          </ion-chip>\n          <ion-chip *ngIf="card.indication1" class="indicationChip">\n            <ion-label>{{card.indication1}}</ion-label>\n          </ion-chip>\n          <ion-chip *ngIf="card.indication2" class="indicationChip">\n            <ion-label>{{card.indication2}}</ion-label>\n          </ion-chip>\n          <ion-chip *ngIf="card.classeMed" class="classeMedicamenteuseChip">\n            <ion-label>{{card.classeMed}}</ion-label>\n          </ion-chip>\n          <ion-chip *ngIf="card.voieAdmin" class="voieAdminChip">\n            <ion-label>{{card.voieAdmin}}</ion-label>\n          </ion-chip>\n          <ion-chip *ngIf="card.voieAdmin1" class="voieAdminChip">\n            <ion-label>{{card.voieAdmin1}}</ion-label>\n          </ion-chip>\n          <ion-chip *ngIf="card.AMM" class="AMMChip">\n            <ion-label>{{card.AMM}}</ion-label>\n          </ion-chip>\n\n        </div>\n\n        <div class="presentationMedicament">\n          <ul>\n            <li *ngIf="card.presentation">Présentation : {{card.presentation}}</li>\n            <li *ngIf="card.posologie">Posologie : {{card.posologie}}</li>\n            <li *ngIf="card.posologie1">Posologie alternative : {{card.posologie1}}</li>\n\n    \n          </ul>\n        </div>\n      \n\n        <div class="commentMedicament">\n          <ul>\n            <li *ngIf="card.reconstitution">Reconstitution : {{card.reconstitution}}</li>\n\n            <li *ngIf="card.dilution">Dilution : {{card.dilution}}</li>\n\n            <li *ngIf="card.administration">Administration : {{card.administration}}</li>\n\n            <li *ngIf="card.remarques">Remarques : {{card.remarques}}</li>\n          </ul>\n        </div>\n        \n      </ion-card-content>\n\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\medicaments\medicaments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_medicaments__["a" /* ServiceDataProvider */]])
    ], MedicamentsPage);
    return MedicamentsPage;
}());

;
//# sourceMappingURL=medicaments.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(509);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service_data_liste_medicaments__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_accueil_accueil__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modules_options_options__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modules_plateau_induction_plateau_induction__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modules_plateau_vas_plateau_vas__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_modules_gestion_fluides_gestion_fluides__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modules_antalgie_antalgie__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modules_urgence_urgence__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modules_entretien_anesth_entretien_anesth__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modules_loco_regionale_loco_regionale__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_chirurgies_extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_main_pages_medicaments_medicaments__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_main_pages_protocoles_protocoles__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_main_pages_recommandations_recommandations__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_modules_monitorage_monitorage__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modules_courbes_courbes__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modules_antibioprophylaxie_antibioprophylaxie__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_main_pages_scores_scores__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_main_pages_info_info__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_chirurgies_scoliose_scoliose__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_modules_sauvegarde_patient_sauvegarde_patient__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_main_main__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_pages_dispositifs_ani_ani__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modules_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modules_plateau_vas_plateau_vas__["a" /* PlateauVasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modules_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modules_antalgie_antalgie__["a" /* AntalgiePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modules_urgence_urgence__["a" /* UrgencePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modules_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_main_pages_medicaments_medicaments__["a" /* MedicamentsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_modules_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chirurgies_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_chirurgies_scoliose_scoliose__["a" /* ScoliosePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_main_pages_protocoles_protocoles__["a" /* ProtocolesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_main_pages_recommandations_recommandations__["a" /* RecommandationsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modules_monitorage_monitorage__["a" /* MonitoragePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modules_courbes_courbes__["a" /* CourbesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modules_antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_main_pages_scores_scores__["a" /* ScoresPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_main_pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_modules_sauvegarde_patient_sauvegarde_patient__["a" /* SauvegardePatientPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_pages_dispositifs_ani_ani__["a" /* AniPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: 'retour',
                    iconMode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modules_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modules_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modules_plateau_vas_plateau_vas__["a" /* PlateauVasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modules_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modules_antalgie_antalgie__["a" /* AntalgiePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modules_urgence_urgence__["a" /* UrgencePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modules_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_main_pages_medicaments_medicaments__["a" /* MedicamentsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_modules_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chirurgies_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_chirurgies_scoliose_scoliose__["a" /* ScoliosePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_main_pages_protocoles_protocoles__["a" /* ProtocolesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_main_pages_recommandations_recommandations__["a" /* RecommandationsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modules_monitorage_monitorage__["a" /* MonitoragePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modules_courbes_courbes__["a" /* CourbesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modules_antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_main_pages_scores_scores__["a" /* ScoresPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_main_pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_modules_sauvegarde_patient_sauvegarde_patient__["a" /* SauvegardePatientPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_pages_dispositifs_ani_ani__["a" /* AniPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_service_data_liste_medicaments__["a" /* ServiceDataProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            ],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 225,
	"./af.js": 225,
	"./ar": 226,
	"./ar-dz": 227,
	"./ar-dz.js": 227,
	"./ar-kw": 228,
	"./ar-kw.js": 228,
	"./ar-ly": 229,
	"./ar-ly.js": 229,
	"./ar-ma": 230,
	"./ar-ma.js": 230,
	"./ar-sa": 231,
	"./ar-sa.js": 231,
	"./ar-tn": 232,
	"./ar-tn.js": 232,
	"./ar.js": 226,
	"./az": 233,
	"./az.js": 233,
	"./be": 234,
	"./be.js": 234,
	"./bg": 235,
	"./bg.js": 235,
	"./bm": 236,
	"./bm.js": 236,
	"./bn": 237,
	"./bn-bd": 238,
	"./bn-bd.js": 238,
	"./bn.js": 237,
	"./bo": 239,
	"./bo.js": 239,
	"./br": 240,
	"./br.js": 240,
	"./bs": 241,
	"./bs.js": 241,
	"./ca": 242,
	"./ca.js": 242,
	"./cs": 243,
	"./cs.js": 243,
	"./cv": 244,
	"./cv.js": 244,
	"./cy": 245,
	"./cy.js": 245,
	"./da": 246,
	"./da.js": 246,
	"./de": 247,
	"./de-at": 248,
	"./de-at.js": 248,
	"./de-ch": 249,
	"./de-ch.js": 249,
	"./de.js": 247,
	"./dv": 250,
	"./dv.js": 250,
	"./el": 251,
	"./el.js": 251,
	"./en-au": 252,
	"./en-au.js": 252,
	"./en-ca": 253,
	"./en-ca.js": 253,
	"./en-gb": 254,
	"./en-gb.js": 254,
	"./en-ie": 255,
	"./en-ie.js": 255,
	"./en-il": 256,
	"./en-il.js": 256,
	"./en-in": 257,
	"./en-in.js": 257,
	"./en-nz": 258,
	"./en-nz.js": 258,
	"./en-sg": 259,
	"./en-sg.js": 259,
	"./eo": 260,
	"./eo.js": 260,
	"./es": 261,
	"./es-do": 262,
	"./es-do.js": 262,
	"./es-mx": 263,
	"./es-mx.js": 263,
	"./es-us": 264,
	"./es-us.js": 264,
	"./es.js": 261,
	"./et": 265,
	"./et.js": 265,
	"./eu": 266,
	"./eu.js": 266,
	"./fa": 267,
	"./fa.js": 267,
	"./fi": 268,
	"./fi.js": 268,
	"./fil": 269,
	"./fil.js": 269,
	"./fo": 270,
	"./fo.js": 270,
	"./fr": 271,
	"./fr-ca": 272,
	"./fr-ca.js": 272,
	"./fr-ch": 273,
	"./fr-ch.js": 273,
	"./fr.js": 271,
	"./fy": 274,
	"./fy.js": 274,
	"./ga": 275,
	"./ga.js": 275,
	"./gd": 276,
	"./gd.js": 276,
	"./gl": 277,
	"./gl.js": 277,
	"./gom-deva": 278,
	"./gom-deva.js": 278,
	"./gom-latn": 279,
	"./gom-latn.js": 279,
	"./gu": 280,
	"./gu.js": 280,
	"./he": 281,
	"./he.js": 281,
	"./hi": 282,
	"./hi.js": 282,
	"./hr": 283,
	"./hr.js": 283,
	"./hu": 284,
	"./hu.js": 284,
	"./hy-am": 285,
	"./hy-am.js": 285,
	"./id": 286,
	"./id.js": 286,
	"./is": 287,
	"./is.js": 287,
	"./it": 288,
	"./it-ch": 289,
	"./it-ch.js": 289,
	"./it.js": 288,
	"./ja": 290,
	"./ja.js": 290,
	"./jv": 291,
	"./jv.js": 291,
	"./ka": 292,
	"./ka.js": 292,
	"./kk": 293,
	"./kk.js": 293,
	"./km": 294,
	"./km.js": 294,
	"./kn": 295,
	"./kn.js": 295,
	"./ko": 296,
	"./ko.js": 296,
	"./ku": 297,
	"./ku.js": 297,
	"./ky": 298,
	"./ky.js": 298,
	"./lb": 299,
	"./lb.js": 299,
	"./lo": 300,
	"./lo.js": 300,
	"./lt": 301,
	"./lt.js": 301,
	"./lv": 302,
	"./lv.js": 302,
	"./me": 303,
	"./me.js": 303,
	"./mi": 304,
	"./mi.js": 304,
	"./mk": 305,
	"./mk.js": 305,
	"./ml": 306,
	"./ml.js": 306,
	"./mn": 307,
	"./mn.js": 307,
	"./mr": 308,
	"./mr.js": 308,
	"./ms": 309,
	"./ms-my": 310,
	"./ms-my.js": 310,
	"./ms.js": 309,
	"./mt": 311,
	"./mt.js": 311,
	"./my": 312,
	"./my.js": 312,
	"./nb": 313,
	"./nb.js": 313,
	"./ne": 314,
	"./ne.js": 314,
	"./nl": 315,
	"./nl-be": 316,
	"./nl-be.js": 316,
	"./nl.js": 315,
	"./nn": 317,
	"./nn.js": 317,
	"./oc-lnc": 318,
	"./oc-lnc.js": 318,
	"./pa-in": 319,
	"./pa-in.js": 319,
	"./pl": 320,
	"./pl.js": 320,
	"./pt": 321,
	"./pt-br": 322,
	"./pt-br.js": 322,
	"./pt.js": 321,
	"./ro": 323,
	"./ro.js": 323,
	"./ru": 324,
	"./ru.js": 324,
	"./sd": 325,
	"./sd.js": 325,
	"./se": 326,
	"./se.js": 326,
	"./si": 327,
	"./si.js": 327,
	"./sk": 328,
	"./sk.js": 328,
	"./sl": 329,
	"./sl.js": 329,
	"./sq": 330,
	"./sq.js": 330,
	"./sr": 331,
	"./sr-cyrl": 332,
	"./sr-cyrl.js": 332,
	"./sr.js": 331,
	"./ss": 333,
	"./ss.js": 333,
	"./sv": 334,
	"./sv.js": 334,
	"./sw": 335,
	"./sw.js": 335,
	"./ta": 336,
	"./ta.js": 336,
	"./te": 337,
	"./te.js": 337,
	"./tet": 338,
	"./tet.js": 338,
	"./tg": 339,
	"./tg.js": 339,
	"./th": 340,
	"./th.js": 340,
	"./tk": 341,
	"./tk.js": 341,
	"./tl-ph": 342,
	"./tl-ph.js": 342,
	"./tlh": 343,
	"./tlh.js": 343,
	"./tr": 344,
	"./tr.js": 344,
	"./tzl": 345,
	"./tzl.js": 345,
	"./tzm": 346,
	"./tzm-latn": 347,
	"./tzm-latn.js": 347,
	"./tzm.js": 346,
	"./ug-cn": 348,
	"./ug-cn.js": 348,
	"./uk": 349,
	"./uk.js": 349,
	"./ur": 350,
	"./ur.js": 350,
	"./uz": 351,
	"./uz-latn": 352,
	"./uz-latn.js": 352,
	"./uz.js": 351,
	"./vi": 353,
	"./vi.js": 353,
	"./x-pseudo": 354,
	"./x-pseudo.js": 354,
	"./yo": 355,
	"./yo.js": 355,
	"./zh-cn": 356,
	"./zh-cn.js": 356,
	"./zh-hk": 357,
	"./zh-hk.js": 357,
	"./zh-mo": 358,
	"./zh-mo.js": 358,
	"./zh-tw": 359,
	"./zh-tw.js": 359
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 532;

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_plateau_induction_plateau_induction__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_plateau_vas_plateau_vas__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_entretien_anesth_entretien_anesth__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_gestion_fluides_gestion_fluides__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_loco_regionale_loco_regionale__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_antalgie_antalgie__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_urgence_urgence__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_options_options__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_monitorage_monitorage__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_courbes_courbes__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser_ngx__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_antibioprophylaxie_antibioprophylaxie__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_pages_scores_scores__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_pages_protocoles_protocoles__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_sauvegarde_patient_sauvegarde_patient__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




















var AccueilPage = /** @class */ (function () {
    function AccueilPage(viewCtrl, modalCtrl, app, navCtrl, navParams, storage, InAppBrowser, pickerController, ToastController, popoverController, menu, alertController) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.InAppBrowser = InAppBrowser;
        this.pickerController = pickerController;
        this.ToastController = ToastController;
        this.popoverController = popoverController;
        this.menu = menu;
        this.alertController = alertController;
        // make AccueilPage the root (or first) page
        this.rootPage = AccueilPage_1;
        this.isShownFooter = true;
        this.biometrie = { Kg: "", Gr: "", mois: "", ans: "" };
        this.AgeNum = 0;
        this.PoidsNum = 0;
        this.ageannees = 0;
        this.agemois = 0;
        this.agesemaines = 0;
        this.ageLecture = 0;
        this.poidskilogrammes = 0;
        this.poidsgrammes = 0;
        this.sexeMF = "Fille";
        this.Prenom = "";
        this.MorceauChoisi = "Choisir...";
        this.musicPlaying = false;
        this.audio = new Audio();
        this.timeBegan = null;
        this.timeStopped = null;
        this.stoppedDuration = 0;
        this.started = null;
        this.running = false;
        this.blankTime = "00:00:00";
        this.time = "00:00:00";
        this.NewPatient = [];
        this.PatientsSauvegardes = [];
    }
    AccueilPage_1 = AccueilPage;
    AccueilPage.prototype.menuToggle = function () {
        this.menu.open();
        this.stopMusic();
    };
    ;
    /** ----------------------------  MODULE ENREGISTREMENT  ----------------------------------------------------------------- */
    AccueilPage.prototype.enregistrer = function () {
        var _this = this;
        var PrenomPatientAlert = this.alertController.create({
            cssClass: 'alerte',
            title: 'Prénom ?',
            message: "Renseignez un prénom pour le patient afin d'enregistrer les données.",
            inputs: [
                {
                    name: 'Prenom',
                    type: 'text',
                    placeholder: 'Renseigner...'
                },
            ],
            buttons: [
                {
                    text: "Enregistrer",
                    handler: function (AlertData) {
                        _this.Prenom = AlertData.Prenom;
                        _this.NewPatient = [
                            {
                                Prenom: AlertData.Prenom,
                                Age: _this.AgeNum,
                                Poids: _this.PoidsNum,
                                Taille: _this.Taille,
                                Sexe: _this.sexeMF,
                                DureeJeune: _this.DureeJeune,
                                EstomacPlein: _this.EstomacOuiNon,
                                Allergie: _this.Allergie,
                            }
                        ];
                        if (!_this.PatientsSauvegardes) {
                            _this.PatientsSauvegardes = _this.NewPatient;
                        }
                        else {
                            _this.PatientsSauvegardes = _this.PatientsSauvegardes.concat(_this.NewPatient);
                        }
                        ;
                        console.log(_this.PatientsSauvegardes);
                        _this.storage.set('SavedPatients', _this.PatientsSauvegardes);
                    }
                },
                {
                    text: "Annuler",
                    handler: function () {
                        return;
                    }
                }
            ],
        });
        PrenomPatientAlert.present();
    };
    ;
    AccueilPage.prototype.openSauvegarde = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__modules_sauvegarde_patient_sauvegarde_patient__["a" /* SauvegardePatientPage */]);
    };
    /** ----------------------------  RENSEIGNER AGE ET POIDS ou RENSEIGNER TAILLE ----------------------------------------------------------------- */
    AccueilPage.prototype.alertAgePoidsTaille = function () {
        var AgePoidsTailleAlert = this.alertController.create({
            cssClass: 'alerte',
            title: 'Données manquantes',
            message: "Renseignez l'âge, le poids et la taille de votre patient pour accéder aux données de biométrie.",
            buttons: [
                {
                    text: "OK",
                    handler: function () {
                        return;
                    }
                }
            ],
        });
        AgePoidsTailleAlert.present();
    };
    ;
    AccueilPage.prototype.alertPoidsAge = function () {
        var AgePoidsAlert = this.alertController.create({
            cssClass: 'alerte',
            title: 'Données manquantes',
            message: "Renseignez l'âge et le poids de votre patient pour accéder à ce module.",
            buttons: [
                {
                    text: "OK",
                    handler: function () {
                        return;
                    }
                }
            ],
        });
        AgePoidsAlert.present();
    };
    ;
    /*** ----------------------------------------------------------MUSIQUE----------------------------------------------------  */
    AccueilPage.prototype.selectMusic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            buttons: [
                                {
                                    text: "Annuler",
                                    role: 'cancel',
                                },
                                {
                                    text: 'Valider',
                                    handler: function (value) {
                                        console.log(value.morceau.value);
                                        _this.MorceauChoisi = value.morceau.value;
                                        console.log(_this.MorceauChoisi);
                                    }
                                }
                            ],
                            columns: [
                                { name: "morceau",
                                    options: [
                                        { text: 'Ha les crocodiles', value: 'Crocodiles' },
                                        { text: 'Un éléphant qui se balançait', value: 'Elephants' },
                                        { text: 'Une souris verte', value: 'Souris verte' },
                                    ]
                                },
                            ]
                        };
                        return [4 /*yield*/, this.pickerController.create(options)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AccueilPage.prototype.playMusic = function () {
        console.log(this.MorceauChoisi);
        if (this.MorceauChoisi == "Choisir...") {
            var musicAlert = this.alertController.create({
                cssClass: 'alerte',
                title: 'Choisir une musique',
                message: 'Choisissez un morceau parmi les classiques intemporels proposés !',
                buttons: [
                    {
                        text: "OK",
                        handler: function () {
                            return;
                        }
                    }
                ],
            });
            musicAlert.present();
        }
        else if (this.MorceauChoisi == "Elephants") {
            this.musicPlaying = true;
            this.audio.src = "/assets/music/elephant.mp3";
        }
        else if (this.MorceauChoisi == "Crocodiles") {
            this.musicPlaying = true;
            this.audio.src = "/assets/music/crocodiles.mp3";
        }
        else if (this.MorceauChoisi == "Souris verte") {
            this.musicPlaying = true;
            this.audio.src = "/assets/music/sourisverte.mp3";
        }
        ;
        this.audio.load();
        this.audio.play();
    };
    ;
    AccueilPage.prototype.stopMusic = function () {
        this.musicPlaying = false;
        this.audio.pause();
    };
    ;
    /*** ----------------------------------------------------------TIMER----------------------------------------------------  */
    AccueilPage.prototype.start = function () {
        if (this.running)
            return;
        if (this.timeBegan === null) {
            this.reset();
            this.timeBegan = new Date();
        }
        if (this.timeStopped !== null) {
            var newStoppedDuration = (+new Date() - this.timeStopped);
            this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
        }
        this.started = setInterval(this.clockRunning.bind(this), 10);
        this.running = true;
    };
    AccueilPage.prototype.stop = function () {
        this.running = false;
        this.timeStopped = new Date();
        clearInterval(this.started);
    };
    AccueilPage.prototype.reset = function () {
        this.running = false;
        clearInterval(this.started);
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        this.time = this.blankTime;
    };
    AccueilPage.prototype.zeroPrefix = function (num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    };
    AccueilPage.prototype.clockRunning = function () {
        var currentTime = new Date();
        var timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration);
        var hour = timeElapsed.getUTCHours();
        var min = timeElapsed.getUTCMinutes();
        var sec = timeElapsed.getUTCSeconds();
        this.time =
            this.zeroPrefix(hour, 2) + ":" +
                this.zeroPrefix(min, 2) + ":" +
                this.zeroPrefix(sec, 2);
    };
    ;
    /* --------------------------------------------------------- END TIMER ------------------------------------------ */
    AccueilPage.prototype.ionViewDidLoad = function () {
        this.toastCGU();
    };
    ;
    AccueilPage.prototype.toastCGU = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ToastController.create({
                            message: "En utilisant l'application, vous acceptez les conditions générales d'utilisation.",
                            position: 'Bottom',
                            showCloseButton: true,
                            closeButtonText: "OK.",
                            duration: 5000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AccueilPage.prototype.showPickerAge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            buttons: [
                                {
                                    text: "Annuler",
                                    role: 'cancel',
                                },
                                {
                                    text: 'Valider',
                                    handler: function (value) {
                                        console.log(value.annees);
                                        _this.ageannees = value.annees.value;
                                        _this.agemois = value.mois.value;
                                        _this.agesemaines = value.semaines.value;
                                        console.log("âge de ", _this.ageannees, " années, ", _this.agemois, " mois, ", _this.agesemaines, " semaines.");
                                        _this.AgeNum = _this.ageannees * 12 + _this.agemois + Math.round((_this.agesemaines / 4) * 10) / 10;
                                        console.log("âge total en mois : ", _this.AgeNum);
                                        _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
                                        _this.storage.set("AgeNum", _this.AgeNum);
                                        _this.storage.set("ageLecture", _this.ageLecture);
                                    }
                                }
                            ],
                            columns: [
                                { name: "annees",
                                    prefix: "Ans",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                        { text: '10', value: 10 },
                                        { text: '11', value: 11 },
                                        { text: '12', value: 12 },
                                        { text: '13', value: 13 },
                                        { text: '14', value: 14 },
                                        { text: '15', value: 15 },
                                        { text: '16', value: 16 },
                                        { text: '17', value: 17 },
                                        { text: '18', value: 18 },
                                    ]
                                },
                                { name: "mois",
                                    prefix: "Mois",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                        { text: '10', value: 10 },
                                        { text: '11', value: 11 },
                                        { text: '12', value: 12 },
                                        { text: '13', value: 13 },
                                        { text: '14', value: 14 },
                                        { text: '15', value: 15 },
                                        { text: '16', value: 16 },
                                        { text: '17', value: 17 },
                                        { text: '18', value: 18 },
                                    ]
                                },
                                { name: "semaines",
                                    prefix: "Sem.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                        { text: '10', value: 10 },
                                        { text: '11', value: 11 },
                                        { text: '12', value: 12 },
                                        { text: '13', value: 13 },
                                        { text: '14', value: 14 },
                                        { text: '15', value: 15 },
                                        { text: '16', value: 16 },
                                        { text: '17', value: 17 },
                                        { text: '18', value: 18 },
                                    ]
                                },
                            ]
                        };
                        return [4 /*yield*/, this.pickerController.create(options)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccueilPage.prototype.showPickerPoids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            buttons: [
                                {
                                    text: "Annuler",
                                    role: 'cancel'
                                },
                                {
                                    text: 'Valider',
                                    handler: function (value) {
                                        _this.poidskilogrammes = value.kilogrammes.value + value.DixKilogrammes.value;
                                        _this.poidsgrammes = value.grammes.value;
                                        _this.PoidsNum = _this.poidskilogrammes + Math.round((_this.poidsgrammes / 1000) * 10) / 10;
                                        console.log(_this.PoidsNum);
                                        _this.storage.set("PoidsNum", _this.PoidsNum);
                                    }
                                }
                            ],
                            columns: [
                                { name: "DixKilogrammes",
                                    prefix: "Kg.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '10', value: 10 },
                                        { text: '20', value: 20 },
                                        { text: '30', value: 30 },
                                        { text: '40', value: 40 },
                                        { text: '50', value: 50 },
                                        { text: '60', value: 60 },
                                        { text: '70', value: 70 },
                                        { text: '80', value: 80 },
                                        { text: '90', value: 90 },
                                    ]
                                },
                                { name: "kilogrammes",
                                    prefix: "Kg.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                    ]
                                },
                                { name: "grammes",
                                    prefix: "g.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '100', value: 100 },
                                        { text: '200', value: 200 },
                                        { text: '300', value: 300 },
                                        { text: '400', value: 400 },
                                        { text: '500', value: 500 },
                                        { text: '600', value: 600 },
                                        { text: '700', value: 700 },
                                        { text: '800', value: 800 },
                                        { text: '900', value: 900 },
                                    ]
                                },
                            ]
                        };
                        return [4 /*yield*/, this.pickerController.create(options)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccueilPage.prototype.showPickerTaille = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            buttons: [
                                {
                                    text: "Annuler",
                                    role: 'cancel'
                                },
                                {
                                    text: 'Valider',
                                    handler: function (value) {
                                        _this.TailleMetre = value.metre.value;
                                        _this.TailleCentimetre = value.centimetre.value;
                                        _this.Taille = Math.floor(_this.TailleMetre * 100) + Math.floor(_this.TailleCentimetre);
                                        console.log(_this.PoidsNum);
                                        _this.storage.set("Taille", _this.Taille);
                                    }
                                }
                            ],
                            columns: [
                                { name: "metre",
                                    prefix: "m.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '0,10', value: 0.1 },
                                        { text: '0,20', value: 0.2 },
                                        { text: '0,30', value: 0.3 },
                                        { text: '0,40', value: 0.4 },
                                        { text: '0,50', value: 0.5 },
                                        { text: '0,60', value: 0.6 },
                                        { text: '0,70', value: 0.7 },
                                        { text: '0,80', value: 0.8 },
                                        { text: '0,90', value: 0.9 },
                                        { text: '1', value: 1 },
                                        { text: '1,10', value: 1.1 },
                                        { text: '1,20', value: 1.2 },
                                        { text: '1,30', value: 1.3 },
                                        { text: '1,40', value: 1.4 },
                                        { text: '1,50', value: 1.5 },
                                        { text: '1,60', value: 1.6 },
                                        { text: '1,70', value: 1.7 },
                                        { text: '1,80', value: 1.8 },
                                        { text: '1,90', value: 1.9 },
                                        { text: '2', value: 2 },
                                    ]
                                },
                                { name: "centimetre",
                                    prefix: "Cm.",
                                    options: [
                                        { text: '0', value: 0 },
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                    ]
                                },
                            ]
                        };
                        return [4 /*yield*/, this.pickerController.create(options)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* ----------------------------RECUPERATION DES DONNEES ANTERIEURES LE CAS ECHEANT---------------------------------------------------------------------------- */
    AccueilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
        });
        this.storage.get('PoidsNum').then(function (Poids) {
            _this.PoidsNum = Poids;
        });
        this.storage.get('EstomacPlein').then(function (estomacplein) {
            _this.EstomacPlein = estomacplein;
            if (_this.EstomacPlein == true) {
                _this.EstomacOuiNon = "plein";
            }
            else {
                _this.EstomacOuiNon = "vide";
            }
        });
        this.storage.get('DureeJeune').then(function (dureejeune) {
            _this.DureeJeune = dureejeune;
        });
        this.storage.get('Allergie').then(function (allergie) {
            _this.Allergie = allergie;
        });
        this.storage.get('sexeMF').then(function (sexe) {
            _this.sexeMF = sexe;
            if (!_this.sexeMF) {
                _this.sexeMF = "Fille";
            }
            else {
                _this.sexeMF == sexe;
            }
            ;
            _this.storage.set('sexeMF', _this.sexeMF);
        });
        this.storage.get('Taille').then(function (Taille) {
            _this.Taille = Taille;
        });
        this.storage.get('Prenom').then(function (Prenom) {
            _this.Prenom = Prenom;
        });
        this.storage.get('SavedPatients').then(function (SavedPatients) {
            _this.PatientsSauvegardes = SavedPatients;
        });
        console.log("patient chargés = ", this.PatientsSauvegardes);
    };
    AccueilPage.prototype.SetSexeFille = function () {
        this.sexeMF = "Fille";
        this.storage.set("sexeMF", this.sexeMF);
        console.log("sexe enregistré : ", this.sexeMF);
    };
    ;
    AccueilPage.prototype.SetSexeGarcon = function () {
        this.sexeMF = "Garçon";
        this.storage.set("sexeMF", this.sexeMF);
        console.log("sexe enregistré : ", this.sexeMF);
    };
    ;
    /* ----------------------------BOUTONS DE NAVIGATION---------------------------------------------------------------------------- */
    AccueilPage.prototype.displayInduction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modules_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */]);
    };
    ;
    AccueilPage.prototype.displayVAS = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modules_plateau_vas_plateau_vas__["a" /* PlateauVasPage */]);
    };
    ;
    AccueilPage.prototype.displayEntretien = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__modules_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */]);
    };
    ;
    AccueilPage.prototype.displayGestionFluides = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__modules_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */]);
    };
    ;
    AccueilPage.prototype.displayALR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__modules_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */]);
    };
    ;
    AccueilPage.prototype.displayPostop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__modules_antalgie_antalgie__["a" /* AntalgiePage */]);
    };
    ;
    AccueilPage.prototype.displayUrgences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__modules_urgence_urgence__["a" /* UrgencePage */]);
    };
    ;
    AccueilPage.prototype.displayOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__modules_options_options__["a" /* OptionsPage */]);
    };
    ;
    AccueilPage.prototype.displayMonitorage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__modules_monitorage_monitorage__["a" /* MonitoragePage */]);
    };
    ;
    AccueilPage.prototype.displayCourbes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__modules_courbes_courbes__["a" /* CourbesPage */]);
    };
    ;
    AccueilPage.prototype.displayATBprophylaxie = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__modules_antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */]);
    };
    ;
    AccueilPage.prototype.displayScores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__main_pages_scores_scores__["a" /* ScoresPage */]);
    };
    ;
    AccueilPage.prototype.displayProtocoles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__main_pages_protocoles_protocoles__["a" /* ProtocolesPage */]);
    };
    /* ----------------------------BOUTON DAIDE---------------------------------------------------------------------------- */
    AccueilPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Utiliser QuadruPed',
                            message: 'Pour utiliser QuadruPed, renseignez un âge et un poids pour le patient en appuyant sur les boutons correspondant. Naviguez ensuite entre les différents onglets pour obtenir des suggestions de posologie et de stratégies. Renseignez la taille et le sexe du patient pour utiliser les données de biométrie.',
                            buttons: [
                                {
                                    text: "J'ai compris !",
                                    handler: function () {
                                        return;
                                    }
                                }
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /* ----------------------------BOUTON EFFACER---------------------------------------------------------------------------- */
    AccueilPage.prototype.effacer = function () {
        var _this = this;
        var EffacerToutAlert = this.alertController.create({
            cssClass: 'alerte',
            title: 'Tout supprimer ?',
            message: "Attention, en appuyant sur 'valider' vous supprimerez l'ensemble des données patient enregistrées.",
            buttons: [
                {
                    text: "Valider",
                    handler: function () {
                        _this.storage.clear(); /* ATTTENTION EFFACE TOUT TOTALEMENT TOUT */
                        _this.AgeNum = 0;
                        _this.ageLecture = 0;
                        _this.PoidsNum = 0;
                        _this.Taille = 0;
                        _this.sexeMF = "Fille";
                        _this.DureeJeune = 0;
                        _this.Allergie = "";
                        _this.EstomacOuiNon = "vide";
                        _this.Prenom = "";
                    }
                },
                {
                    text: "Annuler",
                    handler: function () {
                        return;
                    }
                }
            ],
        });
        EffacerToutAlert.present();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], AccueilPage.prototype, "nav", void 0);
    AccueilPage = AccueilPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\accueil\accueil.html"*/'<ion-content>\n  <div *ngIf="!Prenom" class="titleHome">  \n    QUADRUPED</div> \n    <div *ngIf="Prenom" class="titleHome">  \n      {{Prenom}}</div> \n\n    <br>\n    <br>\n\n \n \n  <ion-card class="homePagePatient">\n    <ion-card-content>\n\n      <ion-toolbar  color="turquoise" class="musicContainer">\n        <ion-buttons>\n        <ion-icon style="zoom:1.2" color="dark-turquoise" name="musical-notes"></ion-icon> \n       <p class="comment">{{MorceauChoisi}}</p>\n        \n       \n          <button (click)="selectMusic()" ion-button class="musicSelector" color="turquoise-fonce"><ion-icon style="zoom:2.0" name="disc"></ion-icon></button>\n          <button *ngIf="!musicPlaying" color="dark-turquoise" ion-button (click)="playMusic()"><ion-icon  style="zoom:1.2" name="play"></ion-icon></button>\n        <button   *ngIf="musicPlaying" color="dark-turquoise" ion-button (click)="stopMusic()"><ion-icon style="zoom:1.2" name="pause"></ion-icon></button> \n      </ion-buttons>\n      </ion-toolbar>\n\n      <ion-toolbar  color="turquoise" class="timerContainer">\n        <ion-buttons >    \n          <ion-icon style="zoom:1.2" color="dark-turquoise" name="stopwatch"></ion-icon>    \n          <br>\n          <p text-center class="timerTime">\n          {{time}}\n          </p>\n      <button  *ngIf="!running" color="dark-turquoise" ion-button (click)="start()"><ion-icon style="zoom:1.2" name="play"></ion-icon></button>\n      <button  *ngIf="running" color="dark-turquoise" ion-button (click)="stop()"><ion-icon style="zoom:1.2" name="pause"></ion-icon></button>         \n      <button ion-button (click)="reset()"><ion-icon color="dark-turquoise" style="zoom:1.2" name="refresh-circle"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n    <img class="resize" src="/assets/imgs/sleeping-baby.png"  alt="Nouveau patient"> \n    \n    <br>\n\n      <ion-toolbar class="HomeButtonContainer">\n        <ion-buttons>\n          <span class="comment" *ngIf = "!PoidsNum || !AgeNum || !Taille">Ouvrir un dossier ou les données relatives au patient :<br></span>\n          <span class="comment" *ngIf = "PoidsNum && AgeNum && Taille">Choisir parmi les modules accessibles<br></span>\n\n          <button *ngIf = "sexeMF == \'Fille\'" ion-button small color="dark-turquoise"><ion-icon name="female"></ion-icon></button>\n          <button *ngIf = "sexeMF != \'Fille\'" ion-button small color="grisclair"  (click)="SetSexeFille()"><ion-icon name="female"></ion-icon></button>\n          <button *ngIf = "sexeMF == \'Garçon\'" ion-button small color="dark-turquoise"  ><ion-icon name="male"></ion-icon></button>\n          <button *ngIf = "sexeMF != \'Garçon\'" ion-button small color="grisclair"  (click)="SetSexeGarcon()"><ion-icon name="male"></ion-icon></button>\n\n          <button solid *ngIf = "!this.AgeNum" color="dark-turquoise" ion-button  (click)="showPickerAge()">Age </button>\n          <button *ngIf = "this.AgeNum > 24" color="dark-turquoise" ion-button  (click)="showPickerAge()">{{ageLecture}} ans </button>\n          <button *ngIf = "this.AgeNum > 0 && this.AgeNum <= 24" color="dark-turquoise" ion-button  (click)="showPickerAge()">{{AgeNum}} mois</button>\n         \n          <button solid *ngIf = " !this.PoidsNum " color="dark-turquoise" ion-button  (click)="showPickerPoids()">Poids</button>\n          <button *ngIf = " this.PoidsNum " color="dark-turquoise" ion-button  (click)="showPickerPoids()">{{PoidsNum}} kg</button>\n         \n          <button solid *ngIf = " !Taille " color="turquoise-fonce" ion-button  (click)="showPickerTaille()">Taille</button>\n          <button *ngIf = " Taille " color="turquoise-fonce" ion-button  (click)="showPickerTaille()">{{Taille}} cm</button>\n\n          <button ion-button small color="dark-turquoise"  (click)="displayOptions()"><ion-icon name="options"></ion-icon></button>\n          <br> \n    </ion-buttons>\n    </ion-toolbar>\n\n\n\n  </ion-card-content>\n</ion-card>\n\n<div class="monPatient">\n<b>Options : </b> <span *ngIf=" this.EstomacOuiNon">Estomac {{EstomacOuiNon}}</span> <span *ngIf="this.DureeJeune"> - Jeûne {{DureeJeune}} h</span><span *ngIf="this.Allergie"> - Allergie : {{Allergie}}</span>\n</div>\n\n<hr>\n\n<div class="actionButtonsContainer">\n  <button ion-button color="primary"  (click)="openSauvegarde()"> <ion-icon name="filing"></ion-icon></button>\n  &nbsp;  &nbsp;  &nbsp; \n  <button ion-button  small color="primary"  (click)="enregistrer()"><ion-icon name="archive"></ion-icon></button>\n&nbsp;\n\n<button ion-button  small color="dark-turquoise"  (click)="help()"><ion-icon name="information-circle"></ion-icon></button>\n&nbsp;\n<button ion-button   small color="danger"  (click)="effacer()"><ion-icon name="trash"></ion-icon></button>\n<hr>\n</div>   \n\n  <button class="homeButtons" outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button round  color="light" (click)="alertPoidsAge()"><ion-icon name="medkit"></ion-icon> &nbsp; &nbsp;Urgences</button>\n  <button class="homeButtons" *ngIf = " this.PoidsNum && this.AgeNum " ion-button round color="warning" (click)="displayUrgences()"><ion-icon name="medkit"></ion-icon> &nbsp; &nbsp;Urgences</button>\n  <button class="homeButtons"  *ngIf = "PoidsNum && AgeNum && Taille"  ion-button round color="pastel-brown"  (click)="displayCourbes()"><ion-icon name="trending-up"></ion-icon> &nbsp; &nbsp;\n    Croissance</button>\n  <button class="homeButtons" outline *ngIf = "!PoidsNum || !AgeNum || !Taille" ion-button round color="light"  (click)="alertAgePoidsTaille()"><ion-icon name="trending-up"></ion-icon> &nbsp; &nbsp;\n    Croissance</button>\n\n    \n          <button round outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="pulse"></ion-icon> &nbsp; &nbsp; Monitorage</button>\n          <button round outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="moon"></ion-icon> &nbsp; &nbsp; Induction </button>\n          <button round outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"> <ion-icon name="analytics"></ion-icon> &nbsp; &nbsp; Voies Aériennes </button>\n          <button round outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="checkmark-circle-outline"></ion-icon> &nbsp;  Atbprophylaxie </button>\n          <button round outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="cloudy-night"></ion-icon> &nbsp; &nbsp; Entretien </button> \n    \n          <button round outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="water"></ion-icon> &nbsp; &nbsp; Apports & PSL</button>\n          <button round outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"> <ion-icon name="pin"></ion-icon> &nbsp; &nbsp;Loco-régionale</button>\n          <button round outline *ngIf = " !this.PoidsNum || !this.AgeNum " ion-button small color="light" class="homeButtons" (click)="alertPoidsAge()"><ion-icon name="alarm"></ion-icon> &nbsp; &nbsp;Réveil & SSPI</button>\n\n    \n          <button round solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayMonitorage()"><ion-icon color="dark-turquoise" name="pulse"></ion-icon> &nbsp; &nbsp; Monitorage</button>\n          <button round solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayInduction()"><ion-icon color="dark-turquoise" name="moon"></ion-icon> &nbsp; &nbsp; Induction </button>\n          <button round solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayVAS()"> <ion-icon color="dark-turquoise" name="analytics"></ion-icon> &nbsp; &nbsp; Voies Aériennes </button>\n          <button round solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayATBprophylaxie()"><ion-icon color="dark-turquoise"  name="checkmark-circle-outline"></ion-icon> &nbsp;  Atbprophylaxie </button>\n          <button round solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayEntretien()"><ion-icon color="dark-turquoise" name="cloudy-night"></ion-icon> &nbsp; &nbsp; Entretien </button> \n    \n          <button round solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayGestionFluides()"><ion-icon color="dark-turquoise" name="water"></ion-icon> &nbsp; &nbsp;Apports & PSL</button>\n          <button round solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayALR()"> <ion-icon color="dark-turquoise" name="pin"></ion-icon> &nbsp; &nbsp;Loco-régionale</button>\n          <button round solid *ngIf = " this.PoidsNum && this.AgeNum " ion-button small color="turquoise" class="homeButtons" (click)="displayPostop()"><ion-icon color="dark-turquoise" name="alarm"></ion-icon> &nbsp; &nbsp;Réveil & SSPI</button>\n\n      </ion-content>\n\n  \n\n\n  \n \n\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\accueil\accueil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PickerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AccueilPage);
    return AccueilPage;
    var AccueilPage_1;
}());

;
//# sourceMappingURL=accueil.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScoresPage = /** @class */ (function () {
    function ScoresPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.isShownVPOP = false;
        this.totalVPOP = 0;
        this.isShownScoreAnticoag = false;
        this.prophylaxieAnticoag = "Hydratation adéquate, mobilisation précoce, ablation CVC le plus tôt possible (le cas échéant).";
        this.AnticoagTotal = 0;
        this.NiveauRisqueThrombose = "faible";
        this.isShownEVENDOL = false;
        this.EVENDOLVocal = 0;
        this.EVENDOLMimique = 0;
        this.EVENDOLMouvement = 0;
        this.EVENDOLPosition = 0;
        this.EVENDOLRelation = 0;
        this.EVENDOLTotal = 0;
        this.SeuilPrescriptionEVENDOL = "Non atteint.";
        this.isShownEDIN = false;
        this.EDINVisage = 0;
        this.EDINCorps = 0;
        this.EDINSommeil = 0;
        this.EDINRelation = 0;
        this.EDINReconfort = 0;
        this.EDINTotal = 0;
        this.SeuilPrescriptionEDIN = "Non atteint.";
        this.isShownAldrete = false;
        this.totalAldrete = 0;
        this.CATAldrete = "Cocher les items du score correspondant à l'état du patient.";
        this.isShownPADSS = false;
        this.CATPADSS = "Cocher les items du score correspondant à l'état du patient.";
        this.isShownSHS = false;
        this.risqueSHS = "Répondre aux questions du score.";
        this.isShownHEMSTOP = false;
        this.risqueHEMSTOP = "Répondre aux questions du score.";
        this.isShownBromage = false;
        this.ScoresView = 1;
        this.VPOPform = [
            { val: 'Âge inférieur à 3 ans', isChecked: false, count: 0 },
            { val: 'Âge entre 3 et 6 ans', isChecked: false, count: 1 },
            { val: 'Âge entre 6 et 13 ans', isChecked: false, count: 2 },
            { val: 'Âge supérieur à 13 ans', isChecked: false, count: 1 },
            { val: 'Mal des transports', isChecked: false, count: 1 },
            { val: 'Chirurgie > 45 minutes', isChecked: false, count: 1 },
            { val: 'Chirurgie à risque : amygdales, strabisme, tympan', isChecked: false, count: 1 },
            { val: 'Réinjection de morphiniques', isChecked: false, count: 1 },
        ];
        this.AldreteForm = [
            { category: "Conscience", val: 'Réveillé et orienté', isChecked: false, count: 2 },
            { category: "", val: 'Réveillable par stimulation minime', isChecked: false, count: 1 },
            { category: "", val: 'Non réveillable par stimulation tactile', isChecked: false, count: 0 },
            { category: "Activité", val: 'Mobilité normale des extrémités', isChecked: false, count: 2 },
            { category: "", val: 'Faiblesse à la mobilité', isChecked: false, count: 1 },
            { category: "", val: 'Incapable de bouger les extrémités', isChecked: false, count: 0 },
            { category: "Respiration", val: 'Inspiration profonde possible, toux, normopnée', isChecked: false, count: 2 },
            { category: "", val: 'Tachypnée mais toux préservée', isChecked: false, count: 1 },
            { category: "", val: 'Dyspnée, pas de toux possible', isChecked: false, count: 0 },
            { category: "Hémodynamique", val: 'PAS ou PAM +/- 15% des valeurs avant induction', isChecked: false, count: 2 },
            { category: "", val: 'PAS ou PAM +/- 30% des valeurs avant induction', isChecked: false, count: 1 },
            { category: "", val: 'PAS ou PAM +/- 50% des valeurs avant induction', isChecked: false, count: 0 },
            { category: "Saturation", val: 'SpO2 > 92% en air ambiant', isChecked: false, count: 2 },
            { category: "", val: 'SpO2 > 90% en air ambiant', isChecked: false, count: 1 },
            { category: "", val: 'SpO2 < 90% en air ambiant', isChecked: false, count: 0 },
            { category: "Douleur", val: 'Pas de douleur', isChecked: false, count: 2 },
            { category: "", val: 'Douleur modérée mais contrôlée par les antalgiques', isChecked: false, count: 1 },
            { category: "", val: 'Douleur non contrôlée par les antalgiques', isChecked: false, count: 0 },
            { category: "NVPO", val: 'Pas de NVPO', isChecked: false, count: 2 },
            { category: "", val: 'Un épisode de NVPO isolé', isChecked: false, count: 1 },
            { category: "", val: 'NVPO persistants ', isChecked: false, count: 0 },
        ];
        this.PADSSForm = [
            { category: "FC & PAS", val: 'Variation < 20% par rapport au pré-opératoire', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Variation entre 20 et 40% par rapport au pré-opératoire', isChecked: false, count: 1, isItem: 1 },
            { category: "", val: 'Variation > 40% par rapport au pré-opératoire', isChecked: false, count: 0, isItem: 1 },
            { category: "Marche & activité", val: 'Marche stable, sans étourdissement', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Marche avec aide, activité réduite', isChecked: false, count: 1, isItem: 1 },
            { category: "", val: 'Marche impossible, hypotonie', isChecked: false, count: 0, isItem: 1 },
            { category: "NVPO", val: 'Pas de NVPO', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Un épisode de NVPO', isChecked: false, count: 1, isItem: 1 },
            { category: "", val: 'NVPO persistants', isChecked: false, count: 0, isItem: 1 },
            { category: "Douleur", val: 'Bien contrôlée', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Mal contrôlée', isChecked: false, count: 1, isItem: 1 },
            { category: "Saignement", val: 'Minime ou nul (pas de réfection de pansement)', isChecked: false, count: 2, isItem: 1 },
            { category: "", val: 'Significatif (réfection de pansement)', isChecked: false, count: 1, isItem: 1 },
        ];
        this.Anticoagform1 = [
            { val: 'ASA 3', isChecked: false, count: 1 },
            { val: 'BMI > 30', isChecked: false, count: 1 },
            { val: 'KT veineux central', isChecked: false, count: 1 },
            { val: 'Pathologie tumorale active', isChecked: false, count: 1 },
            { val: 'Insuffisance rénale', isChecked: false, count: 1 },
            { val: 'Déshydratation', isChecked: false, count: 1 },
            { val: 'Grossesse ou accouchement < 6 semaines', isChecked: false, count: 1 },
            { val: 'Contraception orale', isChecked: false, count: 1 },
            { val: 'Cardiopathie congénitale', isChecked: false, count: 1 },
            { val: 'Maladie métabolique ou inflammatoire', isChecked: false, count: 1 },
            { val: 'Thrombophilie connue', isChecked: false, count: 1 },
        ];
        this.Anticoagform2 = [
            { val: 'Durée anesth + chir > 4h', isChecked: false, count: 1 },
            { val: 'Chirurgie de hanche', isChecked: false, count: 1 },
            { val: 'Arthrodèse vertébrale', isChecked: false, count: 1 },
            { val: 'Âge supérieur à 13 ans', isChecked: false, count: 1 },
            { val: 'Chirurgie membre inférieur avec ostéotomie ou plâtre', isChecked: false, count: 1 },
            { val: 'Chirurgie de FAV', isChecked: false, count: 1 },
        ];
        this.Anticoagform3 = [
            { val: 'Alitement > 3j', isChecked: false, count: 1 },
            { val: 'Sepsis sévère', isChecked: false, count: 1 },
            { val: 'Traumatisme sévère ISS>9', isChecked: false, count: 1 },
            { val: 'Traumatisme médullaire et paraplégie', isChecked: false, count: 1 },
            { val: 'Brûlures sévères', isChecked: false, count: 1 },
            { val: 'Intubation et ventilation mécanique', isChecked: false, count: 1 },
        ];
        this.SHSform = [
            { val: "Q1. Besoin de secouer l'enfant :", count: 0 },
            { val: "Q2. Arrêts respiratoires nocturnes :", count: 0 },
            { val: "Q3. Difficultés à respirer la nuit :", count: 0 },
            { val: "Q4. Inquiétudes des parents sur le sommeil de l'enfant :", count: 0 },
            { val: "Q5. Intensité du bruit de son ronflement (pour cette question, échelle de 0 = faible à 4 = très bruyant) :", count: 0 },
            { val: "Q6. Existence de ronflement :", count: 0 },
        ];
        this.HEMSTOPform = [
            { val: "Q1. Avez-vous déjà consulté un médecin ou reçu un traitement pour un saignement prolongé ou inhabituel par exemple un saignement de nez ou une petite coupure ?", count: 0 },
            { val: "Q2. Avez-vous tendance à faire des bleus de plus de 2 cm ou des hématomes importants, sans choc ou traumatisme ou bien à un traumatisme minime ?", count: 0 },
            { val: "Q3. Avez-vous reconsulté votre dentiste pour un saignement après une extraction dentaire ?", count: 0 },
            { val: "Q4. Avez-vous saigné de manière anormale après une intervention chirurgicale (exemple opératoire des amygdales ou circoncision) ?", count: 0 },
            { val: "Q5. Y a-t-il des membres de la famille proche suivis pour une maladie de la coagulation, comme la maladie de Von Willebrand ou l'hémophilie ?", count: 0 },
            { val: "Q6. Pour les femmes : avez vous déjà consulté un médecin ou reçu un traitement pour des règles trop abondantes ? Avez vous saigné de façon anormale après un accouchement ?", count: 0 },
        ];
    }
    ScoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScoresPage');
    };
    ;
    ScoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.ageLecture = Math.round((_this.AgeNum / 12) * 10) / 10;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('DureeJeune').then(function (dureejeune) {
                    _this.DureeJeune = dureejeune;
                    _this.storage.get('EstomacPlein').then(function (Estomac) {
                        _this.EstomacPlein = Estomac;
                        console.log('lestomac est plein ?', _this.EstomacPlein);
                        if (_this.EstomacPlein == true) {
                            _this.EstomacOuiNon = "plein";
                        }
                        else {
                            _this.EstomacOuiNon = "vide";
                        }
                        ;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                            _this.storage.get('sexeMF').then(function (sexe) {
                                _this.sexeMF = sexe;
                                if (!sexe) {
                                    _this.sexeMF = "Fille";
                                }
                                ;
                                _this.storage.get('Taille').then(function (Taille) {
                                    _this.Taille = Taille;
                                    if (!_this.PoidsNum || !_this.AgeNum) {
                                        _this.calculs();
                                    }
                                    else {
                                        _this.calculs();
                                    }
                                    ;
                                });
                            });
                        });
                    });
                });
            });
        }));
    };
    ;
    ScoresPage.prototype.calculs = function () {
        if (this.AgeNum <= 36) {
            this.VPOPform[0].isChecked = true;
        }
        else if (this.AgeNum > 36 && this.AgeNum <= 72) {
            this.VPOPform[1].isChecked = true;
        }
        else if (this.AgeNum > 72 && this.AgeNum <= 156) {
            this.VPOPform[2].isChecked = true;
        }
        else if (this.AgeNum > 156) {
            this.VPOPform[3].isChecked = true;
        }
        ;
        this.countVPOP();
        this.setRiskVPOP();
    };
    /* EVALUATION NVPO PAR LE SCORE DE VPOP */
    ScoresPage.prototype.toggleVPOP = function () {
        this.isShownVPOP = !this.isShownVPOP;
    };
    ;
    ScoresPage.prototype.countVPOP = function () {
        console.log("count");
        this.totalVPOP = this.VPOPform.filter(function (item) { return item.isChecked === true; }).reduce(function (sum, current) { return sum + current.count; }, 0);
        this.setRiskVPOP();
        console.log(this.totalVPOP);
    };
    ;
    ScoresPage.prototype.setRiskVPOP = function () {
        if (this.totalVPOP == 0) {
            this.risqueVPOP = 6;
        }
        else if (this.totalVPOP == 1) {
            this.risqueVPOP = 7;
        }
        else if (this.totalVPOP == 2) {
            this.risqueVPOP = 15;
        }
        else if (this.totalVPOP == 3) {
            this.risqueVPOP = 25;
        }
        else if (this.totalVPOP == 4) {
            this.risqueVPOP = 39;
        }
        else if (this.totalVPOP == 5) {
            this.risqueVPOP = 53;
        }
        else if (this.totalVPOP == 6) {
            this.risqueVPOP = 69;
        }
        ;
        if (this.totalVPOP <= 2) {
            this.prophylaxieVPOP = "Risque faible. Dexaméthasone seule en prophylaxie.";
        }
        else if (this.totalVPOP <= 4) {
            this.prophylaxieVPOP = "Risque Modéré. Déxaméthasone et Dropéridol en prophylaxie. Eviter le protoxyde d'azote. Limiter les opioïdes en post-opératoire.";
        }
        else {
            this.prophylaxieVPOP = "Risque élevé. Déxaméthasone et Dropéridol en prophy  laxie. Considérer Ondansétron en per opératoire. Eviter le protoxyde d'azote. Limiter les opioïdes en post-opératoire.";
        }
    };
    ;
    /* ANTICOAGULATION */
    ScoresPage.prototype.toggleScoreAnticoag = function () {
        this.isShownScoreAnticoag = !this.isShownScoreAnticoag;
    };
    ScoresPage.prototype.countAnticoag = function () {
        this.Anticoag1 = this.Anticoagform1.filter(function (item1) { return item1.isChecked === true; }).reduce(function (sum1, current1) { return sum1 + current1.count; }, 0);
        this.Anticoag2 = this.Anticoagform2.filter(function (item2) { return item2.isChecked === true; }).reduce(function (sum2, current2) { return sum2 + current2.count; }, 0);
        this.Anticoag3 = this.Anticoagform3.filter(function (item3) { return item3.isChecked === true; }).reduce(function (sum3, current3) { return sum3 + current3.count; }, 0);
        this.AnticoagTotal = (this.Anticoag1 + this.Anticoag2 + this.Anticoag3);
        console.log("count total = ", this.AnticoagTotal);
        if (this.AnticoagTotal == 0) {
            this.MesuresSupplementairesAnticoag = "";
            this.NiveauRisqueThrombose = "faible";
        }
        else if (this.AnticoagTotal == 1) {
            this.MesuresSupplementairesAnticoag = "Bas anti-thrombose (grade 2)";
            this.NiveauRisqueThrombose = "intermédiaire";
        }
        else if (this.AnticoagTotal >= 2) {
            this.MesuresSupplementairesAnticoag = "Bas anti-thrombose (grade 2) + Lovenox 100 UI/kg/j SC sans dépasser 4000 UI/j.";
            this.NiveauRisqueThrombose = "élevé";
        }
        console.log(this.NiveauRisqueThrombose);
    };
    ;
    /* DOULEUR EVENDOL */
    ScoresPage.prototype.toggleEVENDOL = function () {
        this.isShownEVENDOL = !this.isShownEVENDOL;
    };
    ;
    ScoresPage.prototype.CalcEVENDOL = function () {
        this.EVENDOLTotal = Math.floor(this.EVENDOLVocal) + Math.floor(this.EVENDOLMimique) + Math.floor(this.EVENDOLMouvement) + Math.floor(this.EVENDOLPosition) + Math.floor(this.EVENDOLRelation);
        console.log(this.EVENDOLTotal);
        if (this.EVENDOLTotal <= 3) {
            this.SeuilPrescriptionEVENDOL = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";
        }
        else {
            this.SeuilPrescriptionEVENDOL = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";
        }
        ;
    };
    /* DOULEUR EDIN */
    ScoresPage.prototype.toggleEDIN = function () {
        this.isShownEDIN = !this.isShownEDIN;
    };
    ;
    ScoresPage.prototype.CalcEDIN = function () {
        this.EDINTotal = Math.floor(this.EDINVisage) + Math.floor(this.EDINCorps) + Math.floor(this.EDINSommeil) + Math.floor(this.EDINRelation) + Math.floor(this.EDINReconfort);
        console.log(this.EDINTotal);
        if (this.EDINTotal <= 3) {
            this.SeuilPrescriptionEDIN = "Non atteint. Pas de traitement recommandé. Réévaluer régulièrement.";
        }
        else {
            this.SeuilPrescriptionEDIN = "Atteint : débuter un traitement antalgique ou augmenter d'un pallier.";
        }
        ;
    };
    /**Score d'ALDRETE sortie SSPI */
    ScoresPage.prototype.toggleAldrete = function () {
        this.isShownAldrete = !this.isShownAldrete;
    };
    ScoresPage.prototype.countAldrete = function () {
        this.totalAldrete = this.AldreteForm.filter(function (item) { return item.isChecked === true; }).reduce(function (sum, current) { return sum + current.count; }, 0);
        console.log(this.totalAldrete);
        if (this.totalAldrete <= 11) {
            this.CATAldrete = "Réveil insuffisant pour autoriser la sortie de SSPI.";
        }
        else {
            this.CATAldrete = "Sortie de SSPI possible avec accord du MAR référent du patient.";
        }
    };
    ;
    /**Score PADSS Sortie ambulatoire */
    ScoresPage.prototype.togglePADSS = function () {
        this.isShownPADSS = !this.isShownPADSS;
    };
    ScoresPage.prototype.countPADSS = function () {
        this.totalPADSS = this.PADSSForm.filter(function (item) { return item.isChecked === true; }).reduce(function (sum, current) { return sum + current.count; }, 0);
        console.log("PADSS = ", this.totalPADSS);
        var IsZeroPADSS = this.PADSSForm.filter(function (item) { return item.count == 0 && item.isChecked === true; }).reduce(function (sum, current) { return sum + current.isItem; }, 0);
        console.log("nombre d'items cotant 0 cochés = ", IsZeroPADSS);
        if (this.totalPADSS <= 8 && IsZeroPADSS == 0) {
            this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (score total insuffisant).";
        }
        else if (this.totalPADSS <= 8 && IsZeroPADSS != 0) {
            this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (un item coté 0, score total insuffisant).";
        }
        else if (this.totalPADSS > 8 && IsZeroPADSS != 0) {
            this.CATPADSS = "Etat incompatible avec une sortie en ambulatoire (un item coté 0).";
        }
        else {
            this.CATPADSS = "Sortie ambulatoire possible avec accord du MAR référent du patient.";
        }
        ;
    };
    ;
    /**Score SHS Risque de SAOS sévère de l'enfant */
    ScoresPage.prototype.toggleSHS = function () {
        this.isShownSHS = !this.isShownSHS;
    };
    ScoresPage.prototype.countSHS = function () {
        this.SHSQ1 = Math.floor(this.SHSform[0].count);
        this.SHSQ2 = Math.floor(this.SHSform[1].count);
        this.SHSQ3 = Math.floor(this.SHSform[2].count);
        this.SHSQ4 = Math.floor(this.SHSform[3].count);
        this.SHSQ5 = Math.floor(this.SHSform[4].count);
        this.SHSQ6 = Math.floor(this.SHSform[5].count);
        console.log(this.SHSQ1, this.SHSQ2, this.SHSQ3);
        this.cumuleSHS = Math.round(((((((((((this.SHSQ1 + this.SHSQ2) / 2) + this.SHSQ3) / 2) + this.SHSQ4) / 2) + this.SHSQ5) / 2) + this.SHSQ6) / 2) * 100) / 100;
        console.log("index cumule = ", this.cumuleSHS);
        if (this.cumuleSHS >= 2.72) {
            this.risqueSHS = "Enfant présentant probablement un SAOS sévère et à risque élevé d'apnées post-opératoire. Prévoir une hospitalisation post-opératoire. Prudence avec les morphiniques en post-opératoire.";
        }
        else {
            this.risqueSHS = "Enfant ne présentant probablement pas un SAOS sévère. Pas de contre indication à l'ambulatoire liée à ce paramètre.";
        }
    };
    ;
    /** SCORE HEMSTOP RISQUE DE SAIGNEMENT */
    ScoresPage.prototype.toggleHEMSTOP = function () {
        this.isShownHEMSTOP = !this.isShownHEMSTOP;
    };
    ;
    ScoresPage.prototype.countHEMSTOP = function () {
        this.totalHEMSTOP = Math.floor(this.HEMSTOPform[0].count) +
            Math.floor(this.HEMSTOPform[1].count) +
            Math.floor(this.HEMSTOPform[2].count) +
            Math.floor(this.HEMSTOPform[3].count) +
            Math.floor(this.HEMSTOPform[4].count) +
            Math.floor(this.HEMSTOPform[5].count);
        console.log(this.totalHEMSTOP);
        if (this.totalHEMSTOP >= 2) {
            this.risqueHEMSTOP = "Forte probabilité de sur-risque hémorragique. Bilan d'hémostase recommandé.";
        }
        else if (this.totalHEMSTOP == 1) {
            this.risqueHEMSTOP = "Probabilité intermédiaire de sur-risque hémorragique. Bilan d'hémostase à discuter.";
        }
        else {
            this.risqueHEMSTOP = "Probabilité très faible de sur-risque hémorragique. Pas de bilan d'hémostase.";
        }
    };
    ;
    /** SCORE DE BROMAGE */
    ScoresPage.prototype.toggleBromage = function () {
        this.isShownBromage = !this.isShownBromage;
    };
    ;
    ScoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scores',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\scores\scores.html"*/'\n<ion-header><br>\n  <!-- HEADER MENU  -->\n  <div class="header"> \nScores  </div>\n      <br>  \n\n      <ion-segment color="turquoise-fonce" [(ngModel)]="ScoresView">\n        <ion-segment-button value="1">Consultation</ion-segment-button>\n        <ion-segment-button value="2">Post-opératoire</ion-segment-button>\n      </ion-segment>\n  \n      \n <!-- END HEADER -->\n\n             <!-- DEBUT SCORE SHS SAOS-->\n\n            </ion-header>\n             <ion-content>\n\n<div *ngIf="ScoresView==1">\n\n\n  <ion-item (click)="toggleSHS()">\n    <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Sévérité SAOS (SHS)\n    <ion-icon *ngIf="!isShownSHS" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownSHS" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item>\n    \n           \n    \n  <ion-card class="drogueContainer" *ngIf="isShownSHS">\n\n    <p *ngIf="isShownSHS"  class="reference">Référence : Spruyt & al., Screening of pediatric sleep-disordered breathing. Chest 2012.\n      <br>\n    6 questions, 5 choix possibles (dans les 6 derniers mois): \n      <br> - 0 : jamais \n      <br> - 1 : rarement (une fois par semaine)\n      <br> - 2 : occasionnelement (deux fois par semaine)\n      <br> - 3 : fréquemment (3 à 4 fois par semaine)\n      <br> - 4 : presque toujours (plus de 4 fois par semaine).\n    </p>\n\n    <ion-card-content *ngFor="let entry of SHSform">\n\n      <ion-list>\n          {{entry.val}}\n          <br>\n        \n          <ion-segment [(ngModel)]="entry.count" color="dark-turquoise" (ionChange)="countSHS()">\n          <ion-segment-button value="0">\n            <ion-label>0</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="1">\n            <ion-label>1</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="2">\n            <ion-label>2</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="3">\n            <ion-label>3</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value="4">\n            <ion-label>4</ion-label>\n          </ion-segment-button>\n        </ion-segment>            \n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n    \n  <ion-card *ngIf="isShownSHS" class="drogueContainer">Interprétation : un score cumulé global supérieur à 2.72 prédit un index d\'apnée-hypopnée supérieur à 5/h, ce qui correspond à un SAOS sévère de l\'enfant. \n  <ion-card-content>\n  <ion-item class="drogueInduction">Score cumulé global : <b>{{cumuleSHS}}</b></ion-item>\n  <p class="strategie" padding>{{risqueSHS}}</p>\n  <p *ngIf="isShownSHS" class="comment" padding>Détail du calcul : A = (Q1+Q2)/2, B = (A+Q3)/2, C = (B+Q4)/2, D = (C+Q5)/2, score cumulé global = (D+Q6)/2</p>\n</ion-card-content> \n</ion-card>\n              <!-- FIN SCORE SHS SAOS-->\n\n<!-- DEBUT SCORE HEMSTOP SAIGNEMENT-->\n\n<ion-item (click)="toggleHEMSTOP()">\n  <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Coagulopathies (HEMSTOP)\n    <ion-icon *ngIf="!isShownHEMSTOP" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownHEMSTOP" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n</ion-item>\n\n\n\n<ion-card class="drogueContainer" *ngIf="isShownHEMSTOP">\n\n  <p class="reference">Référence : Bonhomme et al. Preoperative hemostatic assessment: a new and simple bleeding questionnaire. Can J. Anesthesiology 2016.\n    <br><br>Score développé chez l\'adulte. Envisager l\'utilisation de ce score pour sensibiliser la prescription du bilan d\'hémostase chez un enfant ayant acquis la marche. 6 questions, réponse par oui ou par non.\n    </p>\n\n\n  <ion-card-content *ngFor="let entry of HEMSTOPform">\n    \n    <ion-list>\n        {{entry.val}}\n      \n      \n       <ion-segment [(ngModel)]="entry.count" color="dark-turquoise" (ionChange)="countHEMSTOP()">\n        <ion-segment-button value="0">\n          <ion-label>Non</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value="1">\n          <ion-label>Oui</ion-label>\n        </ion-segment-button>\n      </ion-segment>            \n    </ion-list>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf="isShownHEMSTOP" class="drogueContainer">Interprétation : un score supérieur à 2 rend hautement probable la présence d\'un sur-risque hémorragique périopératoire (Sn 89,5%, Sp 98,6%). \n<ion-card-content>\n<ion-item *ngIf="isShownHEMSTOP" class="drogueInduction">Total : <b>{{totalHEMSTOP}}/6 pts</b></ion-item>\n<p class="strategie" padding>{{risqueHEMSTOP}}</p>\n\n</ion-card-content> \n</ion-card>\n\n      <!-- FIN SCORE HEMSTOP SAIGNEMENT-->\n\n<!-- SCORE VPOP-->\n\n\n\n<ion-item (click)="toggleVPOP()">\n<ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Risque NVPO (score VPOP)\n<ion-icon *ngIf="!isShownVPOP" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownVPOP" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n</ion-label>\n</ion-item>\n\n<ion-card class="drogueContainer" *ngIf="isShownVPOP">\n<p class="reference">Référence : Bourdaud et al. Development & validation of a risk score to predict probability of p/o vomiting in pediatric patients. Pediatric Anesthesia 2014.\n</p>\n<ion-card-content>\n  <ion-item *ngFor="let entry of VPOPform">\n    <ion-label class="dilutionDrogueInduction">{{entry.val}}\n      <p class="dilutionDrogueInduction">+ {{entry.count}} point(s)</p>\n    </ion-label>\n    <ion-checkbox color="turquoise-fonce" (click)="countVPOP()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n      <ion-item class="drogueInduction">Total : <b>{{totalVPOP}} pts</b> - Risque NVPO : <b>{{risqueVPOP}} %</b></ion-item>\n      <ion-item><ion-label class="drogueInduction">Stratégie proposée :</ion-label></ion-item>\n      <p class="strategie">{{prophylaxieVPOP}}</p>\n</ion-card-content>\n</ion-card>\n\n\n\n<!-- FIN SCORE VPOP-->\n\n\n\n\n<!-- DEBUT SCORE ANTICOAG-->\n\n\n\n<ion-item (click)="toggleScoreAnticoag()">\n<ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Anticoagulation (après 13 ans)\n  <ion-icon *ngIf="!isShownScoreAnticoag" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownScoreAnticoag" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n</ion-label>\n</ion-item>\n\n<ion-card class="drogueContainer" *ngIf="isShownScoreAnticoag">\n<ion-card-content>\n Envisager chez le patient pubère (+/- âge > 13 ans). Indiquez les facteurs de risque présents. Le total et la stratégie proposée sont indiqués en bas.\n  \n  <ion-list>\n    <ion-item class="dilutionDrogueInduction">Facteurs liés au patient</ion-item>\n    <ion-item *ngFor="let entry1 of Anticoagform1">\n      <ion-label class="dilutionDrogueInduction">{{entry1.val}}\n        <p class="dilutionDrogueInduction">+ {{entry1.count}} point(s)</p>\n      </ion-label>\n      <ion-checkbox color="turquoise-fonce" (click)="countAnticoag()" [(ngModel)]="entry1.isChecked"></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="dilutionDrogueInduction">Facteurs liés à la chirurgie</ion-item>\n    <ion-item *ngFor="let entry2 of Anticoagform2">\n      <ion-label class="dilutionDrogueInduction">{{entry2.val}}\n        <p class="dilutionDrogueInduction">+ {{entry2.count}} point(s)</p>\n      </ion-label>\n      <ion-checkbox color="turquoise-fonce" (click)="countAnticoag()" [(ngModel)]="entry2.isChecked"></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="dilutionDrogueInduction">Facteurs liés à l\'hospitalisation</ion-item>\n    <ion-item *ngFor="let entry3 of Anticoagform3">\n      <ion-label class="dilutionDrogueInduction">{{entry3.val}}\n        <p class="dilutionDrogueInduction">+ {{entry3.count}} point(s)</p>\n      </ion-label>\n      <ion-checkbox  color="turquoise-fonce" (click)="countAnticoag()" [(ngModel)]="entry3.isChecked"></ion-checkbox>\n    </ion-item>\n\n\n        <ion-item class="drogueInduction">Total : <b>{{AnticoagTotal}} pts</b> - Risque <b>{{NiveauRisqueThrombose}}</b></ion-item>\n        <ion-item><ion-label class="drogueInduction">Stratégie proposée :</ion-label></ion-item>\n        <p class="strategie">{{prophylaxieAnticoag}} <b>{{MesuresSupplementairesAnticoag}}</b></p>\n </ion-list>\n</ion-card-content>\n</ion-card>\n\n\n</div>\n\n<!-- FIN SCORE ANTICOAG-->\n\n\n\n<div *ngIf="ScoresView==2" >\n\n\n<!-- DEBUT SCORE EVENDOL-->\n\n  <ion-item (click)="toggleEVENDOL()">\n    <ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Douleur enfant (EVENDOL)\n      <ion-icon *ngIf="!isShownEVENDOL" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n      <ion-icon *ngIf="isShownEVENDOL" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item>\n\n  <ion-card class="drogueContainer" *ngIf="isShownEVENDOL">\n    <ion-card-content>\n\n<p class="drogueInduction">Préférer l\'auto-évaluation chaque fois que possible. En cas d\'impossibilité liée à l\'âge ou à l\'état du patient, utiliser une échelle d\'hétéro-évaluation. L\'échelle EVENDOL est proposée ci-dessous.</p>    \n    <br>\n<p class="comment">Renseigner chacun des items de 0 à 3. \n  <br> - 0 = signe absent\n  <br> - 1 = signe faible ou passager\n  <br> - 2 = signe moyen ou environ la moitié du temps\n  <br> - 3 = signe fort ou quasi permanent\n  <br>\n  <br> Pour l\'item Relation, une absence (0) donne 3 points ; un état relationnel normal (3) ne compte aucun point. Seuil de prescription : 4/15.</p>\n\n<ion-item class="EVENDOLlabel"><ion-label><br>Expression vocale/verbale</ion-label></ion-item>\n\n    <ion-segment [(ngModel)]="EVENDOLVocal" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n      <ion-segment-button value="0">\n        <ion-label>0</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-label>1</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-label>2</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="3">\n        <ion-label>3</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-item class="EVENDOLlabel"><ion-label><br>Mimique (fronce, grimace)</ion-label></ion-item>\n\n    <ion-segment [(ngModel)]="EVENDOLMimique" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n      <ion-segment-button value="0">\n        <ion-label>0</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-label>1</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-label>2</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="3">\n        <ion-label>3</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-item class="EVENDOLlabel"><ion-label><br>Mouvements (s\'agite, se crispe)</ion-label></ion-item>\n\n    <ion-segment [(ngModel)]="EVENDOLMouvement" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n      <ion-segment-button value="0">\n        <ion-label>0</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-label>1</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-label>2</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="3">\n        <ion-label>3</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-item class="EVENDOLlabel"><ion-label><br>Position (attitude antalgique, se protège)</ion-label></ion-item>\n\n    <ion-segment [(ngModel)]="EVENDOLPosition" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n      <ion-segment-button value="0">\n        <ion-label>0</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-label>1</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-label>2</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="3">\n        <ion-label>3</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-item class="EVENDOLlabel"><ion-label><br>Relation (communique, peut être consolé)</ion-label></ion-item>\n\n    <ion-segment [(ngModel)]="EVENDOLRelation" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEVENDOL()">\n      <ion-segment-button value="3">\n        <ion-label>0</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-label>1</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-label>2</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="0">\n        <ion-label>3</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n            <ion-item class="drogueInduction">Total : <b>{{EVENDOLTotal}}/15 pts</b></ion-item>\n            <p class="strategie">Seuil de prescription (3/15) : {{SeuilPrescriptionEVENDOL}}</p>\n\n\n\n</ion-card-content>\n\n</ion-card>\n\n<!-- FIN SCORE EVENDOL-->\n\n\n<!-- DEBUT SCORE EDIN -->\n\n\n\n<ion-item (click)="toggleEDIN()">\n<ion-label color="dark-turquoise"> <ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Douleur nourrisson (0-3 mois - EDIN)\n  <ion-icon *ngIf="!isShownEDIN" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>  \n  <ion-icon *ngIf="isShownEDIN" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n</ion-label>\n</ion-item>\n\n<ion-card class="drogueContainer" *ngIf="isShownEDIN">\n<ion-card-content>\n\n<p class="drogueInduction">Utiliser chez le nourrisson entre 0 et 3 mois.</p>    \n<br>\n<ion-item class="EVENDOLlabel"><ion-label><br>Visage\n<p class="comment">0 : visage détendu</p>\n<p class="comment">1 : grimaces passagères</p>\n<p class="comment">2 : grimaces fréquentes et prolongées</p>\n<p class="comment">3 : crispation permanente, prostré, figé</p>\n</ion-label></ion-item>\n\n<ion-segment [(ngModel)]="EDINVisage" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n  <ion-segment-button value="0">\n    <ion-label>0</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="1">\n    <ion-label>1</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="2">\n    <ion-label>2</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="3">\n    <ion-label>3</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-item class="EVENDOLlabel"><ion-label><br>Corps\n<p class="comment">0 : détendu</p>\n<p class="comment">1 : agitation transitoire</p>\n<p class="comment">2 : agitation fréquente</p>\n<p class="comment">3 : agitation permanente, crispation, raideur</p>\n\n</ion-label></ion-item>\n\n<ion-segment [(ngModel)]="EDINCorps" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n  <ion-segment-button value="0">\n    <ion-label>0</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="1">\n    <ion-label>1</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="2">\n    <ion-label>2</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="3">\n    <ion-label>3</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-item class="EVENDOLlabel"><ion-label><br>Sommeil \n  <p class="comment">0 : s\'endort facilement, sommeil prolongé</p>\n  <p class="comment">1 : s\'endort difficilement</p>\n  <p class="comment">2 : se réveille spontanément, sommeil agité</p>\n  <p class="comment">3 : pas de sommeil</p>\n\n</ion-label></ion-item>\n\n<ion-segment [(ngModel)]="EDINSommeil" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n  <ion-segment-button value="0">\n    <ion-label>0</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="1">\n    <ion-label>1</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="2">\n    <ion-label>2</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="3">\n    <ion-label>3</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-item class="EVENDOLlabel"><ion-label><br>\n  Relation\n  <p class="comment">0 : sourire réponse, attentif</p>\n  <p class="comment">1 : appréhension passagère du contact</p>\n  <p class="comment">2 : contact difficile, cri à la moindre stimulation</p>\n  <p class="comment">3 : hurlement ou gémissement spontané</p>\n\n</ion-label></ion-item>\n\n<ion-segment [(ngModel)]="EDINRelation" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n  <ion-segment-button value="0">\n    <ion-label>0</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="1">\n    <ion-label>1</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="2">\n    <ion-label>2</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="3">\n    <ion-label>3</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-item class="EVENDOLlabel"><ion-label><br>Reconfort\n  <p class="comment">0 : n\'a pas besoin de reconfort</p>\n  <p class="comment">1 : se calme rapidement à la caresse/au son de la voix</p>\n  <p class="comment">2 : se calme difficilement</p>\n  <p class="comment">3 : inconsolable, succion désespérée</p>\n\n</ion-label></ion-item>\n\n<ion-segment [(ngModel)]="EDINReconfort" class="EVENDOLrange" color="dark-turquoise" (ionChange)="CalcEDIN()">\n  <ion-segment-button value="0">\n    <ion-label>0</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="1">\n    <ion-label>1</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="2">\n    <ion-label>2</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="3">\n    <ion-label>3</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n        <ion-item class="drogueInduction">Total : <b>{{EDINTotal}}/15 pts</b></ion-item>\n        <p class="strategie">Seuil de prescription (3/15) : {{SeuilPrescriptionEDIN}}</p>\n\n\n\n</ion-card-content>\n\n</ion-card>\n\n<!-- FIN DOULEUR EDIN -->\n\n\n<!-- SCORE ALDRETE -->\n<ion-item (click)="toggleAldrete()">\n<ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Aldrete - Sortie de SSPI\n<ion-icon *ngIf="!isShownAldrete" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownAldrete" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n</ion-label>\n</ion-item>\n\n<p padding *ngIf="isShownAldrete">Cocher pour chacune des catégories l\'item décrivant l\'état du patient.</p>\n\n\n<ion-list *ngIf="isShownAldrete">\n  <ion-card class="drogueContainer" *ngFor="let entry of AldreteForm">\n    <ion-card-header *ngIf="entry.category">{{entry.category}}</ion-card-header>\n      <ion-item><ion-label class="drogueInduction">\n      {{entry.val}}\n      <p class="dilutionDrogueInduction">+ {{entry.count}} point(s)</p>\n    </ion-label>  \n      <ion-checkbox color="turquoise-fonce" (click)="countAldrete()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n    </ion-item>\n  </ion-card>\n\n  <ion-card padding class="drogueContainer">\n      <ion-item class="drogueInduction">Total : <b>{{totalAldrete}}/14 pts</b></ion-item>\n      <ion-item><ion-label class="drogueInduction">Conduite à tenir proposée (sortie SSPI > 11/14) :</ion-label></ion-item>\n      <p padding class="strategie">{{CATAldrete}}</p>\n    </ion-card>\n</ion-list>\n\n<!-- FIN SCORE ALDRETE -->\n\n\n\n<!-- SCORE PADSS SORTIE AMBULATOIRE  -->\n<ion-item (click)="togglePADSS()">\n<ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; PADSS - Sortie ambulatoire\n<ion-icon *ngIf="!isShownPADSS" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownPADSS" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n</ion-label>\n</ion-item>\n\n<p padding *ngIf="isShownPADSS">Cocher pour chacune des catégories l\'item décrivant l\'état du patient.</p>\n\n\n<ion-list *ngIf="isShownPADSS">\n<ion-card class="drogueContainer" *ngFor="let entry of PADSSForm">\n<ion-card-header *ngIf="entry.category">{{entry.category}}</ion-card-header>\n  <ion-item><ion-label class="drogueInduction">\n  {{entry.val}}\n  <p class="dilutionDrogueInduction">+ {{entry.count}} point(s)</p>\n</ion-label>  \n  <ion-checkbox color="turquoise-fonce" (click)="countPADSS()" [(ngModel)]="entry.isChecked"></ion-checkbox>\n</ion-item>\n</ion-card>\n\n\n<ion-card padding class="drogueContainer">\n  <ion-item class="drogueInduction">Total : <b>{{totalPADSS}}/14 pts</b></ion-item>\n  <ion-item><ion-label class="drogueInduction">Conduite à tenir proposée (sortie ambulatoire > 8/10) :</ion-label></ion-item>\n  <p padding class="strategie">{{CATPADSS}}</p>\n</ion-card>\n</ion-list>\n\n\n    <!-- FIN SCORE PADSS-->\n\n\n     <!-- SCORE de BROMAGE RACHIANESTHESIE   -->\n\n\n<ion-item (click)="toggleBromage()">\n<ion-label color="dark-turquoise"><ion-icon name="stats"></ion-icon> &nbsp; &nbsp; Bromage - Levée rachianesthésie\n<ion-icon *ngIf="!isShownBromage" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownBromage" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n</ion-label>\n</ion-item>\n\n<ion-card padding *ngIf="isShownBromage" class="drogueContainer">\n\n<p  class="reference"> Référence : Bromage PR. A comparison of the hydrochloride and carbon dioxide salts of lidocaine and prilocaine in epidural analgesia. Acta Anaesthesiologica Scandinavica 1965.</p>\n<br>\n<p class="comment">Le score proposé est le score de Bromage <i>modifié</i>, utilisable en ambulatoire. Le score original est sur 4 points, le score modifié sur 7. \n<br>Examiner le patient et attribuer le score correspondant à la motricité observée aux membres inférieurs.</p>\n<br>\n<p class="dilutionDrogueInduction">\n  - 1. Bloc moteur complet.\n<br>- 2. Bloc moteur presque complet, bouge les pieds.\n<br>- 3. Bloc moteur partiel, bouge les pieds et les genoux.\n<br>- 4. Bouge les jambes, faiblesse détectable à la flexion de la hanche.\n<br>- 5. Pas de faiblesse de la hanche en position couchée.\n<br>- 6. Flexion des genoux debout avec appui.\n<br>- 7. Flexion des genoux debout sans appui. \n</p>\n\n  <p class="strategie">Sortie de salle de réveil vers l\'hospitalisation conventionnelle envisageable pour un score supérieur ou égal à 4. Sortie en ambulatoire envisageable pour un score supérieur ou égal à 6.</p>\n\n\n</ion-card>\n\n</div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\main_pages\scores\scores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ScoresPage);
    return ScoresPage;
}());

;
//# sourceMappingURL=scores.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make AccueilPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\app\app.html"*/'<ion-menu [content]="content" type="overlay" side="start" menuId="custom" contentId="main" class="my-custom-menu">\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item>MENU</ion-item>\n\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

;
//# sourceMappingURL=app.component.js.map

/***/ })

},[504]);
//# sourceMappingURL=main.js.map