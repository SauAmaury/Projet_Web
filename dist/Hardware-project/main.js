(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\r\n<router-outlet></router-outlet>\r\n</div>  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Hardware-project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profil/profil.component */ "./src/app/profil/profil.component.ts");
/* harmony import */ var _services_checkLogin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/checkLogin.service */ "./src/app/services/checkLogin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _game_check_game_check_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game-check/game-check.component */ "./src/app/game-check/game-check.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'connexion', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'profil', canActivate: [_services_checkLogin_service__WEBPACK_IMPORTED_MODULE_10__["checkLogin"]], component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"] },
    { path: 'gamecheck', canActivate: [_services_checkLogin_service__WEBPACK_IMPORTED_MODULE_10__["checkLogin"]], component: _game_check_game_check_component__WEBPACK_IMPORTED_MODULE_14__["GameCheckComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"],
                _game_check_game_check_component__WEBPACK_IMPORTED_MODULE_14__["GameCheckComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_8__["loginService"], _services_checkLogin_service__WEBPACK_IMPORTED_MODULE_10__["checkLogin"], _services_api_service__WEBPACK_IMPORTED_MODULE_13__["Api"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    border-top: 2px solid grey;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  Pied de page !\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/game-check/game-check.component.css":
/*!*****************************************************!*\
  !*** ./src/app/game-check/game-check.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    text-align: center;\r\n    width: auto;\r\n    margin: 10px 10px;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\n#menu {\r\n\ttext-align:center;\r\n}\r\n\r\n#content {\r\n\tdisplay: flex;\r\n    flex-direction: vertical;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#content img {\r\n    min-height: 200px;\r\n    max-height: 200px;\r\n    max-width: 150px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n\r\n.gconf {\r\n\theight: 200;\r\n\twidth: 150;\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n\tborder: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\n#loading{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/game-check/game-check.component.html":
/*!******************************************************!*\
  !*** ./src/app/game-check/game-check.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div *ngIf=\"isResolve | async\">\r\n  <div id=\"menu\">\r\n    <label for=\"game\">Jeux : </label>\r\n    <select [(ngModel)]=\"gameSelected\" id=\"game\" (ngModelChange)=\"onGameChange()\">\r\n      <option *ngFor=\"let game of gameList\" [ngValue]=\"game\">\r\n        {{game.nom}}\r\n      </option>\r\n    </select>\r\n    <label for=\"config\">Config : </label>\r\n    <select [(ngModel)]=\"configSelected\" id=\"config\">\r\n      <option *ngFor=\"let config of configList\" [value]=\"config\">\r\n        {{config.nom}}\r\n      </option>\r\n    </select>\r\n  </div>\r\n\r\n\r\n  <div id=\"content\">\r\n    <img src='{{ \"assets/images/games/\" + this.gameSelected.nom + \".jpg\" }}'>\r\n    <div class=\"gconf\">\r\n      <h3>Configuration recommandée</h3>\r\n      <h3>Carte graphique : {{this.configr.cg.nom}}</h3>\r\n      <h3>Processeur : {{this.configr.proc.nom}}</h3>\r\n      <h3>Mémoire : {{this.configr.mem.nom}}</h3>\r\n    </div>\r\n    <div class=\"gconf\">\r\n      <h3>Configuration minimale</h3>\r\n      <h3>Carte graphique : {{this.configm.cg.nom}}</h3>\r\n      <h3>Processeur : {{this.configm.proc.nom}}</h3>\r\n      <h3>Mémoire : {{this.configm.mem.nom}}</h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"loading\" *ngIf=\"!(isResolve | async)\">\r\n  <img src=\"assets/images/loading.gif\">\r\n</div>"

/***/ }),

/***/ "./src/app/game-check/game-check.component.ts":
/*!****************************************************!*\
  !*** ./src/app/game-check/game-check.component.ts ***!
  \****************************************************/
