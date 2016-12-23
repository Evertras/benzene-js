const gulp = require('gulp');
const jshint = require('gulp-jshint');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const assign = require('lodash.assign');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

const src = [ 'index.js', './lib/**/*.js' ];
const bundleTarget = 'benzene.js';

const opts = assign({}, watchify.args, {
  entries: [ 'index.js' ]
});
const b = watchify(browserify(opts));

gulp.task('js', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify error'))
    .pipe(source(bundleTarget))
    .pipe(gulp.dest('./sample/'));
}

gulp.task('jshint', () => {
  return gulp.src(src)
             .pipe(jshint())
             .pipe(jshint.reporter('default'))
             .pipe(jshint.reporter('fail'))
});

gulp.task('pre-test', () => {
  return gulp.src(src)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
})

gulp.task('test', ['pre-test'], () => {
  return gulp.src(['test/**/*.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports());
});
