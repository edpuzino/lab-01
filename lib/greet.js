'use strict';

let greet = module.exports = {};

greet.sayHello = function(a) {
  if( typeof a != 'string') { return null; }
  return 'hello ' + a;
};