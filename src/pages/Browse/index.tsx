import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Categories from '../../components/Browser/Categories'
import FeaturePlaylists from '../../components/Browser/FeaturePlaylists'
import NewReleases from '../../components/Browser/NewReleases'
import { setPage } from '../../redux/actions/currentPage'

interface BrowseProps {
  isValidSession: () => boolean
}

const Browse = ({ isValidSession }: BrowseProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPage('browse'))
  }, [])

  return isValidSession() ? (
    <div className="space-y-2 sm:px-4">
      <FeaturePlaylists />
      <NewReleases />
      <Categories />
    </div>
  ) : (
    <Redirect to="/auth" />
  )
}

export default Browse
