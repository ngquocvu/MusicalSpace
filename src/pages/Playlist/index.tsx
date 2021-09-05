import React, { useEffect, useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import CardList from '../../components/CardList'
import { PLAYLIST_DEFAULT_URL } from '../../utils/constants'
import { get } from '../../utils/functions'

interface Props {
  isValidSession: () => boolean
}
export interface RouteParamsProps {
  id: string
}
export interface PlaylistProps {
  tracks: {
    items: {
      track: {
        preview_url: string
        name: string
        artists: {
          name: string
        }[]
        album: {
          images: {
            url: string
          }[]
        }
      }
    }[]
  }
}

const initialState = {
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
  const [playlist, setPlaylist] = useState<PlaylistProps>(initialState)
  const history = useHistory()

  const getPlaylistDetail = async () => {
    try {
      const data = await get(PLAYLIST_DEFAULT_URL + id)
      setPlaylist(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPlaylistDetail()
  }, [])

  return isValidSession() ? (
    playlist.tracks.items[0].track.name !== '' ? (
      <>
        <button
          className="px-2 font-bold text-gray-200"
          onClick={() => history.goBack()}
        >
          {'Trở về'}
        </button>
        <CardList type={``}>
          {playlist.tracks.items.map((item: any, index: number) => (
            <Card
              key={index}
              thumbnail={item.track.album.images[0].url}
              title={item.track.name}
              description={item.track.artists[0].name}
              preview_url={item.track.preview_url}
            />
          ))}
        </CardList>
      </>
    ) : (
      <></>
    )
  ) : (
    <Redirect to="/auth" />
  )
}

export default Playlist
