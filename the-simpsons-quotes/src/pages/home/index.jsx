import React, { useEffect, useState } from 'react'

import './index.scss'
import { RiAlignRight } from "react-icons/ri";
import Card from '../../components/Card';
import { getQuotes } from './services/homeServices.js';

const Home = () => {
  const[toggleButton, setToggleButton] = useState(true)
  const[dataApi, setDataApi] = useState([])
  const[isLoading, setIsILoading] = useState(true)

  
  // const result = whitResult

  const handleClick = () =>{
    setToggleButton(true)
    setIsILoading(true)
  }
  useEffect(() =>{
    if(toggleButton){
      getQuotes().then(data =>{
        setDataApi(data)
        setIsILoading(false)
      })
      setToggleButton(false)
    }
  }, [dataApi, toggleButton, isLoading])

  return (
    <main className='home'>
      <section className='container container__black'>
        <header className='header'>
          <figure className='logo'>
            <img src="./img/logo.png" alt="simpson logo" />
          </figure>
          <button className='burger_menu'>
            <RiAlignRight />
          </button>
        </header>
        <section className='search_content'>
          <h2 className='subtitle'>Discover some Simpsons quotes</h2>
          <input 
            className='search_characters'
            type="text" 
            placeholder='Search'
          />
        </section>
          
          <section className='quotes_cards'>
          {
          dataApi.map((item) => {
            return (
                <Card
                  key={item.quote}
                  image={item.image}
                  name={item.character}
                  quote={item.quote} 
                  loading={isLoading}
                />
              )
            })
          }
          </section>

        <div className='quote_actions_content'>
          <button 
            onClick={handleClick}
            className='show-more'>
              Show me more
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
