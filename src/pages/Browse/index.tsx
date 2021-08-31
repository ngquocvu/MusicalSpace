import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
        description: string
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
      items: [{ name: '', images: [{ url: '' }], description: '' }],
    },
  })

  const getFeaturedPlayLists = async () => {
    try {
      const response = await get(
        '	https://api.spotify.com/v1/browse/featured-playlists?limit=5&offset=4&country=vn&locale=vn_VN' +
          '&timestamp=' +
          new Date().toISOString()
      )
      setFeaturePlaylist(response)
    } catch (error) {
      console.log('Error', error)
    }
  }
  useEffect(() => {
    getFeaturedPlayLists()
    dispatch(setPage('browse'))
  }, [])

  return isValidSession() ? (
    <>
      {featurePlaylist.playlists.items[0].images[0].url !== '' ? (
        <>
          <div className="font-bold text-gray-100 sm:text-2xl text-xl p-3 md:mb-2 rounded-md ">
            Dành cho bạn
          </div>
          <div className="sm:grid flex sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:overflow-auto overflow-scroll">
            {featurePlaylist.playlists.items.map((playlist, index) => (
              <div key={index} className="flex-shrink-0 w-56 sm:w-full">
                <div className="rounded-md text-gray-200 bg-gray-900">
                  <div className="group cursor-pointer relative ">
                    <div className="absolute transition bg-gray-100 text-sm w-full text-center opacity-0 z-20 group-hover:opacity-100"></div>
                    <img
                      src={playlist.images[0].url}
                      className="object-cover rounded-t-lg  object-center filter bg-gray-700 group-hover:opacity-50 h-40 w-full"
                    />
                  </div>
                  <div className="space-y-1 font-bold px-2 py-3 ">
                    <div className="text-base  truncate">{playlist.name}</div>
                    <div className="text-xs text-gray-400 overflow-ellipsis truncate pb-2">
                      {playlist.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  ) : (
    <Redirect to="/auth" />
  )
}

export default Browse
