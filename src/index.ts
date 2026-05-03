import swear, { type Swear } from "swear";
import { promisify } from "util";
import { exec } from "child_process";

const newExec = promisify(exec);

export default (command: string, buffer = 10): Swear<string> => {
  const maxBuffer = buffer * 1024 * 1024;
  return swear(
    newExec(command, { maxBuffer }).then(({ stdout, stderr }) => {
      if (stderr) throw new Error(stderr.toString());
      return stdout.toString().trim();
    })
  );
};
