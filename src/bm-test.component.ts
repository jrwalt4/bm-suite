import {Component, Input, Output, EventEmitter} from '@angular/core'
import {BmTest} from './bm-test'

@Component({
  selector:'bm-test',
  template:
  `
    <div class="bm-test">
      <form id={{getName()}}>
        <label for="name">Test Name</label>
        <input type="text" name="name" [(ngModel)]="test.name"/>
        <div class="form-group">
          <textarea name="fn" class="code" [(ngModel)]="test.fn"></textarea>
        </div>
        <div class="form-group">
          <label for="async">Async</label>
          <input type="checkbox" name="async" [(ngModel)]="test.async"/>
          <br>
        </div>
        <button (click)="onRemoveTest.emit(test)">Delete</button>
      </form>
    </div>
  `,
  styles:[
  `
    .bm-test {
      outline:1px solid black;
      display:inline-block;
      vertical-align:top;
    }
  `
  ]
})
export class BmTestComponent {
  name:string;
  @Input() test:BmTest
  @Output() onTestChange = new EventEmitter()
  @Output() onRemoveTest = new EventEmitter()
  
  constructor(){}
  
  getMessage():string {
    if(this.test){
      return "Benchmark Test: "+this.test.name;
    }
    return "";
  }
  
  getName():string {
    return this.test.name;
  }
}