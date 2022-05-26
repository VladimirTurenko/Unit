var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('Valid addition', function() {
    calculator.previousTotal = 21;
    calculator.add(22);
    assert.equal(calculator.runningTotal, 43);
  })
  
   it('Valid addition Two Zeros', function() {
    calculator.previousTotal = 0;
    calculator.add(0);
    assert.equal(calculator.runningTotal, 0);
  })
  
  it('Addition left argument 0', function() {
    calculator.previousTotal = 0;
    calculator.add(31);
    assert.equal(calculator.runningTotal, 31);
  })
  
  it('Limit value check right 0', function() {
    calculator.previousTotal = 6;
    calculator.add(0);
    assert.equal(calculator.runningTotal, 6);
  })
  
   it('Checking the right boundary of additions', function() {
    calculator.previousTotal = 125000;
    calculator.add(125000);
    assert.equal(calculator.runningTotal, 250000);
  })

  it('should be able to subtract', function() {
    calculator.previousTotal = 41;
    calculator.subtract(20);
    assert.equal(calculator.runningTotal, 21);
  })
  
  it('Subtraction check 0', function() {
    calculator.previousTotal = 100;
    calculator.subtract(0);
    assert.equal(calculator.runningTotal, 100);
  })

  it('subtraction of negative numbers', function() {
    calculator.previousTotal = -100;
    calculator.subtract(5);
    assert.equal(calculator.runningTotal, -105);
  })

   it('subtraction two negative numbers', function() {
    calculator.previousTotal = -100;
    calculator.subtract(-5);
    assert.equal(calculator.runningTotal, -95);
  })

  it('should be able to multiply', function() {
    calculator.previousTotal = 4;
    calculator.multiply(8);
    assert.equal(calculator.runningTotal, 32);
  })
  
   it('Checking multiplication by 0', function() {
    calculator.previousTotal = 8;
    calculator.multiply(0);
    assert.equal(calculator.runningTotal, 0);
  })

   it('Checking the Right Bound of Multiplication', function() {
    calculator.previousTotal = 3896;
    calculator.multiply(3896);
    assert.equal(calculator.runningTotal, 15178816);
  })

  it('Checking division by zero', function() {
    calculator.previousTotal = 2354;
    calculator.divide(0);
    assert.equal(calculator.runningTotal, 0);
  })
  
   it('should be able to divide', function() {
    calculator.previousTotal = 200;
    calculator.divide(25);
    assert.equal(calculator.runningTotal, 8);
  })
  
  it('Verification Zero is divided by the number', function() {
    calculator.previousTotal = 0;
    calculator.divide(4);
    assert.equal(calculator.runningTotal, 0);
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

  it('should use operator clicked +', function() {
    calculator.operatorClick('+');
    assert.equal(calculator.newTotal, true);
  })
  
   it('should use operator clicked -', function() {
    calculator.operatorClick('-');
    assert.equal(calculator.newTotal, true);
  })

  it('should be able to clear total when clearClick is called', function() {
    calculator.runningTotal = 42;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })
  
  it('should be able to clear total when clearClick is called =0',function() {
    calculator.runningTotal = 0;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })  

  it('should be able to clear previousOperator', function(){
  calculator.previousOperator = '=';
  calculator.clearClick();
  assert.equal(calculator.previousOperator, null);
})
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

});
