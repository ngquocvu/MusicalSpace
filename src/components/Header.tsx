import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../redux/reducers'

export const Header = () => {
  const history = useHistory()
  const currentPage = useSelector((state: RootState) => state.currentPage)
  return (
    <div className="font-bold text-xl md:text-2xl pb-4 flex space-x-6 text-gray-400  cursor-pointer">
      <div
        className={currentPage === 'search' ? 'text-gray-50 ' : ''}
        onClick={() => history.push('/search')}
      >
        Search
      </div>
      <div
        className={currentPage === 'browse' ? 'text-gray-50' : ''}
        onClick={() => history.push('/')}
      >
        Browse
      </div>
      <div
        className={currentPage === 'profile' ? 'text-gray-50' : ''}
        onClick={() => history.push('/profile')}
      >
        Profile
      </div>
    </div>
  )
}
