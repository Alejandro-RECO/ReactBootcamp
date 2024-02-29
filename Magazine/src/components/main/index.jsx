import './index.scss'
import { 
  RiSeedlingLine,
  RiHomeHeartLine,
  RiShieldLine, 
  RiBearSmileLine} 
from "react-icons/ri";

import React from 'react'

const Main = () => {
  return (
    <main className='list-content'>
      <ul className='list-props'>
        <li className='prop'>
          <RiSeedlingLine className='prop-icon'/>
          <p className='prop-text'>Marmotas: Los vigilantes silbadores</p>
        </li>
        <li className='prop'>
          <RiHomeHeartLine  className='prop-icon'/>
          <p className='prop-text'>Hábitats: El hogar de la marmota</p>
        </li>
        <li className='prop'>
          <RiShieldLine  className='prop-icon'/>
          <p className='prop-text'>Conservación: Protegiendo a las marmotas y su entorno</p>
        </li>
        <li className='prop'>
          <RiBearSmileLine className='prop-icon'/>
          <p className='prop-text'>Rastros en la Naturaleza: Identificando a nuestros vecinos peludos</p>
        </li>
      </ul>
    </main>
  )
}

export default Main
