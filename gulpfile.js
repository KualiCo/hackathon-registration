/* jshint node:true */
'use strict';

var gulp = require('gulp');
var reactify = require('reactify');
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var watchify = require('watchify')
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var debug = require('gulp-debug')
var Promise = require('bluebird')
var cp = require('child_process')
var ts = require('gulp-type')
var react = require('gulp-react')
var runSequence = require('run-sequence')
var changed = require('gulp-changed')
var csv = require('basic-csv')
var Course = require('./server/model/Course')

var SRC = './public/js/'
var BUILD = './public/build/'
var paths = {
  // css: ['src/css/**/*.styl'],
  // index_js: ['./src/js/index.jsx'],
  src: SRC,
  build: BUILD,
  index: BUILD+'index.js',
  js: SRC+'**/*.js',
  ts: SRC+'**/*.ts',
  jsx: SRC+'**/*.jsx',
};

var isProduction = gutil.env.type === 'production'

var tsPublic = ts.createProject({
  declarationFiles: false,
  noExternalResolve: true,
  module: 'commonjs'
})

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

// 2. Typescript
// 3. Browserify with JSX
gulp.task('scripts', function(cb) {
  return runSequence('ts', 'copyJs', 'browserify', cb)
})

gulp.task('copyJs', function(cb) {
  return gulp.src([paths.js, paths.jsx])
    .pipe(gulp.dest(BUILD))
})

gulp.task('browserify', function(cb) {
  console.log("Run JS BUndle")
  return runJSBundle()
})

gulp.task('ts', function(cb) {
  var tsResult = gulp.src(paths.ts)
    .pipe(ts(tsPublic))
  return tsResult.js.pipe(gulp.dest(BUILD))
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

  gulp.watch(paths.ts, ['ts'])
  gulp.watch([paths.jsx, paths.js], ['copyJs'])
});

gulp.task('test', function() {
  return exec("ls")
});


var db = require('./server/util/db');
var r = require('rethinkdb');
var config = require('config');
var courseData = require('./data/courses.json');
var employeeData = require('./data/employees.json');

gulp.task('db', function () {
  var dbName = config.rethink.db;
  var courseTable = config.rethink.tables.course;
  var employeeTable = config.rethink.tables.employee;

  // create database
  db.run(r.dbCreate(dbName));

  // create table
  db.run(r.db(dbName).tableCreate(courseTable));
  db.run(r.db(dbName).tableCreate(employeeTable));

  // load data
  db.run(r.db(dbName).table(courseTable).insert(courseData));
  db.run(r.db(dbName).table(employeeTable).insert(employeeData));
});




function exec(command) {
  return new Promise(function(resolve, reject) {
    console.log("--", command)
    var process = cp.spawn('sh', ['-c', command], {stdio: 'inherit'})
    process.on('close', function(code) {
        if (code > 0) return reject("Exited with "+code)
        resolve()   
    })
  })
}

function simpleError(type) {
  return function(err) {
    gutil.log(type, err.message)
  }
}

