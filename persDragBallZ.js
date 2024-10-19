"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.persDragBallZ = void 0;
var AtrubGral_1 = require("./AtrubGral");
var persDragBallZ = /** @class */ (function (_super) {
    __extends(persDragBallZ, _super);
    function persDragBallZ(dirImagen, nombre, golpeBasico, armadura, ki) {
        var _this = _super.call(this, dirImagen, nombre, golpeBasico, armadura) || this;
        _this.ki = ki;
        return _this;
    }
    persDragBallZ.prototype.getki = function () {
        return this.ki;
    };
    persDragBallZ.prototype.setki = function (ki) {
        this.ki = ki;
    };
    return persDragBallZ;
}(AtrubGral_1.Atributos));
exports.persDragBallZ = persDragBallZ;
