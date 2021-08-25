import React from 'react'
import { Container, Description, Title } from './styles'

interface CardProps {
  thumbnail: string
  title: string
  artist: string
}
const Card = ({ thumbnail, title, artist }: CardProps) => {
  return (
    <div className="bg-gray-50 p-3 w-60 c rounded-md shadow-lg">
      <div className="mb-2">
        <img
          src={thumbnail}
          className="h-48 object-cover object-center w-full rounded-sm"
        ></img>
      </div>
      <div className="bg-transparent text-lg text-gray-900 font-bold mb-1s">
        {title}
      </div>
      <div className="text-sm bg-transparent text-gray-600 font-semibold ">
        {artist}
      </div>
    </div>
  )
}

export default Card
