(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content-component.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>content-component works!</p> -->\n\n<!--/#main-slider-->\n<div class=\"color-border\"> </div>\n<div>\n<!-- <app-home></app-home>\n<app-employees></app-employees>\n<app-positions></app-positions> -->\n<router-outlet></router-outlet>\n</div>\n<div class=\"color-border\"> </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>employee works!</p> -->\n<!-- since the values are undefined at the moment of rendering, they throw errors, to prevent this I added the first line -->\n<ng-container *ngIf=\"employee\">\n\n<div class=\"center\">\n  <h2>Employee: {{ employee?.FirstName }} {{ employee.LastName }}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<!-- may need to add something here -->\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': FirstName.errors}\">\n          <label class=\"control-label\" for=\"FirstName\">First Name:</label>\n          <input #FirstName=\"ngModel\" class=\"form-control\" id=\"FirstName\" type=\"text\"  name=\"FirstName\" [(ngModel)]=\"employee.FirstName\" required/>\n          <span class=\"help-block\" *ngIf=\"FirstName.errors\" >First Name is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': LastName.errors}\">\n          <label class=\"control-label\" for=\"LastName\">Last Name:</label>\n          <input #LastName=\"ngModel\" class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" [(ngModel)]=\"employee.LastName\" required/>\n          <span class=\"help-block\" *ngIf=\"LastName.errors\" >Last Name is Required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': Position.errors}\">\n          <label class=\"control-label\" for=\"Position\">Position:</label>\n          <select #Position=\"ngModel\" class=\"form-control\" id=\"Position\"  name=\"Position\" [(ngModel)]=\"employee.Position\">\n          <!-- come back to this -->\n            <option *ngFor=\"let position of positions\" [value]=\"position._id\">{{ position.PositionName }}</option>\n          </select>\n          <span class=\"help-block\" *ngIf=\"Position.errors\" >Position is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': SalaryBonus.errors}\">\n          <label class=\"control-label\" for=\"SalaryBonus\">Salary Bonus</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">$</span>\n            <input #SalaryBonus=\"ngModel\" class=\"form-control\" id=\"SalaryBonus\" type=\"Number\" name=\"SalaryBonus\" [(ngModel)]=\"employee.SalaryBonus\" required/>\n            <span class=\"help-block\" *ngIf=\"SalaryBonus.errors\" >A Numeric Value for Salary Bonus is Required</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressStreet.errors}\">\n          <label class=\"control-label\" for=\"AddressStreet\">Address (Street):</label>\n          <input #AddressStreet=\"ngModel\" class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" [(ngModel)]=\"employee.AddressStreet\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressStreet.errors\" >Address Street is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressCity.errors}\">\n          <label class=\"control-label\" for=\"AddressCity\">Address (City):</label>\n          <input #AddressCity=\"ngModel\" class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\" [(ngModel)]=\"employee.AddressCity\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressCity.errors\" >Address City is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressState.errors}\">\n          <label class=\"control-label\" for=\"AddressState\">Address (State):</label>\n          <input #AddressState=\"ngModel\" class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\" [(ngModel)]=\"employee.AddressState\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressState.errors\" >Address State is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressZip.errors}\">\n          <label class=\"control-label\" for=\"AddressZip\">Address (Zip Code):</label>\n          <input #AddressZip=\"ngModel\" class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\" [(ngModel)]=\"employee.AddressZip\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressZip.errors\" >Address Zip is Required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PhoneNum.errors}\">\n          <label class=\"control-label\" for=\"PhoneNum\">Phone Number:</label>\n          <input #PhoneNum=\"ngModel\" class=\"form-control\" id=\"PhoneNum\" type=\"text\" name=\"PhoneNum\" pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[]*){4}\" [(ngModel)]=\"employee.PhoneNum\" required/>\n          <span class=\"help-block\" *ngIf=\"PhoneNum.errors\" >A Numeric American Phone Number is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': Extension.errors}\">\n          <label class=\"control-label\" for=\"Extension\">Extension:</label>\n          <input #Extension=\"ngModel\" class=\"form-control\" id=\"Extension\" type=\"Number\" name=\"Extension\" [(ngModel)]=\"employee.Extension\" required/>\n          <span class=\"help-block\" *ngIf=\"Extension.errors\" >A Numeric Extension is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': HireDate.errors}\">\n          <label class=\"control-label\" for=\"HireDate\">Hire Date:</label>\n          <input #HireDate=\"ngModel\" class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" value=\"HireDate\" [ngModel]=\"employee.HireDate|date:'longDate'\" readonly />\n          <span class=\"help-block\" *ngIf=\"HireDate.errors\" >Hire Date is Required</span>\n        </div>\n      </div>\n    </div>\n    <hr />\n    <a [routerLink]=\"['/employees']\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n    <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" />\n    <br />\n    <br />\n  </form>\n</div>\n</div>\n<br />\n<div class=\"alert alert-success\" *ngIf=\"successMessage==true\">\n  <strong>Success!</strong> {{ employee.FirstName }} {{ employee.LastName }}'s information was successfully saved.\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"failMessage==true\">\n  <strong>Error!</strong> {{ employee.FirstName }} {{ employee.LastName }}'s information could not be saved.\n</div>\n</div>\n<br /><br />\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees-component/employees-component.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees-component/employees-component.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"center\">\n<h2>Employees</h2>\n<p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<div></div>\n<input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" placeholder=\"Search\n Employees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUP($event)\" /><br />\n<div class=\"table-responsive\">\n<table class=\"table table-condensed table-hover\">\n<thead>\n<td>Full Name</td>\n<td>Address</td>\n<td>Phone Number</td>\n<td>Hire Date</td>\n</thead>\n<tbody >\n<!-- may need to fix the below on click event -->\n<tr *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\"> \n<td>{{employee.FirstName}} {{employee.LastName}}</td>\n<td>{{employee.AddressStreet}}. {{employee.AddressState}}, {{employee.AddressCity}}. {{employee.AddressZip}}</td>\n<td>{{employee.PhoneNum}} ext: {{employee.Extension}} </td>\n<td>{{employee.HireDate | date:\"longDate\"}} </td>\n</tr>\n</tbody>\n</table>\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer-component.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer-component.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>footer-component works!</p> -->\n\n<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright &copy; 2019 Ivy Leano (WEB422). Design by <a href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a></div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--/#footer--> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-component/home-component.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-component/home-component.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\nhome-component works!\n</div>\n</div>\n</div> -->\n<link href=\"https://fonts.googleapis.com/css?family=Anton|Saira+Stencil+One&display=swap\" rel=\"stylesheet\">\n<!-- <link href=\"https://fonts.googleapis.com/css?family=Saira+Stencil+One&display=swap\" rel=\"stylesheet\"> -->\n<section id=\"main-slider\" class=\"no-margin\">\n  <div class=\"carousel slide\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"item active\" style=\"background-image: url(assets/images/slider/bg1.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-dribbble\"></i> API Demo</span></h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <!-- <a class=\"btn-slide\" href=\"about-us.html\">Read More</a>  -->\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n      \n      <div class=\"item\" style=\"background-image: url(assets/images/slider/bg2.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Typi non habent claritatem insitam</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <!-- <a class=\"btn-slide\" href=\"about-us.html\">Read More</a>  -->\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n      \n      <div class=\"item\" style=\"background-image: url(assets/images/slider/bg3.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Mirum est notare quam littera gothica</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <!-- <a class=\"btn-slide\" href=\"about-us.html\">Read More</a>  -->\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item--> \n    </div>\n    <!--/.carousel-inner--> \n  </div>\n  <!--/.carousel--> \n  <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a> </section>\n<!--/#main-slider-->\n<div class=\"color-border\"> </div>\n<section id=\"feature\" >\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2>Featured Services</h2>\n      <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n        Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"features\">\n        <div class=\"col-sm-6\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-desktop\"></i>\n            <h2>Employees</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n        \n        <div class=\"col-sm-6\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-cogs\"></i>\n            <h2>Positions</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n<!--         \n        <div class=\"col-md-4 col-sm-6\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-rocket\"></i>\n            <h2>Brand &amp; Identity</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div> -->\n        <!--/.col-md-4--> \n      </div>\n      <!--/.services--> \n    </div>\n    <!--/.row--> \n  </div>\n  <!--/.container--> \n</section>\n<!--/#feature-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-component.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>nav-component works!</p> -->\n<!-- <link href=\"https://fonts.googleapis.com/css?family=Carter+One&display=swap\" rel=\"stylesheet\"> -->\n<link href=\"https://fonts.googleapis.com/css?family=Anton|Saira+Stencil+One&display=swap\" rel=\"stylesheet\">\n<header id=\"header\">\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n        <a class=\"navbar-brand\" routerLink=\"/home\"><i class=\"fa fa-dribbble\"></i> Ivy Leano (API Demo)</a></div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n         <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/employees\">Employees</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n        </ul>\n      </div>\n    </div>\n    <!--/.container--> \n  </nav>\n  <!--/nav--> \n  \n</header>\n<!--/header-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found-component/page-not-found-component.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found-component/page-not-found-component.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>page-not-found-component works!</p> -->\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"colmd-12\">\nNot Found\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/position/position.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/position/position.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- since the values are undefined at the moment of rendering, they throw errors, to prevent this I added the first line -->\n<ng-container *ngIf=\"position\">\n<!-- <p>position works!</p> -->\n<div class=\"center\">\n  <h2>Position: {{ position.PositionName }}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionName.errors}\">\n              <label class=\"control-label\" for=\"PositionName\">Position Name:</label>\n              <!-- #PositionName=\"ngModel\" -->\n              <input #PositionName=\"ngModel\" class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" [(ngModel)]=\"position.PositionName\" required/>\n              <span class=\"help-block\" *ngIf=\"PositionName.errors\" >Position Name is Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionDescription.errors}\">\n              <label class=\"control-label\" for=\"PositionDescription\">Description:</label>\n              <!-- #PositionDescription=\"ngModel\" -->\n              <textarea #PositionDescription=\"ngModel\" class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\" [(ngModel)]=\"position.PositionDescription\" required></textarea>\n              <span class=\"help-block\" *ngIf=\"PositionDescription.errors\" >Position Description is Required</span>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a [routerLink]=\"['/positions']\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n        <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n<br />\n<div class=\"alert alert-success\" *ngIf=\"successMessage==true\">\n  <strong>Success!</strong> Position: {{ position.Name }} was successfully saved.\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"failMessage==true\">\n  <strong>Error!</strong> Position: {{ position.Name }} could not be saved.\n</div>\n</div>\n<br /><br />\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/positions-component/positions-component.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/positions-component/positions-component.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n<h2>Positions</h2>\n<p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n\n<div class=\"table-responsive\">\n<table class=\"table table-condensed table-hover\">\n<thead>\n<td>Position Title</td>\n<td>Position Description</td>\n<td>Salary</td>\n\n</thead>\n<tbody *ngFor=\"let position of positions\">\n<!-- may need to fix the below on click event -->\n<tr (click)=\"routePosition(position._id)\">\n<td>{{position.PositionName}}</td>\n<td>{{position.PositionDescription}}</td>\n<td>${{position.PositionBaseSalary | number: '.2' }}</td>\n</tr>\n</tbody>\n</table>\n</div>\n\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-component/home-component.component */ "./src/app/home-component/home-component.component.ts");
/* harmony import */ var _employees_component_employees_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees-component/employees-component.component */ "./src/app/employees-component/employees-component.component.ts");
/* harmony import */ var _positions_component_positions_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positions-component/positions-component.component */ "./src/app/positions-component/positions-component.component.ts");
/* harmony import */ var _app_position_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/position/position.component */ "./src/app/position/position.component.ts");
/* harmony import */ var _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found-component/page-not-found-component.component */ "./src/app/page-not-found-component/page-not-found-component.component.ts");
/* harmony import */ var _app_employee_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/employee/employee.component */ "./src/app/employee/employee.component.ts");









