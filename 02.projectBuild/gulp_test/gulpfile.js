/*
  gulp：
    1. 是什么？基于流的自动化构建工具
    2. 特点： 基于流和异步构建
    3. 使用：
      - 英文官网找插件
        https://gulpjs.com/plugins/
      - 下载插件
        npm i xxx -D
      - 引入插件
        const xxx = require('xxx');
      - 配置插件任务
        gulp.task(任务名, 任务的回调函数)
      - 配置默认任务
        gulp.task('default', [任务1， 任务2， 任务3...])
    4. 如何启动任务
      gulp 任务名  例如: gulp jshint
      默认任务  gulp
    5. gulp任务可以是同步也可以是异步
      - 加return就是异步
      - 不加return就是同步
 */
//引入插件
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const opn = require('opn');


//配置插件任务

//语法检查
gulp.task('jshint', () => {
  return gulp.src('./src/js/*.js')   //将指定目录下所有js文件全部导入到gulp的流中
    .pipe(jshint({
      esversion: 6
    }))   //对gulp流中的文件做了语法检查
    .pipe(jshint.reporter('default'))  //将语法检查的错误在控制台打印输出
    .pipe(livereload());
})
//语法转化
gulp.task('babel', ['jshint'], () => {
  return gulp.src('src/js/*.js')
    .pipe(babel({   //对gulp流中的文件做了语法转化
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js'))  //将gulp流中的文件输出到指定目录中
    .pipe(livereload());
});
//browserify 将commonjs模块化语法转化为浏览器能识别的语法
gulp.task('browserify', ['babel'], function() {
  // Single entry point to browserify
  return gulp.src('build/js/index.js')
    .pipe(browserify())  //将commonjs模块化语法转化为浏览器能识别的语法
    .pipe(rename('built.js'))  //将gulp流中的文件重命名
    .pipe(gulp.dest('./build/js')) //将gulp流中的文件输出到指定目录中
    .pipe(livereload());
});
//压缩js
gulp.task('uglify', ['browserify'], function () {
  return gulp.src('build/js/built.js')
    .pipe(uglify())  //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});
//编译less成css
gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload());
});
//合并css样式
gulp.task('concat', ['less'], function() {
  return gulp.src(['./build/css/test1.css', './build/css/test2.css'])
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload());
});
//压缩css
gulp.task('cssmin', ['concat'], function () {
  gulp.src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});
//压缩html
gulp.task('htmlmin', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,  //去除空格
      removeComments: true      //删除注释
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});
//自动执行任务，编译代码
gulp.task('watch', function() {
  /*
   1. 在所有可能要执行任务后面加上 .pipe(livereload());
   2. 配置watch任务
 */
  livereload.listen();
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true  // 自动刷新
  });
  //自动打开浏览器
  opn('http://localhost:3000/index.html');
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('./src/less/*.less', ['cssmin']);
  gulp.watch('./src/js/*.js', ['uglify']);
  gulp.watch('./src/index.html', ['htmlmin']);
});

//配置默认任务
gulp.task('default', ['uglify', 'cssmin', 'htmlmin', 'watch'])  //gulp运行
gulp.task('myTask', ['uglify', 'cssmin', 'htmlmin', 'watch'])  // gulp myTask运行