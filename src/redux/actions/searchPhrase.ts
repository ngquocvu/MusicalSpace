import { SET_SEARCH_PHRASE } from '../../utils/constants'

export const setSearchPhrase = (searchPhrase: string) => ({
  type: SET_SEARCH_PHRASE,
  searchPhrase,
})
