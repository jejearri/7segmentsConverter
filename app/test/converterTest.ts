import { expect } from 'chai';
import 'mocha';
import {convert} from "../converter";

describe('convert function with good parameter', () =>{
    it('should return 93 char', () => {
        expect(convert('1234567890')).to.have.lengthOf(93);
    })
});

describe('convert function with no parameter', () => {
    it('should throw TypeError', () => {
        expect(convert.bind(convert,'')).to.throw('Please provide a number as argument');
    })
});

describe('convert function with bad parameter', () => {
    it('should throw a TypeError', () => {
        expect(convert.bind(convert, '12abc')).to.throw('Non numeric char are not supported');
    })
});