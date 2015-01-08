var fs = require('fs');
var path = require('path');
var through = require('through2')

var TAIL = fs.readFileSync(path.join(__dirname, 'tail.js'), 'utf-8');

module.exports = function(title) {
  var result = through(function(data, enc, cb) {
    cb(null, '<script>tail('+JSON.stringify(data.toString().replace(/<\//g, '<\\/'))+')</script>')
  }, function(cb) {
    cb(null, '</pre></body></html>')
  })

  result.push('<!doctype html><html><head><title>'+(title || 'log')+'</title><script>'+TAIL+'</script></head><body><pre>')
  return result
}
