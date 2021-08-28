import { Redirect } from 'react-router-dom'
const handleLogin = () => {
  window.location.href = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=user-read-private%20user-read-email%20user-top-read&response_type=token&show_dialog=true`
}
interface AuthProps {
  setExpiryTime: (time: string) => void
  isValidSession: () => boolean
}

export const Auth = ({ setExpiryTime, isValidSession }: AuthProps) => {
  return !isValidSession() ? (
    <div className="container p-6 mx-auto flex items-center justify-center text-center">
      <button
        className="bg-green-400 p-4 w-full md:w-1/2 rounded-full font-semibold text-gray-50 text-lg cursor-pointer shadow-inner hover:shadow-md animate-pulse"
        onClick={handleLogin}
      >
        Login to spotify
      </button>
    </div>
  ) : (
    <Redirect to="/" />
  )
}

export default Auth
