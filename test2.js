import * as Y from 'yjs';

import pkg from 'y-websocket';
const { WebsocketProvider } = pkg;

// Error:
//
// ./node_modules/y-websocket/src/y-websocket.js:11
// import * as Y from 'yjs' // eslint-disable-line
// ^^^^^^

// SyntaxError: Cannot use import statement outside a module
//     at Object.compileFunction (node:vm:352:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1025:15)
//     at Module._compile (node:internal/modules/cjs/loader:1059:27)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:816:12)
//     at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:201:29)
//     at ModuleJob.run (node:internal/modules/esm/module_job:175:25)
//     at async Loader.import (node:internal/modules/esm/loader:178:24)
//     at async Object.loadESM (node:internal/process/esm_loader:68:5)
