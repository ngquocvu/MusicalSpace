import React from 'react'
import FeaturePlaylists from '../../components/Browser/FeaturePlaylists'

interface SuggestionProps {}

const Suggestion = (props: SuggestionProps) => {
  return (
    <div className="space-y-4">
      <FeaturePlaylists />
    </div>
  )
}

export default Suggestion
