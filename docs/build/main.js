webpackJsonp([3],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dictionary_dictionary__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition_definition__ = __webpack_require__(53);
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
 * Generated class for the DictionaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DictionaryPage = /** @class */ (function () {
    function DictionaryPage(dictionaryProvider, navCtrl, navParams) {
        this.dictionaryProvider = dictionaryProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        this.items = [];
        this.content = [];
        this.getContent();
    }
    DictionaryPage.prototype.getContent = function () {
        var _this = this;
        if (this.content.length === 0)
            this.dictionaryProvider.dictionaryContent().subscribe(function (data) { return _this.content = data.slangs; });
    };
    // get the searched items
    DictionaryPage.prototype.getItems = function (ev) {
        this.items = this.content;
        var search = ev.target.value;
        if (search && search.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.slang.toLowerCase().indexOf(search.toLowerCase()) > -1);
            });
        }
    };
    // go to definition page
    DictionaryPage.prototype.gotoDefinition = function (defination) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__definition_definition__["a" /* DefinitionPage */], {
            defination: defination
        });
    };
    DictionaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dictionary',template:/*ion-inline-start:"C:\Users\aldri\Desktop\ionic\heymateprod\src\pages\dictionary\dictionary.html"*/'<!--\n\n  Generated template for the DictionaryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Dictionary</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of items">\n\n      <h2 ion-text color="primary" (click)="gotoDefinition(item)" >{{ item.slang }}</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aldri\Desktop\ionic\heymateprod\src\pages\dictionary\dictionary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_dictionary_dictionary__["a" /* DictionaryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DictionaryPage);
    return DictionaryPage;
}());

//# sourceMappingURL=dictionary.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/definition/definition.module": [
		296,
		2
	],
	"../pages/dictionary/dictionary.module": [
		297,
		1
	],
	"../pages/login/login.module": [
		298,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(164);
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
  Generated class for the BotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BotProvider = /** @class */ (function () {
    function BotProvider(http, alertCtrl, sqlite, platform, nativeStorage) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.sqlite = sqlite;
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.messages = [];
        this.key = "messages";
    }
    BotProvider.prototype.createDb = function () {
        var _this = this;
        // check if device ready
        this.platform.ready().then(function () {
            // created database
            _this.sqlite.create({
                name: "slangs.db",
                location: "default"
            }).then(function (db) {
                _this.database = db;
                // create database
                _this.database.executeSql("CREATE TABLE tblSlangs(slang VARCHAR(255), meaning VARCHAR(255), sentence VARCHAR(255), usages INT(11))")
                    .then(function () { return console.log('Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
            });
        });
    };
    BotProvider.prototype.getMessages = function () {
        this.nativeStorage.getItem(this.key)
            .then(function (data) { return function () {
            if (data != null && data != undefined) {
                this.messages = JSON.parse(data);
            }
            console.log(data);
        }; }, function (error) { return console.error(error); });
        return this.messages;
    };
    // check if user used an australian slang 
    BotProvider.prototype.checkForSlangs = function (message, slangs) {
        //convert message to lower case
        var msg = message.toLowerCase();
        // check all slangs
        slangs.forEach(function (slang) {
            // check if slang is used
            if (msg.indexOf(slang.slang.toLowerCase()) != -1) {
                this.numberofUsage(slang);
            }
        }.bind(this)); // bind this so methods will work
    };
    BotProvider.prototype.numberofUsage = function (slangs) {
        var _this = this;
        var search = [slangs.slang];
        var insert = [slangs.slang, slangs.meaning, slangs.sentence];
        return this.database.executeSql("SELECT * FROM tblSlangs WHERE slang = ?", search).then(function (data) {
            var update = [2];
            console.log(data);
            if (data.rows.length <= 0) {
                _this.database.executeSql("INSERT INTO tblSlangs(slang, meaning, sentence) VALUES(?, ?, ?)", insert).then(function (res) {
                    _this.showAlert("You have use " + insert[0] + " for the first time!", insert[0] + " means " + insert[1]);
                });
            }
            else {
                _this.database.executeSql("UPDATE tblSlangs SET usages = ?", update).then(function (res) {
                    _this.showAlert("You used " + insert[0] + " " + update + " already!", insert[0] + " means " + insert[1]);
                });
            }
        })
            .then(function () { return console.log('Executed SQL'); })
            .catch(function (e) { return console.log(e); });
    };
    // 
    BotProvider.prototype.sendMessages = function (message, type) {
        this.nativeStorage.setItem(this.key, {
            type: type,
            message: message
        }).then(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.messages.push({
            type: type,
            message: message
        });
    };
    // show regular alert
    BotProvider.prototype.showAlert = function (title, subtitle) {
        // create alert
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        // execute alert
        alert.present();
    };
    BotProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], BotProvider);
    return BotProvider;
}());

//# sourceMappingURL=bot.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(83);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // manual login
    LoginPage.prototype.gotoHome = function (username, password) {
        if (password == "" || username == "") {
            this.error("username and password is required");
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    // login via facebook
    LoginPage.prototype.loginFb = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // call toast
    // message str
    LoginPage.prototype.error = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1000,
            position: "middle"
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\aldri\Desktop\ionic\heymateprod\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Hey Mate!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <h1 ion-text>Hey Mate!</h1>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input #un type="text" [(ngModel)]="username"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input #pw type="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <button ion-button full color="primary" (click)="gotoHome(un.value, pw.value)">Login</button>\n\n        <br><br><br>\n\n        <hr>\n\n        <br>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n          <button ion-button outline full icon-end (click)="loginFb()">\n\n            Login with facebook \n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n          </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aldri\Desktop\ionic\heymateprod\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dictionary_dictionary__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_definition_definition__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_bot_bot__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_dictionary_dictionary__ = __webpack_require__(81);
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
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dictionary_dictionary__["a" /* DictionaryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_definition_definition__["a" /* DefinitionPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/definition/definition.module#DefinitionPageModule', name: 'DefinitionPage', segment: 'definition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dictionary/dictionary.module#DictionaryPageModule', name: 'DictionaryPage', segment: 'dictionary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dictionary_dictionary__["a" /* DictionaryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_definition_definition__["a" /* DefinitionPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_bot_bot__["a" /* BotProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_dictionary_dictionary__["a" /* DictionaryProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(83);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\aldri\Desktop\ionic\heymateprod\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\aldri\Desktop\ionic\heymateprod\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the DefinitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DefinitionPage = /** @class */ (function () {
    function DefinitionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.definition = {};
        this.definition = this.navParams.get("defination");
    }
    DefinitionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DefinitionPage');
    };
    DefinitionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-definition',template:/*ion-inline-start:"C:\Users\aldri\Desktop\ionic\heymateprod\src\pages\definition\definition.html"*/'<!--\n\n  Generated template for the DefinitionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Definition</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <br>\n\n  <h1 ion-text color="primary">{{ definition.slang }}</h1>\n\n  <br>\n\n  <hr>\n\n  <h5 ion-text>Meaning</h5>\n\n  <p>\n\n    {{ definition.meaning }}\n\n  </p>\n\n  <hr>\n\n  <h5 ion-text>Sample Sentence</h5>\n\n  <p>\n\n    {{ definition.sentence }}\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aldri\Desktop\ionic\heymateprod\src\pages\definition\definition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DefinitionPage);
    return DefinitionPage;
}());

//# sourceMappingURL=definition.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
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
  Generated class for the DictionaryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DictionaryProvider = /** @class */ (function () {
    function DictionaryProvider(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
        this.url = "https://raw.githubusercontent.com/aldrinmagno/HeyMate/master/src/assets/files/slangs.json";
        console.log('Hello DictionaryProvider Provider');
    }
    DictionaryProvider.prototype.dictionaryContent = function () {
        return this.http.get(this.url)
            .do(this.logResponse)
            .map(this.extractData)
            .catch(this.catchError);
    };
    DictionaryProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || "Service Error");
    };
    DictionaryProvider.prototype.logResponse = function (res) {
        console.log(res);
    };
    DictionaryProvider.prototype.extractData = function (res) {
        return res.json();
    };
    DictionaryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], DictionaryProvider);
    return DictionaryProvider;
}());

