'use strict'

const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const { series } = require('gulp');

const sourceDir = './dist/hw74/source/';
const destinationDir = './dist/hw74/destination/';

function copyFiles() {
    return gulp.src(path.join(sourceDir, '**/*'))
        .pipe(gulp.dest(destinationDir));
}

function moveFiles(cb) {
    gulp.src(path.join(sourceDir, '**/*'))
        .pipe(gulp.dest(destinationDir))
        .on('end', function() {
            fs.readdir(sourceDir, (err, files) => {
                if (err) {
                    console.error('Ошибка при чтении директории', err);
                    return cb(err);
                }

                files.forEach(file => {
                    fs.unlink(path.join(sourceDir, file), err => {
                        if (err) {
                            console.error('Ошибка при удалении файла', err);
                        }
                    });
                });

                console.log('Файлы успешно перемещены и удалены');
                cb();
            });
        });
}

const copyAndMove = series(copyFiles, moveFiles);

exports.copy = copyFiles;
exports.move = moveFiles;
exports.copyAndMove = copyAndMove;

