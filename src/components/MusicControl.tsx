import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'
import Play from '../assets/images/play.png'
import Pause from '../assets/images/pause.png'

interface Props {}

const MusicControl = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioPlayer = useRef<HTMLAudioElement>(null)
  const currentTrack = useSelector((state: RootState) => state.currentTrack)

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current?.play()
    } else {
      audioPlayer.current?.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (currentTrack.preview_url !== '') {
      audioPlayer.current?.pause()
      audioPlayer.current?.load()
      audioPlayer.current?.play()
      setIsPlaying(true)
    }
  }, [currentTrack.preview_url])

  return currentTrack.preview_url !== '' ? (
    <div className="fixed w-full bg-transparent h-24 bottom-0">
      <audio
        ref={audioPlayer}
        src={currentTrack.preview_url}
        onEnded={() => {
          setIsPlaying(false)
        }}
      ></audio>
      <div className="w-full bottom-0 h-24 relative">
        <div className="absolute bg-gray-700 w-full h-20 flex items-center justify-start space-x-4 px-4 bottom-0">
          <div
            className="font-normal flex h-8 w-8 bg-gray-50 text-sm rounded-full justify-center items-center cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <img src={Pause} className="h-3 w-3" />
            ) : (
              <img src={Play} className="h-5 w-5" />
            )}
          </div>
          <div className="flex flex-col text-left">
            <div className="font-bold text-gray-100 text-base">
              {currentTrack.title}
            </div>
            <div className="font-normal text-gray-200 text-xs">
              {currentTrack.artist}
            </div>
          </div>
        </div>

        <img
          onClick={() => setIsPlaying(!isPlaying)}
          src={currentTrack.thumbnail}
          className="absolute flex cursor-pointer hover:scale-110 bg-gray-100 font-mono text-xl  md:w-24 md:h-24 w-20 h-20  justify-center items-center rounded-full right-4 bottom-5"
        ></img>
      </div>
    </div>
  ) : (
    <> </>
  )
}

export default MusicControl
