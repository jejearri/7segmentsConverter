"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var converter_1 = require("./converter");
var args = process.argv;
try {
    console.log(converter_1.convert(args[2]));
}
catch (error) {
    console.log(error.name + ' : ' + error.message);
}
