import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'
import Play from '../assets/images/play.png'
import Pause from '../assets/images/pause.png'
import './styles.css'

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

  return (
    <div className="fixed w-full bg-transparent h-24 bottom-0">
      {currentTrack.preview_url ? (
        <audio
          ref={audioPlayer}
          src={currentTrack.preview_url}
          onEnded={() => {
            setIsPlaying(false)
          }}
        ></audio>
      ) : (
        <></>
      )}
      <div className="w-full bottom-0 h-24 relative">
        <div className="absolute bg-gray-800 w-full h-16 md:h-20 flex items-center justify-start space-x-4 pl-8 bottom-0">
          <div
            className="font-normal flex-shrink-0 flex h-9 w-9 bg-white text-sm rounded-full justify-center items-center cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <img src={Pause} className="h-3 w-3" />
            ) : (
              <img src={Play} className="h-3 w-3" />
            )}
          </div>
          <div className="flex flex-shrink-0 flex-col text-left w-full ">
            <div className="font-bold text-gray-100 text-base  w-1/2 truncate">
              {currentTrack.title}
            </div>
            <div className="font-normal text-gray-200 text-xs w-1/2 truncate">
              {currentTrack.artist}
            </div>
          </div>
        </div>
        <img
          onClick={() => setIsPlaying(!isPlaying)}
          src={currentTrack.thumbnail}
          className={`absolute flex ${
            isPlaying ? 'animate-spin-slow' : ''
          } cursor-pointer hover:scale-110 transition-transform duration-100 bg-gray-50 font-mono text-xl  md:w-28 md:h-28 w-16 h-16  justify-center items-center rounded-full right-5 bottom-4`}
        ></img>
      </div>
    </div>
  )
}

export default MusicControl
