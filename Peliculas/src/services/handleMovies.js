
export const handleRandomMovie = (movies)=>{
  const alreadySelected = []

  let indexMovie = getRandomInt(movies.length)

  while (alreadySelected.includes(indexMovie)){
    indexMovie = getRandomInt(movies.length)
  }

  alreadySelected.push(indexMovie)

  const movie = movies[indexMovie]
  
  return movie
}

const getRandomInt = (max) =>{
  return Math.floor(Math.random() * max)
}