const routes = [
    { path: 'home', component: _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'employees', component: _employees_component_employees_component_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"] },
    { path: 'positions', component: _positions_component_positions_component_component__WEBPACK_IMPORTED_MODULE_5__["PositionsComponent"] },
    //added these
    { path: 'employee/:id', component: _app_employee_employee_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeComponent"] },
    { path: 'position/:id', component: _app_position_position_component__WEBPACK_IMPORTED_MODULE_6__["PositionComponent"] },
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    { path: '**', component: _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*********************************************************************************
* WEB422 – Assignment 06
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: ___Ivy Leano-Hill___________________ Student ID: __120331186____________ Date: _____2019-08-04___________
*
********************************************************************************/


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'my-dream-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-component.component */ "./src/app/nav-component.component.ts");
/* harmony import */ var _content_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-component.component */ "./src/app/content-component.component.ts");
/* harmony import */ var _footer_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-component.component */ "./src/app/footer-component.component.ts");
/* harmony import */ var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-component/home-component.component */ "./src/app/home-component/home-component.component.ts");
/* harmony import */ var _employees_component_employees_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees-component/employees-component.component */ "./src/app/employees-component/employees-component.component.ts");
/* harmony import */ var _positions_component_positions_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./positions-component/positions-component.component */ "./src/app/positions-component/positions-component.component.ts");
/* harmony import */ var _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found-component/page-not-found-component.component */ "./src/app/page-not-found-component/page-not-found-component.component.ts");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _nav_component_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
            _content_component_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
            _footer_component_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _employees_component_employees_component_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"],
            _positions_component_positions_component_component__WEBPACK_IMPORTED_MODULE_10__["PositionsComponent"],
            _page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeComponent"],
            _position_position_component__WEBPACK_IMPORTED_MODULE_16__["PositionComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]
        ],
        providers: [_data_position_service__WEBPACK_IMPORTED_MODULE_12__["PositionService"], _data_employee_service__WEBPACK_IMPORTED_MODULE_13__["EmployeeService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/content-component.component.css":
/*!*************************************************!*\
  !*** ./src/app/content-component.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/content-component.component.ts":
/*!************************************************!*\
  !*** ./src/app/content-component.component.ts ***!
  \************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: __webpack_require__(/*! raw-loader!./content-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/content-component.component.html"),
        styles: [__webpack_require__(/*! ./content-component.component.css */ "./src/app/content-component.component.css")]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/data/employee.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/employee.service.ts ***!
  \******************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.url = 'https://fierce-ridge-73424.herokuapp.com';
    }
    getEmployees() {
        return this.http.get(this.url + "/employees");
    }
    //saveEmployee method
    saveEmployee(employee) {
        return this.http.put(this.url + "/employee/" + employee._id, employee);
    }
    //getEmployee(id) method
    getEmployee(id) {
        console.log("**** " + this.url + "/employee-raw/id" + id + " *****");
        return this.http.get(this.url + "/employee-raw/" + id);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/data/position.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/position.service.ts ***!
  \******************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PositionService = class PositionService {
    constructor(http) {
        this.http = http;
        this.url = 'https://fierce-ridge-73424.herokuapp.com';
    }
    //makes a get request using the HTTPClient
    getPositions() {
        //  console.log("in the getPositions function")
        return this.http.get(this.url + "/positions");
    }
    //savePosition() methods
    savePosition(position) {
        console.log("savePosition()");
        //  console.log("****** " + this.url + "/position", position._id + " ****")
        return this.http.put(this.url + "/position/" + position._id, position);
    }
    //getPosition() method
    getPosition(id) {
        // console.log(this.url + "/position/" + id)
        return this.http.get(this.url + "/position/" + id);
    }
};
PositionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PositionService);



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH0iXX0= */"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");





