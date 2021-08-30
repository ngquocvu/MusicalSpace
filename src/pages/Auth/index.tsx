import { Redirect } from 'react-router-dom'
const handleLogin = () => {
  window.location.href = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=user-read-private%20user-read-email%20user-top-read%20playlist-modify-public&response_type=token&show_dialog=true`
}
interface AuthProps {
  setExpiryTime: (time: number) => void
  isValidSession: () => boolean
}

export const Auth = ({ setExpiryTime, isValidSession }: AuthProps) => {
  return !isValidSession() ? (
    <div className=" mx-auto flex flex-col items-center pt-12 min-h-screen space-y-4 ">
      <div className="text-2xl font-bold  text-gray-200">Đăng nhập </div>
      <button
        className="bg-green-600 p-3 w-full md:w-1/3 rounded-full font-semibold text-gray-50 text-base cursor-pointer shadow-inner hover:shadow-md "
        onClick={handleLogin}
      >
        Cấp quyền thông qua spotify
      </button>
      <div className="text-gray-300 md:w-1/3 text-sm text-center w-full bg-gray-800 rounded-lg p-6">
        Để lấy được dữ liệu về âm nhạc, website dùng Spotify API's do Spotify
        cung cấp.
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  )
}

export default Auth
