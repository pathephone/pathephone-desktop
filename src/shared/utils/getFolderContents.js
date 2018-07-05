import fs from 'fs'
import path from 'path'

const handleItemsFilter = file => !file.startsWith('.')

const getFolderContents = folderPath => {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, async (err, items) => {
      if (err) reject(err)
      const filteredItems = items.filter(handleItemsFilter)
      const handleFullPathJoin = itemName => path.join(folderPath, itemName)
      const output = filteredItems.map(handleFullPathJoin)
      resolve(output)
    })
  })
}

export default getFolderContents
