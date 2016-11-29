var gulp = require("gulp");

const COMPILE_TIME_SECONDS = 5;

gulp.task("compile",(cb)=>{
  console.log("compile start");
  setTimeout(()=>{
    console.log("compile stop");
    cb();
  },COMPILE_TIME_SECONDS*1000);

});

gulp.task("watch",["compile"],()=>{
  console.log("watch");
  gulp.watch("src/**/*.{js,ts}",["compile","copy"]);
});

gulp.task("copy",["compile"],()=>{
  console.log("copy");
  gulp.src("./src/**/*.{js,ts}")
  .pipe(gulp.dest("bin"));

});

gulp.task("default",["compile","watch","copy"]);
