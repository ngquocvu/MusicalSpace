import { SET_CURRENT_TRACK } from '../../utils/constants'
interface StateProps {
  title: string
  artist: string
  thumbnail: string
  preview_url: string
}
export const setCurrentTrack = (currentTrack: StateProps) => ({
  type: SET_CURRENT_TRACK,
  currentTrack,
})
