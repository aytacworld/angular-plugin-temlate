export default {
  dest: 'dist/bundles/angular-plugin-template.umd.js',
  entry: 'dist/index.js',
  format: 'umd',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs': 'rxjs'
  },
  moduleName: 'ng.simpleForms',
  sourceMap: false,
  external: [ '@angular/core', 'rxjs' ]
}
