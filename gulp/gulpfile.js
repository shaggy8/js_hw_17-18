var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');


gulp.task('minify-css', function(){
      return gulp.src('build/*.css')
                 .pipe(concat('styles-min.css'))
                 .pipe(cleanCSS())
                 .pipe(gulp.dest('css'));
});

gulp.task('minify-js', function(){
      return gulp.src('build/*.js')
                 .pipe(concat('scripts-min.js'))
                 .pipe(uglify())
                 .pipe(gulp.dest('js'));
});

gulp.task('default', function(){
      gulp.run('minify-css', 'minify-js');
});

gulp.task('watch', function(){
      watch('build/*', function(event, cb) {
          gulp.start('minify-css', 'minify-js');
      });
});