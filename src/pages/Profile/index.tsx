import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components/Header'
import { setPage } from '../../redux/actions/currentPage'
import { loadProfile } from '../../redux/actions/profile'
import { RootState } from '../../redux/reducers'

interface Props {
  isValidSession: () => boolean
}

const Profile = ({ isValidSession }: Props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const profile = useSelector((state: RootState) => state.profile.data)
  useEffect(() => {
    dispatch(loadProfile())
    dispatch(setPage('profile'))
    console.log(profile)
  }, [])
  const onLogoutButtonClick = () => {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      localStorage.clear()
      history.push('/auth')
    }
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <img src={profile.images[0].url} className="rounded-full h-40"></img>
        <div className="text-gray-100 rounded-full text-5xl font-bold">
          {profile.display_name}
        </div>
        <div className="text-gray-200 rounded-full text-base font-semibold bg-green-700 py-2 px-4 text-gray-200">
          {String(profile.product).toLocaleUpperCase()}
        </div>
        <div
          onClick={() => onLogoutButtonClick()}
          className="text-gray-200 rounded-md text-base font-semibold py-2 px-8 text-gray-100 hover:text-red-600 cursor-pointer"
        >
          Đăng xuất
        </div>
        {/* <div className="text-gray-50">Followers: {profile.followers.total}</div> */}
      </div>
    </div>
  )
}

export default Profile
