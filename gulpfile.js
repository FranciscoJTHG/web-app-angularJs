const gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
});

gulp.task('js', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js.map',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-animate/angular-animate.min.js.map',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-aria/angular-aria.min.js.map',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-messages/angular-messages.min.js.map',
        'node_modules/angular-cookies/angular-cookies.min.js',
        'node_modules/angular-cookies/angular-cookies.min.js.map',
        'node_modules/angular-resource/angular-resource.min.js',
        'node_modules/angular-resource/angular-resource.min.js.map',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-route/angular-route.min.js.map',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js.map',
        'node_modules/angular-material/angular-material.min.js',
        'node_modules/angular-ui-grid/ui-grid.js',
        'node_modules/angular-ui-grid/ui-grid.core.js',
        'node_modules/angular/angular.js'
    ])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
});

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });

    gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ], gulp.series('sass'));

    gulp.watch('src/*.html').on('change', browserSync.reload);

});

gulp.task('font-awesome', () => {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/angular-material/angular-material.min.css',
        'node_modules/angular-ui-grid/ui-grid.css',
        'node_modules/angular-ui-grid/fonts/ui-grid.woff',
        'node_modules/angular-ui-grid/fonts/ui-grid.ttf',
])
    .pipe(gulp.dest('src/css'));
});

gulp.task('fonts', () => {
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'));
});

gulp.task('default', gulp.series('sass', 'js', 'font-awesome', 'fonts', 'server'));