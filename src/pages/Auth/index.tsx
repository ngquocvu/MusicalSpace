import { Redirect } from 'react-router-dom'
const handleLogin = () => {
  window.location.href = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=user-read-private%20user-read-email%20user-top-read&response_type=token&show_dialog=true`
}
interface AuthProps {
  setExpiryTime: (time: number) => void
  isValidSession: () => boolean
}

export const Auth = ({ setExpiryTime, isValidSession }: AuthProps) => {
  return !isValidSession() ? (
    <div className=" mx-auto flex flex-col items-center justify-center">
      <div className="text-2xl font-bold  text-gray-200 pb-4">Đăng nhập </div>
      <button
        className="bg-green-500 p-4 w-full md:w-1/2 rounded-full font-semibold text-gray-50 text-lg cursor-pointer shadow-inner hover:shadow-md "
        onClick={handleLogin}
      >
        Đăng nhập qua Spotify
      </button>
    </div>
  ) : (
    <Redirect to="/" />
  )
}

export default Auth
