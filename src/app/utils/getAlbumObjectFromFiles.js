import fs from 'fs'
import path from 'path'
import fileType from 'file-type'

import getAudioTracksFromFiles from './getTracksFromFiles'
import getCoverFromFiles from './getCoverFromFiles'

function getDirectoryFilesRecursive (directory, filesList = []) {
  const files = fs.readdirSync(directory)
  for (const file of files) {
    const filePath = `${directory}/${file}`
    if (fs.statSync(filePath).isDirectory()) {
      getDirectoryFilesRecursive(filePath, filesList)
    } else {
      filesList.push(filePath)
    }
  }
  return filesList
}

const getDirectoriesContentsRecursive = (files) => {
  const directories = files.filter(file => file.type === '')
  let directoriesFiles = []
  for (const directory of directories) {
    if (fs.statSync(directory.path).isDirectory()) {
      directoriesFiles = directoriesFiles.concat(getDirectoryFilesRecursive(directory.path))
    } // добавляем все файлы из всех директорий что перетащили
  }
  directoriesFiles = directoriesFiles.map(file => { // преобразуем пути файлов в объекты File
    const buffer = fs.readFileSync(file)
    let options
    try {
      options = {type: fileType(buffer).mime}
    } catch (e) {}
    const fileObject = new File([buffer], path.basename(file), options)
    Object.defineProperties(fileObject, {path: {value: file, writable: false}})
    return fileObject
  })
  return files.filter(file => file.type !== '').concat(directoriesFiles) // удаляем вначале все папки по которым прошлись, добавляем затем наши файлы
}

const getAlbumObjectFromFiles = async (files) => {
  files = Array.from(files)
  files = getDirectoriesContentsRecursive(files)
  const cover = await getCoverFromFiles(files) || ''
  const tracks = await getAudioTracksFromFiles(files)
  let artist = ''
  let title = ''
  if (tracks.length > 0) {
    artist = tracks[0].artist
    title = tracks[0].album
  }
  return {
    title,
    artist,
    cover,
    tracks
  }
}

export default getAlbumObjectFromFiles
