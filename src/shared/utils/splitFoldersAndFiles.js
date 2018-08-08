import fs from 'fs';

const splitFoldersAndFiles = async (files) => {
  const data = {
    files: [],
    folders: [],
  };
  const resolveFile = filePath => new Promise((resolve, reject) => {
    fs.lstat(filePath, (err, stat) => {
      if (err) {
        reject(err);
      } else {
        if (stat.isDirectory()) {
          data.folders.push(filePath);
        } else {
          data.files.push(filePath);
        }
        resolve();
      }
    });
  });
  for (let i = 0; i < files.length; i += 1) {
    await resolveFile(files[i]); // eslint-disable-line no-await-in-loop
  }
  return data;
};

export default splitFoldersAndFiles;
