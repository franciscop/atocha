# Atocha

> Terminal Atocha; Madrid's train station.

Run a command like it was your terminal. Tiny exec() with promises and trim():

```js
import run from 'atocha';

(async () => {
  console.log(await run('ls'));
  console.log(await run('ls').split('\n'));  // Not a typo
})();
```

See [magic-promises](https://github.com/franciscop/magic-promises) for that neat `.split()` just after the run.

Do **not** pass unsanitized input since there's no filtering going on. Great for quick scripts, for more robust but more cumbersome syntax try [execa](https://github.com/sindresorhus/execa).
