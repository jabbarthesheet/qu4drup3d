webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateauInductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(24);
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
        this.isShownHypno = false;
        this.isShownMorphiniques = false;
        this.isShownCurares = false;
        this.isShownAutres = false;
    }
    ;
    PlateauInductionPage.prototype.ToggleHypno = function () {
        this.isShownHypno = !this.isShownHypno;
        this.isShownMorphiniques = this.isShownCurares = this.isShownAutres = false;
    };
    ;
    PlateauInductionPage.prototype.ToggleMorphiniques = function () {
        this.isShownMorphiniques = !this.isShownMorphiniques;
        this.isShownHypno = this.isShownCurares = this.isShownAutres = false;
    };
    ;
    PlateauInductionPage.prototype.ToggleCurares = function () {
        this.isShownCurares = !this.isShownCurares;
        this.isShownHypno = this.isShownMorphiniques = this.isShownAutres = false;
    };
    ;
    PlateauInductionPage.prototype.ToggleAutres = function () {
        this.isShownAutres = !this.isShownAutres;
        this.isShownHypno = this.isShownMorphiniques = this.isShownCurares = false;
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
    PlateauInductionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
    };
    ;
    PlateauInductionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlateauInductionPage');
    };
    ;
    PlateauInductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plateau-induction',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-induction\plateau-induction.html"*/'<!--\n  Generated template for the PlateauInductionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- HEADER DE LA PAGE avec menu principal -->  \n  <ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drogues d\'induction</ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- ITEM MON PATIENT -->\n\n\n<ion-list>\n  <ion-item-group>\n    <ion-item-divider (click)="ToggleHypno()">\n      <ion-label color="dark-turquoise">Hypnotiques\n        <ion-icon *ngIf="!isShownHypno" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownHypno" class="OpenCloseIcon" name="close"   style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider> \n\n\n    <ion-card *ngIf="isShownHypno" class="drogueContainer">\n\n    <ion-item >\n      <ion-label class="drogueInduction" color="warning"><b>Sevoflurane 6%</b> - Voie inhalée\n        <p class="dilutionDrogueInduction">DGF pour l\'induction : 6-8 L/min</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="warning"> \n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoThiopental}}</p>\n        <b>Thiopental {{AdminThiopental}} mg - IVD </b>\n        <p class="dilutionDrogueInduction"> Dilution : {{DiluThiopental}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="warning">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoPropofol}}</p>\n        <b>Propofol {{AdminPropofol}} mg - IVD </b>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluPropofol}}</p></ion-label>\n    </ion-item>\n\n    <ion-item  class="avecAMM">\n      <ion-label class="drogueInduction" color="warning">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoEtomidate}}</p>\n        <b>Etomidate {{AdminEtomidate}} mg - IVD</b> \n        <p class="dilutionDrogueInduction">Dilution : {{DiluEtomidate}}</p> \n      </ion-label>\n    </ion-item>\n\n    <div class="AMM">AMM <br> > 2 ans</div>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="warning"> \n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoKetamine}}</p>\n        <b>Ketamine {{AdminKetamine}} mg - IVD</b>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluKetamine}}</p> </ion-label>\n      <div ></div>\n    </ion-item>\n\n  </ion-card>\n    \n\n    <ion-item-divider (click)="ToggleMorphiniques()">\n      <ion-label color="dark-turquoise">Morphiniques\n        <ion-icon *ngIf="!isShownMorphiniques" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownMorphiniques" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-card *ngIf="isShownMorphiniques" class="drogueContainer">\n    <ion-item>\n      <ion-label class="drogueInduction" color="primary">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoSufentanil}}</p>\n        <b>Sufentanil {{AdminSufentanil}} µg - IVD</b>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluSufentanil}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="primary">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoAlfentanil}}</p>\n        <b>Alfentanil {{AdminAlfentanil}} µg - IVD</b>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluAlfentanil}}</p>\n      </ion-label>\n    </ion-item>\n\n  </ion-card>\n\n    <ion-item-divider (click)="ToggleCurares()">\n      <ion-label color="dark-turquoise">Curares\n        <ion-icon *ngIf="!isShownCurares" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownCurares" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider>\n\n    <ion-card *ngIf="isShownCurares" class="drogueContainer">\n    <ion-item>\n      <ion-label class="drogueInduction" color="danger">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoAtracurium}}</p>\n        <b>Atracurium {{AdminAtracurium}} mg - IVD</b>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluAtracurium}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="danger">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoRocuronium}}</p>\n        <b>Rocuronium {{AdminRocuronium}} mg - IVD</b>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluRocuronium}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="drogueInduction" color="danger">\n        <p class="posologieDrogueInduction">Posologie proposée : {{PosoCelocurine}}</p>\n        <b>Celocurine {{AdminCelocurine}} mg - IVD</b>\n        <p class="dilutionDrogueInduction">Dilution : {{DiluCelocurine}}</p></ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-item-divider (click)="ToggleAutres()">\n    <ion-label color="dark-turquoise">Autres\n      <ion-icon *ngIf="!isShownAutres" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownAutres" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider>\n\n    <ion-card *ngIf="isShownAutres" class="drogueContainer">\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark">\n          <p class="posologieDrogueInduction">Posologie proposée : 0,15 mg/kg</p>\n          <b>Dexamethasone {{AdminDexa}} mg - IVD</b>\n          <p class="dilution">Dilution : {{DiluDexa}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark">\n          <p class="posologieDrogueInduction">Posologie proposée : 10 mg/kg</p>\n          <b>Exacyl : {{AdminExacyl}} mg - IVSE sur 30 min</b>\n          <p class="dilution">Dilution : 100 mg/mL</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark-pink">\n          <p class="posologieDrogueInduction">Posologie proposée : 100 µg/kg</p>\n          <b>Ephédrine : {{AdminEphedrine}} mg - IVD</b>\n          <p class="dilution">Dilution : {{DiluEphedrine}}</p></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction" color="dark-green">\n          <p class="posologieDrogueInduction">Posologie proposée : 20 µg/kg</p>\n          <b>Atropine : {{AdminAtropine}} mg - IVD</b>\n          <p class="dilution">Dilution : {{DiluAtropine}}</p></ion-label>\n      </ion-item>\n\n    </ion-card>\n\n  </ion-item-group>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-induction\plateau-induction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlateauInductionPage);
    return PlateauInductionPage;
}());

//# sourceMappingURL=plateau-induction.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlateauVasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(24);
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
        this.AlerteEstomacPlein = "";
        this.DureeJeune = 6;
        this.dureejeunelast = 6;
        this.Allergie = "";
        this.isShownVentilation = false;
        this.isShownIntubation = false;
        this.isShownMasqueLarynge = false;
        this.isShownIntubationDifficile = false;
    }
    PlateauVasPage.prototype.ToggleIntubation = function () {
        this.isShownIntubation = !this.isShownIntubation;
        this.isShownVentilation = this.isShownMasqueLarynge = this.isShownIntubationDifficile = false;
    };
    ;
    PlateauVasPage.prototype.ToggleVentilation = function () {
        this.isShownVentilation = !this.isShownVentilation;
        this.isShownIntubation = this.isShownMasqueLarynge = this.isShownIntubationDifficile = false;
    };
    ;
    PlateauVasPage.prototype.ToggleMasqueLarynge = function () {
        this.isShownMasqueLarynge = !this.isShownMasqueLarynge;
        this.isShownIntubation = this.isShownVentilation = this.isShownIntubationDifficile = false;
    };
    ;
    PlateauVasPage.prototype.ToggleIntubationDifficile = function () {
        this.isShownIntubationDifficile = !this.isShownIntubationDifficile;
        this.isShownIntubation = this.isShownVentilation = this.isShownMasqueLarynge = false;
    };
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
    PlateauVasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                console.log('Le patient a', _this.AgeNum, "mois au total pour ", _this.PoidsNum, " kg.");
                if (!_this.PoidsNum || !_this.AgeNum) {
                    _this.presentAlert();
                }
                else {
                    return;
                }
                ;
            });
        }));
        var promiseOptions = [];
        promiseOptions.push(this.storage.get('EstomacPlein').then(function (esto) {
            _this.estomaclast = esto;
            console.log('estomac plein? qqq', _this.estomaclast);
            if (_this.estomaclast == true) {
                _this.EstomacOuiNon = "plein";
            }
            else {
                _this.EstomacOuiNon = "vide";
            }
            _this.storage.get('DureeJeune').then(function (dureejeune) {
                _this.DureeJeune = dureejeune;
                console.log('duree du jeune renseignee de', _this.DureeJeune, 'heures.');
                _this.storage.get('Allergie').then(function (allergie) {
                    _this.Allergie = allergie;
                    if (_this.PoidsNum <= 2.5) {
                        _this.TailleSITage = _this.TailleSITpoids = 2.5;
                        _this.RepereSITdents = Math.round((_this.PoidsNum + 6.5) * 10) / 10;
                        _this.RepereSITnez = Math.round((_this.PoidsNum + 7) * 10) / 10;
                        _this.RepereSITenfant = "trop petit";
                    }
                    else if (_this.PoidsNum <= 3.5) {
                        _this.TailleSITage = _this.TailleSITpoids = 3;
                        _this.RepereSITdents = Math.round((_this.PoidsNum + 6.5) * 10) / 10;
                        _this.RepereSITnez = Math.round((_this.PoidsNum + 7) * 10) / 10;
                        _this.RepereSITenfant = "trop petit";
                    }
                    else if (_this.PoidsNum <= 7) {
                        _this.TailleSITage = _this.TailleSITpoids = 3.5;
                        _this.RepereSITdents = Math.round((_this.PoidsNum + 6.5) * 10) / 10;
                        _this.RepereSITnez = Math.round((_this.PoidsNum + 7) * 10) / 10;
                        _this.RepereSITenfant = "trop petit";
                    }
                    else if (_this.PoidsNum > 7) {
                        _this.TailleSITage = Math.round((_this.AgeNum / (12 * 4) + 3.5) * 10) / 10;
                        if (_this.TailleSITage >= 8) {
                            _this.TailleSITage = 8;
                        }
                        _this.TailleSITpoids = Math.round((_this.PoidsNum / 10 + 3) * 10) / 10;
                        if (_this.TailleSITpoids >= 7.5) {
                            _this.TailleSITpoids = 7.5;
                        }
                        _this.TailleSIT = Math.round(((_this.TailleSITage + _this.TailleSITpoids) / 2) * 10) / 10;
                        _this.RepereSITenfant = Math.round(((_this.TailleSITage + _this.TailleSITpoids) / 2) * 3).toString() + " cm";
                        _this.RepereSITdents = Math.round((_this.AgeNum / 24 + 12) * 10) / 10;
                        _this.RepereSITnez = Math.round((_this.AgeNum / 24 + 15) * 10) / 10;
                    }
                    ;
                    _this.Volumecourant = Math.round(_this.PoidsNum * 6);
                    if (_this.PoidsNum <= 3 && _this.AgeNum <= 1) {
                        _this.CouleurCanuleMasque = "bleu";
                    }
                    else if (_this.AgeNum <= 6) {
                        _this.CouleurCanuleMasque = "gris";
                    }
                    else if (_this.AgeNum <= 60) {
                        _this.CouleurCanuleMasque = "blanc";
                    }
                    else if (_this.AgeNum <= 120) {
                        _this.CouleurCanuleMasque = "jaune";
                    }
                    else {
                        _this.CouleurCanuleMasque = "vert";
                    }
                    ;
                    if (_this.PoidsNum <= 10 && _this.AgeNum <= 1) {
                        _this.TailleFiltre = "Filtre Néonat";
                    }
                    else if (_this.AgeNum <= 72 && _this.PoidsNum <= 20) {
                        _this.TailleFiltre = "Filtre pédiatrique";
                    }
                    else {
                        _this.TailleFiltre = "Filtre adulte";
                    }
                    ;
                    if (_this.PoidsNum <= 15) {
                        _this.LameIntubation = "Lame d'Oxford ou Miller 1";
                    }
                    else if (_this.PoidsNum <= 30) {
                        _this.LameIntubation = "Macintosh 2";
                    }
                    else {
                        _this.LameIntubation = "Macintosh 3";
                    }
                    ;
                    if (_this.PoidsNum <= 5) {
                        _this.TailleMasqueLarynge = 1;
                    }
                    else if (_this.PoidsNum <= 10) {
                        _this.TailleMasqueLarynge = 1.5;
                    }
                    else if (_this.PoidsNum <= 20) {
                        _this.TailleMasqueLarynge = 2;
                    }
                    else if (_this.PoidsNum <= 30) {
                        _this.TailleMasqueLarynge = 2.5;
                    }
                    else if (_this.PoidsNum <= 70) {
                        _this.TailleMasqueLarynge = 3;
                    }
                    else {
                        _this.TailleMasqueLarynge = "4 ou 5";
                    }
                    console.log('IonViewWillEnter OptionsPage');
                });
            });
        }));
    };
    ;
    PlateauVasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlateauVasPage');
    };
    PlateauVasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plateau-vas',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-vas\plateau-vas.html"*/'<!--\n  Generated template for the PlateauVasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Voies aériennes</ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list> \n      <ion-item-group>\n        <ion-item-divider (click)="ToggleVentilation()">\n          <ion-label color="dark-turquoise">Ventilation\n          <ion-icon *ngIf="!isShownVentilation" class= "OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownVentilation"  class= "OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n        </ion-label>\n        </ion-item-divider> \n\n        <ion-card *ngIf="isShownVentilation" class="drogueContainer">\n          <ion-item>\n            <ion-label class="dispositifVentilation">Taille du filtre : {{TailleFiltre}} </ion-label></ion-item>\n          <ion-item>\n            <ion-label class="dispositifVentilation">Canule de Guédel & masque : {{CouleurCanuleMasque}}</ion-label></ion-item>\n          <ion-item>\n            <ion-label class="dispositifVentilation">Volume courant : <b>{{Volumecourant}} mL</b>\n            <p class="dilutionDrogueInduction">pour 6 mL/kg</p></ion-label>\n          </ion-item>\n        </ion-card>\n        \n        <ion-item-divider (click)="ToggleIntubation()">\n          <ion-label color="dark-turquoise">Intubation\n          <ion-icon *ngIf="!isShownIntubation" class= "OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownIntubation" class= "OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n        </ion-label>\n        </ion-item-divider> \n\n        <ion-card *ngIf="isShownIntubation" class="drogueContainer">\n            <ion-item>\n              <ion-label class="dispositifVentilation">Lame intubation : {{LameIntubation}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label class="dispositifVentilation">Taille de la sonde d\'intubation : \n              <p class="dilutionDrogueInduction"> - Proposée selon l\'âge : {{TailleSITage}} mm</p>\n              <p class="dilutionDrogueInduction"> - Proposée selon le poids : {{TailleSITpoids}} mm</p></ion-label>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-label class="dispositifVentilation">Repère de fixation de la sonde : \n              <p class="dilutionDrogueInduction">Approx. : taille sonde x3 : {{RepereSITenfant}} </p>\n              <p class="dilutionDrogueInduction"><b> - Repère dents : {{RepereSITdents}} cm</b></p>\n              <p class="dilutionDrogueInduction"><b> - Repère nez : {{RepereSITnez}} cm</b></p>\n            </ion-label>\n              </ion-item>\n        </ion-card>\n          \n\n        <ion-item-divider (click)="ToggleMasqueLarynge()">\n          <ion-label color="dark-turquoise">Masque laryngé\n          <ion-icon *ngIf="!isShownMasqueLarynge" class= "OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownMasqueLarynge" class= "OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n        </ion-label>\n        </ion-item-divider> \n\n        <ion-card *ngIf="isShownMasqueLarynge" class="drogueContainer">\n            <ion-item>\n              <ion-label class="dispositifVentilation">Taille de masque : {{TailleMasqueLarynge}}\n              </ion-label>\n              </ion-item>\n        </ion-card>\n\n\n        <ion-item-divider (click)="ToggleIntubationDifficile()">\n          <ion-label color="danger">Intubation difficile\n          <ion-icon *ngIf="!isShownIntubationDifficile" class= "OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownIntubationDifficile" class= "OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n        </ion-label>\n        </ion-item-divider> \n\n        <ion-card class="IOTdifficile" *ngIf="isShownIntubationDifficile">\n              \n              <ion-card-content class="dispositifVentilation">\n                <p><b>RFE SFAR 2018</b></p>\n                <p><b>- IOT difficile non prévue : </b></p>\n                <br>\n                <p>En cas de ventilation ou d\'intubation difficile non prévue, utiliser un dispositif de \n                 ventilation supra-glottique pour tenter d\'assurer la ventilation de l\'enfant.</p>\n                 <br>\n               \n                <p><b>- IOT difficile prévue : </b></p>\n                <br>\n                <p>Il est probablement recommandé d’utiliser un vidéolaryngoscope en première\n                intention chez les patients avec intubation difficile prévue et ventilation au masque\n                possible ou après échec de la laryngoscopie directe afin d’augmenter les chances de\n                succès de l’intubation.</p>\n\n              </ion-card-content>\n        </ion-card>\n\n\n  </ion-item-group>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\plateau-vas\plateau-vas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlateauVasPage);
    return PlateauVasPage;
}());

