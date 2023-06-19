"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharCounter = void 0;
var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
        this.characterCount = 0;
        this.longestWordLength = 0;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
        this.characterCount += word.length;
        if (word.length > this.longestWordLength) {
            this.longestWordLength = word.length;
        }
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.characterCount;
    };
    CharCounter.prototype.getLongestWordLength = function () {
        return this.longestWordLength;
    };
    return CharCounter;
}());
exports.CharCounter = CharCounter;
