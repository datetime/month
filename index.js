/**
 * month <https://github.com/jonschlinkert/month>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

var repeat = require('repeat-string');
var isNumber = require('is-number');
var months = require('months');

module.exports = function month(val) {
  var mo = new Date().getMonth();
  if (typeof val === 'undefined') {
    return mo;
  }

  // moment conventions
  if (typeof val === 'string') {
    if (val === 'M') {
      return mo;
    }
    if (val === 'MM') {
      return repeat('0', 2 - String(mo).length) + mo;
    }
    if (val === 'MMM') {
      return months.abbr[mo];
    }
    if (val === 'MMMM') {
      return months[mo];
    }
  }

  if (isNumber(+val)) {
    return months[val - 1];
  }
  return months.indexOf(val) + 1;
};