let EmployeeComponent = class EmployeeComponent {
    constructor(employeeService, router, positionService) {
        this.employeeService = employeeService;
        this.router = router;
        this.positionService = positionService;
        this.successMessage = false;
        this.failMessage = false;
    }
    //May need to fix the methods below if the output is incorrect
    ngOnInit() {
        // console.log("entered employee.component ngOnInit()")
        this.paramSubscription = this.router.params.subscribe((params) => {
            // console.log(params.id);
            this.employeeSubscription = this.employeeService.getEmployee(params.id).subscribe((emp) => {
                this.employee = emp[0];
                this.getPositionsSubcription = this.positionService.getPositions().subscribe(data => {
                    this.positions = data;
                });
            });
        });
        // console.log(this.para);
    }
    onSubmit() {
        this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(() => {
            this.successMessage = true;
            setTimeout(() => { this.successMessage = false; }, 2500);
        }, () => {
            this.failMessage = true;
            setTimeout(() => { this.failMessage = false; }, 2500);
        });
    }
    ngOnDestroy() {
        if (this.paramSubscription != null) {
            this.paramSubscription.unsubscribe();
        }
        if (this.employeeSubscription != null) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSubcription != null) {
            this.getPositionsSubcription.unsubscribe();
        }
        if (this.saveEmployeeSubscription != null) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _data_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _data_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"] }
];
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee.component.html"),
        styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/employees-component/employees-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/employees-component/employees-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ \r\n    margin-top:40px;\r\n }\r\n.table-responsive{margin-bottom:60px;}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzLWNvbXBvbmVudC9lbXBsb3llZXMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Qsa0JBQWtCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzLWNvbXBvbmVudC9lbXBsb3llZXMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuIH1cclxuLnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTo2MHB4O31cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/employees-component/employees-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/employees-component/employees-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EmployeesComponent = class EmployeesComponent {
    // private url = 'https://fierce-ridge-73424.herokuapp.com/';
    constructor(emp, router) {
        this.emp = emp;
        this.router = router;
        this.loadingError = false;
    }
    ngOnInit() {
        this.getEmployeesSub = this.emp.getEmployees().subscribe(employees => {
            this.employees = employees;
            this.filteredEmployees = employees;
        }, function (e) {
            this.loadingError = true;
        });
    }
    ngOnDestroy() {
        if (this.getEmployeesSub != 'undefined') {
            this.getEmployeesSub.unsubscribe();
        }
    }
    routeEmployee(id) {
        console.log("in routEmployee");
        this.router.navigate(['/employee', id]);
    }
    onEmployeeSearchKeyUP(event) {
        let string = event.target.value.toLowerCase();
        // console.log(string);
        this.filteredEmployees = this.employees.filter((employee) => ((employee.FirstName.toLowerCase().indexOf(string) !== -1) ||
            (employee.LastName.toLowerCase().indexOf(string) !== -1) ||
            (employee.Position["PositionName"].toLowerCase().indexOf(string) !== -1)));
    }
};
EmployeesComponent.ctorParameters = () => [
    { type: _data_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: __webpack_require__(/*! raw-loader!./employees-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees-component/employees-component.component.html"),
        styles: [__webpack_require__(/*! ./employees-component.component.css */ "./src/app/employees-component/employees-component.component.css")]
    })
], EmployeesComponent);



