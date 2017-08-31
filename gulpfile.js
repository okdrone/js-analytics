var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', ['script'], function(cb) {
    console.log('This is default task.');

    return gulp.src('js/analytics-source.js')
    .pipe(uglify())
    .pipe(rename({basename: 'analytics', suffix: '.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('test/js'));
});

gulp.task('script', function(cb) {

    return gulp.src('js/script.js')
    .pipe(uglify())
    .pipe(rename({basename: 'script', suffix: '.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('test/js'));
});

gulp.task('check', function(cb) {

    return gulp.src('js/analytics-source.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});