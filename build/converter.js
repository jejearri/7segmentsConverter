"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patterns = [
    [[0, 1, 0], [2, 0, 2], [2, 1, 2]],
    [[0, 0, 0], [0, 2, 0], [0, 2, 0]],
    [[0, 1, 0], [0, 1, 2], [2, 1, 0]],
    [[0, 1, 0], [0, 1, 2], [0, 1, 2]],
    [[0, 0, 0], [2, 1, 2], [0, 0, 2]],
    [[0, 1, 0], [2, 1, 0], [0, 1, 2]],
    [[0, 1, 0], [2, 1, 0], [2, 1, 2]],
    [[0, 1, 0], [0, 0, 2], [0, 0, 2]],
    [[0, 1, 0], [2, 1, 2], [2, 1, 2]],
    [[0, 1, 0], [2, 1, 2], [0, 1, 2]]
];
var symbols = [
    " ",
    "_",
    "|"
];
exports.convert = function (input) {
    if (input == null || input.length == 0) {
        throw new TypeError('Please provide a number as argument');
    }
    var output = "";
    for (var i = 0; i < 3; i++) {
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var snumber = input_1[_i];
            var number = +snumber;
            if (Number.isNaN(number)) {
                throw new TypeError('Non numeric char are not supported');
            }
            var pattern = patterns[number][i];
            Array.from(pattern).forEach(function (pat) {
                output += symbols[pat];
            });
        }
        output += '\n';
    }
    return output;
};
