var tape = require('tape')
var concat = require('concat-stream')
var log = require('./')

tape('uses document.write', function(t) {
  var l = log()

  l.pipe(concat(function(str) {
    t.ok(str.toString().indexOf('document.write') > -1, 'uses document write')
    t.end()
  }))

  l.write('hello')
  l.end()
})