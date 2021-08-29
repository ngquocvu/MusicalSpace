import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components/Header'
import CardList from '../../components/SearchPage/CardList'
import { setPage } from '../../redux/actions/currentPage'
import { initiateGetResult } from '../../redux/actions/search'
import { RootState } from '../../redux/reducers'

interface Props {
  isValidSession: () => boolean
}

const Browser = ({ isValidSession }: Props) => {
  const dispatch = useDispatch()
  const [searchPhrase, setSearchPhrase] = useState('')
  const albums = useSelector((state: RootState) => state.albums)
  const tracks = useSelector((state: RootState) => state.tracks)
  useEffect(() => {
    dispatch(setPage('browser'))
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(initiateGetResult(searchPhrase))
    }, 500)
    return () => clearTimeout(timeout)
  }, [searchPhrase])

  return (
    <>
      <Header />
      <div className="text-gray-200 space-y-2 font-semibold">
        <input
          className="w-full bg-gray-700 p-2 rounded-md pl-3 font-semibold"
          placeholder="Aa"
          onChange={(event) => setSearchPhrase(event.target.value)}
        />
        <CardList type="Top results" content={tracks} />
        {/* <CardList type="Album" /> */}
      </div>
    </>
  )
}

export default Browser