//# sourceMappingURL=plateau-vas.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntretienAnesthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_accueil__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
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
        this.isShownInhalatoire = false;
        this.isShownHypnotiquesIntraVeineux = false;
        this.isShownAntalgiques = false;
        this.isShownCurares = false;
    }
    EntretienAnesthPage.prototype.ToggleInhalatoire = function () {
        this.isShownInhalatoire = !this.isShownInhalatoire;
        this.isShownHypnotiquesIntraVeineux = this.isShownAntalgiques = this.isShownCurares = false;
    };
    ;
    EntretienAnesthPage.prototype.ToggleHypnotiquesIntraVeineux = function () {
        this.isShownHypnotiquesIntraVeineux = !this.isShownHypnotiquesIntraVeineux;
        this.isShownInhalatoire = this.isShownAntalgiques = this.isShownCurares = false;
    };
    ;
    EntretienAnesthPage.prototype.ToggleAntalgiques = function () {
        this.isShownAntalgiques = !this.isShownAntalgiques;
        this.isShownCurares = this.isShownInhalatoire = this.isShownHypnotiquesIntraVeineux = false;
    };
    ;
    EntretienAnesthPage.prototype.ToggleCurares = function () {
        this.isShownCurares = !this.isShownCurares;
        this.isShownAntalgiques = this.isShownInhalatoire = this.isShownHypnotiquesIntraVeineux = false;
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
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__accueil_accueil__["a" /* AccueilPage */]);
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
        }));
    };
    EntretienAnesthPage.prototype.calculs = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
                            /*placer les calculs ici*/
                            if (_this.AgeNum <= 1) {
                                _this.CAMSevo = 3.3;
                            }
                            else if (_this.AgeNum <= 6) {
                                _this.CAMSevo = 3.1;
                            }
                            else if (_this.AgeNum <= 12) {
                                _this.CAMSevo = 2.7;
                            }
                            else if (_this.AgeNum <= 60) {
                                _this.CAMSevo = 2.5;
                            }
                            else {
                                _this.CAMSevo = 1.7;
                            }
                            ;
                            _this.PropoEntretien = Math.round((_this.PoidsNum * 10) * 10) / 10;
                            _this.HypnoEntretien = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            _this.RemiEntretien = Math.round((_this.PoidsNum * 10) * 10) / 10;
                            _this.RocuEntretien = Math.round((_this.PoidsNum * 0.6) * 10) / 10;
                            _this.TracEntretien = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.XyloEntretien = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.KetaEntretien = Math.round((_this.PoidsNum * 0.15) * 10) / 10;
                            _this.SufEntretien = Math.round((_this.PoidsNum * 0.2) * 10) / 10;
                        });
                    });
                });
            });
        }));
    };
    ;
    EntretienAnesthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entretien-anesth',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\entretien-anesth\entretien-anesth.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Entretien anesthésique</ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <ion-item-divider (click)="ToggleInhalatoire()" >\n    <ion-label color="dark-turquoise">Entretien inhalatoire\n  <ion-icon *ngIf="!isShownInhalatoire" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownInhalatoire" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownInhalatoire" class="drogueContainer">\n\n\n      <ion-item>         \n        <ion-label  color="warning" class="drogueInduction"> Sevoflurane : <b>{{CAMSevo}} %</b>\n      <p class="dilutionDrogueInduction">%EtHalogéné, bas DGF</p>\n    </ion-label>\n  </ion-item>\n\n  </ion-card>\n\n  <ion-item-divider (click)="ToggleHypnotiquesIntraVeineux()" >\n    <ion-label color="dark-turquoise">Hypnotiques intraveineux\n  <ion-icon *ngIf="!isShownHypnotiquesIntraVeineux" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownHypnotiquesIntraVeineux" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownHypnotiquesIntraVeineux" class="drogueContainer">\n\n<ion-item>        \n  <ion-label class="drogueInduction" color="warning">Propofol : <b>{{PropoEntretien}} mg/h</b>\n  <p class="dilutionDrogueInduction">Pour 10 mg/kg/h </p></ion-label>\n  </ion-item>\n<ion-item >         \n  <ion-label class="drogueInduction" color="orange">Midazolam : <b>{{HypnoEntretien}} mg/h</b>\n  <p class="dilutionDrogueInduction">Pour 0,1 mg/kg/h </p></ion-label>\n  </ion-item>\n</ion-card>  \n\n\n<ion-item-divider (click)="ToggleAntalgiques()" >\n  <ion-label color="dark-turquoise">Antalgiques\n<ion-icon *ngIf="!isShownAntalgiques" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownAntalgiques"class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n</ion-item-divider> \n\n<ion-card *ngIf="isShownAntalgiques" class="drogueContainer">\n\n<ion-item>         \n<ion-label class="drogueInduction" color="primary">Remifentanil : <b>{{RemiEntretien}} µg/h</b>\n<p  class="dilutionDrogueInduction">Pour 10 µg/kg/h </p></ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="primary">Sufentanil : <b>{{SufEntretien}} µg/h</b>\n<p  class="dilutionDrogueInduction">Pour 0,2 µg/kg/h </p></ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="dark">Xylocaïne : <b>{{XyloEntretien}} mg/h</b>\n<p  class="dilutionDrogueInduction">Pour 1 mg/kg/h </p></ion-label>\n</ion-item>\n\n<ion-item>         \n<ion-label class="drogueInduction" color="warning">Ketamine : <b>{{KetaEntretien}} mg/h</b>\n<p  class="dilutionDrogueInduction">Pour 0,15 mg/kg/h </p></ion-label>\n</ion-item>\n\n</ion-card>\n\n\n<ion-item-divider (click)="ToggleCurares()" >\n  <ion-label color="dark-turquoise">Curares\n<ion-icon *ngIf="!isShownCurares" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n<ion-icon *ngIf="isShownCurares" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n  </ion-label>\n</ion-item-divider> \n\n<ion-card *ngIf="isShownCurares"class="drogueContainer">\n\n<ion-item >         \n<ion-label color="danger" class="drogueInduction">Rocuronium : <b>{{RocuEntretien}} mg/h</b>\n<p class="dilutionDrogueInduction">Pour 0,6 mg/kg/h </p></ion-label>\n</ion-item>\n\n\n<ion-item >         \n<ion-label color="danger" class="drogueInduction">Tracrium : <b>{{TracEntretien}} mg/h</b>\n<p class="dilutionDrogueInduction"  >Pour 0,5 mg/kg/h </p></ion-label>\n</ion-item>\n\n</ion-card>  \n\n\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\entretien-anesth\entretien-anesth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EntretienAnesthPage);
    return EntretienAnesthPage;
}());

//# sourceMappingURL=entretien-anesth.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionFluidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options_options__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accueil_accueil__ = __webpack_require__(24);
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
        this.dureejeunelast = 6;
        this.chir = { pertes: "" };
        this.PertesChirNum = 2;
        this.Hbmesuree = 8;
        this.Hbsouhaitee = 12;
        this.isShownApports = false;
        this.isShownCGR = false;
        this.isShownAutresPSL = false;
    }
    GestionFluidesPage.prototype.ToggleApports = function () {
        this.isShownApports = !this.isShownApports;
        this.isShownCGR = this.isShownAutresPSL = false;
    };
    ;
    GestionFluidesPage.prototype.ToggleCGR = function () {
        this.isShownCGR = !this.isShownCGR;
        this.isShownApports = this.isShownAutresPSL = false;
    };
    ;
    GestionFluidesPage.prototype.ToggleAutresPSL = function () {
        this.isShownAutresPSL = !this.isShownAutresPSL;
        this.isShownCGR = this.isShownApports = false;
    };
    ;
    GestionFluidesPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alerte',
                            title: 'Minute papillon !',
                            message: 'Saisissez un âge et un poids pour le patient. Pensez aussi à renseigner la durée du jeûne pré-opératoire pour profiter du calcul des apports horaires recommandés',
                            buttons: [
                                {
                                    text: 'Nan',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (cancel) {
                                        console.log('Confirm Cancel: Nan');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function (OK) {
                                        console.log('Confirm Okay');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__accueil_accueil__["a" /* AccueilPage */]);
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
    GestionFluidesPage.prototype.loadcontent = function () {
        var _this = this;
        var promiseOptions = [];
        promiseOptions.push(this.storage.get('EstomacPlein').then(function (esto) {
            _this.estomaclast = esto;
            console.log('estomac plein? qqq', _this.estomaclast);
            if (_this.estomaclast == true) {
                _this.EstomacOuiNon = "plein";
            }
            else {
                _this.EstomacOuiNon = "vide";
            }
            ;
            _this.storage.get('DureeJeune').then(function (dureejeune) {
                _this.DureeJeune = dureejeune;
                console.log('duree du jeune renseignee de', _this.DureeJeune, 'heures.');
                if (_this.AgeNum < 15 * 12) {
                    _this.Solute = "B26 ou NaCl 0.9%";
                }
                else {
                    _this.Solute = "RL ou NaCl 0.9%";
                }
                ;
                if (_this.PoidsNum <= 10) {
                    _this.ApportBaseHoraire = Math.round(4 * _this.PoidsNum);
                }
                else if (_this.PoidsNum <= 20) {
                    _this.ApportBaseHoraire = Math.round(40 + (_this.PoidsNum - 10) * 2);
                }
                else if (_this.PoidsNum > 20) {
                    _this.ApportBaseHoraire = Math.round(60 + (_this.PoidsNum - 20));
                }
                ;
                _this.CompJeune = Math.round(_this.ApportBaseHoraire * _this.DureeJeune);
                _this.CompJeuneH1 = Math.round(_this.CompJeuneH2 = _this.CompJeune / 2);
                _this.CompPertesChir = Math.round(_this.PertesChirNum * _this.PoidsNum);
                _this.TotalH1 = Math.round(_this.ApportBaseHoraire + _this.CompJeuneH1 + _this.CompPertesChir);
                _this.TotalH2et3 = Math.round(_this.ApportBaseHoraire + _this.CompJeuneH1 / 2 + _this.CompPertesChir);
                _this.TotalHoraire = Math.round(_this.ApportBaseHoraire + (_this.CompPertesChir));
                if (_this.AgeNum <= 15 * 12) {
                    _this.UnitesPlaquettaires = Math.round(_this.PoidsNum / 5);
                }
                else {
                    _this.UnitesPlaquettaires = Math.round(_this.PoidsNum / 7);
                }
                ;
                _this.VolPFC = Math.round(_this.PoidsNum * 20);
                _this.VolCGR = Math.round(_this.PoidsNum * 16).toString() + " mL CGR";
                _this.DiffHb = 4;
                _this.MasseSanguine = Math.round(_this.PoidsNum * 80);
            });
        }));
    };
    GestionFluidesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                console.log('Le patient a', _this.AgeNum, "mois au total pour ", _this.PoidsNum, " kg.");
                _this.storage.get('Allergie').then(function (allergie) {
                    _this.Allergie = allergie;
                    _this.storage.get('DureeJeune').then(function (dureejeune) {
                        _this.DureeJeune = dureejeune;
                        console.log('duree du jeune renseignee de', _this.DureeJeune, 'heures.');
                        if (!_this.PoidsNum || !_this.AgeNum) {
                            _this.presentAlert();
                            _this.loadcontent();
                        }
                        else {
                            _this.loadcontent();
                        }
                        ;
                    });
                });
            });
        }));
    };
    ;
    GestionFluidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestionFluidesPage');
    };
    GestionFluidesPage.prototype.SelectPerteChir = function (ValeurChoisie) {
        this.perteschir = ValeurChoisie;
        console.log(this.perteschir);
        if (this.perteschir == "Mineures") {
            this.PertesChirNum = 2;
        }
        else if (this.perteschir == "Moderees") {
            this.PertesChirNum = 5;
        }
        else if (this.perteschir == "Importantes") {
            this.PertesChirNum = 10;
        }
        ;
        console.log('pertes chir =', this.PertesChirNum, 'mL/h');
        this.CompPertesChir = this.PertesChirNum * this.PoidsNum;
        this.TotalH1 = this.ApportBaseHoraire + this.CompJeuneH1 + this.CompPertesChir;
        this.TotalH2et3 = this.ApportBaseHoraire + this.CompJeuneH1 / 2 + this.CompPertesChir;
        this.TotalHoraire = this.ApportBaseHoraire + (this.CompPertesChir);
    };
    ;
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
            this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + "mL CGR";
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
            this.VolCGR = Math.round(this.DiffHb * this.PoidsNum * 4).toString() + " mL CGR";
        }
    };
    ;
    GestionFluidesPage.prototype.displayOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__options_options__["a" /* OptionsPage */]);
    };
    ;
    GestionFluidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestion-fluides',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\gestion-fluides\gestion-fluides.html"*/'<!--\n  Generated template for the GestionFluidesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gestion des apports</ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n      <p>Allergie : {{Allergie}}</p></ion-label> \n    </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n\n      <!-- ITEM MON PATIENT -->\n\n  \n      <!-- ITEMS CALCULES-->\n   \n      <ion-list>\n        <ion-item-group>\n          \n          <ion-item-divider (click)="ToggleApports()">\n            <ion-label color="dark-turquoise">Apports hydriques\n          <ion-icon *ngIf="!isShownApports" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownApports" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n            </ion-label>\n          </ion-item-divider> \n\n\n          <ion-card *ngIf="isShownApports" class="drogueContainer">\n          <ion-item>\n            <ion-label class="drogueInduction">Besoins de base : <b>{{ApportBaseHoraire}} mL/h</b>\n            <p class="dilutionDrogueInduction">{{Solute}}</p></ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class="drogueInduction">Compensation du jeûne ({{DureeJeune}} heures) : <b>{{CompJeune}} mL</b>\n            <p class="dilutionDrogueInduction">{{Solute}}</p>\n            <p class="dilutionDrogueInduction">Passer {{CompJeuneH1}} mL sur 1h puis {{CompJeuneH2}} mL sur 2h</p>\n          </ion-label>\n          </ion-item>\n\n          <ion-item> <ion-label class="drogueInduction" >Pertes chirurgicales</ion-label>\n            <ion-select class="drogueInduction" #newselect (ionChange)="SelectPerteChir(chir.pertes)" [(ngModel)]="chir.pertes" interface="action-sheet" placeholder="choisir"\n             okText="OK" cancelText="Retour">\n              <ion-option checked="true" value="Mineures">Mineures (2 mL/kg/h)</ion-option>\n              <ion-option value="Moderees">Modérées (5 mL/kg/h)</ion-option>\n              <ion-option value="Importantes">Importantes (10 mL/kg/h)</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label class="drogueInduction">Pertes insensibles\n            <p class="dilutionDrogueInduction"><b>{{Solute}} : {{CompPertesChir}} mL/h</b></p>\n          </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class="drogueInduction">Apports recommandés : <b>\n            <p class="dilutionDrogueInduction"> - La 1ere heure {{Solute}} : {{TotalH1}} mL</p>\n            <p class="dilutionDrogueInduction"> - La 2e et la 3e heure {{Solute}} : {{TotalH2et3}} mL</p>\n            <p class="dilutionDrogueInduction"> - puis {{Solute}} : {{TotalHoraire}} mL/h</p>\n          </b>\n        </ion-label>\n          </ion-item>\n        </ion-card>\n\n          \n\n          <ion-item-divider (click)="ToggleCGR()">\n            <ion-label color="danger">Concentré de globules rouges\n          <ion-icon *ngIf="!isShownCGR" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownCGR" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n            </ion-label>\n          </ion-item-divider> \n\n          <ion-card *ngIf="isShownCGR" class="drogueContainer">\n          <ion-item>\n            <ion-label class="drogueInduction">\n              Masse sanguine estimée : <b>{{MasseSanguine}} mL</b>\n              <p class="dilutionDrogueInduction">(pour 80 mL/kg)</p>\n          </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label color="danger" class="drogueInduction">Hémogloginémie mesurée : <b>{{Hbmesuree}} g/dL</b></ion-label>\n            <ion-range max="16" step="1"  pin="true" color="danger" (ionChange)="MesureeHb()" [(ngModel)]="Hbmesuree"> </ion-range>\n          </ion-item>\n\n          <ion-item >\n             <ion-label color="turquoise-fonce" class="drogueInduction">Objectif d\'hémoglobinémie : <b>{{Hbsouhaitee}} g/dL</b></ion-label>\n            <ion-range  color="turquoise-fonce" max="16" pin="true" step="1" (ionChange)="SouhaiteeHb()" [(ngModel)]="Hbsouhaitee"> </ion-range>\n          </ion-item>\n\n          <ion-item>\n            <ion-label class="drogueInduction">Transfuser : {{VolCGR}}\n              <p class="dilutionDrogueInduction"><b>Pour corriger {{DiffHb}} g/dL d\'hémoglobine</b></p>\n            </ion-label>\n        </ion-item>\n        </ion-card>\n\n        <ion-item-divider (click)="ToggleAutresPSL()">\n          <ion-label  color="warning">Autres PSL\n            <ion-icon *ngIf="!isShownAutresPSL" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownAutresPSL" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n          </ion-label>\n        </ion-item-divider> \n\n          <ion-card *ngIf="isShownAutresPSL" class="drogueContainer">\n          <ion-item>Unités plaquettaires\n            <p><b>Passer {{UnitesPlaquettaires}} UI Plaquettaires</b></p>\n          </ion-item>\n          <ion-item>Plasma frais congelé\n            <p><b>Passer {{VolPFC}} mL de PFC</b></p>\n          </ion-item>\n        </ion-card>\n\n        </ion-item-group>\n        </ion-list>\n\n        <ion-card class="nb" padding>   Si ce n\'est pas déjà fait, renseignez la durée du jeune dans les options afin d\'ajuster les apports hydriques en conséquence.\n          <br><br>   \n          <button ion-button color="turquoise-fonce" class="homeButtons" (click)="displayOptions()"> Options </button></ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\gestion-fluides\gestion-fluides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GestionFluidesPage);
    return GestionFluidesPage;
}());

//# sourceMappingURL=gestion-fluides.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil_accueil__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
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
        this.options = { dureejeune: "", estomacplein: "false" };
        this.DureeJeune = 6;
        this.dureejeunelast = 6;
        this.Allergie = "Aucune";
    }
    OptionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                console.log('Le patient a', _this.AgeNum, "mois au total pour ", _this.PoidsNum, " kg.");
                _this.storage.get('Allergie').then(function (allergie) {
                    _this.Allergie = allergie;
                });
            });
        }));
        var promiseOptions = [];
        promiseOptions.push(this.storage.get('EstomacPlein').then(function (esto) {
            _this.estomaclast = esto;
            console.log('estomac plein? qqq', _this.estomaclast);
            _this.storage.get('DureeJeune').then(function (dureejeune) {
                _this.DureeJeune = dureejeune;
                console.log('duree du jeune renseignee de', _this.DureeJeune, 'heures.');
            });
        }));
        console.log('IonViewWillEnter OptionsPage');
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
    OptionsPage.prototype.addTaille = function (Taille) {
        this.Taille = parseInt(Taille);
        this.storage.set("Taille", this.Taille);
        console.log("la taille enregistrée est de ", this.Taille, " cm");
    };
    ;
    OptionsPage.prototype.addAllergie = function () {
        this.Allergie = this.NewAllergie;
        this.storage.set('Allergie', this.Allergie);
        console.log(this.Allergie, 'a bien été enregistrée');
    };
    ;
    OptionsPage.prototype.FnEstomacPlein = function () {
        this.EstomacPlein = !this.EstomacPlein;
        console.log("l'estomac est plein ?", this.EstomacPlein);
        if (this.EstomacPlein == true) {
            this.EstomacOuiNon = "plein";
        }
        else {
            this.EstomacOuiNon = "vide";
        }
        ;
        this.storage.set('EstomacPlein', this.EstomacPlein);
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
            selector: 'page-options',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\options\options.html"*/'\n\n    <ion-header translucent>\n      <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Options</ion-title>\n      </ion-navbar>\n      <ion-item color="turquoise-fonce"> \n        <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n          <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n        <p>Allergie : {{Allergie}}</p></ion-label>\n        <ion-icon slot="end"></ion-icon> \n      </ion-item>\n    </ion-header>\n\n\n<ion-content padding>\n\n  <ion-item color="turquoise">Risque anesthésique</ion-item>\n\n\n  <ion-item>\n    <ion-label>Allergies</ion-label>\n    <ion-input  inputmode ="text" type="text" (ionChange)="addAllergie()" [(ngModel)]="NewAllergie" placeholder="Renseigner ici"></ion-input>\n    </ion-item>\n\n    \n<ion-item>\n  <ion-label>Durée du jeune pré-op : <b>{{DureeJeune}} heures</b></ion-label>\n  <ion-range color="turquoise-fonce" max="12" step="1" ticks="true" snaps (ionChange)="FnDureeJeune()" [(ngModel)]="DureeJeune"> </ion-range>\n</ion-item>\n  \n\n  <ion-item>\n    <ion-label>Estomac plein</ion-label>\n    <ion-toggle color="turquoise-fonce" checked="{{estomaclast}}" [(ngModel)]="options.estomacplein" (ionChange)="FnEstomacPlein(options)"></ion-toggle>\n  </ion-item>\n\n<hr>\n\n  <ion-item color="turquoise" >Biométrie</ion-item>\n\n  <ion-item>\n    <ion-label position="stacked">Taille (cm)</ion-label>\n    <ion-input inputmode ="number" type="number" (ionChange)="addTaille(Taille)" [(ngModel)]="Taille" placeholder="Renseigner"></ion-input>\n  </ion-item>\n\n  <hr>\n\n  <ion-item color="turquoise" >Prématurité & APC</ion-item>\n\n  <ion-item>\n    <ion-label position="stacked">Terme naissance (SA)</ion-label>\n    <ion-input inputmode ="number" type="number" (ionChange)="addTerme(Terme)" [(ngModel)]="Terme" placeholder="Renseigner"></ion-input>\n  </ion-item>\n\n  <ion-item>APC : {{APC}} semaines</ion-item>\n\n  <hr>\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\options\options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], OptionsPage);
    return OptionsPage;
}());

