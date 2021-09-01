import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { CardList } from '../../components/CardList'
import { loadTopTrack } from '../../redux/actions/tracks'
import { Redirect } from 'react-router-dom'
import { Header } from '../../components/Header'
import { setPage } from '../../redux/actions/currentPage'
interface DashboardProps {
  isValidSession: () => boolean
}

export const Dashboard = ({ isValidSession }: DashboardProps) => {
  const dispatch = useDispatch()
  // const artists = useSelector((state: RootState) => state.artists)
  // const albums = useSelector((state: RootState) => state.albums)
  // const playlists = useSelector((state: RootState) => state.playlists)
  const tracks = useSelector((state: RootState) => state.topTracks.data)
  const requesting = useSelector(
    (state: RootState) => state.topTracks.requesting
  )
  useEffect(() => {
    // dispatch(initiateGetResult('alpha'))
    // console.log(albums)
    console.log('Chay useEffect Dashboard')
    dispatch(loadTopTrack())
    dispatch(setPage('topSongs'))
  }, [])
  return isValidSession() ? (
    <div className="flex flex-col text-white md:px-4  rounded-md font-bold bg-black min-h-screen">
      <div className="text-xl sm:text-2xl  py-3 pl-2">Top ca khúc của bạn</div>
      <div className="w-full px-2">
        <CardList content={tracks} />
      </div>
    </div>
  ) : (
    <Redirect to="/auth" />
  )
}
