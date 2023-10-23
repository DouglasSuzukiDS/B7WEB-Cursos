const { src, dest, parallel } = require('gulp')
const named = require('vinyl-named')
const ts = require('gulp-typescript')

const tsProject = ts.createProject('tsconfig.json')

function html() {
   return src('src/index.html')
      .pipe(dest('public/'))
}

function js() {
   return tsProject.src()
      .pipe(named())
      .pipe(tsProject())
      .pipe(dest('public/'))
}
// gulp => Esse comando vai compilar os arquivos

exports.default = parallel(html, js)