;
//# sourceMappingURL=options.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocoRegionalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(24);
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
        this.isShownAPD = false;
        this.isShownRachi = false;
        this.isShownALRP = false;
    }
    LocoRegionalePage.prototype.ToggleAPD = function () {
        this.isShownAPD = !this.isShownAPD;
        this.isShownRachi = this.isShownALRP = false;
    };
    ;
    LocoRegionalePage.prototype.ToggleRachi = function () {
        this.isShownRachi = !this.isShownRachi;
        this.isShownAPD = this.isShownALRP = false;
    };
    ;
    LocoRegionalePage.prototype.ToggleALRP = function () {
        this.isShownALRP = !this.isShownALRP;
        this.isShownAPD = this.isShownRachi = false;
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
    LocoRegionalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocoRegionalePage');
    };
    LocoRegionalePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
        }));
    };
    LocoRegionalePage.prototype.calculs = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
                            /*placer les calculs ici*/
                            _this.Kemura = Math.round(((10 + _this.PoidsNum) * 0.8) * 10) / 10;
                            _this.Busoni = Math.round(((2 * (_this.AgeNum) / 12) + 10) * 10) / 10;
                            _this.BolusPIEBRopiSuf = Math.round((_this.PoidsNum * 0.2) * 10) / 10;
                            _this.BolusPCEARopiSuf = Math.round((_this.PoidsNum * 0.15) * 10) / 10;
                            _this.DoseMaxPCEARopiSuf = Math.round((_this.PoidsNum * 1.5) * 10) / 10;
                            _this.VolBupi5NN = (Math.round((_this.PoidsNum * 0.2) * 10) / 10 + " mL");
                            if (_this.VolBupi5NN >= 1) {
                                _this.VolBupi5NN = "NA - poids > 5 kg";
                            }
                            _this.VolBAXmin = Math.round((_this.PoidsNum * 0.2) * 10) / 10;
                            _this.VolBAXmax = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.VolFEMmin = Math.round((_this.PoidsNum * 0.3) * 10) / 10;
                            _this.VolFEMmax = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.VolSciatMin = Math.round((_this.PoidsNum * 0.3) * 10) / 10;
                            _this.VolSciatMax = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.VolIH = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.VolPenien = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            _this.VolBPV = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.VolTAPmin = Math.round((_this.PoidsNum * 0.3) * 10) / 10;
                            _this.VolTAPmax = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                        });
                    });
                });
            });
        }));
    };
    ;
    LocoRegionalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loco-regionale',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\loco-regionale\loco-regionale.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Anesthésie loco-régionale</ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <ion-item-divider (click)="ToggleAPD()">\n    <ion-label color="dark-turquoise">Anesthésie péridurale pédiatrique\n  <ion-icon *ngIf="!isShownAPD" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownAPD" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownAPD" class="drogueContainer">\n\n      <ion-item> \n        <ion-label class="drogueInduction">\n        <b>Ponction :</b> \n        <p>Espace L4-L5 (voie de Taylor),</p> \n        <p>Entre les épines iliaques postérieures,</p>\n        <p>Aiguille pédiatrique (graduation/5mm). </p> \n      </ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label class="drogueInduction">\n        <b>Distance</b> de l\'espace péridural :\n        <p>Estimation</p>\n      - Selon Kemura (poids) : <b>{{Kemura}} mm</b> <br>\n      - Selon Busoni (âge, après 2 ans) : <b>{{Busoni}} mm</b> <br>\n      - Cathétériser l\'espace sur <b>30 mm</b>\n\n      </ion-label>\n\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Cassette de PIEB + PCEA :</b>\n        <p>- Volume total de 50 mL</p>\n        <p>- Ropi 1 mg/mL + Suf 0,2 µg/mL</p>\n        </ion-label>\n        </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction">\n        <b>Posologies</b> (suggestions) :\n      <p> - Bolus horaire : <b>{{BolusPIEBRopiSuf}} mL</b> toutes les heures</p>\n      <p> - Bolus à demande : <b>{{BolusPCEARopiSuf}} mL</b>, PR 20 min</p>\n      <p> - Dose max. : <b>{{DoseMaxPCEARopiSuf}} mL</b> toutes les 4 heures</p>\n      </ion-label>\n      </ion-item>\n  \n  </ion-card>\n\n  <ion-item-divider (click)="ToggleRachi()">\n    <ion-label color="dark-turquoise">Rachi-anesthésie néo-natale\n  <ion-icon *ngIf="!isShownRachi" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownRachi" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownRachi" class="drogueContainer">\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Indications</b> :\n        <p>- Chirurgie sous ombilicale</p>\n        <p>- Nouveau né de moins de 5 kg.</p>\n      </ion-label></ion-item>\n\n      <ion-item> <ion-label class="drogueInduction"><b>Ponction :</b> \n        <p>Espace L4-L5 (voie de Taylor),</p> \n        <p>Entre les épines iliaques postérieures,</p>\n        <p>Aguille 25G courte (bleue).</p>  </ion-label> </ion-item>\n    \n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Bupivacaïne hyperbare</b>\n        <p>- 5 mg/mL</p>\n        <p>- {{VolBupi5NN}} (pour 0,2 mL/kg)</p>\n        <p>- Utiliser une seringue à insuline.</p>\n      </ion-label>\n        </ion-item>\n\n      <div class="astucediv" padding = "15 px">\n        <img class="lightbulb" src="/assets/imgs/light-bulb.png">\n        <p class="astuce"> \n        <b>L\'astuce de Joëlle</b> : Quelques gouttes de G30% sur les lèvres, avant, pendant et après la rachianesthésie</p>\n        \n        </div>\n  \n  </ion-card>\n\n\n  <ion-item-divider (click)="ToggleALRP()">\n    <ion-label color="dark-turquoise">Blocs périphériques\n  <ion-icon *ngIf="!isShownALRP" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownALRP" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n  <ion-card *ngIf="isShownALRP" class="drogueContainer">\n\n    <ion-card-content>\n\n  <ion-item >\n    <ion-label class="drogueInduction"><b>Dilutions suggérées :</b> \n      <p> - Ropivacaïne : 2 mg/mL</p>\n      <p> - Lévobupivacaïne : 2,5 mg/mL</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class="drogueInduction"> <b>Posologies suggérées :</b> \n      <p>(en injection unique)</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-grid class="tableauALR" fixed="true">\n    <ion-row >\n      <ion-col class="tableauALR">\n      Bloc\n      </ion-col>\n      <ion-col class="tableauALR">\n      Volume/poids\n      </ion-col>\n      <ion-col class="tableauALR">\n      Mon patient\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Axillaire\n            </ion-col>\n      <ion-col>\n      0,2 à 0,5 mL/kg\n      </ion-col>\n      <ion-col>\n     {{VolBAXmin}} à {{VolBAXmax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Fémoral\n            </ion-col>\n      <ion-col>\n        0,3 à 1 mL/kg\n      </ion-col>\n      <ion-col>\n      {{VolFEMmin}} à {{VolFEMmax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Sciatique\n            </ion-col>\n      <ion-col>\n       0,3 à 1 mL/kg\n      </ion-col>\n      <ion-col>\n      {{VolSciatMin}} à {{VolSciatMax}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Ilio-hypogastrique\n            </ion-col>\n      <ion-col>\n       0,5 mL/kg\n      </ion-col>\n      <ion-col>\n        {{VolIH}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Pénien\n            </ion-col>\n      <ion-col>\n       0,1 mL/kg\n      </ion-col>\n      <ion-col>\n    {{VolPenien}} mL\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        Paravertébral\n            </ion-col>\n      <ion-col>\n       0,5 mL/kg\n      </ion-col>\n      <ion-col>\n        {{VolBPV}} mL\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      TAP\n          </ion-col>\n    <ion-col>\n     0,3 à 0,5 mL/kg\n    </ion-col>\n    <ion-col>\n      {{VolTAPmin}} à {{VolTAPmax}} mL\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      Carré des lombes \n          </ion-col>\n    <ion-col>\n     Volume\n    </ion-col>\n    <ion-col>\n      Volume\n     </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      Erecteurs du rachis\n    </ion-col>\n    <ion-col>\n     Volume\n    </ion-col>\n    <ion-col>\n      Volume\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\loco-regionale\loco-regionale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LocoRegionalePage);
    return LocoRegionalePage;
}());

//# sourceMappingURL=loco-regionale.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntalgiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(24);
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
        this.isShownAntiEmet = false;
        this.isShownAntiCoag = false;
    }
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
    AntalgiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntalgiePage');
    };
    ;
    AntalgiePage.prototype.TogglePalier1 = function () {
        this.isShownPal1 = !this.isShownPal1;
        this.isShownPal2 = this.isShownPal3 = this.isShownAutres = this.isShownAntiEmet = this.isShownAntiCoag = false;
    };
    ;
    AntalgiePage.prototype.TogglePalier2 = function () {
        this.isShownPal2 = !this.isShownPal2;
        this.isShownPal1 = this.isShownPal3 = this.isShownAutres = this.isShownAntiEmet = this.isShownAntiCoag = false;
    };
    ;
    AntalgiePage.prototype.TogglePalier3 = function () {
        this.isShownPal3 = !this.isShownPal3;
        this.isShownPal1 = this.isShownPal2 = this.isShownAutres = this.isShownAntiEmet = this.isShownAntiCoag = false;
    };
    ;
    AntalgiePage.prototype.ToggleAutres = function () {
        this.isShownAutres = !this.isShownAutres;
        this.isShownPal1 = this.isShownPal3 = this.isShownPal2 = this.isShownAntiEmet = this.isShownAntiCoag = false;
    };
    ;
    AntalgiePage.prototype.ToggleAntiEmet = function () {
        this.isShownAntiEmet = !this.isShownAntiEmet;
        this.isShownPal1 = this.isShownPal3 = this.isShownPal2 = this.isShownAutres = this.isShownAntiCoag = false;
    };
    ;
    AntalgiePage.prototype.ToggleAntiCoag = function () {
        this.isShownAntiCoag = !this.isShownAntiCoag;
        this.isShownPal1 = this.isShownPal3 = this.isShownPal2 = this.isShownAutres = this.isShownAntiEmet = false;
    };
    ;
    AntalgiePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
        }));
    };
    AntalgiePage.prototype.calculs = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
                            /*Palier 1*/
                            _this.AdminParacetamol = Math.round((_this.PoidsNum * 15) * 10) / 10;
                            if (_this.AdminParacetamol >= 1000) {
                                _this.AdminParacetamol = 1000;
                            }
                            _this.AdminKeto = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            if (_this.AdminKeto >= 100) {
                                _this.AdminKeto = 100;
                            }
                            _this.AdminIbu = Math.round((_this.PoidsNum * 10) * 10) / 10;
                            if (_this.AdminIbu >= 400) {
                                _this.AdminIbu = 400;
                            }
                            /*Palier 2*/
                            _this.AdminNubain = Math.round((_this.PoidsNum * 0.2) * 10) / 10;
                            if (_this.AdminNubain >= 10) {
                                _this.AdminNubain = 10;
                            }
                            _this.AdminNubainHdJ = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            if (_this.AdminNubainHdJ >= 10) {
                                _this.AdminNubainHdJ = 10;
                            }
                            _this.AdminAcupan = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            if (_this.AdminAcupan >= 120) {
                                _this.AdminAcupan = 120;
                            }
                            _this.AdminTramadol = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            if (_this.AdminTramadol >= 100) {
                                _this.AdminTramadol = 100;
                            }
                            /*Palier 3*/
                            _this.AdminMorphineBO = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            _this.AdminMorphineTitration = Math.round((_this.PoidsNum * 0.025) * 10) / 10;
                            _this.AdminMorphinePCA = Math.round((_this.PoidsNum * 0.02) * 10) / 10;
                            _this.AdminMorphinePCAMax = Math.round((_this.PoidsNum * 0.4) * 10) / 10;
                            _this.AdminMorphinePOLP = Math.round((_this.PoidsNum * 1) * 10) / 10;
                            _this.AdminMorphinePOID = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            /*Autres antalgiques*/
                            _this.AdminNeurontin = Math.round((_this.PoidsNum * 5) * 10) / 10;
                            if (_this.AdminNeurontin >= 300) {
                                _this.AdminNeurontin = 300;
                            }
                            _this.AdminSpasfonIV = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            if (_this.AdminSpasfonIV >= 120) {
                                _this.AdminSpasfonIV = 120;
                            }
                            _this.AdminSpasfonPO = Math.round((_this.PoidsNum * 1.5) * 10) / 10;
                            if (_this.AdminSpasfonPO >= 120) {
                                _this.AdminSpasfonPO = 120;
                            }
                            _this.AdminLaroxylIV = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.AdminLaroxylPO = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.AdminRivotrilPO = Math.round((_this.PoidsNum * 0.01) * 10) / 10;
                            _this.GouttesRivotril = Math.round(_this.PoidsNum / 10);
                            _this.AdminClonidineIVSE = Math.round((_this.PoidsNum * 0.5) * 10) / 10;
                            _this.AdminClonidinePO = Math.round((_this.PoidsNum * 5) * 10) / 10;
                            /* Anti émétiques */
                            _this.AdminZophren = Math.round((_this.PoidsNum * 0.1) * 10) / 10;
                            if (_this.AdminZophren >= 8) {
                                _this.AdminZophren = 8;
                            }
                            _this.AdminDroleptan = Math.round((_this.PoidsNum * 25) * 10) / 10;
                            if (_this.AdminDroleptan >= 1250) {
                                _this.AdminDroleptan = 1250;
                            }
                            /* Anticoagulation*/
                            _this.AdminHBPMpreventive = Math.round((_this.PoidsNum * 100) * 10) / 10;
                            if (_this.AgeNum <= 6 * 12) {
                                _this.AdminHBPMefficace = Math.round((_this.PoidsNum * 130) * 10) / 10;
                                _this.PosoHBPMefficace = "130 UI/kg x2/j avant 6 ans";
                            }
                            else {
                                _this.AdminHBPMefficace = Math.round((_this.PoidsNum * 100) * 10) / 10;
                                _this.PosoHBPMefficace = "100 UI/kg x2/j après 6 ans";
                            }
                            ;
                            _this.AdminHNF50 = Math.round((_this.PoidsNum * 50) * 10) / 10;
                            _this.AdminHNF100 = Math.round((_this.PoidsNum * 100) * 10) / 10;
                            _this.AdminHNFentretien = Math.round((_this.PoidsNum * 20) * 10) / 10;
                        });
                    });
                });
            });
        }));
    };
    AntalgiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-antalgie',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antalgie\antalgie.html"*/'<!--\n  Generated template for the AntalgiePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Antalgie & post-op </ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-group>\n      <ion-item-divider (click)="TogglePalier1()"> \n        <ion-label color="dark-turquoise">Palier 1 \n          <ion-icon *ngIf="!isShownPal1" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal1" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n        </ion-label>\n      </ion-item-divider> \n  \n      <ion-card *ngIf="isShownPal1" class="drogueContainer">\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Paracétamol : {{AdminParacetamol}} mg</b>\n          <p class="dilutionDrogueInduction">pour 15 mg/kg, IVL ou PO toutes les 6h</p>\n        </ion-label>\n      </ion-item>\n  \n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction"><b>Ketoprofene (Profenid<span>&#174;</span>) : {{AdminKeto}} mg</b>\n          <p class="dilutionDrogueInduction">pour 1 mg/kg, IVL toutes les 8 h</p> \n        </ion-label>\n      </ion-item>\n      \n      <div class="AMM">AMM <br> IV 15 ans <br> Sirop 6 mois</div>\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction"><b>Ibuprofene : {{AdminIbu}} mg</b>\n          <p class="dilutionDrogueInduction">pour 10 mg/kg, PO toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 3 mois</div>\n\n    </ion-card>\n\n      \n  \n      <ion-item-divider (click)="TogglePalier2()">\n        <ion-label color="dark-turquoise">Palier 2\n\n          <ion-icon *ngIf="!isShownPal2" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal2" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-card *ngIf="isShownPal2" class="drogueContainer">\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction">\n          <b>Nalbuphine (Nubain<span>&#174;</span>) : {{AdminNubain}} mg</b>\n          <p class="dilutionDrogueInduction">pour 0,2 mg/kg, IVL toutes les 4h</p> \n          <p class="dilutionDrogueInduction">en ambulatoire, diviser par 2 : {{AdminNubainHdJ}} mg</p>\n          <p class="dilutionDrogueInduction">injecter sur 20 minutes avant 1 an</p>\n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 18 mois</div>\n      \n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction"><b>Nefopam (Acupan<span>&#174;</span>) : {{AdminAcupan}} mg/j</b>\n          <p class="dilutionDrogueInduction">pour 1 mg/kg/j IVSE continu</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 15 ans</div>\n      \n      <ion-item class="avecAMM" >\n        <ion-label class="drogueInduction"><b>Tramadol (Contramal<span>&#174;</span>) : {{AdminTramadol}} mg</b>\n          <p class="dilutionDrogueInduction">pour 1 mg/kg, IVL ou PO toutes les 6h</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> PO 3 ans <br> IV 15 ans</div>\n\n    </ion-card>\n  \n      <ion-item-divider (click)="TogglePalier3()">\n        <ion-label color="dark-turquoise">Palier 3\n\n          <ion-icon *ngIf="!isShownPal3" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownPal3" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n\n      <ion-card *ngIf="isShownPal3" class="drogueContainer">\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Morphine avant réveil : {{AdminMorphineBO}} mg IVD</b>\n          <p class="dilutionDrogueInduction">pour 100 µg/kg, une seule fois</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Morphine en titration : {{AdminMorphineTitration}} mg IVD</b>\n          <p class="dilutionDrogueInduction">pour 25 µg/kg, toutes les 3 min</p> \n          <p class="dilutionDrogueInduction">revoir après 4 boli</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Morphine en PCA : {{AdminMorphinePCA}} mg IVL</b>\n          <p class="dilutionDrogueInduction">pour 20 µg/kg, PR de 5 min</p> \n          <p class="dilutionDrogueInduction">Dose max : {{AdminMorphinePCAMax}} mg (400 µg/kg), pour 4h</p> \n        </ion-label>\n      </ion-item> \n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction"><b>Morphine per os : </b>\n          <p class="dilutionDrogueInduction">- {{AdminMorphinePOLP}} mg LP toutes les 12h (1 mg/kg) PO</p> \n          <p class="dilutionDrogueInduction">- {{AdminMorphinePOID}} mg toutes les 4h SB (0,1 mg/kg) PO</p> \n        </ion-label>\n      </ion-item> \n\n      <div class="AMM">AMM <br> > 6 mois</div>  \n\n    </ion-card>\n\n\n      <ion-item-divider (click)="ToggleAutres()">\n        <ion-label color="dark-turquoise">Autres antalgiques\n\n          <ion-icon *ngIf="!isShownAutres" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownAutres" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAutres" class="drogueContainer">\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction"><b>Gabapentine (Neurontin<span>&#174;</span>): {{AdminNeurontin}} mg PO</b>\n          <p class="dilutionDrogueInduction">pour 5 mg/kg, toutes les 8h</p> \n          <p class="dilutionDrogueInduction">NB comprimés de 150 ou 300 mg</p>\n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 6 ans</div>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Phloroglucinol (Spasfon<span>&#174;</span>) : </b>\n          <p class="dilutionDrogueInduction">- <b>{{AdminSpasfonIV}} mg</b> (0,5 mg/kg) IVL, toutes les 6h</p> \n          <p class="dilutionDrogueInduction">- <b>{{AdminSpasfonPO}} mg</b> (1,5 mg/kg) PO, toutes les 6h</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item class="avecAMM">\n        <ion-label class="drogueInduction"><b>Amitryptiline (Laroxyl<span>&#174;</span>) : </b>\n          <p class="dilutionDrogueInduction">- <b>{{AdminLaroxylIV}} mg</b> (0,5 mg/kg/j) IVSE sur 6h, 1 fois</p> \n          <p class="dilutionDrogueInduction">- <b>{{AdminLaroxylPO}} mg</b> (0,5 mg/kg/j) PO, 1 fois</p> \n        </ion-label>\n      </ion-item>\n\n      <div class="AMM">AMM <br> > 6 ans</div>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Clonazepam (Rivotril<span>&#174;</span>) : {{AdminRivotrilPO}} mg PO</b>\n          <p class="dilutionDrogueInduction">- pour 0,01 mg/kg, toutes les 8h</p> \n          <p class="dilutionDrogueInduction">- soit <b>{{GouttesRivotril}} gouttes</b> (1 gtte/10kg), 3 fois par jour</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Catapressan (Clonidine <span>&#174;</span>) : </b>\n          <p class="dilutionDrogueInduction">- <b>{{AdminClonidineIVSE}} µg/h</b> (0,5 µg/kg/h) IVSE</p> \n          <p class="dilutionDrogueInduction">> possibilité de doubler si insuffisant</p>\n          <p class="dilutionDrogueInduction">- <b>{{AdminClonidinePO}} mg</b> (5 µg/kg) PO, toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      </ion-card>\n\n\n      <ion-item-divider (click)="ToggleAntiEmet()">\n        <ion-label color="dark-turquoise">Anti-émétiques\n\n          <ion-icon *ngIf="!isShownAntiEmet" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownAntiEmet" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAntiEmet" class="drogueContainer">\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Ondansétron (Zophren<span>&#174;</span>): {{AdminZophren}} mg IVL ou PO</b>\n          <p class="dilutionDrogueInduction">pour 0,1 mg/kg, toutes les 8h</p> \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Dropéridol (Droleptan<span>&#174;</span>) : {{AdminDroleptan}} µg IVL</b>\n          <p class="dilutionDrogueInduction">pour 25 µg/kg , renouvelable 1 fois</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card>\n\n      <ion-item-divider (click)="ToggleAntiCoag()">\n        <ion-label color="dark-turquoise">Anti-coagulants\n\n          <ion-icon *ngIf="!isShownAntiCoag" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownAntiCoag" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n\n        </ion-label>\n      </ion-item-divider>\n  \n      <ion-card *ngIf="isShownAntiCoag" class="drogueContainer">\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Enoxaparine (Lovenox<span>&#174;</span>):</b>\n          <p class="dilutionDrogueInduction">Préventive : {{AdminHBPMpreventive}} UI/j </p>\n          <p class="dilutionDrogueInduction">- Pour 100 UI/kg/j</p>\n          <p class="dilutionDrogueInduction"><b>- Administrer en 2 injections avant 1 mois</b></p>\n          <p class="dilutionDrogueInduction">Curative : {{AdminHBPMefficace}} UI <b>x2/j</b> </p>\n          <p class="dilutionDrogueInduction">- Pour {{PosoHBPMefficace}}</p>\n          <p class="dilutionDrogueInduction"><b>- Obj aXa [0,5-1] ; 4h après 3e inj.</b></p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>HNF efficace :</b>\n    \n          <p class="dilutionDrogueInduction">Bolus : {{AdminHNF50}} à {{AdminHNF100}} UI </p>\n          <p class="dilutionDrogueInduction">- Pour 50 à 100 UI/kg</p>\n      \n          <p class="dilutionDrogueInduction">Entretien : {{AdminHNFentretien}} UI/h</p>\n          <p class="dilutionDrogueInduction">- Pour 20 UI/kg/h</p>\n          <p class="dilutionDrogueInduction"><b>- Obj aXa [0,3-0,6] à H4.</b></p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="drogueInduction"><b>Protamine :</b>\n          <br>\n          <p class="dilutionDrogueInduction">1 mg pour 100 UI d\'héparine administrées</p>\n          <p class="dilutionDrogueInduction">IV <b>lent</b> sans dépasser 50mg/10min.</p>\n        </ion-label>\n      </ion-item>\n\n      </ion-card> \n\n    </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antalgie\antalgie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AntalgiePage);
    return AntalgiePage;
}());

