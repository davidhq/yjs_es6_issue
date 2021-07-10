import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

// Error:
//
// import { WebsocketProvider } from 'y-websocket';
//          ^^^^^^^^^^^^^^^^^
// SyntaxError: Named export 'WebsocketProvider' not found. The requested module 'y-websocket' is a CommonJS module, which may not support all module.exports as named exports.
// CommonJS modules can always be imported via the default export, for example using:

// import pkg from 'y-websocket';
// const { WebsocketProvider } = pkg;
