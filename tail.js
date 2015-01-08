(function() {
  var scroll = function() {
    var w = window,
      b = w.document.body,
      d = w.document.documentElement,
      top = b.scrollTop,
      height = b.scrollHeight

    if(d.scrollTop) {
      top = d.scrollTop
      height = d.scrollHeight
    }

    return {
      top: top,
      height: height,
      bottom: w.innerHeight + top === height
    }
  }

  window.tail = function(str) {
    var bottom = scroll().bottom
    document.write(str)
    if(bottom) window.scrollTo(0, scroll().height)
  }
}())
