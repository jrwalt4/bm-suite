//our root app component
import {Component, ViewChild} from '@angular/core'
import {Store} from '@ngrx/store'

import {Observable} from 'rxjs'

import Benchmark = require('benchmark');

import {BmTestComponent} from './bm-test.component'
import {BmResultsComponent} from './bm-results.component'
import {BmTest} from './bm-test'
import {BmActions, reducer} from './bm-reducer'

@Component({
  selector: 'bm-test-list',
  template: 
  `
    <div>
      <button (click)="runTests()" [disabled]="running$ | async">Run Tests</button><br>
      <label>Setup Code</label>
      <textarea></textarea>
      <br>
      <bm-test 
        *ngFor="let test of tests$ | async" 
        [test]="test"
        (onTestChange)="changeTest($event)"
        (onRemoveTest)="removeTest($event)">
      </bm-test>
      <br>
      <button (click)="newTest()">Add Test</button>
    </div>
  `
})
export class BmTestListComponent {
  tests$:Observable<BmTest[]>
  running$:Observable<boolean>

  constructor(private store:Store<any>) {
    this.tests$ = store.select('tests');
    this.running$ = store.select('isRunning');
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
        let suite = <Benchmark[]>resultEvent.currentTarget;
        let tests:Benchmark[] = [];
        for(let test of suite) {
          tests.push(test)
        }
        // need sorting algorithm
        tests.slice().sort((test1:Benchmark, test2:Benchmark)=>{
          return test2.compare(test1)
        }).forEach((test, i)=>{
          tests[tests.indexOf(test)].stats.rank = i + 1;
        })
        this.store.dispatch(BmActions.testsComplete(tests))
      }).catch(err=>{
        alert(err.message)
      })
    })
  }
}