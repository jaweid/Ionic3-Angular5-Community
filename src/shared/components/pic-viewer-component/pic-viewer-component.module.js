"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by JLiu on 2017/7/17.
 */
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var select_pic_1 = require("./select-pic");
var viewer_pic_module_1 = require("./viewer-pic.module");
var PicViewerComponentModule = (function () {
    function PicViewerComponentModule() {
    }
    return PicViewerComponentModule;
}());
PicViewerComponentModule = __decorate([
    core_1.NgModule({
        imports: [ionic_angular_1.IonicModule, viewer_pic_module_1.ViewerPicModule],
        declarations: [select_pic_1.SelectPic],
        exports: [select_pic_1.SelectPic],
        providers: []
    })
], PicViewerComponentModule);
exports.PicViewerComponentModule = PicViewerComponentModule;
