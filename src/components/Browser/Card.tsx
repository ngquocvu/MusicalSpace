import React from 'react'

interface CardProps {
  thumbnail: string
  title: string
  description?: string
  circle?: boolean
  preview_url?: string
}
const initialState = {
  thumbnail: '',
  title: '',
  description: '',
  preview_url: '',
}
const Card = ({
  thumbnail,
  title,
  description,
  preview_url,
}: CardProps = initialState) => {
  return (
    <div
      className="flex-shrink-0 w-36 sm:w-52"
      onClick={() => (window.location.href = preview_url || '#')}
    >
      <div className="rounded-md text-gray-200 bg-gray-900">
        <div className="group cursor-pointer relative p-2">
          <div className="absolute transition bg-gray-100 text-sm w-full text-center opacity-0 z-20 group-hover:opacity-100"></div>
          <img
            src={thumbnail}
            className="object-cover rounded-md object-center filter bg-gray-700 group-hover:opacity-50"
          />
        </div>
        <div className="space-y-1 font-bold px-2 pt-2 py-4 ">
          <div className="text-base truncate">{title}</div>
          <div className="text-xs text-gray-400 overflow-ellipsis truncate pb-2 font-normal ">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
