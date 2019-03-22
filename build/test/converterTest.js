"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var converter_1 = require("../converter");
describe('convert function with good parameter', function () {
    it('should return 93 char', function () {
        chai_1.expect(converter_1.convert('1234567890')).to.have.lengthOf(93);
    });
});
describe('convert function with no parameter', function () {
    it('should throw TypeError', function () {
        chai_1.expect(converter_1.convert.bind(converter_1.convert, '')).to.throw('Please provide a number as argument');
    });
});
describe('convert function with bad parameter', function () {
    it('should throw a TypeError', function () {
        chai_1.expect(converter_1.convert.bind(converter_1.convert, '12abc')).to.throw('Non numeric char are not supported');
    });
});
