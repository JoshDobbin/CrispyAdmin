/**
 * Copy Bower dependencies to distribution folder
 *
 * ---------------------------------------------------------------
 *
 */
var bower = require('gulp-bower'),
    debug = require('gulp-debug');

module.exports = function(gulp, plugins, growl) {
    gulp.task('bower', function() {
        bower({verbosity: 2})
            .pipe(debug());
            
        return gulp.src('bower_components/**/*.*')
            .pipe(gulp.dest('.tmp/public/lib/'));
    });
};
