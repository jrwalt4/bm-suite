import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'

@Component({
  selector:'bm-results',
  template:`
  <div *ngIf="results$ | async">
    <table>
      <tr>
        <th>Test</th><th>Speed</th><th>Rank</th>
      </tr>
      <tr *ngFor="let test of results$ | async">
        <td>{{test.name}}</td>
        <td>{{test.stats.mean | number:'1.2-10'}}</td>
        <td>{{test.stats.rank}}</td>
      </tr>
    </table>
  </div>
  <div *ngIf="running$ | async" >
    <img 
      src="http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_gray_512.gif"
      width="100">
  </div>
  `,
  styles:[
    'table{border-collapse:collapse}',
    'td, th{border:1px solid black}'
  ]
})
export class BmResultsComponent {
  
  results$:Observable<{}>
  running$:Observable<boolean>
  
  constructor(private store:Store<any>){
    this.results$ = store.select('results');
    this.running$ = store.select('isRunning');
  }
}