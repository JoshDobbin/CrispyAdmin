module.exports = function (gulp, plugins) {
	gulp.task('compileAssets', function(cb) {
		plugins.sequence(
			'clean:dev',
			'jst:dev',
            //'gen-ts-refs:dev',
            'ts-lint:dev',
            'compile-ts',
			'less:dev',
			'copy:dev',
			'coffee:dev',
			cb
		);
	});
};
