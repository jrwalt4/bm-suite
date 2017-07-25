var angularVersion = '';
System.config({
  baseUrl: 'localhost:3000/',
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata:true
  },
  paths: {
    'npm:': './node_modules/'
    //'npm:': 'https://unpkg.com/'
  },
  //map tells the System loader where to look for things
  map: {

    'app': './src',

    'core-js':'npm:core-js/client/core.min.js',
    'zone.js':'npm:zone.js/dist/zone.min.js',
    'long-stack-trace-zone':'npm:zone.js/dist/long-stack-trace-zone.min.js',
    'Reflect':'npm:reflect-metadata/Reflect.js',

    '@angular/core': 'npm:@angular/core'+ angularVersion + '/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common' + angularVersion + '/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler' + angularVersion  + '/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http' + angularVersion + '/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router' + angularVersion +'/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms' + angularVersion + '/bundles/forms.umd.js',
    '@angular/animations': 'npm:@angular/animations' + angularVersion + '/bundles/animations.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations' + angularVersion + '/bundles/animations-browser.umd.js',
    
    '@angular/core/testing': 'npm:@angular/core' + angularVersion + '/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common' + angularVersion + '/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler' + angularVersion + '/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http' + angularVersion + '/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router' + angularVersion + '/bundles/router-testing.umd.js',

    '@ngrx/core': 'npm:@ngrx/core/bundles/core.min.umd.js',
    '@ngrx/store': 'npm:@ngrx/store/bundles/store.umd.min.js',

    'rxjs': 'npm:rxjs',
    'typescript': 'npm:typescript/lib/typescript.js',
    'tslib': 'npm:tslib',

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
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});