"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var viewer_pic_1 = require("./viewer-pic");
/**
 * 自定义添加/预览图片组件
 * @description
 * @example <page-select-pic [(fileObjList)]="fileObjList"></page-select-pic>
 * @example <page-select-pic [max]="6" [allowAdd]="true" [allowDelete]="true" [(fileObjList)]="fileObjList"></page-select-pic>
 */
var SelectPic = (function () {
    function SelectPic(navCtrl, actionSheetCtrl, nativeService) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.nativeService = nativeService;
        this.max = 4; //最多可选择多少张图片，默认为4张
        this.destinationType = 1; //期望返回的图片格式,默认1图片路径,0为返回base64
        this.allowAdd = true; //是否允许新增
        this.allowDelete = true; //是否允许删除
        this.fileObjList = []; //图片列表,与fileObjListChange形成双向数据绑定
        this.fileObjListChange = new core_1.EventEmitter();
    }
    SelectPic.prototype.addPicture = function () {
        var _this = this;
        var that = this;
        that.actionSheetCtrl.create({
            buttons: [
                {
                    text: '从相册选择',
                    handler: function () {
                        that.nativeService.getMultiplePicture({
                            maximumImagesCount: (that.max - that.fileObjList.length),
                            destinationType: _this.destinationType
                        }).then(function (imgs) {
                            for (var _i = 0, _a = imgs; _i < _a.length; _i++) {
                                var img = _a[_i];
                                that.getPictureSuccess(img);
                            }
                        });
                    }
                },
                {
                    text: '拍照',
                    handler: function () {
                        that.nativeService.getPictureByCamera({
                            destinationType: _this.destinationType
                        }).then(function (img) {
                            that.getPictureSuccess(img);
                        });
                    }
                },
                {
                    text: '取消',
                    role: 'cancel'
                }
            ]
        }).present();
    };
    SelectPic.prototype.deletePicture = function (i) {
        if (!this.allowDelete) {
            return;
        }
        var that = this;
        that.actionSheetCtrl.create({
            buttons: [
                {
                    text: '删除',
                    role: 'destructive',
                    handler: function () {
                        that.fileObjList.splice(i, 1);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel'
                }
            ]
        }).present();
    };
    SelectPic.prototype.viewerPicture = function (index) {
        var picturePaths = [];
        for (var _i = 0, _a = this.fileObjList; _i < _a.length; _i++) {
            var fileObj = _a[_i];
            picturePaths.push(fileObj);
        }
        this.navCtrl.push(viewer_pic_1.ViewerPic, { 'initialSlide': index, 'picturePaths': picturePaths });
    };
    SelectPic.prototype.getPictureSuccess = function (img) {
        if (this.destinationType == 0) {
            var imgBase64 = 'data:image/jpg;base64,' + img;
            this.fileObjList.push(imgBase64);
            this.fileObjListChange.emit(this.fileObjList);
        }
        // let fileObj = <FileObj>{'origPath': img, 'thumbPath': img};
    };
    return SelectPic;
}());
__decorate([
    core_1.Input()
], SelectPic.prototype, "max", void 0);
__decorate([
    core_1.Input()
], SelectPic.prototype, "destinationType", void 0);
__decorate([
    core_1.Input()
], SelectPic.prototype, "allowAdd", void 0);
__decorate([
    core_1.Input()
], SelectPic.prototype, "allowDelete", void 0);
__decorate([
    core_1.Input()
], SelectPic.prototype, "fileObjList", void 0);
__decorate([
    core_1.Output()
], SelectPic.prototype, "fileObjListChange", void 0);
SelectPic = __decorate([
    core_1.Component({
        selector: 'page-select-pic',
        templateUrl: 'select-pic.html',
    })
], SelectPic);
exports.SelectPic = SelectPic;
