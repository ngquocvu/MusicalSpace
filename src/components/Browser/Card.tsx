import React, { useEffect, useState } from 'react'

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
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 200)
  }, [])
  return (
    <div
      className="flex-shrink-0 w-36 sm:w-full"
      onClick={() => (window.location.href = preview_url || '#')}
    >
      <div className="rounded-md text-gray-200 bg-gray-900">
        <div className="group cursor-pointer relative p-2">
          <div className="absolute transition bg-gray-100 text-sm w-full text-center opacity-0 z-20 group-hover:opacity-100"></div>
          {isLoaded ? (
            <img
              src={thumbnail}
              className="object-cover rounded-md object-center sm:h-48 h-36 w-full filter bg-gray-700 group-hover:opacity-50"
            />
          ) : (
            <div className="h-36 md:h-48 animate-pulse w-full bg-gray-700"></div>
          )}
        </div>
        <div className="space-y-1 font-bold px-2 pt-2 py-2 ">
          <div
            className={`text-base truncate ${
              description ? '' : 'text-center text-lg'
            }`}
          >
            {title}
          </div>
          {description ? (
            <div className="text-xs text-gray-400 overflow-ellipsis truncate pb-2 font-normal ">
              {description}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
