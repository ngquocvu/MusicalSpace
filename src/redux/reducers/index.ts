import { combineReducers } from 'redux'
import albumsReducer from './albums'
import artistsReducer from './artists'
import playListsReducer from './playlist'
import tracksReducers from './tracks'
export const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playListsReducer,
  tracks: tracksReducers,
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
