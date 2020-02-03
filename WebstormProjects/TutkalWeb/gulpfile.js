const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const reload = browserSync.reload

gulp.task('browser-sync', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir:'./',
            index:'./html/product-SpaceClicker.html'
        }
    })
    gulp.watch('./html/**/*.html').on('change', reload)
    gulp.watch('./scss/**/*.scss', gulp.series('css'))
    gulp.watch('./js/**/*.js').on('change', reload)
})

//gulp.task('html', function(){
  //  return gulp.src('./html/**/*.html')
    //    .pipe(browserSync.reload({stream: true}))
//})

gulp.task('css', () => {
    return gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream())
})

gulp.task('default', gulp.series('browser-sync'))

