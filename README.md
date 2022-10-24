# vajra.js
Tool to generate React UI that runs, monitors and logs NodeJS based script

Proposed Scope:
1. Script will have a basic template usually a function in TypeScript that needs to be run in BE
2. Script should be available within a folder dedicated to vajra script(let's call it vscript)
3. Based on what is inside the "vscripts" folder the following steps will take place:
  4. For each script in the folder React Front end will show name parameter (Advanced: A basic validation on parameter data type)
  5. button: Run Script, Stop Execution, Show Logs(Advanced)
  6. Advanced: Show Script Execution History(Can be collected from log files)
7. Advanced: A websocket based Live Log Visualisation
8. Advanced: Live Logs will be stored in production machine and will be shown in FE as well.

## Basic Implementation
* Read files in vscripts folder
  * For each script assign a script id
  * in case redis is there use it as database
  * Advanced: We can make use of Dynamo DB in future to store and retrieve script data
* APIs -
  * Expose API that start, stops the script execution
  * API to poll for script status

## Running Test Vajra
```
  npm run index.ts
```
