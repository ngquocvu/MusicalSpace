import { SET_SEARCH_PHRASE } from '../../utils/constants'

const searchPhraseReducer = (state = '', action: any) => {
  const { searchPhrase } = action
  switch (action.type) {
    // không viết in hoa chữ type
    case SET_SEARCH_PHRASE:
      return searchPhrase

    default:
      return state
  }
}
export default searchPhraseReducer
