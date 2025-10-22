"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository(arr) {
        this.arr = (arr) ? arr : [];
    }
    Repository.prototype.add = function (item) {
        this.arr.push(item);
    };
    Repository.prototype.remove = function (item) {
        var i = 0;
        for (; i < this.arr.length; i++) {
            if (this.arr[i] == item) {
                this.arr.splice(i, 1);
                break;
            }
        }
        if (i == this.arr.length)
            throw new Error("cet élèment n'existe pas dans le repo !");
    };
    Repository.prototype.getAll = function () {
        return this.arr;
    };
    return Repository;
}());
exports.Repository = Repository;
