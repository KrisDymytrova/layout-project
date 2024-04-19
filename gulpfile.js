'use strict';

const gulp = require('gulp');
const { series, parallel } = require('gulp');

function compileSass(cb) {
    console.log('Compiling SASS...');
    cb();
}

function minifyJS(cb) {
    console.log('Minifying JavaScript...');
    cb();
}

function optimizeImages(cb) {
    console.log('Optimizing images...');
    cb();
}

function cleanTempFiles(cb) {
    console.log('Cleaning temporary files...');
    cb();
}

exports.compileSass = compileSass;
exports.minifyJS = minifyJS;
exports.optimizeImages = optimizeImages;
exports.cleanTempFiles = cleanTempFiles;

exports.build = parallel(compileSass, minifyJS);

exports.production = series(exports.build, optimizeImages);

exports.default = series(exports.build, cleanTempFiles);
