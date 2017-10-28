'use strict';

const asciiParser = require('../lib/ascii-parser.js');
const fs = require('fs');
const {test} = require('ava');

test('asciiParser', t => {
    fs.writeFile('flit.svg',
        asciiParser(`
TCR


T+R+
   C


 T CC
T+RRR
 T CC
`
        ).toString(),
        t.pass
    );
});
/* eslint-env mocha */
