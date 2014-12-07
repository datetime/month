/**
 * month <https://github.com/jonschlinkert/month>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var isNumber = require('is-number');
var months = require('months');

module.exports = function month(num) {
  var mo = new Date().getMonth();

  if (typeof num === 'undefined') {
    return mo;
  }

  if (isNumber(+num)) {
    return months[num - 1];
  }

  if (typeof num !== 'string') {
    throw new Error('[months] expects a string or number, but got: ' + num);
  }

  return months.indexOf(num) + 1;
};
