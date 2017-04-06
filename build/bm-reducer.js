"use strict";
exports.__esModule = true;
var bm_test_1 = require("./bm-test");
exports.BmActionType = {
    ADD_TEST: 'ADD_TEST',
    REMOVE_TEST: 'REMOVE_TEST',
    CHANGE_TEST: 'CHANGE_TEST',
    RUN_TESTS: 'RUN_TESTS',
    TESTS_COMPLETE: 'TESTS_COMPLETE'
};
var BmActions;
(function (BmActions) {
    function addTest(testData) {
        return {
            type: exports.BmActionType.ADD_TEST,
            payload: testData
        };
    }
    BmActions.addTest = addTest;
    function removeTest(test) {
        return {
            type: exports.BmActionType.REMOVE_TEST,
            payload: test
        };
    }
    BmActions.removeTest = removeTest;
    function changeTest(newTestData) {
        return {
            type: exports.BmActionType.CHANGE_TEST,
            payload: newTestData
        };
    }
    BmActions.changeTest = changeTest;
    function runTests() {
        return {
            type: exports.BmActionType.RUN_TESTS
        };
    }
    BmActions.runTests = runTests;
    function testsComplete(results) {
        return {
            type: exports.BmActionType.TESTS_COMPLETE,
            payload: results
        };
    }
    BmActions.testsComplete = testsComplete;
})(BmActions = exports.BmActions || (exports.BmActions = {}));
var initialState = {
    tests: [
        new bm_test_1.BmTest()
    ],
    isRunning: false,
    results: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action) {
        switch (action.type) {
            case exports.BmActionType.ADD_TEST: {
                var newTest = action.payload || new bm_test_1.BmTest();
                var newTestArray = state.tests.concat(newTest);
                return Object.assign({}, state, { tests: newTestArray });
            }
            case exports.BmActionType.REMOVE_TEST: {
                var newTestArray = state.tests.filter(function (test) {
                    return !compareTests(test, action.payload);
                });
                return Object.assign({}, state, { tests: newTestArray });
            }
            case exports.BmActionType.CHANGE_TEST: {
                var newTestArray = state.tests.map(function (test) {
                    return compareTests(test, action.payload) ? action.payload : test;
                });
                return Object.assign({}, state, { tests: newTestArray });
            }
            case exports.BmActionType.RUN_TESTS: {
                return Object.assign({}, state, {
                    isRunning: true,
                    results: []
                });
            }
            case exports.BmActionType.TESTS_COMPLETE: {
                var results = action.payload;
                return Object.assign({}, state, {
                    isRunning: false,
                    results: results
                });
            }
        }
    }
    return state;
}
exports.reducer = reducer;
function compareTests(test1, test2) {
    return test1 == test2;
}
