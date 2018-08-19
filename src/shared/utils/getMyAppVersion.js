import { remote } from 'electron';

const getMyAppVersion = () => remote.app.getVersion();

export default getMyAppVersion;
