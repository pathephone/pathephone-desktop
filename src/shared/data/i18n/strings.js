import getLocaleCode from '~shared/utils/getLocaleCode';

const c = (map) => {
  const code = getLocaleCode();
  return map[code];
};

export const NO_ALBUMS_FOUND = c({
  en: 'No albums have been found',
  ru: 'Альбомов не найдено',
});

export const ERROR_PROCESSING_FILES = c({
  en: 'Error occured while processing files',
  ru: 'Возникла ошибка при обработке файлов',
});

export const SHARE_FORM_SUBMIT_SUCCEED = c({
  en: 'Album successfully shared an saved to local collection',
  ru: 'Альбом успешно опубликован и добавлен в локальную коллекцию',
});

export const SHARE_ALBUM_ALREADY_EXISTS = c({
  en: 'Album already exists',
  ru: 'Альбом уже существует',
});

export const LEGAL_NOTICE = c({
  en: `Pathephone is a music sharing program. While it is running, you are participating in a distribution of a large amount of data both passively and actively. In relation to some of this data, authorities may consider that your actions are illegal.

By clicking the "OK" button, you confirm that you bear full responsibility for the all possible consequences of using this programm. No further notices will be issued.`,
  ru: `"Патефон" - программа для свободного обмена музыкой. Пока она запущена, вы принимаете участие в распространении большого колиичества информации как активно, так и пассивно. В отношении части этой информации такие действия могут быть расценены властями как незаконные.
  
Нажимая кнопку "OK" вы соглашаетесь, что несёте полную ответственность за все возможные последствия использования этой программы. Уведомление больше отображаться не будет.`,
});

export const DISCOVER_BUTTON = c({
  en: 'discover',
  ru: 'поиск',
});

export const SHARE_BUTTON = c({
  en: 'share',
  ru: 'опубликовать',
});

export const ABOUT_BUTTON = c({
  en: 'about',
  ru: 'дополнительно',
});

export const NO_ALBUMS_SHORT = c({
  en: 'no albums yet',
  ru: 'альбомов пока нет',
});

export const NO_ALBUMS_LONG = c({
  en: 'Albums will be appearing bit by bit, as they are discovered. Also, you can add your own albums to the feed, which will make them available to other members of the network too.',
  ru: 'Альбомы будут появляться постепенно, по мере обнаружения. Также Вы можете опубликовать собственный альбом, после чего он появится в коллекции и станет доступен другим пользователям.',
});

export const SELECT_OR_DND = c({
  en: 'select or drag and drop your album files',
  ru: 'выберите или перетащите файлы альбомов',
});

export const SAVE = c({
  en: 'save',
  ru: 'сохранить',
});

export const CANCEL = c({
  en: 'cancel',
  ru: 'отменить',
});

export const RESET = c({
  en: 'reset',
  ru: 'очистить',
});

export const TITLE = c({
  en: 'title',
  ru: 'название',
});

export const ARTIST = c({
  en: 'artist',
  ru: 'исполнитель',
});

export const ALBUM_TITLE = c({
  en: 'album title',
  ru: 'название альбома',
});

export const ALBUM_ARTIST = c({
  en: 'album artist',
  ru: 'исполнитель альбома',
});

export const TRACK_TITLE = c({
  en: 'track title',
  ru: 'название композиции',
});

export const TRACK_ARTIST = c({
  en: 'track artist',
  ru: 'исполнитель композиции',
});

export const TRACKLIST = c({
  en: 'tracklist',
  ru: 'список композиций',
});

export const ADD_TRACKS = c({
  en: 'add tracks',
  ru: 'добавить композицию',
});

export const YOU_SHOULD_ADD_TRACK = c({
  en: 'you should add at least one track',
  ru: 'необходимо добавить хотябы одну композицию',
});

export const TOO_MUCH_TRACKS = c({
  en: 'tracklist length is limited to 100',
  ru: 'размер треклиста не должен превышать 100',
});

export const LATEST_ALBUMS = c({
  en: 'latest albums',
  ru: 'новые альбомы',
});

export const SEARCH_IN_ALBUMS_COLLECTION = c({
  en: 'Search in albums',
  ru: 'Поиск по альбомам',
});

export const SEARCH_RESULTS_FOR = c({
  en: 'search results for',
  ru: 'результаты поиска для',
});

export const NO_PLAYBACK = c({
  en: 'no playback',
  ru: 'нечего играть',
});

export const PLAYLIST_IS_EMPTY = c({
  en: 'playlist is empty',
  ru: 'плейлист пуст',
});

export const NEW_RELEASE_AVAILABLE = c({
  en: 'new reelase is available',
  ru: 'вышел новый релиз',
});

export const NEW_VERSION_AVAILABLE = c({
  en: 'new version is available',
  ru: 'вышла новая версия',
});

export const NEW_RELEASE_NOTIFICATION = c({
  en: 'New release is available for download',
  ru: 'Новая версия доступна для скачивания',
});

export const AVAILABLE_FOR_OS = c({
  en: 'available for Mac, Linux and Window',
  ru: 'доступна для Mac, Linux и Windows',
});

export const CLEAR_PLAYLIST = c({
  en: 'clear playlist',
  ru: 'очистить плейлист',
});

export const ALBUMS_SELECTED = c({
  en: 'albums selected',
  ru: 'выбрано альбомов',
});

export const PLAY = c({
  en: 'play',
  ru: 'играть',
});

export const QUEUE = c({
  en: 'add to playlist',
  ru: 'добавить в плейлист',
});

export const DELETE = c({
  en: 'delete',
  ru: 'удалить',
});

export const BANDWIDTH_IN = c({
  en: 'incoming bandwidth',
  ru: 'входящий трафик',
});

export const BANDWIDTH_OUT = c({
  en: 'outcoming bandwidth',
  ru: 'исходящий трафик',
});

export const IPFS_REPO_STAT = c({
  en: 'ipfs repo: used / limit',
  ru: 'ipfs-репозиторий: использовано / лимит',
});

export const PEERS_INDICATOR = c({
  en: 'peers: ipfs (pathephone)',
  ru: 'пиры: ipfs (pathephone)',
});
