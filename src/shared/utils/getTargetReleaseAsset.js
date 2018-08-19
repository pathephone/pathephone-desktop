import { IS_WINDOWS, IS_MAC, IS_LINUX } from '~shared/config';

const getTargetReleaseAsset = (assets) => {
  const handleFind = (asset) => {
    if (IS_WINDOWS) {
      return asset.name.endsWith('.exe');
    } if (IS_MAC) {
      return asset.name.endsWith('mac.zip') || asset.name.endsWith('.dmg');
    } if (IS_LINUX) {
      return asset.name.endsWith('.rpm') || asset.name.endsWith('.deb') || asset.name.endsWith('.AppImage');
    }
    return undefined;
  };
  return assets.filter(handleFind);
};

export default getTargetReleaseAsset;
