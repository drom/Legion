#!/usr/bin/env node
'use strict';

const skinner = require('../lib/skinner.js');

const $ = skinner();

if (process.stdin.isTTY) {
    $.push('skinner');
}

// connect stdin/stdout to the skinner stream
process.stdin.setEncoding('ascii');
process.stdin.pipe($).pipe(process.stdout);
