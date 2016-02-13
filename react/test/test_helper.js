import jsdom from 'jsdom';
import chai from 'chai';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

function noop() {
  return null;
}

require.extensions['.styl'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.css'] = noop;

global.document = doc;
global.window = win;
global.__DEVELOPMENT__ = true

propagateToGlobal(win)

function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}
