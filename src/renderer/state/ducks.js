import { default as appStart } from './ducks/appStart'
import { default as audio } from './ducks/audio'
import { default as playlist } from './ducks/playlist'
import { default as playback } from './ducks/playback'
import { default as volume } from './ducks/volume'
import { default as feed } from './ducks/feed'
import { default as dnd } from './ducks/dnd'

export default [
  appStart,
  audio,
  feed,
  playlist,
  playback,
  volume,
  dnd
]
