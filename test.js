'use strict'

var test = require('tape')
var document = require('global/document')
var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var dispatch = require('dispatch-event')
var Delegator = require('dom-delegator')
var selectionEvent = require('./')

test(function (t) {
  t.plan(1)

  Delegator()

  var vtree = render()
  var root = createElement(vtree)
  document.body.appendChild(root)

  root.selectionStart = 1
  root.selectionEnd = 3

  dispatch(root, 'click')

  function onEvent (data) {
    t.deepEqual(data, {
      foo: 'bar',
      selection: {
        start: 1,
        end: 3
      }
    })
  }

  function render () {
    return h('input', {
      type: 'text',
      'ev-event': selectionEvent(onEvent, {foo: 'bar'})
    })
  }
})