;
//# sourceMappingURL=antalgie.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrgencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(24);
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
        this.isShownHypoTA = false;
        this.isShownACR = false;
        this.isShownChocAna = false;
        this.isShownHTM = false;
        this.isShownIAL = false;
    }
    /* déclaration des fonctions*/
    UrgencePage.prototype.calculs = function () {
        console.log("pret pr le calcul", this.PoidsNum);
        this.ageAnnees = Math.round((this.AgeNum / 12) * 10) / 10;
        this.PAShypoTA = Math.round((((this.AgeNum / 12) * 2) + 70) * 10) / 10;
        if (this.AgeNum <= 15 * 12) {
            this.SoluteRemplissage = "B26";
        }
        else {
            this.SoluteRemplissage = "Ringer Lactate";
        }
        this.VolRemplissage = Math.round(((this.PoidsNum) * 10) * 10) / 10;
        if (this.AgeNum <= 12) {
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.3) * 10) / 10;
        }
        else if (this.AgeNum <= 36) {
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.2) * 10) / 10;
        }
        else {
            this.AdminEphedrine = Math.round((this.PoidsNum * 0.1) * 10) / 10;
        }
        ;
        this.CEEACR = Math.round((this.PoidsNum * 4) * 10) / 10;
        this.PosoAdrenalineACR = Math.round((this.PoidsNum * 10) * 10) / 10;
        this.PosoCordaroneACR = Math.round((this.PoidsNum * 5) * 10) / 10;
        this.PosoBicarACR = Math.round((this.PoidsNum * 2) * 10) / 10;
        this.PosoAdrenalineAnaph = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.PosoSoluAnaph = Math.round((this.PoidsNum * 1) * 10) / 10;
        this.AdminDantroleneHTM = Math.round((this.PoidsNum * 2.5) * 10) / 10;
        this.PosoRivotrilIAL = Math.round((this.PoidsNum * 15) * 10) / 10;
        this.PosoIntralipidesIAL = Math.round((this.PoidsNum * 3) * 10) / 10;
    };
    ;
    /*1. récupération des données du formulaire patient */
    UrgencePage.prototype.getdata = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
    /* 3. Toggle des cartes */
    UrgencePage.prototype.ToggleHypoTA = function () {
        this.isShownHypoTA = !this.isShownHypoTA;
        this.isShownACR = this.isShownChocAna = this.isShownHTM = this.isShownIAL = false;
    };
    ;
    UrgencePage.prototype.ToggleACR = function () {
        this.isShownACR = !this.isShownACR;
        this.isShownHypoTA = this.isShownChocAna = this.isShownHTM = this.isShownIAL = false;
    };
    ;
    UrgencePage.prototype.ToggleChocAna = function () {
        this.isShownChocAna = !this.isShownChocAna;
        this.isShownHypoTA = this.isShownACR = this.isShownHTM = this.isShownIAL = false;
    };
    ;
    UrgencePage.prototype.ToggleHTM = function () {
        this.isShownHTM = !this.isShownHTM;
        this.isShownHypoTA = this.isShownACR = this.isShownChocAna = this.isShownIAL = false;
    };
    ;
    UrgencePage.prototype.ToggleIAL = function () {
        this.isShownIAL = !this.isShownIAL;
        this.isShownHypoTA = this.isShownACR = this.isShownChocAna = this.isShownHTM = false;
    };
    ;
    /*Chargement des données du formulaire au chargement de la page, alerte si données manquantes*/
    UrgencePage.prototype.ionViewWillEnter = function () {
        this.getdata();
    };
    UrgencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntalgiePage');
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], UrgencePage.prototype, "nav", void 0);
    UrgencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-urgence',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\urgence\urgence.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drogues d\'urgences</ion-title>\n  </ion-navbar>\n  <ion-item color="secondary"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n          <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n  <ion-item (click)="ToggleHypoTA()">\n      <ion-label color="dark-turquoise">Hypotension artérielle\n      <ion-icon *ngIf="!isShownHypoTA" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n      <ion-icon *ngIf="isShownHypoTA" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n      </ion-label>\n  </ion-item>\n      \n      <ion-card class="drogueContainer"  *ngIf="isShownHypoTA">\n      <ion-card-content>\n        <p class="drogueInduction">PAM abaissée de 20% ou plus par rapport la valeur mesurée avant induction.</p>\n        <p class="dilutionDrogueInduction">Enfant de <b>{{ageAnnees}} ans : PAS &lt; {{PAShypoTA}} mmHg </b>environ </p>\n        <br>\n        <p class="drogueInduction">Mesures à envisager :</p>\n        <p class="dilutionDrogueInduction"> - Remplissage par <b>{{VolRemplissage}} mL </b> de <b>{{SoluteRemplissage}}</b>, renouvelable une fois,</p>\n        <p class="dilutionDrogueInduction"> - Ephédrine par bolus IVD de <b>{{AdminEphedrine}} mg</b>, renouvelable </p>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-item  (click)="ToggleACR()">\n        <ion-label color="danger">Arrêt cardio-respiratoire\n        <ion-icon *ngIf="!isShownACR" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownACR" class="OpenCloseIcon" name="close" style="zoom:0.9"></ion-icon>\n        </ion-label>\n    </ion-item>\n\n        <ion-card class="drogueContainer" *ngIf="isShownACR">\n          <ion-card-content>\n          <p>1. Appel à l\'aide (RDB <b>3535</b>).</p>\n          <p>2. Débuter le massage cardiaque externe.</p>\n          <p>3. Ventiler en FiO2 1.</p>\n          <br>\n          <h4>Posologies ACR : </h4>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="danger">\n            Adrénaline : <b>{{PosoAdrenalineACR}} µg</b> - IVD/5 minutes\n            <p class="dilutionDrogueInduction">- 10 µg/kg, renouvellable</p>\n            <p>- d\'emblée si asystolie, au 3e choc si TV/FV</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="danger">\n            CEE : <b>{{CEEACR}} J</b> \n            <p class="dilutionDrogueInduction">- 4 J/kg</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="dark">\n            Cordarone : <b>{{PosoCordaroneACR}} mg</b> - IVD \n            <p class="dilutionDrogueInduction">- 5 mg/kg</p>\n            <p class="dilutionDrogueInduction">- renouvelable 1 fois après 5 min</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="drogueInduction" color="dark">\n            Bicar 4,2% : <b>{{PosoBicarACR}} mL</b> - IVL \n            <p class="dilutionDrogueInduction">- 2 mL/kg dès la 15e minute</p>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-item (click)="ToggleChocAna()">\n      <ion-label color="dark-turquoise">Anaphylaxie\n        <ion-icon *ngIf="!isShownChocAna" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n          <ion-icon *ngIf="isShownChocAna" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item>\n\n    <ion-card class="drogueContainer" *ngIf="isShownChocAna">\n      <ion-card-content >\n        <p class="drogueInduction">Réaction anaphylactique de grade 2 ou 3 si : </p>\n            <p class="dilutionDrogueInduction">- Hypotension -: 30% PAS référence</p> \n            <p class="dilutionDrogueInduction">- Tachycardie : +30% FC référence</p> \n            <p class="dilutionDrogueInduction">- Oedeme de Quincke ou bronchospasme</p>\n        \n        <br>\n        <p class="drogueInduction">Mesures à mettre en place :</p>\n        <p class="dilutionDrogueInduction"> - éviction de tout allergène suspecté,</p>\n        <p class="dilutionDrogueInduction"> - adrénaline : <b>{{PosoAdrenalineAnaph}} µg IVD</b>, renouvelable 5 à 10 fois,</p>\n        <p class="dilutionDrogueInduction"> - solumédrol : <b>{{PosoSoluAnaph}} mg IVD</b>, renouvelable 1 fois,</p>\n        <p class="dilutionDrogueInduction"> - prévoir bilan allergo-immunologique après contrôle de la situation clinique.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item (click)="ToggleHTM()">\n      <ion-label color="warning">Hyperthermie maligne\n        <ion-icon *ngIf="!isShownHTM" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownHTM" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item>\n\n      <ion-card class="drogueContainer" *ngIf="isShownHTM">\n      <ion-card-content>\n        <p  class="drogueInduction">Evoquer devant  :\n          <p class="dilutionDrogueInduction">- augmentation importante et inexpliquée de l\'EtCO2, de la FC ou de la température</p>\n          <p class="dilutionDrogueInduction">- apparition d\'une rigidité musculaire des masséters, du tronc ou des membres.</p>\n          <br>\n        <p  class="drogueInduction">Conduite à tenir en cas de suspicion :</p>\n        <p class="dilutionDrogueInduction">- Arrêt halogénés, changement des filtres et tuyaux</p>\n        <p class="dilutionDrogueInduction">- Hyperventilation en FiO2 1</p>\n        <p class="dilutionDrogueInduction">- Contre indication absolue celocurine jusqu\'à preuve du contraire</p>\n        <p class="dilutionDrogueInduction">- Dantrolène <b>{{AdminDantroleneHTM}} mg IVL</b> (soit 2,5 mg/kg, renouvelable 4 fois max) à diluer dans de l\'<b>EPPI</b></p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item (click)="ToggleIAL()">\n      <ion-label color="dark-turquoise">Intoxication aux AL\n        <ion-icon *ngIf="!isShownIAL" class="OpenCloseIcon" name="open"  style="zoom:0.9"></ion-icon>\n        <ion-icon *ngIf="isShownIAL" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="isShownIAL" class="drogueContainer">\n      <ion-card-content>\n        <p class="drogueInduction">Devant toute suspicion, en présence de signes neurologiques :</p>\n        <p class="dilutionDrogueInduction">- Rivotril : <b>{{PosoRivotrilIAL}} µg IVD</b> (soit 15 µg/kg)</p>\n        <p class="dilutionDrogueInduction">- Intralipides 20% : <b>{{PosoIntralipidesIAL}} mL IVL</b> (soit 3mL/kg), renouvelable</p>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\urgence\urgence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UrgencePage);
    return UrgencePage;
}());

