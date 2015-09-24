'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var debug = require('gulp-debug');

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(debug())
    .pipe(gulp.dest('./css'))
    ;
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});