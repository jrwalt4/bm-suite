import {Injectable} from '@angular/core'
import {toPlainObject as toObject, sample} from 'lodash'
let counter = 0;

export class BmTest {
  name:string = "Test "+ (++counter)
  fn:string = sample(sampleTests)
  async = true
  
  getOptions():{} {
    return toObject(this);
  }
  
}

let sampleTests = [
  "Math.sin(2)",
  "Math.sqrt(2)",
  "Math.asin(2)"
]