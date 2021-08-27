import React from 'react'
import { Container, Description, Title } from './styles'

interface CardProps {
  thumbnail: string
  title: string
  artist: string
}
const Card = ({ thumbnail, title, artist }: CardProps) => {
  return (
    <div className="group cursor-pointer relative">
      <div className="absolute bottom-5 p-2 text-sm w-full text-center opacity-0 z-20 group-hover:opacity-100">
        <div className="font-bold">{title}</div>
        <div className="text-xs">{artist}</div>
      </div>

      <img
        src={thumbnail}
        className="object-cover w-50 h-50 object-center w-full filter bg-black group-hover:opacity-50"
      ></img>
    </div>
  )
}

export default Card
