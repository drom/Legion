'use strict';

function trimReduce (res, e) {
    if (e.trim() !== '') {
        res.push(e);
    }
    return res;
}

function shipParser (str) {
    return str.split('\n')
        .reduce(trimReduce, []);
}

function asciiParser (str) {
    return str
        .split('\n\n\n')
        .map(shipParser);
}

module.exports = asciiParser;
