'use strict';

const asciiParser = require('../lib/ascii-parser.js');
const expect = require('chai').expect;

describe('asciiParser', () => {
    it('l1', done => {
        expect(asciiParser(`
TCR


T+R+
   C


 T CC
T+RRR
 T CC
`)).to.deep.eq([[], [], []]);
        done();
    });
});
/* eslint-env mocha */
