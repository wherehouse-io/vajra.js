import { spawn } from "child_process";

function applyVajra(scriptFilePath: string) {
  return new Promise((resolve, reject) => {
    const vajraChildProcess = spawn("npx", ["ts-node", scriptFilePath]);
    
    vajraChildProcess.stdout.on("data", data => {
        console.log(`info: ${data}`);
    });
    
    vajraChildProcess.stderr.on("data", data => {
        console.log(`error: ${data}`);
    });
    
    vajraChildProcess.on('error', (error) => {
        console.log(`crash: ${error.message}`);
        reject(error);
    });
    
    vajraChildProcess.on("close", code => {
        console.log(`success: child process exited with code ${code}`);
        resolve(code);
    });
  });
}

export default applyVajra;
