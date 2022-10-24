import path from "path";
import fs, { promises as fsPromises } from "fs";

import applyVajra from "./runVScript";

async function run() {
  const dirs = await fsPromises.opendir("./");
  const filesAndFolders: string[] = [];

  for await (const dirent of dirs) {
    filesAndFolders.push(dirent.name);
  }

  const defaultConfigPath = "vconfig.json";
  const doesContainConfigFile = filesAndFolders.includes(defaultConfigPath);
  let vajraScriptContainer = "scripts";
  const folderPath = String(__dirname).slice(0, -4);
  if (doesContainConfigFile) {
    const configPath = path.join(folderPath + `/${defaultConfigPath}`);
    const fileString = fs.readFileSync(configPath, "utf8");
    const config = JSON.parse(fileString);

    const vajraDir = config?.source || "scripts";

    if (vajraDir) {
      vajraScriptContainer = vajraDir;
    }
  }

  if (!filesAndFolders.includes(vajraScriptContainer)) {
    console.log(
      "Could not find scripts folder. Create a folder named script or provide a source property in vconfig.json"
    );
  }

  // find out file names in Vajra's script folder
  const vajraFolderEntries = await fsPromises.opendir(
    `./${vajraScriptContainer}`
  );
  const vajraFileNames: string[] = [];

  for await (const ventry of vajraFolderEntries) {
    vajraFileNames.push(ventry.name);
  }

  const inputFunc = "test";

  // check whether traget function was provided
  if (!inputFunc) {
    console.log("Missing target function to apply vajra upon🤨");
  }

  let suffix = "ts";

  if (vajraFileNames.includes(`${inputFunc}.js`)) {
    suffix = "js";
  } else if (vajraFileNames.includes(`${inputFunc}.ts`)) {
    suffix = "ts";
  } else {
    console.log("Vajra could not locate the target function you provided🧐");
  }

  const scriptFilePath = path.join(folderPath + `/${vajraScriptContainer}/${inputFunc}.${suffix}`);
  await applyVajra(scriptFilePath);
}

run();
