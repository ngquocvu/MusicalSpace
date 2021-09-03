import React from 'react'

interface Props {}

const Loading = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center text-5xl text-gray-50 ">
      <div className="animate-pulse font-serif"> ...</div>
    </div>
  )
}

export default Loading
