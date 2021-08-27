import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import { RootState } from '../../redux/reducers'
import { initiateGetResult } from '../../redux/actions/result'
import { CardList } from '../../components/CardList'
import { loadTrack } from '../../redux/actions/tracks'
interface Props {}

export const Dashboard = (props: Props) => {
  const dispatch = useDispatch()
  // const artists = useSelector((state: RootState) => state.artists)
  // const albums = useSelector((state: RootState) => state.albums)
  // const playlists = useSelector((state: RootState) => state.playlists)
  const tracks = useSelector((state: RootState) => state.tracks.data)
  const requesting = useSelector((state: RootState) => state.tracks.requesting)
  useEffect(() => {
    // dispatch(initiateGetResult('alpha'))
    // console.log(albums)
    dispatch(loadTrack())
  }, [])
  return (
    <div className="flex flex-col text-white  bg-black min-h-screen space-x-3">
      <div className="w-full">
        <CardList content={tracks} />
      </div>
    </div>
  )
}
