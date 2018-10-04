'use strict';

const greet = require('../../lib/greet.js');
const faker = require('faker');


describe('greet.js', () => {
  let a = faker.name();
  let b = 'hello ' + a;
  let c = 'world';
  let d = 'hello world';
  
  it('requires input to be a name', () => {
    let name = greet.sayHello(a);
    expect(name).toEqual(b);
  });

  it('requires input to be a name', () => {
    let name = greet.sayHello(c);
    expect(name).toEqual(d);
  });

})

