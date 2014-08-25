# browser-log-stream

Render a text stream progressively to the browser

```
npm install browser-log-stream
```

## Why?

Latest Chrome (and probably other browsers) doesn't render text streams progressively anymore.
This module uses a workaround where it wraps everything in a `document.write(data)`

This is useful if you want to pipe out a log stream to your browser

## Usage

``` js
var log = require('browser-log-stream')
var http = require('http')

var server = http.createServer(function(req, res) {
  someLiveStream.pipe(log()).pipe(res)
})

server.listen(9090)
```

## License

MIT