//# sourceMappingURL=urgence.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(24);
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
        this.isShownConstantes = false;
        this.isShownDispositifs = false;
    }
    MonitoragePage.prototype.ToggleConstantes = function () {
        this.isShownConstantes = !this.isShownConstantes;
        this.isShownDispositifs = false;
    };
    ;
    MonitoragePage.prototype.ToggleDispositifs = function () {
        this.isShownDispositifs = !this.isShownDispositifs;
        this.isShownConstantes = false;
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
    MonitoragePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocoRegionalePage');
    };
    MonitoragePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
        }));
    };
    MonitoragePage.prototype.calculs = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
                            /*placer les calculs ici*/
                            if (_this.PoidsNum <= 3) {
                                _this.SondeDoppler = "Non utilisable";
                            }
                            else if (_this.PoidsNum > 3 && _this.PoidsNum <= 60 && _this.AgeNum < 180) {
                                _this.SondeDoppler = "Sonde pédiatrique (KDP72)";
                            }
                            else {
                                _this.SondeDoppler = "Sonde adulte";
                            }
                            ;
                            if (_this.PoidsNum <= 5) {
                                _this.CapteurNirs = "Néonatal (CNN/SNN)";
                            }
                            else if (_this.PoidsNum <= 40) {
                                _this.CapteurNirs = "Pédiatrique (SPFB)";
                            }
                            else {
                                _this.CapteurNirs = "Adulte (SAFB)";
                            }
                            ;
                            if (_this.PoidsNum <= 10) {
                                _this.ElectrodesBIS = "Pédiatrique";
                            }
                            else {
                                _this.ElectrodesBIS = "Adulte";
                            }
                            ;
                            if (_this.PoidsNum <= 2) {
                                _this.TailleSondeUrinaire = "4 CH sans ballonnet";
                            }
                            else if (_this.PoidsNum <= 4) {
                                _this.TailleSondeUrinaire = "6 CH avec ballonnet";
                            }
                            else if (_this.PoidsNum <= 25) {
                                _this.TailleSondeUrinaire = "6 à 10 CH avec ballonnet";
                            }
                            else if (_this.PoidsNum <= 50) {
                                _this.TailleSondeUrinaire = "12 à 14 CH avec ballonnet";
                            }
                            else if (_this.PoidsNum > 50) {
                                _this.TailleSondeUrinaire = "14 à 18 CH avec ballonnet";
                            }
                            if (_this.PoidsNum <= 4) {
                                _this.TailleSondeGastrique = "Calibre 5-6 (longueur 40 cm)";
                            }
                            else if (_this.PoidsNum <= 10) {
                                _this.TailleSondeGastrique = "Calibre 8-10 (longueur 50 cm)";
                            }
                            else if (_this.PoidsNum <= 25) {
                                _this.TailleSondeGastrique = "Calibre 12 (longueur 50 cm)";
                            }
                            else if (_this.PoidsNum > 25) {
                                _this.TailleSondeGastrique = "Calibre 14-16";
                            }
                            if (_this.AgeNum <= 1) {
                                _this.FCnormale = "90-180";
                                _this.FCdangerHaut = "> 190";
                                _this.FCdangerBas = "< 90";
                                _this.FRnormale = "40";
                                _this.FRdangerHaut = "> 60";
                                _this.FRdangerBas = "< 20";
                                _this.SpO2normale = 100;
                                _this.SpO2dangerBas = "< 90";
                                _this.PASnormale = "70-90";
                                _this.PASdangerHaut = "> 100";
                                _this.PASdangerBas = "< 60";
                                _this.PADnormale = "40-50";
                                _this.PADdangerHaut = "> 50";
                                _this.PADdangerBas = "< 30";
                                _this.PAMnormale = "45-55";
                                _this.PAMdangerHaut = "> 55";
                                _this.PAMdangerBas = "< 45";
                                _this.Diuresenormale = Math.round((_this.PoidsNum * 2.5) * 10) / 10;
                                _this.DiuresedangerHaut = "> " + (Math.round((_this.PoidsNum * 4) * 10) / 10).toString();
                                _this.DiuresedangerBas = "< " + (Math.round((_this.PoidsNum * 1) * 10) / 10).toString();
                                ;
                            }
                            else if (_this.AgeNum <= 24) {
                                _this.FCnormale = "80-155";
                                _this.FCdangerHaut = "> 170";
                                _this.FCdangerBas = "< 80";
                                _this.FRnormale = 30;
                                _this.FRdangerHaut = "> 60";
                                _this.FRdangerBas = "< 20";
                                _this.SpO2normale = 100;
                                _this.SpO2dangerBas = "< 90";
                                _this.PASnormale = "85-105";
                                _this.PASdangerHaut = "> 110";
                                _this.PASdangerBas = "< 75";
                                _this.PADnormale = "50-65";
                                _this.PADdangerHaut = "> 65";
                                _this.PADdangerBas = "< 50";
                                _this.PAMnormale = "65-80";
                                _this.PAMdangerHaut = "> 80";
                                _this.PAMdangerBas = "< 60";
                                _this.Diuresenormale = Math.round((_this.PoidsNum * 2.5) * 10) / 10;
                                _this.DiuresedangerHaut = "> " + (Math.round((_this.PoidsNum * 4) * 10) / 10).toString();
                                _this.DiuresedangerBas = "< " + (Math.round((_this.PoidsNum * 1) * 10) / 10).toString();
                                ;
                            }
                            else if (_this.AgeNum <= 48) {
                                _this.FCnormale = "70-140";
                                _this.FCdangerHaut = "> 160";
                                _this.FCdangerBas = "< 70";
                                _this.FRnormale = 20;
                                _this.FRdangerHaut = "> 40";
                                _this.FRdangerBas = "< 15";
                                _this.SpO2normale = 100;
                                _this.SpO2dangerBas = 92;
                                _this.PASnormale = "90-110";
                                _this.PASdangerHaut = "> 130";
                                _this.PASdangerBas = "< 80";
                                _this.PADnormale = "50-65";
                                _this.PADdangerHaut = "> 65";
                                _this.PADdangerBas = "< 35";
                                _this.PAMnormale = "65 - 80";
                                _this.PAMdangerHaut = "> 80";
                                _this.PAMdangerBas = "< 65";
                                _this.Diuresenormale = Math.round((_this.PoidsNum * 2) * 10) / 10;
                                _this.DiuresedangerHaut = "> " + (Math.round((_this.PoidsNum * 4) * 10) / 10).toString();
                                _this.DiuresedangerBas = "< " + (Math.round((_this.PoidsNum * 1) * 10) / 10).toString();
                                ;
                            }
                            else if (_this.AgeNum <= 120) {
                                _this.FCnormale = "65-125";
                                _this.FCdangerHaut = "> 140";
                                _this.FCdangerBas = "< 60";
                                _this.FRnormale = 18;
                                _this.FRdangerHaut = "> 30";
                                _this.FRdangerBas = "< 15";
                                _this.SpO2normale = 100;
                                _this.SpO2dangerBas = 92;
                                _this.PASnormale = "95-115";
                                _this.PASdangerHaut = "> 140";
                                _this.PASdangerBas = "< 85";
                                _this.PADnormale = "55-70";
                                _this.PADdangerHaut = "> 75";
                                _this.PADdangerBas = "< 35";
                                _this.PAMnormale = "70-85";
                                _this.PAMdangerHaut = "> 90";
                                _this.PAMdangerBas = "< 70";
                                _this.Diuresenormale = Math.round((_this.PoidsNum * 1.5) * 10) / 10;
                                _this.DiuresedangerHaut = "> " + (Math.round((_this.PoidsNum * 4) * 10) / 10).toString();
                                _this.DiuresedangerBas = "< " + (Math.round((_this.PoidsNum * 1) * 10) / 10).toString();
                                ;
                            }
                            else {
                                _this.FCnormale = "55-105";
                                _this.FCdangerHaut = "> 130";
                                _this.FCdangerBas = "< 50";
                                _this.FRnormale = 15;
                                _this.FRdangerHaut = "> 30";
                                _this.FRdangerBas = "< 10";
                                _this.SpO2normale = 100;
                                _this.SpO2dangerBas = 94;
                                _this.PASnormale = "110-130";
                                _this.PASdangerHaut = "< 90";
                                _this.PASdangerBas = "> 160";
                                _this.PADnormale = "65 - 80";
                                _this.PADdangerHaut = "> 85";
                                _this.PADdangerBas = "< 40";
                                _this.PAMnormale = "80-95";
                                _this.PAMdangerHaut = "> 100";
                                _this.PAMdangerBas = "< 80";
                                _this.Diuresenormale = Math.round((_this.PoidsNum * 1) * 10) / 10;
                                _this.DiuresedangerHaut = "> " + (Math.round((_this.PoidsNum * 4) * 10) / 10).toString();
                                _this.DiuresedangerBas = "< " + (Math.round((_this.PoidsNum * 1) * 10) / 10).toString();
                                ;
                            }
                            ;
                        });
                    });
                });
            });
        }));
    };
    ;
    MonitoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-monitorage',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\monitorage\monitorage.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Monitorage & dispositifs</ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n      <ion-item-divider (click)="ToggleConstantes()">\n    <ion-label color="dark-turquoise">Paramètres vitaux selon l\'âge\n  <ion-icon *ngIf="!isShownConstantes" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n  <ion-icon *ngIf="isShownConstantes" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n    </ion-label>\n  </ion-item-divider> \n\n\n  <ion-grid fixed="true" *ngIf="isShownConstantes" class="ionFirstRow">\n    <ion-row >\n      <ion-col>\n      </ion-col>\n      <ion-col class="normale">\n        Normale\n      </ion-col>\n      <ion-col class="trophaut">\n        Trop haut\n      </ion-col>\n      <ion-col class="tropbas">\n        Trop bas\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          FC (/min)\n      </ion-col>\n      <ion-col class="normale">\n        {{FCnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{FCdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{FCdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules" >\n          FR (/min)\n      </ion-col>\n      <ion-col class="normale"> \n        {{FRnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{FRdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{FRdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          SpO2 (%)\n      </ion-col>\n      <ion-col class="normale">\n        {{SpO2normale}}\n      </ion-col>\n      <ion-col>\n        -\n      </ion-col>\n      <ion-col class="tropbas">\n        {{SpO2dangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAS (mmHg)\n      </ion-col>\n      <ion-col class="normale">\n        {{PASnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{PASdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{PASdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAD (mmHg)\n      </ion-col>\n      <ion-col class="normale">\n        {{PADnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{PADdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{PADdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          PAM (mmHg)\n      </ion-col>\n      <ion-col class="normale">\n        {{PAMnormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{PAMdangerHaut}}\n      </ion-col>\n      <ion-col class="tropbas">\n        {{PAMdangerBas}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="intitules">\n          Diurèse (mL/h sur 3h)\n      </ion-col>\n      <ion-col class="normale">\n        {{Diuresenormale}}\n      </ion-col>\n      <ion-col class="trophaut">\n        {{DiuresedangerHaut}}\n      </ion-col>      \n      <ion-col class="tropbas">\n        {{DiuresedangerBas}}\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n\n    <ion-item-divider (click)="ToggleDispositifs()">\n      <ion-label color="dark-turquoise">Taille des dispositifs\n    <ion-icon *ngIf="!isShownDispositifs" class="OpenCloseIcon" name="open" style="zoom:0.9"></ion-icon>\n    <ion-icon *ngIf="isShownDispositifs" class="OpenCloseIcon" name="close"  style="zoom:0.9"></ion-icon>\n      </ion-label>\n    </ion-item-divider> \n\n    <ion-list *ngIf="isShownDispositifs">\n      <ion-item>\n        <ion-label>Doppler Oesophagien\n            <p>Modele de sonde : {{SondeDoppler}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>NIRS - Stable à +/- 20%\n            <p>Capteur : {{CapteurNirs}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>BIS - Objectif 40 à 60\n            <p>Electrodes : {{ElectrodesBIS}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sonde urinaire\n            <p>Taille de sonde : {{TailleSondeUrinaire}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sonde gastrique\n            <p>Taille de sonde : {{TailleSondeGastrique}} </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\monitorage\monitorage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MonitoragePage);
    return MonitoragePage;
}());

//# sourceMappingURL=monitorage.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourbesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accueil_accueil__ = __webpack_require__(24);
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
    CourbesPage.prototype.setDataPoids = function () {
        if (this.AgeNum <= 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            this.dataPoidsMediane = [3.4, 4.4, 5.4, 6.2, 6.7, 7.4, 7.9, 8.3, 8.7, 9, 9.4, 9.6, 9.9, 10.2];
            this.dataPoids3 = [2.5, 3.4, 4.2, 5, 5.5, 6, 6.4, 6.8, 7.1, 7.4, 7.6, 7.9, 8, 8.2];
            this.dataPoids97 = [4.7, 5.4, 6.5, 7.5, 8.3, 9, 9.6, 10.2, 10.6, 10.8, 11.4, 11.7, 12, 12.3];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum <= 12 && this.sexeMF == "Fille") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
                        backgroundColor: "rgba(0,0,0,0)",
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
                        backgroundColor: "rgba(0,0,0,0)",
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
    CourbesPage.prototype.setDataTaille = function () {
        if (this.AgeNum <= 12 && this.sexeMF == "Garçon") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            this.dataTailleMediane = [50, 54, 58, 61, 63.5, 66, 67.5, 69, 71, 72, 73.5, 74.5, 75.5];
            this.dataTaille3 = [47, 50, 54, 57, 59, 62, 63.5, 65, 66, 67.5, 68.5, 69.5, 71];
            this.dataTaille97 = [54, 58, 62, 65, 68, 70, 72, 74, 75, 77, 78, 79.5, 81];
            this.mainColor = "rgba(54, 162, 235, 1)";
            this.bubbleColor = "rgba(54, 162, 235, 1)";
            this.AgeCourbe = this.AgeNum;
            this.AgeRange = "0 à 12 mois";
        }
        else if (this.AgeNum <= 12 && this.sexeMF == "Fille") {
            this.ageLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
                        backgroundColor: "rgba(0,0,0,0)",
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
                        backgroundColor: "rgba(0,0,0,0)",
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
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__accueil_accueil__["a" /* AccueilPage */]);
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
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                if (!_this.PoidsNum || !_this.AgeNum) {
                    _this.presentAlert();
                    _this.calculs();
                }
                else {
                    _this.calculs();
                }
                ;
            });
        }));
    };
    ;
    CourbesPage.prototype.calculs = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                _this.storage.get('Taille').then(function (Taille) {
                    _this.Taille = Taille;
                    _this.storage.get('sexeMF').then(function (sexe) {
                        if (!sexe) {
                            _this.sexeMF = "Fille";
                        }
                        else {
                            _this.sexeMF = sexe;
                        }
                        ;
                        /*placer les calculs ici*/
                        _this.SurfaceCorporelle = Math.round(((4 * _this.PoidsNum + 7) / (_this.PoidsNum + 90)) * 10) / 10;
                        console.log("la surface corporelle est de ", _this.SurfaceCorporelle, " m2");
                        if (_this.Taille) {
                            _this.BMIinfo = "Poids/Taille²";
                        }
                        else {
                            _this.BMIinfo = "Renseigner une taille dans les options";
                        }
                        _this.setDataPoids();
                        _this.graphPoidsLoad();
                        _this.setDataTaille();
                        _this.graphTailleLoad();
                        if (_this.Taille > 0) {
                            _this.BMI = Math.round(_this.PoidsNum / ((_this.Taille / 100) * (_this.Taille / 100)) * 10) / 10;
                        }
                        else {
                            _this.BMI = "NA";
                        }
                    });
                });
            });
        }));
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
    CourbesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courbes',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\courbes\courbes.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Biométrie</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-slides pager="true" >\n    <ion-slide>\n      <h1 class="slideTitle">Biométrie {{sexeMF}} {{AgeRange}} </h1>\n        <ion-card class="graphBiometrie">\n          <ion-card-header>\n            Poids\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #PoidsCanvas></canvas>\n          </ion-card-content>\n        </ion-card>\n\n          <ion-item>Sexe : {{sexeMF}} - Age : {{AgeNum}} mois </ion-item> \n          <ion-item>Taille : {{Taille}} cm - Poids : {{PoidsNum}} kg </ion-item>\n\n          <ion-item>\n            <ion-label>BMI : {{BMI}} kg/m²\n            <p class="comment">{{BMIinfo}}</p>\n          </ion-label>\n        </ion-item>\n        \n          <ion-item>\n            <ion-label>Surface corporelle : {{SurfaceCorporelle}} m²\n              <p class="comment">(Poidsx4 + 7)/(Poids + 90) </p>\n            </ion-label>\n          </ion-item>\n\n    \n    \n    </ion-slide>\n    <ion-slide>\n      <h1 class="slideTitle">Biométrie {{sexeMF}} {{AgeRange}} </h1>\n\n    \n        <ion-card class="graphBiometrie">\n          <ion-card-header>\n            Taille\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #TailleCanvas></canvas>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-item>Sexe : {{sexeMF}} - Age : {{AgeNum}} mois </ion-item> \n        <ion-item>Taille : {{Taille}} cm - Poids : {{PoidsNum}} kg </ion-item>\n\n        <ion-item>\n          <ion-label>BMI : {{BMI}} kg/m²\n          <p>{{BMIinfo}}</p>\n        </ion-label>\n      </ion-item>\n      \n        <ion-item>\n          <ion-label>Surface corporelle : {{SurfaceCorporelle}} m²\n            <p class="comment">(Poidsx4 + 7)/(Poids + 90) </p>\n          </ion-label>\n        </ion-item>\n    \n    </ion-slide>\n  </ion-slides>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\courbes\courbes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CourbesPage);
    return CourbesPage;
}());

//# sourceMappingURL=courbes.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntiInfectieuxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_anti_infectieux__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(155);
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





var AntiInfectieuxPage = /** @class */ (function () {
    function AntiInfectieuxPage(navCtrl, navParams, storage, alertController, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.dataService = dataService;
        this.searchTerm = "";
        this.isShownCard = false;
    }
    AntiInfectieuxPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
    };
    AntiInfectieuxPage.prototype.setFilteredItems = function () {
        this.cards = this.dataService.filterItems(this.searchTerm);
    };
    AntiInfectieuxPage.prototype.ToggleCard = function (card, index) {
        this.cards.isShownCard = !this.cards.isShownCard;
    };
    AntiInfectieuxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anti-infectieux',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\anti-infectieux\anti-infectieux.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Anti-infectieux</ion-title>\n  </ion-navbar>\n <ion-card-content color="danger">Les posologies indiquées sont adaptées à la <b>pédiatrie</b> uniquement.\n  </ion-card-content>\n  <ion-searchbar\n  [(ngModel)]="searchTerm"\n  (ionChange)="setFilteredItems()"\n></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-list>\n    <ion-card *ngFor="let card of cards, let i = index" [attr.data-index]="i" padding="5%">\n      <ion-card-title (click)="ToggleCard(card, i)" class="carteATB"><u>{{card.title}}</u>\n        <ion-icon *ngIf="!cards.isShownCard" class="fluidIcon" name="add-circle"  style="zoom:1"></ion-icon>\n        <ion-icon *ngIf="cards.isShownCard" class="fluidIcon" name="close-circle"   style="zoom:1"></ion-icon>\n      </ion-card-title>\n      <ion-card-content *ngIf="cards.isShownCard">\n        <p><b>Posologie</b> : {{card.posologie}}</p>\n        <br>\n        <p><b>Reconstitution</b> : {{card.reconstitution}}</p>\n        <br>\n        <p><b>Dilution</b> : {{card.dilution}}</p>\n        <br>\n        <p><b>Administration</b> : {{card.administration}}</p>\n        <br>\n        <p><b>Remarques</b> : {{card.remarques}}</p>\n        <br>\n      </ion-card-content>\n\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\anti-infectieux\anti-infectieux.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_liste_anti_infectieux__["a" /* ServiceDataProvider */]])
    ], AntiInfectieuxPage);
    return AntiInfectieuxPage;
}());

;
//# sourceMappingURL=anti-infectieux.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrophieVesicalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    function ExtrophieVesicalePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isShownConsultation = false;
        this.isShownVPA = false;
        this.isShownPerOp = false;
        this.isShownPostOp = false;
    }
    ExtrophieVesicalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtrophieVesicalePage');
    };
    ExtrophieVesicalePage.prototype.ToggleConsultation = function () {
        this.isShownConsultation = !this.isShownConsultation;
        this.isShownVPA = this.isShownPerOp = this.isShownPostOp = false;
    };
    ExtrophieVesicalePage.prototype.ToggleVPA = function () {
        this.isShownVPA = !this.isShownVPA;
        this.isShownConsultation = this.isShownPerOp = this.isShownPostOp = false;
    };
    ExtrophieVesicalePage.prototype.TogglePerOp = function () {
        this.isShownPerOp = !this.isShownPerOp;
        this.isShownConsultation = this.isShownVPA = this.isShownPostOp = false;
    };
    ExtrophieVesicalePage.prototype.TogglePostOp = function () {
        this.isShownPostOp = !this.isShownPostOp;
        this.isShownConsultation = this.isShownVPA = this.isShownPerOp = false;
    };
    ExtrophieVesicalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-extrophie-vesicale',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\extrophie-vesicale\extrophie-vesicale.html"*/'<!--\n  Generated template for the ExtrophieVesicalePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Extrophie Vésicale</ion-title>\n  </ion-navbar>\n  <ion-item color="warning">\n    <p class="entete_protocole">Auteurs : Dr. Charlotte FAIT, Pr. Souhayl DAHMANI</p>\n    <p class="entete_protocole">Date de publication : 21/09/2020</p>\n  </ion-item>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card color="turquoise-fonce">\n    <ion-card-content>  Objectifs : \n      <p> - limiter les jours de réanimation avec intubation prolongée pour le contrôle de l\'analgésie.</p> \n      <p> - réhabilitation précoce avec passage de la première nuit en SSPI puis USC à J1.</p></ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)="ToggleConsultation()">\n      <ion-card-title>Consultation\n      \n      <ion-icon *ngIf="!isShownConsultation" class="urgenceIcon" name="add-circle"  style="zoom:0.8"></ion-icon>\n      <ion-icon *ngIf="isShownConsultation" class="urgenceIcon" name="close-circle" style="zoom:0.8"></ion-icon>\n\n    </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="isShownConsultation">\n      <p> - Evaluation de la faisabilité d\'une réhabilitation précoce sans passage en réanimation.</p>\n      <p> - Evaluation des comorbidités du patient.</p>\n      <p> - Anticipation de la période post-opératoire. Appel systématique de la réanimation pour réserver une place <b>((4)3416)</b>.</p>\n      <p> - <b>Stratégie d\'épargne sanguine</b> : prescription de fer, bilan avec NFS, hémostase complète, carte de groupe, ionogramme sanguin.</p>\n      <p> - <b>Stratégie de contrôle des infections</b> : ECBU, dépistage BLSE par écouvillon rectal, cartographie fongique (écouvillon plaque vésicale, peau à la jonction de la plaque vésicale, aisselle, anus).</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)="ToggleVPA()">\n      <ion-card-title>Visite pré-opératoire\n      \n      <ion-icon *ngIf="!isShownVPA" class="urgenceIcon" name="add-circle"  style="zoom:0.8"></ion-icon>\n      <ion-icon *ngIf="isShownVPA" class="urgenceIcon" name="close-circle" style="zoom:0.8"></ion-icon>\n\n    </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="isShownVPA">\n      <p> - Vérifier les bilans prescrits.</p>\n      <p> - Prescrire RAI et 2e détermination de groupe.</p>\n      <p> - Faire une commande de culots globulaires prévisionnelle.</p>\n      <p> - Perfuser dès le début du jeûne avec du B26.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)="TogglePerOp()">\n      <ion-card-title>Per-opératoire\n      \n      <ion-icon *ngIf="!isShownPerOp" class="urgenceIcon" name="add-circle"  style="zoom:0.8"></ion-icon>\n      <ion-icon *ngIf="isShownPerOp" class="urgenceIcon" name="close-circle" style="zoom:0.8"></ion-icon>\n\n    </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="isShownPerOp">\n      <p><b><u>Induction</u></b></p>\n      <p> - Confirmer la place en réanimation.</p>\n      <p> - NIRS à mettre en place avant l\'induction anesthésique.</p>\n      <p> - Antibioprophylaxie par Céfazoline IV 30 minutes avant l\'incision. </p>\n      <p> - Administration d\'Exacyl (ostéotomie) selon le protocole habituel.</p>\n      <p> - Dexaméthasone 0,15 mg/kg.</p>\n      <p> - Curarisation continue en IVSE.</p>\n      <p> - Pose de sonde naso-gastrique.</p>\n      <p> - Pose de cathéter veineux central en jugulaire interne droit (pas en fémoral car ostéotomie). Attention au montage des lignes type réanimation.</p>\n      <p> - Discuter la pose d\'un cathéter artériel pour monitorage hémodynamique, selon le terrain.</p>\n      <p> - Pose d\'un cathéter de péridurale, utiliser en per-opératoire, évaluer l\'efficacité en per-opératoire.</p>\n      <br>\n      <p><b><u>Pendant l\'intervention : </u></b></p>\n      <p> - Surveillance des saignements en per-opératoire et HemoCue réguliers (1 par heure pendant le temps orthopédique). Seuil transfusionnel à 8 g/dL. NFS de contrôle en post-opératoire.</p>\n      <br>\n      <p><b><u>En fin d\'intervention :</u></b></p>\n      <p> - Evaluation des critères d\'admission en réanimation : saignement, hémodynamique, ventilation.</p>\n      <p> - Transfert en réanimation si transfusion massive, support catécholaminergique, impossibilité d\'extubation rapide en SSPI, gestion de l\'analgésie prévue comme difficile (mauvaise efficacité de la péridurale, réinjections fréquentes de sufentanil en per-opératoire).</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)="TogglePostOp()">\n      <ion-card-title>Post-opératoire\n      \n      <ion-icon *ngIf="!isShownPostOp" class="urgenceIcon" name="add-circle"  style="zoom:0.8"></ion-icon>\n      <ion-icon *ngIf="isShownPostOp" class="urgenceIcon" name="close-circle" style="zoom:0.8"></ion-icon>\n\n    </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="isShownPostOp">\n      <p><b>En l\'absence de critère d\'admission en réanimation :</b> réhabilitation précoce en SSPI.</p>\n      <p> - Extubation précoce en SSPI.</p>\n      <p> - Contrôle de l\'analgésie par péridurale et paracétamol.</p>\n      <p> - Reprise des boissons (liquide clair) dès le soir.</p>\n      <br>\n      <p><b>Sortie de SSPI pour l\'USC à J1</b></p>\n      <p> - NFS à J1 (objectif Hb > 8 g/dL, hémostase normale).</p>\n      <p> - Stabilité hémodynamique et diurèse satisfaisante (> 3mL/kg/h).</p>\n      <p> - Analgésie par APD évaluée et efficace.</p>\n      <p> - Absence de trouble ionique.</p>\n      <p> - Ablation du cathéter artériel avant la sortie de SSPI.</p>   \n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\extrophie-vesicale\extrophie-vesicale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ExtrophieVesicalePage);
    return ExtrophieVesicalePage;
}());

