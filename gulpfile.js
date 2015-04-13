var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  'scss': './src/scss/**/*.scss'
};

gulp.task('scss', function() {
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch(paths.scss, ['scss']);
});

gulp.task('build', ['scss']);

gulp.task('default', ['build']);