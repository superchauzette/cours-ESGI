const fs = require("fs");
const _ = require("lodash");

let listFiles = [];

const writeJSON = array => {
  fs.writeFile("result.json", JSON.stringify(array), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

const getExtension = filename => {
  return filename.substring(filename.length - 3, filename.length);
};

const formatedList = listFiles => _.groupBy(listFiles, "extension");

fs.readdir("./folder", (err, files) => {
  listFiles = files.map(filename => {
    return {
      extension: getExtension(filename),
      name: filename
    };
  });
  writeJSON(formatedList(listFiles));
});

fs.watch("./folder", (eventType, filename) => {
  listFiles.push({
    type: getExtension(filename),
    name: filename
  });
  writeJSON(formatedList(listFiles));
});
