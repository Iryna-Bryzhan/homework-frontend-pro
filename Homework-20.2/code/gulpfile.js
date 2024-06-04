const { src, dest, watch, series, parallel } = require("gulp");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const clean = require("gulp-clean");
const babel = require("gulp-babel");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const scss = gulpSass(sass);
const ssi = require("gulp-ssi");
const browserSync = require("browser-sync").create();
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const minifyHtml = require("gulp-minify-html");

const APP_FOLDER = "./app/";
const BUILD_FOLDER = "./dist/";
const SCRIPTS_FOLDER = `${APP_FOLDER}js/`;
const UTILS_FOLDER = `${SCRIPTS_FOLDER}utils/`;
const STYLES_FOLDER = `${APP_FOLDER}styles/`;
const PARTS_FOLDER = `${APP_FOLDER}parts/`;
const IMAGES_FOLDER = `${APP_FOLDER}images/`;

async function cleanDist() {
  return clean(`${BUILD_FOLDER}**/*`, { force: true });
}

function html() {
  return src(`${APP_FOLDER}*.html`)
    .pipe(ssi())
    .pipe(minifyHtml())
    .pipe(dest(`${BUILD_FOLDER}`))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([`${UTILS_FOLDER}*.js`, `${SCRIPTS_FOLDER}*.js`])
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(`${BUILD_FOLDER}js`))
    .pipe(browserSync.stream());
}

function styles() {
  return src(`${STYLES_FOLDER}*.scss`)
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest(`${BUILD_FOLDER}css`))
    .pipe(browserSync.stream());
}

function images() {
  return src(`${IMAGES_FOLDER}**/*`)
    .pipe(newer(`${BUILD_FOLDER}images`))
    .pipe(imagemin())
    .pipe(dest(`${BUILD_FOLDER}images`))
    .pipe(browserSync.stream());
}

function watcher() {
  browserSync.init({
    server: {
      baseDir: BUILD_FOLDER,
    },
  });
  watch(`${SCRIPTS_FOLDER}*.js`, scripts);
  watch(`${STYLES_FOLDER}*.scss`, styles);
  watch(`${APP_FOLDER}*.html`, html);
  watch(`${PARTS_FOLDER}*.html`, html);
  watch(`${IMAGES_FOLDER}**/*`, images);
}

exports.build = series(cleanDist, parallel(html, styles, scripts, images));
exports.default = series(parallel(html, styles, scripts, images), watcher);
