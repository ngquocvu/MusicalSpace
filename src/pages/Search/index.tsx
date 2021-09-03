import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Header } from '../../components/Header'
import CardList from '../../components/SearchPage/CardList'
import { setPage } from '../../redux/actions/currentPage'
import { initiateGetResult, setTracks } from '../../redux/actions/search'
import { setSearchPhrase } from '../../redux/actions/searchPhrase'

import { RootState } from '../../redux/reducers'
import Suggestion from './Suggestion'

interface Props {
  isValidSession: () => boolean
}

const Search = ({ isValidSession }: Props) => {
  const dispatch = useDispatch()
  const searchPhrase = useSelector((state: RootState) => state.searchPhrase)
  //const albums = useSelector((state: RootState) => state.albums)
  const tracks = useSelector((state: RootState) => state.tracks)
  useEffect(() => {
    dispatch(setPage('search'))
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchPhrase === ''
        ? dispatch(
            setTracks({
              items: [
                {
                  name: '',
                },
              ],
            })
          )
        : dispatch(initiateGetResult(searchPhrase))
    }, 500)
    return () => clearTimeout(timeout)
  }, [searchPhrase])

  return isValidSession() ? (
    <>
      <div className="text-gray-200 space-y-2 py-2 font-semibold">
        <input
          className="w-full bg-gray-800 p-2 rounded-md pl-3 font-semibold ring-2 ring-green-700 focus:ring-green-500"
          placeholder="Tìm kiếm bài hát, ca sĩ, album,..."
          defaultValue={searchPhrase}
          onChange={(event) => {
            dispatch(setSearchPhrase(event.target.value))
          }}
        />

        {tracks.items[0].name !== '' ? (
          <>
            <CardList type="Kết quả tìm kiếm" content={tracks} />
          </>
        ) : (
          <Suggestion />
        )}
      </div>
    </>
  ) : (
    <Redirect to="/auth" />
  )
}

export default Search
