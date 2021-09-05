import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Card from '../../components/Card'
import CardList from '../../components/CardList'
import { Header } from '../../components/Header'
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
  const albums = useSelector((state: RootState) => state.albums)
  const tracks = useSelector((state: RootState) => state.tracks)
  const artists = useSelector((state: RootState) => state.artists)
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

        {tracks?.items[0]?.name !== '' ? (
          <>
            <CardList
              type={`Bài hát (${Number(tracks.total).toLocaleString()})`}
            >
              {tracks.items.map((track: any, index: number) => (
                <Card
                  key={index}
                  thumbnail={track.album.images[0].url}
                  title={track.name}
                  description={track.artists[0].name}
                  preview_url={track.preview_url}
                />
              ))}
            </CardList>
            <CardList
              type={`Albums (${Number(albums.total).toLocaleString()})`}
            >
              {albums.items.map((album: any, index: number) => (
                <Card
                  key={index}
                  thumbnail={album.images[0].url}
                  title={album.name}
                  description={album.artists[0].name}
                  preview_url={''}
                />
              ))}
            </CardList>
            <CardList
              type={`Nghệ sĩ (${Number(artists.total).toLocaleString()})`}
            >
              {artists.items.map((artist: any, index: number) => (
                <Card
                  key={index}
                  thumbnail={
                    artist.images.length != 0
                      ? artist.images[0].url
                      : 'https://via.placeholder.com/200'
                  }
                  title={artist.name}
                  preview_url={''}
                />
              ))}
            </CardList>
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
