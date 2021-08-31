import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loadProfile } from '../redux/actions/profile'
import { RootState } from '../redux/reducers'

export const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const currentPage = useSelector((state: RootState) => state.currentPage)
  const profile = useSelector((state: RootState) => state.profile.data)
  useEffect(() => {
    dispatch(loadProfile())
  }, [])
  return (
    <div className="flex justify-between items-center bg-gray-900 md:p-4 p-3">
      <div className="font-bold text-lg md:text-2xl flex space-x-6 text-gray-400 cursor-pointer">
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
      </div>
      <img
        src={profile.images[0].url}
        className="rounded-full h-10 cursor-pointer"
        onClick={() => history.push('/profile')}
      />
    </div>
  )
}
