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

function trimReduce (res, e, y) {
    if (e.trim() !== '') {
        const row = e.split('');
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
    }
    return res;
}

function shipParser (str, num) {
    const map = str.split('\n');
    // console.log(map);
    return map.reduce(trimReduce, ['g', {transform: `translate(0,${400 * num})`}]);
}

function asciiParser (str) {
    const body = str.split('\n\n\n').map(shipParser);
    // return onml.stringify(['svg'].concat(body));
    return onml.stringify(['svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:inkscape': 'http://www.inkscape.org/namespaces/inkscape',
        'xmlns:sodipodi': 'http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd',
        width: 3000, height: 3000, viewBox: [0, 0, 3000, 3000].join(' ')
    }].concat(body), null, 4);
}

module.exports = asciiParser;
