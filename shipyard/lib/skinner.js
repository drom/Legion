'use strict';

const stream = require('stream');
const onml = require('onml');
const jsof = require('jsof');

function process (str) {
    const srcObj = onml.parse(str);
    const assets = {};
    onml.traverse(srcObj, {
        enter: function (node) {
            if (
                node.name === 'g' &&
                node.attr.id !== undefined &&
                !(node.attr.id.match('^layer'))
            ) {
                assets[node.attr.id] = node.full;
            }
        }
    });
    const res = jsof.stringify(assets);
    return res;
}

function skinner () {
    const $ = stream.Transform();

    var fullString = '';

    $.setEncoding('ascii');

    $.on('error', function (err) { throw err; });

    $._transform = function (chunk, enc, next) {
        fullString += chunk;
        next();
    };

    $._flush = function (next) {
        $.push(process(fullString));
        $.push(null);
        next();
    };
    return $;
}

module.exports = skinner;
