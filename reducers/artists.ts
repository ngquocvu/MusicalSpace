import { SET_ARTISTS } from '../src/utils/constants'

const artistsReducer = (state = {}, action: any) => {
  const { artists } = action
  switch (action.type) {
    case SET_ARTISTS:
      return artists
    default:
      return state
  }
}
export default artistsReducer
