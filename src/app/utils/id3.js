const musicmetadata = require('musicmetadata');
const fs = require('fs')

export default (file) => new Promise((resolve, reject) => {
    const {path} = file
    musicmetadata(fs.createReadStream(path), (err, metadata) => {
        if(err) {
            reject(err)
            return   
        }
        if(Array.isArray(metadata.artist))
            metadata.artist = metadata.artist[0]
        resolve(metadata)
    })
})