//our root app component
import {Component, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'app',
  template:
  `
    <div>
      <h2>{{name}}</h2>
      <bm-results></bm-results>
      <bm-test-list></bm-test-list>
      <bm-debug></bm-debug>
    </div>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  name = "Benchmark Testing"
}