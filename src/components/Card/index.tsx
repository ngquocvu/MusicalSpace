interface CardProps {
  thumbnail: string
  title: string
  artist: string
  previewURL: string
  playAudio: (url: string) => void
}
const Card = ({
  thumbnail,
  title,
  artist,
  previewURL,
  playAudio,
}: CardProps) => {
  return (
    <div
      className="group cursor-pointer relative"
      onClick={() => playAudio(previewURL)}
    >
      <div className="absolute bottom-5 p-2 text-sm w-full text-center opacity-0 z-20 group-hover:opacity-100">
        <div className="font-bold">{title}</div>
        <div className="text-xs">{artist}</div>
      </div>

      <img
        src={thumbnail}
        className="object-cover w-auto object-center filter bg-black group-hover:opacity-50"
      ></img>
    </div>
  )
}

export default Card
