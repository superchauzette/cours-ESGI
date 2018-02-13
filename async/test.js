const fs = require("fs");

// CREATION PROMISE

fs.readdir("./folder", (err, files) => {
  console.log(files);
});

const readdirPromise = folderName =>
  new Promise((resolve, reject) => {
    fs.readdir(folderName, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });

readdirPromise("./folder")
  .then(files => console.log(files))
  .catch(err => console.log(err));
