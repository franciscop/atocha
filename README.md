# Atocha

Tiny exec() with magic-promises and trim():

```js
import run from 'atocha';

(async () => {
  // Note: Not a typo
  console.log(await run('ls').split('\n'));
})();
```

See [magic-promises](https://github.com/franciscop/magic-promises) for that neat `.split()` just after the run.
