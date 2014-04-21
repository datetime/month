/**
 * month <https://github.com/jonschlinkert/month>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

module.exports = function (num) {
  var month = Number(num || new Date().getMonth());

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return {
    num: month,
    name: months[month - 1]
  }
};