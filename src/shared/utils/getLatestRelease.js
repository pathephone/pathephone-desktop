const assetsApiLink = 'https://api.github.com/repos/pathephone/pathephone-desktop/releases/latest';

const getLatestRelease = async () => {
  const res = await fetch(assetsApiLink, { method: 'GET' });
  return res.json();
};

export default getLatestRelease;
