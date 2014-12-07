/**
 * month <https://github.com/jonschlinkert/month>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var month = require('./');

describe('month()', function () {
  it('should return an object with the number and name of the current month', function () {
    month().should.equal(new Date().getMonth());
  });
  it('should return the current month name', function () {
    month(12).should.be.a.string;
  });
  it('should return the current month number', function () {
    month('December').should.be.a.number;
  });

  it('should return the given month', function () {
    month(1).should.equal('January');
    month(2).should.equal('February');
    month(3).should.equal('March');
    month(4).should.equal('April');
    month(5).should.equal('May');
    month(6).should.equal('June');
    month(7).should.equal('July');
    month(8).should.equal('August');
    month(9).should.equal('September');
    month(10).should.equal('October');
    month(11).should.equal('November');
    month(12).should.equal('December');
  });

  it('should return the given number', function () {
    month('January').should.equal(1);
    month('February').should.equal(2);
    month('March').should.equal(3);
    month('April').should.equal(4);
    month('May').should.equal(5);
    month('June').should.equal(6);
    month('July').should.equal(7);
    month('August').should.equal(8);
    month('September').should.equal(9);
    month('October').should.equal(10);
    month('November').should.equal(11);
    month('December').should.equal(12);
  });
});