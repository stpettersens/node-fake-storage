/*
	Compile FakeStorage.ts to JavaScript for end-use.
*/

var gulp = require('gulp'),
      fs = require('fs'),
     tsc = require('gulp-typescript');

gulp.task('default', function() {
	return gulp.src('FakeStorage.ts')
	.pipe(tsc({
		noImplicitAny: true,
		target: 'es5',
		module: 'commonjs'
	}))
	.pipe(gulp.dest('.'))
});

gulp.task('clean', function() {
	fs.unlinkSync('cart.js');
	fs.unlinkSync('cart.min.js');
});
