'use strict';

const { watch } = require('gulp');

const changeHtmlFile = (done) => {
    console.log('Изменился HTML файл');

    done();
};

const fileAddition = (done) => {
    console.log('Был добавлен новый файл');

    done();
};

const fileDeletion = (done) => {
    console.log(`Файл был удалён`);

    done();
};

const watchers = () => {
    watch('dist/pages/**/*.html', changeHtmlFile);

    watch('dist/**/*', { events: 'add' }, fileAddition);

    watch(['dist/js/', 'dist/styles/'], { events: 'unlink' }, fileDeletion);
};

exports.watchers = watchers;

