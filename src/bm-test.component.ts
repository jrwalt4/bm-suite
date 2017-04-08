import { Component, Input, Output, EventEmitter } from '@angular/core'
import { BmTest } from './bm-test'

@Component({
  selector: 'bm-test',
  template:
  `
    <div class="bm-test well">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="name" class="control-label col-lg-3">Test Name:</label>
          <div class="col-lg-9">
          <input type="text" name="name" 
            [(ngModel)]="test.name" class="form-control"/>
          </div>
        </div>
        <div class="form-group">
          <label for="fn" class="control-label col-lg-3">Code:</label>
          <div class="col-lg-9">
            <textarea name="fn" class="code form-control col-lg-9" 
              [(ngModel)]="test.fn">
            </textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-4">
            <label for="async" class="control-label">
              <input type="checkbox" name="async" [(ngModel)]="test.async"/>
              Async
            </label>
          </div>
        </div>
        <button (click)="onRemoveTest.emit(test)" 
          class="btn btn-danger" role="button">Delete</button>
      </form>
    </div>
  `,
  styles: [
    `
    .bm-test {
      display:inline-block;
      vertical-align:top;
    }
  `
  ]
})
export class BmTestComponent {
  name: string;
  @Input() test: BmTest
  @Output() onTestChange = new EventEmitter()
  @Output() onRemoveTest = new EventEmitter()

  constructor() { }

  getMessage(): string {
    if (this.test) {
      return "Benchmark Test: " + this.test.name;
    }
    return "";
  }

  getName(): string {
    return this.test.name;
  }
}