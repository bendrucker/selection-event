# selection-event [![Build Status](https://travis-ci.org/bendrucker/selection-event.svg?branch=master)](https://travis-ci.org/bendrucker/selection-event)

> value-event handler that transmits input selection state


## Install

```
$ npm install --save selection-event
```


## Usage

```js
var selectionEvent = require('selection-event')
var h = require('virtual-dom/h')

var vtree = h('input', {
  type: 'text',
  'ev-event': selectionEvent(handler)
})
// handler({selection: {start, end}})
```

## API

#### `selectionEvent(handler, [data])` -> `function`

##### handler

*Required*  
Type: `function`  
Arguments: `data`

A function called with the selection (and custom) data any time the configured event fires. 

```js
{
  selection: {
    start: 1,
    end: 3
  },
  // ...
}
```

##### data

Type: `object`  
Default: `{}`

Additional custom data to extend the default `{selection}` object. 


## License

MIT © [Ben Drucker](http://bendrucker.me)
