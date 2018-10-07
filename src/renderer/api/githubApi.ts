import { IGithubRelease } from '~renderer/types/api';
import { GITHUB_PATHEPHONE_LATEST_RELEASE_URL } from '~shared/data/constants';

export const getLatestRelease: () => Promise<IGithubRelease> = async (
): Promise<IGithubRelease> => {
  const res: Response = await fetch(GITHUB_PATHEPHONE_LATEST_RELEASE_URL, { method: 'GET' });

  return res.json();
};
