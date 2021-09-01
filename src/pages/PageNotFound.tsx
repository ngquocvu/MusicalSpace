import { Link } from 'react-router-dom'
export const PageNotFound = () => {
  return (
    <div className="text-gray-200">
      Page Not Found
      <Link to="/">Home page</Link>
    </div>
  )
}
