import { SET_CURRENT_PAGE } from '../../utils/constants'

export const setPage = (page: string) => ({
  type: SET_CURRENT_PAGE,
  page,
})
