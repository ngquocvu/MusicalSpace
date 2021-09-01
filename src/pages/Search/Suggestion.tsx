import React from 'react'
import Categories from '../../components/Browser/Categories'

interface SuggestionProps {}

const Suggestion = (props: SuggestionProps) => {
  return (
    <div className="space-y-4">
      <Categories />
    </div>
  )
}

export default Suggestion
