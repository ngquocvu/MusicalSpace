import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import CardList from '../../components/CardList'
import { setCurrentTrack } from '../../redux/actions/currentTrack'
import { PLAYLIST_DEFAULT_URL } from '../../utils/constants'
import { get } from '../../utils/functions'
import { PlaylistDetailProps } from '../../utils/interfaces'

interface Props {
  isValidSession: () => boolean
}
export interface RouteParamsProps {
  id: string
}

const initialState = {
  name: '',
  description: '',
  images: [{ url: '' }],
  tracks: {
    items: [
      {
        track: {
          preview_url: '',
          name: '',
          artists: [{ name: '' }],
          album: {
            images: [{ url: '' }],
          },
        },
      },
    ],
  },
}

const Playlist = ({ isValidSession }: Props) => {
  const { id } = useParams<RouteParamsProps>()
  const dispatch = useDispatch()
  const [playlist, setPlaylist] = useState<PlaylistDetailProps>(initialState)
  const history = useHistory()

  const getDetailsOfPlaylist = async () => {
    try {
      const data = await get(PLAYLIST_DEFAULT_URL + id)
      setPlaylist(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetailsOfPlaylist()
  }, [])

  const onTrackClick = (
    preview_url: string,
    title: string,
    thumbnail: string,
    artist: string
  ) => {
    if (preview_url !== undefined && preview_url !== null) {
      console.log(preview_url)
      dispatch(
        setCurrentTrack({
          preview_url: preview_url || '',
          title,
          thumbnail,
          artist: artist || '',
        })
      )
    }
  }
  return isValidSession() ? (
    playlist.tracks.items[0].track.name !== '' ? (
      <>
        <button
          className=" font-bold text-gray-200 bg-gray-700 px-3 py-2 rounded-md mb-2"
          onClick={() => history.goBack()}
        >
          {'Trở về'}
        </button>
        <div className="flex flex-col px-2 space-y-4 justify-center text-gray-200  items-center">
          <img src={playlist.images[0].url} className="w-48 h-48 rounded-md" />
          <p className="text-2xl font-bold">{playlist.name}</p>
          <p className="text-base bg-gray-800 p-2 rounded-md">
            {playlist.description}
          </p>
          <div className="flex flex-col w-full">
            {playlist.tracks.items.map((item: any, index: number) => (
              <div
                key={index}
                className="cursor-pointer flex border-b space-x-2 border-gray-600 py-2 px-1  items-center w-full hover:bg-gray-800"
                onClick={() =>
                  onTrackClick(
                    item.track.preview_url,
                    item.track.name,
                    item.track.album.images[0].url,
                    item.track.artists[0].name
                  )
                }
              >
                <div className="w-6 md:w-12 text-gray-300 font-bold">
                  {++index}
                </div>
                <img
                  src={item.track.album.images[0].url}
                  className="w-12 h-12 rounded-md"
                />
                <div className="flex flex-col w-6/24">
                  <div>{item.track.name}</div>
                  <div className="space-x-4 text-sm flex text-gray-400">
                    {item.track.artists.map((artist: any) => artist.name)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    ) : (
      <></>
    )
  ) : (
    <Redirect to="/auth" />
  )
}
export default Playlist
