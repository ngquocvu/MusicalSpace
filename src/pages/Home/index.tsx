const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL, REACT_APP_REDIRECT_URL } =
  process.env;
const handleLogin = () => {
  window.location.href = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
};
const Home = () => {
  return (
    <div className="container p-6 mx-auto flex justify-center text-center">
      <button
        className="bg-green-400 p-4 w-full md:w-1/2 rounded-full font-semibold text-gray-50 text-lg cursor-pointer shadow-inner hover:shadow-md animate-pulse"
        onClick={handleLogin}
      >
        Login to spotify
      </button>
    </div>
  );
};

export default Home;
