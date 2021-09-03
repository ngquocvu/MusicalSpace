import React, { useEffect, useState } from 'react'
import { FEATURE_PLAYLIST_URL } from '../../utils/constants'
import { get } from '../../utils/functions'
import { FeaturePlaylistProps } from '../../utils/interfaces'
import Card from '../Card'
import CardList from '../CardList'
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
      <CardList type="Dành cho bạn">
        {featurePlaylist.playlists.items.map((playlist, index) => (
          <Card
            key={index}
            thumbnail={playlist.images[0].url}
            title={playlist.name}
            description={playlist.description}
            preview_url={playlist.external_urls.spotify}
          />
        ))}
      </CardList>
    </>
  ) : (
    <div></div>
  )
}
export default FeaturePlaylists
