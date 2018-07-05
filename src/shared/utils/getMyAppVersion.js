import { remote } from 'electron'

const getMyAppVersion = () => {
  return remote.app.getVersion()
}

export default getMyAppVersion
