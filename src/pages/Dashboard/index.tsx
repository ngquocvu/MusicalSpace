import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { CardList } from '../../components/CardList'
import { loadTrack } from '../../redux/actions/tracks'
import { Redirect } from 'react-router-dom'
import { Header } from '../../components/Header'
import { setPage } from '../../redux/actions/currentPage'
interface DashboardProps {
  setExpiryTime: (time: number) => void
  isValidSession: () => boolean
}

export const Dashboard = ({
  setExpiryTime,
  isValidSession,
}: DashboardProps) => {
  const dispatch = useDispatch()
  // const artists = useSelector((state: RootState) => state.artists)
  // const albums = useSelector((state: RootState) => state.albums)
  // const playlists = useSelector((state: RootState) => state.playlists)
  const tracks = useSelector((state: RootState) => state.tracks.data)
  const requesting = useSelector((state: RootState) => state.tracks.requesting)
  useEffect(() => {
    // dispatch(initiateGetResult('alpha'))
    // console.log(albums)
    console.log('Chay useEffect Dashboard')
    dispatch(loadTrack())
    dispatch(setPage('topSongs'))
  }, [])
  return isValidSession() ? (
    <div className="flex flex-col text-white bg-black min-h-screen">
      <Header />
      <div className="w-full">
        <CardList content={tracks} />
      </div>
    </div>
  ) : (
    <Redirect to="/auth" />
  )
}
