'use strict';

const skin = require('../parts.js');
const onml = require('onml');
const clone = require('lodash.clonedeep');

const objects = {
    'T': 'ThrusterXS',
    'R': 'ReactorS',
    'C': 'CapS',
    '+': 'PwrLine4'
};

function trimReduce (res, row, y) {
    console.log(row);
    const row1 = row.reduce((res1, e, x) => {
        if (objects[e]) {
            let cell = clone(skin[objects[e]]);
            cell[1].transform = `translate(${20 * x},${20 * y})`;
            res1.push(cell);
        }
        return res1;
    }, ['g']);
    res.push(row1);
    return res;
}

function shipParser (arr, num) {
    return arr.reduce(trimReduce, ['g', {
        transform: `translate(0,${256 * num})`
    }]);
}

const arrArr = str => {
    const arr = str.split('\n\n\n').map(
        ship => ship.split('\n').map(
            row => row.split('')
        )
    );
    return arr;
};

function asciiParser (str) {
    const body = arrArr(str).map(shipParser);
    return onml.stringify(['svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:inkscape': 'http://www.inkscape.org/namespaces/inkscape',
        'xmlns:sodipodi': 'http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd',
        width: 512, height: (body.length * 256), viewBox: [0, 0, 512, (body.length * 256)].join(' ')
    }].concat(body), null, 4);
}

module.exports = asciiParser;
