import { useState } from "react"
import { getTickets } from "./services/httpverbs"

const App = () => {

  const tickets = getTickets();

  return (
    <>
      {
        tickets.map((item) =>(
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))
      }
    </>
  )
}

export default App