/***/ }),

/***/ "./src/app/footer-component.component.css":
/*!************************************************!*\
  !*** ./src/app/footer-component.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer-component.component.ts":
/*!***********************************************!*\
  !*** ./src/app/footer-component.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer-component.component.html"),
        styles: [__webpack_require__(/*! ./footer-component.component.css */ "./src/app/footer-component.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home-component/home-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home-component/home-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\npadding: 70px 0;\r\nbackground-color: yellowGreen;\r\n\r\n}\r\n.no-margin {\r\nmargin: 0;\r\npadding: 0;\r\n}\r\n#color{}\r\nh2 {\r\n    text-shadow: -1px 0 black, 0 2px black, 2px 0 black, 0 -1px black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1jb21wb25lbnQvaG9tZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGVBQWU7QUFDZiw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBRUEsT0FBTztBQUVQO0lBQ0ksaUVBQWlFO0FBQ3JFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1jb21wb25lbnQvaG9tZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG5wYWRkaW5nOiA3MHB4IDA7XHJcbmJhY2tncm91bmQtY29sb3I6IHllbGxvd0dyZWVuO1xyXG5cclxufVxyXG4ubm8tbWFyZ2luIHtcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jY29sb3J7fVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAycHggYmxhY2ssIDJweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home-component/home-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home-component/home-component.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-component/home-component.component.html"),
        styles: [__webpack_require__(/*! ./home-component.component.css */ "./src/app/home-component/home-component.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-component.component.css":
/*!*********************************************!*\
  !*** ./src/app/nav-component.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, li {\r\n font-family: 'Anton', sans-serif;\r\n letter-spacing: 2px;  \r\n}\r\n\r\nli {\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXYtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLCBsaSB7XHJcbiBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcclxuIGxldHRlci1zcGFjaW5nOiAycHg7ICBcclxufVxyXG5cclxubGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav-component.component.ts":
/*!********************************************!*\
  !*** ./src/app/nav-component.component.ts ***!
  \********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-component.component.html"),
        styles: [__webpack_require__(/*! ./nav-component.component.css */ "./src/app/nav-component.component.css")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/page-not-found-component/page-not-found-component.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/page-not-found-component/page-not-found-component.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kLWNvbXBvbmVudC9wYWdlLW5vdC1mb3VuZC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/page-not-found-component/page-not-found-component.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/page-not-found-component/page-not-found-component.component.ts ***!
  \********************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found-component/page-not-found-component.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found-component.component.css */ "./src/app/page-not-found-component/page-not-found-component.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/position/position.component.css":
/*!*************************************************!*\
  !*** ./src/app/position/position.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3Bvc2l0aW9uL3Bvc2l0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH0iXX0= */"

/***/ }),

