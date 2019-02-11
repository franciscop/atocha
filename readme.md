# Atocha [![npm install atocha](https://img.shields.io/badge/npm%20install-atocha-blue.svg)](https://www.npmjs.com/package/atocha)

Run a command in your terminal. Tiny exec() with promises and trim() for Node.js:

```js
import cmd from 'atocha';

(async () => {
  // Any basic command will work
  console.log(await cmd('ls'));

  // Using a better Promise interface, see the lib `swear`
  console.log(await cmd('ls').split('\n'));

  // Can pipe commands as normal
  console.log(await cmd('sort record.txt | uniq'));
})();
```

> Terminal Atocha; Madrid's train station.

## Better `exec()`

- Automatic `.trim()` so you don't have to do it manually.
- Higher max buffer. 10 MB instead of 200 KB.
- Await/Async Promise interface works as you know and love.
- Better error handling. `stderr` will _reject_ the promise with an error instance. Can be caught as normal with `.catch()` or `try {} catch (error) {}`.
- Advanced [Promise interface](https://github.com/franciscop/swear) so you can concatenate operations easily.
- Full commands, commands with piping, etc. Note: Do **not** pass unsanitized input since there's no filtering going on. See [execa](https://github.com/sindresorhus/execa) for that.


## Getting started

Install it in your project:

```
npm install atocha
```

Import it to be able to use it in your code:

```js
const cmd = require('atocha');  // Old school
import cmd from 'atocha';       // New wave
```



## Examples

Parsing this package's information:

```js
const out = await cmd(`npm info atocha --json`);
const info = JSON.parse(out);
console.log(info.name + '@' + info.version);
// atocha@1.1.1
```
