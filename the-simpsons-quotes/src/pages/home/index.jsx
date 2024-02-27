import './index.scss'
import Card from '../../components/Card';


import { useEffect, useState } from 'react'
import { RiAlignRight } from "react-icons/ri";
import { getQuotes, getQuotesByCharacter } from './services/homeServices.js';
import { useDebounce } from 'use-debounce';

const Home = () => {

  const[toggleButton, setToggleButton] = useState(true)
  const[dataApi, setDataApi] = useState([])
  const[isLoading, setIsILoading] = useState(true)
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 1000)

  const handleInputValue = (e)=>{
    const value = e.target.value
    setInputValue(value)
  }

  // const result = whitResult
  const handleObservables = (observable)=>{
    setIsILoading(true)
    setToggleButton(true)

    observable.then(result =>{
      setDataApi(result)
      setIsILoading(false)
      setToggleButton(false)
    })
  }
  // console.log(debouncedValue);
  
  const handleClick = () =>{
    setToggleButton(true)
    setIsILoading(true)
  }
  
  useEffect(() =>{
    if(toggleButton){
      // handleObservables(getQuotes())
      handleObservables(getQuotesByCharacter(debouncedValue)) 
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
            onChange={handleInputValue}
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
