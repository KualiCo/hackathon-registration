/* jshint node:true */
'use strict';

var gulp = require('gulp');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var debug = require('gulp-debug');
var react = require('gulp-react');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter')
var concat = require('gulp-concat')

var SRC = './client/js/'

var BUILD = './client/build/'
var paths = {
  src: SRC,
  build: BUILD,
  index: BUILD+'index.js',
  js: SRC+'**/*.js',
  jsx: SRC+'**/*.jsx'
};

var isProduction = gutil.env.type === 'production'

var jsBundle;
function runJSBundle() {
  gutil.log("JSBundle")

  if (!jsBundle) {
    var watchifyArgs = watchify.args
    watchifyArgs.debug = !isProduction
    jsBundle = watchify(browserify(paths.index, watchifyArgs))
    jsBundle.transform(reactify) 
  }

  return jsBundle.bundle()
    .on('error', simpleError("Browserify Error:"))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(BUILD))
    .on('end', function() {
      gutil.log("JSBundle: Done")
    })
}

gulp.task('default',['scripts']);

// 2. Typescript
// 3. Browserify with JSX
gulp.task('scripts', function(cb) {
  return runSequence('copyJs', cb)
})

gulp.task('copyJs', function(cb) {
  return gulp.src([paths.js, paths.jsx])
    .pipe(gulp.dest(BUILD))
})

// watch for changes manually. See https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
gulp.task('watch', ['scripts'], function() {
  livereload.listen();

  jsBundle.on('update', function() {
    return runJSBundle() 
    .on('end', function() {
      livereload.changed()
    })
  })

  gulp.watch([paths.jsx, paths.js], ['copyJs'])
});

gulp.task('bower', function() {
    var jsFilter = filter('*.js')
    var cssFilter = filter('*.css')

    return gulp.src(mainBowerFiles())
        // JS BUNDLING
        .pipe(jsFilter)
        .pipe(concat('bower.js'))
        .pipe(gulp.dest('client/js'))
        .pipe(jsFilter.restore())

        // CSS BUNDLING
        .pipe(cssFilter)
        .pipe(gulp.dest('client/css'))
})

gulp.task('db', function () {
    require('./db')();
});

function simpleError(type) {
  return function(err) {
    gutil.log(type, err.message)
  }
}

