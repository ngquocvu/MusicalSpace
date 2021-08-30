import React from 'react'

interface SuggestionProps {}

const Suggestion = (props: SuggestionProps) => {
  return (
    <div className="space-y-4 pt-2">
      <div className="text-2xl"></div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
        <div>Chưa có nội dung tìm kiếm</div>
      </div>
    </div>
  )
}

export default Suggestion
