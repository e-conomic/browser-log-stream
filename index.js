var through = require('through2')

module.exports = function(title) {
  var result = through(function(data, enc, cb) {
    cb(null, '<script>document.write('+JSON.stringify(data.toString().replace(/<\//g, '<\\/'))+')</script>')
  }, function(cb) {
    cb(null, '</pre></body></html>')
  })

  result.push('<!doctype html><html><head><title>'+(title || 'log')+'</title></head><body><pre>')
  return result
}
