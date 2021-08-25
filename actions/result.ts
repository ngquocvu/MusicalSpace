import {
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_PLAYLIST,
  ADD_PLAYLIST,
} from '../src/utils/constants'
import { get } from '../src/utils/functions'

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

export const initiateGetResult = (searchTerm: string) => {
  return async (dispatch: any) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`
      const result = await get(API_URL)
      const { albums, playlists, artists } = result
      dispatch(setAlbums(albums))
      dispatch(setArtists(artists))
      return dispatch(setPlayList(playlists))
    } catch (error) {
      console.log('error', error)
    }
  }
}
