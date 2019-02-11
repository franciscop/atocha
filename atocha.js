const swear = require('swear');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

export default (command, buffer = 10) => {
  const maxBuffer = buffer * 1024 * 1024;
  return swear(exec(command, { maxBuffer }).then(out => {
    if (out.stderr) throw new Error(out.stderr);
    return out.stdout.trim();
  }));
};