/*! exports provided: GameCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCheckComponent", function() { return GameCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameCheckComponent = /** @class */ (function () {
    function GameCheckComponent(loginService, api) {
        this.loginService = loginService;
        this.api = api;
    }
    GameCheckComponent.prototype.ngOnInit = function () {
        this.initGames();
        this.initConf();
    };
    GameCheckComponent.prototype.initGames = function () {
        var _this = this;
        this.api.getGameList().then(function (res) {
            _this.gameList = res;
            _this.gameSelected = res[0];
            _this.getGameConfig(_this.gameSelected.id);
        });
    };
    GameCheckComponent.prototype.initConf = function () {
        var _this = this;
        this.api.getListeConf().then(function (res) {
            _this.configList = res;
            _this.configSelected = res[0];
        });
    };
    GameCheckComponent.prototype.getGameConfig = function (idj) {
        var _this = this;
        var p1 = new Promise(function (resolve, reject) {
            _this.api.getGameConf("r", idj).then(function (res) {
                _this.api.getListeConfDevices(res).then(function (res2) {
                    _this.configr = res2;
                    resolve();
                });
            });
        });
        var p2 = new Promise(function (resolve, reject) {
            _this.api.getGameConf("m", idj).then(function (res) {
                _this.api.getListeConfDevices(res).then(function (res2) {
                    _this.configm = res2;
                    resolve();
                });
            });
        });
        Promise.all([p1, p2]).then(function () { _this.isResolve = Promise.resolve(true); });
    };
    GameCheckComponent.prototype.onGameChange = function () {
        this.getGameConfig(this.gameSelected.id);
    };
    GameCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-check',
            template: __webpack_require__(/*! ./game-check.component.html */ "./src/app/game-check/game-check.component.html"),
            styles: [__webpack_require__(/*! ./game-check.component.css */ "./src/app/game-check/game-check.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["loginService"], _services_api_service__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], GameCheckComponent);
    return GameCheckComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n    border-bottom: 2px solid grey;\r\n    text-align: center;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    padding: 20px;\r\n    font-size: 50px;\r\n}\r\n\r\n.navbar {\r\n\tfont-size : 25px;\r\n\tborder-radius: 4px;\r\n\tborder-top: 2px solid grey;\r\n\tborder-left: 2px solid grey;\r\n\tborder-right: 2px solid grey;\r\n\tcolor: black;\r\n    text-decoration: none;\r\n}\r\n\r\n.close {\r\n\tposition: absolute;\r\n\tpadding-right: 15px;\r\n\tpadding-top: 15px;\r\n    top: 0px;\r\n    right: 0px;\t\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h1>Hardware mania</h1>\r\n  <div [ngStyle]=\"{'visibility': getState()}\">\r\n    <a routerLink=\"/profil\" class=\"navbar\">Profil</a>\r\n    <a routerLink=\"/gamecheck\" class=\"navbar\">GameCheck</a>\r\n    <a href=\"#\" class=\"navbar\">Forum</a>\r\n    <a href=\"#\" class=\"close\">X</a>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getState = function () {
        if (this.loginService.getState()) {
            return "visible";
        }
        else {
            return "hidden";
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["loginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n    margin: 30px 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput {\r\n    width: 30%;\r\n    margin: 10px 10px;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\nbutton {\r\n    width: 15%;\r\n    padding: 10px;\r\n    margin: 10px 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    background-color: rgb(34, 196, 34);\r\n}\r\n\r\nbutton:hover{\r\n    background-color: rgb(4, 49, 4);\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"login\">\r\n  <label>E-mail :</label>\r\n  <input [(ngModel)]=\"email\" type=\"input\"/>\r\n  <label>Mot de passe :</label>\r\n  <input [(ngModel)]=\"passwd\" type=\"password\" id=\"password\"/>\r\n  <button id=\"submit\" (click)=\"onSubmit()\">Se connecter</button>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.email = "user@test.com";
        this.passwd = "test";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLogged = this.loginService.getState();
        if (this.isLogged) {
            this.router.navigate(['profil']);
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.logIn(this.email, this.passwd).then(function () {
            _this.isLogged = _this.loginService.getState();
            if (_this.isLogged) {
                _this.router.navigate(['profil']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["loginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profil/profil.component.css":
/*!*********************************************!*\
  !*** ./src/app/profil/profil.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".config {\r\n    margin: 30px 30px;\r\n    display: flex;\r\n    flex-direction: vertical;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.config div {\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n}\r\n\r\n.menu {\r\n    text-align: center;\r\n}\r\n\r\n.menu select{\r\n    width: auto;\r\n    margin: 10px 10px;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\n.boutonbp {\r\n    margin: 30px 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.boutonbp #ajout {\r\n    margin: 30px 30px;\r\n    background-color: green;\r\n    border-radius: 4px;\r\n}\r\n\r\n.boutonbp #modif {\r\n    margin: 30px 30px;\r\n    background-color: orange;\r\n    border-radius: 4px;\r\n}\r\n\r\n.boutonbp #supp {\r\n    margin: 30px 30px;\r\n    background-color: red;\r\n    border-radius: 4px;\r\n}\r\n\r\n.form {\r\n    visibility: hidden;\r\n    z-index: 2;\r\n    background-color: white;\r\n    border: solid black;\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.form select {\r\n    width: auto;\r\n    margin: 10px 10px;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\n.form button {\r\n    width: auto;\r\n    margin: 10px 10px;\r\n    padding: 10px;\r\n    border: 1px solid green;\r\n    border-radius: 4px;\r\n}\r\n\r\n.focus {\r\n    z-index: 1;\r\n    position: fixed;\r\n    padding: 0;\r\n    margin: 0;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(49, 41, 41, 0.5);\r\n}\r\n\r\n#loading{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/profil/profil.component.html":
/*!**********************************************!*\
  !*** ./src/app/profil/profil.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div *ngIf=\"isResolve | async\">\r\n  <div class=\"menu\">\r\n    <!--  <select [(ngModel)]=\"config\">-->\r\n    <select  [(ngModel)]=\"configSelect\" (ngModelChange)=\"onConfigChange()\">\r\n      <option *ngFor=\"let configs of config\" [ngValue]=\"configs\">\r\n        {{configs.nom}}\r\n      </option>\r\n    </select>\r\n  </div>\r\n  <div class=\"config\">\r\n    <div>\r\n      <h3>Carte graphique : {{cg}}</h3>\r\n    </div>\r\n    <div>\r\n      <h3>Processeur : {{proc}}</h3>\r\n    </div>\r\n    <div>\r\n      <h3>Mémoire : {{mem}}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"boutonbp\">\r\n    <button id=\"ajout\" (click)=\"onClick('add')\">Ajouter</button>\r\n    <button id=\"modif\" (click)=\"onClick('modify')\">Modifier</button>\r\n    <button id=\"supp\" (click)=\"onClick('delete')\">Supprimer</button>\r\n  </div>\r\n\r\n  <!--Section masquée-->\r\n  <div class=\"form\" [ngStyle]=\"{'visibility': getState()}\">\r\n      <h3>Nom :</h3>\r\n    <input [(ngModel)]=\"nomConf\" value=\"\" type=\"input\"/>\r\n    <h3>Carte graphique :</h3>\r\n    <select [(ngModel)]=\"cgListeSelect\">\r\n      <option *ngFor=\"let cg of cgListe\" [ngValue]=\"cg\">\r\n        {{cg.nom}}\r\n      </option>\r\n    </select>\r\n    <h3>Processeur :</h3>\r\n    <select [(ngModel)]=\"procListeSelect\">\r\n      <option *ngFor=\"let proc of procListe\" [ngValue]=\"proc\">\r\n        {{proc.nom}}\r\n      </option>\r\n    </select>\r\n    <h3>Mémoire :</h3>\r\n    <select [(ngModel)]=\"memListeSelect\">\r\n      <option *ngFor=\"let mem of memListe\" [ngValue]=\"mem\">\r\n        {{mem.nom}}\r\n      </option>\r\n    </select>\r\n    <button id=\"ajout\" (click)=\"onSubmitForm()\">Valider</button>\r\n  </div>\r\n  <div class=\"focus\" [ngStyle]=\"{'visibility': getState()}\"></div>\r\n</div>\r\n\r\n<div id=\"loading\" *ngIf=\"!(isResolve | async)\">\r\n  <img src=\"assets/images/loading.gif\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profil/profil.component.ts":
/*!********************************************!*\
  !*** ./src/app/profil/profil.component.ts ***!
  \********************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(loginService, api) {
        this.loginService = loginService;
        this.api = api;
        this.state = "hidden";
    }
    ProfilComponent.prototype.ngOnInit = function () {
        this.initConf();
        this.initList();
    };
    ProfilComponent.prototype.onConfigChange = function () {
        var _this = this;
        this.api.getListeConfDevices(this.configSelect.id).then(function (res) {
            _this.cg = res["cg"]["nom"];
            _this.cgListeSelect = _this.search(_this.cgListe, res["cg"]["id"]);
            _this.proc = res["proc"]["nom"];
            _this.procListeSelect = _this.search(_this.procListe, res["proc"]["id"]);
            _this.mem = res["mem"]["nom"];
            _this.memListeSelect = _this.search(_this.memListe, res["mem"]["id"]);
            _this.isResolve = Promise.resolve(true);
        });
    };
    ProfilComponent.prototype.initList = function () {
        var _this = this;
        this.api.getListeDevices("cg").then(function (res) {
            _this.cgListe = res;
        });
        this.api.getListeDevices("proc").then(function (res) {
            _this.procListe = res;
        });
        this.api.getListeDevices("mem").then(function (res) {
            _this.memListe = res;
        });
    };
    ProfilComponent.prototype.initConf = function () {
        var _this = this;
        this.api.getListeConf().then(function (res) {
            _this.config = res;
            _this.configSelect = res[0];
            _this.onConfigChange();
        });
    };
    ProfilComponent.prototype.onClick = function (type) {
        var _this = this;
        if (type != "delete") {
            if (type === "add")
                this.resetSelect();
            else
                this.nomConf = this.configSelect.nom;
            this.state = "visible";
            this.type = type;
        }
        else {
            this.api.setConf("delete", this.configSelect.id, null, null, null, null).then(function (res) {
                _this.initConf();
            });
        }
    };
    ProfilComponent.prototype.onSubmitForm = function () {
        var _this = this;
        if (this.type === "add") {
            this.api.setConf("add", null, this.nomConf, this.cgListeSelect.id, this.procListeSelect.id, this.memListeSelect.id).then(function (res) {
                _this.initConf();
            });
        }
        else if (this.type === "modify") {
            this.api.setConf("modify", this.configSelect.id, this.nomConf, this.cgListeSelect.id, this.procListeSelect.id, this.memListeSelect.id).then(function (res) {
                _this.onConfigChange();
            });
        }
        this.state = "hidden";
    };
    ProfilComponent.prototype.getState = function () {
        return this.state;
    };
    ProfilComponent.prototype.search = function (list, id) {
        for (var i in list) {
            if (list[i].id === id)
                return list[i];
        }
    };
    ProfilComponent.prototype.resetSelect = function () {
        this.cgListeSelect = null;
        this.procListeSelect = null;
        this.memListeSelect = null;
        this.nomConf = "";
    };
    ProfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profil',
            template: __webpack_require__(/*! ./profil.component.html */ "./src/app/profil/profil.component.html"),
            styles: [__webpack_require__(/*! ./profil.component.css */ "./src/app/profil/profil.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["loginService"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"]])
    ], ProfilComponent);
    return ProfilComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Api = /** @class */ (function () {
    function Api(http, loginService) {
        this.http = http;
        this.loginService = loginService;
    }
    Api.prototype.getListeConf = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:8080/profil/list', {
                id: _this.loginService.getId()
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Error occured");
                reject();
            });
        });
    };
    Api.prototype.getListeConfDevices = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:8080/profil/list/devices', {
                idc: id
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Error occured");
                reject();
            });
        });
    };
    Api.prototype.getListeDevices = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:8080/profil/list/' + type, {})
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Error occured");
                reject();
            });
        });
    };
    Api.prototype.setConf = function (type, idc, name, idcg, idproc, idmem) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:8080/profil/' + type, {
                iduser: _this.loginService.getId(),
                idc: idc,
                nom: name,
                idcg: idcg,
                idproc: idproc,
                idmem: idmem
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Error occured");
                reject();
            });
        });
    };
    Api.prototype.getGameList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:8080/gameCheck/getGames', {})
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Error occured");
                reject();
            });
        });
    };
    Api.prototype.getGameConf = function (marq, idj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:8080/gameCheck/games/conf', {
                marq: marq,
                idj: idj
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Error occured");
                reject();
            });
        });
    };
    Api = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_2__["loginService"]])
    ], Api);
    return Api;
}());



