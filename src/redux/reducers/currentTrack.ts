import { SET_CURRENT_TRACK } from '../../utils/constants'

interface ActionProps {
  type: string
  currentTrack: StateProps
}
interface StateProps {
  title: string
  artist: string
  thumbnail: string
  preview_url: string
}
const initialState = {
  title: '',
  artist: '',
  thumbnail: '',
  preview_url: '',
}
const CurrentTrackReducer = (state: StateProps = initialState, action: any) => {
  const { currentTrack } = action
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return currentTrack
    default:
      return state
  }
}
export default CurrentTrackReducer
