'use strict';

const asciiParser = require('../lib/ascii-parser.js');
const fs = require('fs');
const {test} = require('ava');

test('asciiParser', t => {
    fs.writeFile('flit.svg',
        asciiParser(`
.TCR


.T+R+
    C

   .
   T CC
.TT+RRR
   T CC
   .

  
   .   .
   T   T
.TT+CCC+T.
.TT+RRR+
.TT+CCC+T.
   T   T
   .   .
  
  
.TT+CCC+T.
    +
    R
    +
.TT+CCC+T.



  

 `
        ).toString(),
        t.pass
    );
});
/* eslint-env mocha */
