import path from 'path'
import appPath from '~/utils/electronAppPath'

const getAbsoluteIpfsPath = () => path.resolve(appPath('ipfs'))

module.exports = getAbsoluteIpfsPath
