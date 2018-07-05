import { IS_WINDOWS, IS_MAC, IS_LINUX } from '#config'

const getTargetReleaseAsset = (assets) => {
  const handleFind = (asset) => {
    if (IS_WINDOWS) {
      return asset.name.endsWith('.exe')
    } else
    if (IS_MAC) {
      return asset.name.endsWith('mac.zip') || asset.name.endsWith('.dmg')
    } else
    if (IS_LINUX) {
      return asset.name.endsWith('.rpm') || asset.name.endsWith('.deb') || asset.name.endsWith('.AppImage')
    }
  }
  return assets.filter(handleFind)
}

export default getTargetReleaseAsset
