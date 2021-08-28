import { combineReducers } from 'redux'
import albumsReducer from './albums'
import artistsReducer from './artists'
import currentPageReducer from './currentPage'
import playListsReducer from './playlist'
import ProfileReducer from './profile'
import tracksReducers from './tracks'
export const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playListsReducer,
  tracks: tracksReducers,
  currentPage: currentPageReducer,
  profile: ProfileReducer,
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
