import React from 'react'
import Card from '../Card'

interface CardListProps {
  content: {
    items: {
      artists: {
        name: string
      }[]
      name: string
      album: {
        images: {
          url: string
        }[]
      }
      preview_url: string
    }[]
  }
}

export const CardList = ({ content }: CardListProps) => {
  return (
    <div className="w-full  grid lg:grid-cols-6 md:grid-cols-6 grid-cols-3">
      {content.items.map((item, index) => (
        <Card
          key={index}
          thumbnail={item.album.images[0].url}
          title={item.name}
          artist={item.artists[0].name}
        />
      ))}
    </div>
  )
}
