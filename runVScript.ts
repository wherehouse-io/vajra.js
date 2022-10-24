import { exec, spawn } from "child_process";

function applyVajra(scriptFilePath: string) {
  return new Promise((resolve, reject) => {
    const vajraChildProcess = spawn("npx", ["ts-node", scriptFilePath]);
    
    vajraChildProcess.stdout.on("data", data => {
        console.log(`[VAJRA] - stdout: ${data}`);
    });
    
    vajraChildProcess.stderr.on("data", data => {
        console.log(`[VAJRA] - stderr: ${data}`);
    });
    
    vajraChildProcess.on('error', (error) => {
        console.log(`[VAJRA] - error: ${error.message}`);
        reject(error);
    });
    
    vajraChildProcess.on("close", code => {
        console.log(`[VAJRA] - child process exited with code ${code}`);
        resolve(code);
    });
  });
}

export default applyVajra;
