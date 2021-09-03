export const SET_ALBUMS: string = 'SET_ALBUMS'
export const ADD_ALBUMS: string = 'ADD_ALBUMS'
export const SET_ARTISTS: string = 'SET_ARTISTS'
export const ADD_ARTISTS: string = 'ADD_ARTISTS'
export const SET_PLAYLIST: string = 'SET_PLAYLIST'
export const ADD_PLAYLIST: string = 'ADD_PLAYLIST'
export const FETCH_TRACKS_REQUEST: string = 'FETCH_TRACKS_REQUEST'
export const FETCH_TRACKS_SUCCESS: string = 'FETCH_TRACKS_SUCCESS'
export const FETCH_TRACKS_ERROR: string = 'FETCH_TRACKS_ERROR'
export const SET_CURRENT_PAGE: string = 'SET_CURRENT_PAGE'
export const FETCH_PROFILE_REQUEST: string = 'FETCH_PROFILE_REQUEST'
export const FETCH_PROFILE_SUCCESS: string = 'FETCH_PROFILE_SUCCESS'
export const FETCH_PROFILE_ERROR: string = 'FETCH_PROFILE_ERROR'
export const SET_TRACKS: string = 'SET_TRACKS'
export const SET_SEARCH_PHRASE: string = 'SET_SEARCH_PHRASE'
export const FEATURE_PLAYLIST_URL: string =
  '	https://api.spotify.com/v1/browse/featured-playlists?limit=6&offset=0&country=BN&locale=vn_VN' +
  '&timestamp=' +
  new Date().toISOString()
export const NEW_RELEASES_URL: string =
  'https://api.spotify.com/v1/browse/new-releases?limit=6&offset=0'
export const CATEGORIES_URL: string =
  'https://api.spotify.com/v1/browse/categories?limit=6'
