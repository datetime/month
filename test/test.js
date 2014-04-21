/**
 * month <https://github.com/jonschlinkert/month>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

const expect = require('chai').expect;
const month = require('../');


describe('month()', function () {

  it('should return an object with the number and name of the current month', function (done) {
    var actual = month();

    expect(actual).to.have.keys(['num', 'name']);
    done();
  });

  it('should return the current month name', function (done) {
    var actual = month().name;
    expect(actual).to.be.a('string');
    done();
  });

  it('should return the current month number', function (done) {
    var actual = month().num;
    expect(actual).to.be.a('number');
    done();
  });

  it('should return the given month', function (done) {
    var actual = month(1).name;
    expect(actual).to.equal('January');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(2).name;
    expect(actual).to.equal('February');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(3).name;
    expect(actual).to.equal('March');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(4).name;
    expect(actual).to.equal('April');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(5).name;
    expect(actual).to.equal('May');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(6).name;
    expect(actual).to.equal('June');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(7).name;
    expect(actual).to.equal('July');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(8).name;
    expect(actual).to.equal('August');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(9).name;
    expect(actual).to.equal('September');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(10).name;
    expect(actual).to.equal('October');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(11).name;
    expect(actual).to.equal('November');
    done();
  });
  it('should return the given month', function (done) {
    var actual = month(12).name;
    expect(actual).to.equal('December');
    done();
  });
});