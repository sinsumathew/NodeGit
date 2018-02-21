var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            host: "localhost",
            port: 8080,
            livereload: true,
            open: true
        }));
});