//# sourceMappingURL=dictionary.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bot_bot__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dictionary_dictionary__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dictionary_dictionary__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__definition_definition__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    // import libraries
    function HomePage(botProvider, dictionaryProvider, navCtrl, alertCtrl, http, toastCtrl, sanitized, eleRef) {
        this.botProvider = botProvider;
        this.dictionaryProvider = dictionaryProvider;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.sanitized = sanitized;
        this.eleRef = eleRef;
        this.todos = [];
        this.key = "items";
        this.messageSend = "";
        this.slangs = [];
        this.botProvider.createDb();
        // trigger onload functions
        this.todos = this.botProvider.getMessages();
        // get all slangs
        this.getContent();
        this.botProvider.sendMessages(this.sanitized.bypassSecurityTrustHtml("<u class=\"slang\" (click)=\"definition('G day', 'Good day')\" ion-text color=\"primary\">Gday <span class=\"help\">?</span></u> mate! Are you ready to practice with an <u data-word=\"Aussie\" data-meaning=\"Australian\" ion-text color=\"primary\">aussie <span class=\"help\">?</span></u>"), 'bot');
    }
    // fetch all slangs
    HomePage.prototype.getContent = function () {
        var _this = this;
        // check if slangs are already fetch
        if (this.slangs.length === 0)
            this.dictionaryProvider.dictionaryContent().subscribe(function (data) { return _this.slangs = data.slangs; });
    };
    // send message to network to get automated response
    // message  str
    HomePage.prototype.sendMessage = function (message) {
        // check input if message has a value
        if (message) {
            // empty inputbox
            this.messageSend = "";
            // display user message
            this.botProvider.sendMessages(message, 'user');
            // check if user is using slangs
            this.botProvider.checkForSlangs(message, this.slangs);
            // scroll down content
            this.content.scrollToBottom();
        }
        else {
            // call toast
            this.error("message is required");
        }
    };
    // call toast
    // message str
    HomePage.prototype.error = function (message) {
        // create toast
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1000,
        });
        // execute toast
        toast.present();
    };
    // display definition of Australian Slang
    // word str
    // meaning str
    HomePage.prototype.definition = function (word, meaning) {
        var _this = this;
        // title of alert
        var title = word;
        // body of alert
        var definition = meaning;
        // create alert
        var definitionAlert = this.alertCtrl.create({
            title: title,
            message: definition,
            buttons: [
                {
                    text: "Read More",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__definition_definition__["a" /* DefinitionPage */]);
                    }
                },
                {
                    text: "Got It!"
                },
            ]
        });
        // trigger alert
        definitionAlert.present();
    };
    HomePage.prototype.largerFontSize = function () {
        if (document.querySelector(".bot").className == "bot card card-md")
            document.querySelector(".bot").className = "bot card card-md message-card-m";
        else if (document.querySelector(".bot").className == "bot card card-md message-card-m")
            document.querySelector(".bot").className = "bot card card-md message-card-l";
        else if (document.querySelector(".bot").className == "bot card card-md message-card-l")
            document.querySelector(".bot").className = "bot card card-md message-card-xl";
        if (document.querySelector(".user")) {
            if (document.querySelector(".user").className == "user card card-md")
                document.querySelector(".user").className = "user card card-md message-card-m";
            else if (document.querySelector(".user").className == "user card card-md message-card-m")
                document.querySelector(".user").className = "user card card-md message-card-l";
            else if (document.querySelector(".user").className == "user card card-md message-card-l")
                document.querySelector(".user").className = "user card card-md message-card-xl";
        }
    };
    HomePage.prototype.smallerFontSize = function () {
        if (document.querySelector(".bot").className == "bot card card-md message-card-xl")
            document.querySelector(".bot").className = "bot card card-md message-card-l";
        else if (document.querySelector(".bot").className == "bot card card-md message-card-l")
            document.querySelector(".bot").className = "bot card card-md message-card-m";
        else if (document.querySelector(".bot").className == "bot card card-md message-card-m")
            document.querySelector(".bot").className = "bot card card-md";
        if (document.querySelector(".user")) {
            if (document.querySelector(".user").className == "user card card-md message-card-xl")
                document.querySelector(".user").className = "user card card-md message-card-l";
            else if (document.querySelector(".user").className == "user card card-md message-card-l")
                document.querySelector(".user").className = "user card card-md message-card-m";
            else if (document.querySelector(".user").className == "user card card-md message-card-m")
                document.querySelector(".user").className = "user card card-md";
        }
    };
    HomePage.prototype.nightMode = function () {
        if (document.querySelector("ion-header").className == "night-mode") {
            document.querySelector("ion-header").className = "";
            document.querySelector("ion-content").className = "";
            document.querySelector("ion-footer").className = "";
        }
        else {
            document.querySelector("ion-header").className = "night-mode";
            document.querySelector("ion-content").className = "night-mode";
            document.querySelector("ion-footer").className = "night-mode";
        }
    };
    // change page to dictionary page
    HomePage.prototype.gotoDictionary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dictionary_dictionary__["a" /* DictionaryPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\aldri\Desktop\ionic\heymateprod\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Hey Mate!\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="gotoDictionary()">\n\n        <ion-icon name="search" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="config">\n\n      <ion-fab top right>\n\n        <button ion-fab mini color="light"><ion-icon name="settings"></ion-icon></button>\n\n        <ion-fab-list>\n\n          <button ion-fab (click)="largerFontSize()"><ion-icon name="add"></ion-icon></button>\n\n          <button ion-fab (click)="smallerFontSize()">---</button>\n\n          <button ion-fab (click)="nightMode()"><ion-icon name="moon"></ion-icon></button>\n\n          <button ion-fab (click)="nightMode()"><ion-icon name="trophy"></ion-icon></button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n  </div>\n\n  <div *ngFor="let todo of todos" id="messages">\n\n    <ion-card class="message-card" *ngIf="todo.type == \'user\'" class="user">\n\n      <ion-card-content>\n\n        {{ todo.message }}\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="message-card" *ngIf="todo.type == \'bot\'" class="bot" >\n\n      <ion-card-content>\n\n        <div [innerHTML]="todo.message">\n\n        {{ todo.message }}\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n  <ion-footer bottom>\n\n    <ion-toolbar>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-input #message type="text" [(ngModel)]="messageSend" placeholder="Type your message here." autocomplete="true" spellcheck="true"></ion-input>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <button ion-fab color="secondary" (click)="sendMessage(message.value)" >\n\n              <ion-icon name="send"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aldri\Desktop\ionic\heymateprod\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_bot_bot__["a" /* BotProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_dictionary_dictionary__["a" /* DictionaryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map