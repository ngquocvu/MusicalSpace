import { combineReducers } from 'redux'
import albumsReducer from './albums'
import artistsReducer from './artists'
import playListsReducer from './playlist'
export const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playListsReducer,
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
