import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components/Header'
import { setPage } from '../../redux/actions/currentPage'
import { loadProfile } from '../../redux/actions/profile'
import { RootState } from '../../redux/reducers'

interface Props {
  isValidSession: () => boolean
}

const Profile = ({ isValidSession }: Props) => {
  const dispatch = useDispatch()
  const profile = useSelector((state: RootState) => state.profile.data)
  useEffect(() => {
    dispatch(loadProfile())
    dispatch(setPage('profile'))
    console.log(profile)
  }, [])

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center space-y-2">
        <img src={profile.images[0].url} className="rounded-full h-40"></img>
        <div className="text-gray-100 rounded-full text-5xl font-bold">
          {profile.display_name}
        </div>
        <div className="text-gray-200 rounded-full text-lg font-semibold text-gray-200">
          {String(profile.product).toLocaleUpperCase()}
        </div>
        {/* <div className="text-gray-50">Followers: {profile.followers.total}</div> */}
      </div>
    </div>
  )
}

export default Profile
