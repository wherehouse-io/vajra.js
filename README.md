# vajra.js
Tool to generate React UI that runs, monitors and logs NodeJS based script

Basic Scope(TBD in detail):
1. Script will have a basic template usually a function in TypeScript that needs to be run in BE
2. Script should be available within a folder dedicated to vajra script(let's call it vscript)
3. Based on what is inside the "vscripts" folder the following steps will take place:
  4. For each script in the folder React Front end will show name parameter (Advanced: A basic validation on parameter data type)
  5. button: Run Script, Stop Execution, Show Logs(Advanced)
  6. Advanced: Show Script Execution History(Can be collected from log files)
6. Advanced: A websocket based Live Log Visualisation
7. Advanced: Live Logs will be stored in production machine and will be shown in FE as well.
