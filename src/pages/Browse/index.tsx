import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Header } from '../../components/Header'
import { setPage } from '../../redux/actions/currentPage'
import { get } from '../../utils/functions'

interface Props {
  isValidSession: () => boolean
}
interface FeaturePlaylistProps {
  message: string
  playlists: {
    items: [
      {
        name: string
        images: [
          {
            url: string
          }
        ]
      }
    ]
  }
}

const Browse = ({ isValidSession }: Props) => {
  const dispatch = useDispatch()
  const [featurePlaylist, setFeaturePlaylist] = useState<FeaturePlaylistProps>({
    message: '',
    playlists: {
      items: [
        {
          name: '',
          images: [{ url: '' }],
        },
      ],
    },
  })

  const getFeaturedPlayLists = async () => {
    const response = await get(
      '	https://api.spotify.com/v1/browse/featured-playlists?limit=20&offset=4&country=vn&locale=vn_VN'
    )
    setFeaturePlaylist(response)
    console.log(response)
  }
  useEffect(() => {
    getFeaturedPlayLists()
    dispatch(setPage('browse'))
  }, [])

  return isValidSession() ? (
    <>
      <Header />

      <div className="font-bold text-gray-100 text-lg my-2 px-3 py-2 md:mb-4 rounded-md bg-green-900">
        {featurePlaylist.message}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
        {featurePlaylist.playlists.items.map((playlist) => (
          <div>
            <div className="rounded-md text-gray-200 bg-gray-900">
              <div className="group cursor-pointer relative px-3 pt-3">
                <div className="absolute bottom-5 p-2 transition text-sm w-full text-center opacity-0 z-20 group-hover:opacity-100">
                  <div className="font-bold"></div>
                  <div className="text-xs"></div>
                </div>
                <img
                  src={playlist.images[0].url}
                  className="object-cover rounded-md w-full h-full object-center filter bg-black group-hover:opacity-50"
                ></img>
              </div>
              <div className="space-y-1 font-bold px-2 py-3 ">
                <div className="text-base  truncate">{playlist.name}</div>
                <div className="text-xs text-gray-400">{playlist.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <Redirect to="/auth" />
  )
}

export default Browse
