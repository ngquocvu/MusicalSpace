import React from 'react'
import Card from '../Card'

interface CardListProps {
  content: {
    items: {
      album_type: string
      artists: {
        name: string
      }[]
      name: string
      images: {
        url: string
      }[]
      release_date: string
    }[]
  }
}

export const CardList = ({ content }: CardListProps) => {
  return (
    <>
      {content.items.slice(1, 5).map((item, index) => (
        <Card
          key={index}
          thumbnail={item.images[0].url}
          title={item.name}
          artist={item.artists[0].name}
        />
      ))}
    </>
  )
}
