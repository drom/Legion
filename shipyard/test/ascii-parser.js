'use strict';

const asciiParser = require('../lib/ascii-parser.js');
const {test} = require('ava');

test('asciiParser', t => {
    t.deepEqual(
        asciiParser(`
TCR


T+R+
   C


 T CC
T+RRR
 T CC
`
        ),
        ([
            [],
            [],
            []
        ])
    );
});
/* eslint-env mocha */
