import createThreadReducer from '~utils/createThreadReducer';

import getAlbumCandidatesFromFsItems from './getAlbumCandidatesFromFsItems.thread/getAlbumCandidatesFromFsItems';

createThreadReducer(({ payload }) => getAlbumCandidatesFromFsItems(payload));
