webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n  font-size: 1.6rem;\n  margin-bottom: 0.3rem;\n}\n\n\nh1 {\n  padding-bottom: 9px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #eee;\n}\n\n.container-fluid {\n  /* height: 100vh; */\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3em .2em;\n  font-size: .8rem;\n  /* line-height: 1.1rem; */\n  font-weight: 600;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border-right: 5px solid #2f3137;\n}\n\n.sidebar .nav {\n  margin-bottom: 20px;\n}\n\n.sidebar .nav-item {\n  width: 100%;\n}\n\n.sidebar .nav-item+.nav-item {\n  margin-left: 0;\n}\n\n.sidebar .nav-link {\n  border-radius: 0;\n}\n\n.placeholders {\n  padding-bottom: 3rem;\n}\n\n.placeholder img {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.copy-item {\n  background: #ccc;\n}\n\n\n\n.columns {\n  position: fixed;\n  top: 10px;\n  left: calc(8% - 7px);\n  padding: 0 0 0 20px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-1 sidebar\">\n      <app-sidebar></app-sidebar>\n    </nav>\n    <main role=\"main\" class=\"col-md-11 columns\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadCode().then(function (data) {
            _this.dataCode = data.groups;
        });
    };
    AppComponent.prototype.loadCode = function () {
        console.log("loadCode");
        return this.http.get('assets/data.json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shortcuts_shortcuts_component__ = __webpack_require__("../../../../../src/app/pages/shortcuts/shortcuts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_colors_colors_component__ = __webpack_require__("../../../../../src/app/pages/colors/colors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fontawesome_fontawesome_component__ = __webpack_require__("../../../../../src/app/pages/fontawesome/fontawesome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipe_search_pipe__ = __webpack_require__("../../../../../src/app/pipe/search.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_shortcuts_shortcuts_component__["a" /* ShortcutsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_colors_colors_component__["a" /* ColorsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_fontawesome_fontawesome_component__["a" /* FontawesomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipe_search_pipe__["a" /* SearchPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_clipboard__["a" /* ClipboardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shortcuts_shortcuts_component__ = __webpack_require__("../../../../../src/app/pages/shortcuts/shortcuts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_colors_colors_component__ = __webpack_require__("../../../../../src/app/pages/colors/colors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_fontawesome_fontawesome_component__ = __webpack_require__("../../../../../src/app/pages/fontawesome/fontawesome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Pages



var routes = [
    { path: 'shortcuts', component: __WEBPACK_IMPORTED_MODULE_4__pages_shortcuts_shortcuts_component__["a" /* ShortcutsComponent */] },
    { path: 'colors', component: __WEBPACK_IMPORTED_MODULE_5__pages_colors_colors_component__["a" /* ColorsComponent */] },
    { path: 'fontawesome', component: __WEBPACK_IMPORTED_MODULE_6__pages_fontawesome_fontawesome_component__["a" /* FontawesomeComponent */] },
    { path: '', redirectTo: 'shortcuts', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/colors/colors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".palette {\n\tmargin: 0;\n    padding: 10px 5px;\n\tfont-size: 12px;\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n    list-style: none;\n    height: 97vh;\n    overflow-y: auto;\n    background: #fff;\n}\n.palette li {\n\tcursor: pointer;\n\tmargin: 5px;\n\tposition: relative;\n\twidth: 90px;\n\theight: 40px;\n    padding: 14px 5px 0;\n\toverflow: hidden;\n}\n\n.palette li span {\n\tposition: absolute;\n\tbottom: 0;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tdisplay: block;\n\twidth: 90%;\n\ttext-overflow: ellipsis;\n    text-align: center;\n    mix-blend-mode: difference;\n    opacity: .5;\n}\n\n\n.palette li.copy:after {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    content: '--Copied--';\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    mix-blend-mode: difference;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/colors/colors.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"palette\">\n    <li \n      *ngFor=\"let item of dataColors\"\n      [style.background]=\"item\"\n      ngxClipboard\n      [class.copy]=\"isCopied === item\"\n      (cbOnSuccess)=\"isCopied = item\"\n      [cbContent]=\"item\"\n      >\n      <span>\n          {{item}}\n      </span>\n    </li>\n  </ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/colors/colors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorsComponent = (function () {
    function ColorsComponent(http) {
        this.http = http;
    }
    ColorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadColors().then(function (data) {
            _this.dataColors = data.colors.filter(function (el, i, a) { return i === a.indexOf(el); });
        });
    };
    ColorsComponent.prototype.loadColors = function () {
        return this.http.get('assets/color1.json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return ColorsComponent;
}());
ColorsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-colors',
        template: __webpack_require__("../../../../../src/app/pages/colors/colors.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/colors/colors.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ColorsComponent);

var _a;
//# sourceMappingURL=colors.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/fontawesome/fontawesome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icons a{\n    width: 41px;\n    height: 37px;\n    text-align: center;\n    padding: 10px 0;\n    font-size: 1.4em;\n    overflow: hidden;\n    display: inline-block;\n    color: #8796a2;\n}\n\n.icons a:hover{\n    background: #fff;\n    color: #000;\n    padding: 5px 0;\n    font-size: 1.6em;\n    \n}\n\ninput[type='text'] {\n    border-radius: 1em;\n    border: none;\n    width: 90%;\n    margin: 10px auto;\n    display: block;\n    font-size: 2em;\n    text-align: center;\n}\n.checkbox label {\n    display: inline-block;\n    margin-bottom: .5rem;\n    padding: 20px;\n    width: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    font-size: 1.3em;   \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/fontawesome/fontawesome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n      <input type=\"text\" #searchInput (click)=\"searchInput.select()\" [(ngModel)]=\"searchText\">\n  </div>\n  <div class=\"col-3\">\n      <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"copyTag\"> Copy with tag\n          </label>\n        </div>\n  </div>\n</div>\n\n<ul class=\"icons\">\n  <a\n    *ngFor=\"let item of dataIcons | search : searchText\"\n    ngxClipboard\n    class=\"fa {{'fa-' + item}}\"\n    [class.copy]=\"isCopied === item\"\n    (cbOnSuccess)=\"isCopied = item\"\n    (click)=\"$event.stopPropagation()\"\n    [cbContent]=\"copy(item)\"\n    title=\"{{item}}\"\n    >\n  </a>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/pages/fontawesome/fontawesome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontawesomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FontawesomeComponent = (function () {
    function FontawesomeComponent(http) {
        this.http = http;
        this.copyTag = false;
    }
    FontawesomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadIcons().then(function (data) {
            _this.dataIcons = data.icons;
        });
    };
    FontawesomeComponent.prototype.copy = function (value) {
        return this.copyTag ? '<i class="fa fa-' + value + '" aria-hidden="true"></i>' : 'fa-' + value;
    };
    FontawesomeComponent.prototype.loadIcons = function () {
        return this.http.get('assets/icons47.json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return FontawesomeComponent;
}());
FontawesomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fontawesome',
        template: __webpack_require__("../../../../../src/app/pages/fontawesome/fontawesome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/fontawesome/fontawesome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FontawesomeComponent);

var _a;
//# sourceMappingURL=fontawesome.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/shortcuts/shortcuts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.columns {\n    position: fixed;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n  \n\n.code-table {\n    padding: 0px 10px;\n    display: block;\n    background: rgba(0, 0, 0, .2);\n    margin: 5px;\n    color: #fff;\n    /* color: rgba(255, 255, 255, .6); */\n  }\n  \n  .table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n  \n  .table th, .table td {\n    border-top: none;\n  }\n  \n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 1px solid ;\n  }\n  \n  .table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  \n  .nav-pills .nav-link.active, .nav-pills .nav-item.show .nav-link {\n    background-color: #2f3137;\n  }\n  \n  .nav-link {\n    color: rgb(151, 151, 151);\n  }\n  \n  .code-table  .item .name{\n    opacity: .8;\n    padding: .3em .8em;\n    /* letter-spacing: -.06em; */\n  \n    font-size: 10px;\n  }\n  \n  .code-table  .item .code{\n    opacity: 1;\n    padding: .3em .8em;\n  \n    font-size: 10px;\n  }\n  \n  .table-hover tbody tr:hover .code{\n    opacity: 1;\n  }\n\n  .item-copied {\n    background: #fff;\n    color: #666;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/shortcuts/shortcuts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n\n  <div class=\"code-table\" *ngFor=\"let group of dataCode\" [style.color]=\"group.color\">\n    <h2>\n      <i class=\"fa {{group.icon}}\" aria-hidden=\"true\"></i> {{group.title}}</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-hover table-sm\">\n        <thead>\n          <tr>\n            <th></th>\n            <th [style.color]=\"group.color\">Code</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"item\" *ngFor=\"let item of group.items\">\n            <td class=\"name\">{{item.name}}</td>\n            <td class=\"code\"\n                ngxClipboard\n                [class.item-copied]=\"isCopied === item.code\"\n                (cbOnSuccess)=\"isCopied = item.code\"\n                [cbContent]=\"copy(item.code)\">\n              {{item.code}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/shortcuts/shortcuts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShortcutsComponent = (function () {
    function ShortcutsComponent(http) {
        this.http = http;
    }
    ShortcutsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadCode().then(function (data) {
            _this.dataCode = data.groups;
        });
    };
    ShortcutsComponent.prototype.copy = function (value) {
        var re = /\'\'/gi;
        return value.replace(re, '"');
    };
    ShortcutsComponent.prototype.loadCode = function () {
        return this.http.get('assets/data.json')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return ShortcutsComponent;
}());
ShortcutsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shortcuts',
        template: __webpack_require__("../../../../../src/app/pages/shortcuts/shortcuts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/shortcuts/shortcuts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ShortcutsComponent);

var _a;
//# sourceMappingURL=shortcuts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    // export class SearchPipe implements PipeTransform {
    //   transform(value: any, args?: any): any {
    //     return null;
    //   }
    // }
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'search'
    })
    // export class SearchPipe implements PipeTransform {
    //   transform(value: any, args?: any): any {
    //     return null;
    //   }
    // }
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills flex-column\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\" [routerLink]=\"'/shortcuts'\" routerLinkActive=\"active\">\n      <i class=\"fa fa-code\" aria-hidden=\"true\"></i> shortcuts\n      <span class=\"sr-only\">(current)</span>\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\" [routerLink]=\"'/hybris'\" routerLinkActive=\"active\">\n      <i class=\"fa fa-yoast\" aria-hidden=\"true\"></i> Hybris</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\" [routerLink]=\"'/colors'\" routerLinkActive=\"active\">\n      <i class=\"fa fa-database\" aria-hidden=\"true\"></i> Colors</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\" [routerLink]=\"'/fontawesome'\" routerLinkActive=\"active\">\n      <i class=\"fa fa-flag\" aria-hidden=\"true\"></i> Icons</a>\n  </li>\n\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\">\n      <i class=\"fa fa-codepen\" aria-hidden=\"true\"></i> Codepen</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\">\n      <i class=\"fa fa-bitbucket\" aria-hidden=\"true\"></i> BitBucket</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\">\n      <i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"http://localhost/adminer/\">\n      <i class=\"fa fa-database\" aria-hidden=\"true\"></i> Adminer</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map