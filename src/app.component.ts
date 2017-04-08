//our root app component
import {Component, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'app',
  template:
  `
    <div class="jumbotron">
      <h1>{{name}}</h1>
    </div>
    <div>
      <bm-test-list></bm-test-list>
      <bm-results></bm-results>
      <bm-debug></bm-debug>
    </div>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  name = "Benchmark Testing"
}