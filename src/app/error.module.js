"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var CustomErrorHandler = (function () {
    function CustomErrorHandler() {
    }
    //Handle the given error.
    CustomErrorHandler.prototype.handleError = function (error) {
        console.log('cutsom error handler', error);
    };
    return CustomErrorHandler;
}());
exports.CustomErrorHandler = CustomErrorHandler;
var CustomErrorHandlerModule = (function () {
    function CustomErrorHandlerModule() {
    }
    CustomErrorHandlerModule = __decorate([
        core_2.NgModule({
            providers: [
                {
                    provide: core_1.ErrorHandler,
                    useClass: CustomErrorHandler
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomErrorHandlerModule);
    return CustomErrorHandlerModule;
}());
exports.CustomErrorHandlerModule = CustomErrorHandlerModule;
//# sourceMappingURL=error.module.js.map