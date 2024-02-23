import './index.scss'
import { useRef, useState } from 'react'

import { Link } from 'react-router-dom';
import { 
  RiVolumeDownLine,
  RiVolumeMuteLine 
} from "react-icons/ri";

const Index = () => {

  const audioRef = useRef(null)
  const [isMusic, setIsMusic] = useState(false)

  const togglePlay = ()=>{
    if(audioRef.current){
      if(isMusic){
        audioRef.current.pause();
      }else{
        audioRef.current.play();
      }
      setIsMusic(!isMusic)
    }
  }

  return (
    <main className='container__home'>
        <section className='container__section'>
          <section className='container__botonera'>
            <audio ref={audioRef} src="./sounds/intro.m4a" preload='auto'></audio>
            <button
              aria-label='Sound of intro the simpson'
              onClick={togglePlay}
              className='container__label'>
              {
              isMusic ? 
                <RiVolumeDownLine className='container__icon'/> :
                <RiVolumeMuteLine className='container__icon'/>
              }
            </button>
            <Link
              className='container__button'
              to={'home'}>INICIAR
            </Link>
        </section>
          <figure className='container__figures'>
            <img 
              aria-label='image of logo the simpson'
              src="./img/logo.png"
              alt="simpson logo" 
              className='container__logo' /> 
          </figure>
          <figure className='container__figures'>
            <img 
              aria-label='image of background the simpson'
              className='container__background'
              src="./img/background.png" 
              alt="simpson family" />
          </figure>
        </section>
    </main>
  )
}

export default Index
