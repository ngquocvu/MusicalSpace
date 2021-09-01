export interface FeaturePlaylistProps {
  message: string
  playlists: {
    items: [
      {
        name: string
        description: string
        external_urls: {
          spotify: string
        }
        images: [
          {
            url: string
          }
        ]
      }
    ]
  }
}
export interface AlbumProps {
  albums: {
    items: [
      {
        name: string
        description: string
        external_urls: {
          spotify: string
        }

        artists: [
          {
            name: string
          }
        ]
        images: [
          {
            url: string
          }
        ]
      }
    ]
  }
}

export interface CategoriesProps {
  categories: {
    items: [
      {
        name: string
        icons: [
          {
            url: string
          }
        ]
      }
    ]
  }
}
