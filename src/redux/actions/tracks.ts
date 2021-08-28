import {
  FETCH_TRACKS_ERROR,
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
} from '../../utils/constants'
import { get } from '../../utils/functions'

export const loadTrack = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: FETCH_TRACKS_REQUEST })
      const API_URL = `https://api.spotify.com/v1/me/top/tracks?limit=50`
      const result = await get(API_URL)
      console.log(result)
      return dispatch({ type: FETCH_TRACKS_SUCCESS, data: result })
    } catch (error) {
      dispatch({ type: FETCH_TRACKS_ERROR, message: error })
    }
  }
}
