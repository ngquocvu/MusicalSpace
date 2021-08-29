import React, { useState } from 'react'

interface Props {
  track: any
}

const Card = ({ track }: Props) => {
  return (
    <div
      className="rounded-md bg-gray-900"
      onClick={() => (window.location.href = track.external_urls.spotify)}
    >
      <div className="group cursor-pointer relative px-3 pt-3">
        <div className="absolute bottom-5 p-2 transition text-sm w-full text-center opacity-0 z-20 group-hover:opacity-100">
          <div className="font-bold">{track.title}</div>
          <div className="text-xs">{track.artist}</div>
        </div>
        <img
          src={track.album.images[0].url}
          className="object-cover rounded-md w-full h-full object-center filter bg-black group-hover:opacity-50"
        ></img>
      </div>
      <div className="space-y-1 px-2 py-3 ">
        <div className="text-base truncate">{track.name}</div>
        <div className="text-xs text-gray-400">{track.artists[0].name}</div>
      </div>
    </div>
  )
}

export default Card
