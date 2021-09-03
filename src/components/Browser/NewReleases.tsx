import React, { useEffect, useState } from 'react'
import { NEW_RELEASES_URL } from '../../utils/constants'
import { get } from '../../utils/functions'
import { AlbumProps } from '../../utils/interfaces'
import Card from '../Card'
import CardList from '../CardList'
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
      <CardList type="Mới ra mắt">
        {featurePlaylist.albums.items.map((albums, index) => (
          <Card
            key={index}
            thumbnail={albums.images[0].url}
            title={albums.name}
            description={albums.artists[0].name}
            preview_url={albums.external_urls.spotify}
          />
        ))}
      </CardList>
    </>
  ) : (
    <div></div>
  )
}
export default FeaturePlaylists
