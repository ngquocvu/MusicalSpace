import React, { useEffect, useState } from 'react'
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
  const [playingTrack, setPlayingTrack] = useState('')
  let audio = new Audio()
  useEffect(() => {
    let audio = new Audio(playingTrack)
    if (playingTrack !== '') {
      audio.play()
    }
  }, [playingTrack])
  const playAudio = (url: string) => {
    if (!audio.paused) audio.pause()
    audio.src = url
    audio.play()
  }
  return (
    <div className="w-full grid lg:grid-cols-7 md:grid-cols-7 gap-2 grid-cols-3">
      {content.items.map((item, index) => (
        <Card
          key={index}
          thumbnail={item.album.images[0].url}
          title={item.name}
          artist={item.artists[0].name}
          previewURL={item.preview_url}
          playAudio={playAudio}
        />
      ))}
    </div>
  )
}
