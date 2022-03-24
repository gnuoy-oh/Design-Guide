const rm = require("rimraf"),
  path = require("path"),
  chalk = require("chalk");

const destPath = path.resolve(__dirname, "./dist");

const cleanDistFolder = () => {
  rm(path.join(destPath, "*"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }

    console.log(chalk.white("  Clean Dist Folder\n"));

  });
}

const init = () => {
  cleanDistFolder();
}

init();