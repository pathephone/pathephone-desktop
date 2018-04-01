import path from 'path'
import appPath from '~app/utils/electronAppPath'

const getAbsoluteIpfsPath = () => path.resolve(appPath('ipfs'))

module.exports = getAbsoluteIpfsPath
