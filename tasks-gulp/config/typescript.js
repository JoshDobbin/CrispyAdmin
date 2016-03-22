/**
 * Compiles all typescript files
 *
 * ---------------------------------------------------------------
 * Meant to initially handle the typescript in Angular2 frontends
 * but could probably be extended to the entire application if 
 * there's a need.
 *
 */

var sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    tsProject = ts.createProject('tsconfig.json');

module.exports = function(gulp, plugins, growl) {
    /**
     * Generate TypeScript definition files - not quite working
     */
    //gulp.task('gen-ts-refs:dev', function () {
    //    var sources = gulp.src(['./assets/js/**/*.ts'], {read: false});
    //    return sources.pipe(inject({
    //        starttag: '//{',
    //        endtag: '//}',
    //        transform: function (filepath) {
    //            return '/// <reference path="../..' + filepath + '" />';
    //        }
    //    })).pipe(gulp.dest('./tools/typings/'));
    //});

    /**
     * Lint all custom TypeScript files.
     */
    gulp.task('ts-lint:dev', function () {
        return gulp.src('./assets/js/**/*.ts')
            .pipe(tslint())
            .pipe(tslint.report('prose'));
    });

    /**
     * Compile TypeScript and include references to library and app .d.ts files.
     */
    gulp.task('compile-ts', function () {
        var sourceTsFiles = [
            './assets/js/**/*.ts', //path to typescript files
            './typings/main.d.ts'];  //reference to library .d.ts files

        var tsResult = gulp.src(sourceTsFiles)
            .pipe(sourcemaps.init())
            .pipe(ts(tsProject));

        tsResult.dts.pipe(gulp.dest('./built/js/'));
        return tsResult.js
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./built/js/'));
    });  
};