import { useState } from "react"
import { getTickets } from "./services/httpverbs"
import FormTickets from "./form";

const App = () => {

  const tickets = getTickets();

  return (
    <section className="bg-gray-200/50 h-screen flex items-center justify-center">
     <FormTickets/>
    </section>
  )
}

export default App

