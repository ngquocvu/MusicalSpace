import { SET_ALBUMS } from '../src/utils/constants'

const defaultContent = {
  items: [
    {
      album_type: '',
      artist: [''],
      name: '',
      images: [''],
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
