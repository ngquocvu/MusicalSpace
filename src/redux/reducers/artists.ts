import { SET_ARTISTS } from '../../utils/constants'
const defaultContent = {
  items: [
    {
      album_type: '',
      artists: [
        {
          name: '',
        },
      ],
      name: '',
      external_urls: {
        spotify: '',
      },
      images: [
        {
          url: '',
        },
      ],
      release_date: '',
    },
  ],
}
const artistsReducer = (state = defaultContent, action: any) => {
  const { artists } = action
  switch (action.type) {
    case SET_ARTISTS:
      return artists
    default:
      return state
  }
}
export default artistsReducer
