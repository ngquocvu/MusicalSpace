import {
  ADD_ALBUMS,
  ADD_ARTISTS,
  ADD_PLAYLIST,
  SET_ALBUMS,
  SET_ARTISTS,
  SET_PLAYLIST,
  SET_TRACKS,
} from '../../utils/constants'
import { get } from '../../utils/functions'

export const setAlbums = (albums: any) => ({
  type: SET_ALBUMS,
  albums,
})
export const addAlbums = (albums: any) => ({
  type: ADD_ALBUMS,
  albums,
})
export const setPlayList = (playlists: any) => ({
  type: SET_PLAYLIST,
  playlists,
})
export const addPlaylist = (playlists: any) => ({
  type: ADD_PLAYLIST,
  playlists,
})
export const addArtists = (artists: any) => ({
  type: ADD_ARTISTS,
  artists,
})
export const setArtists = (artists: any) => ({
  type: SET_ARTISTS,
  artists,
})
export const setTracks = (tracks: any) => ({
  type: SET_TRACKS,
  tracks,
})

export const initiateGetResult = (searchTerm: string) => {
  return async (dispatch: any) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist,track&limit=6&market=VN`
      const result = await get(API_URL)
      const { albums, playlists, artists, tracks } = result
      console.log(result)
      dispatch(setTracks(tracks))
      dispatch(setAlbums(albums))
      dispatch(setArtists(artists))
      return dispatch(setPlayList(playlists))
    } catch (error) {
      console.log('error', error)
    }
  }
}