/***/ }),

/***/ "./src/app/services/checkLogin.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/checkLogin.service.ts ***!
  \************************************************/
/*! exports provided: checkLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLogin", function() { return checkLogin; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var checkLogin = /** @class */ (function () {
    function checkLogin(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ;
    checkLogin.prototype.canActivate = function (route, state) {
        if (this.loginService.getState()) {
            return true;
        }
        else {
            this.router.navigate(['/connexion']);
        }
    };
    checkLogin = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["loginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], checkLogin);
    return checkLogin;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: loginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginService", function() { return loginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var loginService = /** @class */ (function () {
    function loginService(http) {
        this.http = http;
        this.isConnected = false;
    }
    loginService.prototype.logIn = function (mail, passwd) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:8080/login/check', {
                email: mail,
                mdp: passwd
            })
                .subscribe(function (res) {
                if (res["res"] === "ok") {
                    _this.isConnected = true;
                    _this.id = res["id"];
                }
                resolve();
            }, function (err) {
                console.log("Error occured");
                reject();
            });
        });
    };
    loginService.prototype.logOut = function () {
        this.isConnected = false;
        return this.getState();
    };
    loginService.prototype.getState = function () {
        return this.isConnected;
    };
    loginService.prototype.getId = function () {
        return this.id;
    };
    loginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], loginService);
    return loginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sauvage\Documents\Cnam\projet_web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map