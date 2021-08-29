import React from 'react'
import TrackCard from './TrackCard'

interface CardListProps {
  type: string
  content: { items: [{ name: string }] }
}

const CardList = ({ type, content }: CardListProps) => {
  return content.items[0].name !== '.' ? (
    <div className="space-y-4 pt-2">
      <div className="text-2xl">{type}</div>
      <div className="grid md:grid-cols-7 grid-cols-2 gap-2">
        {content.items.map((each: any, index: number) => (
          <TrackCard track={each} key={index} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default CardList
