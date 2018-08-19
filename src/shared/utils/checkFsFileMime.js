import mime from 'mime';

const checkFsFileMime = (filePath, mimePrefix) => {
  const type = mime.getType(filePath);
  if (type) {
    return type.startsWith(mimePrefix);
  }
  return false;
};

export default checkFsFileMime;
