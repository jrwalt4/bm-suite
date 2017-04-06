System.config({
  baseUrl: 'http://127.0.0.1:8080',
  paths: {
    'npm:': './node_modules/'
    //'npm:': 'https://unpkg.com/'
  },
  //map tells the System loader where to look for things
  map: {

    'app': './build',

    'core-js':'npm:core-js/client/core.min.js',
    'zone.js':'npm:zone.js/dist/zone.min.js',
    'long-stack-trace-zone':'npm:zone.js/dist/long-stack-trace-zone.min.js',
    'Reflect':'npm:reflect-metadata/Reflect.js',

    '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

    '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',

    '@ngrx/core': 'npm:@ngrx/core/bundles/core.min.umd.js',
    '@ngrx/store': 'npm:@ngrx/store/bundles/store.min.umd.js',

    'rxjs': 'npm:rxjs',
    'typescript': 'npm:typescript/lib/typescript.js',

    'lodash': 'npm:lodash/lodash.min.js',
    'benchmark': 'npm:benchmark/benchmark.js',
    'platform': 'npm:platform/platform.js'
  },
  meta: {
    'benchmark': {
      deps: [
        'lodash'
      ],
      format:'global'
    },
    '@angular/core':{
      deps: [
        'core-js',
        'zone.js',
        'long-stack-trace-zone',
        'Reflect',
      ]
    }
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});