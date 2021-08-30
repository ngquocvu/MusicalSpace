import { SET_TRACKS } from '../../utils/constants'
const initialState = {
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
}
const TrackReducers = (state = initialState, action: any) => {
  const { tracks } = action
  switch (action.type) {
    case SET_TRACKS:
      return tracks
    default:
      return state
  }
}
export default TrackReducers
