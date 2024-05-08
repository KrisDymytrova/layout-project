'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('dist/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.stream());
});

gulp.task('pug', () => {
    return gulp.src('dist/views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('dist/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('dist/views/**/*.pug', gulp.series('pug'));
});

gulp.task('development', gulp.series('sass', 'pug', 'server'));
