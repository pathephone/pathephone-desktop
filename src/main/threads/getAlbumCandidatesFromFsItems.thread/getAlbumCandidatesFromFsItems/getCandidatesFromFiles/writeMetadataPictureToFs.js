import fs from 'fs';
import os from 'os';
import path from 'path';

const writeMetadataPictureToFs = ({ data }) => new Promise((resolve, reject) => {
  const nowString = `${new Date().getTime()}`;
  const pathToWrite = path.resolve(os.tmpdir(), nowString);
  fs.writeFile(pathToWrite, data, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve(pathToWrite);
    }
  });
});

export default writeMetadataPictureToFs;
