export interface FeaturePlaylistProps {
  message: string
  playlists: {
    items: [
      {
        id: string
        tracks: {
          href: string
        }
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
export interface PlaylistDetailProps {
  name: string
  description: string
  images: {
    url: string
  }[]
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
