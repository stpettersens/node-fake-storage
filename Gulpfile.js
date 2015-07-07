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
		module: 'commonjs',
		target: 'es5'
	}))
	.pipe(gulp.dest('.'))
});

gulp.task('clean', function() {
	fs.unlinkSync('FakeStorage.js');
});
