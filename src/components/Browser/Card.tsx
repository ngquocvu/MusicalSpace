import React, { useEffect, useState } from 'react'
import './index.css'
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
    <div className="flex-shrink-0 h-full w-36 sm:w-full group cursor-pointer transform hover:scale-95 duration-200">
      <div
        className=" rounded-md pb-4 text-gray-200 h-full bg-gray-800 shadow-lg group-hover:bg-gray-700 transition-colors duration-200 ease-in-out"
        onClick={() => (window.location.href = preview_url || '#')}
      >
        <div className="cursor-pointer  p-4">
          {isLoaded ? (
            <a className="relative sm:h-48 h-32 w-full flex">
              <img
                src={thumbnail}
                className="object-cover absolute  rounded-lg object-center sm:h-48 h-32 w-full filter  group-hover:opacity-80"
              />
              {/* <div className="items-center flex justify-center  font-bold text-xs absolute bottom-2 rounded-full group-hover:opacity-100 opacity-0 transition ease-in-out duration-200 bg-green-600 h-12 w-12 right-2">
                PLAY
              </div> */}
            </a>
          ) : (
            <div className="h-32 md:h-48 animate-pulse w-full bg-gray-700"></div>
          )}
        </div>
        <div className="space-y-1  px-2 pt-2  font-bold">
          <div
            className={`text-sm   ${
              description ? '' : 'text-center text-base'
            } truncate`}
          >
            {title}
          </div>
          {description ? (
            <div className="text-xs text-gray-400 truncate-2 font-medium overflow-ellipsis  font-normal ">
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
