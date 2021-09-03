import React, { Children } from 'react'

interface CardListProps {}

const CardList = ({ type, children }: any) => {
  return (
    <>
      <div className="font-bold flex justify-between items-center text-gray-100 sm:text-2xl text-xl pt-2 px-2 md:mb-1 rounded-md">
        <div>{type}</div>
        <div className="text-sm font-semibold cursor-pointer text-gray-300">
          Xem thêm
        </div>
      </div>
      <div className="sm:grid flex sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 sm:overflow-auto overflow-scroll sm:place-items-center ">
        {children}
      </div>
    </>
  )
}

export default CardList
