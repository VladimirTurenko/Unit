var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function() {
    calculator.previousTotal = 4;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 8);
  })

  it('should be able to subtract', function() {
    calculator.previousTotal = 4;
    calculator.subtract(2);
    assert.equal(calculator.runningTotal, 2);
  })

  it('should be able to multiply', function() {
    calculator.previousTotal = 2;
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 4);
  })

  it('should be able to divide', function() {
    calculator.previousTotal = 8;
    calculator.divide(4);
    assert.equal(calculator.runningTotal, 2);
  })

  it('should be able to concatenate the clicked number to the running total', function() {
    calculator.numberClick(4);
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 42);
  })

  it('should be able to clear running total on number click', function() {
    calculator.runningTotal = 42;
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 2);
  })

  it('should use operator clicked', function() {
    calculator.operatorClick('+');
    assert.equal(calculator.newTotal, true);
  })

  it('should be able to clear total when clearClick is called', function() {
    calculator.runningTotal = 42;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

  it('should be able to clear previousOperator', function(){
  calculator.previousOperator = '=';
  calculator.clearClick();
  assert.equal(calculator.previousOperator, null);
})


});
