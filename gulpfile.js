var gulp = require('gulp');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
gulp.task('sass',function(){
    gulp.src(['css/src/**/*.sass'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(gulp.dest('css/dist'))
});
gulp.task('js',function(){
    gulp.src(['js/src/**/*.js'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest('js/dist'))
});
gulp.task('default',function(){
    gulp.watch('js/src/**/*.js',['js']);
    gulp.watch('css/src/**/*.sass',['sass']);
    gulp.watch('css/src/**/*.scss',['sass']);
});
