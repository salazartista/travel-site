var gulp = require('gulp');
var watch = require('gulp-watch'),
	postcss = require ('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');

gulp.task('default', function(){
	
	console.log("hooray - you created a gulp task.");
});


gulp.task('html', function(){
	console.log("imagine something useful being done to your html here.");
	
	
});


gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/styles2.css')
	   .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	   .pipe(gulp.dest('./app/temp/styles'));
	
});


gulp.task('watch', function(){
	
	watch('./app/index.html', function(){
		
		
		gulp.start('html');
	});
	
	
	watch('./app/assets/styles/**/*.css', function(){
		
		
		gulp.start('styles');
	});
	
	
	
	
});