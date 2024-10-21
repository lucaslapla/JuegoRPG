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
exports.persMarvel = void 0;
var Atributos_1 = require("./Atributos");
var persMarvel = /** @class */ (function (_super) {
    __extends(persMarvel, _super);
    function persMarvel(dirImagen, nombre, golpeBasico, armadura, poder) {
        var _this = _super.call(this, dirImagen, nombre, golpeBasico, armadura) || this;
        _this.poder = poder;
        return _this;
    }
    persMarvel.prototype.getpoder = function () {
        return this.poder;
    };
    persMarvel.prototype.setpoder = function (poder) {
        this.poder = poder;
    };
    return persMarvel;
}(Atributos_1.Atributos));
exports.persMarvel = persMarvel;
