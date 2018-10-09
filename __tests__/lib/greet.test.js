'use strict';

const greet = require('../../lib/greet.js');
const faker = require('faker');


describe('greet.js', () => {
  let randomName = faker.name.findName();
  let array = [3,6,9];
  let helloName = 'hello ' + randomName;
  let world = 'world';
  let helloWorld = 'hello world';
  
  it('requires input to be a random name', () => {
    let name = greet.sayHello(randomName);
    expect(name).toEqual(helloName);
  });

  it('should display hello world', () => {
    let name = greet.sayHello(world);
    expect(name).toEqual(helloWorld);
  });

  it('should show null if not a string', () => {
    let name = greet.sayHello(array)
    expect(name).toBeNull();
  })
})

