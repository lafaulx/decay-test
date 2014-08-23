"use strict";

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  less = require('gulp-less');

var paths = {
  js: {
    src: 'src/js/**/*.js',
    dest: 'public/js'
  },
  less: {
    src: 'src/less/style.less',
    dest: 'public/css'
  }
};

gulp.task('js', function() {
  return gulp.src(paths.js.src)
          //.pipe(uglify())
          .pipe(gulp.dest(paths.js.dest));
});

gulp.task('less', function () {
  gulp.src(paths.less.src)
    .pipe(less({
      paths: [ paths.less.src ]
    }))
    .pipe(gulp.dest(paths.less.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.js.src, ['js']);
  gulp.watch(paths.less.src, ['less']);
});

gulp.task('default', ['js', 'less']);