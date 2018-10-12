# Atocha [![npm install atocha](https://img.shields.io/badge/npm%20install-atocha-blue.svg)](https://www.npmjs.com/package/atocha) [![gzip size](https://img.badgesize.io/franciscop/atocha/master/atocha.min.js.svg?compression=gzip)](https://github.com/franciscop/atocha/blob/master/atocha.min.js) [![dependencies](https://img.shields.io/badge/dependencies-0-green.svg)](https://github.com/franciscop/atocha/blob/master/package.json)

> Terminal Atocha; Madrid's train station.

Run a command in your terminal. Tiny exec() with promises and trim() for Node.js:

```js
import run from 'atocha';

(async () => {
  console.log(await run('ls'));
  console.log(await run('ls').split('\n'));  // Not a typo
})();
```

See [magic-promises](https://github.com/franciscop/magic-promises) for that neat `.split()` just after the run.

> Note: Do **not** pass unsanitized input since there's no filtering going on. Great for quick scripts, for more robust but slightly more complex syntax try [execa](https://github.com/sindresorhus/execa).

Feel free to pipe the output or perform more complex operations:

```js
const uniq = await run(`sort record.txt | uniq`);
const rest = await run(`cat records.txt | head -7 | tail -5`);
```

## Getting started

Install it:

```
npm install atocha
```

Import it to be able to use it in your code:

```js
const run = require('atocha');  // Old school
import run from 'atocha';       // New style
```



## Example

Parsing this package's information:

```js
const out = await run(`npm info atocha --json`);
const info = JSON.parse(out);
console.log(info.name + '@' + info.version);
// atocha@1.0.0
```
