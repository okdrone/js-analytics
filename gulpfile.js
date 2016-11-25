var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', ['check'], function(cb) {
    console.log('This is default task.');

    return gulp.src('js/analytics-source.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('check', function(cb) {

    return gulp.src('js/analytics-source.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});