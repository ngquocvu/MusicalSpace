import React, { useEffect, useState } from 'react'
import { FEATURE_PLAYLIST_URL } from '../../utils/constants'
import { get } from '../../utils/functions'
import { FeaturePlaylistProps } from '../../utils/interfaces'
import Card from './Card'
interface Props {}

const FeaturePlaylists = ({}: Props) => {
  const [featurePlaylist, setFeaturePlaylist] = useState<FeaturePlaylistProps>({
    message: '',
    playlists: {
      items: [
        {
          name: '',
          images: [{ url: '' }],
          description: '',
          external_urls: { spotify: '' },
        },
      ],
    },
  })

  const getFeaturedPlayLists = async () => {
    try {
      const response = await get(FEATURE_PLAYLIST_URL)
      setFeaturePlaylist(response)
      console.log(response)
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    getFeaturedPlayLists()
  }, [])

  return !!featurePlaylist.playlists.items[0].images[0].url ? (
    <>
      <div className="font-bold text-gray-100 sm:text-2xl text-xl pt-2 px-2 md:mb-1 rounded-md">
        Dành cho bạn
      </div>
      <div className="sm:grid flex sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:overflow-auto overflow-scroll sm:place-items-center ">
        {featurePlaylist.playlists.items.map((playlist, index) => (
          <Card
            key={index}
            thumbnail={playlist.images[0].url}
            title={playlist.name}
            description={playlist.description}
            preview_url={playlist.external_urls.spotify}
          />
        ))}
      </div>
    </>
  ) : (
    <div></div>
  )
}
export default FeaturePlaylists
