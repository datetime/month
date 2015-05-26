/**
 * month <https://github.com/jonschlinkert/month>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var months = require('months');
var repeat = require('repeat-string');
var month = require('./');

describe('patterns', function () {
  it('should return the current month number', function () {
    assert.equal(typeof month('M') === 'number', true);
    assert.equal(month('M'), new Date().getMonth(), true);
  });

  it('should zero-fill the current month number', function () {
    assert.equal(typeof month('MM') === 'string', true);
    var mo = new Date().getMonth();
    var res = repeat('0', 2 - String(mo).length) + mo;
    assert.equal(month('MM'), res, true);
  });

  it('should return the current month abbreviation', function () {
    assert.equal(typeof month('MMM') === 'string', true);
    assert.equal(month('MMM'), months.abbr[new Date().getMonth()], true);
  });

  it('should return the current full month name', function () {
    assert.equal(typeof month('MMMM') === 'string', true);
    assert.equal(month('MMMM'), months[new Date().getMonth()], true);
  });
});
describe('month()', function () {
  it('should return an object with the number and name of the current month', function () {
    assert.equal(month(), new Date().getMonth(), true);
  });
  it('should return the current month name', function () {
    assert.equal(typeof month(12) === 'string', true);
  });
  it('should return the current month number', function () {
    assert.equal(typeof month('December') === 'number', true);
  });

  it('should return the given month', function () {
    assert.equal(month(1), 'January', true);
    assert.equal(month(2), 'February', true);
    assert.equal(month(3), 'March', true);
    assert.equal(month(4), 'April', true);
    assert.equal(month(5), 'May', true);
    assert.equal(month(6), 'June', true);
    assert.equal(month(7), 'July', true);
    assert.equal(month(8), 'August', true);
    assert.equal(month(9), 'September', true);
    assert.equal(month(10), 'October', true);
    assert.equal(month(11), 'November', true);
    assert.equal(month(12), 'December', true);
  });

  it('should return the given number', function () {
    assert.equal(month('January'), 1, true);
    assert.equal(month('February'), 2, true);
    assert.equal(month('March'), 3, true);
    assert.equal(month('April'), 4, true);
    assert.equal(month('May'), 5, true);
    assert.equal(month('June'), 6, true);
    assert.equal(month('July'), 7, true);
    assert.equal(month('August'), 8, true);
    assert.equal(month('September'), 9, true);
    assert.equal(month('October'), 10, true);
    assert.equal(month('November'), 11, true);
    assert.equal(month('December'), 12, true);
  });
});
