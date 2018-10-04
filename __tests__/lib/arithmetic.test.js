'use strict';

const arithmetic = require('../../lib/arithmetic.js');
const faker = require('faker');

describe('arithmetic.js', () => {
  let a = faker.random.number();
  let b = faker.random.number();
  let c = faker.random.alphaNumeric();
  let d = faker.random.alphaNumeric();
  let sum = a + b;
  let difference = a - b;
  let multiply = a * b;
  let divide = a/b;
  
  while(c === Number || d === Number) {
    c = faker.random.alphaNumeric();
    d = faker.random.alphaNumeric();
  }

  it('requires inputs to be added', () => {
    let number = arithmetic.add(c,d);
    expect(number).toBeNull();
  });

  it('requires inputs to be added', () => {
    let number = arithmetic.add(a,b);
    expect(number).toEqual(sum);
  });

  it('requires inputs to be subtracted', () => {
    let number = arithmetic.subtract(c,d);
    expect(number).toBeNull();
  });

  it('requires inputs to be subtracted', () => {
    let number = arithmetic.subtract(a,b);
    expect(number).toEqual(difference);
  });

  it('requires inputs to be multiplied', () => {
    let number = arithmetic.multiply(c,d);
    expect(number).toBeNull();
  });

  it('requires inputs to be multiplied', () => {
    let number = arithmetic.multiply(a,b);
    expect(number).toEqual(multiply);
  });

  while(a === 0 || b === 0) {
    a = faker.random.number();
    b = faker.random.number();
  }

  it('requires inputs to be divided', () => {
    let number = arithmetic.divide(c,d);
    expect(number).toBeNull();
  });

  it('requires inputs to be divided', () => {
    let number = arithmetic.divide(a,b);
    expect(number).toEqual(divide);
  });
 

});