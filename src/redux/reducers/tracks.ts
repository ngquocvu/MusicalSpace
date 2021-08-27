import {
  FETCH_TRACKS_ERROR,
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
} from '../../utils/constants'

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: {
    items: [
      {
        artists: [
          {
            name: '',
          },
        ],
        name: '',
        album: {
          images: [
            {
              url: '',
            },
          ],
        },
        preview_url: '',
      },
    ],
  },
}

const tracksReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TRACKS_REQUEST:
      return { ...state, requesting: true }
    case FETCH_TRACKS_SUCCESS:
      return { ...state, requesting: false, success: true, data: action.data }
    case FETCH_TRACKS_ERROR:
      return { ...state, requesting: false, message: action.message }
    default:
      return state
  }
}
export default tracksReducers
