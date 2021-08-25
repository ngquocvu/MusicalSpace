import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { initiateGetResult } from '../../../actions/result'
import { RootState } from '../../../reducers'
import Card from '../../components/Card'
import { CardList } from '../../components/CardList'
interface Props {}

export const Dashboard = (props: Props) => {
  const dispatch = useDispatch()
  const artists = useSelector((state: RootState) => state.artists)
  const albums = useSelector((state: RootState) => state.albums)
  const playlists = useSelector((state: RootState) => state.playlists)
  useEffect(() => {
    dispatch(initiateGetResult('rose'))
    console.log(albums)
  }, [])
  return (
    <div className="flex justify-center items-center min-h-screen space-x-3">
      <CardList content={albums} />
    </div>
  )
}
