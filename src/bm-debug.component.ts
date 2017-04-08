import {Component} from '@angular/core'
import {Store} from '@ngrx/store'

@Component({
  selector:'bm-debug',
  template:
  `
  <h2>App State:</h2>
  <pre>{{ state$ | async | json }}</pre>
  `
})
export class BmDebugComponent {
  state$:Store<any>
  constructor(private store:Store<any>) {
    this.state$ = store
  }
}