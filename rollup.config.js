const pkg = require('./package.json');

export default {
  output: {
    file: 'dist/bundles/' + pkg.name + '.umd.js',
    format: 'umd'
  },
  input: 'dist/index.js',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs': 'rxjs'
  },
  name: 'ng.simpleForms',
  sourceMap: false,
  external: [ '@angular/core', 'rxjs' ]
}
