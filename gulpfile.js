var gulp = require('gulp');
var cordova = require('cordova-lib').cordova;

gulp.task('cordova-run', function () {
    cordova.run({
        platforms: ["android"]
    });
});

gulp.task('watch', function (callback) {
    gulp.watch('www/**/*.*', ['cordova-run']);    
});

gulp.task('default', ['cordova-run', 'watch']);