//# sourceMappingURL=extrophie-vesicale.js.map

/***/ }),

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
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
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plateau_induction_plateau_induction__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plateau_vas_plateau_vas__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entretien_anesth_entretien_anesth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gestion_fluides_gestion_fluides__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loco_regionale_loco_regionale__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__antalgie_antalgie__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__urgence_urgence__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__options_options__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__monitorage_monitorage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__courbes_courbes__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser_ngx__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__antibioprophylaxie_antibioprophylaxie__ = __webpack_require__(831);
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
    function AccueilPage(viewCtrl, modalCtrl, app, navCtrl, navParams, storage, InAppBrowser, pickerController, ToastController) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.InAppBrowser = InAppBrowser;
        this.pickerController = pickerController;
        this.ToastController = ToastController;
        // make AccueilPage the root (or first) page
        this.rootPage = AccueilPage_1;
        this.isShownFooter = true;
        this.biometrie = { Kg: "", Gr: "", mois: "", ans: "" };
        this.AgeNum = 0;
        this.PoidsNum = 0;
        this.ageannees = 0;
        this.agemois = 0;
        this.agesemaines = 0;
        this.poidskilogrammes = 0;
        this.poidsgrammes = 0;
        this.sexeMF = "Fille";
    }
    AccueilPage_1 = AccueilPage;
    AccueilPage.prototype.ionViewDidLoad = function () {
        this.toastCGU();
    };
    ;
    AccueilPage.prototype.effacer = function () {
        this.storage.clear();
        this.AgeNum = 0;
        this.PoidsNum = 0;
        this.sexeMF = "Fille";
        this.DureeJeune = 0;
        this.Allergie = "";
        this.EstomacOuiNon = "vide";
    };
    AccueilPage.prototype.ToggleSexe = function () {
        this.sexeToggle = !this.sexeToggle;
        if (this.sexeToggle == true) {
            this.sexeMF = "Garçon";
        }
        else {
            this.sexeMF = "Fille";
        }
        ;
        this.storage.set("sexeMF", this.sexeMF);
        console.log("sexe enregistré : ", this.sexeMF);
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
    AccueilPage.prototype.pickGender = function (ValeurChoisie) {
        this.sexeMF = ValeurChoisie;
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
                                        _this.storage.set("AgeNum", _this.AgeNum);
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
                                        _this.poidskilogrammes = value.kilogrammes.value;
                                        _this.poidsgrammes = value.grammes.value;
                                        _this.PoidsNum = _this.poidskilogrammes + Math.round((_this.poidsgrammes / 1000) * 10) / 10;
                                        console.log(_this.PoidsNum);
                                        _this.storage.set("PoidsNum", _this.PoidsNum);
                                    }
                                }
                            ],
                            columns: [
                                { name: "kilogrammes",
                                    prefix: "Kg",
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
                                        { text: '19', value: 19 },
                                        { text: '20', value: 20 },
                                        { text: '21', value: 21 },
                                        { text: '22', value: 22 },
                                        { text: '23', value: 23 },
                                        { text: '24', value: 24 },
                                        { text: '25', value: 25 },
                                        { text: '26', value: 26 },
                                        { text: '27', value: 27 },
                                        { text: '28', value: 28 },
                                        { text: '29', value: 29 },
                                        { text: '30', value: 30 },
                                        { text: '31', value: 31 },
                                        { text: '32', value: 32 },
                                        { text: '33', value: 33 },
                                        { text: '34', value: 34 },
                                        { text: '35', value: 35 },
                                        { text: '36', value: 36 },
                                        { text: '37', value: 37 },
                                        { text: '38', value: 38 },
                                        { text: '39', value: 39 },
                                        { text: '40', value: 40 },
                                        { text: '41', value: 41 },
                                        { text: '42', value: 42 },
                                        { text: '42', value: 42 },
                                        { text: '42', value: 42 },
                                        { text: '42', value: 42 },
                                        { text: '42', value: 42 },
                                        { text: '43', value: 43 },
                                        { text: '44', value: 44 },
                                        { text: '45', value: 45 },
                                        { text: '46', value: 46 },
                                        { text: '47', value: 47 },
                                        { text: '48', value: 48 },
                                        { text: '49', value: 49 },
                                        { text: '50', value: 50 },
                                        { text: '51', value: 51 },
                                        { text: '52', value: 52 },
                                        { text: '53', value: 53 },
                                        { text: '54', value: 54 },
                                        { text: '55', value: 55 },
                                        { text: '56', value: 56 },
                                        { text: '57', value: 57 },
                                        { text: '58', value: 58 },
                                        { text: '59', value: 59 },
                                        { text: '60', value: 60 },
                                        { text: '61', value: 61 },
                                        { text: '62', value: 62 },
                                        { text: '63', value: 63 },
                                        { text: '64', value: 64 },
                                        { text: '65', value: 65 },
                                        { text: '66', value: 66 },
                                        { text: '67', value: 67 },
                                        { text: '68', value: 68 },
                                        { text: '69', value: 69 },
                                        { text: '70', value: 70 },
                                        { text: '71', value: 71 },
                                        { text: '72', value: 72 },
                                        { text: '73', value: 73 },
                                        { text: '74', value: 74 },
                                        { text: '75', value: 75 },
                                        { text: '76', value: 76 },
                                        { text: '77', value: 77 },
                                        { text: '78', value: 78 },
                                        { text: '79', value: 79 },
                                        { text: '80', value: 80 },
                                        { text: '81', value: 81 },
                                        { text: '82', value: 82 },
                                        { text: '83', value: 83 },
                                        { text: '84', value: 84 },
                                        { text: '85', value: 85 },
                                        { text: '86', value: 86 },
                                        { text: '87', value: 87 },
                                        { text: '88', value: 88 },
                                        { text: '89', value: 89 },
                                        { text: '90', value: 90 },
                                        { text: '91', value: 91 },
                                        { text: '92', value: 92 },
                                        { text: '93', value: 93 },
                                        { text: '94', value: 94 },
                                        { text: '95', value: 95 },
                                        { text: '96', value: 96 },
                                        { text: '97', value: 97 },
                                        { text: '98', value: 98 },
                                        { text: '99', value: 99 },
                                        { text: '100', value: 100 },
                                    ]
                                },
                                { name: "grammes",
                                    prefix: "Grammes",
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
    AccueilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
            _this.storage.get('PoidsNum').then(function (Poids) {
                _this.PoidsNum = Poids;
                console.log('Le patient a', _this.AgeNum, "mois au total pour ", _this.PoidsNum, " kg.");
                _this.storage.get('EstomacPlein').then(function (estomacplein) {
                    _this.EstomacPlein = estomacplein;
                    if (_this.EstomacPlein == true) {
                        _this.EstomacOuiNon = "plein";
                    }
                    else {
                        _this.EstomacOuiNon = "vide";
                    }
                    _this.storage.get('DureeJeune').then(function (dureejeune) {
                        _this.DureeJeune = dureejeune;
                        _this.storage.get('Allergie').then(function (allergie) {
                            _this.Allergie = allergie;
                        });
                    });
                });
            });
        }));
    };
    ;
    AccueilPage.prototype.ToggleFooter = function () {
        this.isShownFooter = !this.isShownFooter;
    };
    ;
    AccueilPage.prototype.displayInduction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__plateau_induction_plateau_induction__["a" /* PlateauInductionPage */]);
    };
    ;
    AccueilPage.prototype.displayVAS = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__plateau_vas_plateau_vas__["a" /* PlateauVasPage */]);
    };
    ;
    AccueilPage.prototype.displayEntretien = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */]);
    };
    ;
    AccueilPage.prototype.displayGestionFluides = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */]);
    };
    ;
    AccueilPage.prototype.displayALR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__loco_regionale_loco_regionale__["a" /* LocoRegionalePage */]);
    };
    ;
    AccueilPage.prototype.displayPostop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__antalgie_antalgie__["a" /* AntalgiePage */]);
    };
    ;
    AccueilPage.prototype.displayUrgences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__urgence_urgence__["a" /* UrgencePage */]);
    };
    ;
    AccueilPage.prototype.displayOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__options_options__["a" /* OptionsPage */]);
    };
    ;
    AccueilPage.prototype.displayMonitorage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__monitorage_monitorage__["a" /* MonitoragePage */]);
    };
    ;
    AccueilPage.prototype.displayCourbes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__courbes_courbes__["a" /* CourbesPage */]);
    };
    ;
    AccueilPage.prototype.displayATBprophylaxie = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */]);
    };
    ;
    AccueilPage.prototype.openDARwebsite = function () {
        this.InAppBrowser.create("http://www.dar-robertdebre.com", '_system');
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], AccueilPage.prototype, "nav", void 0);
    AccueilPage = AccueilPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\accueil\accueil.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>QuadruPed calculs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class="homePagePatient">\n      <ion-card-content>\n        <ion-toggle end class="SexeToggle" color="turquoise-fonce" (ionChange)="ToggleSexe()"></ion-toggle>\n      <img class="resize" src="/assets/imgs/sleeping-baby.png"  alt="Nouveau patient">  \n        <ion-item>\n          <ion-label>\n          <p class="monPatient"><b>Mon patient</b></p>\n          <hr>\n          <p class="monPatient">{{sexeMF}} - {{AgeNum}} mois - {{PoidsNum}} kg </p>\n          <p class="monPatient">Estomac {{EstomacOuiNon}} - Jeûne {{DureeJeune}} h - Allergie : {{Allergie}}</p>\n          <hr>\n        </ion-label>\n        </ion-item> \n\n        <button color="turquoise-fonce" ion-button small (click)="showPickerAge()">Age</button>\n        <button color="turquoise-fonce" ion-button small (click)="showPickerPoids()">Poids</button>\n        <button ion-button small color="turquoise-fonce"  (click)="displayOptions()">Options </button>\n        <button ion-button  small color="danger"  (click)="effacer()">Effacer</button>\n\n\n    </ion-card-content>\n    </ion-card>\n\n      <button ion-button   block small color="turquoise"  (click)="displayCourbes()">Biométrie</button>\n      <button ion-button block small color="warning" (click)="displayUrgences()">Urgences</button>\n\n    \n          <button ion-button small color="light" class="homeButtons" (click)="displayMonitorage()"> Monitorage</button>\n          <button ion-button small color="light" class="homeButtons" (click)="displayInduction()"> Induction </button>\n          <button ion-button small color="light" class="homeButtons" (click)="displayVAS()"> Voies Aériennes </button>\n          <button ion-button small color="dark" class="homeButtons" (click)="displayATBprophylaxie()"> ATB </button>\n          <button ion-button small color="light" class="homeButtons" (click)="displayEntretien()"> Entretien </button> \n    \n          <button ion-button small color="light" class="homeButtons" (click)="displayGestionFluides()"> Solutés et PSL</button>\n          <button ion-button small color="light" class="homeButtons" (click)="displayALR()"> Loco-régionale</button>\n          <button ion-button small color="light" class="homeButtons" (click)="displayPostop()">Antalgie & Post-op</button>\n \n\n\n\n    \n      <img class="logoDAR" (click)="openDARwebsite()" src="/assets/imgs/logo_dar.png"> \n\n  \n\n\n  \n \n\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\accueil\accueil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PickerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AccueilPage);
    return AccueilPage;
    var AccueilPage_1;
}());

;
//# sourceMappingURL=accueil.js.map

/***/ }),

