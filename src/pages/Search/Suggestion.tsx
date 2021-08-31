import React from 'react'

interface SuggestionProps {}

const Suggestion = (props: SuggestionProps) => {
  return (
    <div className="space-y-4 pt-2">
      <div className="text-xl"> Chưa có nội dung tìm kiếm</div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2"></div>
    </div>
  )
}

export default Suggestion
