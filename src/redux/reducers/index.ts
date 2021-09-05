import { combineReducers } from 'redux'
import albumsReducer from './albums'
import artistsReducer from './artists'
import currentPageReducer from './currentPage'
import CurrentTrackReducer from './currentTrack'
import playListsReducer from './playlist'
import ProfileReducer from './profile'
import searchPhraseReducer from './searchPhrase'

import topTracksReducers from './topTracks'
import TrackReducers from './track'

export const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playListsReducer,
  topTracks: topTracksReducers,
  currentPage: currentPageReducer,
  profile: ProfileReducer,
  searchPhrase: searchPhraseReducer,
  tracks: TrackReducers,
  currentTrack: CurrentTrackReducer,
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
