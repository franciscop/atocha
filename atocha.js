const magic = require('magic-promises');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

export default (com, buffer = 10) => {
  const maxBuffer = buffer * 1024 * 1024;
  return magic(exec(com, { maxBuffer }).then(out => {
    if (!out) return '';
    if (typeof out === 'string') return out.trim();
    if (out.stderr) throw new Error(out.stderr);
    return out.stdout.trim();
  }));
};
