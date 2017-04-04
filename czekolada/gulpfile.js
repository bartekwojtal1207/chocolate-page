var gulp = require("gulp");
var sass = require('gulp-sass');
gulp.task("sass",function(){
  return gulp.src("style.scss").pipe(sass({errLogToConsole: true})).pipe(gulp.dest("css"))
});
//var sourcemaps = require("gulp-sourcemaps");
//gulp.task("sass2",function(){
//  return gulp.src("style.scss").pipe(sourcemaps.init()).pipe(sass({errLogToConsole:true})).pipe(sourcemaps.write()).pipe(gulp.dest("css"))
//})
/*var sourcemaps2 = require("gulp-sourcemaps");
gulp.task('sass3',function(){
  return sass("style.scss",{style:"expanded",sourcemap: true}).on("error",sass.logErrorr).pipe(sourcemaps.write()).pipe(gulp.dest("css"))
})
*/
