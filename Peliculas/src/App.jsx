import { useState } from "react";
import { handleRandomMovie } from "./services/handleMovies"
import { movies } from "./utils/params";
import MyModal from "./components/modal";


function App() {
  const [dataMovie, setDataMovie] = useState([])
  const [attempts, setAttempts] = useState(3)
  const [points, setPoints] = useState(0)
  const [onChange, setOnChange] = useState('')
  const search = handleRandomMovie(movies)
  let [isOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }
  
  
  const searchMovie = () =>{
    setDataMovie(search)
    setIsOpen(false)

  }

  const refreshMovie = ()=>{
    handleGameOver()
    setDataMovie(search)
    setAttempts(attempts - 1)
  }

  const handleGameOver = () =>{
    if(!attempts){
      if(confirm("Game over, Total points: ", points)){
        window.location.reload()
        return
      }else{
        return
      }
    }
  }

  const handleIsMovie = ()=>{

    handleGameOver()

    const correctNameMovie = dataMovie.name.toLowerCase()

    const userInput = onChange.toLowerCase()


    if(correctNameMovie === userInput && attempts){
      setPoints(points + 10)
      alert("in good time you earn 10 points")
      searchMovie()
    }else{
      alert("you missed, you lose a point")
      setAttempts(attempts - 1)
    }
    setOnChange('')
  }

  const onChangueInput = (e)=>{
    setOnChange(e.target.value)
  }

  return (
    <section className="h-screen text-gray-100 bg-black p-3 font-mono tracking-wide">
      <div className='p-3 flex justify-between text-3xl font-bold'>
        <span>Lives {attempts}</span>
        <span>Points {points}</span>
      </div>
      <div className="flex flex-col gap-28 mt-20 items-center justify-center h-auto ">
        <h1 className="text-5xl font-bold text-orange-400">GUESS THE MOVIE</h1>
        <span className="text-6xl">{dataMovie.emoji}</span>
        <div className="flex items-center gap-x-4">
          <input 
            className="p-3 rounded-xl w-96 text-black outline-none"
            type="text" 
            placeholder="The Godfather..." 
            onChange={onChangueInput} 
            value={onChange} />
          <button 
            className="p-3 px-4 bg-green-600 rounded-xl"
            onClick={handleIsMovie}>Send</button>
          <button 
            className="p-3 px-4 text-1xl bg-red-500 rounded-xl font-bold"
            onClick={refreshMovie}>Refresh</button>
        </div>
      </div>
      <MyModal
        onClick={searchMovie}
        isOpen={isOpen}
        openModal={openModal}
        setIsOpen={setIsOpen}
      />
    </section>
  )
}

export default App