/***/ "./src/app/position/position.component.ts":
/*!************************************************!*\
  !*** ./src/app/position/position.component.ts ***!
  \************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");




let PositionComponent = class PositionComponent {
    constructor(positionService, activatedRoute) {
        this.positionService = positionService;
        this.activatedRoute = activatedRoute;
        this.successMessage = false;
        this.failMessage = false;
    }
    //may need to adjust logic if output is incorrect
    ngOnInit() {
        this.paramSubscription = this.activatedRoute.params.subscribe((params) => {
            this.positionSubscription = this.positionService.getPosition(params.id).subscribe((postn) => {
                this.position = postn[0];
            });
        });
    }
    onSubmit() {
        console.log("onsubmit()");
        this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(() => {
            this.successMessage = true;
            setTimeout(() => { this.successMessage = false; }, 2500);
        }, () => {
            this.failMessage = true;
            setTimeout(() => { this.failMessage = false; }, 2500);
        });
        //  console.log("positionsub " + savePositionsSubscription)
    }
    ngOnDestroy() {
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionSubscription) {
            this.savePositionSubscription.unsubscribe();
        }
    }
};
PositionComponent.ctorParameters = () => [
    { type: _data_position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-position',
        template: __webpack_require__(/*! raw-loader!./position.component.html */ "./node_modules/raw-loader/index.js!./src/app/position/position.component.html"),
        styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position/position.component.css")]
    })
], PositionComponent);



