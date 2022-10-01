const fs = require("fs");

exports.createStorage = (storageFile) => {
  const storageFilePath = require("path").resolve(
    __dirname,
    "../database",
    storageFile
  );
  return {
    read() {
      return new Promise((resolve, reject) => {
        fs.readFile(storageFilePath, (err, buffer) => {
          if (err !== null) {
            reject(err);
            return;
          }

          const data = buffer.toString();
          resolve(JSON.parse(data));
        });
      });
    },
    write(data) {
      return new Promise((resolve, reject) => {
        fs.writeFile(storageFilePath, JSON.stringify(data, null, 2), (err) => {
          if (err !== null) {
            reject(err);
            return;
          }
          resolve();
        });
      });
    },
  };
};
