import * as chai from 'chai';
// var assert = chai.assert
// var expect = chai.expect
const { assert, expect } = chai

var checkResult = "Hello"
var array = [1, 2, 3]

// assert.isString(array, "not a string")

// assert.isString(checkResult, "is a string")
// assert.isArray(array, "is a array")

expect(array).to.be.an("array").that.includes(3)