/***/ 492:
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
        this.cards = [];
        this.cards = [
            { title: "Aciclovir (Zovirax®)", posologie: "30 à 60 mg/kg/j en 3 prises.", reconstitution: "avec EPPI ou NaCl 0,9%, 25 mg/mL.", dilution: "NaCl 0,9%, max. 7 mg/mL sur VVP, 25 mg/mL sur VVC.", administration: "IVL sur 60 minutes.", remarques: "Incompatible avec la nutrition parentérale et la ceftazidime." },
            { title: "Amikacine (Amiklin®)", posologie: "15 à 30 mg/kg/j en 1 prise.", reconstitution: "", dilution: "si besoin, avec EPPI, 125 mg/mL.", administration: "IV en 30 minutes.", remarques: "Utiliser une ligne dédiée, ne pas mélanger avec béta-lactamines, héparines, dexaméthasone." },
            { title: "Amoxicilline (Clamoxyl®)", posologie: "100 à 200 mg/kg/j en 3 à 4 prises.", reconstitution: "Avec EPPI, 50 mg/mL.", dilution: "NaCl 0,9% (stable 6h) ou G5% (stable 1h), sans dépasser 100 mg/mL", administration: "IVL en 30 à 60 minutes.", remarques: "Ne pas mélanger avec les aminosides. Compatible en Y avec la nutrition parentérale." },
            { title: "Amoxicilline + Acide Clavulanique (Augmentin®)", posologie: "Avant 3 mois ou 4kg, 100 mg/kg/j en 2 prises. > 3 mois mais < 40 kg, 150 mg/kg/j en 3 prises. Ensuite, posologies adulte.", reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", dilution: "NaCl 0,9% (stable 1h) ou G5% (stable 30 minutes).", administration: "IVL en 30 à 40 minutes. Jamais en moins de 5 minutes avant 3 mois.", remarques: "Attention, posologies et concentrations exprimées en Amoxicilline, veiller à ne pas dépasser la dose d'acide clavulanique maximale de 20 mg/kg/j. Incompatible avec les aminosides. Compatible en Y avec l'alimentation parentérale." },
            { title: "Amphotéricine B liposomale (Ambisome®)", posologie: "3 mg/kg/j en 1 prise.", reconstitution: "Flacon de 50 mg avec 12 mL d'EPPI pour obtenir une solution-mère à 4 mg/mL.", dilution: "Dans du G5% - jamais dans du NaCl 0,9%. Entre 0,2 et 2 mg/mL. Utiliser le filtre de 5 µm pour mettre la solution reconstituée dans le G5% de dilution.", administration: "IV en 30 à 60 minutes.", remarques: "Filtre à 5 µm livré dans l'emballage, à utiliser pour rettenir d'éventuels agglomérats de liposomes qui se seraient formés pendant la reconstitution, en cas d'agitation insuffisante. Attention, incompatible avec le NaCl, les électrolytes et la nutrition parentérale." },
            { title: "Caspofungine (Cancidas®)", posologie: "70 mg/m²/j à J1, puis 50 mg/m²/j, en 1 prise.", reconstitution: "Flacon de 50 mg avec 10,5 mL d'EPPI pour obtenir une solution mère à 5,2 mg/mL ou flacon de 70 mg avec 10,5 mL d'EPPI pour obtenir une solution-mère à 7,6 mg/mL.", dilution: "NaCl 0,9% (jamais dans du G5%). Max 0,5 mg/mL. Utiliser pur non dilué si restriction hydrique et VVC.", administration: "IVL en 60 minutes", remarques: "Incompatible avec le glucose, la nutrition parentérale et l'héparine." },
            { title: "Céfamandole (Céfamandole®)", posologie: "150 mg/kg/j en 3 à 6 prises, max. 6 g/j", reconstitution: "Flacon de 750 mg avec 10 mL d'EPPI, de G5% ou de NaCl 0,9%.", dilution: "Si besoin dans EPPI, NaCl 0,9% ou G5%, pas de concentration cible.", administration: "IVL en 30 minutes.", remarques: "RAS." },
            { title: "Céfépime (Axepim®)", posologie: "150 mg/kg/j en 3 prises, max 6 g/j", reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 à 200 mg/mL.", dilution: "Dans G5% ou NaCl 0,9%.", administration: "IVL en 30 minutes. ", remarques: "RAS." },
            { title: "Céfotaxime (Claforan®)", posologie: "100 à 200 mg/kg/j, 300 mg/kg/j dans les infections méningées, en 3 à 4 prises, sans dépasser 24g/j.", reconstitution: "EPPI 10 mL.", dilution: "G5% ou NaCl 0,9%, 10 à 50 mg/mL, ne pas dépasser 150 mg/mL pour l'administration IV.", administration: "IVL en 20 à 60 minutes.", remarques: "Risque d'arythmie cardiaque en cas d'administration intraveineuse rapide sur cathéter veineux central." },
            { title: "Ceftazidime (Fortum®)", posologie: "50 à 200 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", reconstitution: "G5% ou NaCl 0,9%, 10mL.", dilution: "G5% ou NaCl 0,9%, stable 18h si concentration < 40 mg/mL, ne pas dépasser 180 mg/mL de concentration en cas de restriction hydrique.", administration: "IVL sur 30 minutes ou IVSE continue.", remarques: "Incompatible avec le bicarbonate, l'aciclovir et le ganciclovir." },
            { title: "Ceftriaxone (Rocéphine®)", posologie: "50 à 100 mg/kg/j en 1 prise, sans dépasser 4g/j.", reconstitution: "EPPI, G5% ou NaCl 0,9%, 100 mg/mL.", dilution: "G5% ou NaCl 0,9%, 10 à 40 mg/mL.", administration: "IVL sur 30 minutes.", remarques: "Incompatible avec le calcium, la vancomycine, le fluconazole, les aminosides, la nutrition parentérale. Contre indiqué avant 28j et en cas d'administration de calcium IV associée. Coloration jaune normale." },
            { title: "Ciprofloxacine (Ciflox®)", posologie: "20 à 30 mg/kg/j - 45 mg/kg/j chez le drépanocytaire - en 2 à 3 prises, sans dépasser 1,2 g/j.", reconstitution: "NA.", dilution: "NA.", administration: "IVL sur 60 minutes.", remarques: "Incompatible avec la nutrition parentérale, les pénicillines, les héparines, les solutions alcalines. Privilégier la voie orale : la biodisponibilité est identique." },
            { title: "Clindamycine (Dalacine®)", posologie: "30 à 40 mg/kg/j en 3 à 4 prises, sans dépasser 2,4 g/j.", reconstitution: "NA.", dilution: "G5% ou NaCl 0,9%, max. 18 mg/mL.", administration: "IVL en 30 minutes, ne pas dépasser 20 mg/kg/h ou 30 mg/min.", remarques: "Incompatible avec l'ampicilline, la phénytoïne, les barbituriques, l'aminophylline, le calcium, le magnésium, la ceftriaxone, la ciprofloxacine et la ranitidine." },
            { title: "Cloxacilline (Orbénine®)", posologie: "100 à 200 mg/kg/j en 4 à 6 prises, max. 12 g/j.", reconstitution: "EPPI, G5% ou NaCl 0,9%, 1g dans 16 mL.", dilution: "G5% ou NaCl 0,9%, 10 mg/mL.", administration: "IVL sur 60 minutes.", remarques: "Incompatible avec la nutrition parentérale." },
            { title: "Fluconazole (Triflucan®)", posologie: "3 à 12 mg/kg/j en 1 prise.", reconstitution: "NA.", dilution: "NA.", administration: "IVL en 30 minutes, 120 minutes si > 6 mg/kg/j.", remarques: "Inhibiteur enzymatique. Teneur en sodium significative à 0,155 mEq/mL." },
            { title: "Fosfomycine (Fosfocine®)", posologie: "100 à 200 mg/kg/j en 2 à 4 prises, sans dépasser 16 g/j.", reconstitution: "1g avec 10 mL d'EPPI. 4g avec 15 mL d'EPPI.", dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", administration: "IVL en 60 minutes.", remarques: "Apports en sodium significatifs à 14,3 mEq/g." },
            { title: "Gentamicine (Gentalline®)", posologie: "5 à 8 mg/kg/j en 1 prise.", reconstitution: "NA.", dilution: "G5% ou NaCl 0,9%, max. 10 mg/mL.", administration: "IVL en 30 minutes.", remarques: "Incompatible avec les pénicillines et les héparines > 1 UI/mL." },
            { title: "Imipénème-Cilastine (Tienam®)", posologie: "60 à 100 mg/kg/j en 4 prises sans dépasser 4 g/j.", reconstitution: "G5% ou NaCl 0,9%, 25 mg/mL.", dilution: "G5% ou NaCl 0,9%, 5 mg/mL, max. 7 mg/mL si restriction hydrique, stable 4h.", administration: "IVL en 30 minutes, 60 minutes au delà de 500 mg.", remarques: "Posologies et concentrations exprimées en dose d'Imipgène. Contre indique chez l'insuffisant rénale. Compatible avec la nutrition parentérale." },
            { title: "Lévofloxacine (Tavanic®)", posologie: "20 mg/kg/j de 6 mois à 5 ans, en 2 prises. 10 mg/kg/j au delà de 5 ans, en 1 prise, sans dépasser 1g/j.", reconstitution: "NA.", dilution: "NA.", administration: "IVL en 60 minutes.", remarques: "Incompatible avec les bicarbonates et les héparines. Privilégier la voie orale : la biodisponibilité est identique." },
            { title: "Méropénème (Meronem®)", posologie: "60 à 120 mg/kg/j en 3 prises ou en continu, sans dépasser 6 g/j.", reconstitution: "EPPI ou NaCl 0,9%, 50 mg/mL.", dilution: "NaCl 0,9% (stable 8h) ou G5% (stable 2h), 1 à 20 mg/mL.", administration: "IVL en 30 minutes.", remarques: "Compatible avec la nutrition parentérale." },
            { title: "Métronidazole (Flagyl®)", posologie: "30 mg/kg/j en 3 à 4 prises, sans dépasser 4 g/j.", reconstitution: "NA.", dilution: "NA.", administration: "IVL en 30 minutes.", remarques: "Compatible avec la nutrition parentérale." },
            { title: "Pipéracilline-Tazobactam (Tazocilline®)", posologie: "300 mg/kg/j, en 3 à 4 prises ou en continu, sans dépasser 16 g/j.", reconstitution: "EPPI, G5% ou NaCl 0,9%, 200 mg/mL.", dilution: "G5 ou NaCl 0,9%, 20 à 80 mg/mL, stable 24h.", administration: "IVL en 30 minutes.", remarques: "Posologies et concentrations exprimées en pipéracilline. Incompatible avec les aminosides et les bicarbonates. Compatible avec la nutrition parentérale." },
            { title: "Rifampicine (Rifadine®)", posologie: "10 à 30 mg/kg/j en 1 prise (tuberculose) ou 2 prises (autres indications), sans dépasser 1,2 g/j.", reconstitution: "EPPI 60 mg/mL.", dilution: "G5% ou NaCl 0,9%, usuel 2,4 mg/mL, ne pas dépasser 6 mg/mL, stable 6h.", administration: "IVL en 30 minutes.", remarques: "Incompatible avec la nutrition parentérale. Très agressif en cas d'extravasation. Inducteur enzymatique." },
            { title: "Ticarcilline-Acide Clavulanique (Claventin®)", posologie: "225 à 300 mg/kg/j en 3 à 4 prises, sans dépasser 18 g/j.", reconstitution: "EPPI ou NaCl 0,9%.", dilution: "G5% ou NaCl 0,9%, 30 à 50 mg/mL, stable 6h.", administration: "IVL sur 30 minutes.", remarques: "Posologies et concentrations exprimées en ticarcilline. Max 5 mg/kg/prise et 20 mg/kg/j d'acide clavulanique. Incompatible avec les aminosideS, bicarbonates et la nutrition parentérale. Teneur en sodium 5,2 mEq/g et teneur en potassium 0,33 mEq/g. " },
            { title: "Triméthoprime-Sulfaméthoxazole (Bactrim®)", posologie: "30 à 60 mg/kg/j en 2 prises (curatif pneumocystis carinii : 100 mg/kg/j en 3 prises).", reconstitution: "NA.", dilution: "G5% ou NaCl 0,9% 3,2 mg/mL (stable 6h), max. 8 mg/mL si restriction hydrique (stable 1h).", administration: "IVL sur 60 minutes.", remarques: "Posologies et concentrations exprimées en Sulfaméthoxazole. Peut être administré pur sur VVC. Incompatible avec la nutrition parentérale." },
            { title: "Vancomycine (Vancocine®)", posologie: "40 à 60 mg/kg/j en 4 prises ou en continu.", reconstitution: "EPPI 50 mg/mL.", dilution: "G5% ou NaCl 0,9%, ne pas dépasser 10 mg/mL, stable 24h.", administration: "IVL en 60 minutes ou IVSE.", remarques: "Ralentir la perfusion en cas de réaction cutanée (Redman Syndrome). Compatible avec la nutrition parentérale, les lipides IV et l'héparine < 1 UI/mL." },
            { title: "Voriconazole (Vfend®)", posologie: "2 à 12 ans et < 50 kg : 18 mg/kg/j à J1 puis 16 mg/kg/j. Après 12 ans et > 50 kg, 12 mg/kg/j à J1 puis 8 mg/kg/j. En 2 prises.", reconstitution: "EPPI ou NaCl 0,9%, 19 mL pour obtenir 10 mg/mL.", dilution: "G5% ou NaCl 0,9%, 0,5 à 5 mg/mL.", administration: "IVL en 1 à 3h, sans dépasser 3 mg/kg/h.", remarques: "Risque d'accumulation de l'excipient chez l'insuffisant rénal : préférer la forme orale chaque fois que possible. Incompatible avec la nutrition parentérale et les bicarbonates." },
        ];
    }
    ServiceDataProvider.prototype.filterItems = function (searchTerm) {
        return this.cards.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ServiceDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ServiceDataProvider);
    return ServiceDataProvider;
}());

//# sourceMappingURL=liste_anti_infectieux.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anti_infectieux_anti_infectieux__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(166);
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
    }
    ProtocolesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProtocolesPage');
    };
    ProtocolesPage.prototype.openAntiInfectieuxTraitement = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */]);
    };
    ;
    ProtocolesPage.prototype.openExtrophieVesicale = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */]);
    };
    ;
    ProtocolesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-protocoles',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\protocoles\protocoles.html"*/'<!--\n  Generated template for the ProtocolesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Protocoles</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-divider color="warning">Anti-infectieux</ion-item-divider>\n      <ion-item>Prophylaxie</ion-item>\n      <ion-item (click)="openAntiInfectieuxTraitement()">Traitement</ion-item>\n    <ion-item-divider color="turquoise">Chirurgies pédiatriques spécifiques</ion-item-divider>\n      <ion-item (click)="openExtrophieVesicale()">Extrophie Vésicale</ion-item>\n    <ion-item-divider color="light">Obstétrique</ion-item-divider>\n      <ion-item>Péridurale</ion-item>\n      <ion-item>Péridurale Déambularoire</ion-item>\n      <ion-item>Césarienne</ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\protocoles\protocoles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProtocolesPage);
    return ProtocolesPage;
}());

//# sourceMappingURL=protocoles.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommandationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__ = __webpack_require__(147);
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
    function RecommandationsPage(navCtrl, navParams, InAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InAppBrowser = InAppBrowser;
    }
    RecommandationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecommandationsPage');
    };
    RecommandationsPage.prototype.openWebpage = function (url) {
        var browser = this.InAppBrowser.create(url, '_system');
    };
    RecommandationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommandations',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\recommandations\recommandations.html"*/'<!--\n  Generated template for the RecommandationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recommandations en anesthésie pédiatrique</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  Choisir parmi les recommandations listées ci-dessous (ouvre une fenêtre dans le navigateur) : \n\n  <ion-item (click)="openWebpage(\'https://sfar.org/wp-content/uploads/2019/10/rfe-gestion-des-voies-aeriennes-de-lenfant.pdf\')"><ion-label>\n    RFE SFAR 2018 \n    <p>Voies aériennes de l\'enfant</p>\n  </ion-label></ion-item>\n\n  <ion-item (click)="openWebpage(\'https://www.has-sante.fr/upload/docs/application/pdf/2015-02/transfusion_de_globules_rouges_homologues_-_produits_indications_alternatives_-_recommandations.pdf\')">\n    <ion-label>HAS ANSM 2014\n    <p> Bonnes pratiques transfusionnelles</p>\n  </ion-label></ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\recommandations\recommandations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], RecommandationsPage);
    return RecommandationsPage;
}());

//# sourceMappingURL=recommandations.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnuairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_annuaire_data_annuaire_data__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(155);
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





/**
 * Generated class for the AnnuairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnuairePage = /** @class */ (function () {
    function AnnuairePage(navCtrl, navParams, storage, alertController, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
        this.dataService = dataService;
        this.searchTerm = "";
        this.isShownCard = false;
    }
    AnnuairePage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
        this.dataService.orderItems();
        console.log('items rangés par ordre alphabétique');
    };
    AnnuairePage.prototype.ngOnInit = function () {
        this.setFilteredItems();
        this.dataService.orderItems();
    };
    AnnuairePage.prototype.setFilteredItems = function () {
        this.items = this.dataService.filterItems(this.searchTerm);
    };
    AnnuairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-annuaire',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\annuaire\annuaire.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Annuaire</ion-title>\n  </ion-navbar>\n <ion-card-content color="danger">Pour appeler directement depuis un mobile, composez ******** puis le numéro de poste.\n  </ion-card-content>\n  <ion-searchbar\n  [(ngModel)]="searchTerm"\n  (ionChange)="setFilteredItems()"\n></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      <p class="nomAnnuaire"><b>{{ item.nom }}</b></p>\n      <p> Téléphone {{item.telephone}} </p> \n      <p>{{item.secteur}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\annuaire\annuaire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_annuaire_data_annuaire_data__["a" /* AnnuaireDataProvider */]])
    ], AnnuairePage);
    return AnnuairePage;
}());

;
//# sourceMappingURL=annuaire.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnuaireDataProvider; });
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
  Generated class for the AnnuaireDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AnnuaireDataProvider = /** @class */ (function () {
    function AnnuaireDataProvider() {
        this.items = [];
        this.items = [
            { nom: "Abdat Rachida - Médecin - Anesthésie", telephone: "4 4101", secteur: "" },
            { nom: "Amiel Isabelle - Médecin - Anesthésie", telephone: "4 4034", secteur: "" },
            { nom: "Assaker Rita - Médecin - Anesthésie", telephone: "4 3527", secteur: "" },
            { nom: "Ayan Manesh Fanny - Médecin - Anesthésie", telephone: "4 1619", secteur: "" },
            { nom: "Azale Mehdi - Médecin - Anesthésie", telephone: "4 4017", secteur: "" },
            { nom: "Brouns Kelly - Médecin - Anesthésie", telephone: "4 1680", secteur: "" },
            { nom: "Bruneau Béatrice - Médecin - Anesthésie", telephone: "4 2282", secteur: "" },
            { nom: "Cholet Clémentine - Médecin - Anesthésie", telephone: "4 1702", secteur: "" },
            { nom: "Colas Anne-Emmanuelle - Médecin - Anesthésie", telephone: "4 4011", secteur: "" },
            { nom: "Dahmani Souhayl - PUPH - Anesthésie", telephone: "4 4183", secteur: "" },
            { nom: "Dreyfus Aliénor - Médecin - Anesthésie", telephone: "4 2593", secteur: "" },
            { nom: "Fait Charlotte - Médecin - Anesthésie", telephone: "4 3186", secteur: "" },
            { nom: "Greff Bruno - Médecin - Anesthésie", telephone: "4 2183", secteur: "" },
            { nom: "Haddad Valéry-Jo - Médecin - Anesthésie", telephone: "4 1675", secteur: "" },
            { nom: "Julien Florence - Médecin - Anesthésie", telephone: "4 2714", secteur: "" },
            { nom: "Lira Elsa - Médecin - Anesthésie", telephone: "4 4015", secteur: "" },
            { nom: "Loiselle Maud - Médecin - Anesthésie", telephone: "4 1703", secteur: "" },
            { nom: "Mangalsuren Nyama - Médecin - Anesthésie", telephone: "4 2591", secteur: "" },
            { nom: "Marsac Lucile - Médecin - Anesthésie", telephone: "4 4103", secteur: "" },
            { nom: "Pontone Silvia - Médecin - Anesthésie", telephone: "4 4009", secteur: "" },
            { nom: "Tri Nathalie - Médecin - Anesthésie", telephone: "4 4091", secteur: "" },
            { nom: "Silins Vilnis - Médecin - Anesthésie", telephone: "4 4010", secteur: "" },
            { nom: "Vacher Thomas - Médecin - Anesthésie", telephone: "4 2799", secteur: "" },
            { nom: "MAR Volant - Médecin - Anesthésie", telephone: "4 1375", secteur: "" },
            { nom: "IADE Polyvalent - IADE - Anesthésie", telephone: "4 3990", secteur: "" },
            { nom: "Consultation - Anesthésie", telephone: "4 2221", secteur: "Bleu, étage -1" },
            { nom: "MAR de garde pédiatrie - Médecin - Anesthésie", telephone: "4 3831", secteur: "" },
            { nom: "Interne de garde - Médecin - Anesthésie", telephone: "4 3853", secteur: "" },
            { nom: "IADE de garde - IADE - Anesthésie", telephone: "4 3832", secteur: "" },
            { nom: "Réveil bloc commun (fixe) - Anesthésie", telephone: "4 2271", secteur: "Jaune, étage -3" },
            { nom: "Réveil bloc commun (DECT) - Anesthésie", telephone: "4 1096", secteur: "Jaune, étage -3" },
            { nom: "Réveil bloc HDJ (fixe) - Anesthésie", telephone: "4 2236", secteur: "Jaune, étage -2" },
            { nom: "Réveil bloc HDJ (DECT) - Anesthésie", telephone: "4 1087", secteur: "Jaune, étage -2" },
            { nom: "Réveil bloc GynObst (fixe) - Anesthésie", telephone: "4 2151", secteur: "Rouge, étage +1" },
            { nom: "Réveil bloc GynObst (DECT) - Anesthésie", telephone: "4 3836", secteur: "Rouge, étage +1" },
            { nom: "Réveil IRM - Anesthésie", telephone: "4 8279", secteur: "Bleu, étage -3" },
            { nom: "Bureau IADE bloc commun - Anesthésie", telephone: "4 3325", secteur: "Jaune, étage -3" },
            { nom: "Paulet Fabienne - Cadre supérieur de bloc", telephone: "4 2280", secteur: "Jaune, étage -3" },
            { nom: "Bub Isabelle - Cadre SSPI", telephone: "4 2564", secteur: "Jaune, étage -3" },
            { nom: "Blancard Benoit - Cadre IADE", telephone: "4 2269", secteur: "Jaune, étage -3" },
            { nom: "Chiron Christophe - Coordination technique", telephone: "4 4164", secteur: "" },
            { nom: "Berdji Abdel - IADE - Gestes d'urgence", telephone: "4 4154", secteur: "" },
            { nom: "Mimouni Corinne - Secrétariat - Anesthésie-Réanimation", telephone: "4 2268", secteur: "Rouge, étage 0" },
            { nom: "Fax bloc commun", telephone: "4 2024", secteur: "Jaune, étage -3" },
            { nom: "Fax consultation anesthésie", telephone: "4 2760", secteur: "Bleu, étage -1" },
            { nom: "Fax secrétariat anesthésie", telephone: "4 2237", secteur: "Bleu, étage -1" },
            { nom: "Infirmière douleur (CETD)", telephone: "4 5343 ou 4 4063", secteur: "Jaune, étage -2" },
            { nom: "Secrétariat douleur (CETD)", telephone: "4 5346 ou 4 4195", secteur: "Jaune, étage -2" },
            { nom: "Chirurgie Orthopédique (hospitalisation)", telephone: "4 2038 ou 4 1302", secteur: "Bleu, étage +3" },
            { nom: "USC (soins continus)", telephone: "4 1315 ou 4 2032", secteur: "Bleu, étage +4" },
            { nom: "Chirurgie Viscérale et Urologique (hospitalisation)", telephone: "4 1317 ou 4 2316", secteur: "Bleu, étage +4" },
            { nom: "Chirurgie ORL (hospitalisation)", telephone: "4 1318", secteur: "Bleu, étage +5" },
            { nom: "Néphrologie (hospitalisation)", telephone: "4 2394", secteur: "Bleu, étage +2" },
            { nom: "Pédiatrie Générale (hospitalisation grands)", telephone: "4 2047 ou 4 2049", secteur: "Bleu ou Vert, étage +4" },
            { nom: "Pédiatrie Générale (hospitalisation petits)", telephone: "4 2050", secteur: "Bleu ou Vert, étage +4" },
            { nom: "Neurologie (hospitalisation)", telephone: "4 2057", secteur: "Vert, étage +3" },
            { nom: "Hématologie (hospitalisation)", telephone: "4 3223", secteur: "Vert, étage +4" },
            { nom: "Hématologie (hospitalisation)", telephone: "4 3034", secteur: "Vert, étage +5" },
            { nom: "Hématologie (hospitalisation petits)", telephone: "4 8189", secteur: "Vert, étage +4" },
            { nom: "Gastro-entérologie (hospitalisation grands)", telephone: "4 2289", secteur: "Vert, étage +5" },
            { nom: "Gastro-entérologie (hospitalisation petits)", telephone: "4 3710", secteur: "Vert, étage +5" },
            { nom: "Mucoviscidose (hospitalisation)", telephone: "4 1285", secteur: "" },
            { nom: "Réanimation pédiatrique (hospitalisation)", telephone: "4 3416 ou 4 2287", secteur: "Jaune, étage -3, Code 1950A" },
            { nom: "Réanimation néonatale (hospitalisation)", telephone: "4 2058 ou 4 3114", secteur: "Rouge, étage +3" },
            { nom: "Néonatalogie (hospitalisation, côté maternité)", telephone: "4 2157", secteur: "Rouge, étage +2" },
            { nom: "Néonatologie (hospitalisation)", telephone: "4 2058 ou 4 2063 ou 4 2066", secteur: "Rouge, étage +3" },
            { nom: "Endocrinologie et Diabétologie (hospitalisation)", telephone: "4 2068", secteur: "  Vert, étage +3" },
            { nom: "Urgences (SAU)", telephone: "4 3322", secteur: "Jaune, étage -3" },
            { nom: "Urgences - Lits porte (hospitalisation)", telephone: "4 5313", secteur: "Jaune, étage -3 - code 6789" },
            { nom: "Cardiologie (hospitalisation)", telephone: "4 2065", secteur: "Bleu, étage +2" },
            { nom: "PC Sécurité", telephone: "4 3255", secteur: "" },
            { nom: "Obstétrique (hospitalisation)", telephone: "4 2120 ou 4 2098 ou 4 1303", secteur: "Rouge, étage +2" },
            { nom: "Gynécologie (hospitalisation)", telephone: "4 2093", secteur: "Rouge, étage +2" },
            { nom: "Salle de travail (maternité)", telephone: "4 2155 ou 4 3523", secteur: "Rouge, étage +1" },
            { nom: "Sage-femme (maternité)", telephone: "4 3485", secteur: "Rouge, étage +1" },
            { nom: "Bloc maternité - IDE", telephone: "4 3202", secteur: "" },
            { nom: "Admissions", telephone: "4 2198", secteur: "" },
            { nom: "Informatique", telephone: "4 3700", secteur: "" },
            { nom: "TAL", telephone: "4 1341", secteur: "" },
            { nom: "Lingerie", telephone: "4 5715", secteur: "" },
            { nom: "Service technique", telephone: "4 3900", secteur: "" },
            { nom: "Service BioMed", telephone: "4 4793", secteur: "" },
            { nom: "Kinésithérapeutes", telephone: "4 3868, 3877, 2231, 3865, 1358", secteur: "" },
            { nom: "Radiologue de garde - Médecin", telephone: "4 2330", secteur: "" },
        ];
    }
    AnnuaireDataProvider.prototype.orderItems = function () {
        var sorted = this.items.sort(function (a, b) { return a.nom > b.nom ? 1 : -1; });
        var grouped = sorted.reduce(function (groups, item) {
            var letter = item.nom.charAt(0);
            groups[letter] = groups[letter] || [];
            groups[letter].push(item);
            return groups;
        }, {});
        var result = Object.keys(grouped).map(function (key) { return ({ key: key, items: grouped[key] }); });
    };
    ;
    AnnuaireDataProvider.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return item.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    AnnuaireDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AnnuaireDataProvider);
    return AnnuaireDataProvider;
}());

