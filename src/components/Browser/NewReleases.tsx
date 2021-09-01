import React, { useEffect, useState } from 'react'
import { FEATURE_PLAYLIST_URL, NEW_RELEASES_URL } from '../../utils/constants'
import { get } from '../../utils/functions'
import { AlbumProps } from '../../utils/interfaces'
import Card from './Card'
interface Props {}

const FeaturePlaylists = ({}: Props) => {
  const [featurePlaylist, setFeaturePlaylist] = useState<AlbumProps>({
    albums: {
      items: [
        {
          name: '',
          artists: [{ name: '' }],
          images: [{ url: '' }],
          description: '',
          external_urls: { spotify: '' },
        },
      ],
    },
  })

  const getFeaturedPlayLists = async () => {
    try {
      const response = await get(NEW_RELEASES_URL)
      setFeaturePlaylist(response)
      console.log(response)
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    getFeaturedPlayLists()
  }, [])

  return !!featurePlaylist.albums.items[0].images[0].url ? (
    <>
      <div className="font-bold text-gray-100 sm:text-2xl text-xl pt-2 px-2 rounded-md ">
        Mới ra mắt
      </div>
      <div className="sm:grid flex sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:overflow-auto overflow-scroll sm:place-items-center ">
        {featurePlaylist.albums.items.map((albums, index) => (
          <Card
            key={index}
            thumbnail={albums.images[0].url}
            title={albums.name}
            description={albums.artists[0].name}
            preview_url={albums.external_urls.spotify}
          />
        ))}
      </div>
    </>
  ) : (
    <div></div>
  )
}
export default FeaturePlaylists
