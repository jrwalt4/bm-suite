import {Component} from '@angular/core'
import {Store} from '@ngrx/store'

@Component({
  selector:'bm-debug',
  template:
  `
  <p>App State:</p>
  <pre>{{ state$ | async | json }}</pre>
  `
})
export class BmDebugComponent {
  state$:Store<any>
  constructor(private store:Store<any>) {
    this.state$ = store
  }
}