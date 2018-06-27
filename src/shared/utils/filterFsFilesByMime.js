import checkFsFileMime from './checkFsFileMime'

const filterFsFilesByMime = async (files, mime) => {
  const result = await Promise.all(
    files.map(async file => {
      const isMatch = await checkFsFileMime(file, mime)
      if (isMatch) return file
    })
  )
  return result.filter(f => !!f)
}

export default filterFsFilesByMime
