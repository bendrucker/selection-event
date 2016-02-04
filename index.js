'use strict'

var Base = require('value-event/base-event')
var extend = require('xtend')

module.exports = Base(handler)

function handler (event, broadcast) {
  var target = event.target
  var selection = {
    start: target.selectionStart,
    end: target.selectionEnd
  }

  broadcast(extend({selection: selection}, this.data))
}