/***/ }),

/***/ "./src/app/positions-component/positions-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/positions-component/positions-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n.table-responsive{margin-bottom:60px;}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb25zLWNvbXBvbmVudC9wb3NpdGlvbnMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLEVBQUU7QUFDMUIsa0JBQWtCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcG9zaXRpb25zLWNvbXBvbmVudC9wb3NpdGlvbnMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cclxuLnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTo2MHB4O31cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/positions-component/positions-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/positions-component/positions-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PositionsComponent = class PositionsComponent {
    constructor(pos, router) {
        this.pos = pos;
        this.router = router;
        this.loadingError = false;
    }
    ngOnInit() {
        this.getPositionsSub = this.pos.getPositions().subscribe(positions => this.positions = positions, function (e) {
            this.loadingError = true;
        });
    }
    ngOnDestroy() {
        if (this.getPositionsSub != 'undefined') {
            this.getPositionsSub.unsubscribe();
        }
    }
    routePosition(id) {
        this.router.navigate(['/position', id]);
    }
};
PositionsComponent.ctorParameters = () => [
    { type: _data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-positions',
        template: __webpack_require__(/*! raw-loader!./positions-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/positions-component/positions-component.component.html"),
        styles: [__webpack_require__(/*! ./positions-component.component.css */ "./src/app/positions-component/positions-component.component.css")]
    })
], PositionsComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ivy\Desktop\Web-A6\Web-A6-src\my-dream-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map