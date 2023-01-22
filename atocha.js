import swear from "swear";
import { promisify } from "util";
import { exec } from "child_process";

const newExec = promisify(exec);

export default (command, buffer = 10) => {
  const maxBuffer = buffer * 1024 * 1024;
  return swear(
    newExec(command, { maxBuffer }).then((out) => {
      if (out.stderr) throw new Error(out.stderr);
      return out.stdout.trim();
    })
  );
};
