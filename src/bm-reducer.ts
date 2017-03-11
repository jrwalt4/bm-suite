import {BmTest} from './bm-test'

export const BmActionType = {
  ADD_TEST:'ADD_TEST',
  REMOVE_TEST:'REMOVE_TEST',
  CHANGE_TEST:'CHANGE_TEST',
  RUN_TESTS:'RUN_TESTS',
  TESTS_COMPLETE:'TESTS_COMPLETE'
}

export namespace BmActions {
  export function addTest(testData?) {
    return {
      type:BmActionType.ADD_TEST,
      payload:testData
    }
  }
  export function removeTest(test){
    return {
      type:BmActionType.REMOVE_TEST,
      payload:test
    }
  }
  export function changeTest(newTestData) {
    return {
      type:BmActionType.CHANGE_TEST,
      payload:newTestData
    }
  }
  export function runTests() {
    return {
      type:BmActionType.RUN_TESTS
    }
  }
  export function testsComplete(results) {
    return {
      type:BmActionType.TESTS_COMPLETE,
      payload:results
    }
  }
}

let initialState = {
  tests:[
    new BmTest()
  ],
  isRunning:false,
  results:void 0
}

export function reducer(state = initialState, action:any) {
  if(action) {
    switch(action.type) {
      case BmActionType.ADD_TEST: {
        let newTest = action.payload || new BmTest();
        let newTestArray = state.tests.concat(newTest);
        return Object.assign({},state, {tests:newTestArray})
      }
      case BmActionType.REMOVE_TEST: {
        let newTestArray = state.tests.filter((test)=>{
          return !compareTests(test, action.payload);
        });
        return Object.assign({}, state, {tests:newTestArray})
      }
      case BmActionType.CHANGE_TEST: {
        let newTestArray = state.tests.map((test)=>{
          return compareTests(test, action.payload)? action.payload : test;
        });
        return Object.assign({}, state, {tests:newTestArray})
      }
      case BmActionType.RUN_TESTS:{
        return Object.assign({},state, {
          isRunning:true,
          results:void 0
        })
      }
      case BmActionType.TESTS_COMPLETE: {
        let results = action.payload;
        return Object.assign({}, state, {
          isRunning:false,
          results
        })
      }
    }
  }
  return state;
}

function compareTests(test1, test2):boolean {
  return test1 == test2
}