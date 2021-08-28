import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../../components/Header'
import { setPage } from '../../redux/actions/currentPage'

interface Props {
  isValidSession: () => boolean
}

const Browser = ({ isValidSession }: Props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPage('browser'))
  }, [])
  return (
    <>
      <Header />
      <div className="text-gray-200 font-semibold">
        Trang đang được phát triển
      </div>
    </>
  )
}

export default Browser
