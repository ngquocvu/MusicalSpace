import { SET_ALBUMS, SET_PLAYLIST } from '../../utils/constants'

const playListsReducer = (state = {}, action: any) => {
  const { playlists } = action
  switch (action) {
    case SET_PLAYLIST:
      return playlists
    default:
      return state
  }
}
export default playListsReducer
