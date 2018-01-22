'use strict';

var parseText = require('./parseText');

module.exports = function parseFirstname(source) {
  const parsed = parseText(source.replace(/<{2}.*/, ''), /^[A-Z<]+<*$/);
  return {
    value: parsed,
    start: 0,
    end: parsed.length
  };
};
