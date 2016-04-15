module.exports = function (gulp, plugins) {
	gulp.task('prod', function(cb) {
		plugins.sequence(
			'compileAssets',
			'concat:js',
			'concat:css',
			'uglify:dist',
			'cssmin:dist',
            'bower',
			'sails-linker-gulp:prodAssets',
			'sails-linker-gulp:prodViews',
            'images',
			cb
		);
	});
};
