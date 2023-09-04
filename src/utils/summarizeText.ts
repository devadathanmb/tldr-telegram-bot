import { spawn } from "child_process";
import { resolve } from "path";

export function summarizeText(
  message: string,
  callback: (summary: string) => void,
): void {
  try {
    const pythonScriptPath = resolve(
      __dirname,
      "../../python-scripts/summarize.py",
    );
    const pythonProcess = spawn("python", [pythonScriptPath, message]);

    let summary = "";

    pythonProcess.stdout.on("data", (data) => {
      summary = data.toString();
      callback(summary);
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python script error: ${data}`);
      callback("Error. Could not summarize message.");
    });
  } catch (error) {
    console.error(error);
    callback("Error. Could not summarize message.");
  }
}
