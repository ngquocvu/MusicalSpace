import {
  FETCH_PROFILE_ERROR,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
} from '../../utils/constants'
import { get } from '../../utils/functions'

export const loadProfile = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: FETCH_PROFILE_REQUEST })
      const API_URL = `https://api.spotify.com/v1/me`
      const result = await get(API_URL)
      console.log(dispatch({ type: FETCH_PROFILE_SUCCESS, data: result }))
      return dispatch({ type: FETCH_PROFILE_SUCCESS, data: result })
    } catch (error) {
      dispatch({ type: FETCH_PROFILE_ERROR, message: error })
    }
  }
}
