var tape = require('tape')
var concat = require('concat-stream')
var log = require('./')

tape('uses tail function', function(t) {
  var l = log()

  l.pipe(concat(function(str) {
    t.ok(str.toString().indexOf('tail(') > -1, 'uses tail function')
    t.end()
  }))

  l.write('hello')
  l.end()
})