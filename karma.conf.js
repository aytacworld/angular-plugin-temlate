module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    client: {
      clearContext: false
    },

    mime: { 'text/x-typescript': ['ts', 'tsx'] },
    files: [
      { pattern: 'main.spec.ts', watched: false }
    ],

    preprocessors: {
      'main.spec.ts': ['webpack', 'coverage'],
    },

    reporters: ['spec', 'kjhtml', 'coverage'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'], // options: 'Chrome' 'PhantomJS'
    singleRun: false,

    webpack: {
      resolve: {
        extensions: ['.js', '.ts']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            loaders: [
              { loader: 'awesome-typescript-loader', options: { configFileName: 'tsconfig.spec.json' } },
              'angular2-template-loader'
            ]
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            test: /\.(sass|scss)$/,
            loader: [
              'to-string-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      devtool: 'inline-source-map',
      stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
      }
    }
  })
}
