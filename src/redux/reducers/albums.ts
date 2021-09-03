import { SET_ALBUMS } from '../../utils/constants'

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
      external_url: {
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
const albumsReducer = (state = defaultContent, action: any) => {
  const { albums } = action
  switch (action.type) {
    case SET_ALBUMS:
      return albums
    default:
      return state
  }
}
export default albumsReducer
