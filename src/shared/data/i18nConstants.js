import { IS_PRODUCTION } from '#config'

const c = map => {
  let code = 'en'
  if (IS_PRODUCTION) {
    if (navigator && navigator.language.startsWith('ru')) {
      code = 'ru'
    }
  }
  return map[code]
}
export const LOCAL_NO_ALBUMS_FOUND = c({
  en: 'No albums have been found',
  ru: 'Альбомов не найдено'
})

export const LOCAL_ERROR_PROCESSING_FILES = c({
  en: 'Error occured while processing files',
  ru: 'Возникла ошибка при обработке файлов'
})

export const LOCAL_SHARE_FORM_SUBMIT_SUCCEED = c({
  en: 'Album successfully shared an saved to local collection',
  ru: 'Альбом успешно опубликован и добавлен в локальную коллекцию'
})

export const LOCAL_SHARE_ALBUM_ALREADY_EXISTS = c({
  en: 'Album already exists',
  ru: 'Альбом уже существует'
})

export const LOCAL_LEGAL_NOTICE = c({
  en: `Pathephone is a music sharing program. While it is running, you are participating in a distribution of a large amount of data both passively and actively. In relation to some of this data, authorities may consider that your actions are illegal.

By clicking the "OK" button, you confirm that you bear full responsibility for the all possible consequences of using this programm. No further notices will be issued.`,
  ru: `"Патефон" - программа для свободного обмена музыкой. Пока она запущена, вы принимаете участие в распространении большого колиичества информации как активно, так и пассивно. В отношении части этой информации такие действия могут быть расценены властями как незаконные.
  
Нажимая кнопку "OK" вы соглашаетесь, что несёте полную ответственность за все возможные последствия использования этой программы. Уведомление больше отображаться не будет.`
})

export const LOCAL_DISCOVER_BUTTON = c({
  en: 'discover',
  ru: 'поиск'
})

export const LOCAL_SHARE_BUTTON = c({
  en: 'share',
  ru: 'опубликовать'
})

export const LOCAL_ABOUT_BUTTON = c({
  en: 'about',
  ru: 'дополнительно'
})

export const LOCAL_NO_ALBUMS_SHORT = c({
  en: 'no albums yet',
  ru: 'альбомов пока нет'
})

export const LOCAL_NO_ALBUMS_LONG = c({
  en: 'Albums will be appearing bit by bit, as they are discovered. Also, you can add your own albums to the feed, which will make them available to other members of the network too.',
  ru: 'Альбомы будут появляться постепенно, по мере обнаружения. Также Вы можете опубликовать собственный альбом, после чего он появится в коллекции и станет доступен другим пользователям.'
})

export const LOCAL_SELECT_OR_DND = c({
  en: 'select or drag and drop your album files',
  ru: 'выберите или перетащите файлы альбомов'
})

export const LOCAL_SAVE = c({
  en: 'save',
  ru: 'сохранить'
})

export const LOCAL_CANCEL = c({
  en: 'cancel',
  ru: 'отменить'
})

export const LOCAL_RESET = c({
  en: 'reset',
  ru: 'очистить'
})

export const LOCAL_TITLE = c({
  en: 'title',
  ru: 'название'
})

export const LOCAL_ARTIST = c({
  en: 'artist',
  ru: 'исполнитель'
})

export const LOCAL_ALBUM_TITLE = c({
  en: 'album title',
  ru: 'название альбома'
})

export const LOCAL_ALBUM_ARTIST = c({
  en: 'album artist',
  ru: 'исполнитель альбома'
})

export const LOCAL_TRACK_TITLE = c({
  en: 'track title',
  ru: 'название композиции'
})

export const LOCAL_TRACK_ARTIST = c({
  en: 'track artist',
  ru: 'исполнитель композиции'
})

export const LOCAL_TRACKLIST = c({
  en: 'tracklist',
  ru: 'список композиций'
})

export const LOCAL_ADD_TRACKS = c({
  en: 'add tracks',
  ru: 'добавить композицию'
})

export const LOCAL_YOU_SHOULD_ADD_TRACK = c({
  en: 'you should add at least one track',
  ru: 'необходимо добавить хотябы одну композицию'
})

export const LOCAL_LATEST_ALBUMS = c({
  en: 'latest albums',
  ru: 'новые альбомы'
})

export const LOCAL_SEARCH_IN_ALBUMS_COLLECTION = c({
  en: 'Search in albums',
  ru: 'Поиск по альбомам'
})

export const LOCAL_SEARCH_RESULTS_FOR = c({
  en: 'search results for',
  ru: 'результаты поиска для'
})

export const LOCAL_NO_PLAYBACK = c({
  en: 'no playback',
  ru: 'нечего играть'
})

export const LOCAL_PLAYLIST_IS_EMPTY = c({
  en: 'playlist is empty',
  ru: 'плейлист пуст'
})

export const LOCAL_NEW_RELEASE_AVAILABLE = c({
  en: 'new reelase is available',
  ru: 'вышел новый релиз'
})

export const LOCAL_NEW_VERSION_AVAILABLE = c({
  en: 'new version is available',
  ru: 'вышла новая версия'
})

export const LOCAL_NEW_RELEASE_NOTIFICATION = c({
  en: 'New release is available for download',
  ru: 'Новая версия доступна для скачивания'
})

export const LOCAL_AVAILABLE_FOR_OS = c({
  en: 'available for Mac, Linux and Window',
  ru: 'доступна для Mac, Linux и Windows'
})

export const LOCAL_CLEAR_PLAYLIST = c({
  en: 'clear playlist',
  ru: 'очистить плейлист'
})

export const LOCAL_ALBUMS_SELECTED = c({
  en: 'albums selected',
  ru: 'выбрано альбомов'
})

export const LOCAL_PLAY = c({
  en: 'play',
  ru: 'играть'
})

export const LOCAL_QUEUE = c({
  en: 'add to playlist',
  ru: 'добавить в плейлист'
})

export const LOCAL_DELETE = c({
  en: 'delete',
  ru: 'удалить'
})
