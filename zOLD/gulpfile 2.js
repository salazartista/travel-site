var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
	
	console.log("hooray - you created a gulp task.");
});


gulp.task('html', function(){
	console.log("imagine something useful being done to your html here.");
	
	
});


gulp.task('styles', function(){
	console.log("CSS something useful goes here");
	
	
});


gulp.task('watch', function(){
	
	watch('./app/index.html', function(){
		
		
		gulp.start('html');
	});
	
	
	watch('./app/assets/styles/**/*.css', function(){
		
		
		gulp.start('styles');
	});
	
	
	
	
});