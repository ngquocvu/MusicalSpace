import { SET_CURRENT_PAGE } from '../../utils/constants'

const currentPageReducer = (state = '', action: any) => {
  const { page } = action
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return page
    default:
      return state
  }
}
export default currentPageReducer
