import { promisify } from "util";
import { exec } from "child_process";

const newExec = promisify(exec);

export default (command: string, buffer = 10): Promise<string> => {
  const maxBuffer = buffer * 1024 * 1024;
  return newExec(command, { maxBuffer }).then(({ stdout, stderr }) => {
    if (stderr) throw new Error(stderr.toString());
    return stdout.toString().trim();
  });
};
