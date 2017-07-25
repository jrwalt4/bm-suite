//our root app component
import {Component, ViewChild} from '@angular/core'
import {Store} from '@ngrx/store'

import {Observable} from 'rxjs'

import Benchmark = require('benchmark');

import {BmTestComponent} from './bm-test.component'
import {BmResultsComponent} from './bm-results.component'
import {BmTest} from './bm-test'
import { BmActions, reducer, BmSuiteState } from './bm-reducer'

@Component({
  selector: 'bm-test-list',
  template: 
  `
    <form class="form-horizontal">
      <div class="form-group">
        <label class="control-label col-lg-2">Setup Code:</label>
        <div class="col-lg-10">
          <textarea class="form-control"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-lg-2">Teardown Code:</label>
        <div class="col-lg-10">
          <textarea class="form-control"></textarea>
        </div>
      </div>
    </form>
      <button (click)="runTests()" 
          [disabled]="running$ | async"
          class="btn btn-primary">
        Run Tests
      </button>
    <div>
      <bm-test 
        *ngFor="let test of tests$ | async" 
        [test]="test"
        (onTestChange)="changeTest($event)"
        (onRemoveTest)="removeTest($event)">
      </bm-test>
    </div>
    <button (click)="newTest()" class="btn btn-success">Add Test</button>
  `
})
export class BmTestListComponent {
  tests$:Observable<BmTest[]>
  running$:Observable<boolean>

  constructor(private store:Store<{state:BmSuiteState}>) {
    this.tests$ = store.select('state','tests');
    this.running$ = store.select('state','isRunning');
  }
  
  newTest() {
    this.store.dispatch(BmActions.addTest());
  }
  
  changeTest(test) {
    this.store.dispatch(BmActions.changeTest(test));
  }
  
  removeTest(test) {
    this.store.dispatch(BmActions.removeTest(test));
  }
  
  runTests() {
    this.store.dispatch(BmActions.runTests());
    let subs = this.tests$.subscribe(testArray=>{
      let suite = new Benchmark.Suite('test-suite');
      let runTestsPromise = new Promise((resolve, reject)=>{
        for (let test of testArray) {
          let testOptions = test.getOptions();
          suite.add(testOptions);
        }
        suite.on('complete', (e)=>resolve(e))
        suite.on('error', (e)=>reject(e))
        
        suite.run({
          async:true
        })
      }).then((resultEvent:Benchmark.Event)=>{
        subs.unsubscribe();
        let suite:Benchmark.Suite = <Benchmark.Suite>resultEvent.currentTarget;
        let results:Benchmark[] = suite.map(test=>{
          return {
            name:test.name,
            ...test.stats}
        });
        this.store.dispatch(BmActions.testsComplete(results))
      }).catch(err=>{
        alert(err.message)
      })
    })
  }
}