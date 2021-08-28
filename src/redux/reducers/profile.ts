import {
  FETCH_PROFILE_ERROR,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
} from '../../utils/constants'

const initialState = {
  message: null,
  requesting: false,
  success: false,
  data: {
    images: [{ url: '' }],
    followers: { total: 0 },
  },
}

const ProfileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return { ...state, requesting: true }
    case FETCH_PROFILE_SUCCESS:
      return { ...state, requesting: false, success: true, data: action.data }
    case FETCH_PROFILE_ERROR:
      return { ...state, requesting: false, message: action.message }
    default:
      return state
  }
}
export default ProfileReducer