//# sourceMappingURL=annuaire-data.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(504);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_accueil_accueil__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_options_options__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_plateau_induction_plateau_induction__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_plateau_vas_plateau_vas__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_gestion_fluides_gestion_fluides__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_antalgie_antalgie__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_urgence_urgence__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_entretien_anesth_entretien_anesth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_loco_regionale_loco_regionale__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_anti_infectieux_anti_infectieux__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_annuaire_annuaire__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_service_data_liste_anti_infectieux__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_annuaire_data_annuaire_data__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_protocoles_protocoles__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_recommandations_recommandations__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_monitorage_monitorage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_courbes_courbes__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_antibioprophylaxie_antibioprophylaxie__ = __webpack_require__(831);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_antalgie_antalgie__["a" /* AntalgiePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_urgence_urgence__["a" /* UrgencePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_annuaire_annuaire__["a" /* AnnuairePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_protocoles_protocoles__["a" /* ProtocolesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_recommandations_recommandations__["a" /* RecommandationsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_monitorage_monitorage__["a" /* MonitoragePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_courbes_courbes__["a" /* CourbesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: 'retour',
                    iconMode: 'md'
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_antalgie_antalgie__["a" /* AntalgiePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_urgence_urgence__["a" /* UrgencePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_annuaire_annuaire__["a" /* AnnuairePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_protocoles_protocoles__["a" /* ProtocolesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_recommandations_recommandations__["a" /* RecommandationsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_monitorage_monitorage__["a" /* MonitoragePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_courbes_courbes__["a" /* CourbesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_antibioprophylaxie_antibioprophylaxie__["a" /* AntibioprophylaxiePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_service_data_liste_anti_infectieux__["a" /* ServiceDataProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_annuaire_data_annuaire_data__["a" /* AnnuaireDataProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_plateau_induction_plateau_induction__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_gestion_fluides_gestion_fluides__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_plateau_vas_plateau_vas__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_antalgie_antalgie__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_urgence_urgence__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pre_medication_pre_medication__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_entretien_anesth_entretien_anesth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_anti_infectieux_anti_infectieux__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_loco_regionale_loco_regionale__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_extrophie_vesicale_extrophie_vesicale__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_monitorage_monitorage__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_protocoles_protocoles__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recommandations_recommandations__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_annuaire_annuaire__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_courbes_courbes__ = __webpack_require__(146);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__["a" /* AccueilPage */];
        this.isShownCalculs = false;
        this.isShownProtocoles = false;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__["a" /* AccueilPage */] },
            { title: 'Premedication', component: __WEBPACK_IMPORTED_MODULE_8__pages_pre_medication_pre_medication__["a" /* PreMedicationPage */] },
            { title: 'Plateau pour induction', component: __WEBPACK_IMPORTED_MODULE_3__pages_plateau_induction_plateau_induction__["a" /* PlateauInductionPage */] },
            { title: 'Voies aériennes', component: __WEBPACK_IMPORTED_MODULE_5__pages_plateau_vas_plateau_vas__["a" /* PlateauVasPage */] },
            { title: "Urgences", component: __WEBPACK_IMPORTED_MODULE_7__pages_urgence_urgence__["a" /* UrgencePage */] },
            { title: 'Entretien anesthéique', component: __WEBPACK_IMPORTED_MODULE_9__pages_entretien_anesth_entretien_anesth__["a" /* EntretienAnesthPage */] },
            { title: 'Gestion des fluides', component: __WEBPACK_IMPORTED_MODULE_4__pages_gestion_fluides_gestion_fluides__["a" /* GestionFluidesPage */] },
            { title: 'Analgésie & NVPO', component: __WEBPACK_IMPORTED_MODULE_6__pages_antalgie_antalgie__["a" /* AntalgiePage */] },
            { title: 'Anti-infectieux', component: __WEBPACK_IMPORTED_MODULE_10__pages_anti_infectieux_anti_infectieux__["a" /* AntiInfectieuxPage */] },
            { title: 'Loco-régionale', component: __WEBPACK_IMPORTED_MODULE_11__pages_loco_regionale_loco_regionale__["a" /* LocoRegionalePage */] },
            { title: 'Extrophie vésicale', component: __WEBPACK_IMPORTED_MODULE_12__pages_extrophie_vesicale_extrophie_vesicale__["a" /* ExtrophieVesicalePage */] },
            { title: 'Annuaire', component: __WEBPACK_IMPORTED_MODULE_16__pages_annuaire_annuaire__["a" /* AnnuairePage */] },
            { title: 'Protocoles', component: __WEBPACK_IMPORTED_MODULE_14__pages_protocoles_protocoles__["a" /* ProtocolesPage */] },
            { title: 'Recommandations', component: __WEBPACK_IMPORTED_MODULE_15__pages_recommandations_recommandations__["a" /* RecommandationsPage */] },
            { title: 'Monitorage', component: __WEBPACK_IMPORTED_MODULE_13__pages_monitorage_monitorage__["a" /* MonitoragePage */] },
            { title: 'Courbes', component: __WEBPACK_IMPORTED_MODULE_19__pages_courbes_courbes__["a" /* CourbesPage */] },
        ];
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
    MyApp.prototype.ToggleProtocoles = function () {
        this.isShownProtocoles = !this.isShownProtocoles;
        this.isShownCalculs = false;
    };
    /* openPage(page) {
      // close the menu when clicking a link from the menu
      this.menu.close();
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
  */
    MyApp.prototype.openProtocoles = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_protocoles_protocoles__["a" /* ProtocolesPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openRecommandations = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_recommandations_recommandations__["a" /* RecommandationsPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openAccueilPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_accueil_accueil__["a" /* AccueilPage */]);
        this.menu.close();
    };
    ;
    MyApp.prototype.openAnnuaire = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_annuaire_annuaire__["a" /* AnnuairePage */]);
        this.menu.close();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\app\app.html"*/'<ion-menu [content]="content" type="overlay" side="start" menuId="custom" contentId="main" class="my-custom-menu">\n\n  <ion-header>\n    <ion-toolbar color="tertiary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n\n      <ion-item (click)="openAccueilPage()" color="turquoise">QuadruPed Calculs</ion-item>\n    \n      <ion-item (click)="openProtocoles()" color="light">QuadruPed Protocoles</ion-item> \n    \n      <ion-item (click)="openRecommandations()" color="light">Recommandations</ion-item> \n\n      <ion-item (click)="openAnnuaire()" color="tertiary">Annuaire</ion-item>\n\n    </ion-list>\n  </ion-content>\n  \n    </ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 262,
	"./af.js": 262,
	"./ar": 263,
	"./ar-dz": 264,
	"./ar-dz.js": 264,
	"./ar-kw": 265,
	"./ar-kw.js": 265,
	"./ar-ly": 266,
	"./ar-ly.js": 266,
	"./ar-ma": 267,
	"./ar-ma.js": 267,
	"./ar-sa": 268,
	"./ar-sa.js": 268,
	"./ar-tn": 269,
	"./ar-tn.js": 269,
	"./ar.js": 263,
	"./az": 270,
	"./az.js": 270,
	"./be": 271,
	"./be.js": 271,
	"./bg": 272,
	"./bg.js": 272,
	"./bm": 273,
	"./bm.js": 273,
	"./bn": 274,
	"./bn-bd": 275,
	"./bn-bd.js": 275,
	"./bn.js": 274,
	"./bo": 276,
	"./bo.js": 276,
	"./br": 277,
	"./br.js": 277,
	"./bs": 278,
	"./bs.js": 278,
	"./ca": 279,
	"./ca.js": 279,
	"./cs": 280,
	"./cs.js": 280,
	"./cv": 281,
	"./cv.js": 281,
	"./cy": 282,
	"./cy.js": 282,
	"./da": 283,
	"./da.js": 283,
	"./de": 284,
	"./de-at": 285,
	"./de-at.js": 285,
	"./de-ch": 286,
	"./de-ch.js": 286,
	"./de.js": 284,
	"./dv": 287,
	"./dv.js": 287,
	"./el": 288,
	"./el.js": 288,
	"./en-au": 289,
	"./en-au.js": 289,
	"./en-ca": 290,
	"./en-ca.js": 290,
	"./en-gb": 291,
	"./en-gb.js": 291,
	"./en-ie": 292,
	"./en-ie.js": 292,
	"./en-il": 293,
	"./en-il.js": 293,
	"./en-in": 294,
	"./en-in.js": 294,
	"./en-nz": 295,
	"./en-nz.js": 295,
	"./en-sg": 296,
	"./en-sg.js": 296,
	"./eo": 297,
	"./eo.js": 297,
	"./es": 298,
	"./es-do": 299,
	"./es-do.js": 299,
	"./es-mx": 300,
	"./es-mx.js": 300,
	"./es-us": 301,
	"./es-us.js": 301,
	"./es.js": 298,
	"./et": 302,
	"./et.js": 302,
	"./eu": 303,
	"./eu.js": 303,
	"./fa": 304,
	"./fa.js": 304,
	"./fi": 305,
	"./fi.js": 305,
	"./fil": 306,
	"./fil.js": 306,
	"./fo": 307,
	"./fo.js": 307,
	"./fr": 308,
	"./fr-ca": 309,
	"./fr-ca.js": 309,
	"./fr-ch": 310,
	"./fr-ch.js": 310,
	"./fr.js": 308,
	"./fy": 311,
	"./fy.js": 311,
	"./ga": 312,
	"./ga.js": 312,
	"./gd": 313,
	"./gd.js": 313,
	"./gl": 314,
	"./gl.js": 314,
	"./gom-deva": 315,
	"./gom-deva.js": 315,
	"./gom-latn": 316,
	"./gom-latn.js": 316,
	"./gu": 317,
	"./gu.js": 317,
	"./he": 318,
	"./he.js": 318,
	"./hi": 319,
	"./hi.js": 319,
	"./hr": 320,
	"./hr.js": 320,
	"./hu": 321,
	"./hu.js": 321,
	"./hy-am": 322,
	"./hy-am.js": 322,
	"./id": 323,
	"./id.js": 323,
	"./is": 324,
	"./is.js": 324,
	"./it": 325,
	"./it-ch": 326,
	"./it-ch.js": 326,
	"./it.js": 325,
	"./ja": 327,
	"./ja.js": 327,
	"./jv": 328,
	"./jv.js": 328,
	"./ka": 329,
	"./ka.js": 329,
	"./kk": 330,
	"./kk.js": 330,
	"./km": 331,
	"./km.js": 331,
	"./kn": 332,
	"./kn.js": 332,
	"./ko": 333,
	"./ko.js": 333,
	"./ku": 334,
	"./ku.js": 334,
	"./ky": 335,
	"./ky.js": 335,
	"./lb": 336,
	"./lb.js": 336,
	"./lo": 337,
	"./lo.js": 337,
	"./lt": 338,
	"./lt.js": 338,
	"./lv": 339,
	"./lv.js": 339,
	"./me": 340,
	"./me.js": 340,
	"./mi": 341,
	"./mi.js": 341,
	"./mk": 342,
	"./mk.js": 342,
	"./ml": 343,
	"./ml.js": 343,
	"./mn": 344,
	"./mn.js": 344,
	"./mr": 345,
	"./mr.js": 345,
	"./ms": 346,
	"./ms-my": 347,
	"./ms-my.js": 347,
	"./ms.js": 346,
	"./mt": 348,
	"./mt.js": 348,
	"./my": 349,
	"./my.js": 349,
	"./nb": 350,
	"./nb.js": 350,
	"./ne": 351,
	"./ne.js": 351,
	"./nl": 352,
	"./nl-be": 353,
	"./nl-be.js": 353,
	"./nl.js": 352,
	"./nn": 354,
	"./nn.js": 354,
	"./oc-lnc": 355,
	"./oc-lnc.js": 355,
	"./pa-in": 356,
	"./pa-in.js": 356,
	"./pl": 357,
	"./pl.js": 357,
	"./pt": 358,
	"./pt-br": 359,
	"./pt-br.js": 359,
	"./pt.js": 358,
	"./ro": 360,
	"./ro.js": 360,
	"./ru": 361,
	"./ru.js": 361,
	"./sd": 362,
	"./sd.js": 362,
	"./se": 363,
	"./se.js": 363,
	"./si": 364,
	"./si.js": 364,
	"./sk": 365,
	"./sk.js": 365,
	"./sl": 366,
	"./sl.js": 366,
	"./sq": 367,
	"./sq.js": 367,
	"./sr": 368,
	"./sr-cyrl": 369,
	"./sr-cyrl.js": 369,
	"./sr.js": 368,
	"./ss": 370,
	"./ss.js": 370,
	"./sv": 371,
	"./sv.js": 371,
	"./sw": 372,
	"./sw.js": 372,
	"./ta": 373,
	"./ta.js": 373,
	"./te": 374,
	"./te.js": 374,
	"./tet": 375,
	"./tet.js": 375,
	"./tg": 376,
	"./tg.js": 376,
	"./th": 377,
	"./th.js": 377,
	"./tk": 378,
	"./tk.js": 378,
	"./tl-ph": 379,
	"./tl-ph.js": 379,
	"./tlh": 380,
	"./tlh.js": 380,
	"./tr": 381,
	"./tr.js": 381,
	"./tzl": 382,
	"./tzl.js": 382,
	"./tzm": 383,
	"./tzm-latn": 384,
	"./tzm-latn.js": 384,
	"./tzm.js": 383,
	"./ug-cn": 385,
	"./ug-cn.js": 385,
	"./uk": 386,
	"./uk.js": 386,
	"./ur": 387,
	"./ur.js": 387,
	"./uz": 388,
	"./uz-latn": 389,
	"./uz-latn.js": 389,
	"./uz.js": 388,
	"./vi": 390,
	"./vi.js": 390,
	"./x-pseudo": 391,
	"./x-pseudo.js": 391,
	"./yo": 392,
	"./yo.js": 392,
	"./zh-cn": 393,
	"./zh-cn.js": 393,
	"./zh-hk": 394,
	"./zh-hk.js": 394,
	"./zh-mo": 395,
	"./zh-mo.js": 395,
	"./zh-tw": 396,
	"./zh-tw.js": 396
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
webpackContext.id = 545;

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntibioprophylaxiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the AntibioprophylaxiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AntibioprophylaxiePage = /** @class */ (function () {
    function AntibioprophylaxiePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AntibioprophylaxiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntibioprophylaxiePage');
    };
    AntibioprophylaxiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-antibioprophylaxie',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antibioprophylaxie\antibioprophylaxie.html"*/'<!--\n  Generated template for the AntibioprophylaxiePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Antibioprophylaxie</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  En développement ! \n  <br>\n  Revenez plus tard...\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\antibioprophylaxie\antibioprophylaxie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AntibioprophylaxiePage);
    return AntibioprophylaxiePage;
}());

//# sourceMappingURL=antibioprophylaxie.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(24);
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




var PreMedicationPage = /** @class */ (function () {
    function PreMedicationPage(navCtrl, navParams, storage, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertController = alertController;
    }
    PreMedicationPage.prototype.presentAlert = function () {
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
    PreMedicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntalgiePage');
    };
    ;
    PreMedicationPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var promiseList = [];
        promiseList.push(this.storage.get('AgeNum').then(function (Age) {
            _this.AgeNum = Age;
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
                            if (!_this.PoidsNum || !_this.AgeNum) {
                                _this.presentAlert();
                            }
                            else {
                                return;
                            }
                            ;
                        });
                    });
                });
            });
        }));
    };
    PreMedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pre-medication',template:/*ion-inline-start:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\pre-medication\pre-medication.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Urgences</ion-title>\n  </ion-navbar>\n  <ion-item color="turquoise-fonce"> \n    <ion-label class="MonPatient" >Mon patient : {{AgeNum}} mois - {{PoidsNum}} kg \n      <p class="dilution">Estomac {{EstomacOuiNon}} - Jeune {{DureeJeune}} h</p>\n    <p>Allergie : {{Allergie}}</p></ion-label>\n    <ion-icon slot="end" icon="accessibility-outline"></ion-icon> \n  </ion-item>\n</ion-header>\n\n<ion-content>\n\n\n  \n</ion-content>'/*ion-inline-end:"C:\Users\pierr\OneDrive\Documents\GitHub\qu4drup3d\src\pages\pre-medication\pre-medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PreMedicationPage);
    return PreMedicationPage;
}());

//# sourceMappingURL=pre-medication.js.map

/***/ })

},[499]);
//# sourceMappingURL=main.js.map